import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, Award, Users, Clock } from "lucide-react"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Sobre Nosotros</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Expertos en servicios del hogar con años de experiencia
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">Nuestra Experiencia</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Con más de 15 años en el sector, nos hemos consolidado como una empresa de referencia en servicios de
                  reparación y mantenimiento del hogar. Nuestro equipo de profesionales certificados está preparado para
                  resolver cualquier necesidad que tengas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajamos con las mejores marcas y materiales del mercado, garantizando resultados duraderos y de
                  máxima calidad en cada proyecto que realizamos.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Nuestro Compromiso</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nos comprometemos a ofrecer un servicio personalizado, adaptándonos a las necesidades específicas de
                  cada cliente. La satisfacción de nuestros clientes es nuestra prioridad número uno.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ofrecemos presupuestos sin compromiso, transparencia total en nuestros precios y garantía en todos
                  nuestros trabajos. Además, contamos con servicio de urgencias 24/7 para cuando más nos necesites.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
              </div>
              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Trabajos Garantizados</div>
              </div>
              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Servicio de Urgencias</div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-3">Profesionalidad</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Equipo certificado y en constante formación para ofrecer el mejor servicio
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-3">Transparencia</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Presupuestos claros sin sorpresas ni costes ocultos
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-3">Compromiso</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Garantía en todos nuestros trabajos y atención personalizada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
