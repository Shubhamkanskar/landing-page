import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    company: string
    avatar: string
  }
  rating: number
}

export function SimpleTestimonialsSection() {
  const testimonials: Testimonial[] = [
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
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by thousands of companies
          </h2>
          <p className="mt-4 text-xl text-zinc-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl border border-white/10 bg-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]"
            >
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-white" : "text-zinc-700"}`}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
              </div>
              <p className="text-zinc-300 mb-6 text-sm">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                  <AvatarFallback className="bg-zinc-800">{testimonial.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{testimonial.author.name}</p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.author.role}, {testimonial.author.company}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {["Acme Inc", "Globex", "Stark Industries", "Wayne Enterprises", "Umbrella Corp"].map((company) => (
            <div key={company} className="text-2xl font-bold text-zinc-800">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
