"use client";

import { useState } from "react";
import Image from "@/components/ui/Image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import dog1 from "../assets/images/dog1.jpg";
import dog2 from "../assets/images/dog2.jpg";
import dog3 from "../assets/images/dog3.jpg";
import dog5 from "../assets/images/dog5.jpg";
import dog11 from "../assets/images/dog11.jpg";
import dog8 from "../assets/images/dog8.jpg";
import dog6 from "../assets/images/dog6.jpg";
import dog10 from "../assets/images/dog10.jpg";
import dog9 from "../assets/images/dog9.jpg";

// Gallery images with captions
const galleryImages = [
  {
    src: dog1,
    alt: "Golden Retriever puppy playing",
    caption: "Playful Golden",
    width: 400,
    height: 600,
  },
  {
    src: dog11,
    alt: "German Shepherd in the park",
    caption: "Loyal Guardian",
    width: 600,
    height: 400,
  },
  {
    src: dog2,
    alt: "Beagle puppy looking curious",
    caption: "Curious Explorer",
    width: 500,
    height: 500,
  },
  {
    src: dog10,
    alt: "Labrador swimming in a lake",
    caption: "Water Lover",
    width: 400,
    height: 600,
  },
  {
    src: dog5,
    alt: "Corgi with big smile",
    caption: "Happy Corgi",
    width: 600,
    height: 400,
  },
  {
    src: dog6,
    alt: "Husky in the snow",
    caption: "Snow Runner",
    width: 500,
    height: 500,
  },
  {
    src: dog8,
    alt: "Dalmatian running in field",
    caption: "Spotted Sprinter",
    width: 600,
    height: 400,
  },
  {
    src: dog9,
    alt: "Poodle with fancy haircut",
    caption: "Stylish Poodle",
    width: 400,
    height: 600,
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="inline-flex" variant="secondary">
            Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Pawsome <span className="text-amber-600">Moments</span>
          </h2>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Explore our collection of heartwarming canine companions that bring
            joy to our lives every day.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-xl shadow-md ${
                image.height > image.width ? "row-span-2" : ""
              }`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div
                className="relative h-64 sm:h-72 w-full cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-medium">{image.caption}</p>
                  <div className="flex items-center mt-2">
                    <ZoomIn className="h-4 w-4 text-white mr-1" />
                    <span className="text-white text-xs">Click to enlarge</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full h-full max-h-[80vh] flex flex-col">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="relative flex-1 bg-black rounded-lg overflow-hidden">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="bg-black/80 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-medium">
                {galleryImages[selectedImage].caption}
              </h3>
              <p className="text-amber-300 mt-1">
                {galleryImages[selectedImage].alt}
              </p>
            </div>

            <div className="absolute left-0 right-0 bottom-[-60px] flex justify-center gap-2">
              <button
                onClick={() =>
                  setSelectedImage(
                    selectedImage > 0
                      ? selectedImage - 1
                      : galleryImages.length - 1
                  )
                }
                className="bg-white/20 hover:bg-white/40 transition-colors rounded-full p-2"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() =>
                  setSelectedImage((selectedImage + 1) % galleryImages.length)
                }
                className="bg-white/20 hover:bg-white/40 transition-colors rounded-full p-2"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
