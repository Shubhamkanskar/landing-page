import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"
import { BentoFeaturesSection } from "@/components/sections/bento-features-section"
import { SimpleTestimonialsSection } from "@/components/sections/simple-testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CompareSection } from "@/components/sections/compare-section"
import { HeroPill } from "@/components/ui/hero-pill"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030303]">
      <main className="flex-1">
        <div className="fixed bottom-4 right-4 z-50">
          <HeroPill
            href="#"
            label="New features released!"
            announcement="📣 News"
            className="bg-white/10 ring-white/20 [&_div]:bg-white/20 [&_div]:text-white [&_p]:text-white [&_svg_path]:fill-white"
          />
        </div>
        <HeroGeometric badge="SaaSify" title1="Empower Your" title2="Business Growth" />
        <BentoFeaturesSection />
        <CompareSection />
        <SimpleTestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
