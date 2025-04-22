import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const rdvSchema = z.object({
  type: z.string().min(2),
  professionnelId: z.string().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  heure: z.string().regex(/^\d{2}:\d{2}$/),
  motif: z.string().min(5)
})

export async function POST(req: Request) {
  try {
    const session = await getAuthSession()
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Non autorisé" },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { type, professionnelId, date, heure, motif } = rdvSchema.parse(body)

    // Vérifier la disponibilité
    const existingRdv = await prisma.rdv.findFirst({
      where: {
        professionnelId,
        date: new Date(date),
        heure
      }
    })

    if (existingRdv) {
      return NextResponse.json(
        { success: false, error: "Créneau déjà pris" },
        { status: 400 }
      )
    }

    const rdv = await prisma.rdv.create({
      data: {
        type,
        professionnel: professionnelId ? await getProfName(professionnelId) : "Mod'Elles",
        professionnelId,
        date: new Date(date),
        heure,
        motif,
        userId: session.user.id
      }
    })

    return NextResponse.json(
      { success: true, data: rdv },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

async function getProfName(id: string): Promise<string> {
  const user = await prisma.user.findUnique({
    where: { id },
    select: { nom: true, prenom: true }
  })
  return user ? `${user.prenom} ${user.nom}` : "Professionnel inconnu"
}