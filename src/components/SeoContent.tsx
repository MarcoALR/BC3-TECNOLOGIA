import { Link } from "react-router-dom";

const regionContent = `Atendemos indústrias de cartonagem em todas as regiões do Brasil: São Paulo (SP), Minas Gerais (MG), Rio de Janeiro (RJ), Paraná (PR), Santa Catarina (SC), Rio Grande do Sul (RS), Goiás (GO), Bahia (BA), Pernambuco (PE), Ceará (CE), Espírito Santo (ES), Mato Grosso (MT), Mato Grosso do Sul (MS), Distrito Federal (DF), Amazonas (AM), Pará (PA) e demais estados. Nosso sistema ERP funciona 100% na nuvem, permitindo acesso de qualquer cidade — de Campinas a Manaus, de Curitiba a Recife, de Belo Horizonte a Porto Alegre.`;

const ctaBlock = (
  <div className="mt-10 p-8 rounded-2xl bg-primary/10 border border-primary/20 text-center">
    <h3 className="text-2xl font-bold text-foreground mb-3">
      Solicite uma Demonstração Gratuita
    </h3>
    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
      Conheça o ERP KRP da BC3 Tecnologia e descubra como podemos transformar a gestão da sua indústria de cartonagem e papelão ondulado. Sem compromisso.
    </p>
    <Link
      to="/contato"
      className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
    >
      Fale com um Especialista
    </Link>
  </div>
);

const featuresListCommon = [
  "Cálculo automático de custo de caixas de papelão ondulado",
  "Controle de produção com ordens de fabricação e rastreabilidade",
  "PCP – Planejamento e Controle de Produção integrado",
  "Módulo comercial com orçamentos, pedidos e follow-up",
  "Gestão de compras com cotações e controle de fornecedores",
  "Controle financeiro completo: contas a pagar, receber, fluxo de caixa",
  "Emissão de NF-e, NFS-e, CT-e e MDF-e",
  "SPED Fiscal, SPED Contribuições e EFD-REINF",
  "Relatórios gerenciais e dashboards em tempo real",
  "Gestão de estoque de chapas, insumos e produtos acabados",
  "Integração com Zoho CRM e outras plataformas",
  "Sistema 100% na nuvem – acesse de qualquer lugar",
];

