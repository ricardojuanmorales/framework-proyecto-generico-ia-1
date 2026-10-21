# Ensayos adicionales START/INTEGRATE/AUDIT · Framework v5.3 piloto

**Fecha:** 2026-10-20 · **Estado:** APROBADO PARA PILOTO EXPERIMENTAL / CI COMPLETA. No acredita release estable ni TSR semántica multicaso.

## Ejecución independiente GitHub Actions

- **Commit fuente:** `d8bb8ac580588de4b3524e3876072313c3f7db20`.
- **Archivo añadido:** `apps/framework-v5/src/tests/framework-v5.3-modes-portability.test.ts`.
- **Run:** https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39509794762
- **Node 22:** completed / success; paso Verify success.
- **Node 24:** completed / success; paso Verify success.
- **Instrumentación:** `npm run verify` (typecheck, build, suite Vitest y auditorías según package.json).

## Cobertura nueva

| Ensayo | Contrato observado |
|---|---|
| START | JSON/ZIP conservan identidad, versión, modo, estado, portafolio, decisión humana y transferencia |
| INTEGRATE | Igualdad en retorno e invariantes de procedencia, preservación de fuente y lista de artefactos |
| AUDIT | Igualdad en retorno, `review` y foco auditoría |
| Contextos inválidos | Rechazo sin origen de INTEGRATE, sin foco AUDIT |
| JSON manipulado | Rechazo de campo inesperado |
| ZIP inválido | Rechazo de secuencia arbitraria de bytes |

Los ensayos son **datos sintéticos**, no incluyen información de participantes.

## Verificación local de artefactos documentales disponibles

- `FRAMEWORK_V5_3_PILOTO_DOCUMENTAL_LOCAL_FIRST_2026-10-20.zip`: 12 entradas; lectura ZIP y CRC sin errores (`testzip: None`).
- `KIT_F1_Documentacion_GPT_v0.5.3_Piloto.zip`: 46 entradas; lectura ZIP y CRC sin errores (`testzip: None`).
- Estos paquetes son **documentales**, no el archivo raíz o release ejecutable v5.3, y **no demuestran coincidencia con cartapacio físico original**.

## Límites explícitos

No ejecutado en esta fase: navegador E2E real y accesibilidad UX observada; uso sin red; ZIP de distribución integral v5.3.0 y recuperación en entorno limpio; cotejo Local_First raíz ↔ GitHub; comparación TSR T1–T8 independiente para cuatro casos; autorización humana específica de estabilidad.

## Decisión operativa

Mantener el PR #13 en borrador y la versión pública `v5.2.0` sin cambios. **No emitir v5.3.0 estable.** El Gate G-FW53-EXEC-01 continúa para las pruebas restantes y eventual conciliación documental.
