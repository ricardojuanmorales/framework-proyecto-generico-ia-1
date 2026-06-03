# Protocolo de Paso de Borrador a Estable
## Framework Genérico V4.1.0 — v0.1

**Archivo:** `2026-05-04_Protocolo_Paso_Borrador_a_Estable_Framework_Generico_V4_1_0_v0-1.md`  
**Fecha:** 2026-05-04  
**Versión:** v0.1  
**Estado:** Protocolo inicial para evaluación futura de estabilización  
**Marco madre:** Framework Genérico V4.0.0  
**Rama activa:** Framework Genérico V4.1.0-borrador  
**Versión candidata futura:** Framework Genérico V4.1.0-estable  
**Nivel recomendado actual:** N3 — Avanzado  
**Nivel requerido para estabilización:** N3 validado / N4 si hay adopción institucional  
**Tipo de documento:** Gobernanza de versión, evaluación de madurez, release y continuidad  
**Decisiones relacionadas:** D-A28, D-A29, D-A30, D-A31, D-A32, D-A33, D-A34, D-A35, D-A36  

---

## 0. Propósito

Este protocolo define las condiciones mínimas para que **Framework Genérico V4.1.0-borrador** pueda convertirse en **Framework Genérico V4.1.0-estable**.

Su función es impedir que una versión sea declarada estable por entusiasmo, cansancio o acumulación documental. La estabilidad debe demostrarse mediante evidencia, validación humana, gobernanza, accesibilidad, wiki, archivo y continuidad.

Un borrador puede ser fértil, brillante y útil. Pero una versión estable debe poder resistir uso, revisión, transferencia y reactivación sin derrumbarse como teatro de cartón bajo lluvia.

---

## 1. Principio rector

```text
Una versión estable no es la versión más completa; es la versión suficientemente validada, documentada, usable, gobernada, accesible, archivada y transferible.
```

La estabilización no debe significar congelamiento absoluto. Significa que la versión puede usarse como base confiable para proyectos, enseñanza, transferencia, implementación y evolución posterior.

---

## 2. Estado actual

```text
V4.0.0: cerrada como base estabilizada y preservable.
V4.1.0-borrador: abierta como rama evolutiva controlada.
V4.1.0-estable: no declarada todavía.
```

La rama V4.1.0-borrador ya cuenta con:

```text
README
Índice maestro
Manifest JSON
Mapa macro-meso-micro
Matriz N1-N4
Matriz Gates
CHECKS
WIKI_SYNC
Plan de archivo histórico
```

Aun así, todavía requiere validación final, actualización de gobernanza y cierre de release para pasar a estable.

---

## 3. Condiciones mínimas para estabilización

Para declarar **V4.1.0-estable**, deben cumplirse las siguientes condiciones:

```text
1. Documentos de control completos.
2. Gobernanza actualizada.
3. Perfiles transversales correctamente integrados.
4. Caleidoscopio operativo como lógica integradora.
5. Niveles N1-N4 validados.
6. Gates y CHECKS aplicables.
7. WIKI_SYNC ejecutado o planificado con evidencia.
8. Archivo histórico preparado.
9. Riesgos pendientes identificados.
10. Validación humana explícita.
```

---

## 4. Documentos obligatorios para V4.1.0-estable

| ID | Documento | Estado requerido |
|---|---|---|
| E-01 | README Framework Genérico V4.1.0 | Validado |
| E-02 | Índice Maestro de Documentos V4.1.0 | Validado |
| E-03 | Manifest JSON V4.1.0 | Validado |
| E-04 | Mapa Macro-Meso-Micro V4.1.0 | Validado |
| E-05 | Matriz N1-N4 V4.1.0 | Validada |
| E-06 | Matriz Gates V4.1.0 | Validada |
| E-07 | CHECKS V4.1.0 | Validado |
| E-08 | WIKI_SYNC V4.1.0 | Validado |
| E-09 | Plan de Archivo Histórico V4.1.0 | Validado |
| E-10 | Changelog V4.1.0 | Actualizado |
| E-11 | Registro de Decisiones V4.1.0 | Actualizado |
| E-12 | Primer de Continuidad V4.1.0 | Actualizado |
| E-13 | Reporte de Evaluación de Preparación V4.1.0 | Producido |
| E-14 | Release Notes V4.1.0 | Producido |
| E-15 | Paquete de Archivo V4.1.0 | Preparado |

---

## 5. Documentos recomendados antes de estabilizar

