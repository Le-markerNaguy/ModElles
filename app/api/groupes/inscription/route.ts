import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const inscriptionSchema = z.object({
  groupeId: z.string(),
  motivation: z.string().min(10)
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
    const { groupeId, motivation } = inscriptionSchema.parse(body)

    const groupe = await prisma.groupe.findUnique({
      where: { id: groupeId }
    })

    if (!groupe) {
      return NextResponse.json(
        { success: false, error: "Groupe non trouvé" },
        { status: 404 }
      )
    }

    if (groupe.placesDisponibles <= 0) {
      return NextResponse.json(
        { success: false, error: "Plus de places disponibles" },
        { status: 400 }
      )
    }

    // Vérifier si déjà inscrit
    const existingInscription = await prisma.groupe.findFirst({
      where: {
        id: groupeId,
        membres: { some: { id: session.user.id } }
      }
    })

    if (existingInscription) {
      return NextResponse.json(
        { success: false, error: "Déjà inscrit à ce groupe" },
        { status: 400 }
      )
    }

    // Ajouter l'utilisateur au groupe
    await prisma.groupe.update({
      where: { id: groupeId },
      data: {
        membres: { connect: { id: session.user.id } },
        placesDisponibles: { decrement: 1 }
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        message: "Inscription réussie",
        groupe: {
          id: groupe.id,
          nom: groupe.nom,
          horaire: groupe.horaire
        }
      }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}