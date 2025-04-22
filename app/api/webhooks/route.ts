import { NextResponse } from 'next/server'
import crypto from 'crypto'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const signature = req.headers.get('x-modelles-signature')
    const body = await req.text()

    // Vérifier la signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.WEBHOOK_SECRET!)
      .update(body)
      .digest('hex')

    if (signature !== expectedSignature) {
      return NextResponse.json(
        { success: false, error: "Signature invalide" },
        { status: 401 }
      )
    }

    const event = JSON.parse(body)

    // Traiter les différents types d'événements
    switch (event.type) {
      case 'payment.succeeded':
        await handlePaymentSuccess(event.data)
        break
      case 'rdv.reminder':
        await handleRdvReminder(event.data)
        break
      default:
        console.warn('Événement webhook non géré:', event.type)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

async function handlePaymentSuccess(data: any) {
  await prisma.paiement.update({
    where: { id: data.paymentId },
    data: { status: 'completed' }
  })
}

async function handleRdvReminder(data: any) {
  await prisma.notification.create({
    data: {
      userId: data.userId,
      title: 'Rappel de rendez-vous',
      message: `Vous avez un rendez-vous ${data.type} prévu demain à ${data.heure}`,
      type: 'reminder',
      link: `/rendez-vous/${data.rdvId}`
    }
  })
}