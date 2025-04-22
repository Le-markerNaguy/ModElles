import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const schema = z.object({
  annonceId: z.string(),
  action: z.enum(['approve', 'reject'])
})

export async function GET(req: Request) {
  try {
    const session = await getAuthSession()
    if (session?.user?.role !== 'ADMIN') {
      return NextResponse.json(
        { success: false, error: "Accès refusé" },
        { status: 403 }
      )
    }

    const annonces = await prisma.annonce.findMany({
      where: { status: 'pending' },
      include: {
        auteur: {
          select: {
            id: true,
            nom: true,
            prenom: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ success: true, data: annonces })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}

export async function PUT(req: Request) {
    try {
      const session = await getAuthSession()
      if (session?.user?.role !== 'ADMIN') {
        return NextResponse.json(
          { success: false, error: "Accès refusé" },
          { status: 403 }
        )
      }
  
      const body = await req.json()
      const { annonceId, action } = schema.parse(body)
  
      const annonce = await prisma.annonce.update({
        where: { id: annonceId },
        data: {
          status: action === 'approve' ? 'active' : 'rejected'
        }
      })
  
      // Créer une notification pour l'auteur
      await prisma.notification.create({
        data: {
          userId: annonce.auteurId,
          title: `Annonce ${action === 'approve' ? 'approuvée' : 'rejetée'}`,
          message: `Votre annonce "${annonce.titre}" a été ${action === 'approve' ? 'approuvée' : 'rejetée'}`,
          type: 'annonce',
          link: `/annonces/${annonce.id}`
        }
      })
  
      return NextResponse.json({
        success: true,
        data: { message: `Annonce ${action === 'approve' ? 'approuvée' : 'rejetée'}` }
      })
    } catch (error) {
      return NextResponse.json(
        { success: false, error: "Erreur serveur" },
        { status: 500 }
      )
    }
  }