| ID | Documento | Prioridad | Función |
|---|---|---:|---|
| R-01 | Guía de Inicio Rápido V4.1.0 | Alta | Facilitar adopción humana |
| R-02 | Glosario V4.1.0 | Alta | Alinear términos |
| R-03 | Matriz de Riesgos V4.1.0 | Alta | Consolidar riesgos y salvaguardas |
| R-04 | Rúbrica de Evaluación V4.1.0 | Alta | Evaluar madurez |
| R-05 | Plan de Mantenimiento V4.1.0 | Media-alta | Definir evolución posterior |
| R-06 | Guía de Uso por Escenarios | Media-alta | Aplicación práctica |
| R-07 | Guía de Adopción Institucional | Media | Preparar N4 si aplica |
| R-08 | Dashboard o tablero de seguimiento | Media | Útil para implementación avanzada |

---

## 6. Criterios de madurez

| Criterio | Pregunta | Evidencia |
|---|---|---|
| Coherencia arquitectónica | ¿V4.1.0 evoluciona V4.0.0 sin romperla? | Mapa macro-meso-micro, decisiones |
| Usabilidad | ¿Una persona nueva puede saber por dónde empezar? | README, guía inicio, índice |
| Trazabilidad | ¿Se sabe de dónde viene cada cambio? | Changelog, registro decisiones |
| Gobernanza | ¿Los cambios están clasificados y justificados? | Registro de decisiones |
| Operatividad | ¿Existen niveles, Gates y checks usables? | Matriz N1-N4, Gates, CHECKS |
| Integración transversal | ¿Los perfiles funcionan sin convertirse en silos? | Paquete, matriz comparativa, Caleidoscopio |
| Emergencia Caleidoscopio | ¿Hay ejemplos y criterios de integración real? | Matriz C1-C7, ejemplos |
| Ética y cuidado | ¿Se revisan IA, derechos, comunidad y riesgos? | CHECKS, WIKI_SYNC, matriz riesgos |
| Accesibilidad | ¿Hay criterios DUA/POUR o equivalentes? | CHECKS accesibilidad, wiki |
| Documentación humana | ¿La wiki puede guiar a usuarios? | WIKI_SYNC y páginas base |
| Archivo | ¿La versión puede preservarse y reactivarse? | Plan de archivo, manifest |
| Continuidad | ¿Queda claro qué sigue? | Primer, release notes |

---

## 7. Semáforo de estabilización

| Color | Estado | Acción |
|---|---|---|
| Rojo | Falta documento obligatorio o validación crítica | No estabilizar |
| Amarillo | Hay estructura, pero faltan validaciones o wiki | Continuar en borrador |
| Verde | Documentos, gobernanza, checks, wiki y archivo validados | Puede considerarse estable |
| Azul | Además de estable, es transferible y reusable | Preparar release formal |
| Morado | Además de estable, es institucionalizable | Preparar N4 |

Estado actual estimado:

```text
V4.1.0-borrador: amarillo alto con borde verde.
V4.1.0-estable: todavía no.
```

---

## 8. Proceso de evaluación para estabilización

### Paso 1 — Abrir evaluación

Crear:

```text
Reporte_Evaluacion_Preparacion_Framework_Generico_V4_1_0_Estable.md
```

Debe indicar:

```text
fecha
responsable humano
estado actual
documentos revisados
riesgos
criterios cumplidos
criterios pendientes
recomendación
```

### Paso 2 — Revisar documentos obligatorios

Aplicar tabla de documentos obligatorios.

Resultado permitido:

```text
completo
completo con pendientes menores
incompleto
requiere revisión
```

### Paso 3 — Aplicar CHECKS de paso a estable

Usar sección correspondiente de CHECKS V4.1.0-borrador.

### Paso 4 — Validar WIKI_SYNC

Verificar que al menos las páginas de prioridad alta estén creadas o planificadas formalmente:

```text
Home Framework V4.1.0
Guía Inicio Rápido
Guía N1-N4
Guía Gates/CHECKS
Guía Caleidoscopio C1-C7
```

### Paso 5 — Revisar riesgos

Crear o actualizar matriz de riesgos.

Clasificar riesgos:

```text
aceptado
mitigado
pendiente
bloqueante
```

### Paso 6 — Preparar archivo

Verificar que el plan de archivo puede ejecutarse.

### Paso 7 — Actualizar gobernanza

Actualizar:

```text
Changelog
Registro de decisiones
Primer
Manifest
Índice maestro
```

### Paso 8 — Validación humana explícita

La estabilización requiere una declaración humana clara:

```text
Confirmo que Framework Genérico V4.1.0 puede pasar de borrador a estable bajo las condiciones documentadas.
```

Sin esta validación, no se declara estable.

### Paso 9 — Crear release notes

Crear:

