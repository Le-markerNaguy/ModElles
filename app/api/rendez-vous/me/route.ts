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

    const rendezVous = await prisma.rdv.findMany({
      where: { userId: session.user.id },
      orderBy: { date: 'asc' },
      include: {
        user: {
          select: {
            id: true,
            nom: true,
            prenom: true
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: rendezVous
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}