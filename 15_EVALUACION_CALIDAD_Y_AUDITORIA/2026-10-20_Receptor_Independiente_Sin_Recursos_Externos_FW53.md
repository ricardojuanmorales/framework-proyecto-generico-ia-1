# Recuperación independiente del ZIP con solicitudes externas bloqueadas · Framework v5.3

**Corte:** 2026-10-20, ejecución CI en UTC 2026-10-21. **Gate:** G-FW53-EXEC-01. **Estado:** PRUEBA TÉCNICA SUPERADA; release v5.3.0 aún NO emitida.

## Evidencia reproducible
- GitHub Actions run [39521800927](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39521800927), commit `4b639f00856cdf5cab777d785876ee9e278696f4`: **completed/success**.
- Job `build-and-restore` 118967135741: **completed/success**; produjo paquete ZIP candidato, hashes, manifiesto, extrajo y sirvió.
- Job `independent-restore-no-external-requests` 118967217373: **completed/success**; corre en un **ejecutor GitHub Actions distinto**. Descargó únicamente el artefacto de su productor, comprobó hashes de ZIP y contenidos extraídos, inició servicio HTTP de loopback y montó el frontend usando Chromium.
- En el contexto del navegador se impuso `route('**/*')` con denegación de cualquier solicitud fuera de `http://127.0.0.1:4177`, y la prueba verificó `rejectedExternal===0`, sin errores de ejecución de página. Creó un proyecto START, recargó y confirmó restauración desde almacenamiento del navegador.

## Dictamen acotado
La **portabilidad técnica y recuperación sintética del artefacto ZIP en otro ejecutor** está acreditada para el contrato ensayado. La afirmación correcta sobre red es: **sin solicitudes HTTP(S) externas observadas dentro de Chromium bajo una política explícita que las deniega**. Esto no prueba aislamiento total de salida de red del sistema operativo, ni la ausencia de dependencias previas (Python, Chromium), ni restauración manual por humano externo.

## Deuda
- TE-03: avance significativo, casi satisfecha para portabilidad técnica interna; aún pendiente receptor externo a GitHub Actions/ensayo fuera del proveedor y validación contextual de resiliencia.
- AR-01/TE-04: cartapacio Local_First físico raíz bajo custodia del humano **sin cotejar**; los ZIP documentales locales no equivalen a él.
- ME-01 y FD-02: TSR T1–T8 **no acreditada semánticamente ni multicaso** para EME, IA en Acción, RIB-EG-IA, EugenIA/BIVA.
- GO-04: Gate de estabilidad **no superado**; la app conserva versión técnica 5.2.0 y la edición documental piloto es v0.5.3. No crear tag v5.3.0 ni fusionar PR #13 automáticamente.

**Procedencia:** workflow `.github/workflows/framework-v5-offline-candidate.yml` en commit `4b639f00856cdf5cab777d785876ee9e278696f4`. Código y resultados históricos sin reescritura.
