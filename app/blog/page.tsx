import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Discovering the Hidden Gems of Oaxaca, Mexico",
    excerpt:
      "From ancient ruins to vibrant markets and world-class cuisine, Oaxaca offers an authentic Mexican experience that goes beyond the typical tourist trail.",
    content:
      "Nestled in the southern highlands of Mexico, Oaxaca is a cultural treasure trove that captivates every traveler who visits. The city's colonial architecture, with its colorful buildings and cobblestone streets, provides the perfect backdrop for exploring one of Mexico's most culturally rich regions. Start your journey at the Zócalo, the main square, where locals gather and street vendors sell traditional crafts. Don't miss the nearby Santo Domingo Church, a stunning example of baroque architecture. The real magic of Oaxaca lies in its food scene - from tlayudas and mole negro to mezcal tastings, your taste buds are in for an unforgettable adventure. Take a day trip to Monte Albán, the ancient Zapotec capital perched on a mountaintop, offering breathtaking views and fascinating archaeological ruins. The surrounding valleys are dotted with artisan villages where you can watch craftspeople create traditional textiles, black pottery, and alebrijes (colorful wooden creatures). Oaxaca is not just a destination; it's an immersion into authentic Mexican culture that will leave you planning your return before you even leave.",
    country: "Mexico",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/colorful-colonial-buildings-and-streets-of-oaxaca-.jpg",
  },
  {
    id: 2,
    title: "Cartagena: Where Caribbean Charm Meets Colonial History",
    excerpt:
      "Colombia's coastal jewel combines stunning beaches, vibrant nightlife, and centuries-old architecture in one unforgettable destination.",
    content:
      "Cartagena de Indias is a city that seems to exist outside of time. Walking through the walled Old Town feels like stepping into a Gabriel García Márquez novel, with its colorful colonial buildings, flower-draped balconies, and horse-drawn carriages. The city's history as a major port during the Spanish colonial era is evident in every corner, from the imposing Castillo San Felipe de Barajas fortress to the intricate churches scattered throughout the historic center. But Cartagena is far from a museum piece - it's a living, breathing city where salsa music spills out of bars, street vendors sell fresh fruit, and locals gather in plazas to socialize. The food scene is exceptional, blending Caribbean flavors with Colombian traditions. Try the fresh ceviche, arepas de huevo, and don't miss the chance to sip on a refreshing limonada de coco. Just outside the city, the Rosario Islands offer pristine beaches and crystal-clear waters perfect for snorkeling. As the sun sets, head to the city walls for spectacular views of the Caribbean Sea, then dive into the vibrant nightlife of Getsemaní, the bohemian neighborhood that's become the heart of Cartagena's contemporary culture. This city masterfully balances preservation of its rich past with a dynamic, modern energy.",
    country: "Colombia",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/colorful-colonial-buildings-with-balconies-in-cart.jpg",
  },
  {
    id: 3,
    title: "Buenos Aires: The Paris of South America",
    excerpt: "Tango, steak, and European elegance combine in Argentina's captivating capital city that never sleeps.",
    content:
      "Buenos Aires is a city of contrasts and passion, where European sophistication meets Latin American warmth. The Argentine capital pulses with energy from its tree-lined boulevards to its intimate tango halls. Start your exploration in the elegant Recoleta neighborhood, home to the famous cemetery where Eva Perón is buried, surrounded by stunning mausoleums that are works of art in themselves. The nearby MALBA museum showcases Latin American art in a striking modern building. For a taste of local life, head to San Telmo, the bohemian heart of the city, where antique shops line cobblestone streets and the Sunday market transforms the neighborhood into a vibrant celebration of Argentine culture. No visit to Buenos Aires is complete without experiencing tango - whether watching a professional show or taking a lesson yourself in one of the many milongas (tango halls) scattered throughout the city. The food scene is legendary, centered around the parrilla (steakhouse) where perfectly grilled beef is an art form. Pair your steak with a robust Malbec from Mendoza, and you'll understand why Argentines are so proud of their cuisine. Don't miss the colorful houses of La Boca, the upscale shops of Palermo, or a late-night dinner (Argentines rarely eat before 10 PM). Buenos Aires operates on its own schedule, and embracing the porteño lifestyle of late nights, long meals, and passionate conversations is essential to truly experiencing this magnificent city.",
    country: "Argentina",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "/elegant-european-style-buildings-and-tree-lined-bo.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="dark min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Travel Blog</h1>
            <p className="text-lg text-gray-400">Exploring the wonders of Latin America</p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-border bg-card">
                <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.country}</Badge>
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{post.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
