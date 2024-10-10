/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zMth8pOSbHZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Aboutme() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto">
        <h1 className={`text-4xl lg:text-5xl font-bold mb-8`}>About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className={`${ibmPlexMono.className} text-xl font-semibold mb-2`}>Experience</h2>
            <p>
              4+ years of web development experience, specializing in responsive design and user-friendly interfaces.
            </p>
          </div>
          <div>
            <h2 className={`${ibmPlexMono.className} text-xl font-semibold mb-2`}>Expertise</h2>
            <p>
              Proficient in HTML, CSS, JavaScript, React, and various web tools. Constantly learning and exploring new
              technologies.
            </p>
          </div>
          <div>
            <h2 className={`${ibmPlexMono.className} text-xl font-semibold mb-2`}>Passion</h2>
            <p>I love turning clients' visions into reality and watching their businesses thrive online.</p>
          </div>
        </div>
      </div>
    </section>
  )
}