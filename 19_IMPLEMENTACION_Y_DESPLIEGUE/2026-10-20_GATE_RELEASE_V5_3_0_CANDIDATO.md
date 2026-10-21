# Gate específico de estabilización · Framework v5.3.0
**Corte:** 2026-10-20 (GitHub Actions UTC 2026-10-21). **Estado:** CANDIDATO DE DECISIÓN, NO APROBACIÓN DE PUBLICACIÓN. La AHE G-FW53-EXEC-01 autorizó el desarrollo y la integración piloto, no la etiqueta de release estable.

## Línea base inmóvil y evidencia
- `main` después del PR #13: `0d06baaae2304b5b3ecaf72d5083dbf1328059b9`; [PR fusionado](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/pull/13).
- [Pages 39527901058](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39527901058): success de build y deploy.
- Última release publicada: **v5.2.0**, independiente de edición documental experimental **v0.5.3**.
- App `apps/framework-v5/package.json` sigue declarando `5.2.0`; cambiar solo la etiqueta sin evidencia es inadmisible.
- Tests Node 22/24, Chromium E2E de los tres modos y dos jobs de ZIP/offline pasaron en el PR #13. Los controles prueban casos sintéticos y no son prueba de TSR social semántica.

## Criterios de decisión
| Clave | Comprobación para release | Estado al corte |
|---|---|---|
| R53-01 | Edición piloto IEISP, PIEF, guías, README y Wiki integrados | PASS: PR #13 |
| R53-02 | Build y despliegue Pages sobre main | PASS: run 39527901058 |
| R53-03 | CI Node 22/24, Chromium real, JSON/ZIP | PASS en PR #13, volver a ejecutar para versión 5.3 candidata |
| R53-04 | Paquete íntegro fuente y app con SHA-256, extracciones y segunda máquina | PASS candidato; nueva validación requerida en commit de versión |
| R53-05 | Coherencia de versión en aplicación, lockfile, README, notas, workflow y marcador de release | PENDIENTE |
| R53-06 | Auditoría de privacidad, licencia y calidad de enlaces postmerge | PARCIAL: sin patrones evidentes de secretos en parche; inspección humana sigue necesaria |
| R53-07 | Reconciliación root local ↔ repo, incluida política para archivos ignorados/privados | PARCIAL: archivos Git versionados de main sincronizados en Mac; inventario de no versionados NO cotejado |
| R53-08 | Gate humano específico de estabilidad y publicación | NO APROBADO |

**TSR multicaso con receptor semántico externo:** línea de investigación abierta. No adjudicar retrospectivamente certificaciones N3/N4 ni condicionar artificialmente la publicación del piloto a demostrar toda la hipótesis.

## Orden de ejecución propuesto
1. Preparar en rama aislada `release/prepare-v5.3.0-gate-20261020` un manifiesto de alcance y matriz de versionado, sin cambiar `main`.
2. Antes del etiquetado, producir candidato de versión coherente, repetir verificaciones sobre **ese** commit y revisar acceso público, licencia y datos privados.
3. Ejecutar chequeo único de root no versionado desde VS Code con reporte de rutas, categorías y exclusiones, sin exfiltrar datos.
4. Solicitar aprobación humana compacta del Gate de release con evidencia PASS/FAIL y deuda residual.
5. Solo si se aprueba, integrar la rama de release y publicar tag/release `v5.3.0`; verificar activos, checksums y acceso público. Si falta prueba: RC o piloto, no release estable.

**STOP:** discrepancias del root con precedencia documental no resueltas; datos sensibles; CI fallida; incompatibilidad de paquete; ausencia de autorización de publicación; cambios de versión incompletos.
