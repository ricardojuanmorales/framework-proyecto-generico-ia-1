# Mapa Macro–Meso–Micro
## Framework Genérico V4.1.0 — Borrador v0.1

**Archivo:** `2026-05-04_Mapa_Macro_Meso_Micro_Framework_Generico_V4_1_0_Borrador_v0-1.md`  
**Fecha:** 2026-05-04  
**Versión:** v0.1  
**Estado:** Mapa estructural inicial para rama V4.1.0-borrador  
**Marco madre:** Framework Genérico V4.0.0  
**Rama activa:** Framework Genérico V4.1.0-borrador  
**Nivel de activación:** N3 — Avanzado  
**Tipo de documento:** Mapa arquitectónico, navegación estructural y control de escala  
**Decisiones relacionadas:** D-A28, D-A29, D-A30  

---

## 0. Declaración de propósito

Este documento ubica el **Framework Genérico V4.1.0-borrador** en tres escalas:

```text
Macro  → arquitectura madre, cartapacios principales, gobernanza y ciclo de vida.
Meso   → capas transversales, perfiles, Caleidoscopio, sistemas documentales y flujos.
Micro  → documentos, plantillas, evidencias, checks, Gates, wiki_sync y archivo.
```

Su función no es reescribir la arquitectura V4.0.0. Su función es mostrar dónde vive cada pieza nueva de V4.1.0-borrador sin inflar el sistema ni crear macrocarpetas innecesarias.

---

## 1. Regla de orientación

```text
Primero mapa.
Luego documento.
Luego carpeta.
Luego automatización.
```

La V4.1.0-borrador debe avanzar como **evolución controlada**, no como remodelación impulsiva. La arquitectura no debe estirarse como chicle institucional; debe plegarse con precisión de origami.

---

## 2. Vista general de escalas

| Escala | Pregunta central | Producto típico | Riesgo si se confunde |
|---|---|---|---|
| Macro | ¿Qué arquitectura sostiene el framework completo? | Cartapacios, gobernanza, versión, archivo | Cambios estructurales sin decisión |
| Meso | ¿Qué capas, perfiles y flujos conectan partes del sistema? | Perfiles, matrices, Caleidoscopio, sistemas operativos documentales | Proliferación modular |
| Micro | ¿Qué documentos, plantillas, checks y evidencias activan el trabajo? | AGENTS, SKILLS, CHECKS, WIKI_SYNC, fichas, rúbricas | Fragmentación documental |

---

## 3. Nivel Macro — Arquitectura madre

### 3.1 Función

El nivel macro sostiene el esqueleto del Framework Genérico. Incluye la arquitectura conceptual, metodológica, ética, técnica, documental, wiki, archivo y transferencia.

### 3.2 Principio macro

```text
La macroarquitectura no se altera sin decisión explícita, justificación, impacto, riesgo, versión afectada y recomendación de continuidad.
```

### 3.3 Cartapacios macro relevantes para V4.1.0-borrador

```text
00_CONTROL_MAESTRO/
01_FUNDAMENTO_FILOSOFICO/
02_ARQUITECTURA_CONCEPTUAL/
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
04_GOBERNANZA_ETICA_Y_RIESGOS/
06_PASTILLAS_MODULARES/
07_PLANTILLAS_Y_MODELOS/
09_IA_AGENTES_Y_COPILOTOS/
10_REPOSITORIOS_Y_FLUJO_TECNICO/
12_DISENO_INSTRUCCIONAL_UNIVERSAL/
15_EVALUACION_CALIDAD_Y_AUDITORIA/
18_DOCUMENTACION_ACTIVA/
21_WIKI_DOCUMENTACION_HUMANA/
99_ARCHIVO_HISTORICO/
```

### 3.4 Cambios macro permitidos en V4.1.0-borrador

| Cambio | Tipo | Permitido | Condición |
|---|---|---|---|
| Crear nueva macrocarpeta | Cambio estructural | No | Solo con decisión mayor posterior |
| Añadir subcarpeta dentro de cartapacio existente | Extensión modular | Sí | Debe tener mapa, documento y justificación |
| Actualizar README, índice, manifest | Gobernanza documental | Sí | Debe registrarse |
| Formalizar perfiles transversales | Extensión modular | Sí | Sin reescribir perfiles base |
| Activar automatización | Cambio operativo | Todavía no | Requiere CHECKS, Gates, WIKI_SYNC y manifest |

---

## 4. Nivel Meso — Capas transversales

### 4.1 Función

