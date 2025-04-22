import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, CreditCard, Banknote, Landmark, Coins, CheckCircle, Users, Leaf, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DonPage() {
  return (
    <div className="container py-10 max-w-6xl">
      <div className="flex flex-col items-center text-center mb-10 space-y-4">
        <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30">
          <Heart className="h-10 w-10 text-pink-600" />
        </div>
        <h1 className="text-3xl font-bold">Faire un don</h1>
        <p className="text-muted-foreground max-w-2xl">
          Ton soutien nous permet d'aider plus de femmes au Gabon à accéder à la sécurité, au soutien et à l'autonomie
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Pourquoi soutenir Mod'Elles ?</h2>
          <p className="text-muted-foreground mb-4">
            Au Gabon, de nombreuses femmes font face à des défis considérables : violences basées sur le genre, manque
            d'accès aux soins de santé reproductive, obstacles à l'éducation et à l'indépendance économique.
          </p>
          <p className="text-muted-foreground mb-6">
            Ton don permet de financer des services essentiels pour les femmes gabonaises : assistance juridique,
            soutien psychologique, formations professionnelles, et développement de notre plateforme numérique.
          </p>
          <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Impact de ton don :</h3>
            <ul className="space-y-2 list-disc pl-5 text-sm">
              <li>
                <span className="font-medium">50 000 FCFA</span> - Soutien psychologique pour 3 femmes pendant un mois
              </li>
              <li>
                <span className="font-medium">100 000 FCFA</span> - Formation professionnelle complète pour une femme
              </li>
              <li>
                <span className="font-medium">250 000 FCFA</span> - Équipement d'un espace sécurisé pour les femmes en
                danger
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            fill
            alt="Femmes soutenues par Mod'Elles"
            className="object-cover"
          />
        </div>
      </div>

      <Tabs defaultValue="ponctuel" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ponctuel">Don ponctuel</TabsTrigger>
          <TabsTrigger value="mensuel">Don mensuel</TabsTrigger>
        </TabsList>

        <TabsContent value="ponctuel">
          <Card>
            <CardHeader>
              <CardTitle>Faire un don ponctuel</CardTitle>
              <CardDescription>
                Ton soutien, même ponctuel, fait une différence significative dans la vie des femmes gabonaises
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Montant du don</Label>
                <RadioGroup defaultValue="50000">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <RadioGroupItem value="10000" id="10000" className="peer sr-only" />
                      <Label
                        htmlFor="10000"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Coins className="mb-3 h-6 w-6 text-pink-600" />
                        <span className="text-xl font-bold">10 000</span>
                        <span className="text-xs">FCFA</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="25000" id="25000" className="peer sr-only" />
                      <Label
                        htmlFor="25000"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Coins className="mb-3 h-6 w-6 text-pink-600" />
                        <span className="text-xl font-bold">25 000</span>
                        <span className="text-xs">FCFA</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="50000" id="50000" className="peer sr-only" />
                      <Label
                        htmlFor="50000"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Coins className="mb-3 h-6 w-6 text-pink-600" />
                        <span className="text-xl font-bold">50 000</span>
                        <span className="text-xs">FCFA</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="autre" id="autre" className="peer sr-only" />
                      <Label
                        htmlFor="autre"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Coins className="mb-3 h-6 w-6 text-pink-600" />
                        <span className="text-xl font-bold">Autre</span>
                        <span className="text-xs">montant</span>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-amount">Montant personnalisé (FCFA)</Label>
                <Input id="custom-amount" type="number" placeholder="Entrez un montant" />
              </div>

              <div className="space-y-2">
                <Label>Mode de paiement</Label>
                <RadioGroup defaultValue="mobile">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <RadioGroupItem value="mobile" id="mobile" className="peer sr-only" />
                      <Label
                        htmlFor="mobile"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <CreditCard className="mb-3 h-6 w-6" />
                        <span className="text-sm font-medium">Mobile Money</span>
                        <span className="text-xs text-muted-foreground">Airtel Money, Moov Money</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
                      <Label
                        htmlFor="bank"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Landmark className="mb-3 h-6 w-6" />
                        <span className="text-sm font-medium">Virement bancaire</span>
                        <span className="text-xs text-muted-foreground">BGFI, UGB, Orabank</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="cash" id="cash" className="peer sr-only" />
                      <Label
                        htmlFor="cash"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Banknote className="mb-3 h-6 w-6" />
                        <span className="text-sm font-medium">En espèces</span>
                        <span className="text-xs text-muted-foreground">À notre bureau</span>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2 pt-4">
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea id="message" placeholder="Laisse un message de soutien ou des instructions particulières" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Faire un don maintenant</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="mensuel">
          <Card>
            <CardHeader>
              <CardTitle>Devenir donateur régulier</CardTitle>
              <CardDescription>
                Ton soutien mensuel nous permet de planifier nos actions sur le long terme et d'aider plus de femmes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Montant mensuel</Label>
                <RadioGroup defaultValue="10000">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <RadioGroupItem value="5000" id="m5000" className="peer sr-only" />
                      <Label
                        htmlFor="m5000"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Coins className="mb-3 h-6 w-6 text-pink-600" />
                        <span className="text-xl font-bold">5 000</span>
                        <span className="text-xs">FCFA/mois</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="10000" id="m10000" className="peer sr-only" />
                      <Label
                        htmlFor="m10000"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Coins className="mb-3 h-6 w-6 text-pink-600" />
                        <span className="text-xl font-bold">10 000</span>
                        <span className="text-xs">FCFA/mois</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="25000" id="m25000" className="peer sr-only" />
                      <Label
                        htmlFor="m25000"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Coins className="mb-3 h-6 w-6 text-pink-600" />
                        <span className="text-xl font-bold">25 000</span>
                        <span className="text-xs">FCFA/mois</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="autre-mensuel" id="autre-mensuel" className="peer sr-only" />
                      <Label
                        htmlFor="autre-mensuel"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Coins className="mb-3 h-6 w-6 text-pink-600" />
                        <span className="text-xl font-bold">Autre</span>
                        <span className="text-xs">montant</span>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-amount-monthly">Montant personnalisé (FCFA/mois)</Label>
                <Input id="custom-amount-monthly" type="number" placeholder="Entrez un montant" />
              </div>

              <div className="space-y-2">
                <Label>Mode de paiement</Label>
                <RadioGroup defaultValue="mobile-monthly">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <RadioGroupItem value="mobile-monthly" id="mobile-monthly" className="peer sr-only" />
                      <Label
                        htmlFor="mobile-monthly"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <CreditCard className="mb-3 h-6 w-6" />
                        <span className="text-sm font-medium">Prélèvement Mobile Money</span>
                        <span className="text-xs text-muted-foreground">Prélèvement automatique mensuel</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="bank-monthly" id="bank-monthly" className="peer sr-only" />
                      <Label
                        htmlFor="bank-monthly"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-pink-600 [&:has([data-state=checked])]:border-pink-600"
                      >
                        <Landmark className="mb-3 h-6 w-6" />
                        <span className="text-sm font-medium">Prélèvement bancaire</span>
                        <span className="text-xs text-muted-foreground">Virement automatique mensuel</span>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2 pt-4">
                <Label htmlFor="message-monthly">Message (optionnel)</Label>
                <Textarea
                  id="message-monthly"
                  placeholder="Laisse un message de soutien ou des instructions particulières"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Devenir donateur mensuel</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-pink-600" />
              Transparence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Nous nous engageons à une transparence totale sur l'utilisation des dons. Chaque année, nous publions un
              rapport financier détaillé accessible à tous nos donateurs.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-pink-600" />
              Impact direct
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              100% de ton don est utilisé pour financer nos programmes d'aide aux femmes gabonaises. Nos frais
              administratifs sont couverts par des subventions séparées.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-pink-600" />
              Déduction fiscale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Tes dons à Mod'Elles sont déductibles des impôts selon la législation gabonaise. Un reçu fiscal te sera
              automatiquement envoyé pour ta déclaration.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-pink-50 dark:bg-pink-900/10 rounded-lg p-8 mb-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Autres façons de nous soutenir</h2>
            <p className="text-muted-foreground mb-6">
              Au-delà des dons financiers, il existe plusieurs façons de contribuer à notre mission :
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <BookOpen className="h-5 w-5 text-pink-600 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Partage nos ressources</p>
                  <p className="text-sm text-muted-foreground">
                    Aide-nous à diffuser nos informations auprès des femmes qui en ont besoin
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-pink-600 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Deviens bénévole</p>
                  <p className="text-sm text-muted-foreground">
                    Rejoins notre équipe de bénévoles pour contribuer directement à nos actions
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-pink-600 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Dons en nature</p>
                  <p className="text-sm text-muted-foreground">
                    Nous acceptons également les dons de matériel, de vêtements et d'équipements
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Button asChild variant="outline">
                <Link href="/benevolat">Devenir bénévole</Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              fill
              alt="Bénévoles de Mod'Elles"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader className="text-center">
          <CardTitle>Des questions sur les dons ?</CardTitle>
          <CardDescription>
            Notre équipe est disponible pour répondre à toutes tes questions concernant les dons et leur utilisation
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg font-medium">
            Contact: <span className="text-pink-600">dons@modelles.ga</span>
          </p>
          <p className="text-muted-foreground mt-2">Téléphone: +241 XX XX XX XX (du lundi au vendredi, 8h-17h)</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/faq-dons">Consulter la FAQ sur les dons</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
