# Matriz de Métricas y Valoración
## Programador Humanista v3.0.0 - normalización Fase 1

**Código documental:** `2026-09-17_Matriz_Metricas_Valoracion_Programador_Humanista_v3_0_0_v0_3`  
**Versión:** v0.3  
**Estado:** Aprobado por humano  
**Fecha:** 2026-09-17  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Perfil:** Programador Humanista  
**Fase:** Fase 1 - auditoría, normalización y actualización  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Metricas/`  
**Documento antecedente:** `metricas_iniciales_programador_humanista_n_3_n_4_v_0_2.md`  
**Documentos base aprobados:** Alcance v0.3 + Mapa Rector v0.3 + Fórmula Nuclear v0.3 + Competencias v0.3 + Unidades Nucleares v0.3  
**Función arquitectónica:** CAPACIDAD + ACTUACIÓN / valoración  
**Autoridad final:** validación humana  
**Estado de residencia:** aprobado para consolidación canónica  

---

## 1. Propósito

Esta matriz define cómo valorar la madurez del Programador Humanista sin reducirla a promedios, puntuaciones universales ni acumulación de herramientas.

La versión histórica utilizaba:

```text
escala 0-4
+ promedios
+ umbrales numéricos
+ ponderaciones
```

Ese enfoque ayudó a hacer visible la necesidad de evaluar más que funcionalidad, pero podía ocultar fallos críticos mediante compensación matemática.

La normalización conserva lo útil:

```text
evidencia observable
+ gates
+ no aplica justificado
+ estados de avance
+ bloqueo por riesgo
```

y elimina el promedio universal como autoridad final.

---

## 2. Tesis de valoración

```text
Madurez PH =
coherencia entre propósito
+ arquitectura
+ construcción
+ verificación
+ responsabilidad
+ documentación
+ mantenibilidad
+ evolución
```

La valoración pregunta:

> ¿La actuación tecnológica puede comprenderse, verificarse, gobernarse y continuar de forma proporcional al problema, riesgo y escala?

No pregunta cuántas herramientas se usaron ni cuán sofisticado parece el stack.

---

## 3. Principios

### 3.1 No compensabilidad

Una fortaleza no compensa automáticamente una falla crítica.

```text
buena funcionalidad
!= permiso para ignorar seguridad

mucha documentación
!= permiso para ignorar verificación

