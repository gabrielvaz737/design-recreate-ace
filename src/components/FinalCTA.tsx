import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Está na hora de </span>
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              transformar seu futuro
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a mais de 2.000 profissionais que já estão dominando IA 
            e conquistando as melhores oportunidades do mercado
          </p>

          {/* Stats reminder */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto py-8">
            <div className="text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                Início em<br />
                <span className="text-foreground font-semibold">15 dias</span>
              </p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                Apenas<br />
                <span className="text-foreground font-semibold">23 vagas</span>
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                Média salarial<br />
                <span className="text-foreground font-semibold">R$ 8.000</span>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button variant="hero" size="lg" className="min-w-[300px] group">
              Garantir minha vaga agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Pagamento 100% seguro • Garantia de 7 dias
            </p>
          </div>

          {/* Warning */}
          <div className="inline-block p-4 bg-primary/10 border border-primary/30 rounded-lg">
            <p className="text-primary font-semibold">
              ⚠️ Atenção: O desconto de 40% termina em breve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;