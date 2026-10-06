# Onboarding dual · Usuario y colaborador · Framework V5.1

**Estado:** ACTIVO · V5.1.0

## Regla

```text
usar el Framework
!=
evolucionar el Framework
```

## A. Usuario

Quiere aplicar Framework a un proyecto.

### Entrada

```text
problema + contexto + propósito + responsabilidad humana
```

### Modos

- **START:** crear.
- **INTEGRATE:** incorporar sin colonizar.
- **AUDIT:** contrastar.

### Debe comprender

- problema como centro;
- PH / IT / AT;
- N1–N4;
- autoridad humana;
- evidencia y PORTAFOLIO;
- Base de Conocimiento común;
- transferencia reversible;
- que 00–21 + 99 es una gramática común con activación proporcional.

No necesita conocer Git ni toda la estructura interna antes de empezar.

### Criterio de éxito

Puede responder:

```text
qué problema trabajo
qué perfiles necesito
qué evidencia importa
qué decisiones son humanas
cómo continúo
qué puedo transferir
```

## B. Colaborador

Quiere modificar el Framework mismo.

### Debe comprender además

- repositorio maestro y fuentes canónicas;
- macroestructura 00–21 + 99;
- contratos y schemas;
- compatibilidad;
- deuda;
- versionado;
- release;
- transferencia simétrica reversible;
- gates humanos.

### Flujo

```text
clonar
→ rama
→ comprender función afectada
→ modificar
→ verificar
→ documentar
→ PR
→ revisión
→ decisión
→ merge
```

### Regla antes de modificar

Preguntar:

```text
¿Qué problema resuelve?
¿Qué fuente canónica afecta?
¿Qué contrato cambia?
¿Qué evidencia verifica el cambio?
¿Qué riesgo introduce?
¿Es reversible?
¿Requiere migración?
```

## C. Relación entre ambos

```text
Usuario      → opera proyectos con Framework
Colaborador  → opera sobre Framework
```

Un usuario puede convertirse en colaborador, pero no se presupone ese salto.

La aplicación pública sirve a usuarios mediante START, INTEGRATE y AUDIT. El desarrollo del Framework se realiza mediante repositorio, documentación, tests, CI y gobernanza, no convirtiendo la app en un IDE.

## Autoridad

```text
IA analiza y contrasta
Máquina ejecuta y evidencia
Framework estructura y preserva
Humano decide y autoriza
```
