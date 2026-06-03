# Matriz N1–N4
## Framework Genérico V4.1.0 — Borrador v0.1

**Archivo:** `2026-05-04_Matriz_N1_N4_Framework_Generico_V4_1_0_Borrador_v0-1.md`  
**Fecha:** 2026-05-04  
**Versión:** v0.1  
**Estado:** Matriz inicial de niveles de activación para rama V4.1.0-borrador  
**Marco madre:** Framework Genérico V4.0.0  
**Rama activa:** Framework Genérico V4.1.0-borrador  
**Nivel de documento:** Control operativo y gobernanza de escala  
**Decisiones relacionadas:** D-A28, D-A29, D-A30, D-A31  

---

## 0. Propósito

Esta matriz define cómo activar el Framework Genérico V4.1.0-borrador según cuatro niveles de complejidad:

```text
N1 — Mínimo controlado
N2 — Operativo
N3 — Avanzado
N4 — Institucional
```

Su función es evitar dos errores simétricos:

```text
Usar todo el framework para cualquier tarea pequeña.
Usar una versión mínima cuando el proyecto requiere gobernanza, evidencia, archivo y transferencia.
```

La matriz opera como un regulador de presión: deja pasar suficiente estructura para sostener el trabajo, pero no tanta que aplaste el proyecto con metal documental.

---

## 1. Principio rector

```text
El nivel de activación debe responder al propósito, riesgo, escala, evidencia, participación humana, uso de IA, necesidad de transferencia y exigencia de archivo.
```

Ningún nivel elimina:

```text
juicio humano
ética
accesibilidad
documentación mínima
evidencia
cierre
continuidad
```

Lo que cambia entre N1 y N4 es la profundidad, formalidad, trazabilidad, gobernanza y capacidad de transferencia.

---

## 2. Vista comparativa general

| Nivel | Nombre | Uso principal | Gobernanza | Producto típico |
|---|---|---|---|---|
| N1 | Mínimo controlado | Tareas pequeñas, exploraciones, prototipos rápidos, documentos simples | Ligera | Brief, documento, checklist, cierre breve |
| N2 | Operativo | Proyectos con varios pasos, revisión, documentación y uso moderado de IA | Moderada | Paquete operativo, matriz, guía, prototipo validado |
| N3 | Avanzado | Proyectos con perfiles transversales, Caleidoscopio, riesgos, evaluación y archivo | Alta | Sistema documentado, matriz C1-C7, wiki, checks, registro |
| N4 | Institucional | Programas, laboratorios, políticas, adopción formal, auditoría y transferencia | Formal | Release institucional, capacitación, auditoría, archivo histórico |

---

## 3. Criterios para seleccionar nivel

| Criterio | N1 | N2 | N3 | N4 |
|---|---|---|---|---|
| Escala del proyecto | Individual o microtarea | Proyecto pequeño o mediano | Proyecto complejo multirol | Programa institucional o ecosistema |
| Duración | Una sesión o ciclo breve | Varias sesiones | Ciclo extendido | Ciclo formal o anual |
| Riesgo | Bajo | Bajo a medio | Medio a alto | Alto o institucional |
| Uso de IA | Puntual | Documentado | Gobernado con bitácora y checks | Auditable, protocolizado y capacitado |
| Evidencia requerida | Mínima | Estructurada | Multidimensional | Auditable y transferible |
| Participantes | 1 persona o dúo humano-IA | Equipo pequeño | Equipo transdisciplinario | Comunidad, unidad o institución |
| Caleidoscopio | No requerido o C1 simple | Puede activarse C1-C3 | Activación C1-C7 según problema | C7 institucional prioritario |
| Wiki | Opcional mínima | Recomendada | Obligatoria si cambia proceso | Obligatoria y gobernada |
| Archivo | Cierre simple | Paquete básico | Archivo con manifest | Archivo histórico formal |
| Automatización | No | No o mínima | Solo asistida con checks | Posible con auditoría |

---

## 4. N1 — Mínimo controlado

### 4.1 Definición

N1 es el nivel mínimo viable documentado. Se usa cuando el trabajo requiere claridad, evidencia y cierre, pero no una arquitectura completa.

