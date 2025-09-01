import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Data Scientist @ Nubank",
    content: "O curso mudou completamente minha carreira. Saí de analista júnior para cientista de dados em apenas 6 meses após a conclusão.",
    rating: 5,
    highlight: "Aumento de 180% no salário"
  },
  {
    name: "Pedro Oliveira",
    role: "ML Engineer @ iFood",
    content: "A didática é excepcional e os projetos práticos me deram confiança para aplicar IA em problemas reais da empresa.",
    rating: 5,
    highlight: "Promovido 2x em 1 ano"
  },
  {
    name: "Ana Costa",
    role: "AI Product Manager @ Stone",
    content: "Mesmo sem background técnico, consegui entender e liderar projetos de IA. O suporte da equipe foi fundamental.",
    rating: 5,
    highlight: "Transição de carreira bem-sucedida"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">Histórias de </span>
            <span className="text-primary">transformação real</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que nossos alunos conquistaram após o curso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Highlight */}
              <div className="mb-4 inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {testimonial.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">baseado em +500 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;