```text
2026-05-04_Release_Notes_Framework_Generico_V4_1_0_Estable_v1-0.md
```

### Paso 10 — Archivar release

Preparar paquete en:

```text
99_ARCHIVO_HISTORICO/Releases/Framework_Generico_V4_1_0_Estable/
```

---

## 9. Gates obligatorios para estabilización

| Gate | Requisito | Estado actual esperado |
|---|---|---|
| G1 Propósito | Propósito V4.1.0 claro | Debe cumplir |
| G2 Ubicación | Macro-meso-micro definido | Debe cumplir |
| G3 Perfil / Caleidoscopio | Perfiles y Caleidoscopio ubicados | Debe cumplir |
| G4 Metodología | Ruta de uso y niveles claros | Debe cumplir |
| G5 Evidencia | Documentos y matrices producidas | Debe cumplir |
| G6 IA responsable | Reglas y checks de IA definidos | Debe cumplir |
| G7 Ética / derechos | Riesgos y salvaguardas definidos | Debe cumplir |
| G8 Accesibilidad | CHECKS accesibilidad definidos | Debe cumplir |
| G9 Calidad | Criterios de calidad establecidos | Debe cumplir |
| G10 Documentación | Changelog, decisiones, README, índice | Debe cumplir |
| G11 Wiki Sync | Guías humanas creadas o planificadas | Pendiente crítico |
| G12 Archivo | Plan y paquete de archivo | Debe cumplir |
| G13 Continuidad | Primer y próximos pasos | Debe cumplir |
| G14 Estabilización | Validación humana explícita | Pendiente hasta cierre |

---

## 10. Criterios bloqueantes

No declarar V4.1.0 estable si ocurre cualquiera de estas condiciones:

```text
faltan README, índice, manifest o matriz N1-N4;
no existe matriz Gates;
no existe CHECKS;
no existe WIKI_SYNC;
no existe plan de archivo;
no hay registro de decisiones actualizado;
no hay changelog actualizado;
no hay validación humana explícita;
hay cambios estructurales no registrados;
se reescribió V4.0.0 sin decisión;
Caleidoscopio se trata como perfil tradicional;
no hay claridad sobre niveles N1-N4;
no hay criterios de accesibilidad;
no hay continuidad documentada.
```

---

## 11. Criterios de aceptación

V4.1.0 puede declararse estable si:

```text
1. Todos los documentos obligatorios existen.
2. Los documentos obligatorios tienen versión, estado y fecha.
3. El manifest coincide con el índice maestro.
4. Los cambios D-A24 en adelante están registrados.
5. V4.0.0 está preservada como base histórica.
6. La capa transversal está integrada sin crear macrocarpetas nuevas.
7. Caleidoscopio funciona como lógica integradora.
8. N1-N4 permite uso proporcional.
9. Gates y CHECKS son aplicables.
10. WIKI_SYNC tiene primeras páginas humanas planificadas o creadas.
11. El plan de archivo está listo.
12. Riesgos pendientes no son bloqueantes.
13. Hay validación humana explícita.
14. Se produce release notes.
15. Se prepara paquete de archivo.
```

---

## 12. Clasificación de pendientes

Todo pendiente debe clasificarse:

| Tipo | Descripción | ¿Bloquea estabilidad? |
|---|---|---|
| Menor | Corrección de formato, nombre, enlace o claridad | No |
| Operativo | Falta plantilla, ejemplo o guía secundaria | A veces |
| Gobernanza | Falta decisión, changelog o registro | Sí |
| Ético | Falta revisión de riesgos, derechos o IA | Sí |
| Accesibilidad | Falta criterio o alternativa mínima | Sí si hay publicación |
| Archivo | Falta manifest, paquete o destino | Sí |
| Wiki | Falta guía humana de prioridad alta | Sí para release estable |
| Estructural | Cambia arquitectura macro | Sí, requiere decisión mayor |

---

## 13. Plantilla de evaluación de estabilización

```text
# Evaluación de Paso a Estable

Fecha:
Versión evaluada:
Responsable humano:
Copiloto IA:
Nivel:
Documentos revisados:
Gates aplicados:
CHECKS aplicados:
Wiki revisada:
Archivo revisado:

## Resultado por criterio

| Criterio | Estado | Evidencia | Pendiente |
|---|---|---|---|
| Coherencia arquitectónica | | | |
| Usabilidad | | | |
| Trazabilidad | | | |
| Gobernanza | | | |
| Operatividad | | | |
| Integración transversal | | | |
| Caleidoscopio | | | |
| Ética | | | |
| Accesibilidad | | | |
| Wiki | | | |
| Archivo | | | |
| Continuidad | | | |

## Riesgos

| Riesgo | Estado | Mitigación |
|---|---|---|

## Recomendación

[ ] Mantener como borrador
[ ] Pasar a estable con pendientes menores
[ ] Pasar a estable
[ ] Escalar a revisión institucional N4

Validación humana:
Firma / confirmación:
```

