import Image from "next/image"

const featuredBooks = [
  {
    title: "El Nombre del Viento",
    author: "Patrick Rothfuss",
    description: "La historia de Kvothe, un músico y mago legendario que narra su propia vida desde sus humildes comienzos.",
    image: "/books/nombre-viento.png",
    category: "Épica"
  },
  {
    title: "El Camino de los Reyes",
    author: "Brandon Sanderson",
    description: "En un mundo devastado por tormentas mágicas, varios destinos se entrelazan en una épica sin precedentes.",
    image: "/books/camino-reyes.png",
    category: "Alta Fantasía"
  },
  {
    title: "Juego de Tronos",
    author: "George R.R. Martin",
    description: "Nobles casas luchan por el Trono de Hierro mientras una antigua amenaza despierta en el norte helado.",
    image: "/books/juego-tronos.png",
    category: "Fantasía Oscura"
  }
]

export function HistorySection() {
  return (
    <section id="libros" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Libros <span className="text-primary">Destacados</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Una selección de las obras más emblemáticas del género fantástico que todo amante de la literatura debe conocer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {featuredBooks.map((book, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-2xl bg-muted shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-primary/20">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-lg bg-primary/90 text-primary-foreground text-xs font-bold backdrop-blur-md shadow-lg">
                    {book.category}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {book.title}
              </h3>
              <p className="text-primary text-sm font-bold mb-4 tracking-wide uppercase">
                {book.author}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-foreground transition-colors">
                {book.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
