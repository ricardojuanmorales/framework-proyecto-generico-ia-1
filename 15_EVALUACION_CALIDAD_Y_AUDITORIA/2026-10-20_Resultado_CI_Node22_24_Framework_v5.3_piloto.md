# Evidencia CI del PR #13 · Framework v5.3 piloto

**Fecha:** 2026-10-20. **Referencia de código verificada:** `ebcbd2dc32a07f897b9ded3f56091bf41c667c1b`. **Estado:** ambos trabajos CI concluyeron exitosamente, NO aprobación de release v5.3.0.

**Ejecución:** https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39507901751
**Workflow:** `Framework V5 Verify` en `.github/workflows/framework-v5-verify.yml` (Node 22 y 24).

| Trabajo | Observación al momento del corte | Evidencia |
|---|---|---|
| Node 22 | Trabajo `completed`, conclusión `success`; paso Verify success | Jobs 118921359636 |
| Node 24 | Trabajo `completed`, conclusión `success`; paso Verify success | Job 118921359969 |

El script `npm run verify` consta de `typecheck && build && test && audit`. De acuerdo con `package.json`, incluye auditorías de arquitectura, secretos, privacidad, accesibilidad y dependencias. Las pruebas existentes pueden no cubrir todo el contrato funcional.

**Corrección realizada:** `apps/framework-v5/README.md` ahora reconoce que START/INTEGRATE/AUDIT existen en el código, aunque pruebas E2E multiusuario y recuperación TSR sigan pendientes. Esta actualización activó CI por ruta de archivos.

**No concluir:** experiencia real de uso verificada, ausencia total de vulnerabilidades, autosostenibilidad de ZIP root/release v5.3, paridad Local_First, TSR T1–T8 multicaso, certificación N3/N4, validación por pares de proyectos.

**Próximos pasos independientes:** extender pruebas E2E por modo y errores, inspección integral del ZIP y reconciliación del root físico; después Gate de release específico y actualización cronológica de IEISP/PIEF.

**Actualización del corte:** consulta posterior confirmó `completed/success` en los dos jobs Node 22 y Node 24 de la misma ejecución.
