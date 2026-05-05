# Plantillas Base — Agents, Skills, Workflows, Checks y Wiki Sync
## Framework Genérico V4.0.0 — Perfiles Transversales y Caleidoscopio

**Archivo:** `2026-05-04_Plantillas_Base_Agents_Skills_Workflows_Checks_WikiSync_Framework_Generico_V4_v0-1.md`  
**Fecha:** 2026-05-04  
**Versión:** v0.1  
**Estado:** Borrador operativo para validación  
**Nivel de activación:** N3 — Avanzado  
**Tipo de cambio:** Extensión modular operativa  
**Componentes relacionados:** Programador Humanista v0.2, Investigador Transdisciplinario v0.1, Artista Transdisciplinario v0.1, Caleidoscopio v0.1  
**Regla central:** Primero plantillas, luego uso piloto, luego carpeta, luego automatización.

---

## 0. Declaración de propósito

Este documento reúne las plantillas base para operar los perfiles transversales del Framework Genérico V4.0.0 mediante documentos tipo:

```text
AGENTS.md
SKILLS.md
WORKFLOWS.md
CHECKS.md
WIKI_SYNC.md
```

y sus variantes especializadas:

```text
RESEARCH_AGENTS.md
RESEARCH_SKILLS.md
INQUIRY_WORKFLOWS.md

ART_AGENTS.md
CREATIVE_SKILLS.md
CREATION_WORKFLOWS.md

KALEIDOSCOPE_AGENTS.md
KALEIDOSCOPE_SKILLS.md
INTEGRATION_WORKFLOWS.md
```

Estas plantillas no constituyen automatización todavía. Son estructuras humanas y humano-IA para definir roles, capacidades, límites, evidencias, verificaciones y actualización documental antes de activar sistemas agénticos más complejos.

---

## 1. Principios de uso

1. **Juicio humano primero.** Ningún agente decide cierre, publicación, despliegue, archivo o transferencia sin revisión humana.
2. **Documentación activa.** Cada flujo debe producir evidencia, registrar decisiones y dejar continuidad.
3. **No proliferación.** No se crea una plantilla nueva si una existente puede adaptarse con claridad.
4. **Trazabilidad.** Toda acción debe dejar rastro: entrada, proceso, salida, revisión y documento afectado.
5. **Accesibilidad por defecto.** Toda salida debe considerar DUA/POUR, lenguaje claro, formatos accesibles y metadatos mínimos.
6. **Ética operativa.** AIAS, IBATA, derechos, licencias, consentimiento, privacidad y riesgos no son anexos decorativos.
7. **Wiki integrada.** Si cambia el proceso, cambia la guía; si cambia la guía, cambia el índice; si cambia el índice, cambia el README.
8. **Agnosticismo de herramientas.** Las plantillas deben funcionar con distintas plataformas, IDE, modelos IA, repositorios y sistemas de documentación.

---

## 2. Ubicación sugerida sin crear macrocarpetas nuevas

```text
09_IA_AGENTES_Y_COPILOTOS/
└── 08_Sistema_Operativo_Agentes_Skills/
    ├── templates/
    │   ├── agents_template.md
    │   ├── skills_template.md
    │   ├── workflows_template.md
    │   ├── checks_template.md
    │   └── wiki_sync_template.md
    └── perfiles/
        ├── programador_humanista/
        ├── investigador_transdisciplinario/
        ├── artista_transdisciplinario/
        └── caleidoscopio/
```

Ubicaciones wiki relacionadas:

```text
21_WIKI_DOCUMENTACION_HUMANA/
├── 09_Guias_Programador_Humanista/
├── 10_Guias_Investigador_Transdisciplinario/
├── 11_Guias_Artista_Transdisciplinario/
└── 12_Guias_Caleidoscopio/
```

Ubicaciones de documentación activa:

```text
18_DOCUMENTACION_ACTIVA/
├── Bitacora_Maestra.md
├── Changelog.md
├── Decisiones.md
├── Cierres_Parciales/
└── Prompts_de_Sesion/
```

---

# PARTE I — Plantilla base AGENTS.md

## 3. Propósito de AGENTS.md

`AGENTS.md` define quién o qué actúa dentro de un proyecto, con qué propósito, bajo qué límites, con qué destrezas autorizadas, qué evidencias debe producir y qué revisión humana requiere.

No debe ser una lista de personajes. Debe ser un mapa de responsabilidades verificables.

---

## 4. Plantilla general AGENTS.md

