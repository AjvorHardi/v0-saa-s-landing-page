import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Shield, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with optimized performance that keeps your team moving at the pace of innovation.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools that bring your entire team together, no matter where they are.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA to keep your data safe.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Powerful insights and reporting to help you make data-driven decisions with confidence.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border/40 bg-background py-20 sm:py-32 px-4">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 text-balance text-secondary-foreground">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-balance leading-relaxed text-popover-foreground">
            Powerful features designed to help your team work smarter, not harder.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-card hover:bg-accent/5 transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
