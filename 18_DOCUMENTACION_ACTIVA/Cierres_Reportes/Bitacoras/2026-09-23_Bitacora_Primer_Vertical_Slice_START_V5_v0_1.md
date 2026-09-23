# Bitácora · Primer Vertical Slice START V5 v0.1

**Fecha:** 2026-09-23  
**Rama:** `fase3-construccion-v5`  
**Estado:** construido · verificación CI pendiente

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
- pruebas de roundtrip;
- workflow CI Node 22/24.

## Decisión provisional de transporte

El primer slice usa un único archivo JSON portable.

Esto valida semántica y roundtrip antes de introducir empaquetado multiarchivo.

```text
contrato semántico primero
→ empaquetado físico después
```

No modifica el Modelo Portable aprobado.

## Evidencia pendiente

La sesión no pudo ejecutar npm localmente porque el entorno de ejecución no resolvió github.com.

La verificación se delega explícitamente a GitHub Actions.

## Deuda inmediata

- lockfile;
- resultado verde de CI;
- auditorías architecture/secrets/privacy/accessibility;
- decisión de empaquetado final.

## Próximo movimiento

```text
CI verde
→ estabilizar slice START
→ ampliar contratos técnicos
→ INTEGRATE / AUDIT
```
