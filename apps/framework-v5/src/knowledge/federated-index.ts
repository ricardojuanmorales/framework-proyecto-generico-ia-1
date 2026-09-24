import type { MaturityLevel, Profile } from "../domain/model";

export interface KnowledgeItem {
  id: string;
  title: string;
  type: "method" | "protocol" | "guide" | "criterion" | "template" | "taxonomy" | "gate" | "schema" | "example";
  purpose: string;
  canonicalSource: string;
  owner: "COMMON" | Profile;
  profiles: Profile[];
  levels: MaturityLevel[];
  keywords: string[];
  risks: string[];
  evidenceHint: string;
}

export const FEDERATED_INDEX: KnowledgeItem[] = [
  {
    id: "method-sdd",
    title: "Spec-Driven Development (SDD)",
    type: "method",
    purpose: "Estructurar desarrollo desde principio, spec, arquitectura, contrato, implementación y verificación.",
    canonicalSource: "00_CONTROL_MAESTRO/Spec_Driven_Development/",
    owner: "PH",
    profiles: ["PH"],
    levels: ["N1","N2","N3","N4"],
    keywords: ["desarrollo","arquitectura","software","spec","implementación","verificación"],
    risks: ["documentación sin conexión con ejecución"],
    evidenceHint: "spec trazable + implementación + pruebas + gate"
  },
  {
    id: "protocol-activation",
    title: "Contrato de Activación V5",
    type: "protocol",
    purpose: "Convertir un problema real en configuración inicial START, INTEGRATE o AUDIT.",
    canonicalSource: "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Protocolos_Trabajo_Humano_IA/2026-09-22_Contrato_Activacion_Framework_V5_v0_1.md",
    owner: "COMMON",
    profiles: ["PH","IT","AT"],
    levels: ["N1","N2","N3","N4"],
    keywords: ["activar","inicio","problema","start","integrate","audit"],
    risks: [],
    evidenceHint: "tarjeta de activación + decisiones humanas pendientes"
  },
  {
    id: "model-n1n4",
    title: "Modelo Operacional N1–N4",
    type: "criterion",
    purpose: "Situar madurez operacional de proyecto, producto y autonomía sin convertirla en puntuación.",
    canonicalSource: "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Niveles_N1_N4/2026-09-22_Modelo_Operacional_N1_N4_Framework_V5_v0_1.md",
    owner: "COMMON",
    profiles: ["PH","IT","AT"],
    levels: ["N1","N2","N3","N4"],
    keywords: ["madurez","nivel","autonomía","n1","n2","n3","n4"],
    risks: ["usar nivel como jerarquía o score"],
    evidenceHint: "justificación situada del nivel + evidencia proporcional"
  },
  {
    id: "protocol-orchestration",
    title: "Orquestación PH–IT–AT",
    type: "protocol",
    purpose: "Coordinar perfiles activos, latentes, transferencias y posible emergencia caleidoscópica.",
    canonicalSource: "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Protocolos_Trabajo_Humano_IA/2026-09-22_Contrato_Orquestacion_PH_IT_AT_Caleidoscopio_V5_v0_1.md",
    owner: "COMMON",
    profiles: ["PH","IT","AT"],
    levels: ["N1","N2","N3","N4"],
    keywords: ["perfil","ph","it","at","caleidoscopio","transferencia","orquestación"],
    risks: ["activar perfiles innecesariamente"],
    evidenceHint: "responsabilidades + transferencias + tensiones + decisión humana"
  },
  {
    id: "protocol-invocation",
    title: "Invocación de Métodos y Conocimiento",
    type: "protocol",
    purpose: "Localizar y usar conocimiento pertinente desde la Base Federada sin navegar manualmente el repositorio.",
    canonicalSource: "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Protocolos_Trabajo_Humano_IA/2026-09-22_Contrato_Invocacion_Metodos_Conocimiento_V5_v0_1.md",
    owner: "COMMON",
    profiles: ["PH","IT","AT"],
    levels: ["N1","N2","N3","N4"],
    keywords: ["método","conocimiento","invocar","base","guía","protocolo"],
    risks: ["confundir recomendación con obligación"],
    evidenceHint: "necesidad + fuente + uso + resultado + aprendizaje"
  }
];