El nivel meso conecta los cartapacios macro con operaciones concretas. En V4.1.0-borrador, el nivel meso está dominado por la capa de **Perfiles Transversales** y el **Caleidoscopio**.

### 4.2 Capa de Perfiles Transversales

```text
02_ARQUITECTURA_CONCEPTUAL/
└── 07_Perfiles_Transversales/
    ├── 01_Programador_Humanista/
    ├── 02_Investigador_Transdisciplinario/
    ├── 03_Artista_Transdisciplinario/
    └── 04_Caleidoscopio/
```

### 4.3 Estado de los componentes

| Componente | Versión | Estado | Función meso |
|---|---:|---|---|
| Programador Humanista | v0.2 | Cerrado funcional | Construcción técnica responsable |
| Investigador Transdisciplinario | v0.1 | Formalizado preliminar | Indagación, evidencia y transferencia |
| Artista Transdisciplinario | v0.1 | Formalizado preliminar | Creación, memoria, curaduría y experiencia |
| Caleidoscopio | v0.1 | Lógica integradora preliminar | Orquestación emergente entre perfiles |

### 4.4 Relación meso entre perfiles

```text
Programador Humanista
    ↓ técnica, arquitectura, código, pruebas, seguridad, mantenimiento

Investigador Transdisciplinario
    ↓ problema, fuentes, evidencia, metodología, análisis, publicación

Artista Transdisciplinario
    ↓ memoria, símbolos, materialidad, obra, curaduría, experiencia

Caleidoscopio
    ↓ integración, emergencia, validación multidimensional, transferencia
```

### 4.5 Modos Caleidoscopio C1–C7

| Modo | Activación meso | Uso |
|---|---|---|
| C1 | Programador + Investigador | Técnica investigativa, dashboards, repositorios, pipelines |
| C2 | Investigador + Artista | Investigación-creación, memoria, publicación multimodal |
| C3 | Artista + Programador | Arte digital, interfaces, avatares, experiencias interactivas |
| C4 | Tres perfiles | AVAT, REA multimodal, ecosistemas agénticos |
| C5 | Pedagógico | Cursos, módulos, OVAT, rutas formativas |
| C6 | Comunitario | Archivos vivos, mapas, memoria territorial |
| C7 | Institucional | Laboratorios, programas, manuales, wiki institucional |

---

## 5. Nivel Meso — Sistemas operativos documentales

### 5.1 Función

Los sistemas operativos documentales convierten perfiles en operación controlada. No son automatizaciones completas. Son reglas, roles, destrezas, flujos, validaciones y sincronizaciones.

### 5.2 Sistema base

```text
09_IA_AGENTES_Y_COPILOTOS/
└── 08_Sistema_Operativo_Agentes_Skills/
    ├── AGENTS.md
    ├── SKILLS.md
    ├── WORKFLOWS.md
    ├── CHECKS.md
    ├── WIKI_SYNC.md
    ├── agent_manifest.json
    ├── skill_registry.json
    ├── workflow_registry.json
    └── gates.json
```

### 5.3 Variantes por perfil

| Perfil / componente | Sistema documental |
|---|---|
| Programador Humanista | `AGENTS.md`, `SKILLS.md`, `WORKFLOWS.md`, `CHECKS.md`, `WIKI_SYNC.md` |
| Investigador Transdisciplinario | `RESEARCH_AGENTS.md`, `RESEARCH_SKILLS.md`, `INQUIRY_WORKFLOWS.md`, `SOURCE_REGISTRY.md`, `EVIDENCE_LEDGER.md` |
| Artista Transdisciplinario | `ART_AGENTS.md`, `CREATIVE_SKILLS.md`, `CREATION_WORKFLOWS.md`, `COLLECTION_REGISTRY.md`, `RIGHTS_LICENSES.md` |
| Caleidoscopio | `KALEIDOSCOPE_AGENTS.md`, `KALEIDOSCOPE_SKILLS.md`, `INTEGRATION_WORKFLOWS.md`, `PROFILE_COMBINATION_MATRIX.md` |

---

## 6. Nivel Micro — Documentos activos

### 6.1 Función

El nivel micro contiene los documentos específicos que activan trabajo, evidencian decisiones y permiten continuidad.

### 6.2 Microdocumentos de control maestro

```text
README_Framework_Generico_V4_1_0_Borrador_v0-1.md
Indice_Maestro_Documentos_Framework_Generico_V4_1_0_Borrador_v0-1.md
manifest_framework_v4_1_0_borrador_v0-1.json
Borrador_Framework_Generico_V4_1_0_Apertura_v0-1.md
```

### 6.3 Microdocumentos de consolidación transversal

