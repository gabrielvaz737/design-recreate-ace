import { Award, Briefcase, GraduationCap, Star } from "lucide-react";

const achievements = [
  {
    icon: Briefcase,
    text: "10+ anos de experiência em IA"
  },
  {
    icon: GraduationCap,
    text: "PhD em Machine Learning - USP"
  },
  {
    icon: Award,
    text: "Ex-Google e Microsoft"
  },
  {
    icon: Star,
    text: "+5000 alunos formados"
  }
];

const Instructor = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">Aprenda com quem </span>
            <span className="text-primary">vive IA na prática</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-card rounded-lg border border-border overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Instrutor Principal</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-glow rounded-full opacity-50 blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Dr. João Silva
              </h3>
              <p className="text-primary font-semibold mb-4">
                Especialista em IA e Deep Learning
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com mais de uma década de experiência no desenvolvimento de soluções 
                de IA para empresas Fortune 500, Dr. João Silva traz uma perspectiva 
                única que combina rigor acadêmico com aplicação prática no mercado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <blockquote className="p-4 bg-card border-l-4 border-primary rounded">
              <p className="text-foreground italic mb-2">
                "Minha missão é democratizar o conhecimento em IA e preparar 
                profissionais para as oportunidades do futuro que já está aqui."
              </p>
              <cite className="text-muted-foreground text-sm">
                - Dr. João Silva
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;