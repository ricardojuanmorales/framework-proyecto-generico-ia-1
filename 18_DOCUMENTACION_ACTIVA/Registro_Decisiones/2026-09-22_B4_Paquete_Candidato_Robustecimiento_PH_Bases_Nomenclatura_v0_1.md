# B4 · Paquete candidato de robustecimiento
## PH + Bases de Conocimiento + nomenclatura común

**Fecha:** 2026-09-22
**Estado:** candidato para H2 / no canónico
**Rama:** integracion-ph-bases-fase2
**Base:** B0–B3
**Propósito:** presentar cambios estructurales mínimos derivados de evidencia para autorización humana.

---

# 1. Principio de mínima modificación

La evidencia no justifica rediseñar PH.

Justifica **hacer más explícitas algunas relaciones que ya estaban presentes**.

Por tanto:

- no añadir competencias;
- no añadir UN;
- no renumerar niveles;
- no copiar estructura de AI StoryLab;
- no abrir Fase 2 completa;
- no activar agentes ni automatizaciones finales.

---

# 2. PH robustecido — cambios candidatos

## Candidato PH-1 — Conservar arquitectura nuclear

Mantener:

- 8 competencias;
- 6 Unidades Nucleares;
- N1–N4;
- gates existentes;
- seguridad longitudinal;
- transferencia situada;
- autoridad humana.

**Tipo:** CONFIRMA.

---

## Candidato PH-2 — SDD como metodología invocable

Incorporar en gobernanza/enlaces de PH una regla conceptual equivalente a:

**Los métodos de desarrollo, incluyendo SDD cuando sea pertinente, son invocables para orquestar competencias PH; no constituyen por sí mismos identidad ni competencia independiente.**

SDD debe poder activar:
- especificación;
- arquitectura;
- construcción;
- pruebas;
- documentación;
- seguridad;
- evolución.

**Tipo:** REFINA.

---

## Candidato PH-3 — Reversibilidad explícita

Hacer visible la reversibilidad como principio transversal de:

- arquitectura;
- decisiones;
- integración;
- mantenimiento;
- transferencia;
- reapertura.

Definición mínima candidata:

**Una decisión o diseño es reversible cuando declara su estado, límites, condiciones de salida y trazabilidad suficiente para modificar, retirar, transferir o reabrir sin pérdida material de comprensión.**

No crear competencia ni gate nuevo.

**Tipo:** REFINA.

---

## Candidato PH-4 — Documentación operacional

Añadir criterio interpretativo a C07:

**Documentación madura no se mide por volumen sino por su capacidad para reducir ambigüedad, preservar decisiones, sostener verificación, facilitar continuidad y permitir reapertura.**

**Tipo:** REFINA.

---

## Candidato PH-5 — Separación de autoridades

Hacer explícita la diferencia entre:

- ejecución;
- verificación;
- interpretación;
- decisión;
- autorización;
- habilitación.

Regla candidata:

**La evidencia automatizada puede informar una decisión, pero no sustituye la autoridad humana cuando un gate o cambio estructural la requiere.**

**Tipo:** CONFIRMA + REFINA lenguaje.

---

# 3. Bases de Conocimiento — arquitectura candidata

## 3.1 Regla rectora

**Base de Conocimiento no es almacén de documentos.  
Es conocimiento invocable que ayuda a ejercer capacidades y actuaciones bajo criterios explícitos.**

---

## 3.2 Esqueleto mínimo propuesto

No se propone aún una nueva topología física.

Se proponen funciones mínimas:

### A. Lenguaje común
Definiciones compartidas y estados.

### B. Métodos invocables
Ejemplo inicial candidato: SDD.

### C. Conocimiento específico de perfil
Ejemplo PH:
- arquitectura;
- testing;
- seguridad técnica;
- contratos;
- recuperación;
- mantenimiento.

### D. Conocimiento común
Ejemplo:
- gobernanza;
- trazabilidad;
- gates;
- riesgo;
- transferencia;
- metadatos cuando sean necesarios.

### E. Evidencia de uso
Cada Base madura debe poder señalar:
- problema donde se usó;
- decisión que ayudó;
- evidencia producida;
- límites;
- estado de madurez.

