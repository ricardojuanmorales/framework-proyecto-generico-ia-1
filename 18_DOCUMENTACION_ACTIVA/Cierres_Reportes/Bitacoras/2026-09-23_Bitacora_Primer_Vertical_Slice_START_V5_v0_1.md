# Bitácora · Primer Vertical Slice START V5 v0.1

**Fecha:** 2026-09-23  
**Rama:** `fase3-construccion-v5`  
**Estado:** estabilizado · CI verde

## Implementado

- scaffold React + TypeScript + Vite;
- arquitectura domain/application/adapters/presentation;
- localStorage + fallback en memoria;
- cinco schemas conceptuales materializados;
- schema adicional de paquete para transporte 0.1;
- validación AJV runtime;
- invariantes de dominio separadas de schema;
- START mínimo;
- persistencia;
- export JSON;
- import staging;
- confirmación humana;
- roundtrip;
- pruebas contractuales;
- workflow CI Node 22/24.

## Evidencia

GitHub Actions:

```text
Framework V5 Verify
run #9
conclusion: success
```

La verificación pasó después de corregir:

- declaración de tipos Vite para import CSS;
- normalización de npm entre Node 22 y Node 24.

## Decisión provisional de transporte

El primer slice usa un único archivo JSON portable.

Esto valida semántica y roundtrip antes de introducir empaquetado multiarchivo.

```text
contrato semántico primero
→ empaquetado físico después
```

No modifica el Modelo Portable aprobado.

## Deuda inmediata

- lockfile reproducible;
- auditorías architecture/secrets/privacy/accessibility;
- decisión de empaquetado final.

## Siguiente movimiento

```text
START estable
→ INTEGRATE / AUDIT
→ roundtrip de los tres modos
```
