"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-8 after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4">
            About Me
          </h2>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a passionate Data Engineer and Software Developer with expertise in Azure cloud services, .NET
              development, and building robust data pipelines. My experience spans across designing and implementing
              scalable data solutions, developing machine learning models, and creating data-driven applications that
              deliver real business value.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              With a strong foundation in both software engineering and data science, I bridge the gap between technical
              implementation and business needs. I'm constantly exploring new technologies and methodologies to enhance
              data processing capabilities and extract meaningful insights from complex datasets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
