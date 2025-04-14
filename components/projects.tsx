"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "IPL 2023 Best 11",
    description:
      "Data analysis project to determine the best playing 11 from IPL 2023 based on player statistics and performance metrics.",
    image: "/ipl.png",
    tags: ["Power BI", "Python", "Data Analysis"],
    demoLink: "/ipl_demo.mp4",
    githubLink: "https://github.com/AdityaGhai/IPL_Data_analysis",
  },
  {
    title: "Stock Market ETL + Dashboard",
    description:
      "Real-time stock market data pipeline using Azure Data Factory, Databricks, and Power BI. Implements Medallion Architecture with dynamic symbol fetching, data transformation, and rich visualizations.",
    image: "stock_etl.png", // <- Add a screenshot of your dashboard here
    tags: ["ADF", "Databricks", "ADLS", "Power BI", "Medallion Architecture"],
    githubLink: "https://github.com/AdityaGhai/Stock-Market-ETL-Dashboard"
  },
  {
    title: "Used Car Price Prediction",
    description:
      "Built a regression model to predict used car prices using features like company, model, year of purchase, and fuel type. Cleaned and analyzed data before training a linear regression model that achieved an R² score of 0.92.",
    image: "car_price.png", 
    tags: ["Python", "Pandas", "Scikit-learn", "Linear Regression", "ML"],
    githubLink: "https://github.com/AdityaGhai/Car-Price-Pridector"
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </Link>
                  </Button>
                  {project.demoLink && (
                      <Button size="sm" asChild>
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Link>
                      </Button>
                    )}

                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
