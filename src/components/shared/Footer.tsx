import Link from "next/link";
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              Tietex<span className="text-primary"> IT</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              The leading Web Design Company in Dhaka, Bangladesh. We specialize in 
              high-performance e-commerce, custom CMS, and digital marketing 
              solutions that drive real business growth.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">E-commerce Development</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Portfolio Websites</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Custom CMS Solutions</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Your Office Address, Dhaka,<br />Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+880 1XXX XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@tietexit.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get the latest tech news and offers.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Email Address" 
                className="bg-slate-900 border-slate-800 text-white focus-visible:ring-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
          <p>© {currentYear} Tietex IT. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
              Support <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}