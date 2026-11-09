# Estado y ruta de integración canónica · Entrevista 4

**Corte de actualización:** 2026-11-09.  
**Ámbito:** edición documental pública Markdown en la rama `docs/entrevista4-kits-g0-g2-ahe-20261026`, PR #20 hacia `main`.  
**Estado:** integración propuesta; PR abierto en borrador, sin fusionar. Esta actualización no modifica actas AHE, kits experimentales ni fuentes originales.

| Control | Estado verificado |
| --- | --- |
| G0 inventario y custodia | Referencias históricas preservadas; originales y materiales excluidos permanecen bajo custodia local según registros previos |
| G1 ética y permisos | Procedimiento activo; autorizaciones institucionales o de terceros no constatadas |
| G2 cinco constructos | Arquitectura conceptual aprobada para piloto experimental, no validación empírica |
| G3 microestudio | Diseño candidato; NO habilitado para recolección |
| Kits | Tres paquetes aprobados para piloto experimental según acta humana del 2026-10-26 |
| GitHub | **29 archivos Markdown de los kits** y **4 registros de integración** comprometidos en la rama: **33 archivos**, PR #20 abierto en borrador |
| Fuentes excluidas | ZIP originales, PDF, facsímiles, transcripciones íntegras RF-001–RF-004 y manifiestos locales: NO incluidos en los 33 Markdown |
| `main` | Integración todavía pendiente; la rama contiene cinco commits propios y está tres commits detrás de `main` a este corte |
| Local Mac | La sincronización local actual no fue comprobada en esta revisión remota |
| CI | No se observaron checks del commit `853f47c`; no se afirma CI satisfactoria |
| TSR T1–T8 | Pendientes reactivación independiente, reconstrucción y prueba de retorno |

## Rutas de referencia

- **Expediente E04 (situado):** este directorio dentro de `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Reportes_Evaluacion/`.
- **Protocolo v0.2 (método experimental):** `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Protocolos_Entrevista/RETORNO_PROTOCOLO_ENTREVISTAS_v0.2_APROBADO_PILOTO_EXPERIMENTAL/`.
- **Kit genérico:** `07_PLANTILLAS_Y_MODELOS/Kits_Cocreacion_IA/KIT_GENERICO_COCREACION_IA_v1.0_APROBADO_PILOTO_EXPERIMENTAL/`.
- **Índice transversal:** `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/README.md`.

Los nombres históricos de subcarpetas con prefijos numéricos se mantienen sin renombrar en esta estabilización para no romper referencias. Las subcarpetas futuras deberán respetar la convención vigente de nombres semánticos y `README.md`.

## Pendientes de control antes de integrar a main

1. Revisar el diff final del PR #20, validar enlaces e índices e identificar fuentes excluidas sin exponerlas.
2. Cotejar manifiestos y archivos integrales locales cuando se disponga de ellos; la publicación Markdown actual **no** debe presentarse como instalación de los ZIP íntegros.
3. Conciliar la rama con los avances de `main` sin descartar los tres commits nuevos del repositorio.
4. Revisar controles automáticos disponibles o documentar su ausencia; realizar la aprobación humana del alcance publicable.
5. Solo entonces fusionar PR #20 y comprobar `main`; sincronización local y validación externa de TSR siguen como verificaciones distintas.

## Riesgo principal

**Falso cierre de integración:** existencia de kits en ZIP, aprobación experimental o documentos Markdown no equivale a publicación íntegra, autorización ética ni validación de portabilidad. Preservar el alcance, la procedencia, la condición experimental y la deuda documental.

**Decisión de este corte:** estabilización editorial de registros y navegación en la rama. Sin autorización para declarar E04 validada, modificar fuentes privadas ni crear protocolo v0.3.