```markdown
# AGENTS.md
## [Nombre del proyecto o perfil]

**Framework:** Framework Genérico V4.0.0  
**Perfil activo:** [Programador Humanista / Investigador Transdisciplinario / Artista Transdisciplinario / Caleidoscopio]  
**Versión:** [v0.1]  
**Fecha:** [AAAA-MM-DD]  
**Nivel de activación:** [N1 / N2 / N3 / N4]  
**Responsable humano:** [Nombre / rol]  
**Estado:** [borrador / piloto / validado / archivado]

---

## 1. Propósito

Este archivo define los agentes humanos, IA o híbridos autorizados para participar en el proyecto, sus responsabilidades, límites, evidencias esperadas y relación con skills, workflows, checks, Gates, documentación y wiki.

---

## 2. Reglas generales de agentes

1. Ningún agente sustituye el juicio humano.
2. Ningún agente cierra decisiones críticas sin revisión.
3. Ningún agente accede, procesa o publica datos sensibles sin autorización.
4. Todo agente debe producir evidencia trazable.
5. Todo agente debe operar dentro del nivel N1-N4 aprobado.
6. Todo agente debe respetar AIAS, IBATA, DUA/POUR, derechos, licencias y documentación activa.

---

## 3. Tabla de agentes activos

| ID | Nombre | Tipo | Rol | Nivel | Skills autorizadas | Checks obligatorios | Revisión humana |
|---|---|---|---|---|---|---|---|
| agent_001 | [Nombre] | humano / IA / híbrido | [Rol] | N1-N4 | [skills] | [checks] | sí / no |

---

## 4. Ficha de agente

### Agent ID

**Nombre:**  
**ID:**  
**Tipo:** humano / IA / híbrido  
**Perfil relacionado:**  
**Rol:**  
**Propósito:**  
**Alcance:**  
**No debe hacer:**  
**Nivel de autonomía:** bajo / medio / alto / supervisado  
**Interacción humana requerida:**  
**Skills autorizadas:**  
**Skills prohibidas o restringidas:**  
**Entradas necesarias:**  
**Salidas esperadas:**  
**Checks obligatorios:**  
**Gates relacionados:**  
**Evidencias:**  
**Documentos que puede actualizar:**  
**Documentos que no puede modificar:**  
**Riesgos:**  
**Salvaguardas:**  
**Relación con AIAS:**  
**Relación con IBATA:**  
**Relación con DUA/POUR:**  
**Relación con derechos/licencias:**  
**Relación con Wiki:**  
**Versión:**  
**Estado:** propuesta / piloto / activo / archivado  

---

## 5. Matriz agente-skill-check

| Agente | Skill | Workflow asociado | Check | Evidencia | Gate |
|---|---|---|---|---|---|
| | | | | | |

---

## 6. Bitácora de activación de agentes

| Fecha | Agente | Tarea | Entrada | Salida | Revisión humana | Documento actualizado |
|---|---|---|---|---|---|---|
| | | | | | | |

---

## 7. Riesgos y límites

| Riesgo | Agente relacionado | Descripción | Probabilidad | Impacto | Salvaguarda |
|---|---|---|---|---|---|
| | | | baja/media/alta | bajo/medio/alto | |

---

## 8. Cierre de agentes

Antes de cerrar una sesión:

- [ ] ¿Se registró qué agentes se activaron?
- [ ] ¿Se documentaron entradas y salidas?
- [ ] ¿Se aplicaron checks obligatorios?
- [ ] ¿Hubo revisión humana donde correspondía?
- [ ] ¿Se actualizaron documentos o wiki?
- [ ] ¿Quedó continuidad clara?

```

---

## 5. Variantes mínimas por perfil

### 5.1 Programador Humanista — AGENTS.md

Agentes sugeridos:

```text
orquestador_humano_ia
arquitecto_sistemas
disenador_experiencia
programador_humanista
revisor_codigo
tester_validador
revisor_seguridad
documentalista_tecnico
curador_wiki
gestor_release_mantenimiento
```

### 5.2 Investigador Transdisciplinario — RESEARCH_AGENTS.md

Agentes sugeridos:

```text
orquestador_humano_ia
investigador_transdisciplinario
curador_de_fuentes
lector_critico
analista_bibliometrico
sintetizador_conceptual
revisor_metodologico
revisor_etico
gestor_de_metadatos
documentalista_multimodal
disenador_rea
publicador_repositorio
archivista_digital
```

### 5.3 Artista Transdisciplinario — ART_AGENTS.md

Agentes sugeridos:

```text
orquestador_humano_ia
artista_transdisciplinario
curador_cultural
documentalista_multimodal
revisor_derechos_culturales
mediador_comunitario
disenador_experiencia_estetica
gestor_colecciones
editor_multimodal
revisor_accesibilidad_estetica
archivista_digital
```

### 5.4 Caleidoscopio — KALEIDOSCOPE_AGENTS.md

Agentes sugeridos:

```text
orquestador_caleidoscopio
integrador_transdisciplinario
traductor_lenguajes
revisor_epistemologico
revisor_tecnico
revisor_estetico_cultural
revisor_etico_socioambiental
gestor_evidencias_transdisciplinarias
publicador_multimodal
curador_wiki_caleidoscopio
archivista_transferencia
```

---

# PARTE II — Plantilla base SKILLS.md

## 6. Propósito de SKILLS.md

`SKILLS.md` define qué capacidades pueden activarse, cuándo se activan, cómo se ejecutan, qué evidencia producen, qué riesgos introducen y qué documentos deben actualizar.

