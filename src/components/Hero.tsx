/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KJ0p0r80vv1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-left text-white container">
        <h1 className={`text-5xl font-bold mb-4 ${ibmPlexMono.className}`}>
          Hello, I'm John Peter Nuwagaba - Freelance Web Developer
        </h1>
        <p className="max-w-[1000px] mb-8 text-lg">
          I'm a freelance web developer who crafts stunning websites that captivate and convert. My expertise lies in
          delivering visually compelling and user-friendly digital experiences that drive results.
        </p>
        <div className="flex justify-left space-x-4">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg">Hire Me</Button>
          <Button className="bg-transparent border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-lg">
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}