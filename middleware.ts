// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Votre logique de middleware ici
  return NextResponse.next()
}

// Configuration du matching
export const config = {
  matcher: ['/protected/:path*'], // Protège seulement certaines routes
}