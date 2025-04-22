import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Handshake, Building, Globe, Users, Coins, BookOpen, Megaphone, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type PartnershipCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  examples: string
}

const PartnershipCard = ({ icon, title, description, examples }: PartnershipCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow h-full">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-3 h-full">
          <div className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/30">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <div className="w-full pt-3 mt-auto border-t">
            <p className="text-sm font-medium">Exemples :</p>
            <p className="text-sm text-muted-foreground">{examples}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const partnershipTypes = [
  {
    icon: <Coins className="h-10 w-10 text-pink-600" />,
    title: "Partenariat financier",
    description: "Soutien financier pour nos programmes et notre fonctionnement",
    examples: "Subventions, dons d'entreprise, financements de projets spécifiques",
  },
  {
    icon: <Building className="h-10 w-10 text-pink-600" />,
    title: "Partenariat technique",
    description: "Mise à disposition d'expertise, de compétences ou de services",
    examples: "Conseil juridique, support IT, formation professionnelle",
  },
  {
    icon: <Globe className="h-10 w-10 text-pink-600" />,
    title: "Partenariat opérationnel",
    description: "Collaboration sur le terrain pour la mise en œuvre de projets",
    examples: "Programmes conjoints, partage de ressources, actions communes",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-pink-600" />,
    title: "Partenariat de communication",
    description: "Collaboration pour sensibiliser et informer le public",
    examples: "Campagnes conjointes, relais d'information, événements",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-pink-600" />,
    title: "Partenariat de recherche",
    description: "Collaboration pour produire des connaissances et des données",
    examples: "Études, enquêtes, publications, conférences",
  },
  {
    icon: <Users className="h-10 w-10 text-pink-600" />,
    title: "Partenariat de réseau",
    description: "Mise en relation avec d'autres acteurs et bénéficiaires",
    examples: "Orientation des bénéficiaires, partage de contacts, adhésion à des réseaux",
  },
]

export default function PartenariatPage() {
  return (
    <div className="container py-10 max-w-6xl">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-12 space-y-4">
        <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30">
          <Handshake className="h-10 w-10 text-pink-600" />
        </div>
        <h1 className="text-3xl font-bold">Proposer un partenariat</h1>
        <p className="text-muted-foreground max-w-2xl">
          Collaborons pour renforcer l'impact de nos actions en faveur des femmes gabonaises
        </p>
      </section>

      {/* Why Partner Section */}
      <section className="grid gap-10 md:grid-cols-2 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Pourquoi devenir partenaire ?</h2>
          <p className="text-muted-foreground mb-4">
            Mod'Elles recherche activement des partenaires engagés pour amplifier son impact auprès des femmes
            gabonaises. En unissant nos forces, nous pouvons créer des synergies et développer des solutions innovantes.
          </p>
          <p className="text-muted-foreground mb-6">
            Que vous soyez une entreprise, une ONG, une institution publique ou un bailleur de fonds, nous sommes
            ouverts à différentes formes de collaboration adaptées à vos objectifs.
          </p>
          <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Avantages du partenariat :</h3>
            <ul className="space-y-2 list-disc pl-5 text-sm">
              <li>Contribuer à une cause sociale majeure au Gabon</li>
              <li>Renforcer votre image de marque et votre RSE</li>
              <li>Accéder à notre réseau et expertise sur les questions de genre</li>
              <li>Développer des projets innovants à fort impact social</li>
              <li>Bénéficier d'une visibilité auprès de notre communauté</li>
            </ul>
          </div>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            fill
            alt="Femmes gabonaises participant à un atelier Mod'Elles"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Partnership Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Types de partenariats</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnershipTypes.map((type, index) => (
            <PartnershipCard
              key={index}
              icon={type.icon}
              title={type.title}
              description={type.description}
              examples={type.examples}
            />
          ))}
        </div>
      </section>

      {/* Partner Tabs */}
      <section className="mb-12">
        <Tabs defaultValue="entreprise">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="entreprise">Entreprises</TabsTrigger>
            <TabsTrigger value="ong">ONG & Associations</TabsTrigger>
            <TabsTrigger value="institution">Institutions</TabsTrigger>
          </TabsList>

          <TabsContent value="entreprise">
            <PartnerTab
              title="Partenariat Entreprises"
              description="Engagez votre entreprise dans une démarche de responsabilité sociale en soutenant l'autonomisation des femmes"
              benefits={[
                "Mécénat financier avec avantages fiscaux",
                "Mécénat de compétences",
                "Sponsoring d'événements",
                "Produits-partage",
              ]}
              advantages={[
                "Renforcement de votre image de marque responsable",
                "Amélioration de l'engagement de vos collaborateurs",
                "Développement de votre réseau au Gabon",
                "Avantages fiscaux (déduction des dons)",
                "Visibilité auprès de notre communauté",
              ]}
              buttonText="Proposer un partenariat entreprise"
            />
          </TabsContent>

          <TabsContent value="ong">
            <PartnerTab
              title="Partenariat ONG & Associations"
              description="Unissons nos forces pour maximiser notre impact auprès des femmes gabonaises"
              benefits={["Projets conjoints", "Partage de ressources", "Plaidoyer commun", "Échange de compétences"]}
              advantages={[
                "Respect mutuel des missions et valeurs",
                "Transparence dans la communication",
                "Complémentarité des actions",
                "Engagement sur des objectifs communs",
                "Évaluation régulière des résultats",
              ]}
              buttonText="Proposer un partenariat associatif"
            />
          </TabsContent>

          <TabsContent value="institution">
            <PartnerTab
              title="Partenariat Institutions"
              description="Collaborons avec les institutions publiques pour renforcer les politiques en faveur des femmes"
              benefits={[
                "Mise en œuvre de politiques",
                "Programmes conjoints",
                "Recherche et évaluation",
                "Renforcement de capacités",
              ]}
              advantages={[
                "Ministère de la Famille et de la Promotion de la Femme",
                "Ministère de la Justice",
                "Ministère de la Santé",
                "Collectivités locales",
                "Organisations internationales",
              ]}
              buttonText="Proposer un partenariat institutionnel"
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Partnership Form */}
      <PartnershipForm />

      {/* Process Section */}
      <ProcessSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

type PartnerTabProps = {
  title: string
  description: string
  benefits: string[]
  advantages: string[]
  buttonText: string
}

const PartnerTab = ({ title, description, benefits, advantages, buttonText }: PartnerTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          {title.includes("Entreprises")
            ? "Les entreprises gabonaises et internationales peuvent s'engager de différentes manières :"
            : title.includes("ONG")
              ? "Les collaborations entre organisations de la société civile permettent de mutualiser les ressources :"
              : "Les partenariats avec les institutions publiques gabonaises sont essentiels :"}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">{benefit.split(" - ")[0]}</h3>
              <p className="text-sm text-muted-foreground">
                {benefit.split(" - ")[1] || "Collaboration bénéfique pour les deux parties"}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg">
          <h3 className="font-medium mb-2">
            {title.includes("Entreprises")
              ? "Avantages pour votre entreprise :"
              : title.includes("ONG")
                ? "Principes de collaboration :"
                : "Institutions partenaires potentielles :"}
          </h3>
          <ul className="space-y-1 list-disc pl-5 text-sm">
            {advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-pink-600 hover:bg-pink-700">{buttonText}</Button>
      </CardFooter>
    </Card>
  )
}

const PartnershipForm = () => {
  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle>Formulaire de proposition de partenariat</CardTitle>
        <CardDescription>
          Partagez-nous votre idée de collaboration pour que nous puissions étudier ensemble les possibilités
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Type d'organisation</Label>
          <RadioGroup defaultValue="entreprise" name="organizationType">
            <div className="flex flex-wrap gap-4">
              {[
                { value: "entreprise", label: "Entreprise" },
                { value: "ong", label: "ONG/Association" },
                { value: "institution", label: "Institution publique" },
                { value: "fondation", label: "Fondation" },
                { value: "autre", label: "Autre" },
              ].map((item) => (
                <div key={item.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={item.value} id={`type-${item.value}`} />
                  <Label htmlFor={`type-${item.value}`}>{item.label}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="organisation">Nom de l'organisation</Label>
            <Input id="organisation" name="organisation" placeholder="Nom de votre organisation" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secteur">Secteur d'activité</Label>
            <Input id="secteur" name="secteur" placeholder="Secteur d'activité de votre organisation" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nom">Nom du contact</Label>
            <Input id="nom" name="nom" placeholder="Votre nom complet" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fonction">Fonction</Label>
            <Input id="fonction" name="fonction" placeholder="Votre fonction dans l'organisation" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="votre.email@exemple.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telephone">Téléphone</Label>
            <Input id="telephone" name="telephone" placeholder="+241 XX XX XX XX" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Type de partenariat envisagé</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {[
              { id: "financier", label: "Partenariat financier" },
              { id: "technique", label: "Partenariat technique" },
              { id: "operationnel", label: "Partenariat opérationnel" },
              { id: "communication", label: "Partenariat de communication" },
              { id: "recherche", label: "Partenariat de recherche" },
              { id: "reseau", label: "Partenariat de réseau" },
            ].map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox id={item.id} name="partnershipTypes" value={item.id} />
                <Label htmlFor={item.id}>{item.label}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description du partenariat proposé</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Décrivez votre proposition de partenariat, les objectifs visés et les modalités envisagées"
            rows={5}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="benefices">Bénéfices mutuels attendus</Label>
          <Textarea
            id="benefices"
            name="benefices"
            placeholder="Quels sont les bénéfices que vous attendez de ce partenariat et ceux que vous pensez pouvoir apporter à Mod'Elles"
            rows={3}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="duree">Durée envisagée du partenariat</Label>
          <RadioGroup defaultValue="court" name="duration">
            <div className="flex flex-wrap gap-4">
              {[
                { value: "court", label: "Court terme (< 1 an)" },
                { value: "moyen", label: "Moyen terme (1-3 ans)" },
                { value: "long", label: "Long terme (> 3 ans)" },
              ].map((item) => (
                <div key={item.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={item.value} id={`duree-${item.value}`} />
                  <Label htmlFor={`duree-${item.value}`}>{item.label}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" name="terms" required />
          <Label htmlFor="terms" className="text-sm">
            J'accepte que mes données soient traitées conformément à la{" "}
            <Link href="/confidentialite" className="text-pink-600 hover:underline">
              politique de confidentialité
            </Link>
          </Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
          Soumettre ma proposition
        </Button>
      </CardFooter>
    </Card>
  )
}

const ProcessSection = () => {
  return (
    <section className="bg-pink-50 dark:bg-pink-900/10 rounded-lg p-8 mb-12">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Notre processus de partenariat</h2>
          <p className="text-muted-foreground mb-6">Voici les étapes qui suivent l'envoi de votre proposition :</p>
          <ol className="space-y-4 list-decimal pl-5">
            {[
              {
                title: "Réception et analyse de votre proposition",
                description:
                  "Notre équipe étudie votre proposition et évalue l'alignement avec notre mission (2-3 semaines)",
              },
              {
                title: "Rencontre et discussion",
                description: "Organisation d'une réunion pour approfondir les modalités du partenariat",
              },
              {
                title: "Élaboration d'une convention",
                description:
                  "Rédaction conjointe d'une convention définissant les objectifs, les engagements et les modalités",
              },
              {
                title: "Mise en œuvre et suivi",
                description: "Lancement du partenariat avec des points réguliers d'évaluation",
              },
            ].map((step, index) => (
              <li key={index} className="pl-2">
                <p className="font-medium">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-4">
          {[
            {
              icon: <Award className="h-5 w-5 text-pink-600 mr-2" />,
              title: "Nos critères de sélection",
              content:
                "Nous privilégions les partenariats qui s'alignent avec nos valeurs, qui ont un impact mesurable sur les femmes gabonaises et qui s'inscrivent dans une démarche éthique et durable.",
            },
            {
              icon: <Users className="h-5 w-5 text-pink-600 mr-2" />,
              title: "Nos partenaires actuels",
              content:
                "Nous collaborons déjà avec diverses organisations gabonaises et internationales, notamment des ministères, des ONG, des entreprises et des fondations.",
            },
            {
              icon: <Globe className="h-5 w-5 text-pink-600 mr-2" />,
              title: "Portée géographique",
              content:
                "Nous sommes ouverts aux partenariats locaux, nationaux et internationaux qui contribuent à notre mission au Gabon.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                {item.icon}
                <h3 className="font-medium">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Des questions sur les partenariats ?</CardTitle>
        <CardDescription>Notre équipe est disponible pour discuter de vos idées de collaboration</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-lg font-medium">
          Contact: <span className="text-pink-600">partenariats@modelles.ga</span>
        </p>
        <p className="text-muted-foreground mt-2">Téléphone: +241 XX XX XX XX (du lundi au vendredi, 8h-17h)</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="outline">
          <Link href="/partenaires-actuels">Découvrir nos partenaires actuels</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
