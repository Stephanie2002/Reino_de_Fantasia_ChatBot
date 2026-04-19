import { BookOpen, Users, Scroll, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: BookOpen,
    title: "Club de Lectura",
    description:
      "Únete a nuestras discusiones mensuales sobre las mejores sagas de fantasía.",
  },
  {
    icon: Sparkles,
    title: "Sistemas de Magia",
    description:
      "Explora y debate sobre los sistemas de magia más originales de la literatura.",
  },
  {
    icon: Users,
    title: "Foro Real",
    description:
      "Conecta con miles de lectores apasionados y comparte tus propias teorías.",
  },
  {
    icon: Scroll,
    title: "Crónicas",
    description:
      "Accede a contenido exclusivo, entrevistas con autores y noticias del género.",
  },
]

export function LearnSection() {
  return (
    <section id="comunidad" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Tu aventura comienza
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Únete a la <span className="text-primary italic">Comunidad</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty text-lg">
              No dejes que tu viaje termine en la última página. En el Reino de Fantasía, 
              creemos que las historias son mejores cuando se comparten. Únete a miles 
              de viajeros que, como tú, buscan la magia en cada rincón del mundo literario.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 bg-primary hover:bg-primary/90">
                Unirse Ahora
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-primary/20">
                Ver Crónicas
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-2xl border border-primary/10 bg-card hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
