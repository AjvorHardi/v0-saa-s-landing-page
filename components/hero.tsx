import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-300 bg-yellow-400 py-20 sm:py-32 px-4">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
            </span>
            <span className="text-black">Now in public beta</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance text-black sm:text-6xl lg:text-7xl">
            Streamline your workflow, amplify your results
          </h1>
          <p className="mb-10 text-lg text-black text-balance sm:text-xl leading-relaxed max-w-2xl mx-auto">
            The all-in-one platform that helps teams collaborate, automate, and scale faster. Build better products with
            tools designed for modern workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="sm:w-auto text-base bg-gray-300 text-black hover:bg-gray-400">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="sm:w-auto text-base bg-transparent border-black text-black hover:bg-black/10"
            >
              Watch Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-black/70">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  )
}
