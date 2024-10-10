
export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-center space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
          Twitter
        </a>
        <a href="https://www.linkedin.com/in/john-peter-nuwagaba/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
          LinkedIn
        </a>
        <a href="https://github.com/jpnuwagaba" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
          GitHub
        </a>
        <a href="mailto:jpnuwagaba1@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
          Email
        </a>
      </div>
    </footer>
  );
}