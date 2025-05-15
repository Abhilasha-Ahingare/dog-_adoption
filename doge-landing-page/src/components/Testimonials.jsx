"use client";

import Image from "@/components/ui/Image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import user1 from "../assets/users/user1.jpg"
import user2 from "../assets/users/user2.jpg"
import user3 from "../assets/users/user3.jpg"


const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Golden Retriever Owner",
    quote:
      "Adopting Max was the best decision I've ever made. He's brought so much joy and laughter into our home. The support from PawsomePals during the adoption process was incredible.",
    image: user1,
  },
  {
    name: "Michael Chen",
    role: "Beagle Owner",
    quote:
      "Bailey has completely changed my life. As someone who lives alone, having her companionship has been invaluable. She's my best friend and adventure buddy all in one.",
    image: user2,
  },
  {
    name: "Emily Rodriguez",
    role: "German Shepherd Owner",
    quote:
      "We adopted Rex as a family dog, and he's been amazing with our kids. He's protective, gentle, and has the patience of a saint. I couldn't ask for a better canine family member.",
    image: user3,
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            What Dog <span className="text-amber-600">Parents</span> Say
          </h2>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Hear from people whose lives have been transformed by their canine
            companions.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-amber-200" />
              <div className="flex items-center mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-amber-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-amber-800 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
