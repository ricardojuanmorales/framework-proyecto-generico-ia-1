# Ensayo de interfaz y portabilidad documental · Framework v5.3

**Fecha:** 2026-10-20. **Alcance:** piloto experimental G-FW53-EXEC-01. **No representa release v5.3.0 estable.**

## Interfaz en DOM simulado
- Prueba nueva: `apps/framework-v5/src/tests/framework-v5.3-ui-smoke.test.tsx`.
- Monta `App` React en entorno jsdom con repositorio en memoria y comprueba selector con START, INTEGRATE, AUDIT y bloqueo inicial de exportación JSON/ZIP y creación hasta completar entradas.
- La primera ejecución [39510794802](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39510794802) **falló** por una expectativa de texto incorrecta ("Local" versus "local-first"): **40/41 pruebas pasadas, 1 fallida**. El componente sí renderizó su texto. Error localizado en el test.
- Corrección trazable en commit `e9effa33129be967ffd598961ddd77183a551b80`.
- Ejecución posterior [39510885395](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39510885395): **Node 22 y Node 24 completados con success; Verify success en ambos**. Esta evidencia acredita el smoke en jsdom, no una prueba E2E con navegador real.

## ZIP documentales verificados en entorno aislado
| Paquete | Entradas | ZIP CRC | SHA-256 |
|---|---:|---|---|
| FRAMEWORK_V5_3_PILOTO_DOCUMENTAL_LOCAL_FIRST_2026-10-20.zip | 12 | OK | `b29a2fb358587cb9ea56d11e2a730f12353839c3fd622f726072c88b841e1cf6` |
| KIT_F1_Documentacion_GPT_v0.5.3_Piloto.zip | 46 | OK | `5fc1b493ce1ebea16c883d2b4dbc8a1180deeb0c74bca01781eab08de02bd330` |

**Interpretación estricta:** verificación CRC/bytes y SHA de archivos locales existentes; no equivalencia con el cartapacio raíz privado del usuario ni con release de software v5.3.0.

## Bloqueos aún activos
1. Reconciliación de cartapacio Local_First físico ↔ repositorio, acceso no disponible en sesión.
2. E2E navegador real (creación, persistencia, restauración, descarga, importación, rechazo de entradas inválidas y gate humano).
3. Ensayo de paquete íntegro autosostenido sin red y recuperación independiente.
4. TSR externa T1–T8 y multicaso en EME/IA en Acción/RIB-EG-IA/EugenIA.
5. Gate específico de estabilidad y no solo AHE documental.

**Gobernanza:** conservar PR #13 en draft, no fusionar en main ni crear tag v5.3.0 hasta evidencia suficiente.
