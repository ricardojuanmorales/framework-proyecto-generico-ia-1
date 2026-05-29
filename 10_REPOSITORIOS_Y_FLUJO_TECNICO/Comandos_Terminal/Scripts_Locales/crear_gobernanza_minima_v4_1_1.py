from pathlib import Path
from datetime import date

ROOT = Path.cwd()
TODAY = date.today().isoformat()

EXPECTED_MARKERS = [
    "README.md",
    "00_CONTROL_MAESTRO",
    "18_DOCUMENTACION_ACTIVA",
]


def assert_repo_root() -> None:
    missing = [marker for marker in EXPECTED_MARKERS if not (ROOT / marker).exists()]
    if missing:
        raise SystemExit(
            "ERROR: Ejecuta este script desde la raíz del repositorio. "
            f"No se encontraron: {', '.join(missing)}"
        )


def make_document(title: str, subtitle: str, body_lines: list[str]) -> str:
    header = [
        f"# {title}",
        f"## {subtitle}",
        "",
        f"**Fecha:** {TODAY}",
        "**Framework maestro estable:** Framework Genérico V4.1.0",
        "**Repositorio operativo:** Framework Genérico V4.1.1",
        "**Estado:** v0.1",
        "",
        "---",
        "",
    ]
    return "\n".join(header + body_lines).strip() + "\n"


