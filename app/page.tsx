import { Header } from "@/components/fantasia/header"
import { HeroSection } from "@/components/fantasia/hero-section"
import { HistorySection } from "@/components/fantasia/history-section"
import { MaestrosSection } from "@/components/fantasia/maestros-section"
import { LearnSection } from "@/components/fantasia/learn-section"
import { Footer } from "@/components/fantasia/footer"
import { Chatbot } from "@/components/fantasia/chatbot"

export default function FantasiaPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HistorySection />
        <MaestrosSection />
        <LearnSection />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
