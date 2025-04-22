import { NextApiRequest } from 'next'
import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import prisma from './prisma'

interface JwtPayload {
  id: string
  role: string
  iat: number
  exp: number
}

export const verifyToken = (token: string): Promise<JwtPayload> => {
  return new Promise((resolve, reject) => {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in environment variables')
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return reject(err)
      resolve(decoded as JwtPayload)
    })
  })
}

export async function getAuthSession(req?: NextRequest | NextApiRequest) {
  try {
    // Récupération du token selon le type de requête
    let token: string | null | undefined = null

    if (req) {
      if (isNextRequest(req)) {
        // Cas des Route Handlers (App Router)
        token = req.headers.get('authorization')?.split(' ')[1]
      } else {
        // Cas des API Routes (Pages Router)
        token = req.headers.authorization?.split(' ')[1]
      }
    } else if (typeof window !== 'undefined') {
      // Cas client-side (optionnel)
      token = localStorage.getItem('token')
    }

    if (!token) return null

    // Vérification du token
    const decoded = await verifyToken(token)
    
    // Récupération de l'utilisateur
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        nom: true,
        prenom: true,
        email: true,
        role: true,
        avatar: true
      }
    })

    return user
  } catch (error) {
    console.error('Error in getAuthSession:', error)
    return null
  }
}

// Type guard pour différencier NextRequest de NextApiRequest
function isNextRequest(req: NextRequest | NextApiRequest): req is NextRequest {
  return typeof (req as NextRequest).headers?.get === 'function'
}