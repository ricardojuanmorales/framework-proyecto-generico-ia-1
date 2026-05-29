from pathlib import Path
from datetime import date

ROOT = Path.cwd()

EXPECTED_MARKERS = [
    "README.md",
    "00_CONTROL_MAESTRO",
]

PROHIBITED_FILES = {
    "AGENTS.md",
    "CLAUDE.md",
    "SKILLS.md",
}

TARGET_DIRS = [
    # 00_CONTROL_MAESTRO
    "00_CONTROL_MAESTRO/Manifiestos",
    "00_CONTROL_MAESTRO/Prompts_Activacion",
    "00_CONTROL_MAESTRO/Indices_Maestros",
    "00_CONTROL_MAESTRO/Mapas_Repositorio",
    "00_CONTROL_MAESTRO/Reglas_Colocacion_Documental",
    "00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion",
    "00_CONTROL_MAESTRO/Convenciones_Nombres",
    "00_CONTROL_MAESTRO/Control_Versiones",
    "00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental",

    # 01_FUNDAMENTO_FILOSOFICO
    "01_FUNDAMENTO_FILOSOFICO/Principios",
    "01_FUNDAMENTO_FILOSOFICO/Axiologia",
    "01_FUNDAMENTO_FILOSOFICO/Epistemologia",
    "01_FUNDAMENTO_FILOSOFICO/Humanismo_Tecnologico",
    "01_FUNDAMENTO_FILOSOFICO/Etica_Fundacional",
    "01_FUNDAMENTO_FILOSOFICO/Marcos_Referencia",

    # 02_ARQUITECTURA_CONCEPTUAL
    "02_ARQUITECTURA_CONCEPTUAL/Mapas",
    "02_ARQUITECTURA_CONCEPTUAL/Macro_Meso_Micro",
    "02_ARQUITECTURA_CONCEPTUAL/Perfiles_Transversales",
    "02_ARQUITECTURA_CONCEPTUAL/Perfiles_Transversales/Programador_Humanista",
    "02_ARQUITECTURA_CONCEPTUAL/Perfiles_Transversales/Investigador_Transdisciplinario",
    "02_ARQUITECTURA_CONCEPTUAL/Perfiles_Transversales/Artista_Transdisciplinario",
    "02_ARQUITECTURA_CONCEPTUAL/Perfiles_Transversales/Caleidoscopio",
    "02_ARQUITECTURA_CONCEPTUAL/Matrices_Comparativas",
    "02_ARQUITECTURA_CONCEPTUAL/Arquitecturas_Referencia",

    # 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO
    "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Niveles_N1_N4",
    "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Workflows",
    "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Entrada_Normalizada_Usuarios",
    "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Ciclo_Vida_Proyectos",
    "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Protocolos_Trabajo_Humano_IA",
    "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase",
    "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Plantillas_Metodologicas",

    # 04_GOBERNANZA_ETICA_Y_RIESGOS
    "04_GOBERNANZA_ETICA_Y_RIESGOS/Decisiones",
    "04_GOBERNANZA_ETICA_Y_RIESGOS/Riesgos",
    "04_GOBERNANZA_ETICA_Y_RIESGOS/Etica_Derechos_Accesibilidad",
    "04_GOBERNANZA_ETICA_Y_RIESGOS/Politicas_Gobernanza",
    "04_GOBERNANZA_ETICA_Y_RIESGOS/Registro_Excepciones",
    "04_GOBERNANZA_ETICA_Y_RIESGOS/Revisiones_Humanas",
    "04_GOBERNANZA_ETICA_Y_RIESGOS/Criterios_Aprobacion",

    # 05_COMPETENCIAS_Y_PERFILES
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Mapa_Rector",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Formula_Nuclear",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Competencias",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Unidades_Nucleares",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Arquitectura_Humano_Maquina_IA",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Aplicaciones_Educativas",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Artefactos",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Metricas",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Transferencia_Simetrica",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Gobernanza_Perfil",
    "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario",
    "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario",
    "05_COMPETENCIAS_Y_PERFILES/Caleidoscopio",
    "05_COMPETENCIAS_Y_PERFILES/Matrices_Competencias",
    "05_COMPETENCIAS_Y_PERFILES/Taxonomias",

    # 06_PASTILLAS_MODULARES
    "06_PASTILLAS_MODULARES/Pastillas_Conceptuales",
    "06_PASTILLAS_MODULARES/Pastillas_Tecnicas",
    "06_PASTILLAS_MODULARES/Pastillas_Educativas",
    "06_PASTILLAS_MODULARES/Pastillas_IA",
    "06_PASTILLAS_MODULARES/Pastillas_Evaluacion",
    "06_PASTILLAS_MODULARES/Catalogo_Pastillas",

    # 07_PLANTILLAS_Y_MODELOS
    "07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos",
    "07_PLANTILLAS_Y_MODELOS/Plantillas_Proyectos",
    "07_PLANTILLAS_Y_MODELOS/Plantillas_Aplicaciones_Educativas",
    "07_PLANTILLAS_Y_MODELOS/Plantillas_Evaluacion",
    "07_PLANTILLAS_Y_MODELOS/Plantillas_Gobernanza",
    "07_PLANTILLAS_Y_MODELOS/Plantillas_Wiki",
    "07_PLANTILLAS_Y_MODELOS/Modelos_Datos",
    "07_PLANTILLAS_Y_MODELOS/Modelos_Arquitectura",

    # 08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS
    "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Cursos",
    "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Programas",
    "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Trayectorias",
    "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Modulos_Formativos",
    "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Actividades",
    "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Evaluaciones_Academicas",
    "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Mapas_Curriculares",

    # 09_IA_AGENTES_Y_COPILOTOS
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Plantillas_Base",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Arquitectura_Agentes",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Prompts_Sistema",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Memoria_Contexto",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Herramientas_Tools",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Skills",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Workflows",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Multiagentes",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Integraciones_Copilotos",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Integraciones_ADK",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Modelos_Locales",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Evaluacion_Agentes",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Programador_Humanista/Seguridad_Agentes",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Investigador_Transdisciplinario",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Artista_Transdisciplinario",
    "09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Perfiles/Caleidoscopio",
    "09_IA_AGENTES_Y_COPILOTOS/Asistentes_Personalizados",
    "09_IA_AGENTES_Y_COPILOTOS/Modelos_IA",
    "09_IA_AGENTES_Y_COPILOTOS/Evaluacion_IA",
    "09_IA_AGENTES_Y_COPILOTOS/Seguridad_IA",

    # 10_REPOSITORIOS_Y_FLUJO_TECNICO
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Ramas_Versionado",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Issues_Proyectos",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Pull_Requests_Code_Review",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/CI_CD",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Lenguajes_Programacion",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Lenguajes_Programacion/Python",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Lenguajes_Programacion/TypeScript",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Lenguajes_Programacion/Java",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Lenguajes_Programacion/Go",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Lenguajes_Programacion/Otros_Lenguajes",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Entornos_Desarrollo",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Comandos_Terminal",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/Markdown",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/JSON",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/YAML",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/HTML",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/Otros_Formatos",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/APIs_Servicios",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Bases_Datos_SQL",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Pruebas_Tecnicas",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Estandares_Codigo",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Vibe_Coding_Asistido",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Integracion_IDE_Copilotos",
    "10_REPOSITORIOS_Y_FLUJO_TECNICO/Monorepo_Multirepo",

    # 11_MULTIMODALIDAD_Y_PUBLICACION
    "11_MULTIMODALIDAD_Y_PUBLICACION/Publicacion_Web",
    "11_MULTIMODALIDAD_Y_PUBLICACION/WordPress",
    "11_MULTIMODALIDAD_Y_PUBLICACION/Recursos_Visuales",
    "11_MULTIMODALIDAD_Y_PUBLICACION/Audio_Video",
    "11_MULTIMODALIDAD_Y_PUBLICACION/Documentos_Publicos",
    "11_MULTIMODALIDAD_Y_PUBLICACION/Portales",
    "11_MULTIMODALIDAD_Y_PUBLICACION/Estrategias_Publicacion",

    # 12_DISENO_INSTRUCCIONAL_UNIVERSAL
    "12_DISENO_INSTRUCCIONAL_UNIVERSAL/Accesibilidad",
    "12_DISENO_INSTRUCCIONAL_UNIVERSAL/Diseno_Universal_Aprendizaje",
    "12_DISENO_INSTRUCCIONAL_UNIVERSAL/Adaptaciones_Publicos",
    "12_DISENO_INSTRUCCIONAL_UNIVERSAL/Experiencia_Usuario_Educativa",
    "12_DISENO_INSTRUCCIONAL_UNIVERSAL/Evaluacion_Aprendizaje",
    "12_DISENO_INSTRUCCIONAL_UNIVERSAL/Materiales_Inclusivos",

    # 13_INVESTIGACION_Y_EVIDENCIA
    "13_INVESTIGACION_Y_EVIDENCIA/Fuentes",
    "13_INVESTIGACION_Y_EVIDENCIA/Revisiones_Bibliograficas",
    "13_INVESTIGACION_Y_EVIDENCIA/Evidencia_Empirica",
    "13_INVESTIGACION_Y_EVIDENCIA/Metodos_Investigacion",
    "13_INVESTIGACION_Y_EVIDENCIA/Instrumentos",
    "13_INVESTIGACION_Y_EVIDENCIA/Datos_Investigacion",
    "13_INVESTIGACION_Y_EVIDENCIA/Sintesis_Evidencia",

    # 14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO
    "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Comunidad",
    "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Transferencia",
    "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Escalamiento",
    "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Alianzas",
    "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Difusion",
    "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Capacitacion",
    "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Sostenibilidad_Comunitaria",

    # 15_EVALUACION_CALIDAD_Y_AUDITORIA
    "15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion",
    "15_EVALUACION_CALIDAD_Y_AUDITORIA/Metricas_Internas",
    "15_EVALUACION_CALIDAD_Y_AUDITORIA/Auditorias_Aplicaciones_Educativas",
    "15_EVALUACION_CALIDAD_Y_AUDITORIA/Rubricas_N3_N4",
    "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Accesibilidad",
    "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Seguridad",
    "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_IA_Agentes",
    "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_DevOps",
    "15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria",
    "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evidencias_Validacion",

    # 16_SEGURIDAD_PRIVACIDAD_Y_DATOS
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Politicas_Datos",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Gestion_Secretos",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Accesos_Permisos",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Seguridad_Aplicaciones",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Seguridad_APIs",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Seguridad_IA_Agentes",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Seguridad_Contenedores",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Seguridad_Bases_Datos",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Evaluacion_Riesgos_Tecnicos",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Incidentes_Respuesta",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Backups_Recuperacion",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Cumplimiento_Normativo",
    "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Checklists_Seguridad",

    # 17_INTERNACIONALIZACION_LOCALIZACION
    "17_INTERNACIONALIZACION_LOCALIZACION/Traducciones",
    "17_INTERNACIONALIZACION_LOCALIZACION/Localizacion",
    "17_INTERNACIONALIZACION_LOCALIZACION/Versiones_Idioma",
    "17_INTERNACIONALIZACION_LOCALIZACION/Adaptacion_Cultural",
    "17_INTERNACIONALIZACION_LOCALIZACION/Glosarios",

    # 18_DOCUMENTACION_ACTIVA
    "18_DOCUMENTACION_ACTIVA/Changelog",
    "18_DOCUMENTACION_ACTIVA/Registro_Decisiones",
    "18_DOCUMENTACION_ACTIVA/WIKI_SYNC",
    "18_DOCUMENTACION_ACTIVA/Primers_Continuidad",
    "18_DOCUMENTACION_ACTIVA/Cierres_Reportes",
    "18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras",
    "18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios",
    "18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion",
    "18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Reportes_Evaluacion",
    "18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Manifiestos_Sesion",
    "18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion",
    "18_DOCUMENTACION_ACTIVA/Segundo_Cerebro",
    "18_DOCUMENTACION_ACTIVA/Segundo_Cerebro/Dashboards",
    "18_DOCUMENTACION_ACTIVA/Segundo_Cerebro/Issues_Vivos",
    "18_DOCUMENTACION_ACTIVA/Segundo_Cerebro/Riesgos_Vivos",
    "18_DOCUMENTACION_ACTIVA/Segundo_Cerebro/Sesiones_Activas",
    "18_DOCUMENTACION_ACTIVA/Segundo_Cerebro/Mapas_Navegacion",
    "18_DOCUMENTACION_ACTIVA/Segundo_Cerebro/Templates",

    # 19_IMPLEMENTACION_Y_DESPLIEGUE
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Entornos",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Configuracion_Entornos",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Contenedores_Docker",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Kubernetes",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Cloud_Computing",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Infraestructura_Como_Codigo",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/APIs_Despliegue",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/WordPress_Publicacion",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Portales_Educativos",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/CI_CD_Despliegue",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Observabilidad",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Runbooks",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Release_Management",
    "19_IMPLEMENTACION_Y_DESPLIEGUE/Rollback_Recuperacion",

    # 20_MANTENIMIENTO_Y_EVOLUCION
    "20_MANTENIMIENTO_Y_EVOLUCION/Mantenimiento_Aplicaciones",
    "20_MANTENIMIENTO_Y_EVOLUCION/Monitoreo",
    "20_MANTENIMIENTO_Y_EVOLUCION/Actualizaciones",
    "20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Tecnica",
    "20_MANTENIMIENTO_Y_EVOLUCION/Backlog_Evolutivo",
    "20_MANTENIMIENTO_Y_EVOLUCION/Versionado_Releases",
    "20_MANTENIMIENTO_Y_EVOLUCION/Auditorias_Periodicas",
    "20_MANTENIMIENTO_Y_EVOLUCION/Soporte_Usuarios",
    "20_MANTENIMIENTO_Y_EVOLUCION/Incidentes_Postmortems",
    "20_MANTENIMIENTO_Y_EVOLUCION/Sostenibilidad",
    "20_MANTENIMIENTO_Y_EVOLUCION/Deprecacion_Retiro",
    "20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion",

    # 21_WIKI_DOCUMENTACION_HUMANA
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/Inicio_Rapido",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/Guia_Estudiantes",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/Guia_Educadores",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/Guia_Investigadores",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/Guia_Administradores_Proyecto",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/Guia_Desarrollo_Aplicaciones_Educativas",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/Guia_IA_Agentes",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/Guia_DevOps_Basico",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/Guia_Seguridad_Accesibilidad",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/FAQ",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Investigador_Transdisciplinario",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Artista_Transdisciplinario",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Caleidoscopio",
    "21_WIKI_DOCUMENTACION_HUMANA/Guias_Framework_Generico_V4_1_0",

    # 99_ARCHIVO_HISTORICO
    "99_ARCHIVO_HISTORICO/Planes_Archivo",
    "99_ARCHIVO_HISTORICO/Ciclos_Completados",
    "99_ARCHIVO_HISTORICO/Exportaciones_Finales",
    "99_ARCHIVO_HISTORICO/Exportaciones_Finales/JSON",
    "99_ARCHIVO_HISTORICO/Exportaciones_Finales/MD",
    "99_ARCHIVO_HISTORICO/Exportaciones_Finales/ZIP",
    "99_ARCHIVO_HISTORICO/Releases",
    "99_ARCHIVO_HISTORICO/Versiones_Cerradas",
    "99_ARCHIVO_HISTORICO/Versiones_Cerradas/V4_0_0",
    "99_ARCHIVO_HISTORICO/Wiki_Archivada",
    "99_ARCHIVO_HISTORICO/Sesiones_Cerradas",
    "99_ARCHIVO_HISTORICO/Aplicaciones_Retiradas",
]


