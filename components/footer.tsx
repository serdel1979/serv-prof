import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios Profesionales</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Expertos en reparación y mantenimiento del hogar. Calidad y confianza garantizada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Fontanería</li>
              <li>Electricidad</li>
              <li>Albañilería</li>
              <li>Pintura</li>
              <li>Climatización</li>
              <li>Cerrajería</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span> jose.salazar@nextmove25.com | roberto.sanroman@nextmove25.com </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  128 City Road, London, United Kingdom, EC1V 2NX
                  <br />
                  Madrid, España
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horario</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5" />
                <div>
                  <p>Lunes - Viernes</p>
                  <p className="font-medium">8:00 - 20:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5" />
                <div>
                  <p>Sábados</p>
                  <p className="font-medium">9:00 - 14:00</p>
                </div>
              </li>
              <li className="text-accent font-medium">Urgencias 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              &copy; {new Date().getFullYear()} NEXTMOVE25 LTD Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-primary-foreground/60">
              <Link
                href="/politicas-de-privacidad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Políticas de Privacidad
              </Link>
              <Link
                href="/terminos-y-condiciones"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
