import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Términos y Condiciones</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Última actualización: {new Date().toLocaleDateString()}</p>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de los Términos</h2>
                <p>
                  Al contratar los servicios de Servicios Profesionales, usted acepta estar sujeto a estos términos y
                  condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros
                  servicios. Estos términos constituyen un acuerdo legal vinculante entre usted y nuestra empresa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Descripción de Servicios</h2>
                <p>
                  Servicios Profesionales ofrece servicios de reparación, mantenimiento y reformas del hogar, incluyendo
                  pero no limitado a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fontanería: reparaciones, instalaciones y mantenimiento</li>
                  <li>Electricidad: instalaciones eléctricas, reparaciones y certificaciones</li>
                  <li>Albañilería: construcción, reparación y acabados</li>
                  <li>Pintura y decoración: interior y exterior</li>
                  <li>Climatización: instalación y mantenimiento de sistemas</li>
                  <li>Cerrajería: apertura, cambio de cerraduras y seguridad</li>
                  <li>Reformas integrales: proyectos completos de renovación</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Presupuestos y Precios</h2>
                <p>
                  Todos los presupuestos son gratuitos y sin compromiso. Los precios indicados en el presupuesto son
                  válidos durante 30 días desde su emisión. El presupuesto incluye:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Descripción detallada del trabajo a realizar</li>
                  <li>Materiales necesarios y su coste</li>
                  <li>Mano de obra</li>
                  <li>Plazo estimado de ejecución</li>
                  <li>IVA y otros impuestos aplicables</li>
                </ul>
                <p>
                  Cualquier trabajo adicional no incluido en el presupuesto original será comunicado y requerirá su
                  aprobación antes de su ejecución.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Forma de Pago</h2>
                <p>Aceptamos las siguientes formas de pago:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Efectivo</li>
                  <li>Transferencia bancaria</li>
                  <li>Tarjeta de crédito/débito</li>
                  <li>Bizum</li>
                </ul>
                <p>
                  Para trabajos superiores a 1.000€, se requerirá un anticipo del 40% antes de comenzar. El resto se
                  abonará al finalizar el trabajo. Para reformas integrales, se establecerá un calendario de pagos según
                  las fases del proyecto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Garantías</h2>
                <p>Ofrecemos las siguientes garantías:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mano de obra: 2 años desde la finalización del trabajo</li>
                  <li>Materiales: según garantía del fabricante</li>
                  <li>Instalaciones: 1 año para instalaciones completas</li>
                </ul>
                <p>
                  La garantía no cubre daños causados por uso inadecuado, negligencia, modificaciones no autorizadas o
                  desgaste normal. Para hacer efectiva la garantía, debe conservar la factura original y notificarnos
                  cualquier defecto dentro del período de garantía.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Cancelaciones y Modificaciones</h2>
                <p>
                  Las cancelaciones deben notificarse con al menos 24 horas de antelación. Cancelaciones con menos aviso
                  pueden estar sujetas a un cargo del 30% del presupuesto. Si necesita modificar la fecha o el alcance
                  del trabajo, contacte con nosotros lo antes posible para reorganizar el servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Responsabilidades del Cliente</h2>
                <p>El cliente se compromete a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar acceso adecuado a las áreas de trabajo</li>
                  <li>Asegurar que las instalaciones existentes cumplan con las normativas vigentes</li>
                  <li>Retirar objetos de valor o frágiles del área de trabajo</li>
                  <li>Informar sobre cualquier problema conocido que pueda afectar el trabajo</li>
                  <li>Estar presente o designar un representante durante la ejecución del trabajo</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitación de Responsabilidad</h2>
                <p>
                  Servicios Profesionales no será responsable de daños indirectos, incidentales o consecuentes que
                  puedan surgir del uso de nuestros servicios. Nuestra responsabilidad se limita al valor del servicio
                  contratado. Contamos con seguro de responsabilidad civil profesional.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Servicio de Urgencias</h2>
                <p>
                  Nuestro servicio de urgencias 24/7 está disponible para emergencias reales (fugas graves, averías
                  eléctricas peligrosas, etc.). Este servicio tiene un recargo del 50% sobre la tarifa normal en horario
                  nocturno (22:00-8:00) y del 100% en festivos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Protección de Datos</h2>
                <p>
                  El tratamiento de sus datos personales se rige por nuestra Política de Privacidad, que forma parte
                  integral de estos términos y condiciones. Sus datos serán tratados conforme al RGPD y la legislación
                  española de protección de datos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Resolución de Conflictos</h2>
                <p>
                  En caso de cualquier disputa relacionada con nuestros servicios, ambas partes se comprometen a
                  intentar resolverla de manera amistosa. Si no se alcanza un acuerdo, las partes se someten a los
                  juzgados y tribunales de Madrid, España, renunciando a cualquier otro fuero que pudiera
                  corresponderles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Modificaciones de los Términos</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios
                  entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Es su responsabilidad
                  revisar periódicamente estos términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contacto</h2>
                <p>Para cualquier consulta sobre estos términos y condiciones, puede contactarnos:</p>
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