alta automatización
!= agencia humana suficiente
```

### 3.2 Proporcionalidad

No todos los proyectos necesitan CI/CD, observabilidad avanzada o infraestructura compleja.

La evidencia debe corresponder a:

```text
riesgo
+ escala
+ exposición
+ dependencia
+ contexto
```

### 3.3 Trazabilidad antes que puntuación

Cuando existe duda, debe ser posible rastrear:

```text
qué se decidió
qué se probó
qué falta
qué riesgo permanece
quién revisó
qué sigue
```

### 3.4 No aplica justificado

Una dimensión puede no aplicar.

Debe explicarse por qué.

```text
No aplica, con justificación
```

es válido.

```text
No aplica
```

sin contexto no es suficiente.

---

## 4. Niveles N1-N4

| Nivel | Lectura evaluativa PH |
|---|---|
| N1 - Exploración guiada | La actuación muestra comprensión inicial y ejecución con apoyo, con rastro mínimo. |
| N2 - Producción asistida | La actuación produce un resultado acotado verificable con apoyo, controles básicos y documentación. |
| N3 - Integración avanzada | La actuación integra múltiples competencias con autonomía, verificación, responsabilidad y continuidad. |
| N4 - Ecosistema gobernado | La actuación se sostiene a escala de sistema/equipo con gobernanza, evolución, mantenimiento y transferencia. |

El nivel se determina por **patrón de evidencia y gates**, no por promedio.

---

## 5. Dimensiones maestras de valoración

| Código | Dimensión | Pregunta rectora |
|---|---|---|
| V-PH-01 | Propósito y situación | ¿La intervención responde a una necesidad situada y justifica el uso de tecnología? |
| V-PH-02 | Arquitectura y decisiones | ¿Los componentes, flujos, dependencias y límites son comprensibles y proporcionales? |
| V-PH-03 | Funcionalidad verificable | ¿Lo construido hace lo que declara hacer bajo condiciones documentadas? |
| V-PH-04 | Integración H-M-IA | ¿Roles, permisos, validaciones, límites y revisión humana están gobernados cuando aplica IA/automatización? |
| V-PH-05 | Confiabilidad y recuperación | ¿Se conocen fallos, criterios de aceptación, recuperación y continuidad pertinentes? |
| V-PH-06 | Seguridad, privacidad y accesibilidad | ¿Los riesgos materiales de la construcción están tratados de forma proporcional? |
| V-PH-07 | Documentación y trazabilidad | ¿Otra persona puede comprender decisiones, estado, límites y continuidad? |
| V-PH-08 | Mantenibilidad y evolución | ¿Existe ruta proporcional de actualización, deuda, soporte, retiro o reactivación? |
| V-PH-09 | Transferencia situada | ¿La relación con otros perfiles/contextos conserva contexto y transformación cuando aplica? |
| V-PH-10 | Gobernanza y juicio humano | ¿Las decisiones críticas, excepciones y responsabilidades permanecen bajo control humano identificable? |

Estas dimensiones no son pesos.

Son lentes de revisión.

---

## 6. Criterios por dimensión

### V-PH-01 - Propósito y situación

**Señales de madurez:**

```text
problema delimitado
actores/contexto identificados
intervención tecnológica justificada
criterios de aceptación
restricciones explícitas
```

**Señales de deuda:**

```text
solución predeterminada
IA por moda
automatización sin necesidad
dominio educativo asumido como requisito universal
```

### V-PH-02 - Arquitectura y decisiones

**Señales de madurez:**

```text
componentes comprensibles
dependencias conocidas
interfaces claras
límites de confianza
decisiones justificadas
```

**Señales de deuda:**

```text
stack sin arquitectura
dependencias opacas
sobrearquitectura
decisiones no registradas
```

### V-PH-03 - Funcionalidad verificable

**Señales de madurez:**

```text
criterios de aceptación
pruebas
resultado reproducible
condiciones de uso
límites conocidos
```

**Señales de deuda:**

```text
demo única
funciona en mi máquina
comportamiento no reproducible
```

### V-PH-04 - Integración H-M-IA

**Señales de madurez:**

```text
roles definidos
permisos delimitados
revisión humana
validaciones
fallback
trazabilidad material
```

**Señales de deuda:**

```text
IA opaca
automatización sin supervisión
salida de modelo tratada como decisión final
```

### V-PH-05 - Confiabilidad y recuperación

**Señales de madurez:**

```text
fallos previsibles considerados
recuperación proporcional
rollback cuando aplica
observabilidad suficiente
incidentes documentados
```

**Señales de deuda:**

```text
sin plan de fallo
sin recuperación en sistema crítico
operación sostenida sin observabilidad mínima
```

### V-PH-06 - Seguridad, privacidad y accesibilidad

**Señales de madurez:**

```text
riesgos identificados
datos y permisos revisados
secretos protegidos
dependencias revisadas
accesibilidad pertinente
bloqueos cuando corresponde
```

**Señales de deuda:**

```text
riesgo crítico sin tratar
privacidad implícita
accesibilidad ignorada sin justificación
```

### V-PH-07 - Documentación y trazabilidad

**Señales de madurez:**

```text
README útil
decisiones rastreables
cambios/versiones
límites
guía de continuidad
```

**Señales de deuda:**

```text
conocimiento solo en chat
documentación ornamental
estado del sistema ambiguo
```

### V-PH-08 - Mantenibilidad y evolución

**Señales de madurez:**

```text
deuda visible
ruta de cambio
responsabilidad de mantenimiento
retiro o archivo cuando aplica
reactivación contextualizada
```

**Señales de deuda:**

```text
prototipo tratado como producto permanente
sin responsable
sin ruta de actualización
```

### V-PH-09 - Transferencia situada

**Señales de madurez:**

```text
transferencia pertinente al problema
procedencia
contexto
transformaciones
límites
devolución o reapertura cuando aplica
```

**Señales de deuda:**

```text
traducción triádica forzada
copia de archivos sin contexto
transferencia declarativa sin cambio rastreable
```

### V-PH-10 - Gobernanza y juicio humano

**Señales de madurez:**

```text
responsables identificados
decisiones críticas humanas
excepciones documentadas
criterios de bloqueo
reapertura gobernada
```

**Señales de deuda:**

```text
nadie asume decisión final
automatización como autoridad
excepción invisible
```

---

## 7. Gates PH normalizados

Los gates son compuertas, no puntuaciones.

| Gate | Nombre | Pregunta | Estado posible |
|---|---|---|---|
| G-PH-0 | Situación y propósito | ¿Está justificada la intervención tecnológica? | pendiente / aprobado / aprobado con deuda / no aplica / bloqueado |
| G-PH-1 | Arquitectura | ¿La arquitectura es comprensible y proporcional? | pendiente / aprobado / aprobado con deuda / no aplica / bloqueado |
| G-PH-2 | Construcción e integración | ¿La implementación conserva control, trazabilidad y límites? | pendiente / aprobado / aprobado con deuda / no aplica / bloqueado |
| G-PH-3 | Verificación | ¿Existe evidencia suficiente de funcionamiento y condiciones de fallo? | pendiente / aprobado / aprobado con deuda / no aplica / bloqueado |
| G-PH-4 | Riesgo y accesibilidad | ¿Los riesgos materiales fueron tratados y los críticos resueltos? | pendiente / aprobado / aprobado con deuda / no aplica / bloqueado |
| G-PH-5 | Continuidad | ¿Existe documentación y mantenibilidad proporcional? | pendiente / aprobado / aprobado con deuda / no aplica / bloqueado |
| G-PH-6 | Evolución y transferencia | ¿El cambio, retiro, transferencia o reapertura están gobernados cuando aplican? | pendiente / aprobado / aprobado con deuda / no aplica / bloqueado |

---

## 8. Reglas de bloqueo

Un gate debe quedar **bloqueado** cuando exista una condición material como:

- riesgo crítico no mitigado;
- exposición no autorizada de datos o secretos;
- ausencia de revisión humana en una decisión crítica H-M-IA;
- funcionalidad declarada sin posibilidad razonable de verificación;
- accesibilidad crítica omitida en un contexto donde sea necesaria;
- dependencia esencial opaca o no gobernada;
- imposibilidad de identificar responsable de una decisión crítica;
- pérdida material de trazabilidad;
- despliegue sostenido sin capacidad mínima de recuperación cuando sea necesaria.

El bloqueo no es castigo. Es una señal de que avanzar sería irresponsable.

---

## 9. Valoración por Unidad Nuclear

| Unidad Nuclear | Dimensiones principales | Gates principales |
|---|---|---|
| UN-PH-01 Situar y especificar | V01, V06, V10 | G0, G4 |
| UN-PH-02 Diseñar arquitectura | V01, V02, V04, V06, V10 | G0, G1, G4 |
| UN-PH-03 Construir e integrar | V02, V03, V04, V06, V07 | G1, G2, G4 |
| UN-PH-04 Verificar, proteger y recuperar | V03, V05, V06, V10 | G3, G4 |
| UN-PH-05 Documentar y hacer mantenible | V07, V08, V10 | G5 |
| UN-PH-06 Transferir, evolucionar y reabrir | V08, V09, V10 | G5, G6 |

Las asociaciones son rectoras, no exclusivas.

---

## 10. Lectura de madurez por patrón

### N1

Patrón típico:

```text
propósito reconocido
+ actuación guiada
+ evidencia inicial
+ riesgo básico identificado
```

### N2

Patrón típico:

```text
artefacto acotado verificable
+ decisiones básicas registradas
+ controles iniciales
+ documentación suficiente
```

### N3

Patrón típico:

```text
arquitectura coherente
+ construcción integrada
+ verificación reproducible
+ riesgo gobernado
+ trazabilidad
+ continuidad
```

### N4

Patrón típico:

```text
sistema/ecosistema gobernado
+ evolución sostenida
+ recuperación
+ múltiples responsables
+ auditoría
+ transferencia/reactivación
```

No todas las dimensiones tienen que verse idénticas en todos los proyectos.

---

## 11. Estados globales de valoración

| Estado | Significado |
|---|---|
| Exploratorio | La actuación es temprana y útil para aprender, pero no estable. |
| En desarrollo | Hay estructura suficiente para continuar con deuda visible. |
| Apto con observaciones | Puede avanzar con deuda no bloqueante documentada. |
| Maduro para su alcance | Cumple el patrón N1-N4 correspondiente al alcance declarado. |
| Requiere reapertura | Una decisión, cambio o evidencia nueva exige volver a una etapa anterior. |
| Bloqueado | No debe avanzar sin corregir o decidir explícitamente una condición crítica. |

No existe un estado "aprobado por promedio".

---

## 12. Evidencia mínima proporcional

La evidencia depende del tipo de actuación.

Puede incluir:

```text
requisitos
diagramas
código
tests
logs
PR
configuraciones
checklists
revisión de accesibilidad
decisiones
README
changelog
runbook
backlog
release
postmortem
registro de transferencia
```

No todos los objetos son obligatorios.

La ausencia debe interpretarse según contexto y riesgo.

---

## 13. No compensabilidad

Ejemplos:

```text
10 pruebas exitosas
no compensan
1 exposición crítica de secretos

