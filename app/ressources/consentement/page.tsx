
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { use } from "react"

export default function ConsentementPage() {
  return (
    <div className="container py-10 max-w-4xl">
      <div className="mb-6">
        <Link href="/sante" className="inline-flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux ressources
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Le Consentement : Comprendre et Respecter</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <span className="mr-4">|</span>
          <span>Catégorie : Vidéo</span>
        </div>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
          <Image src="/placeholder.svg?height=600&width=1200" fill alt="Le consentement" className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              Regarder la vidéo
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Qu'est-ce que le consentement ?</h2>
            <p className="mb-4">
              Le consentement est un accord volontaire, clair et enthousiaste à participer à une activité avec une autre
              personne. Il s'agit d'une communication continue qui peut être retirée à tout moment.
            </p>
            <p className="mb-4">
              Cette vidéo explicative aborde l'importance du consentement dans les relations, comment le reconnaître et
              le respecter, et pourquoi il est fondamental pour des relations saines et équilibrées.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Points clés de la vidéo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Le consentement doit être donné librement, sans pression ni manipulation</li>
              <li>Le consentement peut être retiré à tout moment</li>
              <li>Le silence ou l'absence de résistance ne signifie pas consentement</li>
              <li>Le consentement pour une activité ne signifie pas consentement pour toutes les activités</li>
              <li>Une personne sous l'influence de l'alcool ou de drogues ne peut pas donner son consentement</li>
              <li>
                La communication claire et ouverte est essentielle pour s'assurer que toutes les parties sont à l'aise
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Comment utiliser cette ressource</h2>
            <p className="mb-4">
              Cette vidéo peut être utilisée comme outil éducatif pour discuter du consentement avec les jeunes, dans
              les écoles, ou comme point de départ pour des conversations importantes sur les relations saines.
            </p>
            <p>
              Nous encourageons le partage de cette ressource et son utilisation dans des contextes éducatifs pour
              promouvoir des relations respectueuses et consenties.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Ressources complémentaires</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/ressources/relations-saines" className="text-pink-600 hover:underline">
                    Communication et Relations Saines
                  </Link>
                </li>
                <li>
                  <Link href="/ressources/estime-soi" className="text-pink-600 hover:underline">
                    Estime de Soi
                  </Link>
                </li>
                <li>
                  <Link href="/ressources/abstinence" className="text-pink-600 hover:underline">
                    La Valeur de l'Abstinence
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Besoin d'aide ou de conseils ?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Si vous avez des questions ou besoin de parler à quelqu'un, nos conseillers sont disponibles pour vous
                écouter et vous orienter.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
