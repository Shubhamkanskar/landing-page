import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid"
import { BarChart3, Zap, Shield, Users, Layers, Globe } from "lucide-react"

export function BentoFeaturesSection() {
  const features: BentoItem[] = [
    {
      title: "Advanced Analytics",
      meta: "Real-time",
      description: "Gain valuable insights with our comprehensive analytics dashboard. Track performance metrics.",
      icon: <BarChart3 className="w-4 h-4 text-white" />,
      status: "Live",
      tags: ["Statistics", "Reports"],
      colSpan: 2,
      hasPersistentHover: true,
    },
    {
      title: "Lightning Fast",
      meta: "10x faster",
      description: "Experience blazing fast performance with our optimized platform. Save time and boost productivity.",
      icon: <Zap className="w-4 h-4 text-white" />,
      status: "Updated",
      tags: ["Performance", "Speed"],
    },
    {
      title: "Enterprise Security",
      meta: "SOC2 Compliant",
      description: "Rest easy knowing your data is protected with enterprise-grade security features.",
      icon: <Shield className="w-4 h-4 text-white" />,
      tags: ["Security", "Compliance"],
      colSpan: 2,
    },
    {
      title: "Team Collaboration",
      meta: "Multi-user",
      description: "Seamlessly collaborate with your team in real-time. Share projects and track progress together.",
      icon: <Users className="w-4 h-4 text-white" />,
      status: "Popular",
      tags: ["Teams", "Sharing"],
    },
    {
      title: "Powerful Integrations",
      meta: "100+ apps",
      description: "Connect with your favorite tools and services. Our platform integrates with popular applications.",
      icon: <Layers className="w-4 h-4 text-white" />,
      tags: ["API", "Plugins"],
      colSpan: 2,
    },
    {
      title: "Global Accessibility",
      meta: "24/7 access",
      description: "Access your workspace from anywhere in the world. Our platform is available with 99.9% uptime.",
      icon: <Globe className="w-4 h-4 text-white" />,
      status: "Reliable",
      tags: ["Cloud", "Access"],
    },
  ]

  return (
    <section className="py-20 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful features for modern teams
          </h2>
          <p className="mt-4 text-xl text-zinc-400 max-w-3xl mx-auto">
            Everything you need to manage your business, boost productivity, and grow your revenue.
          </p>
        </div>

        <BentoGrid items={features} />
      </div>
    </section>
  )
}
