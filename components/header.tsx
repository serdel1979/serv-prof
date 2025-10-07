"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center hover:opacity-80 transition-opacity text-primary">

        <img
          src="/logo.png"   // también en /public/logo.png
          alt="Logo Servicios Profesionales"
          width={48}
          height={40}
          className="flex-shrink-0"
        />
      </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/servicios" className="text-sm font-medium hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link href="/productos" className="text-sm font-medium hover:text-primary transition-colors">
            Productos
          </Link>
          <Link href="/sobre-nosotros" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-2">


          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col py-4 gap-4">
            <Link
              href="/servicios"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={handleLinkClick}
            >
              Servicios
            </Link>
            <Link
              href="/productos"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={handleLinkClick}
            >
              Productos
            </Link>
            <Link
              href="/sobre-nosotros"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={handleLinkClick}
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={handleLinkClick}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