---

## 14. Plantilla de decisión de estabilización

```text
D-A## — Declarar Framework Genérico V4.1.0 como versión estable.

Justificación:
Evidencia:
Impacto:
Riesgos aceptados:
Riesgos pendientes:
Documentos validados:
Wiki_sync:
Archivo:
Versión afectada:
Estado:
Recomendación de continuidad:
```

---

## 15. Release notes mínimos

Los release notes deben incluir:

```text
nombre de versión
fecha
estado
qué hereda de V4.0.0
qué incorpora V4.1.0
documentos nuevos
decisiones principales
riesgos conocidos
cómo comenzar
cómo actualizar desde V4.0.0
qué queda fuera
próxima versión esperada
```

---

## 16. Paquete de release estable

Estructura sugerida:

```text
Framework_Generico_V4_1_0_Estable/
├── README_Framework_Generico_V4_1_0.md
├── Indice_Maestro_Documentos_Framework_Generico_V4_1_0.md
├── manifest_framework_v4_1_0.json
├── 00_CONTROL_MAESTRO/
├── 02_ARQUITECTURA_CONCEPTUAL/
├── 09_IA_AGENTES_Y_COPILOTOS/
├── 18_DOCUMENTACION_ACTIVA/
├── 21_WIKI_DOCUMENTACION_HUMANA/
├── 99_ARCHIVO_HISTORICO/
├── Release_Notes_Framework_Generico_V4_1_0.md
└── archive_manifest.json
```

---

## 17. Estado recomendado después de este protocolo

Después de crear este protocolo, la rama V4.1.0-borrador debe quedar en estado:

```text
Borrador avanzado con ruta de estabilización definida.
```

No debe declararse estable todavía hasta completar:

```text
Reporte de evaluación de preparación
Primeras páginas wiki de prioridad alta
Actualización de changelog D-A29 a D-A36
Actualización de registro de decisiones D-A29 a D-A36
Release notes preliminares
Validación humana explícita de paso a estable
```

---

## 18. Decisión sugerida

```text
D-A37 — Crear el Protocolo de Paso de Borrador a Estable del Framework Genérico V4.1.0 v0.1 para definir documentos obligatorios, criterios de madurez, Gates, CHECKS, WIKI_SYNC, archivo, validación humana, release notes y paquete de release antes de declarar V4.1.0 como versión estable.
```

**Estado sugerido:** Aceptada para continuidad documental.  
**Tipo de cambio:** Ajuste menor de gobernanza de versión y release.  
**Justificación:** Evita declarar estable una versión sin evidencia suficiente y define una ruta clara de maduración.  
**Impacto:** Alto para gobernanza, adopción, transferencia, archivo y futura institucionalización.  
**Riesgo:** Bajo si se usa como protocolo de evaluación y no como obligación de estabilizar de inmediato.  
**Documentos afectados:** README, índice maestro, manifest JSON, matriz N1-N4, matriz Gates, CHECKS, WIKI_SYNC, plan de archivo, changelog, registro de decisiones, primer.  
**Versión afectada:** V4.1.0-borrador v0.1.  
**Recomendación:** Registrar D-A37 en la próxima actualización del Registro de Decisiones.

---

## 19. Próximo producto recomendado

Crear:

```text
2026-05-04_Changelog_Gobernanza_V4_1_0_Borrador_DA29_DA37_v0-3.md
```

y luego:

```text
2026-05-04_Registro_Decisiones_Gobernanza_V4_1_0_Borrador_DA29_DA37_v0-3.md
```

### Propósito

Actualizar la gobernanza con las decisiones generadas después de la apertura V4.1.0-borrador:

```text
D-A29 — Índice Maestro
D-A30 — Manifest JSON
D-A31 — Mapa Macro-Meso-Micro
D-A32 — Matriz N1-N4
D-A33 — Matriz Gates
D-A34 — CHECKS
D-A35 — WIKI_SYNC
D-A36 — Plan Archivo Histórico
D-A37 — Protocolo Paso Borrador a Estable
```

---

## 20. Cierre

Este protocolo no declara estable a V4.1.0. Le da un camino legítimo para llegar allí. El borrador ya camina; este documento le entrega brújula, criterios y aduana.

**Estado:** Listo para validación.  
**Siguiente acción:** Actualizar Changelog y Registro de Decisiones D-A29 a D-A37.
