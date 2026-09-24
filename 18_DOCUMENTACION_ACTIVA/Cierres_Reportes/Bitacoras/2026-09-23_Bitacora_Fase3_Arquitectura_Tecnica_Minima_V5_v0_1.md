# Bitácora · Arquitectura Técnica Mínima V5 v0.1

**Fecha:** 2026-09-23  
**Rama:** `fase3-construccion-v5`  
**Estado:** candidata

## Transferencia situada

Se reutiliza del prototipo AI StoryLab 1 la columna vertebral técnica probada:

- React;
- TypeScript;
- Vite;
- arquitectura por capas;
- repositorios intercambiables;
- localStorage + memory fallback;
- AJV;
- Vitest;
- verificación reproducible.

No se copia el dominio ni la UI.

## Decisión central

```text
transferir patrón probado
> reinventar stack
```

## Primer slice

```text
START
→ persistencia local
→ estado
→ export
→ import
→ roundtrip
```

## Gate pendiente

Aprobación humana H3-A de arquitectura técnica mínima.
