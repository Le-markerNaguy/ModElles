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
    text: "Bonjour ! Je suis Estelle l'assistante virtuelle de Mod'Elles. Comment puis-je vous aider aujourd'hui ?",
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
    }, 30000)

    return () => clearTimeout(inactivityTimer)
  }, [lastInteraction, isOpen, isMinimized, messages.length])

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLastInteraction(Date.now())
    setIsTyping(true)

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

    if (input.includes("stérilet") || input.includes("diu")) {
      return "Le stérilet (ou DIU) est une méthode contraceptive longue durée très efficace. Nous proposons des consultations pour pose de stérilet dans plusieurs centres partenaires. Souhaitez-vous plus d'informations ou prendre rendez-vous ?"
    }
    if (input.includes("pilule") || input.includes("contraceptive")) {
      return "La pilule contraceptive existe en plusieurs types (combinée, progestative). Une consultation médicale est nécessaire pour trouver celle qui vous convient. Je peux vous aider à trouver un gynécologue près de chez vous."
    }
    if (input.includes("ist") || input.includes("mst") || input.includes("infection") || input.includes("sida")) {
      return "Pour toute question sur les infections sexuellement transmissibles (IST), vous pouvez consulter anonymement dans un centre de santé partenaire. Nous proposons aussi des dépistages gratuits certains jours. Voulez-vous connaître les centres les plus proches de vous ?"
    }
    if (input.includes("dépression") || input.includes("tristesse") || input.includes("déprime")) {
      return "Si vous vous sentez déprimée ou triste depuis plusieurs semaines, il est important d'en parler à un professionnel. Nos psychologues peuvent vous aider à traverser cette période difficile. Voulez-vous que je vous explique comment prendre rendez-vous ?"
    }
    if (input.includes("anxiété") || input.includes("stress") || input.includes("angoisse")) {
      return "L'anxiété peut être très invalidante. Nous proposons des ateliers de gestion du stress et des consultations individuelles avec des psychologues spécialisés. Nous avons aussi une séance d'information gratuite chaque mercredi. Cela vous intéresse-t-il ?"
    }
    if (input.includes("violence") || input.includes("agression") || input.includes("abus")) {
      return "Si vous avez subi des violences, sachez que vous n'êtes pas seule. Nous avons des psychologues formés pour vous accompagner dans un cadre sécurisé et confidentiel. Vous pouvez aussi rejoindre notre groupe de parole pour survivantes de violences. Voulez-vous plus d'informations ?"
    }
    if (input.includes("douleur") || input.includes("santé") || input.includes("médical")) {
      if (input.includes("sein") || input.includes("mamelon")) {
        return "Toute douleur ou changement au niveau des seins doit être examiné par un professionnel. Je peux vous aider à trouver un gynécologue ou un centre de dépistage près de chez vous."
      }
      return "Pour toute question médicale, je vous recommande de consulter un professionnel de santé. Je peux vous aider à trouver un médecin généraliste ou spécialiste selon vos besoins."
    }
    if (input.includes("enfant") || input.includes("bébé") || input.includes("procréer")) {
      if (input.includes("pas") || input.includes("ne veux pas")) {
        return "Si vous ne souhaitez pas avoir d'enfant, plusieurs options contraceptives existent. Nous pouvons vous orienter vers un professionnel pour discuter des méthodes les plus adaptées à votre situation."
      }
      return "Si vous envisagez d'avoir un enfant, nous proposons des consultations préconceptionnelles pour faire un bilan de santé et discuter de vos questions. Voulez-vous plus d'informations ?"
    }
    if (input.includes("activité") || input.includes("événement") || input.includes("atelier")) {
      return "Nous organisons régulièrement des ateliers (santé, bien-être, développement personnel) et des événements communautaires. Consultez notre calendrier dans la section 'Activités' ou dites-moi quel type d'activité vous intéresse."
    }
    if (input.includes("bénévole") || input.includes("volontaire") || input.includes("participer")) {
      return "Nous recherchons toujours des bénévoles passionnées ! Vous pouvez contribuer selon vos compétences et disponibilités. Rendez-vous dans la section 'Devenir bénévole' pour plus d'informations et remplir le formulaire."
    }
    if (input.includes("don") || input.includes("soutenir") || input.includes("faire un don")) {
      return "Votre soutien nous est précieux ! Vous pouvez faire un don financier ou matériel via notre page 'Nous soutenir'. Chaque contribution aide directement les femmes que nous accompagnons. Merci pour votre générosité !"
    }
    if (input.includes("confidentiel") || input.includes("secret") || input.includes("anonyme")) {
      return "Toutes vos interactions avec Mod'Elles sont strictement confidentielles. Vos données personnelles et médicales sont protégées. Nous ne partageons aucune information sans votre consentement explicite."
    }
    if (input.includes("peur") || input.includes("inquiète") || input.includes("panique")) {
      return "Je comprends que cette situation doit être difficile pour vous. Prenez quelques respirations profondes. Vous n'êtes pas seule. Nous pouvons trouver ensemble une solution ou une personne qui pourra vous aider. Voulez-vous en parler ?"
    }
    if (input.includes("seule") || input.includes("isolement") || input.includes("solitude")) {
      return "Beaucoup de femmes traversent des moments de solitude. Nos groupes de parole et activités communautaires peuvent être un bon moyen de rencontrer d'autres personnes. Cela vous dirait d'essayer ?"
    }
    return `Je n'ai pas bien compris votre demande. Voici ce dont je peux vous parler :\n- Santé reproductive (contraception, suivi de cycle, etc.)\n- Soutien psychologique (consultations, groupes de parole)\n- Services Mod'Elles (rendez-vous, activités, bénévolat)\n- Situations d'urgence\n\nPouvez-vous reformuler votre question ou choisir un de ces thèmes ?`
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full h-14 w-14 bg-pink-600 hover:bg-pink-700 shadow-lg flex items-center justify-center z-50"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

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