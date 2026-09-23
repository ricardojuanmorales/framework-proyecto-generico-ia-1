# Bitácora · Autosostenibilidad Inicial V5 v0.1

**Fecha:** 2026-09-23  
**Rama:** `fase3-construccion-v5`  
**Estado:** construido · verificación CI pendiente

## Evidencia previa

La capa Base Federada + APRENDER pasó GitHub Actions:

```text
Framework V5 Verify
run #40
Node 22: success
Node 24: success
```

## Implementado

- snapshot físico de aplicación V4 en `legacy/v4/`;
- README de preservación histórica;
- materialización portable lógica multiarchivo;
- README de proyecto;
- manifest;
- framework-state;
- portfolio;
- decisions;
- transfers;
- prueba contractual del paquete;
- guía rápida de usuario;
- guía rápida de colaborador.

## Decisión de packaging

El transporte operativo sigue usando JSON único para roundtrip.

En paralelo, el dominio ya puede materializar el paquete aprobado como conjunto lógico de archivos.

```text
semántica estable
→ materialización lógica
→ empaquetado físico final
```

Esto evita añadir ZIP/dependencias antes de necesidad.

## Estado de autosostenibilidad

Una persona ya puede comprender el flujo esencial.

Un colaborador ya tiene stack, arquitectura, comandos y reglas básicas.

## Deuda inmediata

- lockfile reproducible;
- auditorías architecture/secrets/privacy/accessibility;
- despliegue V5;
- packaging físico final;
- RC.

## Próximo bloque

```text
CI verde
→ reproducibilidad fuerte
→ auditorías integrales
→ preparación de despliegue
→ readiness de RC
```