```text
Paquete_Consolidado_Perfiles_Transversales_Caleidoscopio_v0-1.md
Matriz_Comparativa_Perfiles_Transversales_v0-1.md
Matriz_Caleidoscopio_C1_C7_Ejemplos_v0-1.md
Plantillas_Base_Agents_Skills_Workflows_Checks_WikiSync_v0-1.md
```

### 6.4 Microdocumentos de gobernanza

```text
Reporte_Cierre_Situacion_Actual_Framework_Generico_V4_para_Archivo_Historico_v1-0.md
Changelog_Actualizacion_Perfiles_Transversales_y_Apertura_V4_1_0_v0-2.md
Registro_Decisiones_Actualizacion_Perfiles_Transversales_y_Apertura_V4_1_0_v0-2.md
Primer_Continuidad_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

### 6.5 Microdocumentos pendientes prioritarios

```text
Matriz_N1_N4_Framework_Generico_V4_1_0_Borrador_v0-1.md
Matriz_Gates_Framework_Generico_V4_1_0_Borrador_v0-1.md
CHECKS_Framework_Generico_V4_1_0_Borrador_v0-1.md
WIKI_SYNC_Framework_Generico_V4_1_0_Borrador_v0-1.md
Plan_Archivo_Historico_Framework_Generico_V4_0_0_y_V4_1_0_Borrador_v0-1.md
Protocolo_Paso_Borrador_a_Estable_Framework_Generico_V4_1_0_v0-1.md
```

---

## 7. Mapa de relaciones Macro–Meso–Micro

| Macro | Meso | Micro |
|---|---|---|
| `00_CONTROL_MAESTRO/` | Gobernanza de versión | README, índice, manifest, apertura |
| `02_ARQUITECTURA_CONCEPTUAL/` | Perfiles Transversales | Perfiles, paquete consolidado, matriz comparativa |
| `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/` | Flujos por perfil y Caleidoscopio | Workflows, matriz C1–C7, Gates |
| `04_GOBERNANZA_ETICA_Y_RIESGOS/` | Ética, derechos, accesibilidad, riesgos | CHECKS, AIAS, IBATA, licencias, riesgos |
| `06_PASTILLAS_MODULARES/` | Destrezas transversales | Plantillas, fichas, ejemplos |
| `07_PLANTILLAS_Y_MODELOS/` | Modelos reutilizables | Agents, skills, workflows, wiki_sync |
| `09_IA_AGENTES_Y_COPILOTOS/` | Sistemas agénticos documentales | AGENTS, SKILLS, registries |
| `12_DISENO_INSTRUCCIONAL_UNIVERSAL/` | Transferencia educativa | OVAT, AVAT, REA, DUA/POUR |
| `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | Rúbricas, indicadores y Gates | Matriz Gates, rúbricas, semáforos |
| `18_DOCUMENTACION_ACTIVA/` | Changelog, decisiones y continuidad | Changelog, registro, primer, cierres |
| `21_WIKI_DOCUMENTACION_HUMANA/` | Guías humanas | Wiki de perfiles y V4.1.0 |
| `99_ARCHIVO_HISTORICO/` | Releases y preservación | Reporte de cierre, manifest, paquetes |

---

## 8. Flujo de activación V4.1.0-borrador

```text
1. Abrir README V4.1.0-borrador.
2. Revisar índice maestro.
3. Cargar manifest JSON si hay operación asistida por IA.
4. Identificar nivel N1-N4.
5. Identificar perfil o modo Caleidoscopio activo.
6. Seleccionar documento base.
7. Seleccionar plantilla operativa.
8. Aplicar CHECKS.
9. Pasar Gate correspondiente.
10. Actualizar documentación activa.
11. Sincronizar Wiki si aplica.
12. Registrar decisión o cambio.
13. Preparar cierre, archivo y continuidad.
```

---

## 9. Ruta por nivel N1–N4 en el mapa

| Nivel | Macro | Meso | Micro |
|---|---|---|---|
| N1 | README + propósito | Un perfil activo | Documento mínimo, evidencia básica, cierre |
| N2 | Índice + ruta | Perfil + matriz simple | Plantilla, checklist, wiki mínima |
| N3 | Manifest + gobernanza | Perfiles + Caleidoscopio + Gates | Agents, skills, checks, registro, archivo |
| N4 | Auditoría + institucionalización | Ecosistema completo | Automatización, dashboard, capacitación, release |

---

## 10. Gates estructurales preliminares

