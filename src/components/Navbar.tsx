import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`text-2xl font-bold ${ibmPlexMono.className}`}>JP Nuwagaba</div>
        <div className="flex items-center space-x-4">
          <a href={`tel:+256700670395`} className="text-lg text-gray-300 hover:text-pink-500 transition-colors">+256 700670395</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/john-peter-nuwagaba/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/jpnuwagaba" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="mailto:jpnuwagaba1@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}