import Image from "next/image"

const parts = [
  {
    number: "01",
    title: "La Tapa Armónica",
    description:
      "Fabricada generalmente en abeto, es la superficie frontal del violonchelo que vibra para producir el sonido.",
  },
  {
    number: "02",
    title: "El Puente",
    description:
      "Pequeña pieza de arce que sostiene las cuerdas y transmite las vibraciones a la tapa armónica.",
  },
  {
    number: "03",
    title: "Las Efes",
    description:
      "Aberturas en forma de F que permiten que el sonido escape de la caja de resonancia.",
  },
  {
    number: "04",
    title: "El Mástil y Diapasón",
    description:
      "El mástil de arce sostiene el diapasón de ébano donde los dedos presionan las cuerdas.",
  },
]

export function AnatomySection() {
  return (
    <section id="anatomia" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Construcción
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Anatomía del violonchelo
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Cada parte del violonchelo ha sido perfeccionada durante siglos 
            para producir su característico sonido cálido y resonante.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/images/cello-detail.jpg"
              alt="Detalle del violonchelo"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid gap-8">
            {parts.map((part) => (
              <div
                key={part.number}
                className="flex gap-6 group cursor-pointer"
              >
                <span className="font-serif text-4xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                  {part.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold group-hover:text-primary transition-colors">
                    {part.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {part.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
