"use client"

import { Compare } from "@/components/ui/compare"

export function CompareSection() {
  return (
    <section className="py-20 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Client Showcase</h2>
          <p className="mt-4 text-xl text-zinc-400 max-w-3xl mx-auto">
            See the transformation we deliver to our clients. Drag the slider to compare before and after implementing
            our solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="p-4 border rounded-3xl border-white/10 bg-black">
            <Compare
              firstImage="/placeholder.svg?height=500&width=500&text=After+Redesign"
              secondImage="/placeholder.svg?height=500&width=500&text=Before+Redesign"
              firstImageClassName="object-cover object-center"
              secondImageClassname="object-cover object-center"
              className="h-[250px] w-[250px] md:h-[500px] md:w-[500px]"
              slideMode="hover"
            />
            <div className="mt-4 text-center text-zinc-400 text-sm">Website Redesign Project</div>
          </div>

          <div className="p-4 border rounded-3xl border-white/10 bg-black">
            <Compare
              firstImage="/placeholder.svg?height=500&width=500&text=After+Dashboard"
              secondImage="/placeholder.svg?height=500&width=500&text=Before+Dashboard"
              firstImageClassName="object-cover object-center"
              secondImageClassname="object-cover object-center"
              className="h-[250px] w-[250px] md:h-[500px] md:w-[500px]"
              slideMode="hover"
            />
            <div className="mt-4 text-center text-zinc-400 text-sm">Analytics Dashboard Transformation</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 max-w-2xl mx-auto">
            These case studies demonstrate our ability to transform outdated designs into modern, user-friendly
            interfaces that drive engagement and conversion.
          </p>
        </div>
      </div>
    </section>
  )
}
