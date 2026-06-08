# Tree Repositorio — Framework Genérico V4.1.1

**Código documental:** 2026-06-08_Tree_Repositorio_Framework_Generico_V4_1_1_v0_3
**Fecha:** 2026-06-08
**Versión:** v0.3
**Estado:** Regenerado tras la colocación física de los documentos de Ronda 2A (commit `a014145`); refleja el snapshot real de `git ls-files` a la fecha indicada
**Framework maestro estable:** Framework Genérico V4.1.0
**Repositorio operativo vivo:** Framework Genérico V4.1.1
**Tipo de documento:** árbol de archivos del repositorio (Tree_Repositorio)
**Cartapacio destino:** `00_CONTROL_MAESTRO/Mapas_Repositorio/`
**Documento que reemplaza como referencia vigente:** `00_CONTROL_MAESTRO/Mapas_Repositorio/2026-06-08_Tree_Repositorio_Framework_Generico_V4_1_1_v0_2.md`
**Documentos relacionados:**
- `00_CONTROL_MAESTRO/TREE_REPOSITORIO_V4_1_1.md`
- `00_CONTROL_MAESTRO/Mapas_Repositorio/2026-06-08_Tree_Repositorio_Framework_Generico_V4_1_1_v0_2.md`
- `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/2026-06-08_Tabla_Ubicacion_Documental_Framework_Generico_V4_1_1_v0_2.md`
- `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/2026-06-08_Protocolo_Pago_Deuda_Estructural_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_2.md`
- `MAPA_COMPLETO_ESTRUCTURA.md` (raíz del repositorio)

---

## 1. Propósito

Este documento presenta el **árbol completo y descargable** del repositorio **Framework Genérico V4.1.1** en formato Markdown, generado directamente sobre los archivos versionados en `git` (524 archivos al 2026-06-08, commit `a014145`).

A diferencia de la v0.2 — que conservaba deliberadamente el snapshot del 2026-06-07 a la espera de la colocación manual de los documentos de Ronda 2A —, esta versión **regenera el árbol literal una vez completada y confirmada esa colocación** (commit `a014145`: "agregar paquete documental Ronda 2A PH-IT-AT Caleidoscopio").

Sirve como:

```text
1. fotografía estructural de referencia para nuevas sesiones, ya actualizada post-colocación de Ronda 2A;
2. base de verificación cruzada con manifest_repositorio_v4_1_1.json;
3. insumo para la Tabla de Ubicación Documental que lo acompaña;
4. apoyo a la regla "primero mapa, luego documento, luego carpeta, luego automatización".
```

No reemplaza `00_CONTROL_MAESTRO/TREE_REPOSITORIO_V4_1_1.md` (árbol oficial histórico) ni `MAPA_COMPLETO_ESTRUCTURA.md` (mapa narrado por cartapacio); es una versión literal y exportable del árbol vigente a la fecha indicada.

---

## 2. Reglas de sincronización

```text
1. Este Tree debe regenerarse cuando cambie la estructura de carpetas o se agreguen/retiren cartapacios oficiales.
2. Debe revisarse junto con manifest_repositorio_v4_1_1.json y MAPA_COMPLETO_ESTRUCTURA.md.
3. Su cartapacio canónico es 00_CONTROL_MAESTRO/Mapas_Repositorio/.
4. Toda incorporación de documentos nuevos relevantes debe reflejarse también en la Tabla de Ubicación Documental, el Índice Maestro, el changelog y la bitácora de la sesión correspondiente.
```

---

## 2A. Cierre de la deuda registrada en v0.2

```text
Estado: deuda saldada — el árbol fue regenerado tras una ejecución real de `git ls-files` posterior a la colocación y confirmación (commit + push) de los archivos de Ronda 2A.
Fecha de regeneración: 2026-06-08.
Commit de referencia: a014145 ("docs: agregar paquete documental Ronda 2A PH-IT-AT Caleidoscopio...").
Diferencia neta frente al snapshot v0.2: +29 archivos versionados (495 → 524), correspondientes en su mayoría a Bases de Conocimiento Comun v0_1/v0_2, informes de validación de Bloques 0-3, tablas de ubicación documental v0.2 y el presente Tree.
```

| Elemento | Estado | Acción |
|---|---|---|
| Tree Repositorio v0.2 | Superado | Conservar como evidencia histórica del snapshot pre-colocación |
| Tree Repositorio v0.3 (este documento) | Vigente | Usar como referencia estructural actual |
| Regenerar Tree luego de colocar archivos Ronda 2A (deuda v0.2) | Saldada | N/A |

---

## 3. Árbol completo del repositorio

