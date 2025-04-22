"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  Users,
  Calendar,
  Heart,
  FileText,
  Settings,
  Bell,
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="container py-10 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-64 flex-shrink-0">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="text-xl">Administration</CardTitle>
              <CardDescription>Gestion de la plateforme</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="flex flex-col">
                <Button
                  variant={activeTab === "dashboard" ? "default" : "ghost"}
                  className={`justify-start ${activeTab === "dashboard" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Tableau de bord
                </Button>
                <Button
                  variant={activeTab === "users" ? "default" : "ghost"}
                  className={`justify-start ${activeTab === "users" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("users")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Utilisateurs
                </Button>
                <Button
                  variant={activeTab === "appointments" ? "default" : "ghost"}
                  className={`justify-start ${activeTab === "appointments" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("appointments")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Rendez-vous
                </Button>
                <Button
                  variant={activeTab === "groups" ? "default" : "ghost"}
                  className={`justify-start ${activeTab === "groups" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("groups")}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Groupes de soutien
                </Button>
                <Button
                  variant={activeTab === "resources" ? "default" : "ghost"}
                  className={`justify-start ${activeTab === "resources" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("resources")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Ressources
                </Button>
                <Button
                  variant={activeTab === "settings" ? "default" : "ghost"}
                  className={`justify-start ${activeTab === "settings" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Paramètres
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {activeTab === "dashboard" && <DashboardTab />}
          {activeTab === "users" && <UsersTab />}
          {activeTab === "appointments" && <AppointmentsTab />}
          {activeTab === "groups" && <GroupsTab />}
          {activeTab === "resources" && <ResourcesTab />}
          {activeTab === "settings" && <SettingsTab />}
        </div>
      </div>
    </div>
  )
}

function DashboardTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Tableau de bord</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Select defaultValue="today">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Période" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Aujourd'hui</SelectItem>
              <SelectItem value="week">Cette semaine</SelectItem>
              <SelectItem value="month">Ce mois</SelectItem>
              <SelectItem value="year">Cette année</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisatrices</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+12% par rapport au mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rendez-vous</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">324</div>
            <p className="text-xs text-muted-foreground">+8% par rapport au mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Groupes de soutien</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+2 nouveaux groupes ce mois</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ressources</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86</div>
            <p className="text-xs text-muted-foreground">+6 nouvelles ressources</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Activité utilisatrices</CardTitle>
            <CardDescription>Nombre d'utilisatrices actives par jour</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="w-full h-[200px] bg-muted/20 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Graphique d'activité</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rendez-vous par service</CardTitle>
            <CardDescription>Répartition des rendez-vous par type de service</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="w-full h-[200px] bg-muted/20 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Graphique de répartition</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Activité récente</CardTitle>
          <CardDescription>Les dernières actions sur la plateforme</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-pink-100 p-2">
                <Calendar className="h-4 w-4 text-pink-600" />
              </div>
              <div>
                <p className="font-medium">Nouveau rendez-vous</p>
                <p className="text-sm text-muted-foreground">Marie K. a pris rendez-vous avec Dr. Émilie Ntoutoume</p>
                <p className="text-xs text-muted-foreground">Il y a 10 minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-pink-100 p-2">
                <Users className="h-4 w-4 text-pink-600" />
              </div>
              <div>
                <p className="font-medium">Nouvelle inscription</p>
                <p className="text-sm text-muted-foreground">Sophie T. a créé un compte</p>
                <p className="text-xs text-muted-foreground">Il y a 45 minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-pink-100 p-2">
                <Heart className="h-4 w-4 text-pink-600" />
              </div>
              <div>
                <p className="font-medium">Inscription à un groupe</p>
                <p className="text-sm text-muted-foreground">Jeanne M. a rejoint le groupe "Gestion de l'anxiété"</p>
                <p className="text-xs text-muted-foreground">Il y a 2 heures</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function UsersTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Gestion des utilisateurs</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher..." className="pl-8 w-[250px]" />
          </div>
          <Button className="bg-pink-600 hover:bg-pink-700">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter un utilisateur
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Utilisateurs</CardTitle>
              <CardDescription>Liste de tous les utilisateurs de la plateforme</CardDescription>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrer par rôle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les rôles</SelectItem>
                <SelectItem value="user">Utilisatrices</SelectItem>
                <SelectItem value="professional">Professionnels</SelectItem>
                <SelectItem value="admin">Administrateurs</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Utilisateur</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Date d'inscription</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p>Marie Kouassi</p>
                      <p className="text-xs text-muted-foreground">marie.k@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Utilisatrice</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-500">Actif</Badge>
                </TableCell>
                <TableCell>12/03/2024</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <XCircle className="h-4 w-4 mr-2" />
                        Désactiver
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>EN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p>Dr. Émilie Ntoutoume</p>
                      <p className="text-xs text-muted-foreground">emilie.n@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Psychologue</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-500">Actif</Badge>
                </TableCell>
                <TableCell>05/01/2024</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <XCircle className="h-4 w-4 mr-2" />
                        Désactiver
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p>Jeanne Mba</p>
                      <p className="text-xs text-muted-foreground">jeanne.m@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Administrateur</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-500">Actif</Badge>
                </TableCell>
                <TableCell>15/12/2023</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <XCircle className="h-4 w-4 mr-2" />
                        Désactiver
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function AppointmentsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Gestion des rendez-vous</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher..." className="pl-8 w-[250px]" />
          </div>
          <Button className="bg-pink-600 hover:bg-pink-700">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter un rendez-vous
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Rendez-vous</CardTitle>
              <CardDescription>Liste de tous les rendez-vous programmés</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrer par statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="upcoming">À venir</SelectItem>
                  <SelectItem value="completed">Terminés</SelectItem>
                  <SelectItem value="cancelled">Annulés</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrer par type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  <SelectItem value="health">Santé</SelectItem>
                  <SelectItem value="psychology">Psychologie</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Professionnel</TableHead>
                <TableHead>Date & Heure</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p>Marie Kouassi</p>
                      <p className="text-xs text-muted-foreground">marie.k@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>Dr. Émilie Ntoutoume</p>
                    <p className="text-xs text-muted-foreground">Psychologue</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>15 avril 2024</p>
                    <p className="text-xs text-muted-foreground">14:30</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Consultation psychologique</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-yellow-500">À venir</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Marquer comme terminé
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <XCircle className="h-4 w-4 mr-2" />
                        Annuler
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                    <div>
                      <p>Sophie Taty</p>
                      <p className="text-xs text-muted-foreground">sophie.t@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>Dr. Claire Mba</p>
                    <p className="text-xs text-muted-foreground">Gynécologue</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>12 avril 2024</p>
                    <p className="text-xs text-muted-foreground">10:00</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Consultation médicale</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-500">Terminé</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Marquer comme terminé
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <XCircle className="h-4 w-4 mr-2" />
                        Annuler
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p>Jeanne Mba</p>
                      <p className="text-xs text-muted-foreground">jeanne.m@example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>Dr. Marc Ondo</p>
                    <p className="text-xs text-muted-foreground">Psychologue</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>10 avril 2024</p>
                    <p className="text-xs text-muted-foreground">16:00</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Consultation psychologique</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-red-500">Annulé</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Reprogrammer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function GroupsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Gestion des groupes de soutien</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher..." className="pl-8 w-[250px]" />
          </div>
          <Button className="bg-pink-600 hover:bg-pink-700">
            <Plus className="h-4 w-4 mr-2" />
            Créer un groupe
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Groupes de soutien</CardTitle>
              <CardDescription>Liste de tous les groupes de soutien</CardDescription>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrer par statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="upcoming">À venir</SelectItem>
                <SelectItem value="completed">Terminés</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom du groupe</TableHead>
                <TableHead>Animateur</TableHead>
                <TableHead>Participants</TableHead>
                <TableHead>Horaire</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <div>
                    <p>Survivantes de violences</p>
                    <p className="text-xs text-muted-foreground">Groupe de soutien</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>SO</AvatarFallback>
                    </Avatar>
                    <p>Dr. Sylvie Obame</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <p>8/12</p>
                    <Progress value={66} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>Mardi, 18h-20h</p>
                    <p className="text-xs text-muted-foreground">Du 15 avril au 17 juin</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-500">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="h-4 w-4 mr-2" />
                        Voir participants
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <XCircle className="h-4 w-4 mr-2" />
                        Annuler le groupe
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div>
                    <p>Gestion de l'anxiété</p>
                    <p className="text-xs text-muted-foreground">Groupe de soutien</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                    <p>Dr. Claire Mba</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <p>10/15</p>
                    <Progress value={66} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>Jeudi, 17h-19h</p>
                    <p className="text-xs text-muted-foreground">Du 18 avril au 20 juin</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-yellow-500">À venir</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="h-4 w-4 mr-2" />
                        Voir participants
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <XCircle className="h-4 w-4 mr-2" />
                        Annuler le groupe
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div>
                    <p>Estime de soi et confiance</p>
                    <p className="text-xs text-muted-foreground">Groupe de soutien</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>EN</AvatarFallback>
                    </Avatar>
                    <p>Dr. Émilie Ntoutoume</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <p>12/12</p>
                    <Progress value={100} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>Lundi, 17h-19h</p>
                    <p className="text-xs text-muted-foreground">Du 5 février au 8 avril</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">Terminé</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="h-4 w-4 mr-2" />
                        Voir participants
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Clock className="h-4 w-4 mr-2" />
                        Reprogrammer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function ResourcesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Gestion des ressources</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher..." className="pl-8 w-[250px]" />
          </div>
          <Button className="bg-pink-600 hover:bg-pink-700">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter une ressource
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Ressources</CardTitle>
              <CardDescription>Liste de toutes les ressources disponibles</CardDescription>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrer par type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="guide">Guides</SelectItem>
                <SelectItem value="video">Vidéos</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="article">Articles</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Date de publication</TableHead>
                <TableHead>Vues</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <div>
                    <p>Guide de gestion du stress</p>
                    <p className="text-xs text-muted-foreground">Techniques et exercices pratiques</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Guide</Badge>
                </TableCell>
                <TableCell>Santé mentale</TableCell>
                <TableCell>12/03/2024</TableCell>
                <TableCell>245</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Mettre en avant
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div>
                    <p>Comprendre votre cycle</p>
                    <p className="text-xs text-muted-foreground">Guide sur les phases du cycle menstruel</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Article</Badge>
                </TableCell>
                <TableCell>Santé reproductive</TableCell>
                <TableCell>05/02/2024</TableCell>
                <TableCell>378</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Mettre en avant
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div>
                    <p>Méditation guidée pour l'anxiété</p>
                    <p className="text-xs text-muted-foreground">Séances de méditation guidée</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Audio</Badge>
                </TableCell>
                <TableCell>Bien-être</TableCell>
                <TableCell>20/01/2024</TableCell>
                <TableCell>156</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Mettre en avant
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function SettingsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Paramètres</h2>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">Général</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations générales</CardTitle>
              <CardDescription>Paramètres généraux de la plateforme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-name">Nom du site</Label>
                <Input id="site-name" defaultValue="Mod'Elles" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Description du site</Label>
                <Input
                  id="site-description"
                  defaultValue="Plateforme dédiée à la santé reproductive et au soutien psychologique des femmes au Gabon"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email de contact</Label>
                <Input id="contact-email" defaultValue="contact@modelles.ga" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency-phone">Numéro d'urgence</Label>
                <Input id="emergency-phone" defaultValue="XXX-XXX-XXX" />
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700">Enregistrer les modifications</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de notification</CardTitle>
              <CardDescription>Gérer les notifications envoyées aux utilisateurs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Rappels de rendez-vous</p>
                    <p className="text-sm text-muted-foreground">
                      Envoyer des rappels avant les rendez-vous programmés
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="24">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 heure</SelectItem>
                        <SelectItem value="3">3 heures</SelectItem>
                        <SelectItem value="24">24 heures</SelectItem>
                        <SelectItem value="48">48 heures</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notifications de groupe</p>
                    <p className="text-sm text-muted-foreground">
                      Envoyer des notifications pour les activités de groupe
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes</SelectItem>
                        <SelectItem value="important">Importantes uniquement</SelectItem>
                        <SelectItem value="none">Aucune</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notifications par email</p>
                    <p className="text-sm text-muted-foreground">Envoyer des notifications par email</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes</SelectItem>
                        <SelectItem value="important">Importantes uniquement</SelectItem>
                        <SelectItem value="none">Aucune</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700">Enregistrer les modifications</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de sécurité</CardTitle>
              <CardDescription>Gérer les paramètres de sécurité de la plateforme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Authentification à deux facteurs</p>
                    <p className="text-sm text-muted-foreground">
                      Exiger l'authentification à deux facteurs pour les administrateurs
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="required">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="required">Obligatoire</SelectItem>
                        <SelectItem value="optional">Optionnel</SelectItem>
                        <SelectItem value="disabled">Désactivé</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Durée de session</p>
                    <p className="text-sm text-muted-foreground">Durée avant déconnexion automatique par inactivité</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="60">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 heure</SelectItem>
                        <SelectItem value="120">2 heures</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Mode urgence</p>
                    <p className="text-sm text-muted-foreground">Configuration du bouton d'urgence et des alertes</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Configurer</Button>
                  </div>
                </div>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700">Enregistrer les modifications</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="api" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres API</CardTitle>
              <CardDescription>Gérer les clés API et les intégrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Clé API</p>
                    <p className="text-sm text-muted-foreground">Clé pour accéder à l'API de la plateforme</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input className="w-[300px]" value="••••••••••••••••••••••••••••••" readOnly />
                    <Button variant="outline" size="sm">
                      Régénérer
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Webhook URL</p>
                    <p className="text-sm text-muted-foreground">URL pour les notifications webhook</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input className="w-[300px]" placeholder="https://example.com/webhook" />
                    <Button variant="outline" size="sm">
                      Tester
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Intégrations</p>
                    <p className="text-sm text-muted-foreground">Gérer les intégrations tierces</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Configurer</Button>
                  </div>
                </div>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700">Enregistrer les modifications</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