---

# 4. Regla candidata de creación de Bases

Antes de crear una nueva Base:

**¿Qué capacidad o actuación necesita este conocimiento y qué evidencia existe de que será invocable?**

Estados candidatos:

- semilla;
- probada;
- reusable;
- común;
- específica;
- deprecada;
- reubicada.

No estabilizar estos estados todavía si H2 no lo autoriza.

---

# 5. Nomenclatura común candidata

Se propone estabilizar inicialmente un vocabulario pequeño.

| Término | Función candidata |
|---|---|
| Capacidad | Qué puede hacer un perfil |
| Actuación | Configuración recurrente de capacidades en práctica |
| Método invocable | Procedimiento reusable para ejercer capacidades sin convertirse en identidad |
| Base de Conocimiento | Conocimiento reusable e invocable que sostiene capacidades/actuaciones |
| Evidencia | Huella observable producida por una actuación o prueba |
| Verificación | Comprobación contra criterios explícitos |
| Interpretación | Lectura humana o metodológica de evidencia |
| Decisión | Selección entre alternativas con consecuencias |
| Autorización | Acto de autoridad que permite una acción o cambio |
| Gate | Compuerta que evalúa condiciones de avance |
| Reserva | Condición conocida no bloqueante que debe conservar memoria |
| Deuda | Trabajo, tensión o condición pendiente con responsabilidad futura |
| Reapertura | Retorno gobernado a una decisión previamente estabilizada |
| Reversibilidad | Capacidad de modificar, retirar, transferir o reabrir sin pérdida material de control o trazabilidad |
| Transferencia | Movimiento contextualizado de conocimiento, evidencia o artefactos entre lentes o ámbitos |

No se propone aún un glosario extenso.

---

# 6. Modelo candidato de Fase 2

## Núcleo

**Fase 2 = infraestructura cognitiva mínima + crecimiento progresivo validado por uso**

No:

**Fase 2 = catálogo exhaustivo de documentos anticipados**

Ni:

**Fase 2 = conocimiento improvisado sin arquitectura común**

---

## Ciclo propuesto

práctica
→ necesidad de conocimiento
→ semilla
→ uso
→ evidencia
→ consolidación
→ Base reusable
→ posible generalización común

---

# 7. Transferencia simétrica reversible

Regla candidata:

**No transferir carpetas por defecto.  
Transferir patrones, criterios, métodos, evidencia y razones.**

Toda transferencia debe poder declarar:

- origen;
- contexto;
- transformación;
- límite;
- destino;
- posibilidad de devolución o reapertura.

---

# 8. Qué no se propone cambiar

No se propone:

- cambiar identidad PH;
- cambiar fórmula nuclear PH;
- crear C09;
- crear UN-PH-07;
- alterar responsabilidades IT o AT;
- convertir SDD en metodología universal obligatoria;
- hacer de reversibilidad un gate universal;
- aprobar todavía estructura física final de Fase 2;
- activar Fase 2 operativamente;
- modificar main.

---

# 9. Paquete H2

Se solicita autorización humana para convertir estos candidatos en cambios experimentales estabilizables dentro de la rama:

1. PH mantiene 8 competencias y 6 UN.
2. SDD se reconoce como metodología invocable candidata.
3. Reversibilidad se explicita como principio transversal.
4. C07 se refina hacia documentación operacional, no volumen.
5. Se explicita separación verificación / interpretación / autorización.
6. Bases se redefinen funcionalmente como conocimiento invocable.
7. Fase 2 adopta modelo híbrido: esqueleto mínimo + crecimiento empírico.
8. Se adopta nomenclatura común mínima de la sección 5 como candidata.
9. Transferencia simétrica opera sobre patrones y razones, no sobre topologías físicas.

---

# 10. Si H2 aprueba

El siguiente trabajo será:

- producir versiones candidatas concretas de los documentos PH afectados;
- producir un mapa mínimo de Bases de Conocimiento;
- producir glosario común mínimo;
- verificar coherencia con IT y AT;
- estabilizar en rama;
- preparar B5 y paquete H3 de retorno a main.

Ningún cambio vuelve a main sin H3.
