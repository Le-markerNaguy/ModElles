"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Bell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { ModeToggle } from "@/components/mode-toggle"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

const navigation = [
  { name: "Tableau de bord", href: "/partenaires/tableau-de-bord" },
  { name: "Mes annonces", href: "/partenaires/annonces" },
  { name: "Candidatures", href: "/partenaires/candidatures" },
  { name: "Statistiques", href: "/partenaires/statistiques" },
  { name: "Mon profil", href: "/partenaires/profil" },
]

export function PartenaireHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()

  const handleLogout = () => {
    toast({
      title: "Déconnexion réussie",
      description: "Vous avez été déconnecté avec succès.",
    })
    router.push("/partenaires/connexion")
  }

  return (
    <header className="bg-white dark:bg-gray-950 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/partenaires/tableau-de-bord" className="-m-1.5 p-1.5">
            <span className="sr-only">Mod'Elles</span>
            <Logo className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              >
                <span className="sr-only">Ouvrir le menu principal</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex items-center justify-between">
                <Logo className="h-8 w-auto" />
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Fermer le menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        pathname === item.href
                          ? "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    variant="ghost"
                    className="flex w-full items-center gap-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    Déconnexion
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.href
                  ? "text-pink-600 dark:text-pink-400"
                  : "text-gray-900 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-pink-600">
              3
            </Badge>
          </Button>
          <ModeToggle />
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </nav>
    </header>
  )
}
