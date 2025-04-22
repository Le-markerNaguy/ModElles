import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const annonce = await prisma.annonce.findUnique({
      where: { id: params.id },
      include: {
        auteur: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            avatar: true
          }
        },
        candidatures: {
          select: {
            id: true,
            createdAt: true
          }
        }
      }
    })

    if (!annonce) {
      return NextResponse.json(
        { success: false, error: "Annonce non trouvée" },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: annonce })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getAuthSession()
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Non autorisé" },
        { status: 401 }
      )
    }

    const annonce = await prisma.annonce.findUnique({
      where: { id: params.id }
    })

    if (!annonce) {
      return NextResponse.json(
        { success: false, error: "Annonce non trouvée" },
        { status: 404 }
      )
    }

    // Seul l'auteur ou un admin peut supprimer
    if (annonce.auteurId !== session.user.id && session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { success: false, error: "Non autorisé" },
        { status: 403 }
      )
    }

    await prisma.annonce.delete({
      where: { id: params.id }
    })

    return NextResponse.json({
      success: true,
      data: { message: "Annonce supprimée avec succès" }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}