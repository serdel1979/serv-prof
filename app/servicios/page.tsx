import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { Wrench, Home, Droplets, Zap, Hammer, Paintbrush, Wind, Lock } from "lucide-react"

export default function ServiciosPage() {
  const mainServices = [
    {
      icon: Droplets,
      title: "Fontanería",
      description: "Soluciones completas para todas tus necesidades de fontanería",
      services: [
        "Reparación de grifos y cisternas",
        "Instalación de sanitarios",
        "Sustitución de tuberías",
        "Desatascos y limpieza",
      ],
      image: "/plumber-fixing-pipes-professional.jpg",
    },
    {
      icon: Zap,
      title: "Electricidad",
      description: "Instalaciones eléctricas seguras y certificadas",
      services: [
        "Instalación de cuadros eléctricos",
        "Reparación de averías",
        "Certificados de instalación",
        "Domótica básica",
      ],
      image: "/electrician-working-with-wires-professional.jpg",
    },
    {
      icon: Hammer,
      title: "Albañilería",
      description: "Trabajos de construcción y reparación de calidad",
      services: [
        "Levantamiento de tabiques",
        "Enlucido de paredes",
        "Colocación de azulejos",
        "Reparación de fachadas",
      ],
      image: "/mason-laying-bricks-construction-work.jpg",
    },
    {
      icon: Paintbrush,
      title: "Pintura y Decoración",
      description: "Transforma tus espacios con acabados profesionales",
      services: [
        "Pintura plástica y esmaltes",
        "Estuco y efectos decorativos",
        "Pintura antihumedad",
        "Restauración de carpintería",
      ],
      image: "/painter-painting-wall-professional-interior.jpg",
    },
    {
      icon: Wind,
      title: "Climatización",
      description: "Confort térmico durante todo el año",
      services: [
        "Instalación de aire acondicionado",
        "Mantenimiento de calefacción",
        "Sustitución de radiadores",
        "Sistemas de ventilación",
      ],
      image: "/air-conditioning-installation-hvac-technician.jpg",
    },
    {
      icon: Lock,
      title: "Cerrajería",
      description: "Seguridad y acceso garantizado",
      services: [
        "Apertura de puertas",
        "Cambio de cerraduras",
        "Instalación de sistemas de seguridad",
        "Duplicado de llaves",
      ],
      image: "/locksmith-installing-door-lock-security.jpg",
    },
  ]

  const additionalServices = [
    {
      icon: Wrench,
      title: "Reparación y Mantenimiento",
      items: [
        "Reparación de grifos y fugas",
        "Instalación de lámparas y enchufes",
        "Montaje de muebles",
        "Colocación de cortinas y persianas",
        "Sellado de juntas",
      ],
    },
    {
      icon: Home,
      title: "Reformas Integrales",
      items: [
        "Reformas de cocinas y baños",
        "Redistribución de espacios",
        "Cambio de suelos",
        "Revestimiento de paredes",
        "Proyectos completos",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestros Servicios</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Soluciones completas para todas las necesidades de tu hogar
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Servicios Principales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expertos certificados en cada área
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Adicionales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
