"use client"

import { Heart, Shield, Brain, Smile } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const benefits = [
  {
    icon: <Heart className="h-10 w-10 text-amber-600" />,
    title: "Unconditional Love",
    description:
      "Dogs offer unwavering loyalty and affection, providing emotional support through life's ups and downs.",
  },
  {
    icon: <Shield className="h-10 w-10 text-amber-600" />,
    title: "Protection & Security",
    description:
      "Many dogs have natural protective instincts, offering an added sense of security for your home and family.",
  },
  {
    icon: <Brain className="h-10 w-10 text-amber-600" />,
    title: "Mental Health Benefits",
    description:
      "Studies show that dog owners experience reduced stress, anxiety, and depression through canine companionship.",
  },
  {
    icon: <Smile className="h-10 w-10 text-amber-600" />,
    title: "Increased Social Activity",
    description:
      "Dog walking and visits to dog parks create opportunities for social interaction and community connection.",
  },
]

export default function Benefits() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Benefits of Having a <span className="text-amber-600">Dog</span>
          </h2>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Dogs aren't just pets; they're family members that bring numerous physical, emotional, and social benefits
            to our lives.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-amber-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{benefit.title}</h3>
              <p className="text-amber-700">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
