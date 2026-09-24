# Bitácora · Reproducibilidad fuerte y entrada a auditoría manual V5 v0.1

**Fecha:** 2026-09-23  
**Rama:** `fase3-construccion-v5`

## Evidencia técnica

Hardening:

```text
npm ci
→ verify
→ build
→ lockfile
→ artifact
```

Resultado: success.

## Reproducibilidad

`package-lock.json` quedó comprometido en la rama.

Los workflows principales y la guía de colaborador usan ahora:

```text
npm ci --ignore-scripts
```

## Siguiente capa

El riesgo residual principal ya no es de scaffold ni dependencia.

Es de experiencia humana e integración:

- seguridad manual;
- accesibilidad manual;
- portabilidad manual;
- recorrido completo;
- legacy;
- preview.

## Regla

No promover RC hasta revisar estos puntos o declarar reservas explícitas.