### 4.2 Cuándo usar N1

Usar N1 cuando:

```text
el alcance es pequeño;
el riesgo es bajo;
no hay datos sensibles;
no hay publicación formal;
no hay integración compleja de perfiles;
el producto puede cerrarse con una evidencia simple.
```

### 4.3 Documentos mínimos N1

```text
Brief o propósito breve
Documento de trabajo
Checklist mínimo
Nota de cierre
Próximo paso
```

### 4.4 Perfiles N1

| Perfil | Activación N1 |
|---|---|
| Programador Humanista | Script, estructura mínima, README básico, prueba manual |
| Investigador Transdisciplinario | Pregunta guía, 3-5 fuentes, síntesis breve |
| Artista Transdisciplinario | Concepto, boceto, ficha básica de obra |
| Caleidoscopio | Solo si hay integración mínima entre dos perfiles |

### 4.5 Evidencia mínima N1

```text
propósito
producto o borrador
criterio de aceptación simple
cierre breve
próxima acción
```

### 4.6 Gates N1

| Gate | Evidencia |
|---|---|
| Propósito | Se entiende qué se quiere lograr |
| Evidencia | Hay un producto o avance verificable |
| Cierre | Se sabe qué queda hecho y qué sigue |

### 4.7 No exigir en N1

No exigir:

```text
manifest JSON
RACI formal
matriz completa de riesgos
wiki completa
auditoría
automatización
release institucional
```

---

## 5. N2 — Operativo

### 5.1 Definición

N2 se usa para proyectos que ya necesitan estructura, documentación, validación y continuidad, pero todavía no requieren gobernanza avanzada ni institucionalización.

### 5.2 Cuándo usar N2

Usar N2 cuando:

```text
hay varias fases;
hay más de una persona o rol;
hay necesidad de documentación reutilizable;
hay uso de IA que debe registrarse;
hay prototipo, recurso o publicación preliminar;
hay necesidad de revisión y validación básica.
```

### 5.3 Documentos mínimos N2

```text
README o documento de entrada
Matriz de contexto / requisitos / fuentes / obra según perfil
Checklist operativo
Bitácora breve
Registro de decisiones simple
Cierre de sesión
Wiki mínima si cambia proceso
```

### 5.4 Perfiles N2

| Perfil | Activación N2 |
|---|---|
| Programador Humanista | Arquitectura básica, Git, pruebas básicas, documentación técnica |
| Investigador Transdisciplinario | Marco conceptual inicial, matriz de fuentes, metodología básica |
| Artista Transdisciplinario | Statement, prototipo, ficha curatorial, derechos básicos |
| Caleidoscopio | C1, C2 o C3 con matriz simple de combinación |

### 5.5 Evidencia mínima N2

```text
problema y contexto
documento base
matriz operativa
validación básica
registro de decisiones simple
cierre y continuidad
```

### 5.6 Gates N2

| Gate | Evidencia |
|---|---|
| Propósito | Brief y alcance |
| Contexto | Actores, restricciones o audiencia |
| Método / diseño | Ruta de trabajo clara |
| Validación | Revisión humana básica |
| Documentación | README, bitácora o guía |
| Cierre | Decisiones y próximos pasos |

### 5.7 No exigir en N2

No exigir todavía:

```text
auditoría institucional
dashboard formal
automatización completa
capacitación institucional
archivo histórico completo
```

---

## 6. N3 — Avanzado

### 6.1 Definición

N3 es el nivel activo recomendado para la rama V4.1.0-borrador durante su estabilización. Se usa cuando hay integración de perfiles, Caleidoscopio, riesgos, documentación activa, evaluación, wiki y archivo.

### 6.2 Cuándo usar N3

Usar N3 cuando:

```text
hay interacción entre perfiles transversales;
hay modo Caleidoscopio C1-C7;
hay uso sustantivo de IA;
hay productos multimodales, REA, AVAT, apps, repositorios o colecciones;
hay riesgos éticos, técnicos, epistemológicos, culturales o socioambientales;
hay necesidad de trazabilidad y transferencia.
```

### 6.3 Documentos mínimos N3

