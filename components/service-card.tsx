import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  services: string[]
  image: string
}

export function ServiceCard({ icon: Icon, title, description, services, image }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-accent mt-0.5">✓</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
