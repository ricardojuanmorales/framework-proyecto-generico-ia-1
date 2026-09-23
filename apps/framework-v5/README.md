# Framework V5 App · Vertical Slice 0.1

Primer vertical slice funcional de Fase 3.

## Alcance

```text
START
→ crear proyecto mínimo
→ persistir localmente
→ visualizar estado
→ exportar paquete JSON
→ staging de importación
→ confirmación humana
→ importar
→ roundtrip
```

## Guardarraíles

- local-first;
- sin backend;
- sin cuentas;
- sin IA externa;
- importación tratada como no confiable;
- schemas JSON versionados;
- decisión humana antes de persistir importaciones.

## Desarrollo

```bash
npm install --ignore-scripts
npm run dev
npm run verify
```

## Estado

Este slice valida decisiones arquitectónicas tempranas. No representa todavía el MVP completo de V5.

Deuda conocida:

- generar y comprometer lockfile reproducible;
- ampliar auditorías security/privacy/accessibility;
- empaquetado multiarchivo final;
- INTEGRATE y AUDIT;
- preservación legacy V4 física.
