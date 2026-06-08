# Tabla de Ubicación Documental — Framework Genérico V4.1.1

**Código documental:** 2026-06-07_Tabla_Ubicacion_Documental_Framework_Generico_V4_1_1_v0_2
**Fecha:** 2026-06-07
**Versión:** v0.2 (sustituye en alcance general a la v0-1 del 2026-05-28; no sustituye la tabla específica de Fase 2 PH-IT-AT)
**Estado:** Borrador operativo para validación
**Tipo de documento:** tabla de ubicación documental (general, por cartapacio raíz)
**Framework maestro estable:** Framework Genérico V4.1.0
**Repositorio operativo vivo:** Framework Genérico V4.1.1
**Ruta canónica recomendada:** `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/`
**Documento complementario:** `00_CONTROL_MAESTRO/Mapas_Repositorio/2026-06-07_Tree_Repositorio_Framework_Generico_V4_1_1_v0_1.md`
**Documentos relacionados:**
- `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/2026-05-28_Tabla_Ubicacion_Documental_Framework_Generico_V4_1_1_v0-1.md` (versión anterior, alcance general)
- `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/2026-06-05_Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_1.md` (alcance específico Fase 2 PH-IT-AT, vigente)
- `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md`
- `MAPA_COMPLETO_ESTRUCTURA.md`
**Requiere revisión humana:** sí
**Próxima acción:** validar con Ricardo y, si se aprueba, registrar referencia lógica en Índice Maestro y Enlaces_Espejo

---

## 1. Propósito

Esta tabla amplía la tabla general del 2026-05-28 (que cubría 6 cartapacios) para reflejar **los 23 cartapacios raíz** que existen hoy en el repositorio (`00_CONTROL_MAESTRO` … `21_WIKI_DOCUMENTACION_HUMANA`, más `99_ARCHIVO_HISTORICO`).

Su función es servir como instrumento de control para:

```text
1. ubicar cada tipo de documento o producto en su cartapacio raíz canónico;
2. señalar el sub-cartapacio exacto cuando ya existe uno especializado;
3. evitar la proliferación de sub-cartapacios inventados fuera del mapa;
4. distinguir entre "cartapacio aún vacío, listo para recibir" y "cartapacio con densidad activa";
5. servir de puerta de entrada antes de consultar tablas de alcance más específico (p. ej. Fase 2 PH-IT-AT).
```

Esta tabla **no duplica** documentos. Solo declara dónde deben vivir según el cartapacio raíz, y remite a la tabla de Fase 2 PH-IT-AT para el detalle fino del trabajo en curso.

---

## 2. Principio rector

```text
La tabla general ubica por cartapacio raíz.
La tabla de fase ubica por producto y por ID.
El mapa de repositorio retrata.
El árbol del repositorio enumera.
El índice maestro orienta.
La regla de colocación normaliza.
```

---

## 3. Tabla por cartapacio raíz (00–21, 99)

