import { Brain, Rocket, Trophy, Users, Code, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "IA na Prática",
    description: "Aprenda implementações reais de Machine Learning e Deep Learning"
  },
  {
    icon: Code,
    title: "Projetos Reais",
    description: "Desenvolva 10+ projetos para seu portfólio profissional"
  },
  {
    icon: Users,
    title: "Mentoria Individual",
    description: "Acompanhamento personalizado com especialistas do mercado"
  },
  {
    icon: Rocket,
    title: "Aceleração de Carreira",
    description: "Preparação completa para vagas sênior em IA"
  },
  {
    icon: Trophy,
    title: "Certificado Reconhecido",
    description: "Certificação valorizada pelas maiores empresas de tech"
  },
  {
    icon: TrendingUp,
    title: "Garantia de Resultado",
    description: "Suporte até você conquistar sua primeira vaga em IA"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">Por que escolher nosso </span>
            <span className="text-primary">curso de IA?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Metodologia comprovada com resultados reais no mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;