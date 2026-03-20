import { Hammer, Grid3x3, Wrench, Construction } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Construction,
      title: "Vergalhões",
      description: "Aço de alta resistência para estruturas de concreto armado",
    },
    {
      icon: Grid3x3,
      title: "Colunas armadas",
      description: "Estruturas prontas para pilares e colunas",
    },
    {
      icon: Hammer,
      title: "Treliças",
      description: "Estruturas metálicas para coberturas e lajes",
    },
    {
      icon: Wrench,
      title: "Arames",
      description: "Diversos tipos de arames para construção",
    },
    {
      icon: Construction,
      title: "Pregos",
      description: "Variedade de pregos para diferentes aplicações",
    },
    {
      icon: Grid3x3,
      title: "Tela soldada",
      description: "Telas para reforço de estruturas de concreto",
    },
    {
      icon: Hammer,
      title: "Metalon",
      description: "Perfis tubulares para estruturas metálicas",
    },
    {
      icon: Wrench,
      title: "Perfil",
      description: "Perfis metálicos diversos",
    },
    {
      icon: Construction,
      title: "Tela cercamento",
      description: "Telas para cercamento e proteção",
    },
    {
      icon: Grid3x3,
      title: "Arame farpado",
      description: "Arame com farpas para segurança e cercamento",
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos produtos
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trazendo a melhor qualidade em materiais para sua obra, com atendimento de
              confiança
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary transition-all hover:shadow-lg group"
              >
                <CardHeader>
                  <product.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <p className="text-lg text-foreground font-semibold mb-4">
                  Precisa de um produto específico?
                </p>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco e solicite um orçamento personalizado para sua obra
                </p>
                <a
                  href="https://wa.me/5531995492284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Solicitar orçamento
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
