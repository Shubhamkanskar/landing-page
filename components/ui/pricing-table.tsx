import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingFeature {
  name: string
  basic: boolean
  pro: boolean
  enterprise: boolean
}

interface PricingTableProps {
  features: PricingFeature[]
}

export function PricingTable({ features }: PricingTableProps) {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 font-medium">Features</th>
            <th className="p-4 text-center font-medium">Basic</th>
            <th className="p-4 text-center font-medium">Pro</th>
            <th className="p-4 text-center font-medium">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="border-b">
              <td className="p-4 text-sm">{feature.name}</td>
              <td className="p-4 text-center">
                {feature.basic ? (
                  <Check className="h-5 w-5 mx-auto text-white" />
                ) : (
                  <X className="h-5 w-5 mx-auto text-zinc-600" />
                )}
              </td>
              <td className="p-4 text-center">
                {feature.pro ? (
                  <Check className="h-5 w-5 mx-auto text-white" />
                ) : (
                  <X className="h-5 w-5 mx-auto text-zinc-600" />
                )}
              </td>
              <td className="p-4 text-center">
                {feature.enterprise ? (
                  <Check className="h-5 w-5 mx-auto text-white" />
                ) : (
                  <X className="h-5 w-5 mx-auto text-zinc-600" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-4"></td>
            <td className="p-4 text-center">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                Free
              </Button>
            </td>
            <td className="p-4 text-center">
              <Button className="w-full bg-white text-black hover:bg-zinc-200">$79/month</Button>
            </td>
            <td className="p-4 text-center">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
