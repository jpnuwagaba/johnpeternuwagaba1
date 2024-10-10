import Image from 'next/image'
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Portfolio() {
  const projects = [
    {
      title: "Scapes and Surveys Associates",
      description: "A responsive website for a leading Land Survey firm.",
      image: "/assets/scapes-thumbnail.png?height=200&width=300"
    },
    {
      title: "AGRC2023",
      description: "Website for a research conference.",
      image: "/assets/agrc2023-thumbnail.png?height=200&width=300"
    },
    {
      title: "Portfolio Website",
      description: "Developed a modern and visually striking online portfolio to showcase my work.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Voyager",
      description: "Geospatial Newsletter and GeoAI assistant.",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <section className="bg-black text-white py-16">
      <div className="container">
        <h2 className={`text-4xl lg:text-5xl font-bold mb-12 ${ibmPlexMono.className}`}>Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="">
              <div className="">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}