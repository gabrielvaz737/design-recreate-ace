import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, Clock } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">Investimento no </span>
            <span className="text-primary">seu futuro</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Condições especiais por tempo limitado
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 bg-card border-2 border-primary rounded-lg shadow-glow">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
              OFERTA LIMITADA - 40% OFF
            </div>

            <div className="text-center mb-8">
              <p className="text-muted-foreground line-through text-lg mb-2">
                De R$ 4.997,00
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl font-bold text-primary">R$ 2.997</span>
                <span className="text-muted-foreground">,00</span>
              </div>
              <p className="text-muted-foreground mt-2">
                ou 12x de R$ 297,00 no cartão
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium">Acesso vitalício ao curso completo</p>
                  <p className="text-sm text-muted-foreground">8 módulos + atualizações futuras</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium">Mentoria individual por 3 meses</p>
                  <p className="text-sm text-muted-foreground">Suporte direto com especialistas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium">Certificado reconhecido pelo mercado</p>
                  <p className="text-sm text-muted-foreground">Validado por empresas parceiras</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium">Comunidade exclusiva no Discord</p>
                  <p className="text-sm text-muted-foreground">Networking com +2000 profissionais</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium">10+ projetos práticos para portfólio</p>
                  <p className="text-sm text-muted-foreground">Cases reais de empresas</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button variant="hero" size="lg" className="w-full mb-6">
              <Zap className="w-5 h-5 mr-2" />
              Garantir minha vaga com desconto
            </Button>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Shield className="w-6 h-6 text-success mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">
                  Garantia de 7 dias
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">
                  Acesso imediato
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-6 h-6 text-warning mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">
                  Pagamento seguro
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency */}
        <div className="mt-8 text-center">
          <div className="inline-block p-4 bg-card border border-primary/50 rounded-lg">
            <p className="text-primary font-semibold mb-1">
              ⏰ Oferta válida por tempo limitado
            </p>
            <p className="text-sm text-muted-foreground">
              Restam apenas 23 vagas com este desconto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;