| Cartapacio raíz | Densidad actual | Uso declarado (según README del cartapacio) | Sub-cartapacios con contenido activo |
|---|---|---|---|
| `00_CONTROL_MAESTRO/` | alta | gobierno documental del repositorio: README maestro, TREE oficial, manifest, reglas, tablas, mapas, protocolos de cierre | `Mapas_Repositorio/`, `Tablas_Ubicacion_Documental/`, `Reglas_Colocacion_Documental/`, `Manifiestos/`, `Referecias_Base/`, `Protocolos_Cierre_Sesion/` |
| `01_FUNDAMENTO_FILOSOFICO/` | vacía (solo README) | fundamentos filosóficos, principios rectores y marco conceptual profundo | — |
| `02_ARQUITECTURA_CONCEPTUAL/` | media | arquitectura conceptual, perfiles transversales, mapas y Caleidoscopio | `Perfiles_Transversales/` (Artista, Caleidoscopio, Investigador, Programador Humanista), `Mapas/` |
| `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/` | media | metodologías, flujos, niveles y rutas de trabajo | `Niveles_N1_N4/`, `Protocolos_Trabajo_Humano_IA/`, `Secuencias_Fase_Por_Fase/` |
| `04_GOBERNANZA_ETICA_Y_RIESGOS/` | baja | decisiones, ética, derechos, accesibilidad, riesgos y salvaguardas | `Decisiones/` |
| `05_COMPETENCIAS_Y_PERFILES/` | muy alta | competencias, perfiles y criterios de formación | `Programador_Humanista/Perfil_Operativo_v3_0_0/` (núcleo de Fase 2), `Caleidoscopio/`, `Taxonomias/` |
| `06_PASTILLAS_MODULARES/` | vacía (solo README) | módulos, cápsulas, microcomponentes y recursos reutilizables | — |
| `07_PLANTILLAS_Y_MODELOS/` | media | plantillas y modelos reutilizables | `Plantillas_Documentos/`, `Plantillas_Proyectos/` |
| `08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/` | vacía (solo README) | cursos, programas, rutas y trayectorias formativas | — |
| `09_IA_AGENTES_Y_COPILOTOS/` | media (estructural) | agentes, skills, copilotos, workflows y sistemas humano-IA | `Sistema_Operativo_Agentes_Skills/` (Perfiles + Plantillas_Base) |
| `10_REPOSITORIOS_Y_FLUJO_TECNICO/` | baja | repositorios, GitHub, flujo técnico y versionado | `Comandos_Terminal/Scripts_Locales/` (scripts Python de creación de estructura) |
| `11_MULTIMODALIDAD_Y_PUBLICACION/` | vacía (solo README) | publicación multimodal, REA, AVAT, OVAT y formatos | — |
| `12_DISENO_INSTRUCCIONAL_UNIVERSAL/` | vacía (solo README) | DUA, POUR, diseño instruccional y accesibilidad educativa | — |
| `13_INVESTIGACION_Y_EVIDENCIA/` | vacía (solo README) | evidencia, fuentes, investigación, bibliometría y validación | — |
| `14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/` | vacía (solo README) | transferencia, comunidad, escalamiento y adopción | — |
| `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | media | Gates, CHECKS, evaluación, auditoría y calidad | `Gates_Checks_Evaluacion/`, `Rubricas_N3_N4/` |
| `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` | baja | seguridad, privacidad, datos, permisos y mitigaciones | `Evaluacion_Riesgos_Tecnicos/` |
| `17_INTERNACIONALIZACION_LOCALIZACION/` | vacía (solo README) | internacionalización, localización y adaptación contextual | — |
| `18_DOCUMENTACION_ACTIVA/` | muy alta | changelog, decisiones, bitácoras, primers y cierres | `Changelog/`, `Cierres_Reportes/Bitacoras/`, `Cierres_Reportes/Cierres_Sesion/`, `Cierres_Reportes/Compendios/`, `Primers_Continuidad/`, `Prompts_Activacion/`, `Registro_Decisiones/`, `Segundo_Cerebro/`, `WIKI_SYNC/` |
| `19_IMPLEMENTACION_Y_DESPLIEGUE/` | vacía (solo README) | implementación, despliegue, releases técnicos y operaciones | — |
| `20_MANTENIMIENTO_Y_EVOLUCION/` | baja | mantenimiento, evolución, roadmap y versiones futuras | `Planes_Evolucion/` |
| `21_WIKI_DOCUMENTACION_HUMANA/` | media | guías humanas, wiki, glosarios y documentación de transferencia | `Guias_Framework_Generico_V4_1_0/`, `Guias_Programador_Humanista/` |
| `99_ARCHIVO_HISTORICO/` | media (archivo, no activo) | archivo histórico, releases, versiones cerradas y exportaciones | `Ciclos_Completados/`, `Exportaciones_Finales/MD/`, `Exportaciones_Finales/JSON/`, `Exportaciones_Finales/ZIP/`, `Versiones_Cerradas/V4_0_0/`, `Releases/` |

---

## 4. Tabla por tipo de producto o artefacto → ubicación primaria

| Producto o artefacto | Ubicación primaria |
|---|---|
| Documento maestro estable | Raíz del repositorio y `00_CONTROL_MAESTRO/` |
| Manifest oficial | `00_CONTROL_MAESTRO/Manifiestos/` |
| TREE / árbol del repositorio | `00_CONTROL_MAESTRO/` (oficial) y `00_CONTROL_MAESTRO/Mapas_Repositorio/` (versiones fechadas) |
| Mapa de repositorio / mapa de estructura | `00_CONTROL_MAESTRO/Mapas_Repositorio/` |
| Tabla de ubicación documental | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` |
| Regla o protocolo de colocación documental | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` |
| Protocolo de cierre de sesión | `00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion/` |
| Prompt de activación | `18_DOCUMENTACION_ACTIVA/Prompts_Activacion/` |
| Perfil transversal (conceptual) | `02_ARQUITECTURA_CONCEPTUAL/Perfiles_Transversales/<Perfil>/` |
| Perfil operativo (formalización N3-N4) | `05_COMPETENCIAS_Y_PERFILES/<Perfil>/Perfil_Operativo_v3_0_0/` |
| Base de conocimiento de un perfil | `05_COMPETENCIAS_Y_PERFILES/<Perfil>/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` |
| Enlace espejo / referencia lógica | `05_COMPETENCIAS_Y_PERFILES/<Perfil>/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` |
| Documento metodológico / niveles N1-N4 | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/` |
| Secuencia fase por fase | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase/` |
| Decisión normativa (Decisión de Aprobación / D-A) | `04_GOBERNANZA_ETICA_Y_RIESGOS/Decisiones/` |
| Registro activo de decisión (sesión en curso) | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |
| Plantilla de documento / metadatos | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/` |
| Plantilla de proyecto | `07_PLANTILLAS_Y_MODELOS/Plantillas_Proyectos/` |
| Taxonomía / glosario | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` |
| Rúbrica N3-N4 | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Rubricas_N3_N4/` |
| Gate / CHECK / criterio de evaluación | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/` |
| Mapa de seguridad / riesgo técnico | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Evaluacion_Riesgos_Tecnicos/` |
| Plan de evolución / expansión | `20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/` |
| Documento técnico de Git/GitHub | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub/` |
| Script local (Python u otro) | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Comandos_Terminal/Scripts_Locales/` |
| Guía humana / wiki de perfil | `21_WIKI_DOCUMENTACION_HUMANA/Guias_<Perfil>/` |
| Changelog | `18_DOCUMENTACION_ACTIVA/Changelog/` |
| Bitácora de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |
| Cierre de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion/` |
| Compendio de estado / situación | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/` |
| Primer de continuidad | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` |
| Dashboard / Issue vivo / Riesgo vivo (Segundo Cerebro) | `18_DOCUMENTACION_ACTIVA/Segundo_Cerebro/` |
| Documento o ciclo cerrado / exportación final | `99_ARCHIVO_HISTORICO/` |

---

## 5. Regla de espejo

Cuando un documento pertenece funcionalmente a un cartapacio técnico o temático (00-21), pero también es relevante para un perfil operativo activo (p. ej. Programador Humanista en Fase 2), debe **vivir en su cartapacio canónico** y ser **enlazado** desde la carpeta `Enlaces_Espejo/` del perfil correspondiente. No se duplica el archivo; se registra la referencia lógica.

---

## 6. Cómo usar esta tabla junto con la tabla de Fase 2

```text
1. Si la pregunta es "¿en qué cartapacio raíz va este tipo de documento?" → usar esta tabla (secciones 3 y 4).
2. Si la pregunta es "¿cuál es la ruta exacta y el estado de ESTE producto de Fase 2 PH-IT-AT?" → usar
   2026-06-05_Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_1.md, que trabaja por ID (F2-BCC-xx-xxx).
3. Si la pregunta es "¿cómo se ve la estructura completa del repositorio hoy?" → usar
   2026-06-07_Tree_Repositorio_Framework_Generico_V4_1_1_v0_1.md.
```

---

## 7. Pendientes señalados por esta revisión

```text
1. Catorce cartapacios raíz siguen "vacíos" (solo README de apertura): 01, 06, 08, 11, 12, 13, 14, 17, 19,
   y parcialmente 04, 09, 10, 16, 20 — esto es esperado en esta etapa del Framework y no constituye deuda,
   pero debe revisarse antes de declarar cierre de fase si se espera contenido ahí.
2. Confirmar si esta tabla general v0.2 debe registrarse como referencia desde el Índice Maestro y
   Enlaces_Espejo, igual que su par de Fase 2.
3. Marcar la tabla v0-1 (2026-05-28) como versión de alcance reducido, sin retirarla (trazabilidad).
```