```text
Framework_Generico_V4_1_1_Repositorio_Modelo/
  ├── .gitignore
  ├── MAPA_COMPLETO_ESTRUCTURA.md
  ├── README.md
  ├── README_English.md
  ├── README_Framework_Generico_V4_1_1_Perfiles_Activos_v0_2.md
  ├── index.html
  ├── .obsidian/
  │   ├── app.json
  │   ├── appearance.json
  │   └── core-plugins.json
  ├── 00_CONTROL_MAESTRO/
  │   ├── README_REPOSITORIO_MODELO_V4_1_1.md
  │   ├── README_REPOSITORIO_MODELO_V4_1_1_SIMPLE.md
  │   ├── TREE_REPOSITORIO_V4_1_1.md
  │   ├── manifest_repositorio_v4_1_1.json
  │   ├── Control_Versiones/
  │   │   └── README.md
  │   ├── Convenciones_Nombres/
  │   │   └── README.md
  │   ├── Indices_Maestros/
  │   │   └── README.md
  │   ├── Manifiestos/
  │   │   ├── 2026-05-28_Manifest_Actualizacion_Cartapacios_Framework_Generico_V4_1_1_v0-1.md
  │   │   ├── README.md
  │   │   ├── manifest_cierre_prefase2_ph_it_at_2026_06_02_v0_1.json
  │   │   └── manifest_paquete_caleidoscopico_ph_it_at_v0_1.json
  │   ├── Mapas_Repositorio/
  │   │   ├── 2026-05-28_Reporte_Creacion_Estructura_Cartapacios_v0-1.md
  │   │   ├── 2026-06-07_Tree_Repositorio_Framework_Generico_V4_1_1_v0_1.md
  │   │   ├── 2026-06-08_Tree_Repositorio_Framework_Generico_V4_1_1_v0_2.md
  │   │   ├── 2026-06-08_Tree_Repositorio_Framework_Generico_V4_1_1_v0_3.md
  │   │   ├── MAPA_ESTRUCTURA_CARTAPACIOS_2026-05-29.md
  │   │   ├── MAPA_REPOSITORIO_2026-05-28.md
  │   │   ├── Mapa_Completo_Estructura_2026_06_04_v0_1.md
  │   │   ├── Mapa_Completo_Estructura_2026_06_05_v0_2.md
  │   │   ├── Mapa_Estructura_Cartapacios_2026_06_02_v0_1.md
  │   │   └── README.md
  │   ├── Protocolos_Cierre_Sesion/
  │   │   ├── 2026-05-28_Protocolo_Cierre_Sesion_Framework_Generico_V4_1_1_v0-1.md
  │   │   └── README.md
  │   ├── Referecias_Base/
  │   │   ├── 2026-05-04_Apertura_Framework_Generico_V4_1_1_Repositorio_Modelo_v0-1.md
  │   │   ├── 2026-05-04_Aprobacion_Framework_Generico_V4_1_0_Estable_v1-0.md
  │   │   ├── 2026-05-04_Borrador_Framework_Generico_V4_1_0_Apertura_v0-1.md
  │   │   ├── 2026-05-04_Estado_Situacion_Framework_Generico_V4_1_0_Estable_Post_Aprobacion_v1-0.md
  │   │   ├── 2026-05-04_Framework_Generico_V4_1_0_Integral_Autosostenido_v1-0.json
  │   │   ├── 2026-05-04_Framework_Generico_V4_1_0_Integral_Autosostenido_v1-0.md
  │   │   ├── 2026-05-04_Framework_Generico_V4_1_1_Record_Version_Actualizada_v1-0.md
  │   │   ├── 2026-05-04_Indice_Maestro_Documentos_Framework_Generico_V4_1_0_Borrador_v0-1.md
  │   │   ├── 2026-05-04_README_Framework_Generico_V4_1_0_Borrador_v0-1.md
  │   │   ├── 2026-05-04_Release_Notes_Framework_Generico_V4_1_0_Estable_v1-0.md
  │   │   ├── 2026-05-04_Reporte_Evaluacion_Preparacion_Framework_Generico_V4_1_0_Estable_v0-1.md
  │   │   ├── 2026-05-04_TREE_REPOSITORIO_V4_1_1.md
  │   │   ├── 2026-05-04_manifest_framework_v4_1_0_borrador_v0-1.json
  │   │   ├── Framework_Generico_V4_1_0_Integral_Autosostenido_v1-0.json
  │   │   └── Framework_Generico_V4_1_0_Integral_Autosostenido_v1-0.md
  │   ├── Reglas_Colocacion_Documental/
  │   │   ├── 2026-05-28_Reglas_Colocacion_Documental_Framework_Generico_V4_1_1_v0-1.md
  │   │   ├── 2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_2.md
  │   │   ├── 2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md
  │   │   ├── 2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md
  │   │   ├── 2026-06-08_Protocolo_Pago_Deuda_Estructural_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │   ├── 2026-06-08_Protocolo_Pago_Deuda_Estructural_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_2.md
  │   │   └── README.md
  │   └── Tablas_Ubicacion_Documental/
  │       ├── 2026-05-28_Tabla_Ubicacion_Documental_Framework_Generico_V4_1_1_v0-1.md
  │       ├── 2026-06-05_Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_1.md
  │       ├── 2026-06-07_Tabla_Ubicacion_Documental_Framework_Generico_V4_1_1_v0_2.md
  │       ├── 2026-06-08_Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_2.md
  │       ├── 2026-06-08_Tabla_Ubicacion_Documental_Framework_Generico_V4_1_1_v0_2.md
  │       └── README.md
  ├── 01_FUNDAMENTO_FILOSOFICO/
  │   ├── README.md
  │   ├── Axiologia/
  │   │   └── README.md
  │   ├── Epistemologia/
  │   │   └── README.md
  │   ├── Etica_Fundacional/
  │   │   └── README.md
  │   ├── Humanismo_Tecnologico/
  │   │   └── README.md
  │   ├── Marcos_Referencia/
  │   │   └── README.md
  │   └── Principios/
  │       └── README.md
  ├── 02_ARQUITECTURA_CONCEPTUAL/
  │   ├── README.md
  │   ├── Arquitecturas_Referencia/
  │   │   └── README.md
  │   ├── Macro_Meso_Micro/
  │   │   └── README.md
  │   ├── Mapas/
  │   │   ├── 2026-05-04_Mapa_Macro_Meso_Micro_Framework_Generico_V4_1_0_Borrador_v0-1.md
  │   │   └── README.md
  │   ├── Matrices_Comparativas/
  │   │   └── README.md
  │   └── Perfiles_Transversales/
  │       ├── 2026-05-04_Matriz_Comparativa_Perfiles_Transversales_Framework_Generico_V4_v0-1.md
  │       ├── 2026-05-04_Paquete_Consolidado_Perfiles_Transversales_Caleidoscopio_Framework_Generico_V4_v0-1.md
  │       ├── README.md
  │       ├── Artista_Transdisciplinario/
  │       │   ├── 2026-05-04_Perfil_Artista_Transdisciplinario_Framework_Generico_V4_v0-1.md
  │       │   └── README.md
  │       ├── Caleidoscopio/
  │       │   ├── 2026-05-04_Caleidoscopio_Logica_Integradora_Framework_Generico_V4_v0-1.md
  │       │   ├── 2026-05-04_Marco_Caleidoscopio_Framework_Generico_V4_v0-1.md
  │       │   ├── 2026-05-04_Matriz_Caleidoscopio_C1_C7_Ejemplos_Framework_Generico_V4_v0-1.md
  │       │   ├── Marco_Ruta_Caleidoscopica_PH_IT_AT_v0_1.md
  │       │   └── README.md
  │       ├── Investigador_Transdisciplinario/
  │       │   ├── 2026-05-04_Perfil_Investigador_Transdisciplinario_Framework_Generico_V4_v0-1.md
  │       │   └── README.md
  │       └── Programador_Humanista/
  │           ├── 2026-05-04_Perfil_Final_Programador_Humanista_Framework_Generico_V4_v0-2.md
  │           └── README.md
  ├── 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
  │   ├── README.md
  │   ├── Ciclo_Vida_Proyectos/
  │   │   └── README.md
  │   ├── Entrada_Normalizada_Usuarios/
  │   │   └── README.md
  │   ├── Niveles_N1_N4/
  │   │   ├── 2026-05-04_Matriz_N1_N4_Framework_Generico_V4_1_0_Borrador_v0-1.md
  │   │   ├── Modelo_Niveles_N1_N4_Caleidoscopio_PH_IT_AT_v0_1.md
  │   │   └── README.md
  │   ├── Plantillas_Metodologicas/
  │   │   └── README.md
  │   ├── Protocolos_Trabajo_Humano_IA/
  │   │   ├── Protocolo_Curaduria_Transdisciplinaria_v0_1.md
  │   │   └── README.md
  │   ├── Secuencias_Fase_Por_Fase/
  │   │   ├── Mapa_Ruta_Desarrollo_Perfiles_Simetricos_PH_IT_AT_Fases_1_6_v0_1.md
  │   │   └── README.md
  │   └── Workflows/
  │       └── README.md
  ├── 04_GOBERNANZA_ETICA_Y_RIESGOS/
  │   ├── README.md
  │   ├── Criterios_Aprobacion/
  │   │   └── README.md
  │   ├── Decisiones/
  │   │   ├── 2026-05-04_Gobernanza_Aprobacion_Framework_Generico_V4_1_0_Estable_DA38_DA43_v1-0.md
  │   │   └── README.md
  │   ├── Etica_Derechos_Accesibilidad/
  │   │   └── README.md
  │   ├── Politicas_Gobernanza/
  │   │   └── README.md
  │   ├── Registro_Excepciones/
  │   │   └── README.md
  │   ├── Revisiones_Humanas/
  │   │   └── README.md
  │   └── Riesgos/
  │       └── README.md
  ├── 05_COMPETENCIAS_Y_PERFILES/
  │   ├── README.md
  │   ├── Artista_Transdisciplinario/
  │   │   └── README.md
  │   ├── Caleidoscopio/
  │   │   ├── Mapa_Base_Conocimiento_Comun_PH_IT_AT_v0_1.md
  │   │   └── README.md
  │   ├── Investigador_Transdisciplinario/
  │   │   └── README.md
  │   ├── Matrices_Competencias/
  │   │   └── README.md
  │   ├── Programador_Humanista/
  │   │   ├── README.md
  │   │   └── Perfil_Operativo_v3_0_0/
  │   │       ├── README.md
  │   │       ├── Alcance_Operativo/
  │   │       │   ├── 2026-06-05_Alcance_Operativo_Fase_2_Base_Conocimiento_Comun_PH_IT_AT_v0_2.md
  │   │       │   ├── Alcance_Operativo_Programador_Humanista_v3_0_0_v0_1.md
  │   │       │   ├── Alcance_Operativo_Programador_Humanista_v3_0_0_v0_2.md
  │   │       │   └── README.md
  │   │       ├── Aplicaciones_Educativas/
  │   │       │   └── README.md
  │   │       ├── Arquitectura_Humano_Maquina_IA/
  │   │       │   └── README.md
  │   │       ├── Artefactos/
  │   │       │   └── README.md
  │   │       ├── Bases_Conocimiento/
  │   │       │   ├── 2026-06-05_Actualizacion_Minima_Indice_Maestro_Referencia_Normativa_Protocolo_Convenciones_v0_3_v0_1.md
  │   │       │   ├── 2026-06-05_Catalogo_Basico_Documentos_Invocables_PH_IT_AT_v0_1.md
  │   │       │   ├── 2026-06-05_Catalogo_Basico_Herramientas_Procesos_PH_IT_AT_v0_1.md
  │   │       │   ├── 2026-06-05_Catalogo_Basico_Metodologias_PH_IT_AT_v0_1.md
  │   │       │   ├── 2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md
  │   │       │   ├── 2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md
  │   │       │   ├── 2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_3.md
  │   │       │   ├── 2026-06-06_Paquete_Conocimiento_Comun_Minimo_PH_IT_AT_v0_1.md
  │   │       │   ├── 2026-06-07_Base_Conocimiento_Comun_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │       │   ├── 2026-06-07_Convencion_Base_Conocimiento_Comun_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │       │   ├── 2026-06-07_Formato_Estandarizado_Invocable_Maestro_Familia_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │       │   ├── 2026-06-07_Mapa_Familias_Documentos_Invocables_Base_Comun_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │       │   ├── 2026-06-07_Mapa_Modular_Base_Conocimiento_Comun_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │       │   ├── 2026-06-07_Plantilla_Documento_Invocable_Artefacto_Funcional_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │       │   ├── 2026-06-08_Base_Conocimiento_Comun_PH_IT_AT_Caleidoscopio_v0_2.md
  │   │       │   ├── 2026-06-08_Convencion_Base_Conocimiento_Comun_PH_IT_AT_Caleidoscopio_v0_2.md
  │   │       │   ├── 2026-06-08_Formato_Estandarizado_Invocable_Maestro_Familia_PH_IT_AT_Caleidoscopio_v0_2.md
  │   │       │   ├── 2026-06-08_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_4.md
  │   │       │   ├── 2026-06-08_Informe_Validacion_Bloque_3_Invocables_Familias_Formatos_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │       │   ├── 2026-06-08_Mapa_Familias_Documentos_Invocables_Base_Comun_PH_IT_AT_Caleidoscopio_v0_2.md
  │   │       │   ├── 2026-06-08_Mapa_Modular_Base_Conocimiento_Comun_PH_IT_AT_Caleidoscopio_v0_2.md
  │   │       │   ├── 2026-06-08_Plantilla_Documento_Invocable_Artefacto_Funcional_PH_IT_AT_Caleidoscopio_v0_2.md
  │   │       │   └── README.md
  │   │       ├── Competencias/
  │   │       │   ├── README.md
  │   │       │   └── matriz_competencias_programador_humanista_v_3_0_0_v_0_2.md
  │   │       ├── Enlaces_Espejo/
  │   │       │   ├── 2026-06-05_Entrada_Consolidada_Enlaces_Espejo_Cierre_Bloque_Fase_2_PH_IT_AT_v0_1.md
  │   │       │   ├── 2026-06-05_Entrada_Referencia_Logica_Indice_Maestro_v0_2_Enlaces_Espejo_PH_IT_AT_v0_1.md
  │   │       │   ├── 2026-06-05_Entrada_Referencia_Logica_Protocolo_Convenciones_v0_3_Enlaces_Espejo_PH_IT_AT_v0_1.md
  │   │       │   ├── 2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_1.md
  │   │       │   ├── 2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_2.md
  │   │       │   ├── 2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_3.md
  │   │       │   ├── 2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md
  │   │       │   ├── 2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_2.md
  │   │       │   ├── 2026-06-08_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_3.md
  │   │       │   ├── README.md
  │   │       │   └── enlaces_espejo_programador_humanista_v_3_0_0_v_0_2.md
  │   │       ├── Formula_Nuclear/
  │   │       │   ├── README.md
  │   │       │   └── formula_nuclear_programador_humanista_v_3_0_0_v_0_2.md
  │   │       ├── Gobernanza_Perfil/
  │   │       │   ├── 2026-06-02_Registro_Gobernanza_PreFase2_PH_v3_0_0_v0_1.md
  │   │       │   ├── README.md
  │   │       │   ├── changelog_fase_1_ph_v_3_0_0_v_0_2.md
  │   │       │   └── registro_gobernanza_perfil_ph_v_3_0_0_v_0_2.md
  │   │       ├── Mapa_Rector/
  │   │       │   ├── Mapa_Rector_Programador_Humanista_v3_0_0_v0_2.md
  │   │       │   └── README.md
  │   │       ├── Metricas/
  │   │       │   ├── README.md
  │   │       │   ├── matriz_seguridad_longitudinal_ph_v_3_0_0_v_0_1.md
  │   │       │   └── metricas_iniciales_programador_humanista_n_3_n_4_v_0_2.md
  │   │       ├── Transferencia_Simetrica/
  │   │       │   ├── README.md
  │   │       │   └── matriz_transferencia_simetrica_triada_ph_it_at_v_0_2.md
  │   │       └── Unidades_Nucleares/
  │   │           ├── README.md
  │   │           └── Unidades_Nucleares_Programador_Humanista_v3_0_0_v0_1.md
  │   └── Taxonomias/
  │       ├── 2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_2.md
  │       ├── 2026-06-05_Protocolo_Gestion_Terminos_Glosario_PH_IT_AT_v0_1.md
  │       ├── 2026-06-05_Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md
  │       └── README.md
  ├── 06_PASTILLAS_MODULARES/
  │   ├── README.md
  │   ├── Catalogo_Pastillas/
  │   │   └── README.md
  │   ├── Pastillas_Conceptuales/
  │   │   └── README.md
  │   ├── Pastillas_Educativas/
  │   │   └── README.md
  │   ├── Pastillas_Evaluacion/
  │   │   └── README.md
  │   ├── Pastillas_IA/
  │   │   └── README.md
  │   └── Pastillas_Tecnicas/
  │       └── README.md
  ├── 07_PLANTILLAS_Y_MODELOS/
  │   ├── README.md
  │   ├── Modelos_Arquitectura/
  │   │   └── README.md
  │   ├── Modelos_Datos/
  │   │   └── README.md
  │   ├── Plantillas_Aplicaciones_Educativas/
  │   │   └── README.md
  │   ├── Plantillas_Documentos/
  │   │   ├── 2026-06-05_Plantilla_Entrada_Glosario_PH_IT_AT_v0_1.md
  │   │   ├── 2026-06-05_Plantilla_Minima_Metadatos_MD_JSON_PH_IT_AT_v0_1.md
  │   │   └── README.md
  │   ├── Plantillas_Evaluacion/
  │   │   └── README.md
  │   ├── Plantillas_Gobernanza/
  │   │   └── README.md
  │   ├── Plantillas_Proyectos/
  │   │   ├── Plantilla_Activacion_Proyecto_Caleidoscopico_v0_1.md
  │   │   ├── Plantilla_Lente_Latente_PH_IT_AT_v0_1.md
  │   │   └── README.md
  │   └── Plantillas_Wiki/
  │       └── README.md
  ├── 08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/
  │   ├── README.md
  │   ├── Actividades/
  │   │   └── README.md
  │   ├── Cursos/
  │   │   └── README.md
  │   ├── Evaluaciones_Academicas/
  │   │   └── README.md
  │   ├── Mapas_Curriculares/
  │   │   └── README.md
  │   ├── Modulos_Formativos/
  │   │   └── README.md
  │   ├── Programas/
  │   │   └── README.md
  │   └── Trayectorias/
  │       └── README.md
  ├── 09_IA_AGENTES_Y_COPILOTOS/
  │   ├── README.md
  │   ├── Asistentes_Personalizados/
  │   │   └── README.md
  │   ├── Evaluacion_IA/
  │   │   └── README.md
  │   ├── Modelos_IA/
  │   │   └── README.md
  │   ├── Seguridad_IA/
  │   │   └── README.md
  │   └── Sistema_Operativo_Agentes_Skills/
  │       ├── README.md
  │       ├── Perfiles/
  │       │   ├── README.md
  │       │   ├── Artista_Transdisciplinario/
  │       │   │   └── README.md
  │       │   ├── Caleidoscopio/
  │       │   │   └── README.md
  │       │   ├── Investigador_Transdisciplinario/
  │       │   │   └── README.md
  │       │   └── Programador_Humanista/
  │       │       ├── README.md
  │       │       ├── Arquitectura_Agentes/
  │       │       │   └── README.md
  │       │       ├── Evaluacion_Agentes/
  │       │       │   └── README.md
  │       │       ├── Herramientas_Tools/
  │       │       │   └── README.md
  │       │       ├── Integraciones_ADK/
  │       │       │   └── README.md
  │       │       ├── Integraciones_Copilotos/
  │       │       │   └── README.md
  │       │       ├── Memoria_Contexto/
  │       │       │   └── README.md
  │       │       ├── Modelos_Locales/
  │       │       │   └── README.md
  │       │       ├── Multiagentes/
  │       │       │   └── README.md
  │       │       ├── Prompts_Sistema/
  │       │       │   └── README.md
  │       │       ├── Seguridad_Agentes/
  │       │       │   └── README.md
  │       │       ├── Skills/
  │       │       │   └── README.md
  │       │       └── Workflows/
  │       │           └── README.md
  │       └── Plantillas_Base/
  │           ├── 2026-05-04_Plantillas_Base_Agents_Skills_Workflows_Checks_WikiSync_Framework_Generico_V4_v0-1.md
  │           └── README.md
  ├── 10_REPOSITORIOS_Y_FLUJO_TECNICO/
  │   ├── README.md
  │   ├── APIs_Servicios/
  │   │   └── README.md
  │   ├── Bases_Datos_SQL/
  │   │   └── README.md
  │   ├── CI_CD/
  │   │   └── README.md
  │   ├── Comandos_Terminal/
  │   │   ├── README.md
  │   │   └── Scripts_Locales/
  │   │       ├── crear_estructura_cartapacios_v4_1_1.py
  │   │       └── crear_gobernanza_minima_v4_1_1.py
  │   ├── Entornos_Desarrollo/
  │   │   └── README.md
  │   ├── Estandares_Codigo/
  │   │   └── README.md
  │   ├── Formatos_Documentales/
  │   │   ├── README.md
  │   │   ├── HTML/
  │   │   │   └── README.md
  │   │   ├── JSON/
  │   │   │   └── README.md
  │   │   ├── Markdown/
  │   │   │   └── README.md
  │   │   ├── Otros_Formatos/
  │   │   │   └── README.md
  │   │   └── YAML/
  │   │       └── README.md
  │   ├── Git_GitHub/
  │   │   └── README.md
  │   ├── Integracion_IDE_Copilotos/
  │   │   └── README.md
  │   ├── Issues_Proyectos/
  │   │   └── README.md
  │   ├── Lenguajes_Programacion/
  │   │   ├── README.md
  │   │   ├── Go/
  │   │   │   └── README.md
  │   │   ├── Java/
  │   │   │   └── README.md
  │   │   ├── Otros_Lenguajes/
  │   │   │   └── README.md
  │   │   ├── Python/
  │   │   │   └── README.md
  │   │   └── TypeScript/
  │   │       └── README.md
  │   ├── Monorepo_Multirepo/
  │   │   └── README.md
  │   ├── Pruebas_Tecnicas/
  │   │   └── README.md
  │   ├── Pull_Requests_Code_Review/
  │   │   └── README.md
  │   ├── Ramas_Versionado/
  │   │   └── README.md
  │   └── Vibe_Coding_Asistido/
  │       └── README.md
  ├── 11_MULTIMODALIDAD_Y_PUBLICACION/
  │   ├── README.md
  │   ├── Audio_Video/
  │   │   └── README.md
  │   ├── Documentos_Publicos/
  │   │   └── README.md
  │   ├── Estrategias_Publicacion/
  │   │   └── README.md
  │   ├── Portales/
  │   │   └── README.md
  │   ├── Publicacion_Web/
  │   │   └── README.md
  │   ├── Recursos_Visuales/
  │   │   └── README.md
  │   └── WordPress/
  │       └── README.md
  ├── 12_DISENO_INSTRUCCIONAL_UNIVERSAL/
  │   ├── README.md
  │   ├── Accesibilidad/
  │   │   └── README.md
  │   ├── Adaptaciones_Publicos/
  │   │   └── README.md
  │   ├── Diseno_Universal_Aprendizaje/
  │   │   └── README.md
  │   ├── Evaluacion_Aprendizaje/
  │   │   └── README.md
  │   ├── Experiencia_Usuario_Educativa/
  │   │   └── README.md
  │   └── Materiales_Inclusivos/
  │       └── README.md
  ├── 13_INVESTIGACION_Y_EVIDENCIA/
  │   ├── README.md
  │   ├── Datos_Investigacion/
  │   │   └── README.md
  │   ├── Evidencia_Empirica/
  │   │   └── README.md
  │   ├── Fuentes/
  │   │   └── README.md
  │   ├── Instrumentos/
  │   │   └── README.md
  │   ├── Metodos_Investigacion/
  │   │   └── README.md
  │   ├── Revisiones_Bibliograficas/
  │   │   └── README.md
  │   └── Sintesis_Evidencia/
  │       └── README.md
  ├── 14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/
  │   ├── README.md
  │   ├── Alianzas/
  │   │   └── README.md
  │   ├── Capacitacion/
  │   │   └── README.md
  │   ├── Comunidad/
  │   │   └── README.md
  │   ├── Difusion/
  │   │   └── README.md
  │   ├── Escalamiento/
  │   │   └── README.md
  │   ├── Sostenibilidad_Comunitaria/
  │   │   └── README.md
  │   └── Transferencia/
  │       └── README.md
  ├── 15_EVALUACION_CALIDAD_Y_AUDITORIA/
  │   ├── README.md
  │   ├── Auditorias_Aplicaciones_Educativas/
  │   │   └── README.md
  │   ├── Evaluacion_Accesibilidad/
  │   │   └── README.md
  │   ├── Evaluacion_DevOps/
  │   │   └── README.md
  │   ├── Evaluacion_IA_Agentes/
  │   │   └── README.md
  │   ├── Evaluacion_Seguridad/
  │   │   └── README.md
  │   ├── Evidencias_Validacion/
  │   │   └── README.md
  │   ├── Gates_Checks_Evaluacion/
  │   │   ├── 2026-05-04_CHECKS_Framework_Generico_V4_1_0_Borrador_v0-1.md
  │   │   ├── 2026-05-04_Matriz_Gates_Framework_Generico_V4_1_0_Borrador_v0-1.md
  │   │   ├── 2026-05-04_Protocolo_Paso_Borrador_a_Estable_Framework_Generico_V4_1_0_v0-1.md
  │   │   ├── 2026-05-04_Reporte_Evaluacion_Preparacion_Framework_Generico_V4_1_0_Estable_v0-1.md
  │   │   └── README.md
  │   ├── Metricas_Internas/
  │   │   └── README.md
  │   ├── Reportes_Auditoria/
  │   │   └── README.md
  │   └── Rubricas_N3_N4/
  │       ├── 2026-06-05_Rubrica_Madurez_N1_N4_Proyecto_Producto_Usuario_v0_1.md
  │       ├── 2026-06-05_Rubrica_Sistemica_Holistica_Base_Conocimiento_PH_IT_AT_v0_1.md
  │       └── README.md
  ├── 16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
  │   ├── README.md
  │   ├── Accesos_Permisos/
  │   │   └── README.md
  │   ├── Backups_Recuperacion/
  │   │   └── README.md
  │   ├── Checklists_Seguridad/
  │   │   └── README.md
  │   ├── Cumplimiento_Normativo/
  │   │   └── README.md
  │   ├── Evaluacion_Riesgos_Tecnicos/
  │   │   ├── 2026-06-05_Mapa_Seguridad_Longitudinal_Fase_2_PH_IT_AT_v0_1.md
  │   │   └── README.md
  │   ├── Gestion_Secretos/
  │   │   └── README.md
  │   ├── Incidentes_Respuesta/
  │   │   └── README.md
  │   ├── Politicas_Datos/
  │   │   └── README.md
  │   ├── Privacidad/
  │   │   └── README.md
  │   ├── Seguridad_APIs/
  │   │   └── README.md
  │   ├── Seguridad_Aplicaciones/
  │   │   └── README.md
  │   ├── Seguridad_Bases_Datos/
  │   │   └── README.md
  │   ├── Seguridad_Contenedores/
  │   │   └── README.md
  │   └── Seguridad_IA_Agentes/
  │       └── README.md
  ├── 17_INTERNACIONALIZACION_LOCALIZACION/
  │   ├── README.md
  │   ├── Adaptacion_Cultural/
  │   │   └── README.md
  │   ├── Glosarios/
  │   │   └── README.md
  │   ├── Localizacion/
  │   │   └── README.md
  │   ├── Traducciones/
  │   │   └── README.md
  │   └── Versiones_Idioma/
  │       └── README.md
  ├── 18_DOCUMENTACION_ACTIVA/
  │   ├── README.md
  │   ├── Changelog/
  │   │   ├── 2026-05-04_Changelog_Actualizacion_Framework_Integral_Autosostenido_V4_1_0_Framework_Generico_V4_1_1_v0-5.md
  │   │   ├── 2026-05-04_Changelog_Actualizacion_Perfiles_Transversales_y_Apertura_V4_1_0_Framework_Generico_V4_v0-2.md
  │   │   ├── 2026-05-04_Changelog_Cierre_Sesion_Ruta_B_Obsidian_GitHub_Framework_Generico_V4_1_1_v0-4.md
  │   │   ├── 2026-05-04_Changelog_Gobernanza_V4_1_0_Borrador_DA29_DA37_v0-3.md
  │   │   ├── 2026-05-28_Changelog_Actualizacion_Cartapacios_Framework_Generico_V4_1_1_v0-1.md
  │   │   ├── 2026-06-02_Changelog_PreFase2_PH_IT_AT_v0_1.md
  │   │   ├── 2026-06-05_Changelog_Consolidado_Cierre_Bloque_Fase_2_PH_IT_AT_v0_1.md
  │   │   ├── 2026-06-05_Entrada_Changelog_Indice_Maestro_v0_2_PH_IT_AT_v0_1.md
  │   │   └── README.md
  │   ├── Cierres_Reportes/
  │   │   ├── README.md
  │   │   ├── Bitacoras/
  │   │   │   ├── 2026-06-02_Bitacora_Sesion_PreFase2_PH_IT_AT_v0_1.md
  │   │   │   ├── 2026-06-02_Bitacora_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_2.md
  │   │   │   ├── 2026-06-05_Bitacora_Consolidada_Cierre_Bloque_Fase_2_PH_IT_AT_v0_1.md
  │   │   │   ├── 2026-06-05_Bitacora_Sesion_Cierre_Fase_2_Ronda_1_PH_IT_AT_v0_1.md
  │   │   │   ├── 2026-06-05_Bitacora_Transferencia_Simetrica_Reversible_Cierre_Fase_2_Ronda_1_PH_IT_AT_v0_1.md
  │   │   │   ├── 2026-06-05_Entrada_Bitacora_Actualizacion_Indice_Maestro_v0_2_PH_IT_AT_v0_1.md
  │   │   │   ├── 2026-06-05_Entrada_Bitacora_Validacion_Protocolo_Convenciones_v0_3_Fase_2_PH_IT_AT_v0_1.md
  │   │   │   ├── 2026-06-08_Informe_Validacion_Bloque_0_Control_Estructural_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │   │   ├── 2026-06-08_Informe_Validacion_Bloque_1_Ubicacion_Indice_Cartapacios_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │   │   ├── 2026-06-08_Informe_Validacion_Bloque_2_Base_Conocimiento_Comun_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_1.md
  │   │   │   ├── Bitacora_Continuidad_Transferencia_Simetrica_Reversible_PH_IT_AT_2026_05_31_v0_2.md
  │   │   │   ├── Bitacora_Proceso_Fase_1_PH_v3_0_0_2026_05_31_v0_2_ACTUALIZADA.md
  │   │   │   ├── Bitacora_Sesion_Auditoria_Estructura_2026_06_02_v0_1.md
  │   │   │   ├── Bitacora_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_1.md
  │   │   │   └── README.md
  │   │   ├── Cierres_Sesion/
  │   │   │   ├── 2026-05-04_Cierre_Sesion_Framework_Generico_V4_1_1_Ruta_B_Obsidian_GitHub_v1-0.md
  │   │   │   ├── 2026-05-04_Estado_Situacion_Framework_Generico_V4_1_0_Estable_Post_Aprobacion_v1-0.md
  │   │   │   ├── 2026-06-02_Instrucciones_Actualizacion_Manual_Cierre_PreFase2_PH_IT_AT_v0_1.md
  │   │   │   ├── 2026-06-05_Pago_Consolidado_Deuda_Cierre_Bloque_Fase_2_PH_IT_AT_v0_1.md
  │   │   │   ├── Cierre_Sesion_Fase_1_PH_v3_0_0_2026_05_31_v0_2.md
  │   │   │   ├── INSTRUCCIONES_CARGA_MANUAL_PAQUETE_CALEIDOSCOPICO_PH_IT_AT_v0_1.md
  │   │   │   └── README.md
  │   │   ├── Compendios/
  │   │   │   ├── 2026-05-04_Compendio_Sesion_Perfiles_Transversales_Framework_Generico_V4_v0-1.md
  │   │   │   ├── 2026-06-02_Compendio_Cierre_Sesion_PreFase2_PH_IT_AT_v0_1.md
  │   │   │   ├── 2026-06-05_Compendio_Situacion_Cierre_Fase_2_Ronda_1_PH_IT_AT_v0_1.md
  │   │   │   ├── Compendio_Estado_Proyecto_Framework_Generico_V4_1_1_2026_06_02_v0_1.md
  │   │   │   ├── Compendio_Sesion_Fase_1_PH_v3_0_0_2026_05_31_v0_2.md
  │   │   │   └── README.md
  │   │   ├── Manifiestos_Sesion/
  │   │   │   └── README.md
  │   │   └── Reportes_Evaluacion/
  │   │       ├── 2026-05-04_Reporte_Cierre_Situacion_Actual_Framework_Generico_V4_para_Archivo_Historico_v1-0.md
  │   │       └── README.md
  │   ├── Primers_Continuidad/
  │   │   ├── 2026-05-04_Primer_Continuidad_Framework_Generico_V4_1_0_Borrador_v0-1.md
  │   │   ├── 2026-05-04_Primer_Continuidad_Framework_Generico_V4_1_0_Borrador_v0-2.md
  │   │   ├── 2026-05-04_Primer_Continuidad_Framework_Generico_V4_1_1_Post_Ruta_B_Obsidian_GitHub_v0-3.md
  │   │   ├── 2026-05-04_Primer_Continuidad_Framework_Generico_V4_Perfiles_Transversales_v0-1.md
  │   │   ├── 2026-05-28_Primer_Continuidad_Post_Actualizacion_Cartapacios_PH_v3_0_0_v0-1.md
  │   │   ├── 2026-06-02_Primer_Continuidad_PreFase2_PH_IT_AT_v0_1.md
  │   │   ├── 2026-06-05_Primer_Continuidad_Fase_2_Ronda_2_PH_IT_AT_v0_1.md
  │   │   └── README.md
  │   ├── Prompts_Activacion/
  │   │   ├── 2026-06-05_Prompt_Activacion_Fase_2_Ronda_2_PH_IT_AT_v0_1.md
  │   │   └── README.md
  │   ├── Prompts_de_Sesion/
  │   │   └── README.md
  │   ├── Registro_Decisiones/
  │   │   ├── 2026-05-04_Registro_Decisiones_Actualizacion_Framework_Integral_Autosostenido_V4_1_0_Framework_Generico_V4_1_1_DA48_v0-5.md
  │   │   ├── 2026-05-04_Registro_Decisiones_Actualizacion_Perfiles_Transversales_y_Apertura_V4_1_0_Framework_Generico_V4_v0-2.md
  │   │   ├── 2026-05-04_Registro_Decisiones_Cierre_Sesion_Ruta_B_Obsidian_GitHub_Framework_Generico_V4_1_1_DA45_DA47_v0-4.md
  │   │   ├── 2026-05-04_Registro_Decisiones_Gobernanza_V4_1_0_Borrador_DA29_DA37_v0-3.md
  │   │   ├── 2026-05-28_Registro_Decision_Estructural_Cartapacios_PH_v3_0_0_v0-1.md
  │   │   ├── 2026-06-02_Registro_Decisiones_PreFase2_Caleidoscopico_DA49_DA56_v0_1.md
  │   │   └── README.md
  │   ├── Segundo_Cerebro/
  │   │   ├── 2026-05-04_Instrucciones_Operacionalizacion_Modelo_C_Issues_Ligeros_Framework_Generico_V4_1_1_v0-1.md
  │   │   ├── 2026-05-04_Integracion_Obsidian_GitHub_Ruta_B_Hibrida_Framework_Generico_V4_1_1_v0-1.md
  │   │   ├── 2026-05-04_Modelo_Triple_Memoria_Operativa_Framework_Generico_V4_1_1_v0-1.md
  │   │   ├── Home_Obsidian_Framework_Generico.md
  │   │   ├── Indice_Wiki_Humana_Obsidian.md
  │   │   ├── README.md
  │   │   ├── Dashboards/
  │   │   │   ├── 2026-05-04_Dashboard_Segundo_Cerebro_Framework_Generico_V4_1_1_v0-1.md
  │   │   │   ├── Dashboard_Framework_Generico_V4_1_1.md
  │   │   │   └── README.md
  │   │   ├── Issues_Vivos/
  │   │   │   ├── Issues_Vivos_Framework.md
  │   │   │   └── README.md
  │   │   ├── Mapas_Navegacion/
  │   │   │   ├── Mapa_Navegacion_Obsidian_GitHub.md
  │   │   │   └── README.md
  │   │   ├── Riesgos_Vivos/
  │   │   │   ├── README.md
  │   │   │   └── Riesgos_Vivos_Framework.md
  │   │   ├── Sesiones_Activas/
  │   │   │   ├── README.md
  │   │   │   └── Sesion_Activa_Framework.md
  │   │   └── Templates/
  │   │       ├── README.md
  │   │       ├── Template_Issue_Local.md
  │   │       ├── Template_Nota_Documento_Oficial.md
  │   │       ├── Template_Revision_Gobernanza.md
  │   │       └── Template_Sesion_Framework.md
  │   └── WIKI_SYNC/
  │       ├── 2026-05-04_WIKI_SYNC_Framework_Generico_V4_1_0_Borrador_v0-1.md
  │       └── README.md
  ├── 19_IMPLEMENTACION_Y_DESPLIEGUE/
  │   ├── README.md
  │   ├── APIs_Despliegue/
  │   │   └── README.md
  │   ├── CI_CD_Despliegue/
  │   │   └── README.md
  │   ├── Cloud_Computing/
  │   │   └── README.md
  │   ├── Configuracion_Entornos/
  │   │   └── README.md
  │   ├── Contenedores_Docker/
  │   │   └── README.md
  │   ├── Entornos/
  │   │   └── README.md
  │   ├── Infraestructura_Como_Codigo/
  │   │   └── README.md
  │   ├── Kubernetes/
  │   │   └── README.md
  │   ├── Observabilidad/
  │   │   └── README.md
  │   ├── Portales_Educativos/
  │   │   └── README.md
  │   ├── Release_Management/
  │   │   └── README.md
  │   ├── Rollback_Recuperacion/
  │   │   └── README.md
  │   ├── Runbooks/
  │   │   └── README.md
  │   └── WordPress_Publicacion/
  │       └── README.md
  ├── 20_MANTENIMIENTO_Y_EVOLUCION/
  │   ├── README.md
  │   ├── Actualizaciones/
  │   │   └── README.md
  │   ├── Auditorias_Periodicas/
  │   │   └── README.md
  │   ├── Backlog_Evolutivo/
  │   │   └── README.md
  │   ├── Deprecacion_Retiro/
  │   │   └── README.md
  │   ├── Deuda_Tecnica/
  │   │   └── README.md
  │   ├── Incidentes_Postmortems/
  │   │   └── README.md
  │   ├── Mantenimiento_Aplicaciones/
  │   │   └── README.md
  │   ├── Monitoreo/
  │   │   └── README.md
  │   ├── Planes_Evolucion/
  │   │   ├── 2026-06-05_Mapa_Expansion_Fase_2_PH_IT_AT_N1_N4_v0_1.md
  │   │   └── README.md
  │   ├── Soporte_Usuarios/
  │   │   └── README.md
  │   ├── Sostenibilidad/
  │   │   └── README.md
  │   └── Versionado_Releases/
  │       └── README.md
  ├── 21_WIKI_DOCUMENTACION_HUMANA/
  │   ├── README.md
  │   ├── Guias_Artista_Transdisciplinario/
  │   │   └── README.md
  │   ├── Guias_Caleidoscopio/
  │   │   └── README.md
  │   ├── Guias_Framework_Generico_V4_1_0/
  │   │   ├── Guia_Gates_CHECKS.md
  │   │   ├── Guia_Inicio_Rapido_V4_1_0.md
  │   │   ├── Guia_Modos_C1_C7.md
  │   │   ├── Guia_Niveles_N1_N4.md
  │   │   ├── Guia_Usuario_Framework_Generico_V4_1_0_Integrada_v1-0.md
  │   │   ├── Home_Framework_Generico_V4_1_0.md
  │   │   ├── README.md
  │   │   └── README_Wiki_Prioritaria.md
  │   ├── Guias_Investigador_Transdisciplinario/
  │   │   └── README.md
  │   └── Guias_Programador_Humanista/
  │       ├── README.md
  │       ├── FAQ/
  │       │   └── README.md
  │       ├── Guia_Administradores_Proyecto/
  │       │   └── README.md
  │       ├── Guia_Desarrollo_Aplicaciones_Educativas/
  │       │   └── README.md
  │       ├── Guia_DevOps_Basico/
  │       │   └── README.md
  │       ├── Guia_Educadores/
  │       │   └── README.md
  │       ├── Guia_Estudiantes/
  │       │   └── README.md
  │       ├── Guia_IA_Agentes/
  │       │   └── README.md
  │       ├── Guia_Investigadores/
  │       │   └── README.md
  │       ├── Guia_Seguridad_Accesibilidad/
  │       │   └── README.md
  │       └── Inicio_Rapido/
  │           └── README.md
  └── 99_ARCHIVO_HISTORICO/
      ├── README.md
      ├── Aplicaciones_Retiradas/
      │   └── README.md
      ├── Ciclos_Completados/
      │   ├── README.md
      │   ├── nada.md
      │   └── 2026-05-04_Perfiles_Transversales_Caleidoscopio/
      │       ├── 2026-05-04_Matriz_Caleidoscopio_C1_C7_Ejemplos_Framework_Generico_V4_v0-1.md
      │       ├── 2026-05-04_Matriz_Comparativa_Perfiles_Transversales_Framework_Generico_V4_v0-1.md
      │       ├── 2026-05-04_Paquete_Consolidado_Perfiles_Transversales_Caleidoscopio_Framework_Generico_V4_v0-1.md
      │       └── 2026-05-04_Plantillas_Base_Agents_Skills_Workflows_Checks_WikiSync_Framework_Generico_V4_v0-1.md
      ├── Exportaciones_Finales/
      │   ├── README.md
      │   ├── nada.md
      │   ├── JSON/
      │   │   ├── 2026-05-04_manifest_framework_v4_1_0_borrador_v0-1.json
      │   │   └── README.md
      │   ├── MD/
      │   │   ├── 2026-05-04_Aprobacion_Framework_Generico_V4_1_0_Estable_v1-0.md
      │   │   ├── 2026-05-04_Borrador_Framework_Generico_V4_1_0_Apertura_v0-1.md
      │   │   ├── 2026-05-04_CHECKS_Framework_Generico_V4_1_0_Borrador_v0-1.md
      │   │   ├── 2026-05-04_Changelog_Actualizacion_Perfiles_Transversales_y_Apertura_V4_1_0_Framework_Generico_V4_v0-2.md
      │   │   ├── 2026-05-04_Changelog_Gobernanza_V4_1_0_Borrador_DA29_DA37_v0-3.md
      │   │   ├── 2026-05-04_Compendio_Sesion_Perfiles_Transversales_Framework_Generico_V4_v0-1.md
      │   │   ├── 2026-05-04_Estado_Situacion_Framework_Generico_V4_1_0_Estable_Post_Aprobacion_v1-0.md
      │   │   ├── 2026-05-04_Gobernanza_Aprobacion_Framework_Generico_V4_1_0_Estable_DA38_DA43_v1-0.md
      │   │   ├── 2026-05-04_Indice_Maestro_Documentos_Framework_Generico_V4_1_0_Borrador_v0-1.md
      │   │   ├── 2026-05-04_Mapa_Macro_Meso_Micro_Framework_Generico_V4_1_0_Borrador_v0-1.md
      │   │   ├── 2026-05-04_Marco_Caleidoscopio_Framework_Generico_V4_v0-1.md
      │   │   ├── 2026-05-04_Matriz_Caleidoscopio_C1_C7_Ejemplos_Framework_Generico_V4_v0-1.md
      │   │   ├── 2026-05-04_Matriz_Comparativa_Perfiles_Transversales_Framework_Generico_V4_v0-1.md
      │   │   ├── 2026-05-04_Matriz_Gates_Framework_Generico_V4_1_0_Borrador_v0-1.md
      │   │   ├── 2026-05-04_Matriz_N1_N4_Framework_Generico_V4_1_0_Borrador_v0-1.md
      │   │   ├── 2026-05-04_Paquete_Consolidado_Perfiles_Transversales_Caleidoscopio_Framework_Generico_V4_v0-1.md
      │   │   ├── 2026-05-04_Perfil_Final_Programador_Humanista_Framework_Generico_V4_v0-2.md
      │   │   ├── 2026-05-04_Perfil_Investigador_Transdisciplinario_Framework_Generico_V4_v0-1.md
      │   │   ├── 2026-05-04_Plan_Archivo_Historico_Framework_Generico_V4_0_0_y_V4_1_0_Borrador_v0-1.md
      │   │   ├── 2026-05-04_Plantillas_Base_Agents_Skills_Workflows_Checks_WikiSync_Framework_Generico_V4_v0-1.md
      │   │   ├── 2026-05-04_Primer_Continuidad_Framework_Generico_V4_1_0_Borrador_v0-1.md
      │   │   ├── 2026-05-04_Primer_Continuidad_Framework_Generico_V4_1_0_Borrador_v0-2.md
      │   │   ├── 2026-05-04_Primer_Continuidad_Framework_Generico_V4_Perfiles_Transversales_v0-1.md
      │   │   ├── 2026-05-04_Protocolo_Paso_Borrador_a_Estable_Framework_Generico_V4_1_0_v0-1.md
      │   │   ├── 2026-05-04_README_Framework_Generico_V4_1_0_Borrador_v0-1.md
      │   │   ├── 2026-05-04_Registro_Decisiones_Actualizacion_Perfiles_Transversales_y_Apertura_V4_1_0_Framework_Generico_V4_v0-2.md
      │   │   ├── 2026-05-04_Registro_Decisiones_Gobernanza_V4_1_0_Borrador_DA29_DA37_v0-3.md
      │   │   ├── 2026-05-04_Release_Notes_Framework_Generico_V4_1_0_Estable_v1-0.md
      │   │   ├── 2026-05-04_Reporte_Cierre_Situacion_Actual_Framework_Generico_V4_para_Archivo_Historico_v1-0.md
      │   │   ├── 2026-05-04_Reporte_Evaluacion_Preparacion_Framework_Generico_V4_1_0_Estable_v0-1.md
      │   │   ├── 2026-05-04_WIKI_SYNC_Framework_Generico_V4_1_0_Borrador_v0-1.md
      │   │   └── README.md
      │   └── ZIP/
      │       ├── 2026-05-04_Wiki_Prioritaria_Framework_Generico_V4_1_0_v0-1.zip
      │       ├── README.md
      │       └── Segundo_Cerebro_Framework_Generico_V4_1_1_Obsidian_Import.zip
      ├── Planes_Archivo/
      │   ├── 2026-05-04_Plan_Archivo_Historico_Framework_Generico_V4_0_0_y_V4_1_0_Borrador_v0-1.md
      │   └── README.md
      ├── Releases/
      │   ├── README.md
      │   ├── nada.md
      │   └── Framework_Generico_V4_1_0_Estable/
      │       └── 2026-05-04_Framework_Generico_V4_1_0_Estable_Release.zip
      ├── Sesiones_Cerradas/
      │   └── README.md
      ├── Versiones_Cerradas/
      │   ├── README.md
      │   ├── nada.md
      │   └── V4_0_0/
      │       ├── 2026-05-04_Reporte_Cierre_Situacion_Actual_Framework_Generico_V4_para_Archivo_Historico_v1-0.md
      │       └── README.md
      └── Wiki_Archivada/
          ├── README.md
          └── nada.md
```

---

## 4. Notas de lectura

```text
1. El árbol incluye únicamente archivos versionados en git (524 archivos al 2026-06-08, commit a014145); no incluye .DS_Store ni archivos ignorados por .gitignore.
2. Frente a la v0.2 (snapshot del 2026-06-07, 495 archivos), esta versión incorpora los 24 documentos de Ronda 2A colocados y confirmados el 2026-06-08, más este propio Tree v0.3 y el Tree v0.2 (que ya constaban como nuevos archivos al regenerar).
3. Los cartapacios marcados solo con README.md están abiertos y a la espera de contenido sustantivo (ver MAPA_COMPLETO_ESTRUCTURA.md para su descripción de uso).
4. El cartapacio 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/ concentra ahora la mayor densidad documental activa, tras la incorporación del paquete Caleidoscopio Ronda 2A (Bases de Conocimiento Comun v0_1/v0_2, convenciones, mapas, plantillas, formatos e informes de validación).
5. 99_ARCHIVO_HISTORICO conserva copias de cierre y exportaciones; no debe usarse como ubicación primaria de documentos vivos.
```
