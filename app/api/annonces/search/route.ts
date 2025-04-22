import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { AnnonceType } from '@prisma/client'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const query = {
      search: searchParams.get('search'),
      type: searchParams.get('type') as AnnonceType | null,
      categorie: searchParams.get('categorie'),
      lieu: searchParams.get('lieu'),
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || '10')
    }

    const where = {
      status: 'active',
      ...(query.search && {
        OR: [
          { titre: { contains: query.search, mode: 'insensitive' } },
          { description: { contains: query.search, mode: 'insensitive' } }
        ]
      }),
      ...(query.type && { type: query.type }),
      ...(query.categorie && { categories: { has: query.categorie } }),
      ...(query.lieu && { lieu: { contains: query.lieu, mode: 'insensitive' } })
    }

    const [annonces, total] = await Promise.all([
      prisma.annonce.findMany({
        where,
        skip: (query.page - 1) * query.limit,
        take: query.limit,
        orderBy: { createdAt: 'desc' },
        include: {
          auteur: {
            select: {
              id: true,
              nom: true,
              prenom: true,
              avatar: true
            }
          }
        }
      }),
      prisma.annonce.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: {
        annonces,
        pagination: {
          total,
          page: query.page,
          limit: query.limit,
          pages: Math.ceil(total / query.limit)
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