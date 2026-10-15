import type { Dictionary } from "./types";

export const pt: Dictionary = {
  meta: {
    title: "Maique Moraes — Engenheiro de Software Full Stack Sênior",
    description:
      "Engenheiro full stack sênior com mais de 6 anos desenvolvendo produtos em TypeScript com React, Next.js, Node.js e NestJS — e integrando LLMs, RAG e MCP a fluxos reais de negócio. Em João Pessoa, Brasil (UTC−3).",
    ogAlt: "Maique Moraes, Engenheiro de Software Full Stack Sênior",
  },
  a11y: {
    skip: "Pular para o conteúdo",
    primaryNav: "Principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    switchLanguage: "Read in English",
    home: "Maique Moraes — início",
    newTab: "abre em uma nova aba",
    themeToLight: "Mudar para o tema claro",
    themeToDark: "Mudar para o tema escuro",
  },
  nav: {
    work: "Trabalhos",
    experience: "Experiência",
    approach: "Abordagem",
    contact: "Contato",
    resume: "Currículo",
  },
  hero: {
    eyebrow: "Engenheiro de Software Full Stack Sênior",
    headline: ["Interfaces claras.", "Serviços confiáveis.", "IA que respeita as regras."],
    intro:
      "Sou Maique Moraes, engenheiro full stack com mais de 6 anos desenvolvendo produtos em TypeScript para compras corporativas, logística, serviços financeiros e saúde. Atuo de ponta a ponta com React, Next.js, Node.js e NestJS — e integro LLMs, recuperação de documentos e ferramentas MCP a fluxos reais de negócio.",
    ctaWork: "Ver trabalhos",
    ctaResume: "Baixar currículo",
    facts: {
      now: { label: "Agora", value: "Desenvolvedor Full Stack Sênior na Stratesys" },
      before: { label: "Antes", value: "Grupo Inlog · Unicred · uFLY" },
      based: { label: "Base", value: "João Pessoa, Brasil" },
    },
    figure: "Fig. 01 — Onde atuo em um produto",
    figureHint: "Escolha uma camada",
    layers: [
      {
        id: "interface",
        name: "Interface",
        stack: "React · Next.js · TypeScript",
        nodes: ["Fluxos", "Componentes", "Estados"],
        body: "Fluxos tipados e componentes reutilizáveis, com estados de carregamento, erro e nova tentativa bem resolvidos.",
      },
      {
        id: "services",
        name: "Serviços",
        stack: "Node.js · NestJS · REST",
        nodes: ["BFF", "Acesso", "APIs"],
        body: "Backends-for-frontend que reúnem dados, validam acesso e falham de forma explícita quando falta uma informação essencial.",
      },
      {
        id: "intelligence",
        name: "Inteligência",
        stack: "LLMs · RAG · MCP",
        nodes: ["Recuperação", "Modelo", "Ferramentas"],
        body: "Recuperação para documentos, ferramentas para dados atuais — com permissões garantidas pelos serviços, não pelo modelo.",
      },
    ],
  },
  proof: {
    label: "Em resumo",
    items: [
      { value: "6+", label: "anos entregando software em produção" },
      { value: "6", label: "setores: compras, logística, finanças, saúde, setor público e telemetria" },
      { value: "2", label: "assistentes de IA integrados a plataformas de negócio" },
      { value: "15+", label: "pessoas mentoradas ou treinadas nos times" },
    ],
  },
  work: {
    label: "Trabalhos selecionados",
    title: "Três problemas e as decisões por trás deles.",
    intro:
      "Trabalhos profissionais apresentados em alto nível. Os diagramas são ilustrações originais das ideias de engenharia — não capturas de tela nem arquitetura interna dos produtos.",
    cta: "Ler o case",
    note: "Nomes de clientes, sistemas internos e detalhes proprietários foram omitidos de propósito.",
  },
  cases: [
    {
      slug: "bid-comparison",
      index: "01",
      company: "Stratesys",
      domain: "Compras corporativas",
      period: "2026 — atual",
      role: "Desenvolvedor Full Stack Sênior",
      title: "Um quadro comparativo em que dá para confiar",
      summary:
        "Um BFF em NestJS que reúne dados de propostas e fornecedores vindos de vários serviços em uma visão confiável — e se recusa a apresentar uma comparação incompleta como válida.",
      stack: ["NestJS", "Next.js", "TypeScript", "Server Actions", "Jest"],
      context:
        "Em compras corporativas, o comprador compara propostas de fornecedores lado a lado antes de decidir a premiação. Os dados dessa tela vêm de serviços diferentes: propostas de um lado, fornecedores de outro, regras do processo e permissões de um terceiro. Uma comparação que perde um fornecedor sem avisar — ou mostra propostas sem o fornecedor correto — não é só um bug. Pode levar a uma decisão comercial errada.",
      contribution: [
        "Desenvolvi o endpoint, o controller e a camada de serviço do BFF em NestJS. Ele valida se o processo de compra existe e se o usuário tem acesso, busca as propostas e seus fornecedores e devolve um contrato pensado para a interface.",
        "Tratei propostas incompletas e diferentes estados de negociação na camada de transformação, para que os componentes React não precisem conhecer o comportamento de cada serviço.",
        "Tratei falhas e timeouts de dependências essenciais como erros controlados, com logs estruturados e correlation IDs para investigação, e um estado de erro claro com opção de tentar novamente na interface.",
        "Implementei os fluxos de confirmação de premiação em React e Next.js, mapeando dados tipados dos formulários para os contratos da API nos cenários simples e com encaminhamento para aprovação, com Server Actions centralizando chamadas e tratamento de erros.",
        "Escrevi testes unitários para as transformações e para erros e timeouts das integrações — incluindo a garantia de que uma comparação inconsistente nunca seja apresentada como válida.",
      ],
      decision: {
        title: "Falhar com clareza em vez de comparar dados parciais.",
        body: "Propostas e fornecedores só fazem sentido juntos. Quando uma dependência essencial falha, o BFF devolve um erro controlado em vez de exibir o que chegou. É trocar a indisponibilidade temporária de uma tela pela integridade da decisão que ela apoia — a escolha certa para esse fluxo, não uma regra para toda API.",
      },
      outcome:
        "A composição dos dados passou a viver em um único lugar no backend. A interface ficou focada em apresentação e interação, os contratos ficaram mais fáceis de evoluir e os estados de falha mantêm seu significado: se a comparação está na tela, os dados essenciais estão completos.",
      scope:
        "Minha contribuição: o endpoint do BFF, as integrações, transformações, tratamento de erros e testes; a interface de confirmação de premiação e seu mapeamento para a API. A API de premiação e o restante da plataforma são trabalho do time. Não há métricas de SLA ou incidentes atribuídas.",
      diagram: {
        kind: "bid",
        title: "Como a comparação é montada",
        simulate: "Simular timeout no serviço de fornecedores",
        restore: "Restabelecer o serviço de fornecedores",
        proposals: "Serviço de propostas",
        suppliers: "Serviço de fornecedores",
        access: "Processo e acesso",
        bff: "BFF do comparativo",
        ready: "Comparação pronta",
        failed: "Erro controlado",
        retry: "Tentar de novo",
        okCaption:
          "Todos os dados essenciais chegaram. O BFF valida o acesso, associa cada proposta ao seu fornecedor e devolve um contrato tipado para a interface.",
        failCaption:
          "A consulta de fornecedores excedeu o tempo limite. Em vez de exibir propostas sem fornecedores, o BFF devolve um erro controlado — registrado com um correlation ID — e a interface oferece uma nova tentativa.",
      },
    },
    {
      slug: "ai-in-business-workflows",
      index: "02",
      company: "Grupo Inlog · Stratesys",
      domain: "IA aplicada em logística e compras",
      period: "2024 — atual",
      role: "Desenvolvedor Full Stack Sênior",
      title: "Assistentes de IA que trabalham dentro das regras",
      summary:
        "Dois assistentes, em logística e em compras, que respondem com base em documentos, consultam dados operacionais atuais e executam ações — enquanto a aplicação mantém o controle de identidade, permissões e regras de negócio.",
      stack: ["LLMs", "RAG", "MCP", "NestJS", "pgvector", "Azure AI Search", "Zod", "SSE"],
      context:
        "Quem opera um negócio passa muito tempo navegando entre telas para encontrar um status, consultar um documento ou fazer uma pequena alteração. Um assistente conversacional pode encurtar esse caminho — desde que nunca invente dados operacionais nem faça algo além do que o usuário pode fazer. Trabalhei nesse problema duas vezes: primeiro em uma plataforma de logística de coleta de resíduos, depois em uma plataforma de compras corporativas.",
      contribution: [
        "Logística: integrei o chat em Next.js aos serviços NestJS, com GPT-4o e respostas transmitidas via Server-Sent Events.",
        "Atuei diretamente no pipeline de recuperação — LangChain.js para processar e dividir documentos, embeddings da OpenAI e PostgreSQL com pgvector —, guardando metadados de origem e organização para rastreabilidade e filtragem.",
        "Implementei ferramentas MCP com o SDK oficial em TypeScript, como a consulta de status de rota. Os argumentos são validados com Zod; usuário e organização vêm da sessão autenticada, nunca do modelo.",
        "Compras: integrei Azure OpenAI e Azure AI Search ao backend NestJS, com busca híbrida por palavras-chave e vetores — nomes e códigos de fornecedores exigem correspondência exata tanto quanto as perguntas exigem significado —, filtrada por processo de compra e permissões do usuário.",
        "Desenvolvi uma ferramenta MCP de escrita que atualiza a justificativa de um rascunho de compra. Os argumentos são validados, o serviço confere permissão de edição e estado do processo, e o assistente só informa sucesso depois da confirmação do backend.",
      ],
      decision: {
        title: "Separar conhecimento de estado atual — e manter a autoridade nos serviços.",
        body: "Documentos passam pela recuperação. Status atual e ações passam por ferramentas apoiadas nas mesmas APIs que o produto já usa. O índice vetorial nunca é a fonte da verdade para dados operacionais, e o modelo nunca decide quem é o usuário ou o que ele pode alterar. Ele interpreta o pedido; a aplicação autoriza e executa.",
      },
      outcome:
        "Os usuários passaram a consultar informações e concluir tarefas suportadas por conversa, sem navegar por várias telas. A recuperação foi validada com perguntas conhecidas, documentos esperados e respostas fundamentadas nos trechos recuperados. Adoção e tempo economizado não foram medidos formalmente — uma métrica que hoje eu definiria desde o primeiro dia.",
      scope:
        "Minhas contribuições estão listadas acima. Em compras, a extração de documentos e a configuração inicial da indexação foram compartilhadas com o time. Os dois assistentes fazem parte de produtos maiores, construídos por muitas pessoas.",
      diagram: {
        kind: "ai",
        title: "Um pedido, três caminhos possíveis",
        prompt: "Experimente um pedido ilustrativo",
        model: "O modelo interpreta o pedido",
        guard: "Os serviços garantem identidade, permissões e regras de negócio",
        routes: [
          {
            id: "knowledge",
            lane: "Conhecimento",
            request: "O que a política diz sobre compras emergenciais?",
            steps: [
              "Busca híbrida nos documentos indexados",
              "Filtrada por processo e permissões do usuário",
              "Resposta fundamentada nos trechos recuperados",
            ],
          },
          {
            id: "live",
            lane: "Dados atuais",
            request: "Qual é o status atual desta rota?",
            steps: [
              "Ferramenta de leitura com argumentos validados",
              "O serviço confere a organização do usuário",
              "O status vem da API, não do índice",
            ],
          },
          {
            id: "action",
            lane: "Ação",
            request: "Atualize a justificativa deste rascunho.",
            steps: [
              "Ferramenta de escrita com argumentos validados",
              "Permissão de edição e estado do processo são verificados",
              "Sucesso só é informado após a confirmação do backend",
            ],
          },
        ],
      },
    },
    {
      slug: "financial-platform",
      index: "03",
      company: "Unicred",
      domain: "Serviços financeiros · Arquitetura frontend",
      period: "2022 — 2024",
      role: "Desenvolvedor Full Stack Sênior",
      title: "Evoluir uma plataforma financeira sem quebrar a confiança",
      summary:
        "Migração de funcionalidades React para microfrontends com single-spa, com fronteiras claras entre componentes, design system compartilhado e testes que protegem o comportamento existente.",
      stack: ["React", "single-spa", "Next.js", "NestJS", "Jest", "Testing Library"],
      context:
        "As aplicações digitais de uma cooperativa financeira precisavam evoluir sem mudar aquilo de que as pessoas dependiam. Mudanças de arquitetura, componentes compartilhados e proteção contra regressões eram partes do mesmo problema — em um projeto cujo CI bloqueava merges abaixo de 95% de cobertura de linhas no escopo testado.",
      contribution: [
        "Migrei páginas e componentes React para microfrontends com single-spa, configurando rotas e carregamento das aplicações sem alterar o comportamento existente.",
        "Levei estado, integrações, carregamento e tratamento de erros para componentes container, deixando os componentes de apresentação renderizarem a partir de props — mais fáceis de testar e de entender pelo time.",
        "Participei do desenvolvimento do design system interno com Material UI e Tailwind CSS.",
        "Escrevi testes com Jest e React Testing Library para estados de carregamento, erro e interação, aplicando TDD quando fazia sentido.",
        "Conduzi treinamentos internos sobre Figma para código, BFFs em NestJS e o padrão container/apresentação, e apoiei cerca de seis a oito desenvolvedores com orientação e revisões de pull requests.",
      ],
      decision: {
        title: "Tornar as responsabilidades visíveis.",
        body: "Quando a lógica de integração sai da camada de apresentação, existe um lugar óbvio para mudar o comportamento e um lugar óbvio para testá-lo. A cobertura era o requisito; testar o que o usuário realmente faz era o objetivo.",
      },
      outcome:
        "As funcionalidades migradas ficaram mais fáceis de entender, testar e manter. O time passou a aplicar os padrões com menos orientação individual, e os pull requests ficaram mais consistentes. Foi um trabalho colaborativo em uma plataforma compartilhada, não uma reformulação solo.",
      scope:
        "Os 95% são um requisito do CI para o escopo testado, não uma métrica pessoal. As melhorias são qualitativas; não há números de desempenho ou taxa de defeitos atribuídos.",
      diagram: {
        kind: "platform",
        title: "Fronteiras que tornam a mudança mais segura",
        shell: "root do single-spa",
        apps: ["Microfrontend", "Microfrontend", "Microfrontend"],
        container: "Container",
        containerItems: ["Estado", "Integrações", "Carregamento e erros"],
        presentational: "Apresentação",
        presentationalItems: ["Renderiza a partir de props", "Partes do design system", "Fácil de testar"],
        props: "props",
        gate: "Gate do CI · ≥ 95% de cobertura de linhas no escopo testado",
        caption:
          "Cada microfrontend mantém o comportamento nos containers e a renderização nos componentes de apresentação — assim toda mudança tem um lugar óbvio e um teste óbvio.",
      },
    },
  ],
  experience: {
    label: "Experiência",
    title: "Seis anos de produtos reais e restrições reais.",
    intro:
      "Da telemetria veicular às compras corporativas — com responsabilidades que cresceram de funcionalidades individuais para integrações de backend, arquitetura, qualidade e apoio a outros desenvolvedores.",
    current: "Atual",
    earlierTitle: "Antes disso",
    roles: [
      {
        company: "Stratesys",
        role: "Desenvolvedor Full Stack Sênior",
        period: "Jan 2026 — Atual",
        start: "2026-01",
        domain: "Compras corporativas e strategic sourcing para grandes empresas · IntelligentBuy",
        highlights: [
          "Desenvolvo fluxos de compras em React e Next.js: processos de compra, negociações com fornecedores, quadro comparativo e cenários de premiação.",
          "Sou responsável por um BFF em NestJS para o quadro comparativo, com validação de acesso, falhas controladas, logs estruturados e correlation IDs.",
          "Integro o assistente de IA do produto com Azure OpenAI, busca híbrida no Azure AI Search e ferramentas MCP que respeitam a autenticação Keycloak e as permissões do usuário.",
          "Ajudei a projetar e colocar em produção uma estrutura em que aplicações Next.js com deploy independente compartilham um portal persistente — e a conversa com a IA continua enquanto o usuário navega entre produtos.",
        ],
        stack: ["TypeScript", "Next.js", "NestJS", "Azure OpenAI", "Azure AI Search", "MCP", "Keycloak"],
      },
      {
        company: "Grupo Inlog",
        role: "Desenvolvedor Full Stack Sênior",
        period: "Dez 2024 — Jan 2026",
        start: "2024-12",
        end: "2026-01",
        domain: "Gestão de coleta de resíduos usada por empresas e serviços públicos em vários estados · motoristas, frota e rotas",
        highlights: [
          "Desenvolvi um assistente de IA com GPT-4o, LangChain.js, PostgreSQL/pgvector e ferramentas MCP, com respostas via SSE.",
          "Entreguei funcionalidades full stack e APIs REST para motoristas, frota, setores de coleta e rotas, incluindo interfaces com mapas em Leaflet.",
          "Participei do design system com Material UI, Tailwind CSS e Radix UI, e refatorei componentes para reduzir acoplamento.",
          "Entreguei funcionalidades e correções em um período em que a base de empresas clientes ativas cresceu cerca de 15% — um resultado conjunto de engenharia, produto e comercial.",
        ],
        stack: ["React", "Next.js", "NestJS", "Redux", "LangChain.js", "pgvector", "Leaflet"],
      },
      {
        company: "Unicred",
        role: "Desenvolvedor Full Stack Sênior",
        period: "Nov 2022 — Dez 2024",
        start: "2022-11",
        end: "2024-12",
        domain: "Aplicações digitais de uma cooperativa financeira com atuação nacional",
        highlights: [
          "Desenvolvi funcionalidades web e BFFs em NestJS conectados a APIs de serviços financeiros.",
          "Migrei funcionalidades React para microfrontends com single-spa, com mínimo de 95% de cobertura de linhas exigido pelo CI.",
          "Apoiei de seis a oito desenvolvedores e conduzi treinamentos internos sobre arquitetura de componentes, Figma para código e BFFs.",
        ],
        stack: ["React", "Next.js", "NestJS", "single-spa", "Jest", "Testing Library"],
      },
    ],
    earlier: [
      {
        company: "uFLY",
        role: "Desenvolvedor Full Stack",
        period: "Jun 2022 — Nov 2022",
        start: "2022-06",
        end: "2022-11",
        domain: "Software de alocação na saúde feito para um dos maiores hospitais do Brasil",
        highlights: [
          "Desenvolvi interfaces responsivas para fluxos hospitalares, integrei APIs, investiguei defeitos em produção e apresentei o andamento das entregas a clientes.",
        ],
      },
      {
        company: "Autonomo Technologies",
        role: "Desenvolvedor Full Stack",
        period: "Jan 2021 — Jun 2022",
        start: "2021-01",
        end: "2022-06",
        domain: "Emissão e validação de documentos oficiais — CNH e PID — usadas por Detrans de vários estados",
        highlights: [
          "Desenvolvi funcionalidades com React, Vue.js, TypeScript, Node.js e NestJS; refatorei para facilitar a manutenção, com testes unitários, SonarQube e code reviews.",
        ],
      },
      {
        company: "Creare Sistemas",
        role: "Desenvolvedor Backend · desde o estágio",
        period: "Ago 2020 — Jan 2021",
        start: "2020-08",
        end: "2021-01",
        domain: "Telemetria veicular para multinacionais do agronegócio",
        highlights: [
          "Onde tudo começou: investiguei problemas de telemetria com Oracle SQL, JavaScript e JSON, escrevi documentação de treinamento e treinei novos estagiários e uma equipe de cerca de dez colegas não desenvolvedores.",
        ],
      },
    ],
  },
  approach: {
    label: "Abordagem",
    title: "Como tomo decisões de engenharia.",
    intro: "Princípios que aprendi em projetos reais — cada um ligado a um trabalho descrito nesta página.",
    principles: [
      {
        title: "Falhar com clareza, não em silêncio.",
        body: "Quando a falta de dados pode induzir uma decisão errada, um erro explícito e recuperável é melhor do que uma tela aparentemente correta.",
        evidence: "BFF do quadro comparativo",
      },
      {
        title: "Conhecimento não é estado.",
        body: "A recuperação responde com base em documentos. Status atual e ações vêm dos serviços responsáveis — com suas permissões preservadas.",
        evidence: "Assistentes de IA",
      },
      {
        title: "Tornar as responsabilidades visíveis.",
        body: "Fronteiras claras entre dados, lógica e apresentação dão a cada mudança um lugar óbvio — e um teste óbvio.",
        evidence: "Migração da plataforma financeira",
      },
      {
        title: "Simples até que se prove o contrário.",
        body: "Eu costumava projetar componentes compartilhados para necessidades que ainda não existiam. Hoje limito o tempo de decisões reversíveis, entrego a versão simples e reservo a análise profunda para escolhas difíceis de desfazer.",
        evidence: "Um aprendizado com design system",
      },
      {
        title: "Deixar o time mais forte.",
        body: "Revisões, pareamento e treinamentos fazem boas decisões durarem além de quem as tomou.",
        evidence: "Mentoria e treinamentos internos",
      },
    ],
  },
  notes: {
    label: "Notas de campo",
    title: "Pequenas histórias de produção.",
    intro: "Nem todo aprendizado vem de um grande projeto. Algumas investigações que moldaram meu jeito de trabalhar.",
    lessonLabel: "Aprendizado",
    items: [
      {
        tag: "React · Performance",
        title: "O filtro que disparava demais",
        body: "Uma listagem de veículos enviava várias requisições idênticas ao abrir a página e a cada mudança de filtro. O efeito dependia de um objeto de filtros recriado a cada renderização. Estabilizei as dependências para disparar só quando os valores mudavam de fato, e cancelei requisições antigas com AbortController para que respostas lentas não sobrescrevessem buscas mais recentes.",
        lesson: "Verifique igualdade de referência antes de culpar a API — e descarte as execuções extras do Strict Mode antes de chamar de bug.",
      },
      {
        tag: "Backend · Banco de dados",
        title: "Um N+1 escondido em uma listagem",
        body: "Uma API de rotas e veículos ficava mais lenta conforme os dados cresciam. Os logs mostravam uma consulta para a lista e outra para cada registro relacionado. Busquei os relacionamentos em lote, analisei o plano com EXPLAIN ANALYZE, ajustei um índice usado pelos filtros e verifiquei que resultados, paginação e ordenação continuavam idênticos.",
        lesson: "Uma otimização precisa de uma verificação de equivalência, não só de um número mais rápido.",
      },
      {
        tag: "Entrega · Containers",
        title: "Pipeline verde, aplicação fora do ar",
        body: "Build aprovado, testes aprovados, imagem publicada — e a nova revisão no Azure Container Apps nunca ficava pronta. Logs e eventos mostraram o NestJS ouvindo na porta 3000 enquanto o ingress esperava a 8080. Alinhei a configuração, validei health check e endpoints e revisei os outros ambientes para evitar a mesma divergência.",
        lesson: "Um pipeline bem-sucedido prova o build, não o serviço rodando.",
      },
      {
        tag: "Arquitetura · Colaboração",
        title: "Síncrono ou assíncrono? Os dados decidem.",
        body: "Um colega preferia gerar exportações de relatórios dentro da própria requisição HTTP; eu me preocupava com volumes grandes. Em vez de discutir, testamos tamanhos diferentes. As exportações maiores estavam sujeitas a timeouts, então foram para jobs em segundo plano com acompanhamento de status — e as pequenas continuaram síncronas.",
        lesson: "Um teste compartilhado resolve uma divergência mais rápido do que um debate longo.",
      },
    ],
  },
  aiWorkflow: {
    label: "Engenharia com IA",
    title: "A IA faz parte de como eu construo software, não só do que eu construo.",
    intro: "Trabalho com agentes de IA todos os dias para ganhar velocidade — e respondo por cada linha que vai para produção.",
    items: [
      {
        title: "Explorar e construir",
        body: "Uso Claude Code, Codex e GitHub Copilot para explorar bases de código, investigar bugs, comparar abordagens técnicas e acelerar a implementação, mantendo mudanças focadas e fáceis de manter.",
      },
      {
        title: "Testar e validar",
        body: "A IA me ajuda a encontrar casos de borda, ampliar os testes automatizados e conduzir verificações no navegador com Playwright MCP. Código e testes gerados são executados, revisados e validados contra o comportamento esperado.",
      },
      {
        title: "Revisar e entregar",
        body: "Revisões de pull request assistidas por IA no Azure DevOps funcionam junto com checks de CI, análise estática e revisão humana. A IA antecipa problemas; correção, segurança e manutenção continuam sendo minha responsabilidade.",
      },
    ],
    proof: "Veja na prática: este site foi construído com agentes de IA sob a minha direção.",
    proofLink: "O código, os testes, as instruções para agentes e o histórico de commits são públicos.",
  },
  toolkit: {
    label: "Ferramentas",
    title: "O que uso em produção.",
    groups: [
      {
        name: "Frontend",
        items: ["TypeScript", "React", "Next.js", "Server Actions", "Redux", "Zustand", "Tailwind CSS", "Material UI", "Radix UI", "single-spa", "Leaflet"],
      },
      {
        name: "Backend",
        items: ["Node.js", "NestJS", "APIs REST", "Backends-for-frontend", "PostgreSQL", "SQL", "Zod", "Keycloak", "NextAuth"],
      },
      {
        name: "Integração com IA",
        items: ["Azure OpenAI", "GPT-4o", "LangChain.js", "RAG", "Busca híbrida", "Azure AI Search", "pgvector", "MCP", "Streaming via SSE"],
      },
      {
        name: "Desenvolvimento com IA",
        items: ["Claude Code", "OpenAI Codex", "GitHub Copilot", "Playwright MCP", "Code review com IA"],
      },
      {
        name: "Qualidade e entrega",
        items: ["Jest", "React Testing Library", "TDD", "Azure DevOps", "Docker", "Deploys em Kubernetes", "Vercel", "ESLint", "SonarQube"],
      },
    ],
    also: "Também: JavaScript, Vue.js, Oracle SQL, Git, Scrum.",
  },
  background: {
    label: "Trajetória",
    title: "Além do código.",
    education: { label: "Formação", value: "Análise e Desenvolvimento de Sistemas — SENAI/RS, 2020–2022" },
    languages: { label: "Idiomas", value: "Português (nativo) · Espanhol (avançado) · Inglês (intermediário)" },
    community: {
      label: "Comunidade",
      value: "Tech lead frontend voluntário no Instituto Mancala e mentor de tecnologia para estudantes de escolas públicas pela Atados (2022–2023).",
    },
    quote: {
      text: "Maique é um dos profissionais mais qualificados com quem eu já trabalhei. As principais características que eu notei foram: rápido aprendizado, ótimo conhecimento técnico, capacidade de entender as regras de negócio e comprometimento, muitas vezes fazendo horas extras para resolver problemas que não eram de sua responsabilidade.",
      author: "Ricardo Oliveira",
      context: "Gestor direto",
    },
  },
  contact: {
    label: "Contato",
    title: "Construindo algo que precisa dar certo?",
    body: "Rendo mais em times que se importam com os detalhes — interfaces claras, serviços confiáveis e IA que respeita as regras do negócio. Se esse é o seu time, o e-mail é o jeito mais rápido de falar comigo.",
    hours: "Moro no Brasil (UTC−3) e tenho flexibilidade de horário para trabalhar com times das Américas e da Europa.",
    emailCta: "Enviar e-mail",
    copy: "Copiar endereço",
    copied: "Copiado",
    copyFailed: "Não foi possível copiar — selecione o endereço",
    resume: "Currículo · PDF (inglês)",
    backToTop: "Voltar ao topo",
    footer: "Projetado e desenvolvido com Next.js.",
    viewSource: "Ver o código",
    codeNote: {
      text: "A maior parte do meu código de produção fica em repositórios privados das empresas em que atuo.",
      link: "O código deste site é público.",
    },
    timeDiff: {
      ahead: "Agora são {time} em João Pessoa — {diff} à sua frente.",
      behind: "Agora são {time} em João Pessoa — {diff} atrás de você.",
      same: "Agora são {time} em João Pessoa — o mesmo horário que o seu.",
    },
  },
  caseStudy: {
    back: "Todos os trabalhos",
    company: "Empresa",
    role: "Cargo",
    period: "Período",
    stack: "Stack",
    context: "O problema",
    contribution: "O que eu fiz",
    decision: "A decisão principal",
    figure: "Diagrama interativo",
    figureNote: "Ilustração original da ideia de engenharia — não é uma captura do produto.",
    outcome: "O que mudou",
    scope: "Escopo, com transparência",
    next: "Próximo case",
  },
  notFound: {
    title: "Esta página não existe.",
    body: "O link pode estar desatualizado ou o endereço pode ter um erro de digitação.",
    cta: "Voltar para o início",
  },
  entrance: {
    role: "Engenheiro full stack sênior",
    place: "baseado no Brasil",
    enter: "Entrar",
    enterLabel: "Entrar no site",
  },
};
