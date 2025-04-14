"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "2025",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "2022",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    icon: "/placeholder.svg?height=80&width=80",
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Certifications</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Professional qualifications and achievements
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-md overflow-hidden border-2 border-gray-100 dark:border-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.issuer}</p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">{cert.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
