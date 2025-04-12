"use client"
import AnimatedWordCycle from "@/components/ui/animated-word-cycle"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] left-[20%] h-[80%] w-[60%] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-[30%] right-[20%] h-[60%] w-[50%] rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
              <span className="mr-1 rounded-full bg-primary h-2 w-2"></span>
              <span className="font-medium">New features released</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Empower your{" "}
              <AnimatedWordCycle
                words={["business", "team", "workflow", "productivity", "projects", "analytics"]}
                interval={3000}
                className="text-primary"
              />{" "}
              with our platform
            </h1>

            <p className="text-xl text-muted-foreground">
              Streamline your operations, boost productivity, and drive growth with our all-in-one solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4 fill-current" /> Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full border-2 border-background overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
                      alt={`User ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium">1,000+</span> companies already onboard
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl border bg-background p-2 shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=800&text=Dashboard"
                alt="Dashboard Preview"
                className="rounded-lg w-full"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -left-12 top-1/4 rounded-lg border bg-background p-4 shadow-lg hidden md:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Conversion Rate</p>
                  <p className="text-2xl font-bold">+49.7%</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-12 bottom-1/4 rounded-lg border bg-background p-4 shadow-lg hidden md:block">
              <div className="space-y-2">
                <p className="font-medium">Monthly Growth</p>
                <div className="h-10 flex items-end gap-1">
                  {[30, 50, 35, 45, 65, 75, 60].map((h, i) => (
                    <div key={i} className="w-4 bg-primary/80 rounded-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
