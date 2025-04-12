import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  content: string
  author: {
    name: string
    role: string
    company: string
    avatar: string
  }
  rating: number
}

export function TestimonialCard({ content, author, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full border-zinc-800 bg-zinc-900/50 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-zinc-700"}`} />
            ))}
        </div>
        <p className="text-zinc-400 mb-6">{content}</p>
      </CardContent>
      <CardFooter className="border-t border-zinc-800 pt-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="bg-zinc-800">{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{author.name}</p>
            <p className="text-xs text-zinc-500">
              {author.role}, {author.company}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
