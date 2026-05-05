# Registro de Decisiones de Gobernanza
## Framework Genérico V4.1.0-borrador — D-A29 a D-A37 — v0.3

**Archivo:** `2026-05-04_Registro_Decisiones_Gobernanza_V4_1_0_Borrador_DA29_DA37_v0-3.md`  
**Fecha:** 2026-05-04  
**Versión del registro:** v0.3  
**Estado:** Registro de decisiones actualizado para rama V4.1.0-borrador  
**Marco madre:** Framework Genérico V4.0.0  
**Rama activa:** Framework Genérico V4.1.0-borrador  
**Nivel activo:** N3 — Avanzado  
**Tipo de documento:** Gobernanza, decisiones, trazabilidad y continuidad  
**Rango de decisiones cubiertas:** D-A29 a D-A37  
**Documento anterior relacionado:** `2026-05-04_Registro_Decisiones_Actualizacion_Perfiles_Transversales_y_Apertura_V4_1_0_Framework_Generico_V4_v0-2.md`

---

## 0. Propósito

Este documento registra formalmente las decisiones D-A29 a D-A37 tomadas durante la estabilización inicial de **Framework Genérico V4.1.0-borrador**.

Estas decisiones no declaran V4.1.0 como versión estable. Formalizan la infraestructura de gobernanza necesaria para que la rama pueda avanzar con trazabilidad, validación, wiki, archivo y eventual evaluación de estabilización.

---

## 1. Estado general

```text
V4.0.0: cerrada como base histórica.
V4.1.0-borrador: abierta y avanzada en nivel N3.
V4.1.0-estable: no declarada.
Automatización: no activada todavía.
```

---

## 2. Tabla resumen de decisiones

| ID | Decisión | Estado | Tipo de cambio | Documento principal |
|---|---|---|---|---|
| D-A29 | Crear Índice Maestro de Documentos | Aceptada y ejecutada | Gobernanza documental | Índice Maestro |
| D-A30 | Crear Manifest JSON V4.1.0-borrador | Aceptada y ejecutada | Extensión técnica documental | Manifest JSON |
| D-A31 | Crear Mapa Macro-Meso-Micro | Aceptada y ejecutada | Gobernanza arquitectónica | Mapa Macro-Meso-Micro |
| D-A32 | Crear Matriz N1-N4 | Aceptada y ejecutada | Gobernanza operativa | Matriz N1-N4 |
| D-A33 | Crear Matriz Gates | Aceptada y ejecutada | Gobernanza operativa y evaluación | Matriz Gates |
| D-A34 | Crear CHECKS | Aceptada y ejecutada | Validación operativa | CHECKS |
| D-A35 | Crear WIKI_SYNC | Aceptada y ejecutada | Gobernanza documental y transferencia | WIKI_SYNC |
| D-A36 | Crear Plan de Archivo Histórico | Aceptada y ejecutada | Archivo y memoria institucional | Plan de Archivo |
| D-A37 | Crear Protocolo de Paso de Borrador a Estable | Aceptada y ejecutada | Gobernanza de versión y release | Protocolo de Paso a Estable |

---

## 3. D-A29 — Índice Maestro de Documentos

**Decisión:**  
Crear el Índice Maestro de Documentos del Framework Genérico V4.1.0-borrador como documento de control, navegación, trazabilidad y continuidad.

**Estado:** Aceptada y ejecutada.

**Tipo de cambio:** Ajuste menor de gobernanza documental.

**Justificación:**  
La rama V4.1.0-borrador requería una pieza que organizara documentos base, derivados, gobernanza, wiki, archivo y próximos productos sin alterar la macroarquitectura V4.0.0.

**Impacto:**  
Alto para navegación, continuidad, archivo y operación humano-IA.

**Riesgo:**  
Bajo si se mantiene como índice y no como documento que reescribe contenidos base.

**Documentos afectados:**

```text
README V4.1.0-borrador
Manifest JSON
Changelog
Registro de decisiones
Primer
```

**Documento producido:**

```text
2026-05-04_Indice_Maestro_Documentos_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

**Recomendación de continuidad:**  
Actualizar el índice cada vez que se añada, archive o estabilice un documento.

---

## 4. D-A30 — Manifest JSON V4.1.0-borrador

**Decisión:**  
Crear manifest JSON V4.1.0-borrador v0.1 como inventario legible por máquina para repositorios, agentes IA, wiki, archivo histórico y automatización futura.

**Estado:** Aceptada y ejecutada.

**Tipo de cambio:** Extensión técnica documental.

**Justificación:**  
El índice maestro necesitaba una versión estructurada, interoperable y legible por máquina.

**Impacto:**  
Alto para interoperabilidad, agentes IA, repositorios, archivo histórico y futuras automatizaciones.

**Riesgo:**  
Medio si queda desactualizado respecto al índice maestro. Bajo si se actualiza en cada cambio relevante.

**Documentos afectados:**

```text
Índice maestro
README
Plan de archivo
Futuros registros de agentes
```

**Documento producido:**

```text
2026-05-04_manifest_framework_v4_1_0_borrador_v0-1.json
```

**Recomendación de continuidad:**  
Mantener sincronía entre manifest, índice maestro y archivo.

---

## 5. D-A31 — Mapa Macro-Meso-Micro

**Decisión:**  
Crear el Mapa Macro-Meso-Micro del Framework Genérico V4.1.0-borrador para ubicar arquitectura madre, capas transversales, perfiles, Caleidoscopio, documentos operativos, gobernanza, wiki y archivo.

**Estado:** Aceptada y ejecutada.

**Tipo de cambio:** Ajuste menor de gobernanza arquitectónica.

**Justificación:**  
La V4.1.0-borrador necesitaba controlar escalas para evitar que piezas micro alteraran la macroarquitectura.

**Impacto:**  
Alto para navegación estructural, control de cambios y prevención de proliferación.

**Riesgo:**  
Bajo si se usa como mapa y no como reestructuración.

**Documentos afectados:**

```text
README
Índice maestro
Manifest JSON
Matriz N1-N4
Matriz Gates
```

**Documento producido:**

```text
2026-05-04_Mapa_Macro_Meso_Micro_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

