"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Calendar } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Experience</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            My professional journey and career highlights
          </p>
        </div>

        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700" />

          {/* Experience Item */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                <h3 className="text-xl font-bold">Accenture</h3>
                <div className="flex items-center justify-end mt-2 text-gray-500 dark:text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>Oct 2023 – Present</span>
                </div>
              </div>

              <div className="z-10 order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                  <Building className="text-white" size={20} />
                </div>
              </div>

              <Card className="flex-1 md:pl-8 order-3 mt-4 md:mt-0">
                <CardContent className="p-6">
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Developed and maintained .NET applications for banking sectors</li>
                    <li>Designed and implemented SQL databases for efficient data storage and retrieval</li>
                    <li>Built scalable applications using Azure cloud services</li>
                    <li>Created ETL pipelines using SSIS and Azure Data Factory</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
