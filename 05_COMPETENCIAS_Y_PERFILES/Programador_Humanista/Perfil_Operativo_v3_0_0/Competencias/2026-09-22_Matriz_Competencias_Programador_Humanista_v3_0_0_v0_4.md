# Matriz de Competencias
## Programador Humanista v3.0.0 - robustecimiento post integración


**Código documental:** `2026-09-17_Matriz_Competencias_Programador_Humanista_v3_0_0_v0_3`  
**Versión:** v0.4  
**Estado:** Aprobado por humano · robustecimiento post integración 2026-09-22  
**Fecha:** 2026-09-22  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Perfil:** Programador Humanista  
**Fase:** Fase 1 - auditoría, normalización y actualización  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Competencias/`  
**Documento antecedente:** `matriz_competencias_programador_humanista_v_3_0_0_v_0_2.md`  
**Documentos base aprobados:** Alcance v0.3 + Mapa Rector v0.3 + Fórmula Nuclear v0.3  
**Función arquitectónica:** CAPACIDAD  
**Autoridad final:** validación humana  
**Estado de residencia:** aprobado para consolidación canónica  

---

## 1. Propósito

Esta matriz traduce la Fórmula Nuclear PH v0.3 en **capacidades observables, evaluables y transferibles**.

No organiza oficios completos de IT, AT o de la macroestructura dentro del PH.

La pregunta rectora es:

> ¿Qué debe ser capaz de hacer el Programador Humanista para convertir necesidades humanas situadas en configuraciones tecnológicas funcionales, gobernables y evolutivas?

---

## 2. Tesis de competencia

```text
Competencia PH =
capacidad tecnológica observable
+ decisión situada
+ funcionalidad verificable
+ responsabilidad sobre riesgos materiales
+ trazabilidad proporcional
+ juicio humano
+ posibilidad de evolución
```

Una competencia PH no queda demostrada por:

```text
conocer una herramienta;
producir código;
usar IA;
completar un checklist;
desplegar una aplicación;
acumular documentación.
```

Debe existir relación coherente entre propósito, diseño, construcción, verificación y responsabilidad.

---

## 3. Niveles comunes N1-N4

| Nivel | Lectura PH |
|---|---|
| N1 - Exploración guiada | Reconoce propósito, componentes, riesgos y decisiones básicas con apoyo significativo. |
| N2 - Producción asistida | Construye artefactos acotados con asistencia, pruebas y documentación básica. |
| N3 - Integración avanzada | Integra arquitectura, construcción, IA cuando aplica, verificación, seguridad, documentación y evolución con autonomía sustantiva. |
| N4 - Ecosistema gobernado | Sostiene sistemas complejos, auditables, mantenibles, transferibles y gobernados a escala de equipo o ecosistema. |

N1-N4 no equivale a cantidad de herramientas, complejidad del stack ni promedio universal.

---

## 4. Familias de competencias normalizadas

La matriz propone ocho familias.

| Código | Familia | Función |
|---|---|---|
| PH-C01 | Situación, propósito y criterios de intervención | Delimitar qué problema tecnológico debe atenderse, para quién y bajo qué restricciones. |
| PH-C02 | Diseño computacional y arquitectura | Traducir necesidades en componentes, flujos, interfaces, datos, dependencias y límites. |
| PH-C03 | Construcción e integración tecnológica | Implementar y conectar artefactos, servicios, datos e IA cuando corresponda. |
| PH-C04 | Verificación, confiabilidad y recuperación | Probar funcionamiento, fallos, criterios de aceptación y capacidad de recuperación. |
| PH-C05 | Integración H-M-IA y automatización responsable | Diseñar roles, permisos, límites, validaciones, revisión humana y fallback. |
| PH-C06 | Seguridad, privacidad y accesibilidad en construcción | Incorporar responsabilidades longitudinales sin duplicar la infraestructura común. |
| PH-C07 | Documentación, trazabilidad y continuidad técnica | Dejar rastro suficiente para comprensión, revisión, mantenimiento y transferencia. |
| PH-C08 | Mantenimiento, evolución y transferencia situada | Sostener cambios, deuda, retiro, reactivación y relación reversible con otras lentes. |

La reducción de diez a ocho familias no busca simplificar por estética. Elimina competencias históricas que absorbían funciones completas de IT, AT o del dominio educativo.

---

## 5. PH-C01 - Situación, propósito y criterios de intervención

### Capacidad

Delimitar una necesidad humana situada y decidir si requiere intervención tecnológica, con qué propósito y bajo qué restricciones.

### Progresión

| Nivel | Desempeño observable |
|---|---|
| N1 | Reconoce usuario, contexto, necesidad y propósito con guía. |
| N2 | Formula requisitos básicos, criterios de aceptación y límites. |
| N3 | Delimita necesidades complejas, conflictos de requisitos, riesgos y prioridades con autonomía. |
| N4 | Gobierna criterios de intervención en contextos múltiples, equipos o sistemas interdependientes. |

### Evidencia posible

```text
ficha de contexto
requisitos
criterios de aceptación
mapa de actores
registro de decisiones
supuestos y restricciones
```

### Deriva a evitar

```text
problema humano → tecnología asumida sin justificación
```

---

## 6. PH-C02 - Diseño computacional y arquitectura

### Capacidad

Transformar necesidades en una arquitectura comprensible y proporcional.

Incluye:

```text
componentes
flujos
datos
interfaces
estados
dependencias
límites de confianza
puntos de revisión
criterios de integración
```

### Progresión

| Nivel | Desempeño observable |
|---|---|
| N1 | Descompone un problema y representa un flujo simple. |
| N2 | Modela componentes, entradas, salidas y dependencias básicas. |
| N3 | Diseña arquitectura modular con límites, riesgos y decisiones justificadas. |
| N4 | Diseña arquitecturas evolutivas, auditables, resilientes y transferibles a escala. |

### Evidencia posible

```text
diagrama
pseudocódigo
mapa de componentes
ADR / registro de decisión
contratos de interfaz
modelo de datos
```

### Regla

```text
arquitectura madura != arquitectura compleja
```

---

## 7. PH-C03 - Construcción e integración tecnológica

### Capacidad

Construir o integrar componentes tecnológicos de manera funcional, trazable y proporcional al problema.

Puede incluir:

```text
código
scripts
APIs
servicios
interfaces
datos
automatizaciones
infraestructura
modelos de IA
componentes externos
```

### Progresión

| Nivel | Desempeño observable |
|---|---|
| N1 | Ejecuta o modifica artefactos guiados sin perder comprensión básica. |
| N2 | Construye un prototipo acotado con apoyo y documentación mínima. |
| N3 | Integra múltiples componentes, dependencias y pruebas con autonomía sustantiva. |
| N4 | Sostiene sistemas complejos, modulares y evolutivos con integración gobernada. |

### Evidencia posible

```text
repositorio
código
configuración
pull request
prototipo
servicio
interfaz
pipeline de integración
```

### Deriva a evitar

```text
producir más código = mayor madurez
```

---

## 8. PH-C04 - Verificación, confiabilidad y recuperación

### Capacidad

Comprobar que la construcción responde a su propósito y reconocer cómo falla.

Incluye:

```text
pruebas funcionales
pruebas de integración
criterios de aceptación
revisión de errores
observabilidad proporcional
fallback
rollback
recuperación
```

### Progresión

| Nivel | Desempeño observable |
|---|---|
| N1 | Ejecuta pruebas básicas guiadas y registra resultados. |
| N2 | Define casos de prueba, criterios de aceptación y límites conocidos. |
| N3 | Integra verificación reproducible, manejo de fallos y recuperación proporcional. |
| N4 | Diseña estrategias de confiabilidad, observabilidad y recuperación para sistemas complejos. |

### Evidencia posible

```text
tests
resultados reproducibles
logs
checklist de aceptación
incidente documentado
rollback probado
runbook
```

### Regla

```text
funciona en demostración != confiabilidad
```

---

## 9. PH-C05 - Integración H-M-IA y automatización responsable

### Capacidad

Diseñar técnicamente la colaboración entre personas, máquinas e IA sin desplazar juicio humano ni ocultar límites.

Debe poder definir:

```text
roles
permisos
entradas y salidas
validaciones
puntos de revisión
fallbacks
trazabilidad
límites de automatización
```

### Progresión

| Nivel | Desempeño observable |
|---|---|
| N1 | Usa IA o automatización con propósito explícito y revisión humana guiada. |
| N2 | Integra una herramienta o modelo en un flujo acotado y documentado. |
| N3 | Diseña flujos H-M-IA reproducibles con permisos, validación, límites y fallback. |
| N4 | Gobierna arquitecturas H-M-IA complejas con observabilidad, control humano y evolución. |

### Evidencia posible

```text
mapa de roles
flujo H-M-IA
registro de decisiones
configuración
evaluación de límites
fallback
trazabilidad de transformaciones
```

### Regla

```text
automatización != autonomía responsable
```

---

## 10. PH-C06 - Seguridad, privacidad y accesibilidad en construcción

### Capacidad

Incorporar en la construcción los requisitos materiales de seguridad, privacidad y accesibilidad que correspondan al contexto.

PH no necesita poseer toda la infraestructura ni especialización del Framework.

Debe saber:

```text
detectar riesgo
aplicar controles pertinentes
documentar límites
invocar especialistas o funciones comunes
detener avance cuando corresponda
```

### Progresión

| Nivel | Desempeño observable |
|---|---|
| N1 | Reconoce datos, permisos, accesibilidad y riesgos básicos. |
| N2 | Aplica controles y revisiones iniciales con apoyo. |
| N3 | Integra seguridad, privacidad y accesibilidad en arquitectura, construcción y pruebas. |
| N4 | Gobierna su aplicación en sistemas complejos, equipos y ciclos de evolución. |

### Evidencia posible

```text
registro de riesgo
revisión de permisos
prueba de accesibilidad
gestión de secretos
revisión de dependencia
decisión de bloqueo
excepción documentada
```

### Regla no compensable

Un riesgo crítico no resuelto no puede ser compensado por alta funcionalidad, estética, productividad o documentación.

---

## 11. PH-C07 - Documentación, trazabilidad y continuidad técnica

### Capacidad

Documentar decisiones y estados con suficiente calidad para que otra persona pueda comprender, revisar y continuar el trabajo.

### Progresión

| Nivel | Desempeño observable |
|---|---|
| N1 | Mantiene notas, README o registro básico con guía. |
| N2 | Documenta cambios, dependencias, uso y límites de un artefacto acotado. |
| N3 | Mantiene documentación viva conectada con arquitectura, pruebas, riesgos y versiones. |
| N4 | Gobierna documentación multiusuario, auditable y reactivable a escala de ecosistema. |

### Evidencia posible

```text
README
ADR
changelog
bitácora
issues
guía técnica
runbook
registro de versión
documentación de API
```

### Regla

```text
documentación extensa != trazabilidad útil
```

---

## 12. PH-C08 - Mantenimiento, evolución y transferencia situada

### Capacidad

Gestionar continuidad, cambio, deuda, retiro y transferencia sin congelar el sistema ni convertir la transferencia en obligación universal.

Incluye:

```text
mantenimiento
actualización
deuda técnica
retiro
reactivación
entrega
recepción
transformación
devolución
reapertura
```

### Progresión

| Nivel | Desempeño observable |
|---|---|
| N1 | Reconoce pendientes, límites y próximos pasos. |
| N2 | Define mantenimiento básico, versión siguiente o transferencia acotada. |
| N3 | Gestiona cambios, deuda, continuidad y transferencia reversible con autonomía. |
| N4 | Gobierna evolución, retiro y transferencia en sistemas, equipos o ecosistemas complejos. |

### Evidencia posible

```text
backlog
roadmap
release
deuda técnica
plan de retiro
registro de transferencia
postmortem
plan de evolución
```

### Regla

```text
transferencia situada != traducción triádica obligatoria
```

---

## 13. Competencias que dejan de ser familias PH autónomas

La normalización retira como familias identitarias independientes:

### Diseño educativo

Se conserva como dominio histórico/piloto y como capacidad invocable cuando el problema es educativo.

No define universalmente PH.

### Investigación y evidencia

PH conserva evidencia funcional/técnica, pero no absorbe diseño metodológico, validación o responsabilidad epistemológica IT.

### Arte, mediación y experiencia significativa

PH conserva interacción, legibilidad y accesibilidad funcional.

No absorbe práctica artística, interpretación o mediación AT.

### Gobernanza general

PH conserva gobernanza de sus decisiones, límites y evolución.

La gobernanza transversal del Framework no se duplica como competencia propia completa.

---

## 14. Matriz maestra resumida

| Familia | N1 | N2 | N3 | N4 |
|---|---|---|---|---|
| C01 Situación y propósito | reconoce contexto | formula requisitos | gobierna restricciones | coordina contextos múltiples |
| C02 Diseño y arquitectura | descompone | modela | diseña modularmente | gobierna arquitectura evolutiva |
| C03 Construcción e integración | modifica | prototipa | integra | sostiene sistemas complejos |
| C04 Verificación y confiabilidad | prueba guiada | define casos | integra recuperación | gobierna confiabilidad |
| C05 H-M-IA | usa con revisión | integra flujo acotado | diseña flujo gobernado | gobierna ecosistema H-M-IA |
| C06 Seguridad/privacidad/accesibilidad | reconoce | aplica controles | integra longitudinalmente | gobierna a escala |
| C07 Documentación/trazabilidad | registra | documenta artefacto | mantiene documentación viva | gobierna continuidad |
| C08 Evolución/transferencia | reconoce pendientes | planifica continuidad | gestiona cambio y transferencia | gobierna evolución ecosistémica |

---

## 15. Relación con evidencia

La evidencia PH responde principalmente a:

```text
¿qué se construyó?
¿cómo funciona?
¿bajo qué condiciones?
¿qué se verificó?
¿qué falló?
¿qué riesgo permanece?
¿qué cambió?
¿cómo continuar?
```

Puede incluir:

```text
código
tests
logs
configuraciones
PR
diagramas
decisiones
incidentes
versiones
documentación
```

No se llama automáticamente evidencia investigativa.

---

## 16. Relación con IT y AT

### Cuando PH necesita IT

Puede transferir:

```text
datos operativos
instrumentos
logs
anomalías
restricciones
preguntas
artefactos
```

IT puede devolver:

```text
evidencia
incertidumbre
criterios metodológicos
hallazgos
preguntas reformuladas
```

### Cuando PH necesita AT

Puede transferir:

```text
interfaces
artefactos
posibilidades técnicas
restricciones
interacciones
materialidades computacionales
```

AT puede devolver:

```text
configuraciones
criterios de representación
tensiones sensibles
posibilidades de interacción
problemas de mediación
```

No existe obligación de activar ambos perfiles en cada caso.

---

## 17. Relación con Unidades Nucleares

Las futuras Unidades Nucleares deben combinar varias competencias.

Ejemplo:

```text
C01 + C02 + C03 + C04 + C06 + C07
→ posible actuación de construcción verificable

