# Tabla de Ubicación Documental
## Framework Genérico V4.1.1

**Fecha:** 2026-05-28
**Framework maestro estable:** Framework Genérico V4.1.0
**Repositorio operativo:** Framework Genérico V4.1.1
**Estado:** v0.1

---

## 1. Propósito

Definir ubicaciones primarias para documentos y artefactos del repositorio.

## 2. Tabla general

| Producto o artefacto | Ubicación primaria |
|---|---|
| Documento maestro estable | Raíz del repositorio y `00_CONTROL_MAESTRO/` |
| Manifest oficial | `00_CONTROL_MAESTRO/Manifiestos/` |
| Prompt de activación | `00_CONTROL_MAESTRO/Prompts_Activacion/` |
| Regla documental | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` |
| Protocolo de cierre | `00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion/` |
| Tabla de ubicación | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` |
| Mapa de repositorio | `00_CONTROL_MAESTRO/Mapas_Repositorio/` |
| Perfil conceptual | `02_ARQUITECTURA_CONCEPTUAL/Perfiles_Transversales/` |
| Perfil operativo | `05_COMPETENCIAS_Y_PERFILES/` |
| Documento metodológico | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/` |
| Decisión normativa | `04_GOBERNANZA_ETICA_Y_RIESGOS/Decisiones/` |
| Registro activo de decisión | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |
| Documento técnico GitHub | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub/` |
| Documento CI/CD | `10_REPOSITORIOS_Y_FLUJO_TECNICO/CI_CD/` |
| Documento de API | `10_REPOSITORIOS_Y_FLUJO_TECNICO/APIs_Servicios/` |
| Documento de base de datos | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Bases_Datos_SQL/` |
| Documento de seguridad | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` |
| Documento de despliegue | `19_IMPLEMENTACION_Y_DESPLIEGUE/` |
| Documento de mantenimiento | `20_MANTENIMIENTO_Y_EVOLUCION/` |
| Guía humana | `21_WIKI_DOCUMENTACION_HUMANA/` |
| Changelog | `18_DOCUMENTACION_ACTIVA/Changelog/` |
| Bitácora | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |
| Compendio | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/` |
| Primer de continuidad | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` |
| Archivo histórico | `99_ARCHIVO_HISTORICO/` |

## 3. Regla de espejo

Cuando un documento pertenece funcionalmente a un cartapacio técnico, pero también es relevante para un perfil operativo, debe vivir en su cartapacio técnico y ser enlazado desde la carpeta `Enlaces_Espejo` del perfil.
