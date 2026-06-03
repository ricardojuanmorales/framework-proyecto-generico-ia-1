# Mapa de Estructura de Cartapacios y Sub-Cartapacios
**Fecha:** 2026-06-02
**Versión:** v0_1
**Estado:** Post-consolidación estructural (auditoría 2026-06-02)
**Proyecto:** Framework Genérico V4.1.1

---

## Convención de nomenclatura

- **Nivel raíz:** `NN_NOMBRE_EN_MAYUSCULAS` (prefijo numérico obligatorio)
- **Sub-niveles:** `Nombre_En_PascalCase` (sin prefijo numérico)
- **Archivos:** `YYYY-MM-DD_Nombre_Descriptivo_vX-Y.md` (con fecha) o `Nombre_Descriptivo.md` (sin fecha, docs vivos)

---

## Árbol de cartapacios

```
framework-proyecto-generico-ia-1/
│
├── 00_CONTROL_MAESTRO/                          Control maestro del repositorio
│   ├── Control_Versiones/
│   ├── Convenciones_Nombres/
│   ├── Indices_Maestros/
│   ├── Manifiestos/
│   ├── Mapas_Repositorio/                       ← Este archivo
│   ├── Prompts_Activacion/
│   ├── Protocolos_Cierre_Sesion/
│   ├── Reglas_Colocacion_Documental/
│   └── Tablas_Ubicacion_Documental/
│
├── 01_FUNDAMENTO_FILOSOFICO/                    Base filosófica del framework
│   ├── Axiologia/
│   ├── Epistemologia/
│   ├── Etica_Fundacional/
│   ├── Humanismo_Tecnologico/
│   ├── Marcos_Referencia/
│   └── Principios/
│
├── 02_ARQUITECTURA_CONCEPTUAL/                  Arquitectura y modelos conceptuales
│   ├── Arquitecturas_Referencia/
│   ├── Macro_Meso_Micro/
│   ├── Mapas/                                   Mapas conceptuales y de navegación
│   ├── Matrices_Comparativas/
│   └── Perfiles_Transversales/                  Definiciones conceptuales de los 4 perfiles
│       ├── Artista_Transdisciplinario/
│       ├── Caleidoscopio/
│       ├── Investigador_Transdisciplinario/
│       └── Programador_Humanista/
│
├── 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/           Metodología y protocolos de trabajo
│   ├── Ciclo_Vida_Proyectos/
│   ├── Entrada_Normalizada_Usuarios/
│   ├── Niveles_N1_N4/                           Matrices de niveles de complejidad
│   ├── Plantillas_Metodologicas/
│   ├── Protocolos_Trabajo_Humano_IA/
│   ├── Secuencias_Fase_Por_Fase/
│   └── Workflows/
│
├── 04_GOBERNANZA_ETICA_Y_RIESGOS/              Gobernanza, ética y gestión de riesgos
│   ├── Criterios_Aprobacion/
│   ├── Decisiones/                              Decisiones formales aprobadas
│   ├── Etica_Derechos_Accesibilidad/
│   ├── Politicas_Gobernanza/
│   ├── Registro_Excepciones/
│   ├── Revisiones_Humanas/
│   └── Riesgos/
│
├── 05_COMPETENCIAS_Y_PERFILES/                  Competencias operativas por perfil
│   ├── Artista_Transdisciplinario/
│   ├── Caleidoscopio/
│   ├── Investigador_Transdisciplinario/
│   ├── Matrices_Competencias/
│   ├── Programador_Humanista/
│   │   └── Perfil_Operativo_v3_0_0/            Perfil operativo activo (Fase 1 completada)
│   │       ├── Alcance_Operativo/
│   │       ├── Aplicaciones_Educativas/
│   │       ├── Arquitectura_Humano_Maquina_IA/
│   │       ├── Artefactos/
│   │       ├── Bases_Conocimiento/
│   │       ├── Competencias/
│   │       ├── Enlaces_Espejo/
│   │       ├── Formula_Nuclear/
│   │       ├── Gobernanza_Perfil/
│   │       ├── Mapa_Rector/
│   │       ├── Metricas/
│   │       ├── Transferencia_Simetrica/
│   │       └── Unidades_Nucleares/
│   └── Taxonomias/
│
├── 06_PASTILLAS_MODULARES/                      Pastillas de conocimiento reutilizables
│   ├── Catalogo_Pastillas/
│   ├── Pastillas_Conceptuales/
│   ├── Pastillas_Educativas/
│   ├── Pastillas_Evaluacion/
│   ├── Pastillas_IA/
│   └── Pastillas_Tecnicas/
│
├── 07_PLANTILLAS_Y_MODELOS/                     Plantillas y modelos reutilizables
│   ├── Modelos_Arquitectura/
│   ├── Modelos_Datos/
│   ├── Plantillas_Aplicaciones_Educativas/
│   ├── Plantillas_Documentos/
│   ├── Plantillas_Evaluacion/
│   ├── Plantillas_Gobernanza/
│   ├── Plantillas_Proyectos/
│   └── Plantillas_Wiki/
│
├── 08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/          Diseño educativo y trayectorias
│   ├── Actividades/
│   ├── Cursos/
│   ├── Evaluaciones_Academicas/
│   ├── Mapas_Curriculares/
│   ├── Modulos_Formativos/
│   ├── Programas/
│   └── Trayectorias/
│
├── 09_IA_AGENTES_Y_COPILOTOS/                  Sistema operativo de agentes e IA
│   ├── Asistentes_Personalizados/
│   ├── Evaluacion_IA/
│   ├── Modelos_IA/
│   ├── Seguridad_IA/
│   └── Sistema_Operativo_Agentes_Skills/
│       ├── Perfiles/
│       │   ├── Artista_Transdisciplinario/
│       │   ├── Caleidoscopio/
│       │   ├── Investigador_Transdisciplinario/
│       │   └── Programador_Humanista/
│       │       ├── Arquitectura_Agentes/
│       │       ├── Evaluacion_Agentes/
│       │       ├── Herramientas_Tools/
│       │       ├── Integraciones_ADK/
│       │       ├── Integraciones_Copilotos/
│       │       ├── Memoria_Contexto/
│       │       ├── Modelos_Locales/
│       │       ├── Multiagentes/
│       │       ├── Prompts_Sistema/
│       │       ├── Seguridad_Agentes/
│       │       ├── Skills/
│       │       └── Workflows/
│       └── Plantillas_Base/
│
├── 10_REPOSITORIOS_Y_FLUJO_TECNICO/            Flujo técnico y gestión de código
│   ├── APIs_Servicios/
│   ├── Bases_Datos_SQL/
│   ├── CI_CD/
│   ├── Comandos_Terminal/
│   │   └── Scripts_Locales/
│   ├── Entornos_Desarrollo/
│   ├── Estandares_Codigo/
│   ├── Formatos_Documentales/
│   │   ├── HTML/
│   │   ├── JSON/
│   │   ├── Markdown/
│   │   ├── Otros_Formatos/
│   │   └── YAML/
│   ├── Git_GitHub/
│   ├── Integracion_IDE_Copilotos/
│   ├── Issues_Proyectos/
│   ├── Lenguajes_Programacion/
│   │   ├── Go/
│   │   ├── Java/
│   │   ├── Otros_Lenguajes/
│   │   ├── Python/
│   │   └── TypeScript/
│   ├── Monorepo_Multirepo/
│   ├── Pruebas_Tecnicas/
│   ├── Pull_Requests_Code_Review/
│   ├── Ramas_Versionado/
│   └── Vibe_Coding_Asistido/
│
├── 11_MULTIMODALIDAD_Y_PUBLICACION/            Publicación y multimodalidad
│   ├── Audio_Video/
│   ├── Documentos_Publicos/
│   ├── Estrategias_Publicacion/
│   ├── Portales/
│   ├── Publicacion_Web/
│   ├── Recursos_Visuales/
│   └── WordPress/
│
├── 12_DISENO_INSTRUCCIONAL_UNIVERSAL/          Diseño instruccional y accesibilidad
│   ├── Accesibilidad/
│   ├── Adaptaciones_Publicos/
│   ├── Diseno_Universal_Aprendizaje/
│   ├── Evaluacion_Aprendizaje/
│   ├── Experiencia_Usuario_Educativa/
│   └── Materiales_Inclusivos/
│
├── 13_INVESTIGACION_Y_EVIDENCIA/               Investigación y base empírica
│   ├── Datos_Investigacion/
│   ├── Evidencia_Empirica/
│   ├── Fuentes/
│   ├── Instrumentos/
│   ├── Metodos_Investigacion/
│   ├── Revisiones_Bibliograficas/
│   └── Sintesis_Evidencia/
│
├── 14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/  Comunidad y escalamiento
│   ├── Alianzas/
│   ├── Capacitacion/
│   ├── Comunidad/
│   ├── Difusion/
│   ├── Escalamiento/
│   ├── Sostenibilidad_Comunitaria/
│   └── Transferencia/
│
├── 15_EVALUACION_CALIDAD_Y_AUDITORIA/         Evaluación, calidad y auditoría
│   ├── Auditorias_Aplicaciones_Educativas/
│   ├── Evaluacion_Accesibilidad/
│   ├── Evaluacion_DevOps/
│   ├── Evaluacion_IA_Agentes/
│   ├── Evaluacion_Seguridad/
│   ├── Evidencias_Validacion/
│   ├── Gates_Checks_Evaluacion/               Matrices, protocolos y CHECKs formales
│   ├── Metricas_Internas/
│   ├── Reportes_Auditoria/
│   └── Rubricas_N3_N4/
│
├── 16_SEGURIDAD_PRIVACIDAD_Y_DATOS/           Seguridad y privacidad
│   ├── Accesos_Permisos/
│   ├── Backups_Recuperacion/
│   ├── Checklists_Seguridad/
│   ├── Cumplimiento_Normativo/
│   ├── Evaluacion_Riesgos_Tecnicos/
│   ├── Gestion_Secretos/
│   ├── Incidentes_Respuesta/
│   ├── Politicas_Datos/
│   ├── Privacidad/
│   ├── Seguridad_APIs/
│   ├── Seguridad_Aplicaciones/
│   ├── Seguridad_Bases_Datos/
│   ├── Seguridad_Contenedores/
│   └── Seguridad_IA_Agentes/
│
├── 17_INTERNACIONALIZACION_LOCALIZACION/       Internacionalización y localización
│   ├── Adaptacion_Cultural/
│   ├── Glosarios/
│   ├── Localizacion/
│   ├── Traducciones/
│   └── Versiones_Idioma/
│
├── 18_DOCUMENTACION_ACTIVA/                    Documentación viva y trazabilidad
│   ├── Changelog/                              Historial de cambios por sesión
│   ├── Cierres_Reportes/
│   │   ├── Bitacoras/                          ← Este archivo pertenece aquí
│   │   ├── Cierres_Sesion/
│   │   ├── Compendios/
│   │   ├── Manifiestos_Sesion/
│   │   └── Reportes_Evaluacion/
│   ├── Primers_Continuidad/                    Primers de activación para nuevas sesiones
│   ├── Prompts_de_Sesion/
│   ├── Registro_Decisiones/                    DA (Decisiones de Arquitectura) numeradas
│   ├── Segundo_Cerebro/
│   │   ├── Dashboards/
│   │   ├── Issues_Vivos/
│   │   ├── Mapas_Navegacion/
│   │   ├── Riesgos_Vivos/
│   │   ├── Sesiones_Activas/
│   │   └── Templates/
│   └── WIKI_SYNC/
│
├── 19_IMPLEMENTACION_Y_DESPLIEGUE/            Implementación técnica y despliegue
│   ├── APIs_Despliegue/
│   ├── CI_CD_Despliegue/
│   ├── Cloud_Computing/
│   ├── Configuracion_Entornos/
│   ├── Contenedores_Docker/
│   ├── Entornos/
│   ├── Infraestructura_Como_Codigo/
│   ├── Kubernetes/
│   ├── Observabilidad/
│   ├── Portales_Educativos/
│   ├── Release_Management/
│   ├── Rollback_Recuperacion/
│   ├── Runbooks/
│   └── WordPress_Publicacion/
│
├── 20_MANTENIMIENTO_Y_EVOLUCION/              Mantenimiento y evolución del sistema
│   ├── Actualizaciones/
│   ├── Auditorias_Periodicas/
│   ├── Backlog_Evolutivo/
│   ├── Deprecacion_Retiro/
│   ├── Deuda_Tecnica/
│   ├── Incidentes_Postmortems/
│   ├── Mantenimiento_Aplicaciones/
│   ├── Monitoreo/
│   ├── Planes_Evolucion/
│   ├── Soporte_Usuarios/
│   ├── Sostenibilidad/
│   └── Versionado_Releases/
│
├── 21_WIKI_DOCUMENTACION_HUMANA/             Wiki y documentación para usuarios humanos
│   ├── Guias_Artista_Transdisciplinario/
│   ├── Guias_Caleidoscopio/
│   ├── Guias_Framework_Generico_V4_1_0/      Guías transversales del framework
│   ├── Guias_Investigador_Transdisciplinario/
│   └── Guias_Programador_Humanista/
│       ├── FAQ/
│       ├── Guia_Administradores_Proyecto/
│       ├── Guia_Desarrollo_Aplicaciones_Educativas/
│       ├── Guia_DevOps_Basico/
│       ├── Guia_Educadores/
│       ├── Guia_Estudiantes/
│       ├── Guia_IA_Agentes/
│       ├── Guia_Investigadores/
│       ├── Guia_Seguridad_Accesibilidad/
│       └── Inicio_Rapido/
│
└── 99_ARCHIVO_HISTORICO/                      Archivo histórico — solo lectura
    ├── Aplicaciones_Retiradas/
    ├── Ciclos_Completados/
    │   └── 2026-05-04_Perfiles_Transversales_Caleidoscopio/
    ├── Exportaciones_Finales/
    │   ├── JSON/
    │   ├── MD/
    │   └── ZIP/
    ├── Planes_Archivo/
    ├── Releases/
    │   └── Framework_Generico_V4_1_0_Estable/
    ├── Sesiones_Cerradas/
    ├── Versiones_Cerradas/
    │   └── V4_0_0/
    └── Wiki_Archivada/
```

---

## Estadísticas del repositorio (2026-06-02)

| Métrica | Valor |
|---|---|
| Cartapacios raíz | 22 (00 al 21, más 99) |
| Total sub-cartapacios | ~180 |
| Archivos .md con contenido real | ~150 |
| Archivos README.md (marcadores de estructura) | ~120 |
| Scripts Python | 2 |
| Archivos JSON | 4 |
| Archivos ZIP | 3 |
| Commits totales en main | 6 |

---

## Archivos en raíz del repositorio

| Archivo | Propósito |
|---|---|
| `README.md` | Presentación principal del proyecto |
| `README_English.md` | Versión en inglés |
| `README_Framework_Generico_V4_1_1_Perfiles_Activos_v0_2.md` | README específico de perfiles activos |
| `index.html` | Página web del proyecto |
| `.gitignore` | Exclusiones de git |

---

*Generado post-auditoría de consolidación estructural — 2026-06-02*
