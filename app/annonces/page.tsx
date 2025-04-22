"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Calendar, GraduationCap, MapPin, Clock, Search, Filter, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Types pour les annonces
type AnnonceType = "formation" | "emploi" | "evenement"

interface Annonce {
  id: string
  titre: string
  type: AnnonceType
  description: string
  organisation: string
  lieu: string
  date: string
  deadline?: string
  image?: string
  categories: string[]
  lien: string
}

// Données de démonstration pour les annonces
const annoncesData: Annonce[] = [
  {
    id: "1",
    titre: "Formation en Entrepreneuriat Féminin",
    type: "formation",
    description:
      "Une formation complète pour développer vos compétences entrepreneuriales et lancer votre entreprise avec succès.",
    organisation: "Mod'Elles",
    lieu: "Centre Mod'Elles, Libreville",
    date: "15-20 mai 2024",
    deadline: "30 avril 2024",
    image: "/placeholder.svg?height=200&width=300",
    categories: ["entrepreneuriat", "business", "finance"],
    lien: "/annonces/formation-entrepreneuriat",
  },
  {
    id: "2",
    titre: "Assistante Administrative",
    type: "emploi",
    description:
      "Nous recherchons une assistante administrative pour rejoindre notre équipe dynamique. Expérience de 2 ans minimum requise.",
    organisation: "Entreprise Partenaire",
    lieu: "Libreville",
    date: "Poste à pourvoir immédiatement",
    deadline: "15 mai 2024",
    image: "/placeholder.svg?height=200&width=300",
    categories: ["administratif", "temps plein", "débutant"],
    lien: "/annonces/assistante-administrative",
  },
  {
    id: "3",
    titre: "Conférence sur la Santé des Femmes",
    type: "evenement",
    description: "Une journée dédiée à la santé des femmes avec des conférences, ateliers et consultations gratuites.",
    organisation: "Ministère de la Santé & Mod'Elles",
    lieu: "Palais des Congrès, Libreville",
    date: "8 mars 2024",
    image: "/placeholder.svg?height=200&width=300",
    categories: ["santé", "bien-être", "conférence"],
    lien: "/annonces/conference-sante-femmes",
  },
  {
    id: "4",
    titre: "Formation en Compétences Numériques",
    type: "formation",
    description:
      "Apprenez les compétences numériques essentielles pour améliorer votre employabilité et votre productivité.",
    organisation: "Tech4Women",
    lieu: "En ligne",
    date: "Juin - Juillet 2024",
    deadline: "15 mai 2024",
    image: "/placeholder.svg?height=200&width=300",
    categories: ["numérique", "informatique", "en ligne"],
    lien: "/annonces/formation-competences-numeriques",
  },
  {
    id: "5",
    titre: "Responsable Marketing Digital",
    type: "emploi",
    description:
      "Poste de responsable marketing digital pour une entreprise en pleine croissance. Expérience en stratégie digitale requise.",
    organisation: "Entreprise Partenaire",
    lieu: "Libreville / Télétravail partiel",
    date: "Poste à pourvoir dès juin 2024",
    deadline: "30 mai 2024",
    image: "/placeholder.svg?height=200&width=300",
    categories: ["marketing", "digital", "expérimenté"],
    lien: "/annonces/responsable-marketing-digital",
  },
  {
    id: "6",
    titre: "Atelier de Leadership Féminin",
    type: "evenement",
    description:
      "Un atelier interactif pour développer vos compétences en leadership et renforcer votre confiance professionnelle.",
    organisation: "Mod'Elles",
    lieu: "Hôtel Radisson Blu, Libreville",
    date: "22-23 juin 2024",
    deadline: "15 juin 2024",
    image: "/placeholder.svg?height=200&width=300",
    categories: ["leadership", "développement personnel", "atelier"],
    lien: "/annonces/atelier-leadership-feminin",
  },
  {
    id: "7",
    titre: "Formation en Gestion Financière Personnelle",
    type: "formation",
    description: "Apprenez à gérer efficacement vos finances personnelles, à épargner et à investir pour votre avenir.",
    organisation: "Finance Pour Elles",
    lieu: "Centre Mod'Elles, Libreville",
    date: "10-12 juillet 2024",
    deadline: "30 juin 2024",
    image: "/placeholder.svg?height=200&width=300",
    categories: ["finance", "budget", "investissement"],
    lien: "/annonces/formation-gestion-financiere",
  },
  {
    id: "8",
    titre: "Chargée de Projet Social",
    type: "emploi",
    description:
      "Nous recherchons une chargée de projet pour coordonner nos initiatives sociales en faveur des femmes vulnérables.",
    organisation: "ONG Partenaire",
    lieu: "Port-Gentil",
    date: "Poste à pourvoir en septembre 2024",
    deadline: "31 juillet 2024",
    image: "/placeholder.svg?height=200&width=300",
    categories: ["social", "gestion de projet", "temps plein"],
    lien: "/annonces/chargee-projet-social",
  },
  {
    id: "9",
    titre: "Forum des Métiers au Féminin",
    type: "evenement",
    description:
      "Un forum pour découvrir les métiers où les femmes sont sous-représentées et rencontrer des professionnelles inspirantes.",
    organisation: "Ministère de l'Éducation & Mod'Elles",
    lieu: "Université Omar Bongo, Libreville",
    date: "15-16 septembre 2024",
    image: "/placeholder.svg?height=200&width=300",
    categories: ["orientation", "carrière", "networking"],
    lien: "/annonces/forum-metiers-feminin",
  },
]

