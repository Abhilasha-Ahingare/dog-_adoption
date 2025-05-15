"use client";

import { useState } from "react";
import Image from "@/components/ui/Image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dog2 from "../assets/images/dog2.jpg";
import dog10 from "../assets/images/dog10.jpg";
import dog12 from "../assets/images/dog12.jpg";
import dog9 from "../assets/images/dog9.jpg";
import dog13 from "../assets/images/dog13.jpg";

const dogBreeds = [
  {
    name: "Golden Retriever",
    description:
      "Friendly, intelligent, and devoted. Golden Retrievers make excellent family pets and are great with children.",
    traits: ["Friendly", "Intelligent", "Loyal"],
    image: dog2,
  },
  {
    name: "German Shepherd",
    description:
      "Confident, courageous, and smart. German Shepherds are versatile working dogs excelling in various roles.",
    traits: ["Intelligent", "Loyal", "Confident"],
    image: dog10,
  },
  {
    name: "Labrador Retriever",
    description:
      "Outgoing, even-tempered, and gentle. Labs are America's most popular dog breed for good reason.",
    traits: ["Friendly", "Active", "Outgoing"],
    image: dog12,
  },
  {
    name: "Beagle",
    description:
      "Curious, friendly, and merry. Beagles are excellent family dogs with their happy-go-lucky attitude.",
    traits: ["Curious", "Friendly", "Merry"],
    image: dog9,
  },
  {
    name: "Poodle",
    description:
      "Intelligent, active, and elegant. Poodles come in three sizes and are highly trainable companions.",
    traits: ["Intelligent", "Active", "Alert"],
    image: dog13,
  },
];

export default function DogBreeds() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dogBreeds.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dogBreeds.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="breeds" className="py-20 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Popular Dog <span className="text-amber-600">Breeds</span>
          </h2>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Explore some of the most beloved dog breeds and find the perfect
            match for your lifestyle.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {dogBreeds.map((breed, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={breed.image || "/placeholder.svg"}
                        alt={breed.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-white p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-amber-900 mb-3">
                        {breed.name}
                      </h3>
                      <p className="text-amber-700 mb-4">{breed.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {breed.traits.map((trait, i) => (
                          <span
                            key={i}
                            className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                      <Button className="bg-amber-600 hover:bg-amber-700 self-start">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-900 p-2 rounded-full shadow-md z-10"
            aria-label="Previous breed"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-900 p-2 rounded-full shadow-md z-10"
            aria-label="Next breed"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {dogBreeds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-amber-600" : "bg-amber-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
