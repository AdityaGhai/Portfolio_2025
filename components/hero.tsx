"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      </div>

      <div className="container px-4 md:px-6 z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-blue-500 dark:bg-blue-300 z-[-1]" />
            <motion.img
              src="/profile.png"
              alt="Aditya Ghai"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-xl ring-4 ring-offset-2 ring-blue-500 dark:ring-blue-300 transition-transform duration-500 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>



          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Aditya Ghai
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Data Engineer | Software Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Transforming Data into Impact
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button asChild className="gap-2">
              <a href="/Aditya_Ghai_Resume.pdf" download>
                <Download size={16} />
                Download Resume
              </a>
            </Button>

            <Button variant="outline" asChild className="gap-2">
              <Link href="https://www.linkedin.com/in/adityaghai02/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
                LinkedIn
              </Link>
            </Button>

            <Button variant="outline" asChild className="gap-2">
              <Link href="https://github.com/AdityaGhai" target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
