import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="border-b border-border/40 bg-muted/30 py-20 sm:py-32 px-4">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6 text-balance">
            Ready to transform your workflow?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-balance leading-relaxed">
            Join thousands of teams already using StreamLine to work smarter and achieve more. Start your free trial
            today—no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="sm:w-auto text-base">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="sm:w-auto text-base bg-transparent">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
