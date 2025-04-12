import { TestimonialCard } from "@/components/ui/testimonial-card"

export function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "This platform has completely transformed how our team works. The analytics features alone have increased our productivity by 40%.",
      author: {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "TechGrowth",
        avatar: "/placeholder.svg?height=40&width=40&text=SJ",
      },
      rating: 5,
    },
    {
      content:
        "I've tried many similar tools, but nothing compares to the ease of use and powerful features this platform offers. It's been a game-changer for our startup.",
      author: {
        name: "Michael Chen",
        role: "Founder & CEO",
        company: "InnovateLabs",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
      },
      rating: 5,
    },
    {
      content:
        "The customer support is exceptional. Any time we've had an issue, the team has been quick to respond and resolve it. Highly recommend!",
      author: {
        name: "Jessica Williams",
        role: "Operations Manager",
        company: "GlobalServe",
        avatar: "/placeholder.svg?height=40&width=40&text=JW",
      },
      rating: 4,
    },
  ]

  return (
    <section className="py-20 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by thousands of companies
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {["Acme Inc", "Globex", "Stark Industries", "Wayne Enterprises", "Umbrella Corp"].map((company) => (
            <div key={company} className="text-2xl font-bold text-zinc-700">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
