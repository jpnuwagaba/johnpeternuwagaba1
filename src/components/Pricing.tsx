import Image from 'next/image'
import { DollarSign, Calendar } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Pricing() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/assets/price-tag.jpg?height=400&width=400&text=Pricing+Illustration"
              alt="Pricing illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-12 ${ibmPlexMono.className}`}>Pricing</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-700">
                <AccordionTrigger className="text-xl">Transparent Pricing</AccordionTrigger>
                <AccordionContent className="border-l-2 border-white/50 pl-4 my-4">
                  <div className="flex items-start flex-col">
                    <DollarSign className="w-6 h-6 mr-2 flex-shrink-0 text-white/70 mb-4" />
                    <p>
                      I offer transparent and flexible pricing options to fit your budget and needs. Whether you're looking for a custom website or ongoing maintenance, I'll work with you to find the perfect solution.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-gray-700">
                <AccordionTrigger className="text-xl">Consultation & Estimates</AccordionTrigger>
                <AccordionContent className="border-l-2 border-white/50 pl-4 my-4">
                  <div className="flex items-start">
                    <Calendar className="w-6 h-6 mr-2 flex-shrink-0 text-white/70 mb-4" />
                    <p>
                      Schedule a free consultation to discuss your project, and I'll provide you with a detailed estimate so you can plan with confidence.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}