import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Se estiver em outra página, navega para home primeiro
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero", href: "/" },
    { label: "Sobre", id: "about" },
    { label: "Avaliações", id: "testimonials" },
    { label: "Produtos", id: "products" },
    { label: "Galeria", id: "gallery" },
    { label: "Vitrine", href: "/vitrine" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Dias Ferr Ltda"
              className="h-12 w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
            <Button
              onClick={() => {
                if (location.pathname !== "/") {
                  window.location.href = "/#contact";
                } else {
                  scrollToSection("contact");
                }
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border mt-2">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <Button
                onClick={() => {
                  if (location.pathname !== "/") {
                    window.location.href = "/#contact";
                  } else {
                    scrollToSection("contact");
                  }
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                Fale conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
