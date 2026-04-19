import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
        style={{ backgroundImage: "url('/bg-hero.png')" }}
      />
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[2px]" />

      <div className="container relative z-20 mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Mundos por descubrir
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tight text-white">
          Donde la <span className="text-primary">magia</span> cobra <br />
          vida en cada página
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          AAAAAAdéntrate en reinos de dragones, hechiceros y héroes legendarios. 
          Descubre las historias que han cautivado a millones de lectores en todo el mundo.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-md text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
            Explorar Libros
          </button>
          <button className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-md text-lg font-semibold hover:bg-white/10 transition-all">
            Conocer Autores
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  )
}
