import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function InscriptionPage() {
  return (
    <div className="container py-10 max-w-md">
      <div className="flex flex-col items-center text-center mb-10 space-y-4">
        <h1 className="text-3xl font-bold">Rejoindre la communauté</h1>
        <p className="text-muted-foreground">
          Crée ton compte pour accéder à toutes les fonctionnalités de la plateforme
        </p>
      </div>

      <Tabs defaultValue="profesionnel" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="professionnel">bénévolat</TabsTrigger>
        </TabsList>
        <TabsContent value="professionnel">
          <Card>
            <CardHeader>
              <CardTitle>Inscription bénévolat</CardTitle>
              <CardDescription>
                Rejoignez notre réseau de bénévolat pour aider la communauté des femmes au Gabon
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg mb-4">
                <h3 className="font-medium mb-2">Pourquoi rejoindre Mod'Elles en tant que bénévole ?</h3>
                <ul className="space-y-1 list-disc pl-5 text-sm">
                  <li>Contribuez à l'autonomisation des femmes au Gabon</li>
                  <li>Partagez votre expertise et faites une différence concrète</li>
                  <li>Accédez à un tableau de bord interactif pour gérer les demandes de soutien</li>
                  <li>Rejoignez un réseau de professionnels engagés</li>
                  <li>Flexibilité dans votre engagement (horaires, type de soutien)</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prenom-pro">Prénom</Label>
                  <Input id="prenom-pro" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nom-pro">Nom</Label>
                  <Input id="nom-pro" placeholder="Votre nom" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-pro">Email </Label>
                <Input id="email-pro" type="email" placeholder="votre.email@exemple.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone-pro">Téléphone </Label>
                <Input id="telephone-pro" placeholder="+241 XX XX XX XX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession">Profession</Label>
                <RadioGroup defaultValue="avocat" id="profession">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="avocat" id="avocat" />
                    <Label htmlFor="avocat">Avocat(e)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="psychologue" id="psychologue" />
                    <Label htmlFor="psychologue">Psychologue</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medecin" id="medecin" />
                    <Label htmlFor="medecin">Médecin</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mentor" id="mentor" />
                    <Label htmlFor="mentor">Mentor / Coach</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="autre" id="autre" />
                    <Label htmlFor="autre">Autre</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialite">Spécialité / Domaine d'expertise</Label>
                <Input id="specialite" placeholder="Ex: Droit de la famille, Psychologie clinique..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disponibilite">Disponibilité</Label>
                <Input id="disponibilite" placeholder="Ex: 2 heures par semaine, week-ends..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-pro">Mot de passe</Label>
                <Input id="password-pro" type="password" />
                <p className="text-xs text-muted-foreground">
                  Minimum 8 caractères, incluant lettres, chiffres et caractères spéciaux
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-confirm-pro">Confirmer le mot de passe</Label>
                <Input id="password-confirm-pro" type="password" />
              </div>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms-pro" />
                  <Label htmlFor="terms-pro" className="text-sm">
                    J'accepte les{" "}
                    <Link href="/conditions" className="text-pink-600 hover:underline">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="/confidentialite" className="text-pink-600 hover:underline">
                      politique de confidentialité
                    </Link>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="verification" />
                  <Label htmlFor="verification" className="text-sm">
                    Je comprends que mes qualifications professionnelles seront vérifiées avant validation de mon compte
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Link href="/" passHref>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Soumettre ma candidature</Button>
              </Link>
              <p className="text-xs text-muted-foreground text-center">
                Après soumission, notre équipe examinera votre profil et vous contactera pour finaliser votre
                inscription.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 text-center">
        <p className="text-sm">
          Vous avez déjà un compte ?{" "}
          <Link href="/connexion" className="text-pink-600 hover:underline">
            Connectez-vous
          </Link>
        </p>
      </div>
    </div>
  )
}
