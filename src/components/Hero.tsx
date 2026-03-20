import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Fachada Dias Ferr"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="Dias Ferr Ltda"
              className="h-32 md:h-40 w-auto animate-fade-in"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in drop-shadow-lg">
            Dias Ferr Ltda
          </h1>
          
          <h2 className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in drop-shadow-md">
            Distribuidora de ferro e aço com qualidade, agilidade e confiança para sua obra
          </h2>
          
          <p className="text-lg md:text-xl text-primary font-semibold mb-12 animate-fade-in drop-shadow-md">
            A sua satisfação é a nossa prioridade
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/5531995492284" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Solicitar orçamento
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary"
              asChild
            >
              <Link to="/vitrine">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Ver vitrine de produtos
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