```text
README
Índice maestro
Manifest JSON
Matriz de perfiles o C1-C7
AGENTS / SKILLS / WORKFLOWS / CHECKS / WIKI_SYNC según perfil
Registro de decisiones
Changelog
Bitácora
Rúbrica o criterios de evaluación
Primer de continuidad
Plan de archivo
```

### 6.4 Perfiles N3

| Perfil | Activación N3 |
|---|---|
| Programador Humanista | Agents/skills, arquitectura, pruebas, seguridad, evaluación, release |
| Investigador Transdisciplinario | Research agents, source registry, evidence ledger, bibliometría si aplica |
| Artista Transdisciplinario | Art agents, collection registry, rights/licenses, curaduría, publicación |
| Caleidoscopio | Modos C1-C7 con evidencia integrada, Gates y producto emergente |

### 6.5 Evidencia mínima N3

```text
mapa de contexto
matriz de combinación
fundamentos y metodología
producto o prototipo
validación multidimensional
checks éticos, técnicos y de accesibilidad
wiki_sync
registro de decisiones
changelog
archivo y continuidad
```

### 6.6 Gates N3

| Gate | Evidencia |
|---|---|
| Propósito | Problema complejo y nivel declarado |
| Ubicación | Macro-meso-micro definido |
| Perfil / Caleidoscopio | Modo o perfil activo justificado |
| Metodología | Ruta y criterios documentados |
| IA responsable | Bitácora, disclosure, revisión humana |
| Accesibilidad / derechos | DUA/POUR, licencias, permisos |
| Evaluación | Rúbrica o informe |
| Documentación | Wiki, README, changelog, decisiones |
| Archivo | Manifest, paquete, cierre |

### 6.7 Automatización en N3

Permitida solo como apoyo controlado, no como sustitución del juicio humano.

Requiere:

```text
CHECKS
WIKI_SYNC
Gates definidos
logs o bitácora
validación humana
mecanismo de reversión
```

---

## 7. N4 — Institucional

### 7.1 Definición

N4 es el nivel de institucionalización, auditoría, capacitación, transferencia y adopción formal. No debe activarse por entusiasmo. Debe activarse por necesidad de escala, responsabilidad, sostenibilidad y gobernanza.

### 7.2 Cuándo usar N4

Usar N4 cuando:

```text
el proyecto afecta una unidad, programa, facultad, comunidad o institución;
hay publicación pública o repositorio oficial;
hay datos, derechos, licencias o riesgos altos;
hay capacitación de terceros;
hay expectativa de mantenimiento;
hay necesidad de auditoría, métricas o gobernanza formal.
```

### 7.3 Documentos mínimos N4

```text
README institucional
Manifest validado
Gobernanza formal
RACI
AIAS / IBATA / DUA / POUR según aplique
Plan de implementación
Plan de capacitación
Plan de mantenimiento
Dashboard o indicadores
Auditoría o revisión externa
Plan de archivo histórico
Release institucional
Protocolo de continuidad
```

### 7.4 Perfiles N4

| Perfil | Activación N4 |
|---|---|
| Programador Humanista | Infraestructura, mantenimiento, auditoría técnica, capacitación |
| Investigador Transdisciplinario | Validación institucional, ciencia abierta, repositorio, publicación |
| Artista Transdisciplinario | Derechos culturales, exposición pública, archivo curatorial, mediación |
| Caleidoscopio | C7 institucional con gobernanza, evaluación y transferencia formal |

### 7.5 Evidencia mínima N4

```text
gobernanza aprobada
roles y responsabilidades
evaluación integral
documentación pública o institucional
capacitación
archivo histórico
indicadores
plan de sostenibilidad
cierre formal
```

### 7.6 Gates N4

| Gate | Evidencia |
|---|---|
| Gobernanza | Decisiones aprobadas y RACI |
| Riesgo | Matriz de riesgos y mitigaciones |
| Calidad | Evaluación y auditoría |
| Accesibilidad | Validación DUA/POUR |
| Derechos | Licencias, permisos, autoría, consentimiento |
| Operación | Plan de mantenimiento y soporte |
| Transferencia | Capacitación, wiki, guía de adopción |
| Archivo | Release, manifest, paquete histórico |

