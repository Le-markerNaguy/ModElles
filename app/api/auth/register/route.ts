import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const registerSchema = z.object({
  nom: z.string().min(2),
  prenom: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  telephone: z.string().min(8)
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { nom, prenom, email, password, telephone } = registerSchema.parse(body)

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "Email déjà utilisé" },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        nom,
        prenom,
        email,
        password: hashedPassword,
        telephone,
        role: 'USER'
      }
    })

    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      { success: true, data: userWithoutPassword },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}