C02 + C03 + C05 + C06 + C07 + C08
→ posible actuación de integración H-M-IA gobernada
```

La matriz no fija todavía el número final de Unidades Nucleares.

La coincidencia histórica de diez unidades PH, y la coincidencia de ocho unidades en IT/AT, no son reglas.

---

## 18. Relación con Métricas

La futura Matriz de Métricas deberá valorar al menos:

```text
coherencia propósito-construcción
calidad arquitectónica
funcionalidad verificable
confiabilidad
gobernanza H-M-IA
seguridad / privacidad / accesibilidad
trazabilidad
mantenibilidad
evolución
transferencia cuando corresponda
```

No debe usar un promedio universal como autoridad final de madurez.

Los gates críticos pueden bloquear avance.

---

## 19. Anti-competencias

No constituyen por sí solas madurez PH:

```text
dominar muchos lenguajes;
usar el modelo de IA más avanzado;
tener CI/CD;
tener Kubernetes;
producir muchas aplicaciones;
documentar exhaustivamente;
hacer investigación completa;
crear narrativa artística;
usar herramientas de seguridad sofisticadas;
automatizar todo.
```

La madurez depende de relaciones coherentes y gobernadas.

---

## 20. Criterios de estabilidad

La matriz puede considerarse estable si:

- deriva de la Fórmula Nuclear aprobada;
- cubre construcción tecnológica situada de extremo a extremo;
- mantiene N1-N4;
- separa evidencia funcional de responsabilidad epistemológica IT;
- separa experiencia funcional de responsabilidad artística AT;
- trata H-M-IA como integración PH, no como arquitectura general propia;
- conserva seguridad, privacidad y accesibilidad longitudinales;
- evita promedios compensatorios;
- preserva trazabilidad y mantenimiento;
- permite transferencia situada sin obligarla;
- no depende de herramientas o dominios específicos.

---

## 21. Estado y siguiente movimiento

```text
Documento: Matriz de Competencias Programador Humanista v3.0.0
Versión: v0.3
Estado: Aprobado por humano
Función: CAPACIDAD
Base: Alcance + Mapa Rector + Fórmula Nuclear v0.3 aprobados
Siguiente movimiento: Unidades Nucleares PH revisadas
Fase 2: no iniciada
```

---

## 22. Robustecimiento post integración con prototipo real

**Origen de la reapertura controlada:** prueba de integración con AI StoryLab 1, auditoría estructural y H3 aprobada el 2026-09-22.

La arquitectura de ocho familias permanece estable.

### Refinamiento PH-C07

La madurez documental no se mide por volumen. Se mide por su capacidad para:

- reducir ambigüedad;
- preservar decisiones;
- sostener verificación;
- facilitar continuidad;
- permitir reapertura.

La documentación madura debe mantener relación visible con una o más de estas funciones:

```text
decisión
contrato
criterio de aceptación
prueba
riesgo
dependencia
versión
continuidad
transferencia
```

### Métodos invocables

Una metodología como SDD puede orquestar varias competencias PH sin convertirse en competencia autónoma.

```text
método invocable != competencia
método invocable != identidad de perfil
```

La pertinencia de cada método depende del problema, riesgo y contexto.

### Estado post integración

```text
8 competencias: CONFIRMADAS
expansión estructural: NO requerida
refinamiento interpretativo: APROBADO
Fase 2: no iniciada
```