excelente UX
no compensa
ausencia de control humano en decisión crítica

documentación extensa
no compensa
sistema imposible de verificar

alta innovación
no compensa
riesgo material no tratado
```

La matriz debe permitir reconocer estas condiciones sin esconderlas en un promedio.

---

## 14. Relación con IT y AT

La valoración PH no califica desempeño IT o AT.

Cuando una dimensión excede la responsabilidad PH:

```text
afirmación epistemológica
→ transferir / colaborar con IT

valoración artística o mediación sensible
→ transferir / colaborar con AT
```

PH conserva la responsabilidad de integrar los resultados pertinentes en la construcción.

---

## 15. Relación con educación

En proyectos educativos pueden añadirse criterios de:

```text
aprendizaje
accesibilidad educativa
interacción pedagógica
privacidad de estudiantes
evaluación de uso
```

Estos criterios son **contextuales**.

No se convierten en dimensiones universales del perfil.

---

## 16. Plantilla mínima de valoración

```text
Objeto evaluado:
Versión:
Contexto:
Alcance declarado:
Responsable:
Revisor humano:

Dimensiones aplicables:
V-PH-01:
V-PH-02:
V-PH-03:
V-PH-04:
V-PH-05:
V-PH-06:
V-PH-07:
V-PH-08:
V-PH-09:
V-PH-10:

