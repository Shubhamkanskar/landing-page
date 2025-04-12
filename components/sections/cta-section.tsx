import { Button } from "@/components/ui/button"
import AnimatedWordCycle from "@/components/ui/animated-word-cycle"

export function CTASection() {
  return (
    <section className="py-20 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-black border border-white/10 p-8 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Ready to{" "}
              <AnimatedWordCycle
                words={["transform", "elevate", "improve", "revolutionize", "supercharge"]}
                interval={3000}
                className="text-white"
              />{" "}
              your workflow?
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-zinc-400 mb-8">
              Join thousands of satisfied customers who have already taken their productivity to the next level.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
