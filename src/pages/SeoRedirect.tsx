import { ThemeProvider } from "@/hooks/use-theme";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Modules from "@/components/Modules";
import Integrations from "@/components/Integrations";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const seoMeta: Record<string, { title: string; description: string; h2: string }> = {
  "erp-cartonagem": {
    title: "ERP para Cartonagem | Sistema Completo - BC3 Tecnologia",
    description: "ERP especializado para indústrias de cartonagem. Gerencie produção, vendas, compras, financeiro e fiscal em um único sistema integrado. Solicite uma demonstração.",
    h2: "ERP para Cartonagem",
  },
  "sistema-cartonagem": {
    title: "Sistema para Cartonagem | Gestão Industrial - BC3 Tecnologia",
    description: "Sistema completo para cartonagem com módulos de produção, PCP, comercial, financeiro e fiscal. Automatize sua indústria de caixas de papelão ondulado.",
    h2: "Sistema para Cartonagem",
  },
  "software-cartonagem": {
    title: "Software para Cartonagem | Automação Industrial - BC3 Tecnologia",
    description: "Software especializado para cartonagem e papelão ondulado. Controle total da produção, cálculo de custo, emissão de notas fiscais e relatórios gerenciais.",
    h2: "Software para Cartonagem",
  },
  "sistema-papelao-ondulado": {
    title: "Sistema para Papelão Ondulado | ERP Industrial - BC3 Tecnologia",
    description: "Sistema de gestão para indústrias de papelão ondulado. Controle de produção, estoque de chapas, cálculo de custo e planejamento de corte integrado.",
    h2: "Sistema para Papelão Ondulado",
  },
  "erp-industria-papelao": {
    title: "ERP para Indústria de Papelão | Gestão Completa - BC3 Tecnologia",
    description: "ERP industrial para fabricantes de papelão ondulado e caixas de papelão. Módulos de produção, compras, vendas, financeiro, fiscal e SPED integrados.",
    h2: "ERP para Indústria de Papelão",
  },
  "software-industria-embalagens": {
    title: "Software para Indústria de Embalagens | BC3 Tecnologia",
    description: "Software de gestão para indústrias de embalagens de papelão. Controle de produção, PCP, cálculo de custo, comercial e financeiro em um só lugar.",
    h2: "Software para Indústria de Embalagens",
  },
  "sistema-gestao-cartonagem": {
    title: "Sistema de Gestão para Cartonagem | BC3 Tecnologia",
    description: "Sistema de gestão industrial para cartonagem. Automatize processos de produção, controle financeiro, emissão fiscal e relatórios de desempenho.",
    h2: "Sistema de Gestão para Cartonagem",
  },
  "sistema-erp-cartonagem": {
    title: "Sistema ERP para Cartonagem | Solução Integrada - BC3 Tecnologia",
    description: "Sistema ERP completo para indústrias de cartonagem. Integração entre produção, comercial, compras, financeiro, fiscal, MDF-e e SPED.",
    h2: "Sistema ERP para Cartonagem",
  },
  "programa-cartonagem": {
    title: "Programa para Cartonagem | Controle de Produção - BC3 Tecnologia",
    description: "Programa especializado para cartonagem com cálculo de custo de caixas, controle de produção, gestão de pedidos e emissão de documentos fiscais.",
    h2: "Programa para Cartonagem",
  },
  "sistema-pcp-cartonagem": {
    title: "Sistema PCP para Cartonagem | Planejamento de Produção - BC3",
    description: "Sistema de PCP para cartonagem. Planejamento e controle de produção, programação de máquinas, controle de ordens de produção e rastreabilidade.",
    h2: "Sistema PCP para Cartonagem",
  },
  "software-fabricante-caixa-papelao": {
    title: "Software para Fabricante de Caixa de Papelão | BC3 Tecnologia",
    description: "Software para fabricantes de caixas de papelão ondulado. Cálculo de custo, gestão de produção, controle de estoque e emissão de notas fiscais.",
    h2: "Software para Fabricante de Caixa de Papelão",
  },
  "sistema-controle-cartonagem": {
    title: "Sistema de Controle para Cartonagem | BC3 Tecnologia",
    description: "Sistema de controle industrial para cartonagem. Monitore produção, estoque, vendas, compras e financeiro com dashboards e relatórios em tempo real.",
    h2: "Sistema de Controle para Cartonagem",
  },
  "erp-cartonagem-nuvem": {
    title: "ERP para Cartonagem na Nuvem | Sistema Online - BC3 Tecnologia",
    description: "ERP em nuvem para cartonagem. Acesse de qualquer lugar, sem instalação. Sistema completo de gestão para indústrias de papelão ondulado.",
    h2: "ERP para Cartonagem na Nuvem",
  },
  "sistema-calculo-cartonagem": {
    title: "Sistema de Cálculo para Cartonagem | Custo de Caixas - BC3",
    description: "Sistema de cálculo de custo para cartonagem. Calcule preços de caixas de papelão ondulado considerando matéria-prima, mão de obra e custos indiretos.",
    h2: "Sistema de Cálculo para Cartonagem",
  },
  "software-papelao-ondulado": {
    title: "Software para Papelão Ondulado | Gestão de Produção - BC3",
    description: "Software completo para indústrias de papelão ondulado. Gerencie toda a cadeia produtiva, do pedido à expedição, com controle total de custos.",
    h2: "Software para Papelão Ondulado",
  },
  "sistema-industria-papelao-ondulado": {
    title: "Sistema para Indústria de Papelão Ondulado | BC3 Tecnologia",
    description: "Sistema especializado para indústrias de papelão ondulado. Módulos de produção, comercial, compras, financeiro, fiscal e logística integrados.",
    h2: "Sistema para Indústria de Papelão Ondulado",
  },
  "gestao-industrial-cartonagem": {
    title: "Gestão Industrial para Cartonagem | ERP Especializado - BC3",
    description: "Solução de gestão industrial para cartonagem. ERP com PCP, controle de produção, cálculo de custo, comercial, financeiro e obrigações fiscais.",
    h2: "Gestão Industrial para Cartonagem",
  },
  "sistema-caixa-papelao": {
    title: "Sistema para Caixa de Papelão | Controle Industrial - BC3",
    description: "Sistema para fabricantes de caixas de papelão. Controle de produção, gestão de pedidos, cálculo de preço, emissão fiscal e relatórios gerenciais.",
    h2: "Sistema para Caixa de Papelão",
  },
  "erp-industria-grafica": {
    title: "ERP para Indústria Gráfica | Sistema de Gestão - BC3 Tecnologia",
    description: "ERP para indústria gráfica e de embalagens. Gestão completa de produção, orçamentos, pedidos, financeiro, fiscal e expedição integrados.",
    h2: "ERP para Indústria Gráfica",
  },
  "software-industria-caixa-papelao": {
    title: "Software para Indústria de Caixa de Papelão | BC3 Tecnologia",
    description: "Software de gestão para indústrias de caixas de papelão ondulado. Produção, PCP, vendas, compras, financeiro e fiscal em uma única plataforma.",
    h2: "Software para Indústria de Caixa de Papelão",
  },
  "calculo-custo-caixa-papelao-ondulado": {
    title: "Cálculo de Custo de Caixa de Papelão Ondulado | BC3 Tecnologia",
    description: "Sistema para cálculo de custo de caixas de papelão ondulado. Considere matéria-prima, composição de chapas, gramatura, mão de obra e custos fixos.",
    h2: "Cálculo de Custo de Caixa de Papelão Ondulado",
  },
  "empresa-software-cartonagem": {
    title: "Empresa de Software para Cartonagem | BC3 Tecnologia",
    description: "BC3 Tecnologia: empresa especializada em software para cartonagem e papelão ondulado. Mais de 25 clientes atendidos em todo o Brasil.",
    h2: "Empresa de Software para Cartonagem",
  },
  "sistema-gerenciamento-cartonagem": {
    title: "Sistema de Gerenciamento para Cartonagem | BC3 Tecnologia",
    description: "Sistema de gerenciamento completo para cartonagem. Controle toda sua operação industrial com módulos integrados e relatórios em tempo real.",
    h2: "Sistema de Gerenciamento para Cartonagem",
  },
};

const SeoRedirect = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const meta = seoMeta[slug] || {
    title: "BC3 Tecnologia | ERP para Cartonagem e Papelão Ondulado",
    description: "Sistema ERP especializado para indústrias de cartonagem e papelão ondulado. Gestão completa de produção, comercial, financeiro e fiscal.",
    h2: "ERP para Cartonagem",
  };

  return (
    <ThemeProvider>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://bc3.com.br/${slug}`} />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Modules />
        <Integrations />
        <Clients />
        <Contact />
        <Footer seoHeading={meta.h2} seoSlug={slug} />
      </div>
    </ThemeProvider>
  );
};

export default SeoRedirect;
