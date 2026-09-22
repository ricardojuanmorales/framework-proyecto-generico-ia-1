# B2 · Micropruebas de tensiones PH + Bases de Conocimiento
## AI StoryLab 1 como contraste empírico

**Fecha:** 2026-09-22
**Estado:** experimental / no canónico
**Rama:** integracion-ph-bases-fase2
**Autoridad previa:** H1 aprobado por humano
**Tensiones:** T1 SDD, T2 reversibilidad, T3 construcción de Fase 2

---

# 1. Microprueba T1 — Naturaleza de SDD

## Pregunta

¿SDD debe convertirse en una competencia nueva del Programador Humanista o funcionar como metodología invocable que integra competencias existentes?

## Evidencia observada

La Constitución SDD de AI StoryLab define SDD como proceso mediante el cual una idea se convierte primero en especificación antes de convertirse en implementación.

La spec debe declarar, entre otros elementos:

- qué debe existir;
- por qué;
- personas afectadas;
- experiencia humana;
- datos;
- evidencias;
- rol de IA;
- riesgos;
- límites;
- pruebas;
- revisión humana;
- deuda.

La secuencia declarada es:

SDD → arquitectura → diseño → implementación → testing → validación → despliegue → mantenimiento

El trabajo posterior demuestra que SDD atraviesa propósito y delimitación, arquitectura, construcción, verificación, seguridad, documentación, evolución, gates y autoridad humana.

PR #58 muestra además que la especificación puede ser corregida por implementación y pruebas cuando aparecen divergencias semánticas.

## Contraste PH

SDD activa simultáneamente PH-C01, PH-C02, PH-C03, PH-C04, PH-C06, PH-C07 y PH-C08. También atraviesa varias UN.

No aparece como capacidad irreductible ausente del perfil.

## Resultado

SDD no necesita convertirse en competencia PH nueva.

Se comporta mejor como metodología operacional invocable que orquesta competencias PH existentes y puede conectarse con funciones comunes del Framework.

## Estado

**CONFIRMA T1.**

## Implicación provisional

PH no necesita una novena competencia.

Sí parece necesitar acceso claro a una Base o metodología invocable de trabajo dirigido por especificaciones, adaptable por contexto y riesgo.

---

# 2. Microprueba T2 — Reversibilidad

## Pregunta

¿La reversibilidad es solo una propiedad distribuida o merece convertirse en principio operativo explícito?

## Evidencia documental

AI StoryLab posee un documento específico de criterios de decisiones reversibles.

Una decisión reversible exige:

visibilidad + límite + salida + trazabilidad

Las operaciones permitidas incluyen:

pausar · retirar · reformular · transferir · rechazar

La reversibilidad aparece también en arquitectura provisional, tecnologías diferidas, puertos y adaptadores sustituibles, migraciones, deudas, reservas, gates, decisiones humanas y reapertura.

## Evidencia posterior a la fase documental

La práctica técnica conserva el mismo patrón:

- persistencia durable diferida;
- repositorios detrás de puertos;
- migraciones explícitas;
- preservación de fuente;
- importación en staging;
- portafolio reversible;
- decisiones humanas revocables.

Por tanto, la reversibilidad no quedó confinada a documentación prefuncional.

## Contraste PH

PH ya contiene reversibilidad en C02, C04, C08, UN-PH-06, gobernanza del perfil y transferencia reversible.

Sin embargo, está distribuida y puede resultar menos visible que su importancia práctica.

## Resultado

**Reversibilidad = principio operativo transversal.**

No parece requerir competencia nueva, UN nueva ni gate nuevo universal.

Sí parece justificar una formulación más visible como criterio transversal de decisiones, arquitectura y evolución.

## Estado

**REFINA T2.**

---

# 3. Microprueba T3 — Cómo construir Fase 2

## Pregunta

¿Fase 2 debe construirse desde una taxonomía documental anticipada o desde evidencia de uso?

## Evidencia histórica del Framework

La Base de Conocimiento histórica ya diseñó por adelantado familias F2-BCC, metadatos, glosarios, catálogos, rúbricas, metodologías, herramientas, seguridad, perfiles e invocación caleidoscópica.

La arquitectura es rica y anticipa muchos productos antes de observar su uso.

## Evidencia de AI StoryLab

AI StoryLab también produjo una arquitectura documental extensa.

Sin embargo, los patrones que hoy parecen más transferibles no emergen porque exista una carpeta o catálogo, sino porque fueron utilizados repetidamente para resolver trabajo real: specs antes de implementación, gates, decisiones reversibles, deuda explícita, contratos, pruebas, autoridad humana separada y reapertura por evidencia.

Algunos contenedores documentales quedaron como stubs o espacios históricos mientras el trabajo canónico migró a otros lugares.

Esto demuestra:

**estructura prevista ≠ conocimiento validado por uso**

Pero la evidencia tampoco favorece eliminar toda estructura previa.

Sin Constitución, lenguaje de riesgo, gates, roles y límites comunes, AI StoryLab no habría podido operar de manera coherente.

## Resultado

La alternativa más consistente es híbrida:

**ESQUELETO COMÚN MÍNIMO + CRECIMIENTO EMPÍRICO DEL CONTENIDO**

### Esqueleto mínimo

Debe ofrecer solo lo necesario para:

- nombrar;
- localizar;
- invocar;
- versionar;
- distinguir propiedad epistemológica;
- registrar evidencia;
- transferir;
- gobernar riesgo.

### Contenido sustantivo

Debe crecer preferentemente por:

práctica → necesidad real → patrón observado → prueba → aprendizaje → Base invocable

## Estado

**REFINA T3.**

La hipótesis inicial “Fase 2 desde evidencia y no desde taxonomía” era demasiado binaria.

La evidencia favorece una Fase 2 progresiva, con arquitectura mínima común y contenido validado por uso.

---

# 4. Microhallazgo transversal — Autoridad y estados

Durante T1–T3 aparece repetidamente una secuencia:

especificar → ejecutar → verificar → interpretar → autorizar → habilitar

Y posibles operaciones:

bloquear · pausar · reabrir · transferir · retirar

Esto refuerza la tensión diferida de nomenclatura común.

No se estabiliza todavía.

Estado: **EMERGE**.

---

# 5. Microhallazgo transversal — Documentación profunda

La evidencia no sostiene:

**más documentación = mejor implementación**

Sostiene más bien:

**documentación útil = decisiones + límites + contratos + criterios de prueba + trazabilidad + conexión con ejecución**

Cuando un documento no cambia decisiones, no reduce ambigüedad, no sirve de contrato, no habilita verificación o no preserva continuidad, su valor operativo disminuye.

Estado: **EMERGE fuerte**.

---

# 6. Resultado B2

| Tensión | Resultado |
|---|---|
| T1 SDD | CONFIRMA: metodología invocable, no competencia nueva |
| T2 reversibilidad | REFINA: principio transversal más visible, sin nueva competencia |
| T3 Fase 2 | REFINA: modelo híbrido, esqueleto mínimo + contenido empírico |

No se propone aún cambio canónico.

Próximo movimiento: **B3 Consolidación del aprendizaje**.
