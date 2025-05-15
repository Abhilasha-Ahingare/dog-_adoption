"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PawPrintIcon as Paw } from "lucide-react";

export default function Adoption() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    preferredBreed: "",
    message: "",
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, preferredBreed: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your interest in adoption! We'll contact you soon.");
    setFormState({
      name: "",
      email: "",
      phone: "",
      preferredBreed: "",
      message: "",
    });
  };

  return (
    <section id="adoption" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/4 right-0 w-60 h-60 bg-amber-300 rounded-full opacity-10"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-100 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-amber-600 p-8 md:p-12 text-white flex flex-col justify-center">
              <div className="mb-6">
                <Paw className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Ready to Adopt?</h2>
              <p className="mb-6">
                Fill out our adoption interest form and take the first step
                toward bringing home your new best friend.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="font-bold">1</span>
                  </div>
                  <p>Complete the adoption interest form</p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="font-bold">2</span>
                  </div>
                  <p>Meet with our adoption counselors</p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="font-bold">3</span>
                  </div>
                  <p>Meet your potential new family member</p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="font-bold">4</span>
                  </div>
                  <p>Welcome your new dog home!</p>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Adoption Interest Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredBreed">
                    Preferred Breed (Optional)
                  </Label>
                  <Select
                    value={formState.preferredBreed}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a breed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="golden-retriever">
                        Golden Retriever
                      </SelectItem>
                      <SelectItem value="german-shepherd">
                        German Shepherd
                      </SelectItem>
                      <SelectItem value="labrador">
                        Labrador Retriever
                      </SelectItem>
                      <SelectItem value="beagle">Beagle</SelectItem>
                      <SelectItem value="poodle">Poodle</SelectItem>
                      <SelectItem value="mixed">Mixed Breed</SelectItem>
                      <SelectItem value="any">Any Breed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Your Home</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your living situation, family, and why you want to adopt a dog."
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700"
                >
                  Submit Adoption Interest
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