Una skill no es una habilidad abstracta. Es una capacidad operativa con procedimiento, validación y evidencia.

---

## 7. Plantilla general SKILLS.md

```markdown
# SKILLS.md
## [Nombre del proyecto o perfil]

**Framework:** Framework Genérico V4.0.0  
**Perfil activo:** [Programador Humanista / Investigador Transdisciplinario / Artista Transdisciplinario / Caleidoscopio]  
**Versión:** [v0.1]  
**Fecha:** [AAAA-MM-DD]  
**Nivel de activación:** [N1 / N2 / N3 / N4]  
**Estado:** [borrador / piloto / validado / archivado]

---

## 1. Propósito

Este archivo registra las destrezas necesarias para operar el perfil o proyecto, incluyendo procedimiento, herramientas posibles, riesgos, validaciones, evidencias y documentos relacionados.

---

## 2. Tabla de skills activas

| ID | Skill | Nivel | Perfil | Cuándo se activa | Evidencia | Checks |
|---|---|---|---|---|---|---|
| skill_001 | [Nombre] | N1-N4 | [perfil] | [condición] | [evidencia] | [checks] |

---

## 3. Ficha de skill

### Skill ID

**Nombre:**  
**ID:**  
**Perfil relacionado:**  
**Nivel:** N1 / N2 / N3 / N4  
**Propósito:**  
**Cuándo se activa:**  
**Entradas necesarias:**  
**Procedimiento básico:**  
1.  
2.  
3.  
4.  
5.  

**Herramientas posibles:**  
**Buenas prácticas:**  
**Errores frecuentes:**  
**Riesgos:**  
**Salvaguardas:**  
**Validaciones:**  
**Evidencias:**  
**Documentos que actualiza:**  
**Relación con AIAS:**  
**Relación con IBATA:**  
**Relación con DUA/POUR:**  
**Relación con derechos/licencias:**  
**Relación con Wiki:**  
**Gates relacionados:**  
**Versión:**  
**Estado:** propuesta / piloto / activa / archivada  

---

## 4. Matriz skill-evidencia

| Skill | Evidencia mínima | Evidencia recomendada | Evidencia N4 |
|---|---|---|---|
| | | | |

---

## 5. Matriz skill-riesgo

| Skill | Riesgo principal | Salvaguarda | Check relacionado |
|---|---|---|---|
| | | | |

---

## 6. Cierre de skills

Antes de cerrar una sesión:

- [ ] ¿Se identificaron las skills activadas?
- [ ] ¿Se documentó la evidencia producida?
- [ ] ¿Se revisaron riesgos asociados?
- [ ] ¿Se actualizaron documentos relacionados?
- [ ] ¿Se registraron aprendizajes o ajustes?

```

---

## 8. Familias de skills por perfil

### 8.1 Programador Humanista

```text
pensamiento_computacional
problematizacion_tecnica
requisitos
arquitectura_software
diseno_ux
programacion
terminal_ide
git_versionado
ia_asistida_desarrollo
testing_validacion
debugging
ciberseguridad_basica
implementacion
despliegue
mantenimiento
documentacion_tecnica
wiki_tecnica
archivo_release
transferencia_tecnica
```

### 8.2 Investigador Transdisciplinario

```text
problematizacion_investigativa
contextualizacion
apropiacion_conceptual
marcos_teoricos
marcos_metodologicos
indagacion_guiada
gestion_fuentes
curaduria_colecciones
bibliometria_clasica
bibliometria_operacional
bibliometria_exploratoria
ia_investigacion
sistemas_agenticos_investigacion
analisis_evidencia
sintesis_conceptual
validacion_epistemologica
publicacion_multimodal
produccion_rea
archivo_investigativo
transferencia_conocimiento
```

### 8.3 Artista Transdisciplinario

```text
escucha_contextual
memoria_territorio
investigacion_creacion
conceptualizacion_artistica
materialidades
prototipado_creativo
curaduria
storytelling_transdisciplinario
documentacion_multimodal
derechos_culturales
licencias_creativas
accesibilidad_estetica
exhibicion_publicacion
archivo_obra
mediacion_comunitaria
transferencia_cultural
```

### 8.4 Caleidoscopio

```text
orquestacion_transdisciplinaria
pensamiento_sistemico
integracion_epistemologica
diseno_combinaciones_c1_c7
traduccion_lenguajes
prototipado_emergente
gobernanza_humano_maquina
curaduria_evidencias
evaluacion_multidimensional
publicacion_multimodal_integrada
produccion_rea_integrada
archivo_complejo
transferencia_escalamiento
```

---

# PARTE III — Plantilla base WORKFLOWS.md

## 9. Propósito de WORKFLOWS.md

`WORKFLOWS.md` define cómo se encadenan agentes, skills, evidencias y checks para producir resultados verificables.

Un workflow no debe ser una lista de tareas. Debe ser una ruta con entradas, decisiones, salidas, Gates y documentación.

---

## 10. Plantilla general WORKFLOWS.md

