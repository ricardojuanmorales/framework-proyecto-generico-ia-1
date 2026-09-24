# Bitácora · Núcleo Operacional + Estado Vivo V5 v0.1

**Fecha:** 2026-09-23  
**Rama:** `fase3-construccion-v5`  
**Estado:** construido · verificación CI pendiente

## Evidencia previa

El núcleo START / INTEGRATE / AUDIT fue verificado en GitHub Actions:

```text
Framework V5 Verify
run #21
Node 22: success
Node 24: success
```

## Implementado

- START;
- INTEGRATE;
- AUDIT;
- procedencia preservada;
- foco de auditoría;
- roundtrip para los tres modos;
- portafolio tipado;
- evidencia como entrada de portafolio;
- decisiones con autoridad humana;
- transferencias;
- actualización N1–N4;
- reapertura trazable;
- persistencia de mutaciones;
- superficie humana mínima para estado vivo.

## Principio

```text
mutación
→ validar dominio
→ validar schema
→ persistir
```

## Reapertura

La reapertura no borra historia.

Cambia estado y registra un hito en portafolio.

## Próxima evidencia

CI debe confirmar que el estado vivo completo compila, pasa pruebas y conserva roundtrip.

## Siguiente bloque

Después de CI verde:

```text
núcleo operacional estable
→ Base Federada / invocación contextual
→ zona APRENDER
```
