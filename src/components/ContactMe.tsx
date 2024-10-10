import { Mail, Phone, Pen } from 'lucide-react'
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function ContactMe() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-pink-500" />,
      label: 'Email',
      value: 'jpnuwagaba1@gmail.com',
      href: 'mailto:jpnuwagaba1@gmail.com'
    },
    {
      icon: <Phone className="w-8 h-8 text-pink-500" />,
      label: 'Phone',
      value: '(+256) 700670395',
      href: 'tel:+256700670395'
    },
    {
      icon: <Pen className="w-8 h-8 text-pink-500" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/john-peter-nuwagaba/',
      href: 'https://www.linkedin.com/in/john-peter-nuwagaba/'
    }
  ]

  return (
    <section className="bg-black text-white py-16">
      <div className="container">
        <h2 className={`text-4xl lg:text-5xl font-bold mb-12 ${ibmPlexMono.className}`}>Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              {method.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{method.label}</h3>
              <a
                href={method.href}
                className="text-gray-300 hover:text-pink-500 transition-colors"
                aria-label={`${method.label}: ${method.value}`}
              >
                {method.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}