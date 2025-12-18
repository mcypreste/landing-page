import React, { useState } from 'react';
import { 
  Music, 
  Palette, 
  PenTool, 
  Type, 
  ShieldCheck, 
  Zap, 
  Award, 
  CheckCircle2, 
  ChevronDown, 
  TrendingUp, 
  Layout, 
  DollarSign, 
  FileText, 
  Users, 
  Camera, 
  Video,
  ArrowRight,
  XCircle,
  Clock,
  Briefcase,
  Layers,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Badge = ({ children, icon: Icon, className }: { children: React.ReactNode, icon?: any, className?: string }) => (
  <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-300", className)}>
    {Icon && <Icon size={14} className="text-primary" />}
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', className, ...props }: any) => {
  const variants = {
    primary: "bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    outline: "border border-slate-700 hover:bg-slate-800 text-white font-medium",
  };
  return (
    <button className={cn("px-8 py-4 rounded-lg flex items-center justify-center gap-2", variants[variant as keyof typeof variants], className)} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className, glow = false }: { children: React.ReactNode, className?: string, glow?: boolean }) => (
  <div className={cn(
    "p-6 rounded-2xl bg-[#0f172a]/40 border border-slate-800/50 relative overflow-hidden group hover:border-amber-500/30 transition-colors",
    glow && "after:absolute after:inset-0 after:bg-amber-500/5 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity",
    className
  )}>
    {children}
  </div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-amber-400 transition-colors"
      >
        <span className="font-medium text-slate-200">{question}</span>
        <ChevronDown size={18} className={cn("text-slate-500 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-400 text-sm animate-in fade-in slide-in-from-top-2">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- Sections ---

const Hero = () => (
  <section className="relative pt-20 pb-32 px-4 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-500 text-xs font-medium uppercase tracking-wider">
          <Zap size={12} fill="currentColor" />
          Guia Prático para Artistas Independentes
        </div>
      </div>

      <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
        Como Ganhar Dinheiro <br />
        com <span className="text-gradient-gold">Inteligência Artificial</span> <br />
        em <span className="text-gradient-cyan">30 Dias</span>
      </h1>

      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        O <strong className="text-white">ebook completo</strong> para músicos, ilustradores, designers, escritores e criadores que querem <strong className="text-amber-400">monetizar sua arte</strong> usando IA de forma ética e estratégica.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Badge icon={Music}>Músicos</Badge>
        <Badge icon={Palette}>Ilustradores</Badge>
        <Badge icon={PenTool}>Designers</Badge>
        <Badge icon={Type}>Escritores</Badge>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
        <Button className="w-full md:w-auto">QUERO MEU EBOOK POR R$19,90</Button>
        <Button variant="outline" className="w-full md:w-auto">Ver o Que Vou Aprender</Button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 pt-4 text-slate-500 text-xs font-medium">
        <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-amber-500" /> Compra 100% Segura</div>
        <div className="flex items-center gap-2"><Zap size={14} className="text-amber-500" /> Download Imediato</div>
        <div className="flex items-center gap-2"><Award size={14} className="text-amber-500" /> Garantia de 7 Dias</div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 px-4 bg-[#030508]">
    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Por que este ebook?</span>
        <h2 className="text-3xl md:text-5xl font-bold">IA: Sua Aliada Criativa</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A Inteligência Artificial está mudando o jogo. Artistas ao redor do mundo já estão usando IA para criar mais rápido, vender melhor e alcançar públicos maiores.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: "Remove Bloqueios Criativos", desc: "Supere o bloqueio criativo com ideias instantâneas e variações ilimitadas para sua arte." },
          { icon: Zap, title: "Acelera Seus Processos", desc: "Produza em horas o que levaria dias ou semanas manualmente. Mais tempo para criar." },
          { icon: DollarSign, title: "Reduz Seus Custos", desc: "Elimine gastos com ferramentas caras e terceirização. IA democratiza a produção." },
          { icon: Award, title: "Profissionaliza Sua Marca", desc: "Crie uma identidade visual forte e consistente para sua marca artística." },
          { icon: PenTool, title: "Ferramentas para Cada Arte", desc: "Midjourney, ChatGPT, Soundraw, CapCut IA e muito mais - tudo explicado passo a passo." },
          { icon: CheckCircle2, title: "IA Como Aliada, Não Concorrente", desc: "Você continua sendo o criador. A IA é sua assistente que amplifica sua visão única." },
        ].map((item, i) => (
          <Card key={i} glow={i === 1} className={i === 1 ? 'border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.1)]' : ''}>
            <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
              <item.icon size={20} className="text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Monetize = () => (
  <section className="py-24 px-4">
    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">5 Formas de Monetizar</span>
        <h2 className="text-3xl md:text-5xl font-bold">Transforme Sua Arte em <span className="text-gradient-gold">Renda Real</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Descubra 5 caminhos comprovados para monetizar seu talento artístico usando Inteligência Artificial
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { id: "01", icon: Palette, title: "Venda da Própria Arte", desc: "Música autoral, ilustrações digitais, fotografias editadas, escrita criativa e até NFTs artísticos" },
          { id: "02", icon: DollarSign, title: "Serviços Personalizados", desc: "Capas de álbum, artes para redes sociais, roteiros criativos, letras sob encomenda, beats e trilhas" },
          { id: "03", icon: FileText, title: "Produtos Digitais", desc: "Ebooks artísticos, packs de artes, templates prontos, presets exclusivos, prompts criativos" },
          { id: "04", icon: Video, title: "Conteúdo Monetizado", desc: "YouTube, TikTok, Instagram Reels com programas de parceria, Patreon ou Apoia.se" },
          { id: "05", icon: Award, title: "Ensino e Consultoria", desc: "Cursos sobre seu processo criativo, mentorias para outros artistas, workshops online" },
        ].map((item, i) => (
          <Card key={i} className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="text-3xl font-bold text-slate-800 leading-none">{item.id}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <item.icon size={16} className="text-amber-500" />
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Journey = () => (
  <section className="py-24 px-4 bg-[#030508]">
    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Plano de Ação</span>
        <h2 className="text-3xl md:text-5xl font-bold">Sua Jornada de <span className="text-gradient-gold">30 Dias</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Um método estruturado semana a semana para você sair do zero e começar a monetizar
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { week: "Semana 1", title: "Base Criativa", subtitle: "Estrutura e clareza artística", icon: Clock, desc: "Defina sua identidade, escolha seu nicho, configure ferramentas de IA, teste criações, decida o que vai vender." },
          { week: "Semana 2", title: "Produto ou Serviço", subtitle: "Criar algo vendável", icon: Layers, desc: "Desenvolva seu produto principal, crie variações, construa identidade visual, defina preços e publique seu portfólio." },
          { week: "Semana 3", title: "Divulgação e Vendas", subtitle: "Visibilidade e conversão", icon: Rocket, desc: "Produza conteúdo curto, automatize posts, crie vídeos promocionais, aborde clientes e feche suas primeiras vendas." },
          { week: "Semana 4", title: "Escala e Autonomia", subtitle: "Crescimento sustentável", icon: TrendingUp, desc: "Melhore a qualidade, crie pacotes premium, automatize atendimento, estabeleça parcerias e planeje o próximo mês." },
        ].map((item, i) => (
          <Card key={i} className="pt-8">
            <div className="absolute top-0 left-6 -translate-y-1/2 px-3 py-1 bg-amber-500 rounded text-[10px] font-bold text-black uppercase">
              {item.week}
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 border border-slate-700">
              <item.icon size={18} className="text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-amber-500 text-[10px] font-bold uppercase mb-3 tracking-wider">{item.subtitle}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Potentials = () => (
  <section className="py-24 px-4">
    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Potencial Real</span>
        <h2 className="text-3xl md:text-5xl font-bold">Potencial de <span className="text-gradient-gold">Ganhos Reais</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
          Valores baseados em artistas reais que já estão monetizando com IA no Brasil
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { price: "R$80-300", title: "Capa de Álbum", sub: "Por projeto" },
          { price: "R$50-500", title: "Ilustrações Digitais", sub: "Conforme complexidade" },
          { price: "R$100-1K", title: "Beats e Trilhas", sub: "Licenciamento" },
          { price: "R$27-97", title: "Ebook Artístico", sub: "Vendas recorrentes" },
          { price: "R$500+", title: "Conteúdo Mensal", sub: "Monetização" },
          { price: "R$2K+", title: "Pacotes Premium", sub: "Serviços completos" },
        ].map((item, i) => (
          <Card key={i} className="text-center group border-slate-800/20 hover:border-amber-500/20">
            <div className="text-2xl font-black text-amber-500 mb-1 group-hover:scale-110 transition-transform">{item.price}</div>
            <div className="text-white font-bold text-sm">{item.title}</div>
            <div className="text-slate-500 text-[10px] uppercase tracking-wider">{item.sub}</div>
          </Card>
        ))}
      </div>
      
      <p className="text-center text-slate-500 text-xs">Seus ganhos podem variar conforme dedicação, qualidade e estratégia de divulgação.</p>
    </div>
  </section>
);

const Target = () => (
  <section className="py-24 px-4 bg-[#030508]">
    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Para quem é</span>
        <h2 className="text-3xl md:text-5xl font-bold">Feito para <span className="text-gradient-gold">Artistas Independentes</span></h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {[
          { icon: Music, label: "Músicos e Produtores" },
          { icon: Palette, label: "Ilustradores e Designers" },
          { icon: PenTool, label: "Escritores e Roteiristas" },
          { icon: Camera, label: "Fotógrafos" },
          { icon: Video, label: "Videomakers e Criadores" },
        ].map((tag, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/20 text-sm text-slate-300">
            <tag.icon size={16} className="text-amber-500" />
            {tag.label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="p-8 rounded-3xl bg-green-500/5 border border-green-500/20">
          <div className="flex items-center gap-2 mb-6 text-green-500">
            <CheckCircle2 size={24} />
            <h3 className="text-xl font-bold">É para você se...</h3>
          </div>
          <ul className="space-y-4 text-slate-300">
            {[
              "Quer monetizar sua arte de forma independente",
              "Está disposto a aprender ferramentas de IA",
              "Busca liberdade financeira e criativa",
              "Quer aproveitar a revolução da IA",
              "Tem algumas horas por semana para se dedicar"
            ].map((text, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20">
          <div className="flex items-center gap-2 mb-6 text-red-500">
            <XCircle size={24} />
            <h3 className="text-xl font-bold">NÃO é para você se...</h3>
          </div>
          <ul className="space-y-4 text-slate-300">
            {[
              "Busca dinheiro fácil sem esforço",
              "Quer usar IA para copiar estilos alheios",
              "Não está disposto a criar e divulgar"
            ].map((text, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <XCircle size={16} className="text-red-500 flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Offer = () => (
  <section id="oferta" className="py-24 px-4 relative">
    <div className="max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Investimento</span>
        <h2 className="text-3xl md:text-5xl font-bold">Comece Sua <span className="text-gradient-gold">Transformação</span></h2>
      </div>

      <div className="relative p-8 md:p-12 rounded-[40px] bg-gradient-to-b from-[#0f172a] to-[#05070a] border border-amber-500/30 shadow-[0_0_80px_rgba(245,158,11,0.1)] text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full text-sm font-bold text-black flex items-center gap-2 whitespace-nowrap">
          <Zap size={16} fill="currentColor" /> GUIA COMPLETO
        </div>

        <div className="space-y-2 mb-8">
          <div className="text-slate-500 line-through text-lg">De R$47,00</div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-4xl font-black">R$</span>
            <span className="text-7xl font-black text-amber-500">19</span>
            <div className="text-left">
              <div className="text-2xl font-black">,90</div>
            </div>
          </div>
          <div className="text-cyan-400 font-bold uppercase tracking-widest text-xs pt-2">Pagamento único • PDF para download</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
          {[
            "Ebook completo em PDF",
            "5 formas reais de monetizar sua arte",
            "Ferramentas de IA para cada tipo de artista",
            "Plano de ação de 30 dias completo",
            "Dicas de ética e direitos autorais",
            "Potenciais de ganho detalhados",
            "Erros fatais para evitar",
            "Download imediato"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
              <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <Button className="w-full text-xl py-6 rounded-2xl mb-6">QUERO MEU EBOOK AGORA</Button>
        
        <div className="flex items-center justify-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1"><ShieldCheck size={14} /> Garantia 7 dias</div>
          <div className="flex items-center gap-1"><Zap size={14} /> Download imediato</div>
          <div className="flex items-center gap-1"><CheckCircle2 size={14} /> Acesso vitalício</div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-24 px-4 bg-[#030508]">
    <div className="max-w-2xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">FAQ</span>
        <h2 className="text-3xl md:text-5xl font-bold">Perguntas <span className="text-gradient-gold">Frequentes</span></h2>
      </div>

      <div className="space-y-2">
        <AccordionItem 
          question="Preciso ter conhecimento prévio em IA?" 
          answer="Não! O ebook foi feito do zero ao avançado, com tutoriais passo a passo fáceis de seguir." 
        />
        <AccordionItem 
          question="Funciona para qualquer tipo de artista?" 
          answer="Sim, abordamos ferramentas e estratégias específicas para músicos, ilustradores, designers, escritores, fotógrafos e videomakers." 
        />
        <AccordionItem 
          question="Usar IA não vai tirar minha autenticidade?" 
          answer="De forma alguma. O guia foca em usar a IA como uma ferramenta de auxílio e aceleração, mantendo você no controle criativo total." 
        />
        <AccordionItem 
          question="Em quanto tempo vou ver resultados?" 
          answer="Seguindo o plano de ação de 30 dias, você terá toda a base para começar a realizar suas primeiras vendas nesse período." 
        />
        <AccordionItem 
          question="Como funciona a garantia?" 
          answer="Oferecemos 7 dias de garantia incondicional. Se não gostar do conteúdo, devolvemos seu investimento." 
        />
        <AccordionItem 
          question="Quais ferramentas de IA são abordadas?" 
          answer="As principais ferramentas do mercado: ChatGPT, Midjourney, Leonardo AI, Soundraw, Udio, CapCut IA, ElevenLabs e mais." 
        />
      </div>
    </div>
  </section>
);

const FooterCTA = () => (
  <section className="py-32 px-4 text-center space-y-12 overflow-hidden relative">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/5 rounded-full blur-[120px] -z-10" />
    
    <div className="space-y-4">
      <h2 className="text-4xl md:text-6xl font-black tracking-tight">Sua Decisão, <span className="text-gradient-gold">Seu Futuro</span></h2>
      <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Ser artista independente hoje não é apenas criar — é empreender a própria arte. A Inteligência Artificial não tira sua essência criativa. Ela <strong className="text-white">amplifica sua voz</strong>.
      </p>
      <p className="italic text-slate-500 text-lg md:text-xl pt-4">
        "A decisão de começar é sua. O potencial de crescimento é ilimitado."
      </p>
    </div>

    <Button className="mx-auto text-lg py-5 px-10 rounded-xl group">
      COMEÇAR MINHA TRANSFORMAÇÃO
      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
    </Button>

    <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">Sua arte merece ser vista, valorizada e monetizada.</p>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-4 border-t border-slate-900 bg-[#05070a]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-slate-600 text-[10px] uppercase tracking-wider">
        © 2024 IA Lucrativa. Todos os direitos reservados.
      </div>
      <div className="flex gap-8 text-slate-600 text-[10px] uppercase tracking-wider font-bold">
        <a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a>
        <a href="#" className="hover:text-amber-500 transition-colors">Contato</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Monetize />
      <Journey />
      <Potentials />
      <Target />
      <Offer />
      <FAQ />
      <FooterCTA />
      <Footer />
    </div>
  );
}