| Gate | Pregunta | Evidencia |
|---|---|---|
| Gate 1 — Propósito | ¿El trabajo tiene problema, propósito y nivel? | Brief, prompt o estado de situación |
| Gate 2 — Ubicación | ¿Se sabe dónde vive en macro-meso-micro? | Mapa y cartapacio |
| Gate 3 — Perfil | ¿Se activó el perfil o modo Caleidoscopio correcto? | Matriz de perfiles |
| Gate 4 — Evidencia | ¿Existe evidencia mínima? | Documento, fuente, prototipo, ficha |
| Gate 5 — Ética y accesibilidad | ¿Se revisaron riesgos, derechos y DUA/POUR? | CHECKS |
| Gate 6 — Documentación | ¿Se actualizó README, bitácora, changelog o wiki? | Registro documental |
| Gate 7 — Cierre | ¿Queda continuidad clara? | Primer, decisión, archivo |

Estos Gates son preliminares. Deben formalizarse en:

```text
2026-05-04_Matriz_Gates_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

---

## 11. Riesgos estructurales

| Riesgo | Escala | Descripción | Salvaguarda |
|---|---|---|---|
| Reescritura V4.0.0 | Macro | Modificar la base en vez de abrir rama evolutiva | Mantener archivo histórico y D-A28 |
| Macrocarpetas nuevas | Macro | Inflar arquitectura sin decisión | Usar cartapacios existentes |
| Perfiles como silos | Meso | Que cada perfil opere separado | Activar Caleidoscopio cuando haya integración |
| Caleidoscopio decorativo | Meso | Sumar perfiles sin emergencia | Exigir evidencia integrada |
| Plantillas sin uso | Micro | Acumular moldes no aplicados | Vincular plantillas a Gates |
| Wiki tardía | Micro/Meso | Documentar para humanos al final | WIKI_SYNC obligatorio |
| Automatización prematura | Micro/Meso | Ejecutar agentes sin checks | No automatizar hasta completar CHECKS y Gates |
| Archivo incompleto | Macro/Micro | Perder versiones y contexto | Plan de archivo histórico |

---

## 12. Semáforo macro-meso-micro

| Escala | Estado | Acción inmediata |
|---|---|---|
| Macro | Verde funcional con cautela | Mantener V4.0.0 archivada y V4.1.0 como borrador |
| Meso | Verde con borde amarillo | Formalizar matriz N1–N4 y Gates |
| Micro | Amarillo operativo | Completar CHECKS, WIKI_SYNC y archivo |
| Automatización | Rojo preventivo | No activar todavía |

---

## 13. Decisión sugerida

```text
D-A31 — Crear el Mapa Macro–Meso–Micro del Framework Genérico V4.1.0-borrador para ubicar arquitectura madre, capas transversales, perfiles, Caleidoscopio, documentos operativos, gobernanza, wiki y archivo antes de avanzar hacia matrices N1–N4, Gates, CHECKS y WIKI_SYNC.
```

**Estado sugerido:** Aceptada para continuidad documental.  
**Tipo de cambio:** Ajuste menor de gobernanza arquitectónica.  
**Justificación:** Evita expansión desordenada y permite ubicar cada documento en su escala correcta.  
**Impacto:** Alto para navegación, control de cambios y preparación de estabilización.  
**Riesgo:** Bajo si se mantiene como mapa y no como reestructuración.  
**Documentos afectados:** README, índice maestro, manifest JSON, changelog, registro de decisiones, primer.  
**Versión afectada:** V4.1.0-borrador v0.1.  
**Recomendación:** Registrar D-A31 en la próxima actualización del Registro de Decisiones.

---

## 14. Próximo producto recomendado

Crear:

```text
2026-05-04_Matriz_N1_N4_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

### Propósito de la matriz N1–N4

La matriz debe definir qué es mínimo, operativo, avanzado e institucional en V4.1.0-borrador:

```text
N1 → mínimo viable documentado
N2 → operación controlada
N3 → integración avanzada con perfiles y Caleidoscopio
N4 → institucionalización, auditoría, automatización y transferencia
```

Esta matriz permitirá evitar dos extremos:

```text
Usar todo para todo.
No saber qué usar en proyectos pequeños.
```

---

## 15. Cierre

Este mapa deja claro que la V4.1.0-borrador ya tiene territorio, caminos y señales, pero todavía no debe declararse ciudad terminada. El siguiente paso es definir qué exige cada nivel N1–N4, para que el framework pueda escalar sin convertirse en una catedral con ruedas.

**Estado:** Listo para validación.  
**Siguiente acción:** Crear Matriz N1–N4 V4.1.0-borrador v0.1.
