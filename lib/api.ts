"use client"

// lib/api.ts
// Service pour interagir avec l'API

import { getFromStorage } from "./store"

// Types
type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

interface RequestOptions {
  headers?: Record<string, string>
  params?: Record<string, string>
  body?: any
  token?: string
}

interface ApiResponse<T = any> {
  data: T
  status: number
  headers: Headers
}

// Configuration de l'API
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.modelles.ga/v1"

// Fonction pour obtenir le token d'authentification
const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null

  // Récupérer l'utilisateur depuis le localStorage
  const user = getFromStorage("modelles_user", null)
  return user?.token || null
}

// Fonction principale pour effectuer des requêtes API
async function request<T = any>(
  endpoint: string,
  method: RequestMethod = "GET",
  options: RequestOptions = {},
): Promise<ApiResponse<T>> {
  const url = new URL(`${API_URL}${endpoint}`)

  // Ajouter les paramètres de requête si présents
  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })
  }

  // Préparer les en-têtes
  const headers = new Headers({
    "Content-Type": "application/json",
    ...options.headers,
  })

  // Ajouter le token d'authentification s'il existe
  const token = options.token || getAuthToken()
  if (token) {
    headers.append("Authorization", `Bearer ${token}`)
  }

  // Préparer les options de la requête
  const fetchOptions: RequestInit = {
    method,
    headers,
    credentials: "include",
  }

  // Ajouter le corps de la requête si nécessaire
  if (options.body && method !== "GET") {
    if (options.body instanceof FormData) {
      // Si c'est un FormData, ne pas définir Content-Type (le navigateur le fait automatiquement)
      headers.delete("Content-Type")
      fetchOptions.body = options.body
    } else {
      fetchOptions.body = JSON.stringify(options.body)
    }
  }

  try {
    const response = await fetch(url.toString(), fetchOptions)

    // Vérifier si la réponse est OK
    if (!response.ok) {
      // Essayer de parser l'erreur comme JSON
      try {
        const errorData = await response.json()
        throw new Error(errorData.message || `Erreur ${response.status}: ${response.statusText}`)
      } catch (e) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`)
      }
    }

    // Parser la réponse comme JSON si possible
    let data: T
    const contentType = response.headers.get("content-type")
    if (contentType && contentType.includes("application/json")) {
      data = await response.json()
    } else {
      data = (await response.text()) as unknown as T
    }

    return {
      data,
      status: response.status,
      headers: response.headers,
    }
  } catch (error) {
    console.error("Erreur API:", error)
    throw error
  }
}

// Méthodes API exposées
export const api = {
  get: <T = any>(endpoint: string, options: RequestOptions = {}) => request<T>(endpoint, "GET", options),

  post: <T = any>(endpoint: string, body: any, options: RequestOptions = {}) =>
    request<T>(endpoint, "POST", { ...options, body }),

  put: <T = any>(endpoint: string, body: any, options: RequestOptions = {}) =>
    request<T>(endpoint, "PUT", { ...options, body }),

  patch: <T = any>(endpoint: string, body: any, options: RequestOptions = {}) =>
    request<T>(endpoint, "PATCH", { ...options, body }),

  delete: <T = any>(endpoint: string, options: RequestOptions = {}) => request<T>(endpoint, "DELETE", options),

  // Méthodes spécifiques pour l'authentification
  login: async (email: string, password: string) => {
    const response = await request("/auth/login", "POST", {
      body: { email, password },
    })
    return response.data
  },

  register: async (userData: any) => {
    const response = await request("/auth/register", "POST", {
      body: userData,
    })
    return response.data
  },

  logout: async () => {
    const response = await request("/auth/logout", "POST")
    return response.data
  },

  // Méthode pour télécharger des fichiers
  upload: async (endpoint: string, file: File, additionalData: Record<string, any> = {}) => {
    const formData = new FormData()
    formData.append("file", file)

    // Ajouter des données supplémentaires si nécessaire
    Object.entries(additionalData).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const response = await request(endpoint, "POST", {
      body: formData,
    })

    return response.data
  },
}

// Hook personnalisé pour gérer les états de chargement et d'erreur
export function useApiRequest<T>(requestFn: () => Promise<ApiResponse<T>>, dependencies: any[] = []) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)

    requestFn()
      .then((response) => {
        if (isMounted) {
          setData(response.data)
          setError(null)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err)
          setData(null)
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, dependencies)

  return { data, isLoading, error, refetch: () => {} }
}

// Ajouter l'import manquant
import { useState, useEffect } from "react"
