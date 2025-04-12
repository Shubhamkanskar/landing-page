import { FeatureCard } from "@/components/ui/feature-card"
import { BarChart3, Zap, Shield, Users, Layers, Globe } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with our comprehensive analytics dashboard. Track performance and make data-driven decisions.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized platform. Save time and boost productivity.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Rest easy knowing your data is protected with enterprise-grade security features and compliance standards.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Seamlessly collaborate with your team in real-time. Share projects, assign tasks, and track progress together.",
    },
    {
      icon: Layers,
      title: "Powerful Integrations",
      description:
        "Connect with your favorite tools and services. Our platform integrates with over 100+ popular applications.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description:
        "Access your workspace from anywhere in the world. Our platform is available 24/7 with 99.9% uptime.",
    },
  ]

  return (
    <section className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful features for modern teams
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage your business, boost productivity, and grow your revenue.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