```markdown
# WORKFLOWS.md
## [Nombre del proyecto o perfil]

**Framework:** Framework Genérico V4.0.0  
**Perfil activo:** [perfil]  
**Versión:** [v0.1]  
**Fecha:** [AAAA-MM-DD]  
**Nivel de activación:** [N1 / N2 / N3 / N4]  
**Estado:** [borrador / piloto / validado / archivado]

---

## 1. Propósito

Este archivo define los flujos de trabajo autorizados para producir, revisar, validar, documentar, cerrar y transferir productos dentro del proyecto.

---

## 2. Tabla de workflows

| ID | Workflow | Perfil | Nivel | Entrada | Salida | Gate principal |
|---|---|---|---|---|---|---|
| workflow_001 | [Nombre] | [perfil] | N1-N4 | [entrada] | [salida] | [gate] |

---

## 3. Ficha de workflow

### Workflow ID

**Nombre:**  
**ID:**  
**Perfil relacionado:**  
**Modo Caleidoscopio si aplica:** C1 / C2 / C3 / C4 / C5 / C6 / C7 / no aplica  
**Nivel:** N1 / N2 / N3 / N4  
**Propósito:**  
**Cuándo se activa:**  
**Entrada requerida:**  
**Agentes participantes:**  
**Skills activadas:**  
**Documentos base:**  
**Procedimiento:**  
1. Definir propósito.  
2. Revisar documentos base.  
3. Activar agentes autorizados.  
4. Ejecutar skills necesarias.  
5. Producir evidencia mínima.  
6. Aplicar checks.  
7. Pasar Gate o iterar.  
8. Actualizar documentación.  
9. Actualizar Wiki si aplica.  
10. Registrar cierre y continuidad.  

**Salida esperada:**  
**Evidencia mínima:**  
**Checks obligatorios:**  
**Gates relacionados:**  
**Riesgos:**  
**Salvaguardas:**  
**Documentos a actualizar:**  
**Wiki afectada:**  
**Criterios de cierre:**  
**Versión:**  
**Estado:** propuesta / piloto / activo / archivado  

---

## 4. Matriz workflow-agente-skill

| Workflow | Agente | Skill | Evidencia | Check | Documento afectado |
|---|---|---|---|---|---|
| | | | | | |

---

## 5. Bitácora de workflows ejecutados

| Fecha | Workflow | Nivel | Resultado | Evidencia | Gate | Continuidad |
|---|---|---|---|---|---|---|
| | | | | | | |

```

---

## 11. Workflows maestros sugeridos

### 11.1 Programador Humanista

```text
workflow_problema_a_requisitos
workflow_arquitectura_adr
workflow_diseno_a_prototipo
workflow_programacion_segura
workflow_testing_validacion
workflow_release_despliegue
workflow_mantenimiento_documentado
workflow_wiki_tecnica
workflow_cierre_archivo_transferencia
```

### 11.2 Investigador Transdisciplinario

```text
workflow_problematizacion_indagacion
workflow_revision_fuentes
workflow_bibliografia_anotada
workflow_bibliometria_exploratoria
workflow_marco_conceptual
workflow_metodologia_evidencia
workflow_sintesis_validacion
workflow_publicacion_multimodal_rea
workflow_archivo_investigativo
```

### 11.3 Artista Transdisciplinario

```text
workflow_escucha_contexto_memoria
workflow_investigacion_creacion
workflow_concepto_a_prototipo
workflow_creacion_curaduria
workflow_derechos_licencias_accesibilidad
workflow_exhibicion_publicacion
workflow_archivo_obra
workflow_mediacion_transferencia
```

### 11.4 Caleidoscopio

```text
workflow_activacion_problema_complejo
workflow_seleccion_c1_c7
workflow_mapeo_saberes_requisitos_materialidades
workflow_fundamentos_integrados
workflow_prototipado_emergente
workflow_validacion_multidimensional
workflow_publicacion_multimodal_integrada
workflow_archivo_transferencia_escalamiento
```

---

# PARTE IV — Plantilla base CHECKS.md

## 12. Propósito de CHECKS.md

`CHECKS.md` define las verificaciones mínimas antes de pasar de una fase a otra, publicar, desplegar, transferir o cerrar.

Los checks no son una aduana burocrática. Son el freno amable que evita que el tren llegue a la estación sin rieles.

---

## 13. Plantilla general CHECKS.md