const FeaturesList = ({ extras }: { extras?: string[] }) => (
  <ul className="grid md:grid-cols-2 gap-3 my-6">
    {[...featuresListCommon, ...(extras || [])].map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-muted-foreground">
        <span className="text-primary mt-1 shrink-0">✓</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const seoContent: Record<string, { heading: string; content: React.ReactNode }> = {
  "erp-cartonagem": {
    heading: "ERP para Cartonagem — O Sistema Mais Completo do Brasil",
    content: (
      <>
        <p>O <strong>ERP para cartonagem</strong> da BC3 Tecnologia é a solução mais completa e especializada do mercado brasileiro para indústrias de caixas de papelão ondulado e embalagens de cartonagem. Desenvolvido por quem entende as necessidades específicas do setor, o <strong>sistema ERP KRP</strong> oferece módulos totalmente integrados que cobrem toda a cadeia produtiva — do orçamento à expedição.</p>
        <p>Diferente de sistemas ERP genéricos, nosso <strong>software para cartonagem</strong> já vem configurado com as particularidades do segmento: cálculo de custo de caixas considerando composição de chapas (onda simples, dupla, tripla), gramatura do papel, área da chapa, tipo de impressão (flexografia), acabamentos (corte e vinco, colagem, grampeamento) e todos os custos diretos e indiretos da produção.</p>
        <h3>Por que escolher o ERP KRP para sua cartonagem?</h3>
        <FeaturesList extras={[
          "Cálculo de chapa ideal com otimização de corte",
          "Controle de refugo e reaproveitamento de material",
          "Gestão de ferramentas (clichês, facas) vinculada aos produtos",
        ]} />
        <h3>Atendimento em Todo o Brasil</h3>
        <p>{regionContent}</p>
        <p>Mais de <strong>25 indústrias de cartonagem</strong> já confiam no ERP KRP para gerenciar suas operações. Nosso time de especialistas oferece implantação assistida, treinamento completo e suporte técnico contínuo para garantir o sucesso do seu projeto.</p>
      </>
    ),
  },
  "sistema-cartonagem": {
    heading: "Sistema para Cartonagem — Gestão Industrial Completa",
    content: (
      <>
        <p>Procurando um <strong>sistema para cartonagem</strong> que realmente entenda as necessidades da sua indústria? O KRP da BC3 Tecnologia é um <strong>sistema de gestão industrial</strong> desenvolvido exclusivamente para o setor de cartonagem e papelão ondulado, com funcionalidades que sistemas genéricos simplesmente não oferecem.</p>
        <p>Nosso <strong>sistema para cartonagem</strong> integra todos os departamentos da sua fábrica: comercial, compras, produção, PCP, financeiro, fiscal, expedição e logística. Tudo em uma única plataforma na nuvem, sem necessidade de servidores locais ou instalações complicadas.</p>
        <h3>Funcionalidades do Sistema para Cartonagem KRP</h3>
        <FeaturesList extras={[
          "Programação de máquinas onduladeiras, impressoras e acabamento",
          "Controle de paradas e manutenção preventiva de equipamentos",
        ]} />
        <h3>Cobertura Nacional</h3>
        <p>{regionContent}</p>
        <p>O <strong>melhor sistema para cartonagem</strong> é aquele que se adapta à realidade da sua fábrica. Por isso, o KRP oferece configurações personalizáveis para cada cliente, respeitando os processos e fluxos de trabalho já existentes na sua indústria.</p>
      </>
    ),
  },
  "software-cartonagem": {
    heading: "Software para Cartonagem — Automação e Eficiência Industrial",
    content: (
      <>
        <p>O <strong>software para cartonagem</strong> KRP é referência em automação industrial para fábricas de caixas de papelão ondulado em todo o Brasil. Desenvolvido pela BC3 Tecnologia com mais de uma década de experiência no setor, nosso software oferece controle total da sua operação — do primeiro contato comercial até a entrega final ao cliente.</p>
        <p>Com o <strong>melhor software para cartonagem</strong> do mercado, sua indústria ganha agilidade na geração de orçamentos, precisão no cálculo de custos, eficiência na programação de produção e controle absoluto das finanças e obrigações fiscais.</p>
        <h3>Diferenciais do Software KRP</h3>
        <FeaturesList extras={[
          "Geração automática de orçamentos com cálculo de preço",
          "Aprovação de arte e prova de impressão integrada ao fluxo",
          "Controle de qualidade com checklist por etapa de produção",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-papelao-ondulado": {
    heading: "Sistema para Papelão Ondulado — Controle Total da Produção",
    content: (
      <>
        <p>O <strong>sistema para papelão ondulado</strong> da BC3 Tecnologia foi projetado para atender todas as demandas específicas de indústrias que fabricam chapas e caixas de papelão ondulado. Seja sua fábrica uma onduladeira integrada ou uma cartonagem que compra chapas de terceiros, o <strong>ERP KRP</strong> se adapta perfeitamente ao seu modelo de negócio.</p>
        <p>Nosso <strong>sistema para papelão ondulado</strong> oferece funcionalidades exclusivas como controle de composição de chapas (tipo de onda, gramatura, adesivo), cálculo de área útil, gestão de bobinas, planejamento de corte longitudinal e transversal, e rastreabilidade completa de matéria-prima.</p>
        <h3>Recursos Especializados para Papelão Ondulado</h3>
        <FeaturesList extras={[
          "Gestão de bobinas e controle de consumo por pedido",
          "Composição de chapas com cálculo automático de gramatura",
          "Planejamento de corte otimizado para redução de desperdício",
          "Controle de colagem e grampeamento por ordem de produção",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-industria-papelao": {
    heading: "ERP para Indústria de Papelão — Gestão Completa e Integrada",
    content: (
      <>
        <p>O <strong>ERP para indústria de papelão</strong> KRP é a escolha inteligente para fabricantes de papelão ondulado que buscam um sistema completo e integrado. Com o <strong>melhor ERP para indústria de papelão</strong> do mercado brasileiro, sua fábrica terá controle total sobre produção, vendas, compras, estoque, financeiro e obrigações fiscais.</p>
        <p>Diferente de ERPs genéricos que precisam de customizações caras e demoradas, o KRP já nasce pronto para a <strong>indústria de papelão ondulado</strong>, com cálculos de custo, composição de chapas, gestão de produção e emissão fiscal configurados para as necessidades do setor.</p>
        <h3>Módulos do ERP para Indústria de Papelão</h3>
        <FeaturesList />
        <h3>Presente em Todo o Brasil</h3>
        <p>{regionContent}</p>
        <p>Nosso <strong>ERP para indústria de papelão</strong> já é utilizado por mais de 25 fábricas em diversos estados do Brasil, desde pequenas cartonagens até grandes operações industriais. Cada implantação é acompanhada por consultores especializados no setor de embalagens.</p>
      </>
    ),
  },
  "software-industria-embalagens": {
    heading: "Software para Indústria de Embalagens — ERP Especializado",
    content: (
      <>
        <p>A BC3 Tecnologia oferece o <strong>software para indústria de embalagens</strong> mais completo do Brasil. O ERP KRP é ideal para fabricantes de embalagens de papelão ondulado, caixas de papelão, displays, embalagens industriais e embalagens para e-commerce.</p>
        <p>Nosso <strong>software para indústria de embalagens</strong> automatiza processos críticos como cálculo de custo por embalagem, programação de produção, controle de matéria-prima, gestão de pedidos e emissão de documentos fiscais. Tudo integrado em uma plataforma na nuvem acessível de qualquer dispositivo.</p>
        <h3>Para Todos os Tipos de Embalagens</h3>
        <p>O KRP atende fabricantes de diversos tipos de embalagens de papelão ondulado: caixas RSC (Regular Slotted Container), caixas telescópicas, caixas com tampa, displays de ponto de venda, embalagens para pizza, caixas para frutas, embalagens para eletrodomésticos, embalagens para autopeças e muito mais.</p>
        <FeaturesList extras={[
          "Biblioteca de modelos FEFCO/ESBO integrada",
          "Cálculo automático por tipo de caixa (RSC, meia-caixa, wrap-around)",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-gestao-cartonagem": {
    heading: "Sistema de Gestão para Cartonagem — Organize sua Indústria",
    content: (
      <>
        <p>Implemente o <strong>sistema de gestão para cartonagem</strong> KRP e transforme a forma como sua indústria opera. Com módulos integrados que cobrem desde o orçamento até a expedição, o KRP elimina planilhas, retrabalho e informações desencontradas entre departamentos.</p>
        <p>Um bom <strong>sistema de gestão para cartonagem</strong> precisa entender que cada caixa é única — com dimensões, composição de chapa, impressão e acabamento específicos. O KRP foi construído com essa premissa, oferecendo cálculos precisos e gestão detalhada de cada produto fabricado.</p>
        <FeaturesList />
        <p>{regionContent}</p>
        <p>Mais de <strong>25 indústrias de cartonagem</strong> em todo o Brasil já utilizam o sistema de gestão KRP para otimizar suas operações e aumentar a lucratividade.</p>
      </>
    ),
  },
  "sistema-erp-cartonagem": {
    heading: "Sistema ERP para Cartonagem — Solução Integrada e Completa",
    content: (
      <>
        <p>O <strong>sistema ERP para cartonagem</strong> KRP reúne todos os módulos necessários para a gestão completa da sua indústria de caixas de papelão ondulado. Comercial, compras, produção, PCP, financeiro, fiscal, expedição — tudo integrado em um único sistema na nuvem.</p>
        <p>Escolher o <strong>sistema ERP certo para sua cartonagem</strong> é uma decisão estratégica. O KRP da BC3 Tecnologia é a única solução do mercado 100% focada no setor de cartonagem e papelão ondulado, garantindo que cada funcionalidade foi pensada para resolver problemas reais da sua fábrica.</p>
        <h3>Integração Total entre Departamentos</h3>
        <p>Com o <strong>sistema ERP para cartonagem</strong> KRP, o pedido de venda gera automaticamente a ordem de produção, que alimenta o planejamento de compras, que atualiza o financeiro, que gera as obrigações fiscais. Zero digitação manual, zero erro humano.</p>
        <FeaturesList />
        <p>{regionContent}</p>
      </>
    ),
  },
  "programa-cartonagem": {
    heading: "Programa para Cartonagem — Controle de Produção e Custos",
    content: (
      <>
        <p>O <strong>programa para cartonagem</strong> KRP é a ferramenta ideal para indústrias que precisam de controle preciso de produção e custos. Desenvolvido pela BC3 Tecnologia, o programa oferece cálculo automático de custo de caixas, considerando todos os fatores que impactam o preço final: matéria-prima, composição da chapa, impressão, acabamento, mão de obra e custos indiretos.</p>
        <p>Nosso <strong>programa para cartonagem</strong> é utilizado por fábricas de todos os portes — desde pequenas cartonagens com uma única impressora até grandes operações com múltiplas linhas de produção. O sistema se adapta à sua realidade.</p>
        <FeaturesList extras={[
          "Cálculo de mark-up e margem de contribuição por produto",
          "Simulação de cenários de preço para negociação comercial",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-pcp-cartonagem": {
    heading: "Sistema PCP para Cartonagem — Planejamento e Controle de Produção",
    content: (
      <>
        <p>O <strong>sistema PCP para cartonagem</strong> do ERP KRP é o módulo mais poderoso do mercado para planejamento e controle de produção em indústrias de papelão ondulado. Programe suas máquinas (onduladeira, impressora, cortadeira, coladeira), controle ordens de produção, monitore tempos de setup e produção, e acompanhe a eficiência de cada equipamento em tempo real.</p>
        <p>Com o <strong>melhor sistema PCP para cartonagem</strong>, você elimina gargalos de produção, reduz tempos de setup, otimiza a sequência de produção por tipo de chapa e cor de impressão, e garante que os prazos de entrega sejam cumpridos.</p>
        <h3>Funcionalidades do PCP</h3>
        <FeaturesList extras={[
          "Sequenciamento automático de produção por máquina",
          "Controle de OEE (Overall Equipment Effectiveness)",
          "Apontamento de produção por tablet no chão de fábrica",
          "Gestão de setup e troca de ferramentas (clichês e facas)",
          "Kanban digital para acompanhamento visual da produção",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "software-fabricante-caixa-papelao": {
    heading: "Software para Fabricante de Caixa de Papelão — Solução Completa",
    content: (
      <>
        <p>Se você é <strong>fabricante de caixa de papelão</strong> e busca um software que realmente entenda o seu negócio, o ERP KRP da BC3 Tecnologia é a solução ideal. Nosso <strong>software para fabricante de caixa de papelão</strong> oferece desde o cálculo preciso de custo até a emissão de nota fiscal, passando por gestão de produção, controle de estoque e financeiro.</p>
        <p>O KRP é usado por <strong>fabricantes de caixas de papelão ondulado</strong> de todos os portes em todo o Brasil. Fábricas que produzem caixas RSC, caixas com impressão flexográfica, caixas troqueladas, embalagens para e-commerce, caixas para alimentos, embalagens para cosméticos e muitos outros segmentos.</p>
        <FeaturesList extras={[
          "Cadastro completo de produtos com ficha técnica detalhada",
          "Histórico de preços e condições comerciais por cliente",
          "Controle de amostras e protótipos",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-controle-cartonagem": {
    heading: "Sistema de Controle para Cartonagem — Monitoramento em Tempo Real",
    content: (
      <>
        <p>O <strong>sistema de controle para cartonagem</strong> KRP oferece monitoramento em tempo real de todos os aspectos da sua indústria de papelão ondulado. Dashboards intuitivos, relatórios gerenciais, indicadores de desempenho (KPIs) e alertas automáticos mantêm você sempre informado sobre a saúde do seu negócio.</p>
        <p>Com nosso <strong>sistema de controle para cartonagem</strong>, você acompanha faturamento, produção, estoque, inadimplência, custos de produção, margem de lucro por produto, eficiência das máquinas e muito mais — tudo em uma tela, atualizado em tempo real.</p>
        <FeaturesList extras={[
          "Dashboards customizáveis com gráficos e indicadores",
          "Alertas automáticos para estoque mínimo e vencimentos",
          "Relatórios comparativos período a período",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-nuvem": {
    heading: "ERP para Cartonagem na Nuvem — Acesse de Qualquer Lugar",
    content: (
      <>
        <p>O <strong>ERP para cartonagem na nuvem</strong> KRP elimina a necessidade de servidores locais, backup manual e equipe de TI dedicada. Com nosso sistema 100% online, você acessa todos os módulos — comercial, produção, financeiro, fiscal — de qualquer computador, tablet ou smartphone com internet.</p>
        <p>Vantagens do <strong>ERP na nuvem para cartonagem</strong>: atualizações automáticas, backup diário, segurança de dados em servidores de alta disponibilidade, escalabilidade sob demanda e custo previsível com mensalidade fixa. Sem surpresas, sem investimento em infraestrutura.</p>
        <h3>Por que Migrar para a Nuvem?</h3>
        <FeaturesList extras={[
          "Sem necessidade de servidores locais ou infraestrutura de TI",
          "Atualizações automáticas sem parada de produção",
          "Backup automático diário com redundância geográfica",
          "Acesso remoto seguro para gestores e equipe externa",
          "Redução de custos com TI em até 60%",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-calculo-cartonagem": {
    heading: "Sistema de Cálculo para Cartonagem — Precisão no Custo de Caixas",
    content: (
      <>
        <p>O <strong>sistema de cálculo para cartonagem</strong> do ERP KRP é o mais preciso do mercado. Calcule o custo real de cada caixa de papelão ondulado considerando todos os fatores: composição da chapa (papel miolo, capa interna, capa externa), gramatura, tipo de onda (B, C, BC, E), área da chapa, impressão flexográfica (número de cores, cobertura), acabamento (corte e vinco, colagem, grampeamento), mão de obra direta e custos indiretos de fabricação.</p>
        <p>Com nosso <strong>sistema de cálculo para cartonagem</strong>, você gera orçamentos precisos em segundos, garante margem de lucro adequada e oferece preços competitivos aos seus clientes.</p>
        <h3>Variáveis Consideradas no Cálculo</h3>
        <ul className="grid md:grid-cols-2 gap-2 my-4 text-muted-foreground">
          {[
            "Composição e gramatura da chapa",
            "Tipo de onda (B, C, BC, E, F)",
            "Dimensões internas e externas da caixa",
            "Área útil e área total da chapa",
            "Número de cores e cobertura de impressão",
            "Tipo de acabamento e colagem",
            "Custo da matéria-prima atualizado",
            "Mão de obra direta por operação",
            "Custos indiretos de fabricação (CIF)",
            "Despesas comerciais e administrativas",
            "Impostos (ICMS, IPI, PIS, COFINS)",
            "Mark-up e margem de contribuição",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-primary">•</span>{item}</li>
          ))}
        </ul>
        <p>{regionContent}</p>
      </>
    ),
  },
  "software-papelao-ondulado": {
    heading: "Software para Papelão Ondulado — Gestão de Produção Completa",
    content: (
      <>
        <p>O <strong>software para papelão ondulado</strong> KRP é a solução definitiva para indústrias que produzem chapas e caixas de papelão ondulado. Gerencie toda a cadeia produtiva — desde o recebimento de bobinas até a expedição do produto acabado — com um único software integrado e na nuvem.</p>
        <p>Nosso <strong>software para papelão ondulado</strong> atende tanto onduladoras integradas (que fabricam a própria chapa) quanto cartonagens que compram chapas de terceiros. O sistema se adapta ao seu modelo de negócio com configurações flexíveis e personalizáveis.</p>
        <FeaturesList extras={[
          "Controle de recebimento e qualidade de bobinas",
          "Gestão de estoque de chapas por composição e tamanho",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-industria-papelao-ondulado": {
    heading: "Sistema para Indústria de Papelão Ondulado — ERP Especializado",
    content: (
      <>
        <p>O <strong>sistema para indústria de papelão ondulado</strong> KRP foi desenvolvido com o DNA do setor. Cada funcionalidade, cada tela, cada relatório foi pensado para resolver problemas reais de fábricas de papelão ondulado e caixas de cartonagem.</p>
        <p>Ao implementar nosso <strong>sistema para indústria de papelão ondulado</strong>, sua fábrica ganha produtividade, reduz desperdícios, melhora o controle de custos e otimiza o atendimento aos clientes. Resultados comprovados por mais de 25 indústrias em todo o Brasil.</p>
        <FeaturesList />
        <h3>Cases de Sucesso</h3>
        <p>Indústrias de papelão ondulado de Minas Gerais, São Paulo, Paraná, Santa Catarina, Rio Grande do Sul, Goiás, Bahia e diversos outros estados já utilizam o ERP KRP e comprovam: investir em um <strong>sistema especializado para papelão ondulado</strong> é o melhor caminho para o crescimento sustentável.</p>
        <p>{regionContent}</p>
      </>
    ),
  },
  "gestao-industrial-cartonagem": {
    heading: "Gestão Industrial para Cartonagem — ERP Especializado KRP",
    content: (
      <>
        <p>A <strong>gestão industrial para cartonagem</strong> exige ferramentas específicas que entendam a complexidade da fabricação de caixas de papelão ondulado. O ERP KRP da BC3 Tecnologia oferece uma solução completa de <strong>gestão industrial para cartonagem</strong>, abrangendo planejamento de produção, controle de qualidade, gestão de manutenção, controle de custos e indicadores de performance.</p>
        <p>Com o KRP, você tem visibilidade total sobre sua operação industrial: sabe exatamente quanto custa cada produto, qual a eficiência de cada máquina, onde estão os gargalos e como otimizar processos para aumentar a produtividade e a lucratividade.</p>
        <FeaturesList extras={[
          "Indicadores de eficiência OEE por máquina e turno",
          "Gestão de manutenção preventiva e corretiva",
          "Controle de qualidade com laudos e certificados",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-caixa-papelao": {
    heading: "Sistema para Caixa de Papelão — Controle Industrial Completo",
    content: (
      <>
        <p>O <strong>sistema para caixa de papelão</strong> KRP é a ferramenta ideal para indústrias que fabricam caixas de papelão ondulado de todos os tipos: caixas RSC, caixas com impressão, caixas troqueladas, caixas especiais, displays e embalagens personalizadas.</p>
        <p>Com nosso <strong>sistema para caixa de papelão</strong>, cada produto é cadastrado com ficha técnica completa: dimensões, composição da chapa, tipo de impressão, número de cores, acabamento, peso e volume. O cálculo de custo é automático e atualizado em tempo real conforme variam os preços de matéria-prima.</p>
        <FeaturesList />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-industria-grafica": {
    heading: "ERP para Indústria Gráfica — Sistema de Gestão Completo",
    content: (
      <>
        <p>O <strong>ERP para indústria gráfica</strong> KRP da BC3 Tecnologia atende fábricas que trabalham com impressão flexográfica em papelão ondulado e embalagens. Se sua indústria gráfica produz embalagens de papelão, caixas impressas, displays de ponto de venda ou materiais promocionais em cartonagem, o KRP é a solução perfeita.</p>
        <p>Nosso <strong>ERP para indústria gráfica</strong> oferece controle de arte-final, aprovação de provas de impressão, gestão de clichês e matrizes, controle de cores (Pantone/CMYK) e rastreabilidade completa do processo gráfico vinculado à produção de embalagens.</p>
        <FeaturesList extras={[
          "Gestão de arte-final e aprovação de provas digitais",
          "Controle de clichês e matrizes com vida útil",
          "Cadastro de cores Pantone e receitas de tinta",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "software-industria-caixa-papelao": {
    heading: "Software para Indústria de Caixa de Papelão — Gestão Integrada",
    content: (
      <>
        <p>O <strong>software para indústria de caixa de papelão</strong> KRP oferece gestão integrada de todos os processos fabris. Da entrada do pedido à saída da mercadoria, cada etapa é controlada, rastreada e documentada pelo sistema.</p>
        <p>Fabricantes de <strong>caixas de papelão ondulado</strong> de todo o Brasil escolhem o KRP pela sua especialização no setor, facilidade de uso, suporte técnico dedicado e excelente custo-benefício. Nosso software cresce com a sua empresa, adaptando-se a novas demandas e volumes de produção.</p>
        <FeaturesList />
        <p>{regionContent}</p>
      </>
    ),
  },
  "calculo-custo-caixa-papelao-ondulado": {
    heading: "Cálculo de Custo de Caixa de Papelão Ondulado — Precisão Total",
    content: (
      <>
        <p>O <strong>cálculo de custo de caixa de papelão ondulado</strong> é uma das funcionalidades mais importantes para indústrias de cartonagem. O ERP KRP da BC3 Tecnologia oferece o motor de cálculo mais preciso e completo do mercado, considerando absolutamente todas as variáveis que compõem o custo de uma caixa de papelão ondulado.</p>
        <p>Com nosso sistema de <strong>cálculo de custo de caixa de papelão ondulado</strong>, você sabe exatamente quanto custa cada produto, qual sua margem real de lucro e pode tomar decisões comerciais baseadas em dados concretos — não em estimativas.</p>
        <h3>Como Funciona o Cálculo</h3>
        <p>O sistema considera: custo do papel (miolo, capa interna, capa externa) por gramatura e fornecedor, consumo de adesivo (amido), energia elétrica, mão de obra direta por operação (ondulação, impressão, corte, acabamento), depreciação de máquinas, custos fixos rateados, impostos (ICMS, IPI, PIS, COFINS) e margem de contribuição desejada.</p>
        <FeaturesList extras={[
          "Atualização automática de custos com variação de matéria-prima",
          "Simulação de cenários para negociação de preços",
          "Comparativo de custo real vs. custo orçado",
        ]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "empresa-software-cartonagem": {
    heading: "BC3 Tecnologia — Empresa de Software para Cartonagem",
    content: (
      <>
        <p>A <strong>BC3 Tecnologia</strong> é a principal <strong>empresa de software para cartonagem</strong> do Brasil. Especializada exclusivamente no setor de papelão ondulado e embalagens de cartonagem, desenvolvemos o ERP KRP — o sistema mais completo e especializado do mercado para indústrias de caixas de papelão.</p>
        <p>Como <strong>empresa de software para cartonagem</strong>, nossa missão é oferecer tecnologia de ponta que transforma a gestão industrial dos nossos clientes. Mais de 25 indústrias de cartonagem em todo o Brasil confiam na BC3 Tecnologia para gerenciar suas operações.</p>
        <h3>Por que a BC3 Tecnologia?</h3>
        <ul className="space-y-2 my-4 text-muted-foreground">
          {[
            "Mais de 10 anos de experiência no setor de cartonagem",
            "Mais de 25 clientes ativos em todo o Brasil",
            "Sistema 100% na nuvem com atualizações contínuas",
            "Equipe de consultores especializados em cartonagem",
            "Implantação assistida com treinamento completo",
            "Suporte técnico dedicado e responsivo",
            "Desenvolvimento contínuo com feedback dos clientes",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-primary">★</span>{item}</li>
          ))}
        </ul>
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-gerenciamento-cartonagem": {
    heading: "Sistema de Gerenciamento para Cartonagem — Controle Total",
    content: (
      <>
        <p>O <strong>sistema de gerenciamento para cartonagem</strong> KRP oferece controle total sobre todas as operações da sua indústria de papelão ondulado. Gerencie vendas, produção, compras, estoque, financeiro, fiscal e expedição em uma única plataforma integrada e intuitiva.</p>
        <p>Com o <strong>melhor sistema de gerenciamento para cartonagem</strong> do mercado, sua equipe trabalha de forma integrada, eliminando retrabalho, reduzindo erros e aumentando a produtividade em todos os departamentos.</p>
        <FeaturesList extras={[
          "Portal do cliente para acompanhamento de pedidos",
          "Integração com transportadoras e rastreamento de entregas",
          "Controle de devoluções e reclamações de clientes",
        ]} />
        <p>{regionContent}</p>
        <p>Invista no <strong>sistema de gerenciamento para cartonagem</strong> que mais cresce no Brasil. O ERP KRP da BC3 Tecnologia é a escolha certa para indústrias que buscam eficiência, controle e crescimento sustentável.</p>
      </>
    ),
  },
  "erp-embalagens-papelao": {
    heading: "ERP para Embalagens de Papelão — Sistema Completo para Fabricantes",
    content: (
      <>
        <p>O <strong>ERP para embalagens de papelão</strong> KRP da BC3 Tecnologia é a solução definitiva para fabricantes de embalagens de papelão ondulado que buscam eficiência, controle e competitividade. Nosso sistema cobre todo o ciclo produtivo — do recebimento do pedido até a entrega da embalagem pronta — com módulos integrados de comercial, compras, produção, PCP, financeiro, fiscal e expedição.</p>
        <p>Se sua empresa fabrica <strong>embalagens de papelão ondulado</strong>, caixas RSC, caixas troqueladas, displays, bandejas, divisórias ou qualquer tipo de embalagem em cartonagem, o ERP KRP foi feito sob medida para o seu negócio.</p>
        <FeaturesList extras={["Cadastro de embalagens com ficha técnica completa (FEFCO/ESBO)", "Simulação de preço para diferentes volumes e composições"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-producao-cartonagem": {
    heading: "Sistema de Produção para Cartonagem — Controle do Chão de Fábrica",
    content: (
      <>
        <p>O <strong>sistema de produção para cartonagem</strong> KRP oferece controle total do chão de fábrica. Desde a abertura da ordem de produção até o apontamento final, cada etapa é monitorada em tempo real: ondulação, impressão flexográfica, corte e vinco, colagem, grampeamento, amarração e paletização.</p>
        <p>Com nosso <strong>sistema de produção para cartonagem</strong>, você monitora a eficiência de cada máquina (OEE), controla tempos de setup, identifica gargalos, reduz refugo e garante que os prazos de entrega sejam cumpridos.</p>
        <FeaturesList extras={["Apontamento de produção em tempo real via tablet", "Controle de paradas programadas e não programadas", "Rastreabilidade completa de matéria-prima por lote"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "software-gestao-embalagens": {
    heading: "Software de Gestão para Embalagens — ERP Industrial Especializado",
    content: (
      <>
        <p>O <strong>software de gestão para embalagens</strong> KRP é ideal para indústrias que fabricam embalagens de papelão ondulado, caixas de papelão, displays de ponto de venda, embalagens para e-commerce e embalagens industriais. Nosso software integra todos os processos em uma única plataforma na nuvem.</p>
        <p>Com o <strong>melhor software de gestão para embalagens</strong> do mercado brasileiro, sua indústria automatiza orçamentos, otimiza a produção, controla custos com precisão e cumpre todas as obrigações fiscais sem complicação.</p>
        <FeaturesList extras={["Gestão de portfólio de embalagens por cliente e segmento", "Integração com e-commerce para pedidos personalizados"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-fabrica-caixas": {
    heading: "ERP para Fábrica de Caixas — Gestão Completa da Produção",
    content: (
      <>
        <p>O <strong>ERP para fábrica de caixas</strong> KRP da BC3 Tecnologia é o sistema mais completo para quem fabrica caixas de papelão ondulado. Se você tem uma <strong>fábrica de caixas</strong> e precisa de um ERP que entenda cálculo de chapa, composição de papelão, impressão flexográfica e controle de custos — o KRP é a solução.</p>
        <p>Nosso <strong>ERP para fábrica de caixas</strong> é utilizado por empresas de todos os portes em todo o Brasil. O sistema cresce com o seu negócio e se adapta às suas necessidades.</p>
        <FeaturesList extras={["Configuração flexível para fábricas de todos os portes", "Módulo de expedição com controle de carregamento"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-orcamento-cartonagem": {
    heading: "Sistema de Orçamento para Cartonagem — Propostas em Segundos",
    content: (
      <>
        <p>O <strong>sistema de orçamento para cartonagem</strong> do ERP KRP permite gerar propostas comerciais completas em segundos. Informe dimensões, composição da chapa, tipo de impressão e acabamento, e o sistema calcula automaticamente o custo e gera o orçamento pronto para enviar ao cliente.</p>
        <p>Com nosso <strong>sistema de orçamento para cartonagem</strong>, sua equipe comercial ganha agilidade e precisão. O KRP considera matéria-prima, mão de obra, energia, depreciação e impostos para garantir a margem correta.</p>
        <FeaturesList extras={["Geração de orçamento com cálculo automático em segundos", "Histórico de orçamentos e negociações por cliente", "Simulação de cenários com diferentes composições e volumes"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "software-nfe-cartonagem": {
    heading: "Software NF-e para Cartonagem — Emissão Fiscal Integrada ao ERP",
    content: (
      <>
        <p>O <strong>software NF-e para cartonagem</strong> do ERP KRP integra a emissão de documentos fiscais eletrônicos diretamente ao fluxo de vendas e produção. Emita NF-e, NFS-e, CT-e e MDF-e sem sair do sistema, com validação automática, cálculo de impostos (ICMS, IPI, PIS, COFINS) e transmissão à SEFAZ em tempo real.</p>
        <p>Além da emissão fiscal, nosso <strong>software para cartonagem</strong> gera automaticamente o SPED Fiscal, SPED Contribuições e EFD-REINF, garantindo conformidade com a legislação tributária de todos os estados.</p>
        <FeaturesList extras={["Emissão de NF-e integrada ao pedido de venda", "SPED Fiscal e Contribuições gerados automaticamente", "Manifesto de Documentos Fiscais (MDF-e) integrado"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-sao-paulo": {
    heading: "ERP para Cartonagem em São Paulo — Atendimento Especializado em SP",
    content: (
      <>
        <p>A BC3 Tecnologia oferece o <strong>melhor ERP para cartonagem em São Paulo</strong>. Atendemos indústrias em todas as regiões: capital, Grande São Paulo, Campinas, Sorocaba, Jundiaí, Ribeirão Preto, São José do Rio Preto, Bauru, Piracicaba, Santos, São José dos Campos, Guarulhos, Osasco, Santo André, São Bernardo do Campo e todo o interior paulista.</p>
        <p>São Paulo concentra o maior número de <strong>indústrias de cartonagem</strong> do Brasil. O ERP KRP já atende diversas fábricas paulistas que comprovam: investir em um sistema especializado é o caminho para aumentar produtividade e reduzir custos.</p>
        <FeaturesList extras={["Atendimento presencial e remoto para indústrias de SP", "Implantação acelerada com consultores especializados"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-minas-gerais": {
    heading: "ERP para Cartonagem em Minas Gerais — Sistema Especializado em MG",
    content: (
      <>
        <p>O <strong>ERP para cartonagem em Minas Gerais</strong> da BC3 Tecnologia é referência no estado. Sediados em MG, conhecemos profundamente o mercado mineiro. Atendemos Belo Horizonte, Contagem, Betim, Uberlândia, Juiz de Fora, Montes Claros, Uberaba, Governador Valadares, Ipatinga, Sete Lagoas, Divinópolis e todo o estado.</p>
        <p>A BC3 Tecnologia tem orgulho de ser a empresa de software que mais atende <strong>indústrias de cartonagem em MG</strong>. Nosso ERP KRP foi desenvolvido com feedback direto de fábricas mineiras.</p>
        <FeaturesList extras={["Sede em MG com atendimento presencial em todo o estado", "Conformidade total com a legislação fiscal de Minas Gerais"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-parana": {
    heading: "ERP para Cartonagem no Paraná — Sistema para Fábricas do PR",
    content: (
      <>
        <p>O <strong>ERP para cartonagem no Paraná</strong> KRP atende fábricas em Curitiba, Londrina, Maringá, Ponta Grossa, Cascavel, São José dos Pinhais, Foz do Iguaçu, Colombo, Guarapuava, Paranaguá, Araucária, Toledo, Apucarana e demais cidades paranaenses.</p>
        <p>Fábricas paranaenses que utilizam o ERP KRP relatam aumento de produtividade, redução de desperdício e melhoria no controle financeiro. Sistema 100% na nuvem sem necessidade de infraestrutura local.</p>
        <FeaturesList />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-santa-catarina": {
    heading: "ERP para Cartonagem em Santa Catarina — Software para SC",
    content: (
      <>
        <p>O <strong>ERP para cartonagem em Santa Catarina</strong> KRP atende fábricas em Joinville, Blumenau, Florianópolis, Chapecó, Itajaí, Criciúma, Jaraguá do Sul, Lages, Balneário Camboriú, Brusque e todo o estado catarinense.</p>
        <p>Indústrias catarinenses de <strong>papelão ondulado</strong> confiam no ERP KRP para gerenciar produção, vendas, compras, financeiro e fiscal. Sistema na nuvem com conformidade fiscal para SC.</p>
        <FeaturesList />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-rio-grande-do-sul": {
    heading: "ERP para Cartonagem no Rio Grande do Sul — Sistema para RS",
    content: (
      <>
        <p>O <strong>ERP para cartonagem no Rio Grande do Sul</strong> KRP atende Porto Alegre, Caxias do Sul, Canoas, Pelotas, Santa Maria, Gravataí, Novo Hamburgo, São Leopoldo, Rio Grande, Passo Fundo e todo o RS.</p>
        <p>O ERP KRP ajuda fábricas gaúchas a competir com eficiência, oferecendo controle preciso de custos, programação inteligente de produção e gestão fiscal completa.</p>
        <FeaturesList />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-goias": {
    heading: "ERP para Cartonagem em Goiás — Sistema para GO",
    content: (
      <>
        <p>O <strong>ERP para cartonagem em Goiás</strong> KRP atende Goiânia, Aparecida de Goiânia, Anápolis, Rio Verde, Luziânia, Valparaíso, Trindade, Formosa, Itumbiara, Catalão e todas as cidades goianas. Goiás é um mercado em forte expansão para <strong>embalagens de papelão ondulado</strong>.</p>
        <p>Fábricas goianas escolhem o ERP KRP pela facilidade de uso, suporte técnico dedicado e custo-benefício imbatível. Sistema na nuvem com todas as exigências fiscais do estado.</p>
        <FeaturesList />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-rio-de-janeiro": {
    heading: "ERP para Cartonagem no Rio de Janeiro — Sistema para RJ",
    content: (
      <>
        <p>O <strong>ERP para cartonagem no Rio de Janeiro</strong> KRP atende Rio de Janeiro capital, Niterói, São Gonçalo, Duque de Caxias, Nova Iguaçu, Campos dos Goytacazes, Petrópolis, Volta Redonda, Macaé e todo o estado.</p>
        <p>Com o ERP KRP, fábricas cariocas e fluminenses ganham vantagem competitiva através de cálculos precisos de custo, gestão eficiente de produção e controle financeiro rigoroso.</p>
        <FeaturesList />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-bahia": {
    heading: "ERP para Cartonagem na Bahia — Sistema para BA",
    content: (
      <>
        <p>O <strong>ERP para cartonagem na Bahia</strong> KRP atende Salvador, Feira de Santana, Vitória da Conquista, Camaçari, Itabuna, Juazeiro, Lauro de Freitas, Ilhéus, Jequié e todo o estado. A Bahia é o principal polo de <strong>cartonagem do Nordeste</strong>.</p>
        <p>Fábricas baianas comprovam os benefícios do ERP KRP: redução de custos, aumento de produtividade e melhoria no atendimento ao cliente.</p>
        <FeaturesList />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-nordeste": {
    heading: "ERP para Cartonagem no Nordeste — Sistema para Todo o NE",
    content: (
      <>
        <p>O <strong>ERP para cartonagem no Nordeste</strong> KRP atende fábricas em todos os estados: Bahia, Pernambuco, Ceará, Maranhão, Paraíba, Rio Grande do Norte, Alagoas, Sergipe e Piauí. Sistema 100% na nuvem acessível de qualquer lugar.</p>
        <p>O Nordeste tem um setor de <strong>cartonagem em franco crescimento</strong>, impulsionado pelo e-commerce e aumento do consumo. Fábricas que investem em tecnologia de gestão ganham competitividade.</p>
        <FeaturesList extras={["Atendimento remoto com suporte em todo o Nordeste", "Sistema adaptado às particularidades fiscais de cada estado"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-flexografia-cartonagem": {
    heading: "Sistema para Flexografia em Cartonagem — Controle de Impressão",
    content: (
      <>
        <p>O <strong>sistema para flexografia em cartonagem</strong> do ERP KRP oferece controle completo do processo de impressão flexográfica em embalagens de papelão ondulado. Gerencie clichês, matrizes, receitas de cores, provas de impressão e aprovação de arte-final — tudo integrado ao ERP.</p>
        <p>A <strong>impressão flexográfica em cartonagem</strong> exige controle rigoroso de qualidade e gestão de ferramentas. O KRP oferece cadastro de cores Pantone, controle de vida útil de clichês e histórico de aprovações.</p>
        <FeaturesList extras={["Gestão de clichês com controle de vida útil", "Cadastro de receitas de cores (Pantone, CMYK)", "Fluxo de aprovação de arte-final e provas digitais"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "software-corte-vinco-cartonagem": {
    heading: "Software para Corte e Vinco em Cartonagem — Gestão de Acabamento",
    content: (
      <>
        <p>O <strong>software para corte e vinco em cartonagem</strong> do ERP KRP oferece controle completo das operações de acabamento em caixas de papelão ondulado. Gerencie facas, matrizes de troquelamento, programação de máquinas cortadeiras e controle de qualidade de acabamento.</p>
        <p>O <strong>corte e vinco</strong> é uma etapa crítica na fabricação de caixas de papelão. Com nosso software, você controla vida útil das facas, programa manutenções preventivas e garante dimensões corretas.</p>
        <FeaturesList extras={["Cadastro de facas e matrizes com controle de vida útil", "Programação de máquinas cortadeiras e vincadeiras", "Controle de qualidade dimensional por lote"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-onduladeira": {
    heading: "ERP para Onduladeira — Sistema para Onduladora de Papelão",
    content: (
      <>
        <p>O <strong>ERP para onduladeira</strong> KRP é a solução completa para indústrias com máquinas onduladoras. Controle de bobinas de papel, produção de chapas onduladas, planejamento de corte longitudinal e transversal, gestão de consumo de adesivo e monitoramento da eficiência da onduladeira.</p>
        <p>Se sua empresa possui uma <strong>onduladeira</strong> e fabrica suas próprias chapas, o ERP KRP oferece programação com otimização de largura, controle de estoque de bobinas e rastreabilidade de lote por chapa produzida.</p>
        <FeaturesList extras={["Programação da onduladeira com otimização de largura", "Controle de bobinas por gramatura, largura e fornecedor", "Gestão de consumo de adesivo por metro quadrado"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-expedicao-cartonagem": {
    heading: "Sistema de Expedição para Cartonagem — Logística Integrada",
    content: (
      <>
        <p>O <strong>sistema de expedição para cartonagem</strong> do ERP KRP integra a logística ao fluxo de produção e vendas. Gere romaneios de embarque, controle carregamentos, emita MDF-e, rastreie entregas e gerencie devoluções dentro do mesmo sistema.</p>
        <p>Com nosso sistema, sua fábrica programa entregas conforme a produção, otimiza rotas, controla ocupação de veículos e garante entregas no prazo. Integração com transportadoras agiliza o processo.</p>
        <FeaturesList extras={["Romaneio de embarque automático por pedido ou rota", "Emissão de MDF-e integrada ao carregamento", "Controle de ocupação de veículos (peso e volume)"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "software-estoque-papelao-ondulado": {
    heading: "Software de Estoque para Papelão Ondulado — Controle de Materiais",
    content: (
      <>
        <p>O <strong>software de estoque para papelão ondulado</strong> do ERP KRP oferece controle completo de matérias-primas, insumos, produtos em processo e acabados. Gerencie bobinas, chapas, clichês, tintas, adesivos, grampos e todos os materiais da fábrica.</p>
        <p>Com nosso software, você sabe exatamente o que tem em estoque, onde está cada material, qual o custo médio e quando precisa comprar. Alertas automáticos garantem que a produção nunca pare por falta de material.</p>
        <FeaturesList extras={["Controle de estoque por lote, localização e validade", "Alertas automáticos de estoque mínimo e ponto de pedido", "Custo médio ponderado atualizado automaticamente"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "erp-cartonagem-pequena-empresa": {
    heading: "ERP para Cartonagem — Pequena Empresa Também Merece o Melhor",
    content: (
      <>
        <p>O <strong>ERP para cartonagem para pequena empresa</strong> KRP é acessível, completo e fácil de usar. Não importa o tamanho da sua fábrica — se você produz caixas de papelão ondulado, o KRP é para você. Planos que cabem no orçamento de pequenas cartonagens com as mesmas funcionalidades das grandes fábricas.</p>
        <p>Pequenas <strong>fábricas de caixas de papelão</strong> enfrentam os mesmos desafios que as grandes. O ERP KRP simplifica a gestão e permite que poucos funcionários controlem toda a operação com eficiência.</p>
        <FeaturesList extras={["Planos acessíveis para pequenas cartonagens", "Interface simplificada para equipes enxutas", "Implantação rápida com treinamento online"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-fiscal-cartonagem": {
    heading: "Sistema Fiscal para Cartonagem — NF-e, SPED, MDF-e Integrados",
    content: (
      <>
        <p>O <strong>sistema fiscal para cartonagem</strong> do ERP KRP é o mais completo do mercado. Emissão de NF-e, NFS-e, CT-e e MDF-e integrada. SPED Fiscal, SPED Contribuições e EFD-REINF automáticos. Cálculo de impostos (ICMS, IPI, PIS, COFINS, IRPJ, CSLL) com tabelas atualizadas por estado.</p>
        <p>Erros na emissão fiscal ou apuração de impostos geram multas pesadas. O ERP KRP elimina esse risco com automação fiscal completa, validações em tempo real e conformidade garantida.</p>
        <FeaturesList extras={["Emissão de NF-e com validação automática de dados", "SPED Fiscal e Contribuições sem trabalho manual", "Configuração fiscal por estado com substituição tributária"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "sistema-vendas-cartonagem": {
    heading: "Sistema de Vendas para Cartonagem — Módulo Comercial Completo",
    content: (
      <>
        <p>O <strong>sistema de vendas para cartonagem</strong> do ERP KRP automatiza todo o ciclo comercial: prospecção, orçamento, negociação, pedido, produção, faturamento e pós-venda. Com integração ao Zoho CRM, sua equipe tem ferramentas poderosas para vender mais.</p>
        <p>O módulo comercial foi desenhado para <strong>vendas na indústria de cartonagem</strong>: orçamentos com cálculo automático de preço por caixa, tabelas de preço por cliente, controle de comissões e análise de rentabilidade por produto.</p>
        <FeaturesList extras={["Orçamentos com cálculo automático de preço por caixa", "Gestão de tabelas de preço por cliente", "Controle de comissões e metas por vendedor", "Integração com Zoho CRM"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
  "software-orcamento-caixa-papelao": {
    heading: "Software de Orçamento para Caixa de Papelão — Cálculo Automático",
    content: (
      <>
        <p>O <strong>software de orçamento para caixa de papelão</strong> do ERP KRP é o mais preciso do mercado. Informe dimensões, tipo de caixa (RSC, meia-caixa, wrap-around, telescópica), composição da chapa, gramatura, impressão e acabamento — e o sistema calcula o preço em segundos.</p>
        <p>Com nosso <strong>software de orçamento para caixa de papelão</strong>, sua equipe comercial ganha agilidade, garante margens adequadas e oferece preços competitivos. O cálculo considera matéria-prima, mão de obra, energia, custos fixos, impostos e margem de contribuição.</p>
        <FeaturesList extras={["Cálculo de preço em segundos para qualquer tipo de caixa", "Atualização automática de custos de matéria-prima", "Simulação de preço para diferentes volumes", "Proposta comercial em PDF com layout profissional"]} />
        <p>{regionContent}</p>
      </>
    ),
  },
};

const SeoContent = ({ slug }: { slug: string }) => {
  const data = seoContent[slug];
  if (!data) return null;

  return (
    <section className="py-16 md:py-24 bg-background" id="seo-content">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          {data.heading}
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:leading-relaxed [&_strong]:text-foreground">
          {data.content}
        </div>
        {ctaBlock}
      </div>
    </section>
  );
};

export default SeoContent;
