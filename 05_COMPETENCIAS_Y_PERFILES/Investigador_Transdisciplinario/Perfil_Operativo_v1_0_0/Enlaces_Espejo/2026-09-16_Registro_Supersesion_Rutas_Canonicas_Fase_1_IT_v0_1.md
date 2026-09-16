# Registro de Supersesión de Rutas Canónicas — Fase 1 IT v0.1

**Fecha:** 2026-09-16  
**Perfil:** Investigador Transdisciplinario  
**Estado:** Activo  
**Motivo:** migración controlada a `Perfil_Operativo_v1_0_0/`

---

## 1. Regla

Los metadatos de ruta incluidos dentro de documentos aprobados antes del cierre operativo describen su residencia canónica al momento de aprobación.

Tras la migración del 2026-09-16, esas rutas quedan **históricas y supersedidas** por las rutas activas registradas en:

`00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/2026-09-16_Tabla_Ubicacion_Documental_Cierre_Fase_1_IT_v0_1.md`

No se reescriben en cascada los documentos aprobados únicamente para cambiar metadatos de residencia, preservando su contenido y trazabilidad de aprobación.

---

## 2. Regla de precedencia

```text
ruta interna histórica del documento
< tabla de ubicación activa
< estructura física verificada en repositorio
```

Cuando exista discrepancia de ubicación, prevalece la tabla activa y la estructura física vigente.

---

## 3. Alcance

Esta supersesión aplica a los ocho documentos de Fase 1 IT migrados mediante el commit atómico:

`e553f2a89440480a5ea7ca2815a9ef2c52ab1631`

Sus contenidos sustantivos y estados de aprobación no cambian.

---

## 4. Criterio de reapertura

Solo se editará un documento aprobado para actualizar su ruta interna si una futura versión sustantiva del propio documento lo requiere. No se genera una versión nueva por un cambio puramente físico de residencia.
