import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "StreamLine has completely transformed how our team works. We've cut our project delivery time in half and our clients couldn't be happier.",
    author: "Sarah Chen",
    role: "CEO at TechFlow",
    avatar: "/professional-woman-diverse.png",
  },
  {
    quote:
      "The best investment we've made this year. The ROI was clear within the first month, and the support team is absolutely phenomenal.",
    author: "Michael Rodriguez",
    role: "Product Manager at InnovateCo",
    avatar: "/professional-man.jpg",
  },
  {
    quote:
      "I've tried dozens of tools, but nothing comes close to StreamLine. It's intuitive, powerful, and actually makes work enjoyable.",
    author: "Emily Thompson",
    role: "Design Lead at CreativeHub",
    avatar: "/professional-woman-designer.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border/40 bg-muted/30 py-20 sm:py-32 px-4">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 text-balance">
            Loved by teams worldwide
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Join thousands of companies already using StreamLine to transform their workflows.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mb-6 text-card-foreground leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
