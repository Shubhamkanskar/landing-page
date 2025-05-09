"use client"
import AnimatedWordCycle from "@/components/ui/animated-word-cycle"

export function AuroraBackgroundDemo() {
  return (
    <div className="p-4 max-w-[500px]">
      <h1 className="text-4xl font-light text-left text-muted-foreground">
        Your{" "}
        <AnimatedWordCycle
          words={["business", "team", "workflow", "productivity", "projects", "analytics", "dashboard", "platform"]}
          interval={3000}
          className={"text-foreground font-semi-bold"}
        />{" "}
        deserves better tools
      </h1>
    </div>
  )
}