DOCUMENTS = {
    f"00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/{TODAY}_Reglas_Colocacion_Documental_Framework_Generico_V4_1_1_v0-1.md": make_document(
        "Reglas de Colocación Documental",
        "Framework Genérico V4.1.1",
        [
            "## 1. Propósito",
            "",
            "Establecer reglas mínimas para decidir dónde se guarda cada documento, artefacto, guía, protocolo, bitácora, prompt, reporte, aplicación educativa, evidencia, manifest o archivo generado dentro del repositorio.",
            "",
            "## 2. Regla maestra",
            "",
            "El Framework Genérico V4.1.0 se mantiene como documento maestro estable.",
            "",
            "El repositorio Framework Genérico V4.1.1 funciona como estructura operativa viva para organizar, extender, mantener y auditar el framework.",
            "",
            "## 3. Fuente primaria de verdad",
            "",
            "La fuente primaria de verdad es el repositorio versionado.",
            "",
            "Herramientas como WordPress, wikis, asistentes IA, Google Drive, Notion, Obsidian, portales web, agentes o servicios externos pueden publicar, interpretar, resumir o conectar información, pero no sustituyen la fuente oficial versionada.",
            "",
            "## 4. Regla de cartapacios raíz",
            "",
            "Los cartapacios raíz conservan numeración porque representan el orden maestro del repositorio.",
            "",
            "## 5. Regla de subcarpetas",
            "",
            "Las subcarpetas nuevas no deben usar prefijos numéricos.",
            "",
            "Ejemplos recomendados:",
            "",
            "- `Reglas_Colocacion_Documental`",
            "- `Protocolos_Cierre_Sesion`",
            "- `Programador_Humanista`",
            "- `CI_CD`",
            "- `Seguridad_Aplicaciones`",
            "",
            "## 6. Regla de README.md",
            "",
            "Toda subcarpeta debe contener un `README.md`, aunque esté vacío inicialmente, para que GitHub la conserve y muestre.",
            "",
            "## 7. Ubicación por tipo documental",
            "",
            "| Tipo de documento | Ubicación primaria |",
            "|---|---|",
            "| Manifiestos oficiales | `00_CONTROL_MAESTRO/Manifiestos/` |",
            "| Prompts de activación | `00_CONTROL_MAESTRO/Prompts_Activacion/` |",
            "| Reglas de colocación | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` |",
            "| Protocolos de cierre | `00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion/` |",
            "| Tablas de ubicación | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` |",
            "| Decisiones activas | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |",
            "| Decisiones normativas | `04_GOBERNANZA_ETICA_Y_RIESGOS/Decisiones/` |",
            "| Changelogs | `18_DOCUMENTACION_ACTIVA/Changelog/` |",
            "| Primers de continuidad | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` |",
            "| Bitácoras | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |",
            "| Compendios | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/` |",
            "| Cierres de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion/` |",
            "| WIKI_SYNC | `18_DOCUMENTACION_ACTIVA/WIKI_SYNC/` |",
            "| Wiki humana | `21_WIKI_DOCUMENTACION_HUMANA/` |",
            "| Archivo histórico | `99_ARCHIVO_HISTORICO/` |",
            "",
            "## 8. Regla para el Programador Humanista v3.0.0",
            "",
            "La carpeta central del perfil operativo será:",
            "",
            "`05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/`",
            "",
            "Los documentos técnicos especializados vivirán en sus cartapacios funcionales y serán enlazados desde la carpeta central del perfil.",
            "",
            "## 9. Documentos no autorizados todavía",
            "",
            "Hasta cerrar Fase 1 del Programador Humanista v3.0.0, no deben crearse:",
            "",
            "- `AGENTS.md`",
            "- `CLAUDE.md`",
            "- `SKILLS.md`",
            "- workflows operativos finales",
            "",
            "La arquitectura futura puede reservar carpetas, pero no activar automatización prematura.",
        ],
    ),

    f"00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion/{TODAY}_Protocolo_Cierre_Sesion_Framework_Generico_V4_1_1_v0-1.md": make_document(
        "Protocolo de Cierre de Sesión",
        "Framework Genérico V4.1.1",
        [
            "## 1. Propósito",
            "",
            "Establecer un procedimiento estándar para cerrar sesiones de trabajo, registrar productos generados, ubicar documentos, preservar continuidad y preparar archivos descargables.",
            "",
            "## 2. Productos mínimos de cierre",
            "",
            "| Producto | Ubicación |",
            "|---|---|",
            "| Bitácora de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |",
            "| Compendio de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/` |",
            "| Cierre de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion/` |",
            "| Registro de decisiones | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |",
            "| Changelog | `18_DOCUMENTACION_ACTIVA/Changelog/` |",
            "| Primer de continuidad | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` |",
            "| Prompt de activación | `00_CONTROL_MAESTRO/Prompts_Activacion/` |",
            "| Prompt de sesión | `18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/` |",
            "| Manifest de productos | `00_CONTROL_MAESTRO/Manifiestos/` |",
            "| WIKI_SYNC actualizado | `18_DOCUMENTACION_ACTIVA/WIKI_SYNC/` |",
            "",
            "## 3. Tabla obligatoria de cierre",
            "",
            "| Archivo generado | Tipo | Cartapacio destino | Estado | Acción requerida |",
            "|---|---|---|---|---|",
            "| `archivo.md` | Documento operativo | `ruta/` | Nuevo | Guardar |",
            "| `archivo.md` | Gobernanza | `ruta/` | Actualizar | Reemplazar o versionar |",
            "| `archivo.zip` | Paquete | `ruta/` | Nuevo | Archivar |",
            "",
            "## 4. Entrega estándar",
            "",
            "- documentos `.md` individuales;",
            "- paquete `.zip` con todos los documentos generados;",
            "- manifest de ubicación;",
            "- nota de continuidad.",
            "",
            "## 5. Relación con Fase 1",
            "",
            "Durante Fase 1 no deben crearse `AGENTS.md`, `CLAUDE.md`, `SKILLS.md` ni workflows finales.",
        ],
    ),

    f"00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/{TODAY}_Tabla_Ubicacion_Documental_Framework_Generico_V4_1_1_v0-1.md": make_document(
        "Tabla de Ubicación Documental",
        "Framework Genérico V4.1.1",
        [
            "## 1. Propósito",
            "",
            "Definir ubicaciones primarias para documentos y artefactos del repositorio.",
            "",
            "## 2. Tabla general",
            "",
            "| Producto o artefacto | Ubicación primaria |",
            "|---|---|",
            "| Documento maestro estable | Raíz del repositorio y `00_CONTROL_MAESTRO/` |",
            "| Manifest oficial | `00_CONTROL_MAESTRO/Manifiestos/` |",
            "| Prompt de activación | `00_CONTROL_MAESTRO/Prompts_Activacion/` |",
            "| Regla documental | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` |",
            "| Protocolo de cierre | `00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion/` |",
            "| Tabla de ubicación | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` |",
            "| Mapa de repositorio | `00_CONTROL_MAESTRO/Mapas_Repositorio/` |",
            "| Perfil conceptual | `02_ARQUITECTURA_CONCEPTUAL/Perfiles_Transversales/` |",
            "| Perfil operativo | `05_COMPETENCIAS_Y_PERFILES/` |",
            "| Documento metodológico | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/` |",
            "| Decisión normativa | `04_GOBERNANZA_ETICA_Y_RIESGOS/Decisiones/` |",
            "| Registro activo de decisión | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |",
            "| Documento técnico GitHub | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub/` |",
            "| Documento CI/CD | `10_REPOSITORIOS_Y_FLUJO_TECNICO/CI_CD/` |",
            "| Documento de API | `10_REPOSITORIOS_Y_FLUJO_TECNICO/APIs_Servicios/` |",
            "| Documento de base de datos | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Bases_Datos_SQL/` |",
            "| Documento de seguridad | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` |",
            "| Documento de despliegue | `19_IMPLEMENTACION_Y_DESPLIEGUE/` |",
            "| Documento de mantenimiento | `20_MANTENIMIENTO_Y_EVOLUCION/` |",
            "| Guía humana | `21_WIKI_DOCUMENTACION_HUMANA/` |",
            "| Changelog | `18_DOCUMENTACION_ACTIVA/Changelog/` |",
            "| Bitácora | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |",
            "| Compendio | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/` |",
            "| Primer de continuidad | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` |",
            "| Archivo histórico | `99_ARCHIVO_HISTORICO/` |",
            "",
            "## 3. Regla de espejo",
            "",
            "Cuando un documento pertenece funcionalmente a un cartapacio técnico, pero también es relevante para un perfil operativo, debe vivir en su cartapacio técnico y ser enlazado desde la carpeta `Enlaces_Espejo` del perfil.",
        ],
    ),

    f"00_CONTROL_MAESTRO/Manifiestos/{TODAY}_Manifest_Actualizacion_Cartapacios_Framework_Generico_V4_1_1_v0-1.md": make_document(
        "Manifest de Actualización de Cartapacios",
        "Framework Genérico V4.1.1",
        [
            "## 1. Propósito",
            "",
            "Registrar la actualización estructural del sistema de cartapacios para sostener el desarrollo del Perfil Operativo Programador Humanista v3.0.0 y futuros perfiles operativos.",
            "",
            "## 2. Decisiones aplicadas",
            "",
            "| Decisión | Estado |",
            "|---|---|",
            "| Framework Genérico V4.1.0 se mantiene como documento maestro estable | Aplicada |",
            "| Framework Genérico V4.1.1 funciona como repositorio operativo actualizado | Aplicada |",
            "| Subcarpetas nuevas sin prefijo numérico | Aplicada |",
            "| `README.md` en cada subcarpeta | Aplicada |",
            "| Carpeta central del Programador Humanista v3.0.0 en `05_COMPETENCIAS_Y_PERFILES` | Aplicada |",
            "| No crear `AGENTS.md`, `CLAUDE.md`, `SKILLS.md` ni workflows finales | Respetada |",
            "| WordPress se mantiene como capa de publicación/transferencia, no fuente primaria | Respetada |",
            "",
            "## 3. Pendientes posteriores",
            "",
            "- Completar contenidos de README por cartapacio.",
            "- Crear documentos formales de Fase 1.",
            "- Crear enlaces espejo para documentos técnicos cuando existan.",
            "- Mantener bloqueados documentos de agentes y workflows finales hasta cierre de Fase 1.",
        ],
    ),

    f"18_DOCUMENTACION_ACTIVA/Registro_Decisiones/{TODAY}_Registro_Decision_Estructural_Cartapacios_PH_v3_0_0_v0-1.md": make_document(
        "Registro de Decisión Estructural",
        "Cartapacios para Perfil Operativo Programador Humanista v3.0.0",
        [
            "## Decisión",
            "",
            "Se aprueba actualizar la estructura de cartapacios del repositorio Framework Genérico V4.1.1 para sostener el desarrollo del Perfil Operativo Programador Humanista v3.0.0 y futuros perfiles operativos.",
            "",
            "## Justificación",
            "",
            "La estructura previa era suficiente a nivel macro, pero requería subcartapacios técnicos, documentales y de gobernanza para sostener procesos N3 avanzados y proyección N4 institucional.",
            "",
            "## Acuerdos principales",
            "",
            "1. Framework Genérico V4.1.0 permanece como documento maestro estable.",
            "2. Framework Genérico V4.1.1 opera como estructura/repositorio actualizado.",
            "3. Los cierres se adaptan al mapa vigente.",
            "4. Se crean subcarpetas nuevas sin prefijos numéricos.",
            "5. Se crea carpeta central del Programador Humanista v3.0.0.",
            "6. La arquitectura futura de agentes se puede proponer, pero no activar todavía.",
            "7. Se crea protocolo oficial de cierre de sesión como documento vivo.",
            "",
            "## Locks respetados",
            "",
            "No se crean todavía `AGENTS.md`, `CLAUDE.md`, `SKILLS.md` ni workflows operativos finales.",
        ],
    ),

    f"18_DOCUMENTACION_ACTIVA/Changelog/{TODAY}_Changelog_Actualizacion_Cartapacios_Framework_Generico_V4_1_1_v0-1.md": make_document(
        "Changelog de Actualización de Cartapacios",
        "Framework Genérico V4.1.1",
        [
            "## Cambios realizados",
            "",
            "- Se añadió estructura ampliada de subcarpetas para sostener perfiles operativos.",
            "- Se normalizó la regla de subcarpetas sin prefijo numérico.",
            "- Se añadió carpeta central para el Programador Humanista v3.0.0.",
            "- Se añadieron subcarpetas técnicas para GitHub, CI/CD, lenguajes, APIs, bases de datos, seguridad, despliegue, mantenimiento y auditoría.",
            "- Se añadieron subcarpetas de cierre documental en `18_DOCUMENTACION_ACTIVA`.",
            "- Se añadieron subcarpetas para protocolo de cierre, manifiestos, prompts de activación y reglas documentales en `00_CONTROL_MAESTRO`.",
            "- Se preservó el lock contra automatización prematura.",
            "",
            "## Impacto",
            "",
            "La actualización permite organizar aplicaciones educativas complejas, perfiles operativos, documentación viva, auditoría interna, despliegue, mantenimiento, seguridad, agentes futuros y transferencia simétrica.",
        ],
    ),

    f"18_DOCUMENTACION_ACTIVA/Primers_Continuidad/{TODAY}_Primer_Continuidad_Post_Actualizacion_Cartapacios_PH_v3_0_0_v0-1.md": make_document(
        "Primer de Continuidad",
        "Post Actualización de Cartapacios",
        [
            "## 1. Estado actual",
            "",
            "Se aprobó y comenzó la actualización estructural de cartapacios del repositorio Framework Genérico V4.1.1 para sostener el desarrollo del Perfil Operativo Programador Humanista v3.0.0.",
            "",
            "## 2. Regla central",
            "",
            "El Framework Genérico V4.1.0 sigue siendo el documento maestro estable.",
            "",
            "El repositorio V4.1.1 organiza la operación viva.",
            "",
            "## 3. Estructura clave",
            "",
            "La carpeta central del perfil será:",
            "",
            "`05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/`",
            "",
            "## 4. Cierres de sesión",
            "",
            "Los cierres deberán usar el protocolo oficial ubicado en:",
            "",
            "`00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion/`",
            "",
            "## 5. Locks vigentes",
            "",
            "No crear todavía `AGENTS.md`, `CLAUDE.md`, `SKILLS.md` ni workflows operativos finales.",
            "",
            "## 6. Próxima acción recomendada",
            "",
            "Después de validar la estructura y hacer commit, reactivar Fase 1 del Programador Humanista v3.0.0 desde el alcance operativo y continuar con el mapa rector.",
        ],
    ),
}


def write_documents() -> tuple[list[str], list[str]]:
    created = []
    skipped = []

    for relative_path, content in DOCUMENTS.items():
        path = ROOT / relative_path
        path.parent.mkdir(parents=True, exist_ok=True)

        if path.exists():
            skipped.append(relative_path)
            continue

        path.write_text(content, encoding="utf-8")
        created.append(relative_path)

    return created, skipped


def main() -> None:
    assert_repo_root()
    created, skipped = write_documents()

    print("Gobernanza mínima procesada correctamente.")
    print(f"Documentos creados: {len(created)}")
    print(f"Documentos omitidos porque ya existían: {len(skipped)}")

    if created:
        print("\nCreados:")
        for item in created:
            print(f" - {item}")

    if skipped:
        print("\nOmitidos porque ya existían:")
        for item in skipped:
            print(f" - {item}")


if __name__ == "__main__":
    main()