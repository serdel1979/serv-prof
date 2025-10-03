import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Servicios Profesionales para tu Hogar</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Expertos en reparación, mantenimiento y reformas. Calidad garantizada y atención personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2 text-lg">
                <Link href="/contacto">
                  <Phone className="h-5 w-5" />
                  Solicitar Presupuesto
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Profesionales Certificados</h3>
              <p className="text-muted-foreground">Equipo cualificado con años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Garantía de Calidad</h3>
              <p className="text-muted-foreground">Todos nuestros trabajos están garantizados</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Urgencias 24/7</h3>
              <p className="text-muted-foreground">Disponibles cuando más nos necesitas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">¿Necesitas un Profesional?</h2>
            <p className="text-xl mb-8 leading-relaxed">Contacta con nosotros y recibe un presupuesto sin compromiso</p>
            <Button asChild size="lg" variant="secondary" className="gap-2 text-lg">
              <Link href="tel:+34900123456">
                <Phone className="h-5 w-5" />
                Llamar Ahora: +34 900 123 456
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
