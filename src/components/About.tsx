import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Fé",
      description: "Deus é a base que nos guia e fortalece todos os dias",
    },
    {
      icon: Target,
      title: "Honestidade",
      description: "Conduzimos nosso trabalho com verdade e transparência",
    },
    {
      icon: Eye,
      title: "Comprometimento",
      description: "Entregamos o melhor em cada pedido, com responsabilidade e respeito",
    },
    {
      icon: Heart,
      title: "União",
      description: "Crescemos juntos, como família e equipe",
    },
    {
      icon: Target,
      title: "Dedicação",
      description: "Buscamos sempre evoluir, servindo com excelência e amor",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre a Dias Ferr
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Fornecer produtos de ferro e aço com qualidade, agilidade e confiança,
                  contribuindo para o crescimento e segurança das construções de nossos
                  clientes, fazendo parte de sonhos. Sempre com atendimento humanizado e
                  compromisso com o resultado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Eye className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência no mercado de ferro e aço, reconhecida pela excelência no
                  atendimento, credibilidade e relacionamento duradouro com clientes,
                  fornecedores e parceiros.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Nossos valores
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Nossa história</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Dias Ferr surgiu em março de 2022, da iniciativa de um casal que uniu
                  coragem e uma nova visão empreendedora para ingressar no ramo de ferro e aço.
                </p>
                <p>
                  A ideia nasceu durante a construção da própria casa, quando perceberam como
                  o preço do aço variava e enxergaram uma oportunidade de oferecer produtos de
                  qualidade com melhor custo-benefício.
                </p>
                <p>
                  Com investimentos próprios — do acerto e da PL —, deram início à empresa,
                  começando como MEI.
                </p>
                <p className="font-semibold text-primary">
                  O principal objetivo da Dias Ferr é fornecer materiais de ferro e aço com
                  qualidade, preço justo e atendimento de confiança, contribuindo para o
                  desenvolvimento de obras e realizando sonhos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
