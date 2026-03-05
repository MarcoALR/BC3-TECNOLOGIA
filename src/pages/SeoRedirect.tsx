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
import SeoContent from "@/components/SeoContent";

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
  "erp-embalagens-papelao": {
    title: "ERP para Embalagens de Papelão | Sistema Completo - BC3 Tecnologia",
    description: "ERP especializado para fabricantes de embalagens de papelão ondulado. Gestão de produção, custos, vendas e fiscal. Atendemos todo o Brasil.",
    h2: "ERP para Embalagens de Papelão",
  },
  "sistema-producao-cartonagem": {
    title: "Sistema de Produção para Cartonagem | Controle Industrial - BC3",
    description: "Sistema de controle de produção para cartonagem. Ordens de fabricação, apontamento, rastreabilidade e PCP integrado ao ERP KRP.",
    h2: "Sistema de Produção para Cartonagem",
  },
  "software-gestao-embalagens": {
    title: "Software de Gestão para Embalagens | ERP Industrial - BC3 Tecnologia",
    description: "Software de gestão industrial para fabricantes de embalagens. Controle de produção, estoque, vendas, financeiro e fiscal em um só sistema.",
    h2: "Software de Gestão para Embalagens",
  },
  "erp-fabrica-caixas": {
    title: "ERP para Fábrica de Caixas | Sistema de Gestão - BC3 Tecnologia",
    description: "ERP completo para fábricas de caixas de papelão ondulado. Cálculo de custo, produção, comercial, financeiro e fiscal integrados.",
    h2: "ERP para Fábrica de Caixas",
  },
  "sistema-orcamento-cartonagem": {
    title: "Sistema de Orçamento para Cartonagem | Cálculo Automático - BC3",
    description: "Sistema de orçamento para cartonagem com cálculo automático de preço de caixas. Gere propostas comerciais em segundos com precisão total.",
    h2: "Sistema de Orçamento para Cartonagem",
  },
  "software-nfe-cartonagem": {
    title: "Software NF-e para Cartonagem | Emissão Fiscal - BC3 Tecnologia",
    description: "Software para emissão de NF-e, NFS-e, CT-e e MDF-e integrado ao ERP para cartonagem. SPED Fiscal e Contribuições automatizados.",
    h2: "Software NF-e para Cartonagem",
  },
  "erp-cartonagem-sao-paulo": {
    title: "ERP para Cartonagem em São Paulo | BC3 Tecnologia",
    description: "ERP para indústrias de cartonagem em São Paulo, Campinas, Sorocaba, Jundiaí, Ribeirão Preto e interior de SP. Sistema na nuvem 100% online.",
    h2: "ERP para Cartonagem em São Paulo",
  },
  "erp-cartonagem-minas-gerais": {
    title: "ERP para Cartonagem em Minas Gerais | BC3 Tecnologia",
    description: "ERP para cartonagem em Minas Gerais: BH, Uberlândia, Juiz de Fora, Contagem, Betim e todo o estado. Sistema especializado em papelão ondulado.",
    h2: "ERP para Cartonagem em Minas Gerais",
  },
  "erp-cartonagem-parana": {
    title: "ERP para Cartonagem no Paraná | BC3 Tecnologia",
    description: "ERP para cartonagem no Paraná: Curitiba, Londrina, Maringá, Ponta Grossa e região. Sistema completo para indústrias de papelão ondulado.",
    h2: "ERP para Cartonagem no Paraná",
  },
  "erp-cartonagem-santa-catarina": {
    title: "ERP para Cartonagem em Santa Catarina | BC3 Tecnologia",
    description: "ERP para cartonagem em Santa Catarina: Joinville, Blumenau, Florianópolis, Chapecó e região. Software especializado para papelão ondulado.",
    h2: "ERP para Cartonagem em Santa Catarina",
  },
  "erp-cartonagem-rio-grande-do-sul": {
    title: "ERP para Cartonagem no Rio Grande do Sul | BC3 Tecnologia",
    description: "ERP para cartonagem no RS: Porto Alegre, Caxias do Sul, Canoas, Novo Hamburgo e região. Sistema na nuvem para indústrias de papelão ondulado.",
    h2: "ERP para Cartonagem no Rio Grande do Sul",
  },
  "erp-cartonagem-goias": {
    title: "ERP para Cartonagem em Goiás | BC3 Tecnologia",
    description: "ERP para cartonagem em Goiás: Goiânia, Aparecida de Goiânia, Anápolis e região. Sistema completo para fábricas de caixas de papelão.",
    h2: "ERP para Cartonagem em Goiás",
  },
  "erp-cartonagem-rio-de-janeiro": {
    title: "ERP para Cartonagem no Rio de Janeiro | BC3 Tecnologia",
    description: "ERP para cartonagem no Rio de Janeiro: RJ, Niterói, Duque de Caxias, Nova Iguaçu e região. Software para indústrias de papelão ondulado.",
    h2: "ERP para Cartonagem no Rio de Janeiro",
  },
  "erp-cartonagem-bahia": {
    title: "ERP para Cartonagem na Bahia | BC3 Tecnologia",
    description: "ERP para cartonagem na Bahia: Salvador, Feira de Santana, Camaçari e região. Sistema de gestão para indústrias de papelão ondulado.",
    h2: "ERP para Cartonagem na Bahia",
  },
  "erp-cartonagem-nordeste": {
    title: "ERP para Cartonagem no Nordeste | BC3 Tecnologia",
    description: "ERP para cartonagem no Nordeste do Brasil: Bahia, Pernambuco, Ceará, Paraíba, RN e demais estados. Sistema na nuvem para papelão ondulado.",
    h2: "ERP para Cartonagem no Nordeste",
  },
  "sistema-flexografia-cartonagem": {
    title: "Sistema para Flexografia em Cartonagem | BC3 Tecnologia",
    description: "Sistema de controle de impressão flexográfica para cartonagem. Gestão de clichês, cores, provas e produção de embalagens impressas.",
    h2: "Sistema para Flexografia em Cartonagem",
  },
  "software-corte-vinco-cartonagem": {
    title: "Software para Corte e Vinco em Cartonagem | BC3 Tecnologia",
    description: "Software para controle de corte e vinco em cartonagem. Gestão de facas, matrizes, troquelamento e acabamento de caixas de papelão ondulado.",
    h2: "Software para Corte e Vinco em Cartonagem",
  },
  "erp-onduladeira": {
    title: "ERP para Onduladeira | Sistema para Onduladora - BC3 Tecnologia",
    description: "ERP para indústrias com onduladeira. Controle de bobinas, produção de chapas, planejamento de corte e gestão integrada da onduladora.",
    h2: "ERP para Onduladeira",
  },
  "sistema-expedicao-cartonagem": {
    title: "Sistema de Expedição para Cartonagem | BC3 Tecnologia",
    description: "Sistema de expedição e logística para cartonagem. Controle de embarque, romaneio, rastreamento de entregas e integração com transportadoras.",
    h2: "Sistema de Expedição para Cartonagem",
  },
  "software-estoque-papelao-ondulado": {
    title: "Software de Estoque para Papelão Ondulado | BC3 Tecnologia",
    description: "Software para controle de estoque de papelão ondulado. Gestão de chapas, bobinas, insumos e produtos acabados com rastreabilidade completa.",
    h2: "Software de Estoque para Papelão Ondulado",
  },
  "erp-cartonagem-pequena-empresa": {
    title: "ERP para Cartonagem Pequena Empresa | BC3 Tecnologia",
    description: "ERP acessível para pequenas cartonagens. Sistema completo e na nuvem para fábricas de caixas de papelão de todos os portes.",
    h2: "ERP para Cartonagem - Pequena Empresa",
  },
  "sistema-fiscal-cartonagem": {
    title: "Sistema Fiscal para Cartonagem | NF-e, SPED, MDF-e - BC3",
    description: "Sistema fiscal completo para cartonagem. Emissão de NF-e, CT-e, MDF-e, SPED Fiscal, SPED Contribuições e EFD-REINF integrados ao ERP.",
    h2: "Sistema Fiscal para Cartonagem",
  },
  "sistema-vendas-cartonagem": {
    title: "Sistema de Vendas para Cartonagem | Comercial - BC3 Tecnologia",
    description: "Sistema de vendas e comercial para cartonagem. Orçamentos, pedidos, follow-up, comissões e integração com CRM para indústrias de papelão ondulado.",
    h2: "Sistema de Vendas para Cartonagem",
  },
  "software-orcamento-caixa-papelao": {
    title: "Software de Orçamento para Caixa de Papelão | BC3 Tecnologia",
    description: "Software para orçamento de caixas de papelão ondulado. Cálculo automático de preço com base em composição de chapa, impressão e acabamento.",
    h2: "Software de Orçamento para Caixa de Papelão",
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
        <SeoContent slug={slug} />
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
