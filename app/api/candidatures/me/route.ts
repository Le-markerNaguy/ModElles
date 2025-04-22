import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET(req: Request) {
  try {
    const session = await getAuthSession()
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Non autorisé" },
        { status: 401 }
      )
    }

    const candidatures = await prisma.candidature.findMany({
      where: { candidatId: session.user.id },
      include: {
        annonce: {
          select: {
            id: true,
            titre: true,
            type: true,
            date: true,
            lieu: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ success: true, data: candidatures })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}