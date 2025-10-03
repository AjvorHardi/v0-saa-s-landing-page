import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-gray-200/95 backdrop-blur supports-[backdrop-filter]:bg-gray-200/90">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-black"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <span className="text-xl font-bold text-black">StreamLine</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Testimonials
            </Link>
            <Link href="/blog" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Blog
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Docs
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-black hover:bg-gray-300">
            Sign In
          </Button>
          <Button size="sm" className="bg-gray-300 text-black hover:bg-gray-400">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
