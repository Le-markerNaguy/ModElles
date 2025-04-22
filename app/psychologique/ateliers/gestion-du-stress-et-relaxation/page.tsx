"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, MapPin, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AtelierPage() {
  const [isRegistered, setIsRegistered] = useState(false)

  const handleRegister = () => {
    // Simuler l'inscription
    setIsRegistered(true)
  }

  return (
    <div className="container py-10 max-w-4xl">
      <div className="mb-6">
        <Link
          href="/psychologique"
          className="inline-flex items-center text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux ateliers
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Atelier : Gestion du stress et relaxation</h1>
            <div className="flex items-center space-x-2 mb-6">
              <Badge variant="outline" className="bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300">
                Atelier unique
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300">
                Places disponibles
              </Badge>
            </div>

            <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                fill
                alt="Atelier de gestion du stress et relaxation"
                className="object-cover"
              />
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                <span>18 avril 2024, 14h-17h</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                <span>Centre Mod'Elles, Libreville</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-muted-foreground mr-2" />
                <span>15 participantes maximum</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                <span>Durée : 3 heures</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">À propos de cet atelier</h2>
            <p className="mb-4">
              Dans notre monde moderne où le rythme de vie s'accélère constamment, le stress est devenu un compagnon
              quotidien pour beaucoup d'entre nous. Cet atelier pratique vous propose d'explorer et d'expérimenter des
              techniques efficaces de gestion du stress et de relaxation.
            </p>
            <p>
              Animé par Dr. Thomas Ndong, psychologue spécialisé en thérapie cognitivo-comportementale, cet atelier
              combine apports théoriques et exercices pratiques pour vous aider à développer des compétences concrètes
              que vous pourrez utiliser au quotidien.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Objectifs de l'atelier</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comprendre les mécanismes du stress et ses impacts sur le corps et l'esprit</li>
              <li>Identifier vos propres déclencheurs de stress et vos réactions habituelles</li>
              <li>Apprendre et pratiquer diverses techniques de relaxation et de respiration</li>
              <li>Développer des stratégies personnalisées de gestion du stress au quotidien</li>
              <li>Créer un plan d'action pour intégrer ces pratiques dans votre vie</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Programme de l'atelier</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">14h00 - 14h30 : Introduction</h3>
                <ul className="text-sm text-muted-foreground list-disc pl-6">
                  <li>Accueil des participantes</li>
                  <li>Présentation des objectifs de l'atelier</li>
                  <li>Tour de table : attentes et besoins spécifiques</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">14h30 - 15h15 : Comprendre le stress</h3>
                <ul className="text-sm text-muted-foreground list-disc pl-6">
                  <li>Mécanismes physiologiques et psychologiques du stress</li>
                  <li>Auto-évaluation : identifier ses déclencheurs et symptômes</li>
                  <li>Distinguer le stress positif du stress négatif</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">15h15 - 15h30 : Pause</h3>
              </div>
              <div>
                <h3 className="font-medium">15h30 - 16h30 : Techniques de relaxation</h3>
                <ul className="text-sm text-muted-foreground list-disc pl-6">
                  <li>Exercices de respiration profonde</li>
                  <li>Relaxation musculaire progressive</li>
                  <li>Méditation de pleine conscience guidée</li>
                  <li>Visualisation positive</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">16h30 - 17h00 : Plan d'action et conclusion</h3>
                <ul className="text-sm text-muted-foreground list-disc pl-6">
                  <li>Élaboration d'un plan personnalisé</li>
                  <li>Ressources complémentaires</li>
                  <li>Questions et partage d'expériences</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">À qui s'adresse cet atelier ?</h2>
            <p className="mb-4">
              Cet atelier est ouvert à toutes les femmes qui souhaitent développer des compétences de gestion du stress,
              quels que soient leur âge ou leur situation. Il peut être particulièrement bénéfique pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Les femmes qui font face à des périodes de stress intense</li>
              <li>Celles qui souhaitent prévenir l'épuisement professionnel ou personnel</li>
              <li>Les personnes qui vivent avec de l'anxiété au quotidien</li>
              <li>Toute personne désireuse d'améliorer son bien-être général</li>
            </ul>
            <p className="mt-4">
              Aucune expérience préalable en relaxation ou méditation n'est nécessaire. L'atelier est conçu pour être
              accessible à toutes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Ce que vous devez apporter</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Des vêtements confortables</li>
              <li>Un tapis de yoga ou une serviette (quelques tapis seront disponibles sur place)</li>
              <li>Une bouteille d'eau</li>
              <li>Un carnet et un stylo pour prendre des notes</li>
              <li>Optionnel : un coussin de méditation si vous en possédez un</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>S'inscrire à l'atelier</CardTitle>
                <CardDescription>
                  18 avril 2024, 14h-17h
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isRegistered ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Tarif</span>
                      <span className="font-bold">15 000 FCFA</span>
                    </div>
                    <p className="text-sm">
                      L'inscription inclut la participation à l'atelier, le matériel pédagogique et une collation.
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Ce que vous apprendrez :</p>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          <span>Techniques de relaxation efficaces</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          <span>Gestion du stress au quotidien</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          <span>Exercices pratiques guidés</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-pink-600 hover:bg-pink-700"
                      onClick={handleRegister}
                    >
                      S'inscrire maintenant
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                    <h3 className="text-lg font-bold">Inscription confirmée !</h3>
                    <p className="text-sm text-muted-foreground">
                      Vous êtes inscrite à l'atelier "Gestion du stress et relaxation". Nous vous avons envoyé un email de confirmation avec tous les détails.
                    </p>
                    <Button variant="outline" className="w-full">
                      Ajouter à mon calendrier
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Animateur</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      fill
                      alt="Dr. Thomas Ndong"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Dr. Thomas Ndong</h4>
                    <p className="text-sm text-muted-foreground">Psychologue spécialisé en TCC</p>
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  Avec plus de 10 ans d'expérience dans l'accompagnement psychologique, Dr. Ndong a aidé des centaines de personnes à mieux gérer leur stress et anxiété.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lieu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Centre Mod'Elles</p>
                  <p className="text-sm text-muted-foreground">
                    123 Avenue du Colonel Parant,<br />
                    Libreville, Gabon
                  </p>
                  <div className="relative h-40 w-full rounded-lg overflow-hidden mt-2">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      fill
                      alt="Centre Mod'Elles"
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}