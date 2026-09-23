# Guía rápida de colaborador · Framework V5 dev

**Rama activa:** `fase3-construccion-v5`

## Método

```text
SDD
→ spec
→ arquitectura
→ contrato
→ implementación
→ prueba
→ CI
→ gate
```

## Stack actual

```text
React
TypeScript
Vite
AJV
Vitest
```

## Desarrollo

```bash
cd apps/framework-v5
npm install --ignore-scripts
npm run dev
npm run verify
```

CI verifica Node 22 y 24.

## Arquitectura

```text
domain
→ application
→ adapters
→ presentation
```

No introducir dependencia de navegador o React en dominio.

## Reglas

- local-first;
- Security by Design;
- Security by Default;
- IA opcional;
- importación como entrada no confiable;
- mutación validada antes de persistir;
- cambios de schema requieren especial cuidado;
- no editar V4 legacy como parte de evolución V5.

## Estado

Funcionan:

- START / INTEGRATE / AUDIT;
- persistencia local + fallback memoria;
- schemas + AJV;
- export/import;
- roundtrip;
- estado vivo;
- Base Federada mínima;
- APRENDER;
- materialización portable lógica.

Pendiente:

- lockfile reproducible;
- packaging físico final;
- auditorías integrales;
- despliegue V5;
- RC.