**Recomendación de continuidad:**  
Usar este mapa antes de proponer documentos, subcarpetas o automatizaciones.

---

## 6. D-A32 — Matriz N1-N4

**Decisión:**  
Crear la Matriz N1-N4 del Framework Genérico V4.1.0-borrador para definir niveles de activación, documentos mínimos, perfiles, evidencias, Gates, riesgos, señales de escalamiento y señales de desescalamiento.

**Estado:** Aceptada y ejecutada.

**Tipo de cambio:** Ajuste menor de gobernanza operativa.

**Justificación:**  
Era necesario regular la escala de activación del framework para evitar sobrecarga documental y subgobernanza.

**Impacto:**  
Alto para usabilidad, escalabilidad, evaluación y adopción.

**Riesgo:**  
Bajo si se usa como guía proporcional y no como burocracia rígida.

**Documentos afectados:**

```text
README
Índice maestro
Manifest JSON
Mapa macro-meso-micro
Matriz Gates
CHECKS
```

**Documento producido:**

```text
2026-05-04_Matriz_N1_N4_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

**Recomendación de continuidad:**  
Mantener V4.1.0-borrador en N3 hasta completar criterios de estabilización.

---

## 7. D-A33 — Matriz Gates

**Decisión:**  
Crear la Matriz Gates del Framework Genérico V4.1.0-borrador para formalizar compuertas de validación por nivel, perfil, producto, evidencia, ética, accesibilidad, documentación, archivo y continuidad.

**Estado:** Aceptada y ejecutada.

**Tipo de cambio:** Ajuste menor de gobernanza operativa y evaluación.

**Justificación:**  
Los niveles N1-N4 requerían compuertas claras para decidir cuándo avanzar, cerrar, publicar, archivar o estabilizar.

**Impacto:**  
Alto para calidad, trazabilidad, ética, accesibilidad y continuidad.

**Riesgo:**  
Bajo si se aplican proporcionalmente por nivel.

**Documentos afectados:**

```text
Matriz N1-N4
CHECKS
README
Índice maestro
Manifest JSON
```

**Documento producido:**

```text
2026-05-04_Matriz_Gates_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

**Recomendación de continuidad:**  
Usar Gates como compuertas flexibles, no como trabas mecánicas.

---

## 8. D-A34 — CHECKS

**Decisión:**  
Crear CHECKS Framework Genérico V4.1.0-borrador v0.1 como documento operativo de listas verificables para niveles N1-N4, perfiles transversales, Caleidoscopio, IA responsable, ética, accesibilidad, documentación activa, wiki_sync, archivo y paso futuro de borrador a estable.

**Estado:** Aceptada y ejecutada.

**Tipo de cambio:** Ajuste menor de gobernanza operativa y evaluación.

**Justificación:**  
La Matriz Gates necesitaba traducirse a listas prácticas de verificación.

**Impacto:**  
Alto para control cotidiano, cierre de sesiones, calidad y evaluación.

**Riesgo:**  
Bajo si se aplica proporcionalmente y no como ritual rígido.

**Documentos afectados:**

```text
Matriz Gates
WIKI_SYNC
Plan de archivo
Protocolo de paso a estable
```

**Documento producido:**

```text
2026-05-04_CHECKS_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

**Recomendación de continuidad:**  
Aplicar CHECKS antes de cerrar productos, wiki, archivo o estabilización.

---

## 9. D-A35 — WIKI_SYNC

**Decisión:**  
Crear WIKI_SYNC Framework Genérico V4.1.0-borrador v0.1 como protocolo de sincronización entre documentación oficial, Wiki humana, guías de perfiles, Caleidoscopio, niveles N1-N4, Gates, CHECKS, archivo histórico y continuidad.

**Estado:** Aceptada y ejecutada.

**Tipo de cambio:** Ajuste menor de gobernanza documental y transferencia.

**Justificación:**  
La wiki humana debe ser parte del proceso, no una tarea posterior.

**Impacto:**  
Alto para adopción, enseñanza, accesibilidad, transferencia y continuidad.

**Riesgo:**  
Medio si no se ejecutan las páginas prioritarias. Bajo si se aplica por prioridad.

**Documentos afectados:**

```text
README
Índice maestro
Matriz N1-N4
Matriz Gates
CHECKS
Plan de archivo
```

**Documento producido:**

```text
2026-05-04_WIKI_SYNC_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

