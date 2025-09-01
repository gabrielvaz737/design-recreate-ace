import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-dark flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20 animate-glow-pulse" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      
      <div className="container relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-muted-foreground">Nova turma disponível</span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-foreground">Domine as </span>
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              aplicações de IA
            </span>
            <br />
            <span className="text-foreground">e seja o profissional que o</span>
            <br />
            <span className="text-primary">mercado está buscando</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprenda a criar soluções práticas com Inteligência Artificial e transforme 
            sua carreira em apenas 8 semanas com o método mais completo do Brasil
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Quero me inscrever agora
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Ver grade completa
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div>
              <h3 className="text-3xl font-bold text-primary">+2.000</h3>
              <p className="text-sm text-muted-foreground">Alunos formados</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">98%</h3>
              <p className="text-sm text-muted-foreground">Taxa de satisfação</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">R$ 8k</h3>
              <p className="text-sm text-muted-foreground">Salário médio</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;