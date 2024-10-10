import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function ClientTestimonials() {
  const testimonials = [
    {
      content: "[Developer Name] did an amazing job bringing our vision to life. They were professional, responsive, and delivered a website that exceeded our expectations.",
      name: "John Doe",
      role: "CEO",
      company: "Tech Innovators",
      avatar: "/placeholder.svg?height=40&width=40&text=JD"
    },
    {
      content: "I've worked with [Developer Name] on multiple projects and they consistently deliver high-quality work on time and within budget. Highly recommended!",
      name: "Jane Smith",
      role: "Marketing Director",
      company: "Creative Solutions",
      avatar: "/placeholder.svg?height=40&width=40&text=JS"
    },
    {
      content: "The website [Developer Name] created for us has been a game-changer. It's not only beautiful, but it's also driving more leads and sales for our business.",
      name: "Alex Johnson",
      role: "Founder",
      company: "StartUp Success",
      avatar: "/placeholder.svg?height=40&width=40&text=AJ"
    }
  ]

  return (
    <section className="bg-black text-white py-16">
      <div className="container">
        <h2 className={`text-4xl lg:text-5xl font-bold mb-12 ${ibmPlexMono.className}`}>Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 flex flex-col">
              <CardContent className="p-6 flex-grow">
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
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