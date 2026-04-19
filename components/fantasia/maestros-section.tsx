"use client"

const authors = [
  {
    name: "J.R.R. Tolkien",
    title: "El Padre de la Fantasía",
    description: "Creador de la Tierra Media y el universo de El Señor de los Anillos.",
    initials: "JT"
  },
  {
    name: "George R.R. Martin",
    title: "Maestro de la Intriga",
    description: "Autor de Canción de Hielo y Fuego, conocido por su realismo crudo.",
    initials: "GM"
  },
  {
    name: "Brandon Sanderson",
    title: "Arquitecto de Mundos",
    description: "Famoso por sus intrincados sistemas de magia y el universo Cosmere.",
    initials: "BS"
  },
  {
    name: "Patrick Rothfuss",
    title: "Poeta de la Prosa",
    description: "Autor de Crónica del Asesino de Reyes, destacando por su bella narrativa.",
    initials: "PR"
  }
]

export function MaestrosSection() {
  return (
    <section id="autores" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Autores <span className="text-primary">Legendarios</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Los maestros de la pluma que han dado vida a los mundos más memorables de la literatura fantástica.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {authors.map((author, index) => (
            <div key={index} className="p-8 rounded-3xl bg-card border border-border text-center hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-primary/5">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-all duration-300">
                <span className="font-serif text-3xl font-bold text-primary group-hover:text-primary-foreground">
                  {author.initials}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-1">
                {author.name}
              </h3>
              <p className="text-primary text-sm font-bold mb-4 uppercase tracking-widest">
                {author.title}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                {author.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
