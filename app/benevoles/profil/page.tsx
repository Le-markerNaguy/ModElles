import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, Phone, MapPin, Clock, BookOpen, Users, Award, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilBenevolatPage() {
  return (
    <div className="container py-10 max-w-6xl">
      <div className="flex flex-col items-center text-center mb-10 space-y-4">
        <h1 className="text-3xl font-bold">Profil Bénévolat</h1>
        <p className="text-muted-foreground max-w-2xl">
          Informations sur votre profil de bénévole et vos activités au sein de Mod'Elles
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Dr. Émilie Ntoutoume" />
                  <AvatarFallback>EN</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">Dr. Émilie Ntoutoume</h2>
                <p className="text-pink-600 font-medium">Psychologue</p>
                <Badge className="mt-2 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                  Bénévole actif
                </Badge>

                <div className="flex items-center justify-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">32 évaluations</p>

                <div className="w-full mt-6 space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">emilie.ntoutoume@email.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">+241 XX XX XX XX</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">Libreville, Gabon</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">Membre depuis Janvier 2023</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Modifier mon profil</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Spécialisation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Domaine d'expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Traumatismes</Badge>
                  <Badge variant="secondary">SSPT</Badge>
                  <Badge variant="secondary">Violences basées sur le genre</Badge>
                  <Badge variant="secondary">Thérapie cognitive</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Langues parlées</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Français</Badge>
                  <Badge variant="outline">Anglais</Badge>
                  <Badge variant="outline">Fang</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Qualifications</h3>
                <ul className="space-y-1 text-sm">
                  <li>Doctorat en Psychologie Clinique</li>
                  <li>Certification en Thérapie Cognitivo-Comportementale</li>
                  <li>Formation spécialisée en traumatismes psychologiques</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="activites">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="activites">Activités</TabsTrigger>
              <TabsTrigger value="disponibilites">Disponibilités</TabsTrigger>
              <TabsTrigger value="evaluations">Évaluations</TabsTrigger>
              <TabsTrigger value="ressources">Ressources</TabsTrigger>
            </TabsList>

            <TabsContent value="activites" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Résumé des activités</CardTitle>
                  <CardDescription>Aperçu de vos contributions en tant que bénévole</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-pink-600">24</p>
                      <p className="text-sm text-muted-foreground">Consultations</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-pink-600">3</p>
                      <p className="text-sm text-muted-foreground">Groupes animés</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-pink-600">48</p>
                      <p className="text-sm text-muted-foreground">Heures de bénévolat</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Dernières consultations</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <div>
                            <p className="font-medium">Consultation individuelle</p>
                            <p className="text-sm text-muted-foreground">ID: #CS-2024-042</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">03/04/2024</p>
                          <p className="text-sm text-muted-foreground">14:00 - 15:00</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <div>
                            <p className="font-medium">Consultation individuelle</p>
                            <p className="text-sm text-muted-foreground">ID: #CS-2024-039</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">01/04/2024</p>
                          <p className="text-sm text-muted-foreground">10:00 - 11:00</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                          <div>
                            <p className="font-medium">Groupe de soutien</p>
                            <p className="text-sm text-muted-foreground">Survivantes de violences</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">28/03/2024</p>
                          <p className="text-sm text-muted-foreground">18:00 - 20:00</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-right">
                      <Button variant="link" size="sm">
                        Voir toutes les activités
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Impact de votre bénévolat</CardTitle>
                  <CardDescription>Mesure de l'impact de vos contributions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-pink-600 mr-2" />
                        <span>Personnes aidées</span>
                      </div>
                      <span className="font-bold">18</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-pink-600 mr-2" />
                        <span>Heures économisées pour l'organisation</span>
                      </div>
                      <span className="font-bold">48</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-pink-600 mr-2" />
                        <span>Niveau de contribution</span>
                      </div>
                      <Badge className="bg-gold-100 text-gold-800">Or</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="disponibilites" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mes disponibilités</CardTitle>
                  <CardDescription>Gérez vos créneaux de disponibilité pour les consultations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-7 gap-2">
                      <div className="text-center font-medium">Lun</div>
                      <div className="text-center font-medium">Mar</div>
                      <div className="text-center font-medium">Mer</div>
                      <div className="text-center font-medium">Jeu</div>
                      <div className="text-center font-medium">Ven</div>
                      <div className="text-center font-medium">Sam</div>
                      <div className="text-center font-medium">Dim</div>

                      <div className="h-24 border rounded-lg p-1">
                        <div className="bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 text-xs p-1 rounded mb-1">
                          14:00-16:00
                        </div>
                      </div>
                      <div className="h-24 border rounded-lg p-1">
                        <div className="bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 text-xs p-1 rounded mb-1">
                          10:00-12:00
                        </div>
                      </div>
                      <div className="h-24 border rounded-lg"></div>
                      <div className="h-24 border rounded-lg p-1">
                        <div className="bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 text-xs p-1 rounded mb-1">
                          18:00-20:00
                        </div>
                      </div>
                      <div className="h-24 border rounded-lg"></div>
                      <div className="h-24 border rounded-lg p-1">
                        <div className="bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 text-xs p-1 rounded mb-1">
                          09:00-11:00
                        </div>
                      </div>
                      <div className="h-24 border rounded-lg"></div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Modifier mes disponibilités</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Prochains rendez-vous</CardTitle>
                  <CardDescription>Consultations à venir</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Consultation individuelle</p>
                        <p className="text-sm text-muted-foreground">ID: #CS-2024-045</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">08/04/2024</p>
                        <p className="text-sm text-muted-foreground">14:00 - 15:00</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Détails
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Groupe de soutien</p>
                        <p className="text-sm text-muted-foreground">Survivantes de violences</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">11/04/2024</p>
                        <p className="text-sm text-muted-foreground">18:00 - 20:00</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Détails
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="evaluations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Évaluations reçues</CardTitle>
                  <CardDescription>Retours des personnes que vous avez aidées</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <span className="ml-2 font-bold">4.9/5</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Basé sur 32 évaluations</span>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarFallback>AN</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Anonyme</p>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="h-4 w-4 fill-current text-yellow-500" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">02/04/2024</p>
                        </div>
                        <p className="text-sm">
                          "Dr. Ntoutoume a été d'une aide précieuse dans mon parcours de guérison. Son approche
                          bienveillante et professionnelle m'a permis de me sentir en sécurité pour partager mes
                          expériences traumatiques. Je lui suis infiniment reconnaissante."
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarFallback>AN</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Anonyme</p>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="h-4 w-4 fill-current text-yellow-500" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">25/03/2024</p>
                        </div>
                        <p className="text-sm">
                          "Le groupe de soutien animé par Dr. Ntoutoume a été une véritable bouée de sauvetage pour moi.
                          L'ambiance de confiance qu'elle a su créer a permis à chacune de s'exprimer librement. Je
                          recommande vivement."
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarFallback>AN</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Anonyme</p>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < 4 ? "fill-current text-yellow-500" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">15/03/2024</p>
                        </div>
                        <p className="text-sm">
                          "Très bonne psychologue, à l'écoute et professionnelle. J'aurais aimé avoir plus de temps pour
                          la consultation, mais je comprends les contraintes."
                        </p>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button variant="outline">Voir toutes les évaluations</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ressources" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ressources pour bénévoles</CardTitle>
                  <CardDescription>Documents et outils pour vous aider dans votre bénévolat</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-pink-600 mr-3" />
                        <div>
                          <p className="font-medium">Guide du bénévole psychologue</p>
                          <p className="text-sm text-muted-foreground">PDF, 2.4 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Télécharger
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-pink-600 mr-3" />
                        <div>
                          <p className="font-medium">Protocole d'intervention en cas de crise</p>
                          <p className="text-sm text-muted-foreground">PDF, 1.8 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Télécharger
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-pink-600 mr-3" />
                        <div>
                          <p className="font-medium">Formulaires d'évaluation psychologique</p>
                          <p className="text-sm text-muted-foreground">ZIP, 3.5 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Télécharger
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-pink-600 mr-3" />
                        <div>
                          <p className="font-medium">Ressources pour l'animation de groupes de soutien</p>
                          <p className="text-sm text-muted-foreground">PDF, 4.2 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Formations pour bénévoles</CardTitle>
                  <CardDescription>Améliorez vos compétences avec nos formations spécialisées</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Intervention en situation de crise</h3>
                        <Badge>En ligne</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Formation sur les techniques d'intervention en situation de crise psychologique.
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          15/04/2024
                        </p>
                        <Button size="sm">S'inscrire</Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Approche trauma-informed</h3>
                        <Badge>Présentiel</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Formation sur l'approche tenant compte des traumatismes dans l'accompagnement psychologique.
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          22/04/2024
                        </p>
                        <Button size="sm">S'inscrire</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
