# Evidencia real Chromium E2E · Framework v5.3 piloto

**Fecha de corte:** 2026-10-20 · **Gobernanza:** G-FW53-EXEC-01 · **Aprobado para piloto experimental.**

## Resultados verificables
- **Commit del ensayo:** `c943e15369bbf8207a556b107b0b43d12fa58bdc`.
- **Chromium real en GitHub Actions:** [run 39518353180](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39518353180): **completed/success**.
- **Verificación general en el mismo commit:** [run 39518353251](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39518353251): **completed/success**, Node 22/24.
- **Archivos de prueba y workflow:** `apps/framework-v5/tests/browser-real.e2e.mjs`, `.github/workflows/framework-v5-browser-e2e.yml`.
- El ensayo arranca el build Vite de la app v5.2.0 desde checkout de GitHub, instala Chromium en el runner y usa un origen de loopback propio. No depende del sitio GitHub Pages publicado.

## Tres recorridos reales aprobados
| Modos | Creación | Recarga/persistencia navegador | Descargar JSON y verificar modo/nombre | Rechazo JSON no confiable | Cancelación de importación validada | Descargar ZIP real e importarlo con confirmación humana |
|---|---|---|---|---|---|---|
| START | PASS | PASS | PASS | PASS | PASS | PASS |
| INTEGRATE | PASS | PASS | PASS | PASS | PASS | PASS |
| AUDIT | PASS | PASS | PASS | PASS | PASS | PASS |

El primer E2E [39518037104](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39518037104) **falló** por un localizador `getByLabel('Modo', exact:true)`, pese a que el selector sí aparecía; se añadió instrumentación de diagnóstico y cambió a `select` explícito. [39518217077](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39518217077) fue exitoso para creación, recarga, JSON y rechazo/cancelación; [39518353180](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39518353180) amplió y aprobó ZIP positivo con confirmación. Conservamos los fallos y correcciones por trazabilidad.

## Fronteras de validez
**Acreditado:** aplicación existente v5.2.0 compilable y capaz de completar en Chromium los tres recorridos sintéticos controlados, exportación y restauración JSON/ZIP, rechazo de entrada inválida y gate humano de importación. No se usaron datos reales.

**NO acreditado:** cartapacio raíz Local_First bajo control humano y paridad con GitHub; funcionamiento con red totalmente desconectada desde paquete distribuible independiente; publicación GitHub Pages v5.3; ensayo TSR semántica con receptor humano/máquina/IA independiente entre las cuatro implementaciones; madurez N3/N4 por pares; versión de software v5.3.0 o release estable.

**Dictamen:** control de navegador E2E sintético para la app vigente **PAGADO** con evidencia de run 39518353180. No cerrar las restantes obligaciones por inferencia. Mantener rama y PR #13 en borrador hasta reconciliar Local_First y preparar Gate de release de v5.3.0 con versión y fuentes correctas.
