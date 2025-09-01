import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Preciso ter conhecimento prévio em programação?",
    answer: "Não é necessário! O curso começa do zero e ensina toda a programação necessária em Python. Nosso método é pensado para iniciantes e profissionais que querem migrar para IA."
  },
  {
    question: "Quanto tempo preciso dedicar por semana?",
    answer: "Recomendamos de 10 a 15 horas semanais para um aproveitamento ideal. As aulas são gravadas e você pode assistir no seu ritmo, mas temos também encontros ao vivo semanais."
  },
  {
    question: "O certificado é reconhecido pelo mercado?",
    answer: "Sim! Nosso certificado é validado por mais de 50 empresas parceiras, incluindo startups e grandes corporações. Muitos alunos conseguem vagas antes mesmo de terminar o curso."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Se por qualquer motivo você não ficar satisfeito com o curso nos primeiros 7 dias, devolvemos 100% do seu investimento, sem perguntas ou burocracia."
  },
  {
    question: "Terei suporte durante o curso?",
    answer: "Sim! Você terá acesso a mentoria individual, grupo no Discord com instrutores e alunos, além de plantões de dúvidas ao vivo toda semana."
  },
  {
    question: "O curso aborda as IAs mais recentes como ChatGPT?",
    answer: "Absolutamente! Temos um módulo inteiro dedicado a IA Generativa, incluindo GPT-4, Claude, Stable Diffusion e as técnicas mais avançadas de Prompt Engineering."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">Perguntas </span>
            <span className="text-primary">frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre o curso
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="text-foreground font-medium">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 bg-gradient-card border border-border rounded-lg text-center">
          <p className="text-foreground mb-4">
            Ainda tem dúvidas? Fale com nossa equipe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              📧 contato@curso-ia.com.br
            </Button>
            <Button variant="outline">
              💬 WhatsApp: (11) 99999-9999
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;