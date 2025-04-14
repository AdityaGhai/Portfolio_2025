import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Aditya Ghai</h2>
            <p className="mt-2 text-gray-400">Data Engineer | Software Developer</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/AdityaGhai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/adityaghai02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </Link>

            <Link href="mailto:adityaghai375@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Aditya Ghai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
