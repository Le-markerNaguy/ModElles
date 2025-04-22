import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req: Request) {
  try {
    const groupes = await prisma.groupe.findMany({
      where: { placesDisponibles: { gt: 0 } },
      include: {
        membres: {
          select: {
            id: true,
            prenom: true,
            avatar: true
          },
          take: 3
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ success: true, data: groupes })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}