def assert_repo_root() -> None:
    missing = [marker for marker in EXPECTED_MARKERS if not (ROOT / marker).exists()]
    if missing:
        raise SystemExit(
            "ERROR: Este script debe ejecutarse desde la raíz del repositorio. "
            f"No se encontraron: {', '.join(missing)}"
        )


def create_structure() -> tuple[list[str], list[str], list[str]]:
    created_dirs = []
    existing_dirs = []
    created_readmes = []

    for relative_dir in TARGET_DIRS:
        folder = ROOT / relative_dir

        if folder.exists():
            existing_dirs.append(relative_dir)
        else:
            folder.mkdir(parents=True, exist_ok=True)
            created_dirs.append(relative_dir)

        readme = folder / "README.md"
        if not readme.exists():
            readme.write_text("", encoding="utf-8")
            created_readmes.append(f"{relative_dir}/README.md")

    return created_dirs, existing_dirs, created_readmes


def verify_no_prohibited_files() -> list[str]:
    found = []
    for prohibited in PROHIBITED_FILES:
        found.extend(str(path.relative_to(ROOT)) for path in ROOT.rglob(prohibited))
    return sorted(found)


def write_report(created_dirs: list[str], existing_dirs: list[str], created_readmes: list[str]) -> Path:
    report_dir = ROOT / "00_CONTROL_MAESTRO" / "Mapas_Repositorio"
    report_dir.mkdir(parents=True, exist_ok=True)

    report_path = report_dir / f"{date.today().isoformat()}_Reporte_Creacion_Estructura_Cartapacios_v0-1.md"

    lines = [
        "# Reporte de Creación de Estructura de Cartapacios",
        "",
        f"**Fecha:** {date.today().isoformat()}",
        "**Framework estable:** Framework Genérico V4.1.0",
        "**Repositorio operativo:** Framework Genérico V4.1.1",
        "**Operación:** creación de subcarpetas y README.md sin sobreescritura",
        "",
        "## Resumen",
        "",
        f"- Carpetas objetivo: {len(TARGET_DIRS)}",
        f"- Carpetas creadas: {len(created_dirs)}",
        f"- Carpetas ya existentes: {len(existing_dirs)}",
        f"- README.md creados: {len(created_readmes)}",
        "",
        "## Carpetas creadas",
        "",
    ]

    if created_dirs:
        lines.extend(f"- `{item}`" for item in created_dirs)
    else:
        lines.append("- Ninguna carpeta nueva creada.")

    lines.extend(["", "## Carpetas ya existentes", ""])

    if existing_dirs:
        lines.extend(f"- `{item}`" for item in existing_dirs)
    else:
        lines.append("- Ninguna carpeta existía previamente.")

    lines.extend(["", "## README.md creados", ""])

    if created_readmes:
        lines.extend(f"- `{item}`" for item in created_readmes)
    else:
        lines.append("- Ningún README.md nuevo creado.")

    lines.extend([
        "",
        "## Nota de seguridad documental",
        "",
        "Este script no crea AGENTS.md, CLAUDE.md, SKILLS.md ni workflows operativos finales.",
        "La arquitectura de agentes queda reservada para fases posteriores.",
        "",
    ])

    report_path.write_text("\n".join(lines), encoding="utf-8")
    return report_path


def main() -> None:
    assert_repo_root()

    created_dirs, existing_dirs, created_readmes = create_structure()
    prohibited_found = verify_no_prohibited_files()
    report_path = write_report(created_dirs, existing_dirs, created_readmes)

    print("Estructura procesada correctamente.")
    print(f"Carpetas objetivo: {len(TARGET_DIRS)}")
    print(f"Carpetas creadas: {len(created_dirs)}")
    print(f"Carpetas ya existentes: {len(existing_dirs)}")
    print(f"README.md creados: {len(created_readmes)}")
    print(f"Reporte generado: {report_path}")

    if prohibited_found:
        print("")
        print("AVISO: Se encontraron archivos bloqueados existentes:")
        for item in prohibited_found:
            print(f" - {item}")
        print("Este script no los creó. Revísalos manualmente si aplica.")


if __name__ == "__main__":
    main()