### 7.7 Automatización en N4

Permitida si:

```text
hay auditoría;
hay trazabilidad;
hay supervisión humana;
hay plan de reversión;
hay documentación pública o interna;
hay evaluación de impacto;
hay mantenimiento asignado.
```

---

## 8. Matriz de documentos mínimos por nivel

| Documento / artefacto | N1 | N2 | N3 | N4 |
|---|---:|---:|---:|---:|
| Propósito / brief | Obligatorio | Obligatorio | Obligatorio | Obligatorio |
| README | Recomendado | Obligatorio | Obligatorio | Obligatorio institucional |
| Índice maestro | No | Recomendado | Obligatorio | Obligatorio |
| Manifest JSON | No | Opcional | Obligatorio | Obligatorio validado |
| Changelog | No | Recomendado | Obligatorio | Obligatorio |
| Registro de decisiones | Breve | Recomendado | Obligatorio | Obligatorio formal |
| Bitácora IA | Si usa IA | Obligatoria si usa IA | Obligatoria | Obligatoria auditable |
| CHECKS | Mínimo | Operativo | Formal | Auditable |
| WIKI_SYNC | No / opcional | Si cambia proceso | Obligatorio | Obligatorio |
| RACI | No | Opcional | Recomendado | Obligatorio |
| AIAS / IBATA | No | Según riesgo | Recomendado / obligatorio si aplica | Obligatorio si aplica |
| Rúbrica / evaluación | Simple | Básica | Integral | Institucional |
| Archivo histórico | No | Básico | Obligatorio | Obligatorio formal |
| Plan de mantenimiento | No | Opcional | Recomendado | Obligatorio |
| Capacitación | No | No / opcional | Recomendado | Obligatoria si hay adopción |

---

## 9. Matriz por perfil y nivel

| Perfil | N1 | N2 | N3 | N4 |
|---|---|---|---|---|
| Programador Humanista | Script, README, prueba manual | Git, arquitectura básica, tests | Agents/skills, seguridad, QA, release | Auditoría, mantenimiento, capacitación |
| Investigador Transdisciplinario | Pregunta, fuentes mínimas, síntesis | Matriz fuentes, marco, método | Research agents, evidence ledger, bibliometría, REA | Repositorio, ciencia abierta, validación institucional |
| Artista Transdisciplinario | Concepto, boceto, ficha | Prototipo, statement, derechos básicos | Curaduría, colección, publicación multimodal | Exposición, archivo, mediación cultural |
| Caleidoscopio | Integración mínima de dos perfiles | C1-C3 documentado | C1-C7 con evidencia y Gates | C7 institucional con gobernanza completa |

---

## 10. Matriz de activación Caleidoscopio por nivel

| Modo | N1 | N2 | N3 | N4 |
|---|---|---|---|---|
| C1 Técnico-investigativo | Posible simple | Recomendado | Robusto | Institucional si hay repositorio o dashboard oficial |
| C2 Investigativo-creativo | Posible simple | Recomendado | Robusto | Institucional si hay exposición, REA o archivo oficial |
| C3 Creativo-técnico | Posible prototipo | Recomendado | Robusto | Institucional si hay instalación o plataforma pública |
| C4 Integral | No recomendado salvo microdemo | Posible con cautela | Recomendado | Robusto |
| C5 Pedagógico | Actividad simple | Módulo | Curso / AVAT / REA | Programa o currículo |
| C6 Comunitario | Solo con cuidado | Piloto | Archivo vivo / mapa / galería | Programa comunitario gobernado |
| C7 Institucional | No | No | Preparación | Nivel natural |

---

## 11. Señales de escalamiento

Subir de nivel cuando aparezca cualquiera de estas señales:

| Señal | Acción |
|---|---|
| El proyecto involucra más actores | Subir N1 → N2 |
| Hay uso sostenido de IA | Subir N1 → N2 o N3 |
| Hay datos, fuentes o comunidad sensible | Subir a N3 |
| Hay publicación pública | Subir a N3 |
| Hay transferencia institucional | Subir a N4 |
| Hay automatización | Subir a N3 mínimo |
| Hay mantenimiento esperado | Subir a N3 o N4 |
| Hay derechos culturales o licencias complejas | Subir a N3 |
| Hay adopción por curso, programa o unidad | Subir a N4 |

