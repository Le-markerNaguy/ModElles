"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function GroupeInscriptionPage({ params }: { params: { slug: string } }) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    acceptTerms: false,
    notifications: true,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Dans une application réelle, vous récupéreriez les données du groupe à partir d'une API ou d'une base de données
  // Ici, nous utilisons des données statiques pour la démonstration
  const group = {
    title: "Survivantes de violences",
    description:
      "Un espace sécurisé pour les femmes ayant vécu des situations de violence. Ce groupe offre soutien, compréhension et outils pour la guérison et la reconstruction.",
    schedule: "Mardi, 18h-20h",
    startDate: "15 avril 2024",
    endDate: "17 juin 2024",
    duration: "10 séances",
    location: "Centre Mod'Elles, Libreville",
    facilitator: "Dr. Sylvie Obame",
    maxParticipants: 12,
    currentParticipants: 8,
    topics: [
      "Comprendre les traumatismes et leurs effets",
      "Techniques de gestion des émotions",
      "Reconstruire l'estime de soi",
      "Établir des limites saines",
      "Développer des relations de confiance",
    ],
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler un délai d'envoi
    setTimeout(() => {
      toast({
        title: "Inscription envoyée avec succès !",
        description: `Votre inscription au groupe "${group.title}" a été envoyée. Vous recevrez un email de confirmation dans les prochaines heures.`,
        duration: 5000,
      })
      
      // Simuler l'ajout d'une notification
      if (formData.notifications) {
        setTimeout(() => {
          toast({
            title: "Notification ajoutée",
            description: "Des rappels pour les sessions de groupe ont été ajoutés à votre calendrier.",
            duration: 3000,
          })
        }, 2000);
      }
      
      // Rediriger vers la page de confirmation après un court délai
      setTimeout(() => {
        window.location.href = "/psychologique/groupes/confirmation"
      }, 2000)
    }, 1500)
  }

  return (
    <div className="container py-10 max-w-4xl">
      <div className="flex items-center mb-6">
        <Link href="/psychologique" className="text-muted-foreground hover:text-foreground mr-2">
          Soutien Psychologique
        </Link>
        <span className="text-muted-foreground mx-2">/</span>
        <Link href="/psychologique" className="text-muted-foreground hover:text-foreground mr-2">
          Groupes de Soutien
        </Link>
        <span className="text-muted-foreground mx-2">/</span>
        <span>{group.title}</span>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
              <CardDescription>Groupe de soutien</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{group.description}</p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">
                    {group.schedule} | Du {group.startDate} au {group.endDate}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{group.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{group.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Animé par {group.facilitator}</span>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="font-medium mb-2">Thématiques abordées :</h3>
                <ul className="space-y-1 list-disc pl-5 text-sm text-muted-foreground">
                  {group.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Inscription au groupe</CardTitle>
              <CardDescription>Remplissez le formulaire pour vous inscrire</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={(e) => handleCheckboxChange("acceptTerms", e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="acceptTerms" className="text-sm">
                    J'accepte les termes et conditions de participation au groupe.
                  </label>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="notifications"
                    checked={formData.notifications}
                    onChange={(e) => handleCheckboxChange("notifications", e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="notifications" className="text-sm">
                    Je souhaite recevoir des rappels par email avant chaque session.
                  </label>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-pink-600 text-white rounded-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "S'inscrire"}
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}