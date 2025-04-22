"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Notification } from "@/types/notification"

type NotificationContextType = {
  notifications: Notification[]
  unreadCount: number
  addNotification: (notification: Omit<Notification, "id" | "createdAt" | "read">) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  deleteNotification: (id: string) => void
  clearAllNotifications: () => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // Load notifications from localStorage
    const storedNotifications = localStorage.getItem("modelles_notifications")
    if (storedNotifications) {
      setNotifications(JSON.parse(storedNotifications))
    } else {
      // Add some sample notifications for demo purposes
      const sampleNotifications: Notification[] = [
        {
          id: "1",
          title: "Bienvenue sur Mod'Elles",
          message: "Merci de vous être inscrit sur notre plateforme.",
          type: "info",
          read: false,
          createdAt: new Date().toISOString(),
        },
        {
          id: "2",
          title: "Nouveau groupe de soutien",
          message: "Un nouveau groupe de soutien psychologique a été créé.",
          type: "update",
          read: false,
          createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        },
      ]
      setNotifications(sampleNotifications)
      localStorage.setItem("modelles_notifications", JSON.stringify(sampleNotifications))
    }
  }, [])

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("modelles_notifications", JSON.stringify(notifications))
  }, [notifications])

  const unreadCount = notifications.filter((n) => !n.read).length

  const addNotification = (notification: Omit<Notification, "id" | "createdAt" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substring(2, 15),
      createdAt: new Date().toISOString(),
      read: false,
    }

    setNotifications((prev) => [newNotification, ...prev])
  }

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        deleteNotification,
        clearAllNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationProvider")
  }
  return context
}