```markdown
# CHECKS.md
## [Nombre del proyecto o perfil]

**Framework:** Framework Genérico V4.0.0  
**Perfil activo:** [perfil]  
**Versión:** [v0.1]  
**Fecha:** [AAAA-MM-DD]  
**Nivel de activación:** [N1 / N2 / N3 / N4]  
**Estado:** [borrador / piloto / validado / archivado]

---

## 1. Propósito

Este archivo define las verificaciones obligatorias para asegurar calidad, ética, accesibilidad, trazabilidad, derechos, seguridad, evaluación y continuidad.

---

## 2. Tabla de checks

| ID | Check | Perfil | Nivel | Cuándo se aplica | Evidencia requerida | Resultado |
|---|---|---|---|---|---|---|
| check_001 | [Nombre] | [perfil] | N1-N4 | [momento] | [evidencia] | pasa / no pasa / iterar |

---

## 3. Ficha de check

### Check ID

**Nombre:**  
**ID:**  
**Perfil relacionado:**  
**Nivel:** N1 / N2 / N3 / N4  
**Propósito:**  
**Cuándo se aplica:**  
**Pregunta central:**  
**Criterios:**  
- [ ]  
- [ ]  
- [ ]  

**Evidencia requerida:**  
**Resultado posible:** pasa / no pasa / iterar / requiere decisión humana  
**Riesgos si se omite:**  
**Responsable de revisión:**  
**Documento que debe actualizarse:**  
**Gate asociado:**  
**Versión:**  
**Estado:** propuesta / piloto / activo / archivado  

---

## 4. Checks transversales mínimos

### Check de propósito

- [ ] ¿Está claro el problema o propósito?
- [ ] ¿Está definido el contexto?
- [ ] ¿Está identificado el nivel N1-N4?
- [ ] ¿Existe evidencia mínima esperada?

### Check de IA responsable

- [ ] ¿Se documentó el uso de IA?
- [ ] ¿Hubo validación humana?
- [ ] ¿Se registraron prompts o decisiones relevantes?
- [ ] ¿Se evitó delegar juicio crítico a la IA?

### Check de ética y riesgos

- [ ] ¿Se identificaron riesgos humanos, técnicos, culturales, ambientales o institucionales?
- [ ] ¿Existen salvaguardas?
- [ ] ¿Se revisó consentimiento si aplica?
- [ ] ¿Se evitó extractivismo epistémico o cultural?

### Check de accesibilidad

- [ ] ¿El producto usa estructura clara?
- [ ] ¿Incluye texto alternativo si hay imágenes?
- [ ] ¿Incluye subtítulos o transcripción si hay audio/video?
- [ ] ¿Tiene versión ligera o reusable si procede?
- [ ] ¿Cumple criterios DUA/POUR mínimos?

### Check de derechos y licencias

- [ ] ¿Está clara la autoría?
- [ ] ¿Hay licencia definida?
- [ ] ¿Se revisaron restricciones de uso?
- [ ] ¿Se documentó uso de IA o materiales externos?
- [ ] ¿Se indicó citación recomendada si aplica?

### Check de documentación

- [ ] ¿Se actualizó README o documento equivalente?
- [ ] ¿Se actualizó bitácora?
- [ ] ¿Se registraron decisiones?
- [ ] ¿Se actualizó changelog si hubo cambio?
- [ ] ¿Se dejó continuidad?

### Check de Wiki

- [ ] ¿Cambió algún proceso?
- [ ] ¿Cambió alguna guía?
- [ ] ¿Cambió algún índice?
- [ ] ¿Se actualizó WIKI_SYNC?
- [ ] ¿La wiki sigue alineada con documentación oficial?

### Check de cierre

- [ ] ¿Se produjo evidencia mínima?
- [ ] ¿Se aplicaron checks necesarios?
- [ ] ¿Se registró decisión o pendiente?
- [ ] ¿Se definió próxima acción?
- [ ] ¿Se archivó o versionó lo necesario?

```

---

## 14. Checks especializados por perfil

### 14.1 Programador Humanista

```text
check_requisitos_claros
check_arquitectura_documentada
check_no_secretos
check_dependencias
check_tests_minimos
check_codigo_legible
check_release_notes
check_documentacion_tecnica
```

### 14.2 Investigador Transdisciplinario

```text
check_pregunta_investigable
check_fuentes_criterios
check_evidencia_interpretacion
check_metodologia_coherente
check_bibliometria_con_proposito
check_validacion_epistemologica
check_publicacion_multimodal
check_rea
```

### 14.3 Artista Transdisciplinario

```text
check_contexto_memoria
check_derechos_culturales
check_consentimiento_si_aplica
check_statement_artistico
check_accesibilidad_estetica
check_curaduria
check_metadatos_obra
check_archivo_creativo
```

### 14.4 Caleidoscopio

```text
check_necesidad_integracion
check_modo_c1_c7
check_roles_perfiles
check_fundamentos_integrados
check_metodologias_compatibles
check_evidencia_transdisciplinaria
check_validacion_multidimensional
check_transferencia_archivo
```

---

# PARTE V — Plantilla base WIKI_SYNC.md

## 15. Propósito de WIKI_SYNC.md

`WIKI_SYNC.md` define qué documentación humana debe actualizarse cuando cambian procesos, perfiles, workflows, agentes, skills, checks, decisiones, productos o criterios de uso.

La wiki no es sobremesa. Es la cocina donde el conocimiento se vuelve reusable.

---

## 16. Plantilla general WIKI_SYNC.md

