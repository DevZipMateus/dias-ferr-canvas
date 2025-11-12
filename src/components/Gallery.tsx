import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

import arameFarpado from "@/assets/gallery/arame-farpado.jpg";
import arameTrancado from "@/assets/gallery/arame-trancado.jpg";
import atendimento from "@/assets/gallery/atendimento.jpg";
import colunaArmada from "@/assets/gallery/coluna-armada.jpg";
import metalon from "@/assets/gallery/metalon.jpg";
import fachada from "@/assets/gallery/fachada.jpg";
import veiculo from "@/assets/gallery/veiculo.jpg";
import perfil from "@/assets/gallery/perfil.jpg";
import producao from "@/assets/gallery/producao.jpg";
import telaSoldada from "@/assets/gallery/tela-soldada.jpg";

const Gallery = () => {
  const images = [
    { src: fachada, alt: "Fachada da loja Dias Ferr" },
    { src: atendimento, alt: "Atendimento na loja" },
    { src: producao, alt: "Produção de material" },
    { src: colunaArmada, alt: "Colunas armadas" },
    { src: metalon, alt: "Metalon" },
    { src: perfil, alt: "Perfis metálicos" },
    { src: telaSoldada, alt: "Tela soldada" },
    { src: arameFarpado, alt: "Arame farpado" },
    { src: arameTrancado, alt: "Arame trançado" },
    { src: veiculo, alt: "Veículo de entrega" },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Galeria
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nossa estrutura, produtos e equipe
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group overflow-hidden">
                          <CardContent className="p-0">
                            <div className="relative aspect-square overflow-hidden">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                        <div className="relative">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
