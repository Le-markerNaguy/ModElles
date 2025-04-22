import { NextRequest, NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/prisma'

// Définir le type User pour une meilleure sécurité
type User = {
  id: string
  nom: string | null
  prenom: string | null
  email: string
  telephone: string | null
  role: string
  avatar: string | null
  dateInscription: Date
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Validation de l'ID
    if (!params.id || typeof params.id !== 'string') {
      return NextResponse.json(
        { success: false, error: "ID invalide ou manquant" },
        { status: 400 }
      )
    }

    const session = await getAuthSession(req)
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Non autorisé" },
        { status: 401 }
      )
    }

    // Vérification des permissions
    if (session.user.id !== params.id && session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { success: false, error: "Accès refusé" },
        { status: 403 }
      )
    }

    // Récupération de l'utilisateur avec typage explicite
    const user: User | null = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        nom: true,
        prenom: true,
        email: true,
        telephone: true,
        role: true,
        avatar: true,
        dateInscription: true
      }
    })

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Utilisateur non trouvé" },
        { status: 404 }
      )
    }

    // Conversion des dates si nécessaire
    const responseData = {
      ...user,
      dateInscription: user.dateInscription.toISOString()
    }

    return NextResponse.json({ success: true, data: responseData })
  } catch (error) {
    console.error('[USER_GET_ERROR]', error)
    return NextResponse.json(
      { success: false, error: "Erreur interne du serveur" },
      { status: 500 }
    )
  }
}