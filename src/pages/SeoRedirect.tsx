import { ThemeProvider } from "@/hooks/use-theme";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Modules from "@/components/Modules";
import Integrations from "@/components/Integrations";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DeploymentOptions from "@/components/DeploymentOptions";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SeoContent from "@/components/SeoContent";
import { seoKeywords, generateJsonLd } from "@/data/seoKeywords";

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
  "preco-erp-cartonagem": {
    title: "Preço ERP para Cartonagem | Quanto Custa o Melhor Sistema - BC3",
    description: "Descubra o preço do ERP para cartonagem KRP. Mensalidade acessível com todos os módulos inclusos. Solicite orçamento sem compromisso.",
    h2: "Preço do ERP para Cartonagem",
  },
  "preco-software-cartonagem": {
    title: "Preço Software para Cartonagem | Investimento Inteligente - BC3",
    description: "Preço do software para cartonagem KRP. Automação completa da sua fábrica de papelão ondulado por uma mensalidade fixa e acessível.",
    h2: "Preço do Software para Cartonagem",
  },
  "preco-sistema-cartonagem": {
    title: "Preço Sistema para Cartonagem | Planos Acessíveis - BC3 Tecnologia",
    description: "Conheça o preço do sistema para cartonagem KRP. Planos para todos os portes de indústria de papelão ondulado. Solicite proposta gratuita.",
    h2: "Preço do Sistema para Cartonagem",
  },
  "valor-erp-cartonagem": {
    title: "Valor ERP para Cartonagem | Melhor Custo-Benefício - BC3",
    description: "O valor do ERP para cartonagem KRP é o melhor do mercado. TCO até 60% menor que ERPs genéricos. Resultado comprovado por 25+ clientes.",
    h2: "Valor do ERP para Cartonagem",
  },
  "valor-sistema-cartonagem": {
    title: "Valor Sistema para Cartonagem | Investimento com Retorno - BC3",
    description: "Valor do sistema para cartonagem KRP com retorno garantido. Módulos completos de produção, PCP, comercial, financeiro e fiscal inclusos.",
    h2: "Valor do Sistema para Cartonagem",
  },
  "valor-software-cartonagem": {
    title: "Valor Software para Cartonagem | Tecnologia Acessível - BC3",
    description: "Valor do software para cartonagem KRP. Tecnologia especializada para papelão ondulado por mensalidade fixa. Sem taxas ocultas.",
    h2: "Valor do Software para Cartonagem",
  },
  "orcamento-erp-cartonagem": {
    title: "Orçamento ERP para Cartonagem | Proposta Gratuita - BC3 Tecnologia",
    description: "Solicite orçamento do ERP para cartonagem KRP. Proposta personalizada em até 48h. Demonstração gratuita. Sem compromisso.",
    h2: "Orçamento de ERP para Cartonagem",
  },
  "orcamento-software-cartonagem": {
    title: "Orçamento Software para Cartonagem | Proposta Personalizada - BC3",
    description: "Solicite orçamento do software para cartonagem. Planos para todos os portes de indústria de papelão ondulado. Demonstração gratuita.",
    h2: "Orçamento de Software para Cartonagem",
  },
  "empresa-sistema-cartonagem": {
    title: "Empresa de Sistema para Cartonagem | BC3 Tecnologia - Líder Nacional",
    description: "BC3 Tecnologia: empresa líder em sistema para cartonagem no Brasil. Mais de 25 clientes. Sistema KRP especializado em papelão ondulado.",
    h2: "Empresa de Sistema para Cartonagem",
  },
  "empresa-erp-cartonagem": {
    title: "Empresa de ERP para Cartonagem | BC3 Tecnologia - Referência Nacional",
    description: "BC3 Tecnologia: empresa referência em ERP para cartonagem. Software especializado para indústrias de papelão ondulado em todo o Brasil.",
    h2: "Empresa de ERP para Cartonagem",
  },
  "empresa-especialista-cartonagem": {
    title: "Empresa Especialista em Cartonagem | BC3 Tecnologia - ERP KRP",
    description: "BC3 Tecnologia: empresa especialista em software para cartonagem e papelão ondulado. Mais de 10 anos de experiência exclusiva no setor.",
    h2: "Empresa Especialista em Cartonagem",
  },
  "empresa-sistema-industrial": {
    title: "Empresa de Sistema Industrial | Soluções ERP para Embalagens - BC3",
    description: "BC3 Tecnologia: empresa de sistema industrial para fabricantes de embalagens de papelão ondulado. ERP KRP completo e especializado.",
    h2: "Empresa de Sistema Industrial",
  },
  "solucao-erp-cartonagem": {
    title: "Solução ERP para Cartonagem | Sistema Completo e Integrado - BC3",
    description: "Solução ERP completa para cartonagem. Sistema integrado com produção, PCP, comercial, financeiro, fiscal e expedição. Demonstração gratuita.",
    h2: "Solução ERP para Cartonagem",
  },
  "solucao-industria-cartonagem": {
    title: "Solução para Indústria de Cartonagem | ERP Especializado - BC3",
    description: "Solução completa para indústria de cartonagem. ERP KRP com módulos especializados para papelão ondulado. 25+ clientes no Brasil.",
    h2: "Solução para Indústria de Cartonagem",
  },
  "software-industria-cartonagem": {
    title: "Software para Indústria de Cartonagem | Automação Industrial - BC3",
    description: "Software especializado para indústria de cartonagem. Automação de orçamentos, produção, PCP, financeiro e fiscal. Sistema na nuvem.",
    h2: "Software para Indústria de Cartonagem",
  },
  "sistema-industria-embalagens": {
    title: "Sistema para Indústria de Embalagens | ERP Completo - BC3 Tecnologia",
    description: "Sistema para indústria de embalagens de papelão ondulado. Gestão completa de produção, custos, vendas, estoque e fiscal integrados.",
    h2: "Sistema para Indústria de Embalagens",
  },
  "erp-industria-embalagens": {
    title: "ERP para Indústria de Embalagens | Gestão Especializada - BC3",
    description: "ERP para indústria de embalagens de papelão. Gestão completa com produção, PCP, comercial, financeiro e fiscal. 25+ clientes.",
    h2: "ERP para Indústria de Embalagens",
  },
  "sistema-controle-producao-cartonagem": {
    title: "Sistema Controle de Produção Cartonagem | Tempo Real - BC3",
    description: "Sistema de controle de produção para cartonagem. Monitoramento em tempo real, apontamento via tablet, OEE e rastreabilidade completa.",
    h2: "Sistema de Controle de Produção para Cartonagem",
  },
  "sistema-estoque-papelao": {
    title: "Sistema de Estoque para Papelão | Controle de Chapas e Bobinas - BC3",
    description: "Sistema de controle de estoque para papelão ondulado. Gestão de chapas, bobinas, insumos e produtos acabados com rastreabilidade.",
    h2: "Sistema de Estoque para Papelão",
  },
  "software-orcamento-caixas": {
    title: "Software de Orçamento para Caixas | Cálculo Automático - BC3",
    description: "Software de orçamento para caixas de papelão ondulado. Propostas comerciais em segundos com cálculo automático de custo e preço.",
    h2: "Software de Orçamento para Caixas",
  },
  "sistema-financeiro-cartonagem": {
    title: "Sistema Financeiro para Cartonagem | Controle Total - BC3 Tecnologia",
    description: "Sistema financeiro para cartonagem. Contas a pagar e receber, fluxo de caixa, DRE, conciliação bancária e boletos integrados ao ERP.",
    h2: "Sistema Financeiro para Cartonagem",
  },
  "calculo-custo-cartonagem": {
    title: "Cálculo de Custo na Cartonagem | Guia Completo - BC3 Tecnologia",
    description: "Aprenda como calcular o custo de produção na cartonagem. Guia completo com todas as variáveis: matéria-prima, mão de obra e custos indiretos.",
    h2: "Cálculo de Custo na Cartonagem",
  },
  "calculo-custo-caixa-papelao": {
    title: "Cálculo de Custo de Caixa de Papelão | Como Precificar - BC3",
    description: "Como calcular o custo de uma caixa de papelão ondulado. Fórmulas, variáveis e exemplos práticos. Software com cálculo automático.",
    h2: "Cálculo de Custo de Caixa de Papelão",
  },
  "como-calcular-caixa-papelao": {
    title: "Como Calcular Caixa de Papelão | Passo a Passo - BC3 Tecnologia",
    description: "Guia passo a passo de como calcular caixa de papelão ondulado. Das dimensões ao preço final. Software com cálculo automático em segundos.",
    h2: "Como Calcular Caixa de Papelão",
  },
  "como-gerenciar-cartonagem": {
    title: "Como Gerenciar uma Cartonagem | Guia de Gestão Industrial - BC3",
    description: "Guia completo de como gerenciar uma cartonagem. Gestão comercial, produção, custos, financeiro e fiscal com ERP especializado.",
    h2: "Como Gerenciar uma Cartonagem",
  },
  "controle-producao-cartonagem": {
    title: "Controle de Produção para Cartonagem | Eficiência Industrial - BC3",
    description: "Controle de produção para cartonagem com monitoramento em tempo real. Apontamento via tablet, OEE, rastreabilidade e controle de refugo.",
    h2: "Controle de Produção para Cartonagem",
  },
  "gestao-producao-cartonagem": {
    title: "Gestão de Produção para Cartonagem | PCP Integrado - BC3 Tecnologia",
    description: "Gestão de produção para cartonagem com PCP integrado ao ERP. Sequenciamento automático, Kanban digital e MRP para papelão ondulado.",
    h2: "Gestão de Produção para Cartonagem",
  },
  "controle-industria-papelao": {
    title: "Controle de Indústria de Papelão | ERP Especializado - BC3",
    description: "Controle completo de indústria de papelão ondulado. Dashboards em tempo real para produção, estoque, vendas, financeiro e fiscal.",
    h2: "Controle de Indústria de Papelão",
  },
  "como-funciona-pcp-cartonagem": {
    title: "Como Funciona o PCP na Cartonagem | Guia Completo - BC3 Tecnologia",
    description: "Entenda como funciona o PCP na cartonagem. Planejamento, programação e controle de produção para fábricas de papelão ondulado.",
    h2: "Como Funciona o PCP na Cartonagem",
  },
  "gestao-industrial-embalagens": {
    title: "Gestão Industrial de Embalagens | ERP para Fabricantes - BC3",
    description: "Gestão industrial de embalagens de papelão ondulado. ERP completo com produção, PCP, comercial, financeiro e fiscal integrados.",
    h2: "Gestão Industrial de Embalagens",
  },
  "erp-cartonagem-brasil": {
    title: "ERP para Cartonagem em Todo o Brasil | Atendimento Nacional - BC3",
    description: "ERP para cartonagem com atendimento em todo o Brasil. 26 estados + DF. Sistema na nuvem para indústrias de papelão ondulado. 25+ clientes.",
    h2: "ERP para Cartonagem em Todo o Brasil",
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
        <meta name="keywords" content={seoKeywords[slug] || "ERP cartonagem, sistema cartonagem, software cartonagem, papelão ondulado, BC3 Tecnologia, ERP KRP, melhor ERP cartonagem, sistema gestão cartonagem, ERP industrial, software papelão ondulado, gestão industrial cartonagem, cálculo custo caixa papelão, ERP nuvem cartonagem, sistema produção cartonagem, PCP cartonagem, ERP caixa papelão, sistema fábrica caixas, controle produção papelão ondulado, orçamento cartonagem, NF-e cartonagem, SPED cartonagem, MDF-e cartonagem, ERP embalagens, software fábrica papelão"} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`https://bc3.com.br/${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BC3 Tecnologia" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://bc3.com.br/logos/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="https://bc3.com.br/logos/logo.png" />
        <link rel="canonical" href={`https://bc3.com.br/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(generateJsonLd(slug, meta.title, meta.description))}
        </script>
      </Helmet>
      <div className="min-h-screen" data-react-root>
        <Header />
        <Hero />
        <SeoContent slug={slug} />
        <About />
        <Modules />
        <Integrations />
        <DeploymentOptions />
        <Clients />
        <Contact />
        <Footer seoHeading={meta.h2} seoSlug={slug} />
      </div>
    </ThemeProvider>
  );
};

export default SeoRedirect;
