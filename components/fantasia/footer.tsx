import Link from "next/link"
import { BookOpen, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0b0d] pt-20 pb-10 border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <BookOpen className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Reino de Fantasía
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Explorando los límites de la imaginación a través de las páginas de los libros más épicos del género fantástico.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-primary hover:bg-white/10 transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-primary hover:bg-white/10 transition-all">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-primary hover:bg-white/10 transition-all">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-6">Explorar</h4>
            <ul className="space-y-4">
              <li><Link href="#inicio" className="text-gray-400 hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="#libros" className="text-gray-400 hover:text-primary transition-colors">Libros Destacados</Link></li>
              <li><Link href="#autores" className="text-gray-400 hover:text-primary transition-colors">Autores Legendarios</Link></li>
              <li><Link href="#comunidad" className="text-gray-400 hover:text-primary transition-colors">Comunidad</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-6">Recursos</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Club de Lectura</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Reseñas Épicas</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Mapas de Mundos</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Glosario Mágico</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-primary" />
                <span>info@reinofantasia.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-primary" />
                <span>Bibliotecarios del Reino</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-primary" />
                <span>+34 900 123 456</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Reino de Fantasía. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-primary transition-colors">Términos</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
