# Auditoría de correspondencia · Framework v5.2.0

**Fecha:** 2026-10-09  
**Estado:** auditoría inicial y corrección técnica parcial, sin gate final.

## Hallazgos

| Superficie | Evidencia | Evaluación |
|---|---|---|
| Canon conceptual | Documento integrado v1.0 fechado 2026-10-08 | Presente y vigente; preservar sin reescribir |
| README maestro en main | Identifica v5.1.0 pero expone el canon integrado | Adelantado conceptualmente respecto de su etiqueta; dejar para cierre |
| Release v5.1.0 | Registro de release fechado 2026-10-06 | Anterior al canon del 2026-10-08; no modificar versión histórica |
| App: modelo | frameworkVersion solo 5.0.0 o 5.1.0 | Corregido en rama candidata con soporte 5.2.0 |
| App: creación | Nuevos proyectos marcados 5.1.0 | Corregido en rama candidata a 5.2.0 |
| App: ZIP | Manifest tipado solo 5.0.0/5.1.0 | Corregido en rama candidata para admitir 5.2.0 |
| Schema | Enum excluye 5.2.0 | Corregido en rama candidata |
| Package y lockfile | versión 5.1.0 | Corregidos en rama candidata |
| Paquete autosostenido integral | Documento rector v5.1.0 del 2026-10-06 | Requiere nueva materialización v5.2.0, sin sobrescribir original |
| App desplegada / assets y checksum | No comprobados mediante ejecución y publicación | Abierto |
| Tests CI y compilación | No ejecutados en esta auditoría | Abierto |

## Decisión de actualización

Crear v5.2.0 como nueva consolidación histórico-conceptual, no como reescritura retroactiva de v5.1.0. Distinguir versión del Framework, versión de esquema de proyecto (0.1.0) y versión del documento canónico (1.0). No promover estado de candidato a estable sin gate de pruebas y aprobación humana.

## Política de alcance

No editar README general antes del cierre. No modificar releases anteriores ni atribuir validación empírica a una arquitectura conceptual. Mantener distinción entre desarrollo de la rama, merge a main, despliegue y release oficial.
