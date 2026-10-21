# Contrato de reconciliación Local_First ↔ GitHub · FW53 v0.5.3
**Estado:** protocolo aprobado para piloto por Gate G-FW53-EXEC-01; cotejo físico NO EJECUTADO.

## Entradas mínimas
- Carpeta raíz original en posesión y bajo autorización del humano, con corte temporal y hash manifest local SHA-256; no entregar contenido sensible ni rutas personales completas.
- Hash de commit exacto GitHub de rama/HEAD que representa el destino, listado por archivo versionado, con ruta relativa normalizada.
- Tabla de excepciones: secretos, participantes, archivos de licencia restringida, Word/PDF privados, cachés, binarios no liberables, materiales sensibles.
- Documentar proyectos satélite por separado; no confundir el repo maestro con los cuatro pilotos.

## Reglas del diff
| Comparación | Disposición propuesta |
|---|---|
| Ruta presente en ambos y SHA idéntico | `MATCH`, vincular commit y corte; no reescribir |
| Ruta presente en ambos, SHA distinto | `DIVERGENT`, revisar semántica, origen y autoridad antes de sincronizar |
| Solo local | `LOCAL_ONLY`, clasificar reserva o propuesta de incorporación; no publicar automáticamente |
| Solo GitHub | `REMOTE_ONLY`, confirmar copia faltante o artefacto propio de GitHub |
| Falta hash o metadatos | `UNKNOWN`, detener conclusión |
| Ruta excluida por privacidad/licencia | `EXCLUDED`, preservar solo ficha anonimizada autorizada |

**Prohibición:** nunca tomar la coincidencia de nombres, carpetas vacías o sumas parciales como equivalencia global. Nunca dar por pagada AR-01/TE-04 antes de que el custodio revise el diff.

## Salida y Gate
Generar manifiesto comparativo con ruta relativa, tamaño, hash, estado, procedencia, fuente prevaleciente, acción propuesta, responsable, permiso y verificador. Reconciliar `DIVERGENT` mediante aprobación humana por lotes, bitácora de cambios y nueva captura del manifest. Publicar solo el resumen no sensible. Aplicar T1–T8 para transferencia del expediente y recuperación desde receptor.

**Herramienta local disponible:** kit de cotejo SHA-256 preparado en 2026-10-20; no afirmar ejecución sobre raíz original. Debe actualizarse con `git ls-tree` y hashes de contenidos reales para cotejo exacto, no confundir SHA-1 de blobs Git con SHA-256 de archivos.
