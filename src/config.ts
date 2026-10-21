// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "es",
  brandName: "Nexus IA",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Capacidades", href: "#curriculum" },
    { label: "Arquitectura", href: "#cinematic" },
    { label: "Investigación", href: "#alumni" },
  ],
  ctaText: "Hablemos",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "Nexus IA",
  subtitleLine1: "Diseñamos sistemas de inteligencia artificial para empresas que buscan ventajas medibles, no demos llamativas.",
  subtitleLine2: "Modelos a medida, pipelines en producción y estrategia de adopción para equipos que ya operan con datos.",
  ctaText: "Explorar capacidades",
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "Capacidades",
  items: [
    {
      title: "Modelos fundacionales a medida",
      slug: "modelos-fundacionales",
      description: "Pre-entrenamiento y fine-tuning de modelos de lenguaje y visión sobre datos propios del cliente, con governanza y trazabilidad completa.",
      image: "/images/capability-1.svg",
    },
    {
      title: "Agentes y orquestación",
      slug: "agentes-orquestacion",
      description: "Diseño de agentes autónomos que conectan APIs, herramientas internas y bases de conocimiento, con memoria, validación humana y auditoría.",
      image: "/images/capability-2.svg",
    },
    {
      title: "Plataformas RAG y búsqueda semántica",
      slug: "rag-busqueda-semantica",
      description: "Sistemas de recuperación aumentada sobre documentos, código y datos estructurados. Latencias sub-200ms y evaluación continua de relevancia.",
      image: "/images/capability-3.svg",
    },
    {
      title: "MLOps y observabilidad",
      slug: "mlops-observabilidad",
      description: "Pipelines reproducibles, drift detection, A/B de prompts y modelos, dashboards de coste por inferencia y alertas de comportamiento.",
      image: "/images/capability-4.svg",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Capacidad",
  backLinkText: "Volver al inicio",
  prevLabel: "Anterior",
  nextLabel: "Siguiente",
  notFoundText: "La capacidad solicitada no existe.",
  capabilities: {
    "modelos-fundacionales": {
      title: "Modelos fundacionales a medida",
      subtitle: "Cuándo el modelo correcto no existe en el mercado",
      paragraphs: [
        "Construimos modelos de lenguaje y visión adaptados al dominio, vocabulario y casos de uso del cliente. Trabajamos con arquitecturas transformer, mixture-of-experts y modelos multimodales según el problema.",
        "El proceso comienza con un audit de datos: qué hay disponible, qué calidad tiene, qué sesgos arrastra. A partir de ahí definimos si conviene pre-entrenar desde cero, hacer continual pre-training sobre un modelo abierto, o aplicar fine-tuning supervisado / RLHF.",
        "Cada entrega incluye evaluación fuera de la distribución, red-teaming adversarial, y un pipeline de re-entrenamiento periódico para que el modelo no se degrade silenciosamente con el tiempo.",
      ],
    },
    "agentes-orquestacion": {
      title: "Agentes y orquestación",
      subtitle: "Sistemas que ejecutan, no sólo conversan",
      paragraphs: [
        "Diseñamos agentes que descomponen objetivos en pasos, llaman herramientas internas y externas, y mantienen contexto a lo largo de sesiones largas. El foco está en la fiabilidad: que el agente sepa cuándo parar.",
        "Cada agente tiene tres capas separadas: planificación, ejecución y validación. La capa de validación es la que decide si el resultado es bueno, dudoso o necesita escalado a un humano.",
        "Desplegamos sobre frameworks como LangGraph, CrewAI o implementaciones a medida según restricciones de latencia, coste y compliance. Logging completo de cada decisión.",
      ],
    },
    "rag-busqueda-semantica": {
      title: "Plataformas RAG y búsqueda semántica",
      subtitle: "Conocimiento corporativo realmente accesible",
      paragraphs: [
        "Indexamos documentos, código, tickets, emails y bases de datos en pipelines de retrieval híbrido (BM25 + dense embeddings + re-ranking). Evaluamos con métricas reales de relevancia, no con demos.",
        "La pieza más crítica es el chunking y la política de actualización. Diseñamos estrategias que respetan la estructura del documento y mantienen frescos los índices sin re-procesar todo cada noche.",
        "Las latencias objetivo son sub-200ms en p95 para consultas interactivas. Cuando la respuesta no está en el corpus, el sistema lo dice — no alucina.",
      ],
    },
    "mlops-observabilidad": {
      title: "MLOps y observabilidad",
      subtitle: "Producción no es demo en Jupyter",
      paragraphs: [
        "Llevamos los modelos a producción con pipelines reproducibles, versionado de datos y modelos, y tests automatizados antes de cada despliegue. Nada llega a producción sin pasar por staging y un shadow deployment contra tráfico real.",
        "La observabilidad cubre drift de datos, drift de predicciones, latencia, coste por inferencia y calidad de salida muestreada. Alertas accionables, no dashboards decorativos.",
        "Diseñamos también los procesos de rollback y los runbooks para que el equipo del cliente pueda operar el sistema sin nosotros. Transferencia de conocimiento incluida.",
      ],
    },
  },
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "Arquitectura",
  videoPath: "/videos/cinematic-vision.mp4",
  title: "Sistemas diseñados para durar, no para impresionar en un pitch.",
  description: "Trabajamos con stacks abiertos y self-hosted cuando el caso lo requiere. Preferimos Postgres a faunas de vector stores propietarios, y preferimos explicar una decisión técnica a esconderla detrás de marketing. El resultado son sistemas que sobreviven al equipo que los construyó.",
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Investigación aplicada",
  projects: [
    {
      title: "Atención eficiente para documentos largos",
      year: "2025",
      discipline: "Arquitecturas",
      image: "/images/research-1.svg",
    },
    {
      title: "Evaluación adversarial de LLMs en español",
      year: "2025",
      discipline: "Seguridad",
      image: "/images/research-2.svg",
    },
    {
      title: "Re-ranking con modelos pequeños",
      year: "2024",
      discipline: "Retrieval",
      image: "/images/research-3.svg",
    },
    {
      title: "Drift detection en producción",
      year: "2024",
      discipline: "MLOps",
      image: "/images/research-4.svg",
    },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "Construyamos algo que merezca existir en producción.",
  columns: [
    {
      title: "Contacto",
      links: ["hola@nexus-ia.com", "+34 910 000 000", "Madrid · Ciudad de México"],
    },
    {
      title: "Recursos",
      links: ["Investigación aplicada", "Casos de estudio", "Notas técnicas", "Carreras"],
    },
  ],
  copyright: "© 2026 Nexus IA. Todos los derechos reservados.",
  bottomLinks: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
  ],
};