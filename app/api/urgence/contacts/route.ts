import { NextRequest, NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { z } from 'zod'

// Schéma de validation avec messages d'erreur explicites
const contactSchema = z.object({
  nom: z.string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(50, { message: "Le nom ne peut excéder 50 caractères" }),
  prenom: z.string()
    .min(2, { message: "Le prénom doit contenir au moins 2 caractères" })
    .max(50, { message: "Le prénom ne peut excéder 50 caractères" }),
  telephone: z.string()
    .min(8, { message: "Le téléphone doit contenir au moins 8 caractères" })
    .max(20, { message: "Le téléphone ne peut excéder 20 caractères" })
    .regex(/^[0-9+]+$/, { message: "Numéro de téléphone invalide" }),
  relation: z.string()
    .min(2, { message: "La relation doit contenir au moins 2 caractères" })
    .max(50, { message: "La relation ne peut excéder 50 caractères" })
})

export async function GET(req: NextRequest) {
  try {
    const session = await getAuthSession(req)  // Passage de la requête
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Authentification requise" },
        { status: 401 }
      )
    }

    const contacts = await prisma.contactUrgence.findMany({
      where: { userId: session.user.id },
      orderBy: { nom: 'asc' },
      select: {
        id: true,
        nom: true,
        prenom: true,
        telephone: true,
        relation: true,
        createdAt: true
      }
    })

    return NextResponse.json({
      success: true,
      data: contacts.map(contact => ({
        ...contact,
        createdAt: contact.createdAt.toISOString()
      }))
    })
  } catch (error) {
    console.error('[CONTACTS_GET_ERROR]', error)
    return NextResponse.json(
      { 
        success: false, 
        error: "Une erreur est survenue lors de la récupération des contacts" 
      },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getAuthSession(req)
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Authentification requise" },
        { status: 401 }
      )
    }

    const body = await req.json()
    const validation = contactSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Données invalides",
          details: validation.error.flatten() 
        },
        { status: 400 }
      )
    }

    const { nom, prenom, telephone, relation } = validation.data

    const contact = await prisma.contactUrgence.create({
      data: {
        nom,
        prenom,
        telephone,
        relation,
        userId: session.user.id
      },
      select: {
        id: true,
        nom: true,
        prenom: true,
        telephone: true,
        relation: true
      }
    })

    return NextResponse.json(
      { success: true, data: contact },
      { status: 201 }
    )
  } catch (error) {
    console.error('[CONTACTS_POST_ERROR]', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Validation échouée", details: error.flatten() },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        error: "Une erreur est survenue lors de la création du contact" 
      },
      { status: 500 }
    )
  }
}