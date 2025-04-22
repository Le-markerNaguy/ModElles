import { NextResponse } from 'next/server';
import { getAuthSession } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import twilio from 'twilio';

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const alerteSchema = z.object({
  message: z.string().min(5),
  location: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180)
  }),
  contacts: z.array(z.string().min(1)).min(1)
});

export async function POST(request: Request) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Non autorisé" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const parsed = alerteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { message, location, contacts } = parsed.data;

    // 1. Création de l'alerte
    const alerte = await prisma.Alerte.create({
      data: {
        userId: session.user.id,
        message,
        latitude: location.latitude,
        longitude: location.longitude,
        status: 'active'
      }
    });

    // 2. Notification des contacts
    if (contacts.length > 0) {
      const userContacts = await prisma.contactUrgence.findMany({
        where: {
          id: { in: contacts },
          userId: session.user.id
        }
      });

      await Promise.all(
        userContacts.map(async (contact) => {
          try {
            await twilioClient.messages.create({
              body: `ALERTE: ${session.user.prenom} ${session.user.nom} a besoin d'aide. Message: ${message}. Localisation: https://maps.google.com/?q=${location.latitude},${location.longitude}`,
              from: process.env.TWILIO_PHONE_NUMBER,
              to: contact.telephone
            });
          } catch (error) {
            console.error(`Échec d'envoi à ${contact.telephone}:`, error);
          }
        })
      );
    }

    return NextResponse.json({
      success: true,
      data: { id: alerte.id }
    });

  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { success: false, error: "Erreur interne" },
      { status: 500 }
    );
  }
}