# B0 · Línea base arqueológica de AI StoryLab 1
## Integración PH + Bases de Conocimiento

**Fecha:** 2026-09-22  
**Estado:** experimental / no canónico  
**Rama:** `integracion-ph-bases-fase2`  
**Prototipo observado:** `ricardojuanmorales/ai-storylab-1`  
**Propósito:** registrar evidencia inicial para la validación bifocal PH ↔ Bases de Conocimiento sin copiar literalmente la estructura documental del prototipo.

---

## 1. Restricciones metodológicas

1. AI StoryLab 1 se estudia como prototipo suficientemente maduro, todavía en desarrollo.
2. La estructura de carpetas se considera evidencia contextual, no modelo normativo.
3. SDD se estudia como posible patrón operacional transferible, no como doctrina asumida.
4. Toda transferencia será simétrica, reversible y sujeta a contraste.
5. Ningún hallazgo de B0 modifica todavía PH, Bases de Conocimiento ni Framework canónico.

---

## 2. Secuencia operacional observada

La cronología H08 muestra una progresión disciplinada:

1. autorización humana limitada y reservas explícitas;
2. realineación documental sin cambios funcionales;
3. operacionalización del trabajo y kit de continuidad;
4. arquitectura provisional y reversible;
5. contratos de dominio y schemas versionados;
6. runner, pruebas y CI reproducible;
7. esqueleto modular y adaptadores sustituibles;
8. seguridad, accesibilidad y cierre documental;
9. revisión de implementation readiness;
10. primera vertical slice;
11. endurecimiento progresivo de persistencia, schemas, misiones y roundtrip.

La secuencia es más relevante que la topología de carpetas.

---

## 3. Evidencia fuerte observada

### 3.1 Documentación antes de código funcional

Los PR #50, #51 y #52 registran decisiones, alcance, reservas, gates, matrices y continuidad con **cero cambios funcionales**.

Interpretación provisional:
la documentación actúa como mecanismo de delimitación y autorización, no solo como memoria posterior.

Estado: **EMERGE / a contrastar en B1-B3**.

### 3.2 Arquitectura reversible antes de seleccionar infraestructura

PR #53 define arquitectura provisional, frontera legacy, alternativas, dirección de dependencias y reversibilidad sin producto funcional nuevo.

PR #56 mantiene persistencia efímera detrás de puerto y difiere persistencia durable.

Interpretación provisional:
el PH puede estar usando reversibilidad explícita como operación de construcción segura y mantenible.

Estado: **EMERGE**.

### 3.3 Contratos antes de vertical slice

PR #54 introduce dominio, invariantes, errores tipados, puertos, schemas, fixtures y política de migración antes de presentación funcional.

Interpretación provisional:
la especificación se convierte progresivamente en contrato ejecutable.

Estado: **EMERGE**.

### 3.4 Verificación como parte de la arquitectura

PR #55 incorpora compilación estricta, pruebas de dominio, paridad TypeScript–JSON Schema, auditoría arquitectónica, auditoría de secretos y CI Node 22/24.

PR #58 describe el circuito:

principio institucional
→ decisión filosófica
→ decisión arquitectónica
→ contrato de dominio
→ frontera serializada
→ invariante ejecutable
→ error tipado
→ prueba automatizada
→ auditoría
→ CI reproducible
→ revisión independiente
→ decisión humana
→ gate

Interpretación provisional:
SDD parece operar como circuito de autoridad y retroalimentación entre documentación, código, prueba y gobernanza.

Estado: **EMERGE fuerte**.

### 3.5 La implementación corrige la documentación

PR #58 documenta una grieta semántica entre dominio y JSON Schema respecto a espacios exteriores y longitud máxima. La remediación obliga a una semántica única y pruebas compartidas.

Interpretación provisional:
la especificación no se trata como verdad inmune; la implementación y la prueba pueden refinarla.

Estado: **CONFIRMA provisionalmente la reversibilidad del método**.

### 3.6 Autoridad humana separada de verificación automática

En varios hitos se distingue explícitamente:

CI verifica ejecución
re-review interpreta evidencia
persona revisora aprueba integración
gate autoriza la siguiente unidad

Interpretación provisional:
la autoridad humana aparece en puntos concretos, mientras máquina e IA pueden operar ampliamente entre ellos.

Estado: **CONFIRMA provisionalmente arquitectura H-M-IA**.

### 3.7 Avance con reservas, no falsa perfección

PR #58 formaliza `pass_with_reservations`: las reservas no desaparecen, se transfieren con propietario, condición y momento de pago.

Interpretación provisional:
la deuda y la incertidumbre pueden ser objetos gobernados sin bloquear indefinidamente ni ocultarse.

Estado: **EMERGE**.

---

## 4. Distinción provisional para transferencia

### A. Accidente local
- nombres H08/H09;
- ubicación concreta de carpetas;
- nombres de ramas;
- numeración específica de gates;
- organización particular de `.specify`.

### B. Patrón potencialmente transferible a PH
- especificar antes de construir;
- separar autorización de ejecución;
- arquitectura reversible;
- contratos antes de interfaces;
- invariantes ejecutables;
- paridad entre representaciones;
- pruebas y CI como evidencia;
- deuda/reservas explícitas;
- gates de avance;
- continuidad documental;
- implementación capaz de corregir especificación.

### C. Patrón potencialmente común al Framework
- evidencia ≠ interpretación ≠ decisión;
- máquina verifica, humano autoriza;
- reversibilidad;
- no compensabilidad de riesgos críticos;
- reservas explícitas;
- transferencia trazable;
- consolidación del aprendizaje antes de canonización.

Ninguna categoría B o C se considera aprobada todavía.

---

## 5. Hipótesis para B1

1. SDD puede ser una manifestación integrada de varias competencias PH y no una competencia aislada.
2. La documentación profunda parece útil cuando se conecta con contratos, pruebas y gates verificables.
3. La reversibilidad puede ser un principio operativo PH transversal.
4. La separación entre verificación técnica y autorización humana puede requerir nomenclatura común para Fase 2.
5. Parte del conocimiento usado por AI StoryLab puede residir mejor como Base de Conocimiento invocable que como estructura fija del perfil.
6. La cronología operacional puede ser más transferible que la estructura de carpetas.

---

## 6. Próximo movimiento

Pasar a B1:

- mapear la evidencia observada contra competencias PH;
- mapearla contra Unidades Nucleares;
- identificar qué Bases de Conocimiento fueron realmente necesarias;
- separar vacíos de arquitectura de vacíos de conocimiento;
- seleccionar 2–4 tensiones de mayor valor para H1.

---

## 7. Estado de autoridad

No se solicita todavía autorización estructural.

Este documento registra evidencia experimental de B0 y puede ser corregido o supersedido durante el ciclo de integración.
