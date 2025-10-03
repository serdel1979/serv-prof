import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PoliticasPrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Políticas de Privacidad</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Última actualización: {new Date().toLocaleDateString()}</p>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Información que Recopilamos</h2>
                <p>
                  En Servicios Profesionales, nos comprometemos a proteger su privacidad. Recopilamos información
                  personal que usted nos proporciona voluntariamente cuando solicita nuestros servicios, incluyendo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nombre completo y datos de contacto (teléfono, email, dirección)</li>
                  <li>Información sobre el servicio solicitado</li>
                  <li>Datos de facturación y pago</li>
                  <li>Comunicaciones que mantiene con nosotros</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso de la Información</h2>
                <p>Utilizamos la información recopilada para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar y gestionar los servicios solicitados</li>
                  <li>Procesar pagos y enviar facturas</li>
                  <li>Comunicarnos con usted sobre su servicio</li>
                  <li>Mejorar nuestros servicios y atención al cliente</li>
                  <li>Enviar información sobre promociones y novedades (solo con su consentimiento)</li>
                  <li>Cumplir con obligaciones legales y fiscales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Protección de Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información
                  personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encriptación de datos sensibles</li>
                  <li>Acceso restringido a información personal solo a empleados autorizados</li>
                  <li>Revisiones periódicas de nuestras prácticas de seguridad</li>
                  <li>Formación continua de nuestro personal en protección de datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartir Información</h2>
                <p>
                  No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes
                  circunstancias:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                  <li>Cuando sea requerido por ley o por autoridades competentes</li>
                  <li>Para proteger nuestros derechos legales o la seguridad de otros</li>
                  <li>Con su consentimiento explícito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Sus Derechos</h2>
                <p>De acuerdo con el RGPD y la legislación española, usted tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar datos inexactos o incompletos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                  <li>Solicitar la limitación del procesamiento</li>
                  <li>Portabilidad de sus datos</li>
                  <li>Retirar su consentimiento en cualquier momento</li>
                </ul>
                <p>
                  Para ejercer estos derechos, puede contactarnos en info@servicios.com o llamando al +34 900 123 456.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
                <p>
                  Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Las cookies son pequeños
                  archivos de texto que se almacenan en su dispositivo. Puede configurar su navegador para rechazar
                  cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Retención de Datos</h2>
                <p>
                  Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines para
                  los que fue recopilada, incluyendo requisitos legales, contables o de informes. Los datos de
                  facturación se conservan según lo exigido por la legislación fiscal española.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cambios en esta Política</h2>
                <p>
                  Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Le
                  notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web y
                  actualizando la fecha de "última actualización".
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contacto</h2>
                <p>
                  Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos sus datos personales,
                  puede contactarnos:
                </p>
                <ul className="list-none space-y-2">
                  <li>Email: info@servicios.com</li>
                  <li>Teléfono: +34 900 123 456</li>
                  <li>Dirección: Calle Principal 123, 28001 Madrid, España</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
