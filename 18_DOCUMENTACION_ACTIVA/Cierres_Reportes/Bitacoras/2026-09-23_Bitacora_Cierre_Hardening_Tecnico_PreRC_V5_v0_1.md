# Bitácora · Cierre Hardening Técnico Pre-RC V5 v0.1

**Fecha:** 2026-09-23  
**Rama:** `fase3-construccion-v5`  
**Estado:** cierre técnico pre-RC

## Evidencia final

```text
Framework V5 Verify
Node 22: success
Node 24: success

Framework V5 Harden
npm ci: success
verify: success
build: success

Framework V5 Build Preview
verify: success
Pages base path build: success
artifact: success
```

## Packaging

- ZIP portable implementado;
- README;
- manifest;
- framework-state;
- portfolio;
- decisions;
- transfers;
- cinco schemas;
- import ZIP con staging;
- confirmación humana;
- roundtrip probado.

## Seguridad de dependencias

Durante hardening se detectó:

```text
fflate 0.8.2
GHSA-px8p-9vwx-vf98
moderate
```

Se actualizó a:

```text
fflate 0.8.3
```

El gate runtime:

```text
npm audit --omit=dev --audit-level=moderate
```

queda integrado en `npm run verify`.

Resultado final: PASS.

## Reproducibilidad

- package-lock comprometido;
- npm ci;
- Node 22/24;
- build estático;
- preview reproducible.

## Reservas restantes

No son bloqueos técnicos:

- recorrido humano completo en navegador;
- solo teclado;
- lector de pantalla;
- contraste visual;
- caso manual con paquete externo real;
- verificación de ruta pública legacy en despliegue final.

## Dictamen

```text
TECHNICAL_PRE_RC: PASS
HUMAN_REVIEW: PENDING
```

Siguiente gate:

```text
H3-B
→ revisión humana de producto integrado
→ autorización o reserva para v5.0.0-rc.1
```
