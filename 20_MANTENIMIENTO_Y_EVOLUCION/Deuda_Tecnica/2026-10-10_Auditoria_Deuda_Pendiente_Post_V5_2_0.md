# 🔎 Auditoría de deuda abierta post-v5.2.0

**Fecha:** 2026-10-10  
**Naturaleza:** contraste de documentos activos y estado del repositorio; no es una auditoría experimental ni certificación de accesibilidad.

## Conclusión

El Framework se encuentra consolidado arquitectónicamente y tiene aplicación versionada, pero **la deuda no se encuentra completamente saldada**. La mayor parte de la deuda pre-uso real P0–P8 fue declarada pagada en el registro del 2026-10-05/06. Las siguientes deudas requieren contrastes adicionales:

| ID | Severidad | Deuda / evidencia | Acción de cierre | Estado |
|---|---|---|---|---|
| D01 | Alta | Lector de pantalla sin validación real; reconocido desde v5.0.0 y v5.1.0 | Pruebas manuales NVDA/VoiceOver y remediación documentada | ABIERTA |
| D02 | Alta | Corpus fundacional: 54 registros migrados, verificación primaria completa pendiente; conflicto BA-003 conservado | Verificar fuentes originales, DOI, metadatos, resolver BA-003 con evidencia | ABIERTA |
| D03 | Media | `README_English.md` presenta V4.1.1 como versión actual y describe un Caleidoscopio con modos históricos | Reconciliar con canon 2026-10-08, preservar origen V4 en archivo histórico; revisión bilingüe | ABIERTA |
| D04 | Media | README de varios cartapacios aún anuncia V5.1.0, p. ej. `20_MANTENIMIENTO_Y_EVOLUCION/README.md` | Auditoría de referencias de versión; diferenciación histórico/vigente | ABIERTA |
| D05 | Alta de investigación | Validación pedagógica empírica y agencia humana preservada no demostradas como efectos generales | Diseñar estudios, consentimiento, indicadores de proceso, contraste y revisión ética | ABIERTA POR EVIDENCIA |
| D06 | Alta de investigación | Emergencias caleidoscópicas reales y transferibilidad entre casos sin prueba sistemática | Protocolos cualitativos, múltiples casos, trazabilidad, triangulación, límites de generalización | ABIERTA POR EVIDENCIA |
| D07 | Media | Comunidad de práctica efectiva e indicadores de madurez no acreditados | Observar participación sostenida, reciprocidad y repertorio compartido | ABIERTA POR EVIDENCIA |
| D08 | Media | Verificación independiente de los ZIP/checksums y publicación v5.2.0 no adjunta aquí | Descargar artefactos, comprobar sha256sum, comparar commit/tag, comprobar Pages | REVISIÓN REQUERIDA |
| D09 | Alta archivística | Copias MD, DOCX, PDF y ZIP aprobados no cargadas físicamente en repositorio mediante el conector textual disponible | Cargar binarios mediante flujo autorizado y comparar los cuatro SHA-256 | ABIERTA |
| D10 | Media | Diferenciar versiones V5.2 de esquema 0.1.0 y archivos históricos con nombres v5.1 en guías | Añadir advertencias/versionado contextual en índices humanos sin reescribir documentos históricos | ABIERTA |
| D11 | Media | Comprobación humana de experiencias completas START, INTEGRATE, AUDIT, export/import fuera de pruebas automáticas | Pilotos situados, documentación de errores y bitácoras de usuario | ABIERTA POR USO |

## No reabrir artificialmente

- No confundir pendientes empíricos con fallos técnicos confirmados.
- No promover afirmaciones candidatas al patrimonio común sin evidencia y gate humano.
- No renombrar releases ni reinterpretar retrospectivamente V4/V5.0/V5.1.
- No crear agentes, métricas obligatorias o directorios vacíos solo para aparentar madurez.

## Ruta de acción priorizada

1. **Custodia**: incorporación exacta de archivos aprobados y verificación de hashes (D09).
2. **Accesibilidad y base documental**: lector de pantalla (D01) y bibliografía BA-003 (D02).
3. **Coherencia editorial**: README inglés, enlaces, versiones cartapacios (D03, D04, D10).
4. **Validación técnica situada**: piloto START/INTEGRATE/AUDIT, checksums y Pages (D08, D11).
5. **Agenda de investigación**: diseño y observación de D05–D07.

**Criterio de cierre:** evidencia verificable, registro de cambios, contraste, autorización humana y posibilidad de reapertura.
