"use client"

import { useState, useEffect, useCallback } from "react"
import { api } from "@/lib/api"
import { useAuth } from "@/contexts/AuthContext"

// Types génériques pour les différentes opérations API
type ApiState<T> = {
  data: T | null
  isLoading: boolean
  error: Error | null
}

type ApiActions<T, P = any> = {
  execute: (params?: P) => Promise<T | null>
  reset: () => void
}

// Hook pour les requêtes GET
export function useApiGet<T = any>(
  endpoint: string,
  options: {
    params?: Record<string, string>
    initialFetch?: boolean
    dependencies?: any[]
  } = {},
): ApiState<T> & ApiActions<T> {
  const { isAuthenticated } = useAuth()
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    isLoading: options.initialFetch !== false,
    error: null,
  })

  const execute = useCallback(
    async (params?: Record<string, string>): Promise<T | null> => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }))
      try {
        const mergedParams = { ...options.params, ...params }
        const response = await api.get<T>(endpoint, { params: mergedParams })
        setState({ data: response.data, isLoading: false, error: null })
        return response.data
      } catch (error) {
        const err = error instanceof Error ? error : new Error("Une erreur est survenue")
        setState((prev) => ({ ...prev, isLoading: false, error: err }))
        return null
      }
    },
    [endpoint, options.params],
  )

  const reset = useCallback(() => {
    setState({ data: null, isLoading: false, error: null })
  }, [])

  useEffect(() => {
    if (options.initialFetch !== false) {
      execute()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [execute, isAuthenticated, ...(options.dependencies || [])])

  return { ...state, execute, reset }
}

// Hook pour les requêtes POST
export function useApiPost<T = any, P = any>(
  endpoint: string,
  options: {
    onSuccess?: (data: T) => void
    onError?: (error: Error) => void
  } = {},
): ApiState<T> & ApiActions<T, P> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    isLoading: false,
    error: null,
  })

  const execute = useCallback(
    async (body?: P): Promise<T | null> => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }))
      try {
        const response = await api.post<T>(endpoint, body || {})
        setState({ data: response.data, isLoading: false, error: null })
        options.onSuccess?.(response.data)
        return response.data
      } catch (error) {
        const err = error instanceof Error ? error : new Error("Une erreur est survenue")
        setState((prev) => ({ ...prev, isLoading: false, error: err }))
        options.onError?.(err)
        return null
      }
    },
    [endpoint, options],
  )

  const reset = useCallback(() => {
    setState({ data: null, isLoading: false, error: null })
  }, [])

  return { ...state, execute, reset }
}

// Hook pour les requêtes PUT
export function useApiPut<T = any, P = any>(
  endpoint: string,
  options: {
    onSuccess?: (data: T) => void
    onError?: (error: Error) => void
  } = {},
): ApiState<T> & ApiActions<T, P> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    isLoading: false,
    error: null,
  })

  const execute = useCallback(
    async (body?: P): Promise<T | null> => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }))
      try {
        const response = await api.put<T>(endpoint, body || {})
        setState({ data: response.data, isLoading: false, error: null })
        options.onSuccess?.(response.data)
        return response.data
      } catch (error) {
        const err = error instanceof Error ? error : new Error("Une erreur est survenue")
        setState((prev) => ({ ...prev, isLoading: false, error: err }))
        options.onError?.(err)
        return null
      }
    },
    [endpoint, options],
  )

  const reset = useCallback(() => {
    setState({ data: null, isLoading: false, error: null })
  }, [])

  return { ...state, execute, reset }
}

// Hook pour les requêtes DELETE
export function useApiDelete<T = any>(
  endpoint: string,
  options: {
    onSuccess?: (data: T) => void
    onError?: (error: Error) => void
  } = {},
): ApiState<T> & ApiActions<T, string | number> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    isLoading: false,
    error: null,
  })

  const execute = useCallback(
    async (id?: string | number): Promise<T | null> => {
      const finalEndpoint = id ? `${endpoint}/${id}` : endpoint
      setState((prev) => ({ ...prev, isLoading: true, error: null }))
      try {
        const response = await api.delete<T>(finalEndpoint)
        setState({ data: response.data, isLoading: false, error: null })
        options.onSuccess?.(response.data)
        return response.data
      } catch (error) {
        const err = error instanceof Error ? error : new Error("Une erreur est survenue")
        setState((prev) => ({ ...prev, isLoading: false, error: err }))
        options.onError?.(err)
        return null
      }
    },
    [endpoint, options],
  )

  const reset = useCallback(() => {
    setState({ data: null, isLoading: false, error: null })
  }, [])

  return { ...state, execute, reset }
}

// Hook pour télécharger des fichiers
export function useApiUpload<T = any>(
  endpoint: string,
  options: {
    onSuccess?: (data: T) => void
    onError?: (error: Error) => void
    onProgress?: (progress: number) => void
  } = {},
): ApiState<T> & {
  upload: (file: File, additionalData?: Record<string, any>) => Promise<T | null>
  reset: () => void
} {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    isLoading: false,
    error: null,
  })

  const upload = useCallback(
    async (file: File, additionalData?: Record<string, any>): Promise<T | null> => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }))
      try {
        const response = await api.upload(endpoint, file, additionalData)
        setState({ data: response, isLoading: false, error: null })
        options.onSuccess?.(response)
        return response
      } catch (error) {
        const err = error instanceof Error ? error : new Error("Une erreur est survenue lors du téléchargement")
        setState((prev) => ({ ...prev, isLoading: false, error: err }))
        options.onError?.(err)
        return null
      }
    },
    [endpoint, options],
  )

  const reset = useCallback(() => {
    setState({ data: null, isLoading: false, error: null })
  }, [])

  return { ...state, upload, reset }
}
