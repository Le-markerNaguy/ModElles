import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const ressource = await prisma.ressource.findUnique({
      where: { id: params.id }
    })

    if (!ressource) {
      return NextResponse.json(
        { success: false, error: "Ressource non trouvée" },
        { status: 404 }
      )
    }

    // Incrémenter le compteur de vues
    await prisma.ressource.update({
      where: { id: params.id },
      data: { vues: { increment: 1 } }
    })

    return NextResponse.json({ success: true, data: ressource })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}