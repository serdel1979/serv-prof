"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package } from "lucide-react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-buy-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "buy-button-id": string
          "publishable-key": string
        },
        HTMLElement
      >
    }
  }
}

export default function ProductosPage() {
  useEffect(() => {
    // Load Stripe script
    const script = document.createElement("script")
    script.src = "https://js.stripe.com/v3/buy-button.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const productos = [
    {
      id: 1,
      titulo: "Asesoramiento Técnico Online en Reparaciones y Mantenimiento",
      descripcion:
        "Servicio de asistencia virtual donde un técnico especializado guía al cliente paso a paso en la resolución de problemas de mantenimiento, reparación eléctrica o de fontanería. Ideal para quienes desean resolver incidencias menores sin necesidad de una visita presencial.",
      valorAgregado:
        "Incluye diagnóstico en tiempo real por videollamada y envío de recomendaciones personalizadas según el tipo de instalación.",
      buyButtonId: "buy_btn_1SFE76I2ITUAo0A1bbYpoyFH",
    },
    {
      id: 2,
      titulo: "Consultoría Energética y de Iluminación Eficiente",
      descripcion:
        "Análisis remoto del consumo eléctrico e iluminación del hogar o empresa, con recomendaciones personalizadas para reducir el gasto energético y mejorar la eficiencia. Se evalúan dispositivos, distribución lumínica y hábitos de uso.",
      valorAgregado:
        "Se entrega un informe detallado con estimaciones de ahorro y un plan de mejora adaptado al cliente.",
      buyButtonId: "buy_btn_1SFEWaI2ITUAo0A1YEYhb3Qw",
    },
    {
      id: 3,
      titulo: "Asesoramiento Online en Remodelación de Cocinas y Baños",
      descripcion:
        "Servicio digital donde un experto en diseño y mantenimiento sanitario asesora sobre la mejor selección de griferías, materiales y distribución del espacio. Se incluyen recomendaciones técnicas y estéticas para optimizar la renovación.",
      valorAgregado:
        "Incluye videollamada de consulta y envío de propuesta visual o lista de materiales sugeridos según presupuesto.",
      buyButtonId: "buy_btn_1SFEXPI2ITUAo0A1dLMXlM3z",
    },
    {
      id: 4,
      titulo: "Plan Personalizado de Mantenimiento Preventivo Online",
      descripcion:
        "Evaluación virtual de las instalaciones del cliente (eléctricas, sanitarias, estructurales o de climatización) y creación de un plan preventivo anual con alertas y recordatorios. Ideal para empresas o propietarios que quieren evitar averías costosas.",
      valorAgregado:
        "Incluye calendario de mantenimiento personalizado y seguimiento mensual vía correo o chat técnico.",
      buyButtonId: "buy_btn_1SFEVeI2ITUAo0A1lh6TEhPR",
    },
  ];
  

  const publishableKey =
    "pk_test_51SEZ0CI2ITUAo0A1usw15Cqp2YYZda9lGbU8wDDl2n7XFtMCz2xWLiyyc3R1VGhrcdUPrd181M9894jmaOANdpBH00hH26ef6e"

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Header />
      <div className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Package className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestros Productos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Productos de calidad profesional para todas tus necesidades de reparación y mantenimiento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {productos.map((producto) => (
            <Card key={producto.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-balance">{producto.titulo}</CardTitle>
                <CardDescription className="text-base text-pretty">{producto.descripcion}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-accent-foreground">
                    <span className="font-semibold">Valor agregado:</span> {producto.valorAgregado}
                  </p>
                </div>
                <div className="flex justify-center">
                  <stripe-buy-button buy-button-id={producto.buyButtonId} publishable-key={publishableKey} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-2xl">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Modo de prueba activo:</span> Estos botones de pago están en modo de
              prueba. No se realizarán cargos reales.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
