import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Módulo 1: Fundamentos de IA",
    duration: "2 semanas",
    lessons: 12,
    topics: [
      "Introdução à Inteligência Artificial",
      "Python para Data Science",
      "Matemática e Estatística essencial",
      "Preparação e análise de dados"
    ],
    available: true
  },
  {
    id: 2,
    title: "Módulo 2: Machine Learning",
    duration: "3 semanas",
    lessons: 18,
    topics: [
      "Algoritmos de classificação",
      "Regressão e predição",
      "Clustering e segmentação",
      "Validação e otimização de modelos"
    ],
    available: true
  },
  {
    id: 3,
    title: "Módulo 3: Deep Learning",
    duration: "2 semanas",
    lessons: 15,
    topics: [
      "Redes Neurais Artificiais",
      "CNN para visão computacional",
      "RNN e processamento de linguagem",
      "Transfer Learning e Fine-tuning"
    ],
    available: true
  },
  {
    id: 4,
    title: "Módulo 4: IA Generativa",
    duration: "1 semana",
    lessons: 8,
    topics: [
      "GPT e modelos de linguagem",
      "Stable Diffusion e geração de imagens",
      "Prompt Engineering avançado",
      "Aplicações práticas de IA Generativa"
    ],
    available: true,
    bonus: true
  }
];

const Modules = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">Conteúdo </span>
            <span className="text-primary">completo do curso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            8 semanas de conteúdo intensivo com suporte total
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`relative p-6 bg-card border rounded-lg transition-all duration-300 ${
                module.bonus 
                  ? 'border-primary shadow-glow' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {module.bonus && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  BÔNUS EXCLUSIVO
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {module.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>⏱ {module.duration}</span>
                    <span>📚 {module.lessons} aulas</span>
                  </div>
                </div>
                {module.available ? (
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                ) : (
                  <div className="p-2 bg-muted rounded-lg">
                    <Lock className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                {module.topics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={module.bonus ? "default" : "outline"} 
                className="w-full mt-6"
              >
                Ver detalhes do módulo
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-card rounded-lg border border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            + Projetos práticos em cada módulo
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Desenvolva um portfólio completo com projetos reais que impressionam recrutadores
          </p>
          <Button variant="cta" size="lg">
            Garantir minha vaga agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Modules;