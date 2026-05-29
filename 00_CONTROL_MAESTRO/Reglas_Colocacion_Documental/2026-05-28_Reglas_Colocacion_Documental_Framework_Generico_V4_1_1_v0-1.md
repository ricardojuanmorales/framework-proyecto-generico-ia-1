# Reglas de Colocación Documental
## Framework Genérico V4.1.1

**Fecha:** 2026-05-28
**Framework maestro estable:** Framework Genérico V4.1.0
**Repositorio operativo:** Framework Genérico V4.1.1
**Estado:** v0.1

---

## 1. Propósito

Establecer reglas mínimas para decidir dónde se guarda cada documento, artefacto, guía, protocolo, bitácora, prompt, reporte, aplicación educativa, evidencia, manifest o archivo generado dentro del repositorio.

## 2. Regla maestra

El Framework Genérico V4.1.0 se mantiene como documento maestro estable.

El repositorio Framework Genérico V4.1.1 funciona como estructura operativa viva para organizar, extender, mantener y auditar el framework.

## 3. Fuente primaria de verdad

La fuente primaria de verdad es el repositorio versionado.

Herramientas como WordPress, wikis, asistentes IA, Google Drive, Notion, Obsidian, portales web, agentes o servicios externos pueden publicar, interpretar, resumir o conectar información, pero no sustituyen la fuente oficial versionada.

## 4. Regla de cartapacios raíz

Los cartapacios raíz conservan numeración porque representan el orden maestro del repositorio.

## 5. Regla de subcarpetas

Las subcarpetas nuevas no deben usar prefijos numéricos.

Ejemplos recomendados:

- `Reglas_Colocacion_Documental`
- `Protocolos_Cierre_Sesion`
- `Programador_Humanista`
- `CI_CD`
- `Seguridad_Aplicaciones`

## 6. Regla de README.md

Toda subcarpeta debe contener un `README.md`, aunque esté vacío inicialmente, para que GitHub la conserve y muestre.

## 7. Ubicación por tipo documental

| Tipo de documento | Ubicación primaria |
|---|---|
| Manifiestos oficiales | `00_CONTROL_MAESTRO/Manifiestos/` |
| Prompts de activación | `00_CONTROL_MAESTRO/Prompts_Activacion/` |
| Reglas de colocación | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` |
| Protocolos de cierre | `00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion/` |
| Tablas de ubicación | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` |
| Decisiones activas | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |
| Decisiones normativas | `04_GOBERNANZA_ETICA_Y_RIESGOS/Decisiones/` |
| Changelogs | `18_DOCUMENTACION_ACTIVA/Changelog/` |
| Primers de continuidad | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` |
| Bitácoras | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |
| Compendios | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/` |
| Cierres de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion/` |
| WIKI_SYNC | `18_DOCUMENTACION_ACTIVA/WIKI_SYNC/` |
| Wiki humana | `21_WIKI_DOCUMENTACION_HUMANA/` |
| Archivo histórico | `99_ARCHIVO_HISTORICO/` |

## 8. Regla para el Programador Humanista v3.0.0

La carpeta central del perfil operativo será:

`05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/`

Los documentos técnicos especializados vivirán en sus cartapacios funcionales y serán enlazados desde la carpeta central del perfil.

## 9. Documentos no autorizados todavía

Hasta cerrar Fase 1 del Programador Humanista v3.0.0, no deben crearse:

- `AGENTS.md`
- `CLAUDE.md`
- `SKILLS.md`
- workflows operativos finales

La arquitectura futura puede reservar carpetas, pero no activar automatización prematura.