**Recomendación de continuidad:**  
Crear primero Home V4.1.0, Guía de Inicio Rápido, Guía N1-N4, Guía Gates/CHECKS y Guía Caleidoscopio C1-C7.

---

## 10. D-A36 — Plan de Archivo Histórico

**Decisión:**  
Crear el Plan de Archivo Histórico del Framework Genérico V4.0.0 y V4.1.0-borrador v0.1 para preservar V4.0.0, la capa de Perfiles Transversales y Caleidoscopio, la apertura V4.1.0-borrador, documentos de gobernanza, manifest, matrices, checks, wiki_sync y futuros paquetes de release.

**Estado:** Aceptada y ejecutada.

**Tipo de cambio:** Ajuste menor de gobernanza documental y archivo.

**Justificación:**  
El cierre de V4.0.0 y la apertura de V4.1.0-borrador necesitaban preservación ordenada y reactivable.

**Impacto:**  
Alto para memoria institucional, auditoría, transferencia y continuidad.

**Riesgo:**  
Bajo si se ejecuta como plan de archivo y no como reestructuración.

**Documentos afectados:**

```text
README
Índice maestro
Manifest JSON
WIKI_SYNC
CHECKS
Changelog
Registro de decisiones
Primer
```

**Documento producido:**

```text
2026-05-04_Plan_Archivo_Historico_Framework_Generico_V4_0_0_y_V4_1_0_Borrador_v0-1.md
```

**Recomendación de continuidad:**  
Preparar paquete de archivo cuando se cierre esta etapa de V4.1.0-borrador.

---

## 11. D-A37 — Protocolo de Paso de Borrador a Estable

**Decisión:**  
Crear el Protocolo de Paso de Borrador a Estable del Framework Genérico V4.1.0 v0.1 para definir documentos obligatorios, criterios de madurez, Gates, CHECKS, WIKI_SYNC, archivo, validación humana, release notes y paquete de release antes de declarar V4.1.0 como versión estable.

**Estado:** Aceptada y ejecutada.

**Tipo de cambio:** Ajuste menor de gobernanza de versión y release.

**Justificación:**  
V4.1.0-borrador necesitaba una ruta explícita de estabilización sin declarar estabilidad prematura.

**Impacto:**  
Alto para gobernanza, release, adopción, transferencia y futura institucionalización.

**Riesgo:**  
Bajo si se usa como protocolo de evaluación y no como obligación inmediata de estabilizar.

**Documentos afectados:**

```text
README
Índice maestro
Manifest JSON
Matriz N1-N4
Matriz Gates
CHECKS
WIKI_SYNC
Plan de archivo
Changelog
Registro de decisiones
Primer
```

**Documento producido:**

```text
2026-05-04_Protocolo_Paso_Borrador_a_Estable_Framework_Generico_V4_1_0_v0-1.md
```

**Recomendación de continuidad:**  
No declarar V4.1.0 estable hasta completar evaluación, páginas wiki prioritarias, release notes, archivo y validación humana explícita.

---

## 12. Decisiones pendientes derivadas

Estas decisiones no se registran como tomadas todavía, pero quedan sugeridas para próximos ciclos:

```text
D-A38 — Actualizar Primer de Continuidad V4.1.0-borrador con D-A29 a D-A37.
D-A39 — Crear páginas Wiki prioritarias de V4.1.0-borrador.
D-A40 — Crear Reporte de Evaluación de Preparación V4.1.0-estable.
D-A41 — Crear Release Notes preliminares V4.1.0-borrador.
D-A42 — Preparar paquete de archivo V4.1.0-borrador.
```

---

## 13. Estado de madurez después de D-A37

| Área | Estado |
|---|---|
| Navegación documental | Verde |
| Manifest técnico | Verde |
| Mapa estructural | Verde |
| Niveles N1-N4 | Verde |
| Gates | Verde |
| CHECKS | Verde |
| WIKI_SYNC | Verde como protocolo, pendiente como ejecución |
| Archivo | Verde como plan, pendiente como paquete |
| Paso a estable | Verde como protocolo, pendiente como evaluación |
| V4.1.0-estable | No declarada |

---

## 14. Recomendación final

Mantener la rama en:

```text
V4.1.0-borrador avanzado
Nivel N3
```

No pasar a estable hasta completar:

```text
Primer actualizado
Wiki prioritaria
Reporte de evaluación
Release notes
Paquete de archivo
Validación humana explícita
```

---

## 15. Cierre

Este registro deja formalizadas las decisiones que convierten V4.1.0-borrador en una rama navegable, gobernada, verificable y preparable para estabilización futura. La arquitectura ya no está en niebla: tiene planos, compuertas, llaves, archivo y protocolo de paso.

**Estado:** Listo para validación.  
**Siguiente acción:** Actualizar Primer de Continuidad V4.1.0-borrador con D-A29 a D-A37.
