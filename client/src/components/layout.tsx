import { Link, useLocation } from "wouter";
import { SITE_CONTENT } from "@/lib/constants";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (e: React.MouseEvent | null, href: string) => {
    if (e) e.preventDefault();
    
    // If we are not on home page and trying to scroll to a section, go to home first
    if (href.startsWith("#") && location !== "/") {
      setLocation("/" + href); // wouter doesn't handle hash in setLocation well natively, usually needs redirect
      window.location.href = "/" + href;
      return;
    }

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      setLocation(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/assets/logo-real.jpeg" alt="Logo" className="h-12 w-12 object-contain rounded-full" />
            <span className="font-serif font-bold text-lg hidden md:block text-primary">
              Ananda Marga
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
            >
              Home
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none">
                Know the trust <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={(e) => scrollToSection(e, "#about")}>
                  About Trust
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => scrollToSection(e, "#history")}>
                  History of Ananda Marga
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => scrollToSection(e, "#founder")}>
                  About Founder
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#causes"
              onClick={(e) => scrollToSection(e, "#causes")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Our Causes
            </a>
            <a
              href="#school"
              onClick={(e) => scrollToSection(e, "#school")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              School Project
            </a>
            <a
              href="#activities"
              onClick={(e) => scrollToSection(e, "#activities")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Activities
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </a>
            
            <Link href="/donate">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
                Donate / Support
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t p-4 bg-background absolute w-full shadow-lg h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary py-2">
                Home
              </Link>
              
              <div className="py-2 border-y border-border/50">
                <p className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">Know the Trust</p>
                <div className="pl-4 flex flex-col gap-3">
                  <a href="#about" onClick={(e) => scrollToSection(e, "#about")} className="text-sm hover:text-primary">
                    About Trust
                  </a>
                  <a href="#history" onClick={(e) => scrollToSection(e, "#history")} className="text-sm hover:text-primary">
                    History of Ananda Marga
                  </a>
                  <a href="#founder" onClick={(e) => scrollToSection(e, "#founder")} className="text-sm hover:text-primary">
                    About Founder
                  </a>
                </div>
              </div>

              <a href="#causes" onClick={(e) => scrollToSection(e, "#causes")} className="text-sm font-medium hover:text-primary py-2">
                Our Causes
              </a>
              <a href="#school" onClick={(e) => scrollToSection(e, "#school")} className="text-sm font-medium hover:text-primary py-2">
                School Project
              </a>
              <a href="#activities" onClick={(e) => scrollToSection(e, "#activities")} className="text-sm font-medium hover:text-primary py-2">
                Activities
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} className="text-sm font-medium hover:text-primary py-2">
                Contact
              </a>
              
              <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Donate / Support
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/assets/logo-real.jpeg" alt="Logo" className="h-10 w-10 object-contain rounded-full" />
                <h3 className="font-serif font-bold text-lg text-primary">Ananda Marga</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Dedicated to the service of humanity through education, relief work, and spiritual upliftment.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-secondary" />
                  <a href={`mailto:${SITE_CONTENT.contact.email}`} className="hover:text-primary">
                    {SITE_CONTENT.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <div className="flex flex-col">
                    {SITE_CONTENT.contact.phone.map(phone => (
                      <span key={phone}>{phone}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span>{SITE_CONTENT.contact.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary">About Trust</a></li>
                <li><a href="#causes" className="hover:text-primary">Our Causes</a></li>
                <li><a href="#school" className="hover:text-primary">School Project</a></li>
                <li><a href="/donate" className="hover:text-primary font-medium text-primary">Donate Now</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>{SITE_CONTENT.contact.copyright}</p>
            <p className="mt-2 text-xs">Registered Charitable Trust</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
