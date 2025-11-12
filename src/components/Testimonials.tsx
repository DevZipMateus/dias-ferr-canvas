import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Junio Jesus Melo",
      rating: 5,
      text: "Excelente atendimento, profissional de qualidade, além da educação dos trabalhadores. Parabéns a loja Dias Ferr",
      initials: "JM",
      color: "bg-[#E57373]",
    },
    {
      name: "Ludmila Valentino",
      rating: 5,
      text: "Excelente atendimento! Fui muito bem atendida, o pedido chegou super rápido e os preços são ótimos. Recomendo demais!",
      initials: "LV",
      color: "bg-[#F4511E]",
    },
    {
      name: "Robson dos Santos Sales",
      rating: 5,
      text: "Excelente, prestação de serviço e atendimento excepcional, ótimos preços e qualidade...",
      initials: "RS",
      color: "bg-[#8D6E63]",
    },
    {
      name: "Willian Lucas",
      rating: 5,
      text: "Local bem organizado, preço ótimo atendimento excelente. Galera é muito top, super indico",
      initials: "WL",
      color: "bg-[#D32F2F]",
    },
    {
      name: "RENOVA FIBRA",
      rating: 5,
      text: "Referência em preço justo, qualidade e atendimento.",
      initials: "RF",
      color: "bg-[#AB47BC]",
    },
    {
      name: "Brendo Junio",
      rating: 5,
      text: "Muito satisfeito com o trabalho de vocês, preço justo e qualidade",
      initials: "BJ",
      color: "bg-[#5C6BC0]",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Avaliações reais de clientes satisfeitos com nossos produtos e atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white font-semibold text-lg">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">
                        {testimonial.name}
                      </h4>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]"
                          />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-8 h-8 fill-[#FBBC04] text-[#FBBC04]" />
                  <span className="text-3xl font-bold text-foreground">5.0</span>
                </div>
                <p className="text-lg text-muted-foreground mb-2">
                  Avaliação média dos nossos clientes
                </p>
                <p className="text-sm text-muted-foreground">
                  Baseado em avaliações reais do Google
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
