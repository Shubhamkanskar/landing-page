import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  buttonText?: string
}

export function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText = "Get Started",
}: PricingCardProps) {
  return (
    <Card className={`h-full flex flex-col ${popular ? "border-primary shadow-lg" : "border shadow"}`}>
      {popular && (
        <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </div>
      )}
      <CardHeader className={popular ? "pt-8" : ""}>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground ml-1">/month</span>}
        </div>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${popular ? "" : "variant-outline"}`} variant={popular ? "default" : "outline"}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
