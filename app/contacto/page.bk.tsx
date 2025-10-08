import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Contacto</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos y recibe un presupuesto sin compromiso
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>

                <div className="space-y-6">


                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">Escríbenos un correo</p>
                      <Button asChild variant="link" className="h-auto p-0 text-base">
                        <Link href="mailto:info@nextmove25.com">info@nextmove25.com</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Dirección</h3>
                      <p className="text-muted-foreground mb-2">Visítanos en nuestra oficina</p>
                      <p className="text-base">
                        128 City Road, London, United Kingdom, EC1V 2NX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horario</h3>
                      <p className="text-muted-foreground mb-2">Lunes - Viernes: 8:00 - 20:00</p>
                      <p className="text-muted-foreground mb-2">Sábados: 9:00 - 14:00</p>
                      <p className="text-accent font-semibold">Urgencias 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Solicita un Presupuesto</h2>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Servicio
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="fontaneria">Fontanería</option>
                      <option value="electricidad">Electricidad</option>
                      <option value="albanileria">Albañilería</option>
                      <option value="pintura">Pintura y Decoración</option>
                      <option value="climatizacion">Climatización</option>
                      <option value="cerrajeria">Cerrajería</option>
                      <option value="reformas">Reformas Integrales</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Cuéntanos qué necesitas..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="h-5 w-5" />
                    Enviar Solicitud
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