Gates:
G-PH-0:
G-PH-1:
G-PH-2:
G-PH-3:
G-PH-4:
G-PH-5:
G-PH-6:

Deuda no bloqueante:
Riesgos bloqueantes:
Transferencias activadas:
Decisión humana:
Estado global:
Próxima acción:
```

---

## 17. Antipatrones de valoración

```text
promedio mágico
ponderación universal
checklist sin evidencia
N4 por complejidad tecnológica
N4 por usar IA avanzada
seguridad como porcentaje compensable
transferencia obligatoria
evaluar IT o AT desde criterios PH
documentación como volumen
```

La evaluación debe sostener juicio, no reemplazarlo.

---

## 18. Qué se conserva de v0.2

Se preservan:

- evaluación multidimensional;
- evidencia observable;
- estados de gate;
- "no aplica" justificado;
- bloqueo por riesgo;
- documentación y mantenibilidad como madurez;
- rechazo al prototipo que solo funciona en demostración;
- seguridad longitudinal;
- necesidad de revisión humana.

Se retiran o reinterpretan:

```text
promedios universales
umbrales 1.0 / 1.8 / 2.5 / 3.0 / 3.5 / 3.8
ponderaciones porcentuales
obligación de evidencia investigativa
obligación de mediación artística
transferencia triádica universal
escalabilidad como requisito universal N4
```

---

## 19. Criterios de estabilidad

La matriz puede considerarse estable si:

- permite valorar N1-N4 sin promedio universal;
- conserva gates y bloqueo;
- no compensa riesgos críticos;
- diferencia evidencia técnica de evidencia IT;
- no exige criterios artísticos AT;
- mantiene H-M-IA bajo juicio humano;
- permite proporcionalidad;
- trata educación como contexto, no identidad;
- valora documentación y mantenibilidad;
- permite reapertura;
- no depende de herramientas concretas.

---

## 20. Estado y siguiente movimiento

```text
Documento: Matriz de Métricas y Valoración PH v3.0.0
Versión: v0.3
Estado: Aprobado por humano
Función: CAPACIDAD + ACTUACIÓN / valoración
Base: Alcance + Mapa + Fórmula + Competencias + UN v0.3 aprobados
Siguiente movimiento: frontera de Conocimiento PH
Fase 2: no iniciada
```
