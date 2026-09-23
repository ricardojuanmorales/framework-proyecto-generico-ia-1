# Readiness Checklist · Framework V5 RC v0.1

**Estado:** candidato previo a RC  
**Rama:** `fase3-construccion-v5`

## G1 · Uso independiente
- [x] START
- [x] INTEGRATE
- [x] AUDIT
- [x] zona APRENDER mínima
- [x] invocación contextual
- [ ] recorrido humano completo revisado manualmente

## G2 · Portabilidad
- [x] export JSON operativo
- [x] import con staging
- [x] roundtrip
- [x] materialización multiarchivo lógica
- [ ] packaging físico final

## G3 · Roundtrip
- [x] START
- [x] INTEGRATE
- [x] AUDIT
- [x] estado vivo
- [ ] caso manual de paquete externo real

## G4 · Colaboración
- [x] guía rápida colaborador
- [x] npm run verify
- [x] CI Node 22/24
- [ ] package-lock comprometido
- [ ] instalación reproducible con npm ci

## G5 · Trazabilidad
- [x] schemas versionados
- [x] decisiones humanas
- [x] portafolio
- [x] transferencias
- [x] bitácoras
- [ ] changelog de RC

## G6 · Seguridad y accesibilidad
- [x] Security by Design en spec
- [x] Security by Default
- [x] importación no confiable
- [x] auditoría básica de secretos
- [x] auditoría básica de privacidad
- [x] baseline automática de accesibilidad
- [ ] revisión manual de accesibilidad
- [ ] revisión manual de seguridad de import/export

## G7 · Historia
- [x] V4 preservada en legacy
- [x] V5 separada técnicamente
- [ ] ruta pública legacy verificada en build final

## G8 · Honestidad
- [x] fuera de alcance declarado
- [x] deuda inmediata visible
- [ ] limitaciones RC consolidadas
- [ ] notas de release RC

## Regla de promoción

```text
RC no requiere perfección
RC requiere:
sin bloqueo crítico
+ deuda explícita
+ verificación reproducible
+ alcance estable
```
