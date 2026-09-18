# Unidades Nucleares
## Programador Humanista v3.0.0 - normalización Fase 1

**Código documental:** `2026-09-17_Unidades_Nucleares_Programador_Humanista_v3_0_0_v0_3`  
**Versión:** v0.3  
**Estado:** Aprobado por humano  
**Fecha:** 2026-09-17  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Perfil:** Programador Humanista  
**Fase:** Fase 1 - auditoría, normalización y actualización  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Unidades_Nucleares/`  
**Documento antecedente:** `Unidades_Nucleares_Programador_Humanista_v3_0_0_v0_2.md`  
**Documentos base aprobados:** Alcance v0.3 + Mapa Rector v0.3 + Fórmula Nuclear v0.3 + Matriz de Competencias v0.3  
**Función arquitectónica:** ACTUACIÓN  
**Autoridad final:** validación humana  
**Estado de residencia:** aprobado para consolidación canónica  

---

## 1. Propósito

Este documento define las **Unidades Nucleares (UN)** del Programador Humanista como configuraciones recurrentes de actuación.

Una Unidad Nuclear no es:

```text
curso
módulo formativo
herramienta
metodología
plantilla
aplicación
producto
proyecto
agente
```

Es una configuración integrada de competencias mediante la cual el PH expresa su lógica propia de manera observable, evaluable y transferible.

---

## 2. Tesis de actuación

La Fórmula Nuclear aprobada establece:

```text
PH =
Propósito humano situado
+ Diseño computacional
+ Construcción funcional
+ Integración responsable
+ Verificación
+ Documentación viva
+ Evolución mantenible
```

Las Unidades Nucleares convierten esa fórmula en patrones de actuación.

Regla:

```text
varias competencias
→ una Unidad Nuclear
→ práctica o recurso del Framework
→ artefacto/proyecto
→ evidencia
→ evaluación
```

---

## 3. Número de Unidades Nucleares

La versión histórica propuso diez unidades, varias organizadas como módulos temáticos o dominios completos.

La normalización propone **seis Unidades Nucleares**.

El número surge de la lógica de actuación PH, no de una meta de simetría con IT o AT.

```text
6 UN PH
!= 8 UN IT
!= 8 UN AT
```

La simetría reside en función, trazabilidad y gobernanza, no en cantidad.

---

## 4. Mapa general

| Código | Unidad Nuclear | Pregunta rectora |
|---|---|---|
| UN-PH-01 | Situar y especificar la intervención tecnológica | ¿Qué necesidad situada requiere construcción tecnológica y bajo qué criterios? |
| UN-PH-02 | Diseñar arquitectura humanista | ¿Cómo debe organizarse técnicamente la intervención para conservar propósito, límites y responsabilidad? |
| UN-PH-03 | Construir e integrar responsablemente | ¿Cómo se materializa la arquitectura en componentes funcionales e integrados? |
| UN-PH-04 | Verificar, proteger y recuperar | ¿Cómo se comprueba funcionamiento, riesgo, accesibilidad, confiabilidad y recuperación? |
| UN-PH-05 | Documentar y hacer mantenible | ¿Cómo queda el sistema comprensible, continuable y evolutivo? |
| UN-PH-06 | Transferir, evolucionar y reabrir | ¿Cómo cambia, se transfiere, se retira o se reabre sin perder trazabilidad? |

---

## 5. UN-PH-01 - Situar y especificar la intervención tecnológica

### Función

Transforma un problema complejo situado en una **necesidad de intervención tecnológica delimitada**, evitando asumir que toda necesidad requiere software, IA o automatización.

### Competencias principales

```text
PH-C01 Situación, propósito y criterios de intervención
PH-C02 Diseño computacional y arquitectura
PH-C06 Seguridad, privacidad y accesibilidad
PH-C07 Documentación y trazabilidad
```

### Actuaciones observables

- identificar actores, contexto y propósito;
- distinguir problema de solución asumida;
- formular requisitos y restricciones;
- definir criterios de aceptación;
- reconocer riesgos materiales iniciales;
- registrar supuestos y decisiones.

### Evidencia posible

```text
ficha de contexto
requisitos
criterios de aceptación
mapa de actores
registro de supuestos
decisión de no construir
```

### Gate conceptual

> ¿La intervención tecnológica está justificada por el problema o solo por disponibilidad de tecnología?

### Derivas a evitar

```text
IA primero, problema después
automatización por defecto
aplicación como respuesta universal
educación como frontera obligatoria
```

---

## 6. UN-PH-02 - Diseñar arquitectura humanista

### Función

Transforma requisitos y restricciones en una arquitectura tecnológica proporcional, comprensible y revisable.

### Competencias principales

```text
PH-C01 Situación y propósito
PH-C02 Diseño computacional y arquitectura
PH-C05 Integración H-M-IA
PH-C06 Seguridad, privacidad y accesibilidad
PH-C07 Documentación y trazabilidad
```

### Actuaciones observables

- descomponer el problema;
- modelar componentes y flujos;
- definir datos, estados e interfaces;
- identificar dependencias;
- establecer límites de confianza;
- decidir dónde interviene una persona;
- justificar tecnologías y patrones;
- registrar decisiones de arquitectura.

### Evidencia posible

```text
diagrama
modelo de componentes
flujo
ADR
modelo de datos
contrato de interfaz
mapa H-M-IA
```

### Gate conceptual

> ¿La arquitectura hace visible cómo funciona, dónde puede fallar y dónde debe intervenir el juicio humano?

### Derivas a evitar

```text
stack como arquitectura
complejidad como prestigio
infraestructura sobredimensionada
automatización sin fallback
```

---

## 7. UN-PH-03 - Construir e integrar responsablemente

### Función

Materializa la arquitectura mediante componentes funcionales, integraciones y configuraciones trazables.

### Competencias principales

```text
PH-C02 Diseño computacional y arquitectura
PH-C03 Construcción e integración tecnológica
PH-C05 Integración H-M-IA
PH-C06 Seguridad, privacidad y accesibilidad
PH-C07 Documentación y trazabilidad
```

### Actuaciones observables

- implementar componentes;
- integrar APIs, datos o servicios;
- configurar permisos y dependencias;
- incorporar IA cuando aporta valor real;
- mantener control de versiones;
- revisar cambios;
- conservar trazabilidad de transformaciones.

### Evidencia posible

```text
repositorio
código
configuración
pull request
prototipo
servicio
integración
registro de cambios
```

### Gate conceptual

> ¿La construcción conserva comprensión, control y responsabilidad o se convirtió en ensamblaje opaco?

### Derivas a evitar

```text
copiar sin comprender
IA como autor técnico implícito
dependencias sin gobernanza
código funcional sin contexto
```

---

## 8. UN-PH-04 - Verificar, proteger y recuperar

### Función

Somete la construcción a pruebas de funcionamiento, confiabilidad, seguridad, privacidad, accesibilidad y recuperación proporcionales al riesgo.

### Competencias principales

```text
PH-C04 Verificación, confiabilidad y recuperación
PH-C05 Integración H-M-IA
PH-C06 Seguridad, privacidad y accesibilidad
PH-C07 Documentación y trazabilidad
```

### Actuaciones observables

- ejecutar pruebas;
- verificar criterios de aceptación;
- revisar fallos previsibles;
- comprobar permisos y secretos;
- revisar dependencias;
- probar accesibilidad pertinente;
- diseñar fallback o rollback cuando aplica;
- bloquear avance ante riesgo crítico no resuelto.

### Evidencia posible

```text
tests
logs
reporte de revisión
checklist
resultado de accesibilidad
incidente
rollback
runbook
decisión de bloqueo
```

### Gate conceptual

> ¿El sistema fue verificado bajo condiciones relevantes o solo funciona en una demostración amable?

### Regla no compensable

```text
riesgo crítico no resuelto
!= deuda compensable por funcionalidad
```

---

## 9. UN-PH-05 - Documentar y hacer mantenible

### Función

Convierte la construcción y sus decisiones en una continuidad técnica comprensible, revisable y mantenible.

### Competencias principales

```text
PH-C04 Verificación y confiabilidad
PH-C07 Documentación, trazabilidad y continuidad
PH-C08 Mantenimiento, evolución y transferencia
```

### Actuaciones observables

- explicar propósito y arquitectura;
- documentar instalación, uso y límites;
- registrar decisiones;
- mantener versiones y cambios;
- documentar deuda técnica;
- preparar operación o soporte cuando corresponde;
- definir cómo continuar o retirar el sistema.

### Evidencia posible

```text
README
ADR
changelog
guía técnica
runbook
backlog
deuda técnica
release notes
plan de retiro
```

### Gate conceptual

> ¿Otra persona competente puede comprender el estado del sistema y continuar el trabajo sin depender de la memoria de quienes lo construyeron?

### Derivas a evitar

```text
documentación como archivo muerto
README ornamental
conocimiento atrapado en chat
mantenimiento sin responsable
```

---

## 10. UN-PH-06 - Transferir, evolucionar y reabrir

### Función

Gestiona el cambio del sistema y su relación con otros perfiles, proyectos o contextos sin convertir transferencia en obligación triádica.

### Competencias principales

```text
PH-C01 Situación y propósito
PH-C07 Documentación y trazabilidad
PH-C08 Mantenimiento, evolución y transferencia
```

Según el caso puede incorporar C02-C06.

### Actuaciones observables

- entregar un artefacto o restricción;
- recibir evidencia, preguntas o configuraciones;
- transformar un aporte recibido;
- devolver cambios;
- registrar deuda y nueva versión;
- reabrir arquitectura cuando cambia el problema;
- retirar o archivar responsablemente;
- reactivar un sistema con contexto suficiente.

### Evidencia posible

```text
registro de transferencia
release
roadmap
postmortem
nueva decisión de arquitectura
plan de migración
plan de retiro
registro de reapertura
```

### Gate conceptual

> ¿La evolución conserva contexto, procedencia, decisiones y posibilidad de revisión?

### Derivas a evitar

```text
transferencia como copia de archivos
PH como centro obligatorio
actualización sin trazabilidad
reactivación sin contexto
```

---

## 11. Cobertura de competencias

| Competencia | UN-01 | UN-02 | UN-03 | UN-04 | UN-05 | UN-06 |
|---|---:|---:|---:|---:|---:|---:|
| PH-C01 Situación y propósito | X | X |  |  |  | X |
| PH-C02 Diseño y arquitectura | X | X | X |  |  | X |
| PH-C03 Construcción e integración |  |  | X |  |  | X |
| PH-C04 Verificación y confiabilidad |  |  |  | X | X | X |
| PH-C05 H-M-IA |  | X | X | X |  | X |
| PH-C06 Seguridad/privacidad/accesibilidad | X | X | X | X |  | X |
| PH-C07 Documentación/trazabilidad | X | X | X | X | X | X |
| PH-C08 Evolución/transferencia |  |  |  |  | X | X |

La matriz muestra que documentación y trazabilidad atraviesan toda actuación, pero no constituyen por sí solas una Unidad Nuclear aislada.

---

## 12. Relación con N1-N4

Cada UN puede expresarse en niveles crecientes de autonomía y complejidad.

### N1 - Exploración guiada

El PH ejecuta partes de la unidad con apoyo fuerte, comprende decisiones básicas y documenta aprendizaje.

### N2 - Producción asistida

Puede completar una unidad acotada con apoyo, plantillas y revisión.

### N3 - Integración avanzada

Puede integrar múltiples competencias dentro de la unidad con autonomía sustantiva y trazabilidad.

### N4 - Ecosistema gobernado

Puede coordinar la unidad en sistemas, equipos o contextos múltiples, gobernando excepciones, evolución y transferencia.

No se requiere que todas las UN estén en el mismo nivel en un proyecto.

---

## 13. Relación con educación

Las seis Unidades Nucleares pueden aplicarse a un contexto educativo sin convertirse en unidades educativas.

Ejemplo:

```text
problema educativo
→ UN-PH-01 especifica necesidad
→ UN-PH-02 diseña arquitectura
→ UN-PH-03 construye recurso/sistema
→ UN-PH-04 verifica
→ UN-PH-05 documenta y mantiene
→ UN-PH-06 evoluciona o transfiere
```

La educación es un dominio de aplicación prioritario, no el molde de la arquitectura de actuación.

---

## 14. Relación con IT

Una UN puede activar colaboración con IT cuando aparecen necesidades como:

```text
validación de una afirmación
diseño metodológico
interpretación de datos
incertidumbre
producción de conocimiento
```

Ejemplos:

- UN-PH-01 puede transferir una pregunta investigable;
- UN-PH-04 puede producir datos operativos que IT evalúe como evidencia;
- UN-PH-06 puede reabrir diseño técnico por hallazgos IT.

PH no convierte una UN en investigación completa por incorporar datos o pruebas.

---

## 15. Relación con AT

Una UN puede activar colaboración con AT cuando aparecen necesidades como:

```text
representación
percepción
lenguaje
materialidad
mediación
transformación sensible o simbólica
```

Ejemplos:

- UN-PH-02 puede incorporar restricciones de configuración propuestas por AT;
- UN-PH-03 puede materializar una interacción;
- UN-PH-06 puede reabrir el sistema por una transformación emergente en la práctica AT.

PH no convierte una interfaz funcional en práctica artística por defecto.

---

## 16. Relación con H-M-IA

H-M-IA atraviesa especialmente UN-PH-02, 03 y 04.

Regla:

```text
IA puede asistir la actuación
pero no sustituye la responsabilidad PH
```

Debe conservarse, cuando sea material:

```text
rol de la IA
procedencia
transformaciones
permisos
validaciones
límites
revisión humana
fallback
```

---

## 17. Relación con seguridad

La seguridad no es una UN separada porque opera longitudinalmente.

La antigua idea de `UN Seguridad longitudinal` se absorbe en las seis unidades mediante decisiones proporcionales.

Ejemplo:

```text
UN-01 identifica riesgo
UN-02 diseña controles
UN-03 configura
UN-04 verifica
UN-05 documenta
UN-06 mantiene / reabre
```

Esto preserva seguridad sin convertirla en silo.

---

## 18. Relación con Métricas

La futura Matriz de Métricas deberá poder valorar la calidad de cada UN sin reducirla a una puntuación universal.

Criterios posibles:

```text
coherencia situada
calidad de decisiones
funcionalidad
verificación
riesgo residual
trazabilidad
mantenibilidad
capacidad de evolución
transferencia cuando aplica
```

Los gates pueden bloquear avance aunque otras dimensiones sean fuertes.

---

## 19. Anti-unidades

No deben considerarse Unidades Nucleares:

```text
Git
Python
Laravel
Snyk
ChatGPT
DevSecOps
CI/CD
diseño instruccional
investigación aplicada
arte y mediación
documentación
seguridad
transferencia triádica
```

Pueden aparecer como recursos, prácticas, responsabilidades longitudinales o colaboraciones dentro de una UN.

---

## 20. Prueba de validez de una UN

Una Unidad Nuclear PH es válida si:

1. integra varias competencias;
2. expresa una actuación recurrente;
3. puede observarse sin depender de una herramienta;
4. puede generar evidencias distintas según contexto;
5. puede evaluarse en N1-N4;
6. conserva responsabilidad PH;
7. permite colaboración sin absorber IT o AT;
8. puede reactivarse en proyectos distintos.

Si una supuesta UN solo describe un tema o producto, debe regresar a otra capa arquitectónica.

---

## 21. Estado y siguiente movimiento

```text
Documento: Unidades Nucleares Programador Humanista v3.0.0
Versión: v0.3
Estado: Aprobado por humano
Función: ACTUACIÓN
Base: Alcance + Mapa + Fórmula + Competencias v0.3 aprobados
Unidades propuestas: 6
Siguiente movimiento: Matriz de Métricas / Valoración PH revisada
Fase 2: no iniciada
```
