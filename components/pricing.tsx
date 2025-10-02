import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams getting started",
    features: ["Up to 5 team members", "10 GB storage", "Basic analytics", "Email support", "Core integrations"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing teams that need more power",
    features: [
      "Up to 25 team members",
      "100 GB storage",
      "Advanced analytics",
      "Priority support",
      "All integrations",
      "Custom workflows",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/40 bg-background py-20 sm:py-32 px-4">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-border bg-card ${
                plan.popular ? "border-primary shadow-lg shadow-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-card-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.popular ? "default" : "outline"} size="lg">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
