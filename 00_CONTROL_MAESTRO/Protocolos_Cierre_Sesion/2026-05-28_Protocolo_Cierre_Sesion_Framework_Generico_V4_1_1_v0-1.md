# Protocolo de Cierre de Sesión
## Framework Genérico V4.1.1

**Fecha:** 2026-05-28
**Framework maestro estable:** Framework Genérico V4.1.0
**Repositorio operativo:** Framework Genérico V4.1.1
**Estado:** v0.1

---

## 1. Propósito

Establecer un procedimiento estándar para cerrar sesiones de trabajo, registrar productos generados, ubicar documentos, preservar continuidad y preparar archivos descargables.

## 2. Productos mínimos de cierre

| Producto | Ubicación |
|---|---|
| Bitácora de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |
| Compendio de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/` |
| Cierre de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion/` |
| Registro de decisiones | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |
| Changelog | `18_DOCUMENTACION_ACTIVA/Changelog/` |
| Primer de continuidad | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` |
| Prompt de activación | `00_CONTROL_MAESTRO/Prompts_Activacion/` |
| Prompt de sesión | `18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/` |
| Manifest de productos | `00_CONTROL_MAESTRO/Manifiestos/` |
| WIKI_SYNC actualizado | `18_DOCUMENTACION_ACTIVA/WIKI_SYNC/` |

## 3. Tabla obligatoria de cierre

| Archivo generado | Tipo | Cartapacio destino | Estado | Acción requerida |
|---|---|---|---|---|
| `archivo.md` | Documento operativo | `ruta/` | Nuevo | Guardar |
| `archivo.md` | Gobernanza | `ruta/` | Actualizar | Reemplazar o versionar |
| `archivo.zip` | Paquete | `ruta/` | Nuevo | Archivar |

## 4. Entrega estándar

- documentos `.md` individuales;
- paquete `.zip` con todos los documentos generados;
- manifest de ubicación;
- nota de continuidad.

## 5. Relación con Fase 1

Durante Fase 1 no deben crearse `AGENTS.md`, `CLAUDE.md`, `SKILLS.md` ni workflows finales.