```markdown
# WIKI_SYNC.md
## [Nombre del proyecto o perfil]

**Framework:** Framework Genérico V4.0.0  
**Perfil activo:** [perfil]  
**Versión:** [v0.1]  
**Fecha:** [AAAA-MM-DD]  
**Nivel de activación:** [N1 / N2 / N3 / N4]  
**Estado:** [borrador / piloto / validado / archivado]

---

## 1. Propósito

Este archivo identifica qué páginas, guías, glosarios, índices o materiales educativos de la Wiki humana deben actualizarse para mantener coherencia con la documentación oficial.

---

## 2. Regla de sincronización

> Si cambia el proceso, cambia la guía; si cambia la guía, cambia el índice; si cambia el índice, cambia el README; si cambia el README, cambia el primer de continuidad.

---

## 3. Tabla de sincronización

| Cambio detectado | Documento oficial afectado | Página wiki afectada | Tipo de actualización | Prioridad | Estado |
|---|---|---|---|---|---|
| | | | crear / actualizar / revisar / archivar | alta/media/baja | pendiente/en progreso/completo |

---

## 4. Ficha de actualización wiki

### Wiki Update ID

**ID:**  
**Fecha:**  
**Cambio origen:**  
**Documento oficial afectado:**  
**Página wiki afectada:**  
**Tipo de cambio:** ajuste menor / extensión modular / metodológico / gobernanza / estructural  
**Resumen del cambio:**  
**Justificación:**  
**Impacto en usuarios:**  
**Riesgo si no se actualiza:**  
**Acción requerida:**  
**Responsable:**  
**Fecha sugerida de revisión:**  
**Estado:** pendiente / en progreso / validado / archivado  

---

## 5. Checklist de calidad wiki

- [ ] Título claro.
- [ ] Propósito visible.
- [ ] Lenguaje humano, no solo técnico.
- [ ] Estructura navegable.
- [ ] Ejemplos cuando aplique.
- [ ] Glosario o términos clave.
- [ ] Accesibilidad básica.
- [ ] Enlace a documento oficial.
- [ ] Fecha y versión.
- [ ] Próximo paso o uso sugerido.

---

## 6. Registro de sincronización

| Fecha | Cambio | Página wiki | Documento oficial | Responsable | Estado |
|---|---|---|---|---|---|
| | | | | | |

```

---

## 17. Páginas wiki sugeridas por perfil

### 17.1 Programador Humanista

```text
Home_Programador_Humanista.md
Guia_Sistema_Agents_Skills.md
Guia_Arquitectura_Diseno_Programacion.md
Guia_Uso_IA_en_Flujo_Desarrollo.md
Guia_Terminal_IDE_Git.md
Guia_Testing_Validacion_Despliegue.md
Glosario_Programador_Humanista.md
Actualizaciones_Documentacion_Oficial.md
```

### 17.2 Investigador Transdisciplinario

```text
Home_Investigador_Transdisciplinario.md
Guia_Problematizacion_Indagacion.md
Guia_Fuentes_Colecciones_Bibliometria.md
Guia_IA_en_Investigacion_Transdisciplinaria.md
Guia_Diseno_Instruccional_AVAT.md
Guia_Publicaciones_Multimodales_REA.md
Guia_Sensibilizacion_Social_Ambiental_Cultural.md
Glosario_Investigador_Transdisciplinario.md
Actualizaciones_Documentacion_Oficial.md
```

### 17.3 Artista Transdisciplinario

```text
Home_Artista_Transdisciplinario.md
Guia_Investigacion_Creacion.md
Guia_Memoria_Territorio_Materialidades.md
Guia_Curaduria_Documentacion_Multimodal.md
Guia_Derechos_Culturales_Licencias.md
Guia_Accesibilidad_Estetica.md
Guia_Exhibicion_Publicacion_Archivo.md
Glosario_Artista_Transdisciplinario.md
Actualizaciones_Documentacion_Oficial.md
```

### 17.4 Caleidoscopio

```text
Home_Caleidoscopio.md
Guia_Modos_C1_C7.md
Guia_Integracion_Perfiles.md
Guia_Prototipado_Emergente.md
Guia_Evaluacion_Multidimensional.md
Guia_Publicacion_Multimodal_Integrada.md
Guia_Archivo_Transferencia_Escalamiento.md
Glosario_Caleidoscopio.md
Actualizaciones_Documentacion_Oficial.md
```

---

# PARTE VI — Plantillas especializadas por perfil

## 18. Programador Humanista — paquete mínimo

```markdown
# AGENTS.md — Programador Humanista

## Agentes activos

| ID | Agente | Rol | Skills | Evidencia |
|---|---|---|---|---|
| ph_orquestador | Orquestador Humano-IA | Ubicar fase, propósito y continuidad | problematización, documentación | brief, cierre |
| ph_arquitecto | Arquitecto de Sistemas | Decisiones estructurales | arquitectura_software | ADR |
| ph_programador | Programador Humanista | Implementación responsable | programación, testing, seguridad | código, tests |
| ph_documentalista | Documentalista Técnico | Documentar y transferir | markdown, wiki | README, wiki |

## Checks mínimos

- propósito definido;
- requisitos claros;
- arquitectura suficiente;
- no secretos;
- pruebas mínimas;
- documentación actualizada;
- cierre con continuidad.
```

