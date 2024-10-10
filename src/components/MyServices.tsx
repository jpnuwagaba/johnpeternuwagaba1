import { Card, CardContent } from "@/components/ui/card"
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function MyServices() {
  const services = [
    {
      number: 1,
      title: "Website Design",
      description: "Crafting visually stunning and user-centric websites that captivate your audience."
    },
    {
      number: 2,
      title: "Web Development",
      description: "Bringing your designs to life with clean, efficient, and responsive code."
    },
    {
      number: 3,
      title: "SEO",
      description: "Optimizing your website to rank higher in search engine results and attract more visitors."
    },
    {
      number: 4,
      title: "Ongoing Support",
      description: "Providing maintenance, updates, and optimization to keep your website performing its best."
    }
  ]

  return (
    <section className="bg-gray-800 text-white py-16 lg:py-32 container">
      <div className="bg-black p-6 md:p-16">
        <h2 className={`text-4xl lg:text-5xl font-bold mb-12 ${ibmPlexMono.className}`}>My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.number} className="">
              <div className="">
                <div className="flex items-start flex-col md:flex-row">
                  <span className="text-2xl font-bold bg-gray-800 text-white py-2 px-4 mr-4 mb-4">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}