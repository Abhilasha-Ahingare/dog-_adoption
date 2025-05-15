import Link from "@/components/ui/Link";
import {
  PawPrintIcon as Paw,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Paw className="h-8 w-8" />
              <span className="text-xl font-bold">PawsomePals</span>
            </div>
            <p className="mb-4">
              Connecting loving homes with furry companions since 2010. Our
              mission is to promote responsible dog ownership and find forever
              homes for dogs in need.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#breeds"
                  className="hover:text-white transition-colors"
                >
                  Dog Breeds
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="hover:text-white transition-colors"
                >
                  Benefits of Dogs
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#adoption"
                  className="hover:text-white transition-colors"
                >
                  Adoption Process
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Dog Care Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Dog Training Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Nutrition Information
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Behavior Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>123 Paw Street, Dogtown, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>woof@pawsomepals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} PawsomePals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