```markdown
# SKILLS.md — Programador Humanista

| Skill | Nivel | Evidencia |
|---|---|---|
| requisitos | N1-N4 | lista RF/RNF |
| arquitectura_software | N2-N4 | ADR |
| programacion_segura | N1-N4 | código revisado |
| testing_validacion | N2-N4 | reporte de pruebas |
| documentacion_tecnica | N1-N4 | README / wiki |
```

---

## 19. Investigador Transdisciplinario — paquete mínimo

```markdown
# RESEARCH_AGENTS.md — Investigador Transdisciplinario

## Agentes activos

| ID | Agente | Rol | Skills | Evidencia |
|---|---|---|---|---|
| it_orquestador | Orquestador Humano-IA | Ubicar pregunta, método y evidencia | problematización | brief investigativo |
| it_curador | Curador de Fuentes | Seleccionar y registrar fuentes | gestión_fuentes | SOURCE_REGISTRY |
| it_analista | Analista | Interpretar evidencia | análisis_evidencia | matriz de análisis |
| it_sintetizador | Sintetizador Conceptual | Integrar hallazgos | síntesis | síntesis validada |
| it_publicador | Publicador REA | Preparar publicación abierta | publicación_multimodal | ficha multimodal |
```

```markdown
# RESEARCH_SKILLS.md — Investigador Transdisciplinario

| Skill | Nivel | Evidencia |
|---|---|---|
| problematizacion_investigativa | N1-N4 | pregunta guía |
| gestión_fuentes | N1-N4 | matriz de fuentes |
| bibliometría_exploratoria | N3-N4 | mapa temático |
| síntesis_conceptual | N1-N4 | hallazgos |
| publicación_multimodal | N3-N4 | metadatos/licencia |
```

---

## 20. Artista Transdisciplinario — paquete mínimo

```markdown
# ART_AGENTS.md — Artista Transdisciplinario

## Agentes activos

| ID | Agente | Rol | Skills | Evidencia |
|---|---|---|---|---|
| at_orquestador | Orquestador Humano-IA | Ubicar contexto y propósito creativo | escucha_contextual | brief creativo |
| at_artista | Artista Transdisciplinario | Crear y reflexionar | investigación_creación | prototipo / obra |
| at_curador | Curador Cultural | Organizar sentido y exposición | curaduría | statement curatorial |
| at_derechos | Revisor Derechos | Revisar licencias y cultura | derechos_culturales | ficha derechos |
| at_documentalista | Documentalista Multimodal | Registrar obra y proceso | documentación_multimodal | ficha obra |
```

```markdown
# CREATIVE_SKILLS.md — Artista Transdisciplinario

| Skill | Nivel | Evidencia |
|---|---|---|
| escucha_contextual | N1-N4 | mapa memoria/contexto |
| investigación_creación | N2-N4 | diario de proceso |
| prototipado_creativo | N1-N4 | boceto / demo |
| curaduría | N2-N4 | statement |
| archivo_obra | N1-N4 | ficha técnica |
```

---

## 21. Caleidoscopio — paquete mínimo

```markdown
# KALEIDOSCOPE_AGENTS.md — Caleidoscopio

## Agentes activos

| ID | Agente | Rol | Skills | Evidencia |
|---|---|---|---|---|
| cal_orquestador | Orquestador Caleidoscopio | Seleccionar modo C1-C7 y coordinar perfiles | diseño_combinaciones | matriz C1-C7 |
| cal_integrador | Integrador Transdisciplinario | Conectar fundamentos, métodos y productos | integración_epistemológica | marco integrado |
| cal_traductor | Traductor de Lenguajes | Conectar código, teoría, obra y comunidad | traducción_lenguajes | glosario puente |
| cal_revisor | Revisor Multidimensional | Validar técnica, ética, estética y evidencia | evaluación_multidimensional | informe validación |
| cal_archivista | Archivista Transferencia | Preparar archivo y continuidad | archivo_complejo | manifest / primer |
```

```markdown
# KALEIDOSCOPE_SKILLS.md — Caleidoscopio

| Skill | Nivel | Evidencia |
|---|---|---|
| diseño_combinaciones_c1_c7 | N1-N4 | matriz de combinación |
| integración_epistemológica | N2-N4 | mapa de saberes |
| prototipado_emergente | N2-N4 | MVP / obra / recurso |
| evaluación_multidimensional | N3-N4 | rúbrica integrada |
| transferencia_escalamiento | N3-N4 | plan de continuidad |
```

---

# PARTE VII — Ejemplo de workflow integrado Caleidoscopio

## 22. INTEGRATION_WORKFLOWS.md — ejemplo C4 Integral