---

## 12. Señales de desescalamiento

Bajar de nivel cuando:

| Señal | Acción |
|---|---|
| La tarea es exploratoria y privada | N2 → N1 |
| No hay publicación ni transferencia | Evitar N3/N4 |
| No hay integración real de perfiles | No activar Caleidoscopio completo |
| El producto es una nota o borrador simple | Mantener N1 |
| No hay mantenimiento posterior | Evitar N4 |
| No hay datos, comunidad ni riesgos relevantes | Evitar gobernanza excesiva |

---

## 13. Matriz de riesgos por nivel

| Riesgo | N1 | N2 | N3 | N4 |
|---|---|---|---|---|
| Sobrecarga documental | Medio | Medio | Alto | Alto |
| Falta de trazabilidad | Alto | Medio | Bajo | Bajo |
| Riesgo ético no detectado | Medio | Medio | Bajo | Bajo |
| Automatización prematura | Bajo | Medio | Medio | Alto si mal gobernada |
| Falta de archivo | Alto | Medio | Bajo | Bajo |
| Costos de mantenimiento | Bajo | Medio | Alto | Alto |
| Pérdida de usabilidad | Bajo | Medio | Medio | Alto |
| Burocratización | Bajo | Medio | Medio | Alto |

---

## 14. Nivel recomendado para V4.1.0-borrador

El trabajo actual de V4.1.0-borrador debe mantenerse en:

```text
N3 — Avanzado
```

Razones:

```text
hay perfiles transversales;
hay Caleidoscopio;
hay matrices derivadas;
hay manifest JSON;
hay gobernanza activa;
hay necesidad de wiki_sync;
hay preparación para archivo;
todavía no hay institucionalización plena ni auditoría.
```

No debe pasar a N4 hasta completar:

```text
Matriz Gates
CHECKS formal
WIKI_SYNC formal
Plan de archivo histórico
Protocolo de paso de borrador a estable
Validación humana final
```

---

## 15. Decisión sugerida

```text
D-A32 — Crear la Matriz N1–N4 del Framework Genérico V4.1.0-borrador para definir niveles de activación, documentos mínimos, perfiles, evidencias, Gates, riesgos, señales de escalamiento y señales de desescalamiento.
```

**Estado sugerido:** Aceptada para continuidad documental.  
**Tipo de cambio:** Ajuste menor de gobernanza operativa.  
**Justificación:** Evita sobrecargar proyectos pequeños y evita subgobernar proyectos complejos.  
**Impacto:** Alto para usabilidad, evaluación, escalabilidad y adopción.  
**Riesgo:** Bajo si se usa como guía flexible y no como burocracia rígida.  
**Documentos afectados:** README, índice maestro, manifest JSON, mapa macro-meso-micro, registro de decisiones, primer.  
**Versión afectada:** V4.1.0-borrador v0.1.  
**Recomendación:** Registrar D-A32 en la próxima actualización del Registro de Decisiones.

---

## 16. Próximo producto recomendado

Crear:

```text
2026-05-04_Matriz_Gates_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

### Propósito de la matriz Gates

Formalizar las validaciones que permiten avanzar de fase, nivel o producto sin perder:

```text
propósito
evidencia
ética
accesibilidad
trazabilidad
calidad
documentación
wiki
archivo
continuidad
```

La matriz Gates debe funcionar como el sistema de compuertas del río: no detiene el agua, pero evita que el proyecto inunde la sala de máquinas.

---

## 17. Cierre

La matriz N1–N4 permite que V4.1.0-borrador escale con elegancia: liviano cuando debe ser liviano, robusto cuando debe ser robusto, institucional solo cuando haya razón suficiente. Esta es la diferencia entre arquitectura viva y papelería con casco.

**Estado:** Listo para validación.  
**Siguiente acción:** Crear Matriz Gates V4.1.0-borrador v0.1.
