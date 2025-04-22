"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, X, ChevronDown, ChevronUp, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: number
  text: string
  isBot: boolean
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Bonjour ! Je suis l'assistante virtuelle de Mod'Elles. Comment puis-je vous aider aujourd'hui ?",
    isBot: true,
  },
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [lastInteraction, setLastInteraction] = useState(Date.now())

  // Effet pour suggérer une interaction après une période d'inactivité
  useEffect(() => {
    const inactivityTimer = setTimeout(() => {
      if (isOpen && !isMinimized && messages.length < 3) {
        const suggestionMessage: Message = {
          id: messages.length + 1,
          text: "Vous pouvez me poser des questions sur la santé reproductive, le soutien psychologique, ou les services de Mod'Elles. Comment puis-je vous aider aujourd'hui ?",
          isBot: true,
        }
        setMessages((prev) => [...prev, suggestionMessage])
      }
    }, 30000) // 30 secondes d'inactivité

    return () => clearTimeout(inactivityTimer)
  }, [lastInteraction, isOpen, isMinimized, messages.length])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLastInteraction(Date.now())
    setIsTyping(true)

    // Simuler une réponse du bot après un court délai
    setTimeout(() => {
      const botResponse = getBotResponse(input)
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase()

    // Santé reproductive
    if (input.includes("cycle") || input.includes("règles") || input.includes("menstruel")) {
      return "Notre outil de suivi de cycle menstruel vous permet de suivre vos règles, symptômes et période de fertilité. Vous pouvez y accéder dans la section Santé Reproductive. Souhaitez-vous que je vous explique comment l'utiliser ?"
    }

    if (input.includes("contraception") || input.includes("contraceptif")) {
      return "Mod'Elles propose des informations sur les différentes méthodes contraceptives disponibles au Gabon. Vous pouvez consulter ces ressources dans la section Santé Reproductive ou prendre rendez-vous avec un professionnel de santé pour des conseils personnalisés."
    }

    if (input.includes("grossesse") || input.includes("enceinte")) {
      return "Si vous êtes enceinte ou pensez l'être, nous vous recommandons de consulter rapidement un professionnel de santé. Vous pouvez prendre rendez-vous dans l'un de nos centres partenaires via la section Rendez-vous. Souhaitez-vous que je vous aide à prendre rendez-vous ?"
    }

    // Rendez-vous
    if (input.includes("rendez-vous") || input.includes("rdv") || input.includes("consultation")) {
      if (input.includes("annuler") || input.includes("reporter")) {
        return "Pour annuler ou reporter un rendez-vous, veuillez vous connecter à votre compte personnel ou contacter directement le centre ou le professionnel concerné au moins 24h à l'avance."
      }
      if (input.includes("psychologue") || input.includes("psy")) {
        return "Pour prendre rendez-vous avec un psychologue, rendez-vous dans la section 'Soutien Psychologique' puis cliquez sur 'Prendre rendez-vous'. Vous pourrez choisir un psychologue selon sa spécialité et ses disponibilités."
      }
      return "Vous pouvez prendre rendez-vous dans un centre de santé ou avec un psychologue en quelques clics. Rendez-vous dans la section 'Rendez-vous' pour un centre de santé ou 'Soutien Psychologique' pour consulter un psychologue. Que souhaitez-vous faire ?"
    }

    // Soutien psychologique
    if (input.includes("psychologue") || input.includes("psy") || input.includes("thérapie")) {
      return "Nous proposons des consultations avec des psychologues qualifiés spécialisés dans différents domaines (traumatismes, anxiété, dépression, thérapie familiale). Vous pouvez consulter leurs profils et prendre rendez-vous dans la section Soutien Psychologique."
    }

    if (input.includes("groupe") || input.includes("soutien") || input.includes("atelier")) {
      return "Mod'Elles organise plusieurs groupes de soutien et ateliers sur des thématiques variées (survivantes de violences, gestion de l'anxiété, estime de soi). Ces groupes sont animés par des professionnels et offrent un espace sécurisé pour partager et apprendre. Consultez la section Soutien Psychologique pour voir le calendrier et vous inscrire."
    }

    // Urgence
    if (input.includes("urgence") || input.includes("danger") || input.includes("violence")) {
      return "Si vous êtes en situation d'urgence ou de danger immédiat, cliquez sur le bouton URGENCE en haut de la page. Vous pourrez déclencher une alerte, contacter les services d'urgence ou trouver un refuge. Votre sécurité est notre priorité absolue."
    }

    // Informations générales
    if (input.includes("mod'elles") || input.includes("modelles") || input.includes("site")) {
      return "Mod'Elles est une plateforme dédiée à la santé reproductive, au soutien psychologique et à l'autonomisation des femmes au Gabon. Notre mission est de vous offrir des ressources fiables, un accompagnement personnalisé et un espace sécurisé. Pour en savoir plus, visitez notre page 'À propos'."
    }

    if (input.includes("inscription") || input.includes("compte") || input.includes("inscrire")) {
      return "Pour créer un compte sur Mod'Elles, cliquez sur 'Rejoins notre communauté' sur la page d'accueil ou sur 'Inscription' dans le menu. L'inscription est gratuite et vous permettra d'accéder à des fonctionnalités personnalisées."
    }

    if (input.includes("contact") || input.includes("joindre") || input.includes("téléphone")) {
      return "Vous pouvez nous contacter par téléphone au XXX-XXX-XXX, par email à contact@modelles.ga ou via notre formulaire de contact dans la section 'Contact'. Notre équipe vous répondra dans les plus brefs délais."
    }

    // Remerciements et salutations
    if (input.includes("merci") || input.includes("au revoir") || input.includes("a plus")) {
      return "Je vous en prie ! N'hésitez pas à revenir si vous avez d'autres questions. Prenez soin de vous et à bientôt !"
    }

    if (input.includes("bonjour") || input.includes("salut") || input.includes("hello")) {
      return "Bonjour ! Heureuse de vous accueillir sur Mod'Elles. Comment puis-je vous aider aujourd'hui ?"
    }

    // Réponse par défaut
    return "Je suis là pour vous aider avec des informations sur la santé reproductive, le soutien psychologique et les services de Mod'Elles. N'hésitez pas à me poser des questions plus précises pour que je puisse mieux vous orienter."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Bouton flottant pour ouvrir le chat */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full h-14 w-14 bg-pink-600 hover:bg-pink-700 shadow-lg flex items-center justify-center z-50"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <Card
          className={cn(
            "fixed right-6 shadow-lg transition-all duration-300 w-80 md:w-96 z-50",
            isMinimized ? "bottom-6 h-14" : "bottom-6 h-[500px] max-h-[80vh]",
          )}
        >
          <CardHeader className="p-3 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Assistante Mod'Elles</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsMinimized(!isMinimized)}>
                {isMinimized ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-0 overflow-y-auto h-[calc(100%-110px)]">
                <div className="flex flex-col p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "max-w-[80%] rounded-lg p-3",
                        message.isBot
                          ? "bg-muted self-start rounded-tl-none"
                          : "bg-pink-600 text-white self-end rounded-br-none",
                      )}
                    >
                      {message.text}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="max-w-[80%] rounded-lg p-3 bg-muted self-start rounded-tl-none flex items-center space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>En train d'écrire...</span>
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-3 border-t">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder="Tapez votre message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button
                    size="icon"
                    className="bg-pink-600 hover:bg-pink-700"
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </>
  )
}