export default function AnnoncesPage() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [locationFilter, setLocationFilter] = useState<string>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  // Extraire toutes les catégories uniques
  const allCategories = Array.from(new Set(annoncesData.flatMap((annonce) => annonce.categories)))

  // Extraire tous les lieux uniques
  const allLocations = Array.from(new Set(annoncesData.map((annonce) => annonce.lieu)))

  // Filtrer les annonces en fonction des critères
  const filteredAnnonces = annoncesData.filter((annonce) => {
    // Filtrer par type (onglet)
    const typeMatch = activeTab === "all" || annonce.type === activeTab

    // Filtrer par terme de recherche
    const searchMatch =
      annonce.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      annonce.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      annonce.organisation.toLowerCase().includes(searchTerm.toLowerCase())

    // Filtrer par lieu
    const locationMatch = locationFilter === "all" || annonce.lieu === locationFilter

    // Filtrer par catégorie
    const categoryMatch = categoryFilter === "all" || annonce.categories.some((cat) => cat === categoryFilter)

    return typeMatch && searchMatch && locationMatch && categoryMatch
  })

  // Obtenir l'icône en fonction du type d'annonce
  const getAnnonceIcon = (type: AnnonceType) => {
    switch (type) {
      case "formation":
        return <GraduationCap className="h-5 w-5 text-blue-500" />
      case "emploi":
        return <Briefcase className="h-5 w-5 text-green-500" />
      case "evenement":
        return <Calendar className="h-5 w-5 text-pink-500" />
      default:
        return <Briefcase className="h-5 w-5" />
    }
  }

  // Obtenir la couleur du badge en fonction du type d'annonce
  const getAnnonceColor = (type: AnnonceType) => {
    switch (type) {
      case "formation":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "emploi":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "evenement":
        return "bg-pink-100 text-pink-800 hover:bg-pink-200"
      default:
        return ""
    }
  }

  return (
    <div className="container py-10 max-w-6xl">
      <div className="flex flex-col items-center text-center mb-10 space-y-4">
        <div className="p-3 rounded-full bg-modelles-100">
          <Briefcase className="h-10 w-10 text-modelles-600" />
        </div>
        <h1 className="text-3xl font-bold">Annonces</h1>
        <p className="text-muted-foreground max-w-2xl">
          Découvrez les formations, opportunités d&apos;emploi et événements proposés par Mod&apos;Elles et ses
          partenaires
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher une annonce..."
            className="pl-8 w-full md:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Lieu" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les lieux</SelectItem>
              {allLocations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Catégorie" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les catégories</SelectItem>
              {allCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="all">Toutes</TabsTrigger>
          <TabsTrigger value="formation">Formations</TabsTrigger>
          <TabsTrigger value="emploi">Emplois</TabsTrigger>
          <TabsTrigger value="evenement">Événements</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          {filteredAnnonces.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAnnonces.map((annonce) => (
                <Link href={annonce.lien} key={annonce.id} className="block h-full">
                  <Card className="h-full transition-all hover:shadow-md">
                    <div className="relative h-48 w-full">
                      <Image
                        src={annonce.image || "/placeholder.svg?height=200&width=300"}
                        alt={annonce.titre}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <Badge
                        variant="outline"
                        className={`absolute top-2 right-2 flex items-center gap-1 ${getAnnonceColor(annonce.type)}`}
                      >
                        {getAnnonceIcon(annonce.type)}
                        {annonce.type === "formation"
                          ? "Formation"
                          : annonce.type === "emploi"
                            ? "Emploi"
                            : "Événement"}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{annonce.titre}</CardTitle>
                      <CardDescription>{annonce.organisation}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">{annonce.description}</p>
                      <div className="flex items-center mt-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{annonce.lieu}</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{annonce.date}</span>
                      </div>
                      {annonce.deadline && (
                        <div className="flex items-center mt-1 text-sm font-medium text-modelles-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Date limite: {annonce.deadline}</span>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <div className="flex flex-wrap gap-1">
                        {annonce.categories.map((category) => (
                          <Badge key={category} variant="outline" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Briefcase className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
              <p className="mt-2 text-muted-foreground">Aucune annonce ne correspond à vos critères</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setLocationFilter("all")
                  setCategoryFilter("all")
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-modelles-50 rounded-lg p-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Vous avez une annonce à publier ?</h2>
            <p className="text-muted-foreground mb-6">
              Vous êtes une organisation partenaire et souhaitez publier une formation, une offre d&apos;emploi ou un
              événement sur notre plateforme ? Contactez-nous pour diffuser votre annonce auprès de notre communauté.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-modelles-100 flex items-center justify-center mr-3">
                  <Users className="h-4 w-4 text-modelles-600" />
                </div>
                <p>Touchez une communauté de femmes motivées et talentueuses</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-modelles-100 flex items-center justify-center mr-3">
                  <Calendar className="h-4 w-4 text-modelles-600" />
                </div>
                <p>Publication rapide et diffusion sur nos réseaux sociaux</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-modelles-100 flex items-center justify-center mr-3">
                  <Briefcase className="h-4 w-4 text-modelles-600" />
                </div>
                <p>Suivi des candidatures et retours personnalisés</p>
              </div>
            </div>
            <Button className="mt-6 bg-modelles-600 hover:bg-modelles-700">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              fill
              alt="Publier une annonce"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
