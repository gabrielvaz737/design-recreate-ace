import { ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Fundamentos",
    description: "Python, matemática e estatística para IA",
    color: "from-red-900/20 to-red-600/20"
  },
  {
    number: "02",
    title: "Machine Learning",
    description: "Algoritmos supervisionados e não supervisionados",
    color: "from-red-800/20 to-red-500/20"
  },
  {
    number: "03",
    title: "Deep Learning",
    description: "Redes neurais e processamento avançado",
    color: "from-red-700/20 to-red-400/20"
  },
  {
    number: "04",
    title: "Projetos Práticos",
    description: "Aplicações reais com mentoria individual",
    color: "from-red-600/20 to-red-300/20"
  },
  {
    number: "05",
    title: "Carreira",
    description: "Preparação para o mercado e networking",
    color: "from-red-500/20 to-red-200/20"
  }
];

const Journey = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">Sua jornada até </span>
            <span className="text-primary">o sucesso em IA</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um caminho estruturado e progressivo para dominar IA
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent -translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-8">
                  {/* Left side - for even indices */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'opacity-0'}`}>
                    <div className={`inline-block p-6 rounded-lg bg-gradient-to-r ${step.color} border border-border backdrop-blur-sm`}>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-glow">
                    <span className="text-primary-foreground font-bold text-lg">
                      {step.number}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowDown className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-5 h-5 text-primary animate-bounce" />
                    )}
                  </div>

                  {/* Right side - for odd indices */}
                  <div className={`flex-1 ${index % 2 === 1 ? '' : 'opacity-0'}`}>
                    <div className={`inline-block p-6 rounded-lg bg-gradient-to-r ${step.color} border border-border backdrop-blur-sm`}>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg border border-primary/50">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Resultado Final
            </h3>
            <p className="text-foreground text-lg">
              Você estará preparado para as melhores vagas em IA do mercado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;