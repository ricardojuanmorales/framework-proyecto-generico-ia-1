# Evaluación de distribución autónoma, candidato documental FW53
**Corte:** 2026-10-20 (ejecución CI registrada UTC 2026-10-21). **Gate:** G-FW53-EXEC-01. **Resultado de este bloque:** verificación aislada local HTTP exitosa; sin emitir release estable v5.3.0.

## Evidencia independiente GitHub Actions
- [Workflow Framework V5 Offline Candidate Pilot, run 39520348125](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39520348125): completed/success.
- Commit ensayado: `eca1f5c60b42e5a4b4bb5b18cda2777c786db409`.
- Artefacto temporal de Actions: `fw53-offline-pilot-candidate`, ID `12311162457`; archivado por GitHub, sujeto a caducidad de Actions. [Abrir run/artifacts](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39520348125).
- SHA-256 del contenedor de artifacts generado por GitHub: `c7a27d9e226c09fa1f4aa4cdbb3ef5769851b18d8e34826e1cc381fb77c72bbe`.
- Script: `apps/framework-v5/tools/build-offline-candidate.py`; workflow `.github/workflows/framework-v5-offline-candidate.yml`.

## Ensayo y salida
1. Dependencias reproducibles con `npm ci --ignore-scripts`; build Vite con `FRAMEWORK_V5_BASE_PATH=./`, compatible con ruta relativa.
2. Generación de ZIP de app estática y ZIP del código del mismo commit, más `SHA256SUMS`, `MANIFEST.sha256`, `RECORD.json` y `INDEX.json`.
3. Verificación externa al empaquetado con `sha256sum -c`, descompresión y comprobación de archivos extraídos.
4. Arranque de servidor HTTP restringido a `127.0.0.1` desde carpeta reconstruida y comprobación HTTP de entrada y assets presentes.
5. Conservación del rótulo de app **v5.2.0**, edición documental piloto **v0.5.3** y release v5.3.0 en estado **NOT_RELEASED**.

**Resultado:** workflow success, ZIP candidatos disponibles temporalmente como artifacts del run. No sustituye una publicación de release GitHub, ni una ejecución manual en la computadora del usuario.

## Alcance exacto de autonomía
En CI se sirvió el contenido extraído mediante loopback **local**. No se ejecutó todavía una prueba específica con aislamiento de salida de red mediante firewall/sandbox que demuestre que ninguna conexión externa intervino, aunque el diseño sea estático y el ensayo use `127.0.0.1`. Para uso del paquete se requiere navegador, y Python 3 si se usa el script incluido. El build no requiere backend remoto ni agentes IA.

## Bloqueos y obligaciones vigentes
- **AR-01**: el cartapacio raíz Local_First físico no fue cotejado; existen otras copias documentales que no son equivalentes por definición al root.
- **TE-03**: empaquetado candidato, SHA, extracción y servicio HTTP local **comprobados**, pero faltan evidencia de restauración por receptor externo y ensayo con egress de red bloqueado.
- **TSR** T1–T8 independiente, longitudinal y multicaso, incluyendo sincronización de satélites, sin validar.
- **v5.3.0 estable** aún no cumple corte de gobernanza/compatibilidad por versión y despliegue; `main` conserva release pública v5.2.0.

Conservar PR #13 como borrador. **No emitir etiqueta/release v5.3.0 sin Gate de estabilidad.**
