import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atender você e tirar suas dúvidas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Informações</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Telefone</p>
                      <a
                        href="https://wa.me/5531995492284"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +55 31 99549-2284
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">E-mail</p>
                      <a
                        href="mailto:diasferrltda@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        diasferrltda@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Endereço</p>
                      <p className="text-muted-foreground">
                        Rua Rosalina de Lima Ferreira, n° 62
                        <br />
                        Conj. Habitacional Dicalino Cabral
                        <br />
                        Betim - MG, 32642-058
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Horário</p>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h às 17h
                        <br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Solicite um orçamento
                </h3>
                <p className="text-muted-foreground mb-8">
                  Entre em contato pelo WhatsApp e receba um atendimento personalizado para
                  sua obra
                </p>
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 mb-8"
                  asChild
                >
                  <a
                    href="https://wa.me/5531995492284"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                </Button>

                <div className="border-t border-border pt-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Redes sociais
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/diasferr_ltda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1AMWkPCvoL/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5394817383576!2d-44.19837908509108!3d-19.96804398656204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69593f8b8e1b3%3A0x5c5c5c5c5c5c5c5c!2sR.%20Rosalina%20de%20Lima%20Ferreira%2C%2062%20-%20Conj.%20Habitacional%20Dicalino%20Cabral%2C%20Betim%20-%20MG%2C%2032642-058!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Dias Ferr Ltda"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
