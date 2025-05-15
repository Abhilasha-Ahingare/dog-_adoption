"use client";

import { useState } from "react";
import Link from "@/components/ui/Link";
import { Menu, X, PawPrintIcon as Paw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Paw className="h-8 w-8 text-amber-600" />
          <span className="text-xl font-bold text-amber-800">PawsomePals</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#breeds"
            className="text-amber-900 hover:text-amber-600 transition-colors"
          >
            Breeds
          </Link>
          <Link
            href="#benefits"
            className="text-amber-900 hover:text-amber-600 transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="#gallery"
            className="text-amber-900 hover:text-amber-600 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="#testimonials"
            className="text-amber-900 hover:text-amber-600 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#adoption"
            className="text-amber-900 hover:text-amber-600 transition-colors"
          >
            Adoption
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-amber-600 hover:bg-amber-700">Adopt Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#breeds"
              className="text-amber-900 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Breeds
            </Link>
            <Link
              href="#benefits"
              className="text-amber-900 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link
              href="#gallery"
              className="text-amber-900 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="text-amber-900 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#adoption"
              className="text-amber-900 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Adoption
            </Link>
            <Button className="bg-amber-600 hover:bg-amber-700 w-full">
              Adopt Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
