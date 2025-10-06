"use client"

import type React from "react"

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
      titulo: "Materiales de Reparación y Mantenimiento",
      descripcion:
        "Productos esenciales para pequeñas reparaciones y trabajos de mantenimiento en el hogar o la empresa. Incluyen cemento rápido, selladores, masillas, pinturas, silicona, yeso y adhesivos de alta resistencia. Ideal para reparaciones rápidas, sellado de grietas, fijaciones o terminaciones.",
      valorAgregado: "Se pueden ofrecer junto con el servicio de mantenimiento o restauración.",
      buyButtonId: "buy_btn_1SFEVeI2ITUAo0A1lh6TEhPR",
    },
    {
      id: 2,
      titulo: "Iluminación y Accesorios Eléctricos",
      descripcion:
        "Amplia gama de productos eléctricos como bombillas LED, plafones, sensores de movimiento, tomas de corriente, llaves térmicas, disyuntores y enchufes inteligentes. Ideal para mejorar la eficiencia energética y modernizar instalaciones eléctricas.",
      valorAgregado: "Instalación y revisión del sistema eléctrico incluidos como servicio opcional.",
      buyButtonId: "buy_btn_1SFEWaI2ITUAo0A1YEYhb3Qw",
    },
    {
      id: 3,
      titulo: "Griferías y Accesorios Sanitarios",
      descripcion:
        "Griferías modernas, duchas, flexibles, válvulas, sifones y accesorios para baño o cocina. Diseñados para ofrecer durabilidad, eficiencia y estilo. Perfectos para renovar espacios con productos de calidad profesional.",
      valorAgregado: "Instalación profesional disponible con garantía de trabajo.",
      buyButtonId: "buy_btn_1SFEXPI2ITUAo0A1dLMXlM3z",
    },
    {
      id: 4,
      titulo: "Kit de Mantenimiento Preventivo",
      descripcion:
        "Conjunto de herramientas y materiales básicos para el mantenimiento preventivo de cualquier instalación. Incluye cinta teflón, cinta aisladora, tornillos, fusibles, bombillas, guantes, lubricantes y destornilladores. Todo lo necesario para el cuidado regular de tu hogar o negocio.",
      valorAgregado: "Kit completo listo para usar, ideal para tener siempre a mano.",
      buyButtonId: "buy_btn_1SFE76I2ITUAo0A1bbYpoyFH",
    },
  ]

  const publishableKey =
    "pk_test_51SEZ0CI2ITUAo0A1usw15Cqp2YYZda9lGbU8wDDl2n7XFtMCz2xWLiyyc3R1VGhrcdUPrd181M9894jmaOANdpBH00hH26ef6e"

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
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
    </div>
  )
}