```markdown
# Workflow C4 — Integral
## Programador + Investigador + Artista

**ID:** workflow_c4_integral  
**Modo:** C4 — Integral  
**Nivel:** N3  
**Propósito:** Integrar investigación, creación y programación para producir un recurso, sistema o experiencia emergente documentada.

---

## Entrada

- Problema complejo.
- Contexto social, cultural, ambiental, técnico o institucional.
- Producto posible: AVAT, REA multimodal, archivo vivo, app, galería o repositorio.

---

## Agentes

- Orquestador Caleidoscopio.
- Investigador Transdisciplinario.
- Artista Transdisciplinario.
- Programador Humanista.
- Revisor ético.
- Revisor accesibilidad.
- Documentalista.
- Archivista.

---

## Skills

- problematización;
- mapeo de saberes;
- investigación-creación;
- arquitectura de sistema;
- prototipado emergente;
- evaluación multidimensional;
- documentación multimodal;
- derechos y licencias;
- wiki_sync;
- archivo complejo.

---

## Procedimiento

1. Definir problema complejo.
2. Confirmar que requiere integración y no un solo perfil.
3. Seleccionar modo C4.
4. Mapear contexto, saberes, fuentes, materialidades y requisitos.
5. Definir fundamentos teóricos, técnicos y estéticos.
6. Diseñar metodología integrada.
7. Crear prototipo emergente.
8. Validar técnica, epistemológica, estética, ética y accesiblemente.
9. Iterar con retroalimentación.
10. Preparar publicación multimodal o REA.
11. Actualizar documentación y wiki.
12. Archivar versiones, fuentes, código, obras y metadatos.
13. Cerrar con primer de continuidad.

---

## Evidencias mínimas

- Brief complejo.
- Matriz C1-C7.
- Mapa de saberes/requisitos/materialidades.
- Prototipo.
- Rúbrica de validación integrada.
- Ficha multimodal.
- WIKI_SYNC.
- Changelog.
- Registro de decisiones.
- Primer de continuidad.

---

## Gates

1. Propósito.
2. Contexto.
3. Combinación.
4. Fundamentos.
5. Metodología.
6. Prototipo.
7. Validación.
8. Publicación.
9. Documentación.
10. Archivo y continuidad.

```

---

# PARTE VIII — Criterios para pasar de plantilla a automatización

## 23. Protocolo de madurez

Antes de automatizar un agente, workflow o check, debe cumplirse:

| Criterio | Requisito |
|---|---|
| Propósito | Debe existir problema claro que justifique automatización. |
| Uso humano | La plantilla debe haberse usado manualmente al menos en piloto. |
| Evidencia | Debe estar claro qué produce y cómo se valida. |
| Riesgos | Deben estar identificados riesgos técnicos, éticos y documentales. |
| Revisión humana | Debe quedar definido dónde interviene una persona. |
| Documentación | Deben existir README, WIKI_SYNC y changelog. |
| Versión | Debe indicarse versión afectada. |
| Reversibilidad | Debe existir forma de pausar, corregir o desactivar. |

Regla:

```text
No automatizar una confusión.
Primero estabilizar el criterio.
Luego diseñar el flujo.
Después automatizar lo repetible.
```

---

## 24. Decisión recomendada

```text
D-A27 — Crear las Plantillas Base Agents, Skills, Workflows, Checks y Wiki Sync v0.1 como extensión modular operativa para activar los Perfiles Transversales y Caleidoscopio sin automatizar prematuramente ni alterar la macroarquitectura del Framework Genérico V4.0.0.
```

**Estado sugerido:** Propuesta para validación.  
**Tipo de cambio:** Extensión modular operativa.  
**Justificación:** Permite operar perfiles con roles, destrezas, flujos, verificaciones y actualización documental antes de pasar a carpetas o automatización.  
**Impacto:** Mejora trazabilidad, continuidad, evaluación, wiki y transferencia.  
**Riesgo:** Medio-bajo; puede inflar documentación si se crean demasiadas variantes.  
**Documentos afectados:** Paquete Consolidado, Matriz Comparativa, Matriz C1-C7, Registro de Decisiones, Changelog, Primer, WIKI_SYNC.  
**Versión afectada:** Perfiles Transversales y Caleidoscopio v0.1 hacia v0.2 de trabajo.  
**Recomendación de continuidad:** Validar estas plantillas y luego actualizar changelog, registro de decisiones y primer de continuidad.

---

## 25. Próximo producto recomendado

Crear:

```text
2026-05-04_Changelog_Actualizacion_Perfiles_Transversales_Caleidoscopio_Framework_Generico_V4_v0-2.md
```

Luego:

```text
2026-05-04_Registro_Decisiones_Perfiles_Transversales_Caleidoscopio_Framework_Generico_V4_v0-2.md
2026-05-04_Primer_Continuidad_Paquete_Consolidado_Perfiles_Transversales_Caleidoscopio_Framework_Generico_V4_v0-2.md
```

---

## 26. Cierre del documento

Estas plantillas convierten la capa transversal en un sistema operable sin caer todavía en automatización prematura. Funcionan como rieles, no como tren automático. El movimiento sigue siendo humano-máquina, con evidencia, cuidado, documentación, wiki, cierre y archivo.

**Estado:** Listo para validación.  
**Siguiente acción:** Actualizar changelog, registro de decisiones y primer de continuidad.
