# Protocolo de Manejo de Carpetas, Sub-carpetas y Colocación Documental — Framework Genérico V4.1.1 v0.2

**Código documental:** 2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2  
**Versión:** v0.2  
**Fecha:** 2026-06-05  
**Estado:** Validado para uso operativo inicial  
**Tipo de documento:** Protocolo general de colocación documental  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase relacionada:** Fase 2 PH-IT-AT  
**Perfil piloto relacionado:** Programador Humanista v3.0.0  
**Perfiles relacionados:** Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario, Caleidoscopio  
**Ruta canónica recomendada:** `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/`  
**Referenciado desde:** `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/`, `00_CONTROL_MAESTRO/Convenciones_Nombres/`, `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`, `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/`  
**Protocolo normativo relacionado:** `2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md`  
**Índice relacionado:** `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md`  
**Registro vivo relacionado:** `2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_2.md`

---

## -1. Reporte breve de validación estructural

### Resultado de validación

```text
Estado: Validado para uso operativo inicial.
Solidez estructural: Alta.
Compatibilidad con mapa estructural vigente: Alta.
Compatibilidad con transferencia simétrica reversible: Alta.
Compatibilidad con seguridad transversal: Alta.
Requiere actualización futura: Sí, conforme evolucionen IT, AT, taxonomía, metadatos y base de datos.
```

### Hallazgos principales

| Criterio | Resultado | Observación |
|---|---|---|
| Uso de rutas auditadas | Aprobado | El protocolo prioriza carpetas existentes del mapa estructural vigente. |
| Control de sub-carpetas numeradas | Aprobado | Bloquea sub-carpetas internas numeradas no autorizadas. |
| Fuente canónica única | Aprobado | Mantiene un archivo canónico y referencias lógicas Tipo 1. |
| Compatibilidad PH-IT-AT | Aprobado | PH opera como piloto sin cerrar el paso a IT y AT. |
| Compatibilidad caleidoscópica | Aprobado | Permite invocación dinámica mediante metadatos y referencias. |
| Seguridad transversal | Aprobado | Integra revisión de datos, privacidad, automatización y agentes futuros. |
| Preparación futura | Aprobado con condición | Debe complementarse luego con metadatos, taxonomía y registro de organización de cartapacios. |

### Decisión de validación

Este protocolo puede usarse como regla operativa inicial para continuar la cascada documental de Fase 2.

La validación no elimina la necesidad de crear documentos complementarios:

```text
Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md
Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md
Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md
```


---

## 0. Propósito

Este protocolo establece reglas prácticas para decidir dónde colocar archivos, cómo manejar carpetas y sub-carpetas, cómo evitar rutas inventadas y cómo mantener actualizadas las referencias lógicas sin duplicar archivos físicos.

Su propósito es proteger la coherencia estructural del repositorio, la trazabilidad documental, la transferencia simétrica reversible PH-IT-AT, la seguridad longitudinal y la preparación futura para metadatos, JSON, bases de datos, agentes y automatización.

---

## 1. Principio rector

```text
Usar primero la estructura existente.
Crear carpetas nuevas solo con decisión explícita.
Un archivo completo vive en una sola ruta canónica.
Los demás lugares lo invocan mediante referencias lógicas.
```

---

## 2. Regla de carpetas numeradas

El repositorio usa numeración en los módulos principales:

```text
00_CONTROL_MAESTRO/
01_FUNDAMENTO_FILOSOFICO/
02_ARQUITECTURA_CONCEPTUAL/
...
21_WIKI_DOCUMENTACION_HUMANA/
99_ARCHIVO_HISTORICO/
```

Dentro de los módulos, la convención predominante es usar carpetas semánticas existentes como:

```text
Alcance_Operativo/
Bases_Conocimiento/
Enlaces_Espejo/
Gobernanza_Perfil/
Transferencia_Simetrica/
Metricas/
Competencias/
Taxonomias/
Reglas_Colocacion_Documental/
Tablas_Ubicacion_Documental/
```

Por tanto:

```text
No se deben crear sub-carpetas internas numeradas como 00_, 01_, 02_ dentro de perfiles o secciones existentes, salvo decisión explícita de arquitectura.
```

---

## 3. Rutas bloqueadas por esta versión

Las siguientes rutas no deben usarse ni crearse bajo este protocolo:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Fase_2_Base_Conocimiento/
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Fase_2_Base_Conocimiento/00_Indice_Maestro/
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Fase_2_Base_Conocimiento/01_Alcance_Gobernanza/
18_DOCUMENTACION_ACTIVA/Transferencia_Simetrica/Base_Conocimiento_Comun/
18_DOCUMENTACION_ACTIVA/Transferencia_Simetrica/Base_Conocimiento_Comun/00_Indice_Maestro/
05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/
```

Si en el futuro se considera necesaria alguna de estas rutas, debe aprobarse mediante decisión explícita de arquitectura y registrarse en:

```text
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/
```

---

## 4. Tipos principales de documentos y rutas canónicas

### 4.1 Control maestro y reglas generales

| Tipo de producto | Ruta canónica |
|---|---|
| Reglas generales de colocación documental | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` |
| Convenciones de nombres | `00_CONTROL_MAESTRO/Convenciones_Nombres/` |
| Tablas de ubicación documental | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` |
| Índices maestros del repositorio completo | `00_CONTROL_MAESTRO/Indices_Maestros/` |
| Manifiestos | `00_CONTROL_MAESTRO/Manifiestos/` |
| Mapas del repositorio | `00_CONTROL_MAESTRO/Mapas_Repositorio/` |
| Protocolos de cierre de sesión | `00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion/` |

### 4.2 Perfil operativo del Programador Humanista

| Tipo de producto | Ruta canónica |
|---|---|
| Alcance operativo del PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/` |
| Base de conocimiento operativa del PH/Fase 2 piloto | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` |
| Referencias lógicas, enlaces espejo y deuda de referencias | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` |
| Gobernanza específica del perfil PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Gobernanza_Perfil/` |
| Transferencia simétrica del PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Transferencia_Simetrica/` |
| Competencias específicas PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Competencias/` |
| Métricas y matrices específicas PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Metricas/` |
| Unidades nucleares PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Unidades_Nucleares/` |
| Aplicaciones educativas del PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Aplicaciones_Educativas/` |
| Artefactos PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Artefactos/` |

### 4.3 Perfiles, taxonomías y caleidoscopio

| Tipo de producto | Ruta canónica |
|---|---|
| Taxonomías generales de competencias y perfiles | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` |
| Documentos generales de Caleidoscopio vinculados a competencias/perfiles | `05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/` |
| Perfil Investigador Transdisciplinario | `05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/` |
| Perfil Artista Transdisciplinario | `05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/` |
| Matrices de competencias | `05_COMPETENCIAS_Y_PERFILES/Matrices_Competencias/` |

### 4.4 Metodología, fases y trabajo humano-IA

| Tipo de producto | Ruta canónica |
|---|---|
| Secuencias fase por fase | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase/` |
| Niveles N1-N4 | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Niveles_N1_N4/` |
| Protocolos de trabajo humano-IA | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Protocolos_Trabajo_Humano_IA/` |
| Plantillas metodológicas | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Plantillas_Metodologicas/` |
| Workflows metodológicos, no operativos finales | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Workflows/` |

### 4.5 Plantillas y modelos

| Tipo de producto | Ruta canónica |
|---|---|
| Plantillas de documentos | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/` |
| Plantillas de proyectos | `07_PLANTILLAS_Y_MODELOS/Plantillas_Proyectos/` |
| Plantillas de evaluación | `07_PLANTILLAS_Y_MODELOS/Plantillas_Evaluacion/` |
| Plantillas de gobernanza | `07_PLANTILLAS_Y_MODELOS/Plantillas_Gobernanza/` |
| Modelos de datos | `07_PLANTILLAS_Y_MODELOS/Modelos_Datos/` |

### 4.6 IA, agentes y automatización futura

| Tipo de producto | Ruta canónica |
|---|---|
| Asistentes personalizados | `09_IA_AGENTES_Y_COPILOTOS/Asistentes_Personalizados/` |
| Evaluación de IA | `09_IA_AGENTES_Y_COPILOTOS/Evaluacion_IA/` |
| Seguridad de IA | `09_IA_AGENTES_Y_COPILOTOS/Seguridad_IA/` |
| Preparación futura de agentes, no activación final | `09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/` |
| Plantillas base de agentes y skills | `09_IA_AGENTES_Y_COPILOTOS/Sistema_Operativo_Agentes_Skills/Plantillas_Base/` |

No crear todavía archivos operativos finales como:

```text
AGENTS.md
CLAUDE.md
SKILLS.md
workflows operativos finales
```

salvo decisión explícita de gobernanza posterior.

### 4.7 Flujo técnico, formatos y desarrollo

| Tipo de producto | Ruta canónica |
|---|---|
| Formatos documentales Markdown | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/Markdown/` |
| Formatos documentales JSON | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/JSON/` |
| Formatos documentales YAML | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/YAML/` |
| CI/CD conceptual o técnico | `10_REPOSITORIOS_Y_FLUJO_TECNICO/CI_CD/` |
| Pruebas técnicas | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Pruebas_Tecnicas/` |
| Git/GitHub | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub/` |
| Bases de datos SQL | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Bases_Datos_SQL/` |

### 4.8 Evaluación, calidad y auditoría

| Tipo de producto | Ruta canónica |
|---|---|
| Rúbricas generales o transversales | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` |
| Gates, checks y evaluación | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/` |
| Evaluación de seguridad | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Seguridad/` |
| Evaluación IA/agentes | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_IA_Agentes/` |
| Evidencias de validación | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Evidencias_Validacion/` |
| Reportes de auditoría | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/` |

### 4.9 Seguridad, privacidad y datos

| Tipo de producto | Ruta canónica |
|---|---|
| Políticas de datos | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Politicas_Datos/` |
| Privacidad | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/` |
| Checklists de seguridad | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Checklists_Seguridad/` |
| Evaluación de riesgos técnicos | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Evaluacion_Riesgos_Tecnicos/` |
| Seguridad IA/agentes | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Seguridad_IA_Agentes/` |
| Cumplimiento normativo | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Cumplimiento_Normativo/` |

### 4.10 Documentación activa

| Tipo de producto | Ruta canónica |
|---|---|
| Bitácoras de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |
| Compendios | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/` |
| Cierres de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion/` |
| Changelog | `18_DOCUMENTACION_ACTIVA/Changelog/` |
| Registro de decisiones | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |
| Primers de continuidad | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` |
| Prompts de activación | `18_DOCUMENTACION_ACTIVA/Prompts_Activacion/` |
| Prompts de sesión | `18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/` |
| Segundo cerebro | `18_DOCUMENTACION_ACTIVA/Segundo_Cerebro/` |
| WIKI_SYNC | `18_DOCUMENTACION_ACTIVA/WIKI_SYNC/` |

### 4.11 Wiki y documentación humana

| Tipo de producto | Ruta canónica |
|---|---|
| Guías humanas del Framework | `21_WIKI_DOCUMENTACION_HUMANA/Guias_Framework_Generico_V4_1_0/` |
| Guías del Programador Humanista | `21_WIKI_DOCUMENTACION_HUMANA/Guias_Programador_Humanista/` |
| Guías del Investigador Transdisciplinario | `21_WIKI_DOCUMENTACION_HUMANA/Guias_Investigador_Transdisciplinario/` |
| Guías del Artista Transdisciplinario | `21_WIKI_DOCUMENTACION_HUMANA/Guias_Artista_Transdisciplinario/` |
| Guías del Caleidoscopio | `21_WIKI_DOCUMENTACION_HUMANA/Guias_Caleidoscopio/` |

### 4.12 Archivo histórico

| Tipo de producto | Ruta canónica |
|---|---|
| Versiones cerradas | `99_ARCHIVO_HISTORICO/Versiones_Cerradas/` |
| Ciclos completados | `99_ARCHIVO_HISTORICO/Ciclos_Completados/` |
| Exportaciones finales | `99_ARCHIVO_HISTORICO/Exportaciones_Finales/` |
| Sesiones cerradas | `99_ARCHIVO_HISTORICO/Sesiones_Cerradas/` |
| Planes de archivo | `99_ARCHIVO_HISTORICO/Planes_Archivo/` |

---

## 5. Árbol de decisión para colocar un documento

### Paso 1 — Identificar alcance

```text
¿El documento aplica a todo el repositorio?
→ 00_CONTROL_MAESTRO, 04_GOBERNANZA_ETICA_Y_RIESGOS, 15_EVALUACION_CALIDAD_Y_AUDITORIA o 16_SEGURIDAD_PRIVACIDAD_Y_DATOS.

¿Aplica al perfil PH?
→ 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/.

¿Aplica a todos los perfiles PH-IT-AT?
→ Evaluar si va en Taxonomias, Caleidoscopio, Bases_Conocimiento PH piloto, metodología o control maestro.

¿Es bitácora, changelog, compendio, primer o decisión?
→ 18_DOCUMENTACION_ACTIVA.
```

### Paso 2 — Identificar función

```text
¿Es regla?
→ Reglas_Colocacion_Documental, Convenciones_Nombres, Gobernanza o Seguridad.

¿Es base de conocimiento?
→ Bases_Conocimiento o Taxonomias, según contenido.

¿Es plantilla?
→ 07_PLANTILLAS_Y_MODELOS.

¿Es evaluación?
→ 15_EVALUACION_CALIDAD_Y_AUDITORIA.

¿Es seguridad?
→ 16_SEGURIDAD_PRIVACIDAD_Y_DATOS.

¿Es documentación humana?
→ 21_WIKI_DOCUMENTACION_HUMANA.

¿Es evidencia de sesión?
→ 18_DOCUMENTACION_ACTIVA.
```

### Paso 3 — Validar existencia de carpeta

Antes de colocar un documento:

```text
1. buscar si la carpeta ya existe en el mapa estructural;
2. usar la carpeta existente si corresponde;
3. si no existe, buscar ruta semántica equivalente;
4. si tampoco existe, proponer decisión explícita de arquitectura;
5. no crear carpeta nueva por comodidad.
```

### Paso 4 — Registrar referencias lógicas

Todo documento nuevo debe pasar por el Registro de Deuda de Referencias Lógicas:

```text
1. registrar ruta canónica;
2. registrar documentos que lo invocan;
3. indicar si requiere índice, bitácora, changelog o registro de decisiones;
4. declarar tipo_espejo: logico_tipo_1;
5. declarar copia_fisica: false.
```

### Paso 5 — Verificar seguridad

Antes de cerrar:

```text
1. verificar si hay datos personales, sensibles, institucionales o de investigación;
2. verificar si requiere revisión humana;
3. verificar si afecta automatización, agentes o workflows;
4. verificar si debe bloquearse hasta decisión de gobernanza;
5. registrar la relación con seguridad longitudinal.
```

---

## 6. Criterios para crear una carpeta nueva

Crear una carpeta nueva solo si se cumplen todas estas condiciones:

```text
1. no existe una carpeta auditada equivalente;
2. el contenido no cabe de forma natural en una carpeta existente;
3. habrá más de un documento o flujo sostenido que justifique la carpeta;
4. la carpeta mejora navegación, seguridad o mantenimiento;
5. no duplica una función ya existente;
6. se registra una decisión explícita de arquitectura;
7. se actualiza el mapa estructural del repositorio;
8. se actualiza la tabla de ubicación documental;
9. se actualizan las referencias lógicas.
```

Si alguna condición falla, debe usarse una carpeta existente.

---

## 7. Criterios para no crear una carpeta nueva

No crear carpeta nueva cuando:

```text
1. solo se necesita ubicar un documento individual;
2. ya existe una carpeta semántica equivalente;
3. la carpeta nueva reproduce una clasificación de índice;
4. la carpeta nueva usa numeración interna no auditada;
5. la carpeta crea un silo innecesario;
6. la carpeta compite con Bases_Conocimiento, Enlaces_Espejo, Gobernanza_Perfil, Taxonomias o Documentacion_Activa;
7. la carpeta se crea para resolver una duda que debe resolverse mediante metadatos.
```

---

## 8. Relación entre carpetas y metadatos

No toda categoría requiere carpeta.

Muchas categorías deben vivir como metadatos:

```text
perfil_principal
perfiles_relacionados
nivel_usuario
nivel_proyecto
nivel_producto
fase
modalidad
reusabilidad
seguridad
datos_privacidad
estado_transferencia
referenciado_desde
tipo_espejo
copia_fisica
```

Regla:

```text
Las carpetas organizan ubicación.
Los metadatos organizan significado.
Los índices organizan navegación.
Las referencias lógicas organizan invocación.
```

---

## 9. Manejo de documentos de planificación, gobernanza y base de conocimiento

### 9.1 Planificación

Documentos de planificación orientan ruta, fases, alcance, prioridades o secuencia.

Rutas típicas:

```text
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase/
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/
18_DOCUMENTACION_ACTIVA/Primers_Continuidad/
18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/
```

### 9.2 Gobernanza

Documentos de gobernanza establecen decisiones, riesgos, excepciones, reglas y condiciones de avance.

Rutas típicas:

```text
00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/
04_GOBERNANZA_ETICA_Y_RIESGOS/
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Gobernanza_Perfil/
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/
```

### 9.3 Base de conocimiento

Documentos de base de conocimiento organizan conceptos, metodologías, glosarios, catálogos, protocolos invocables, herramientas, destrezas y rutas de aprendizaje.

Rutas típicas:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
05_COMPETENCIAS_Y_PERFILES/Taxonomias/
05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
07_PLANTILLAS_Y_MODELOS/
21_WIKI_DOCUMENTACION_HUMANA/
```

### 9.4 Flujo, evidencia y memoria operativa

Documentos de flujo/evidencia preservan proceso, trazabilidad, cambios, decisiones y referencias.

Rutas típicas:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/
18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/
18_DOCUMENTACION_ACTIVA/Changelog/
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evidencias_Validacion/
```

---

## 10. Ejemplos aplicados a documentos actuales

| Documento | Ruta canónica recomendada | Razón |
|---|---|---|
| `2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md` | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | Regla general de colocación y referencias |
| `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md` | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Índice de base de conocimiento del piloto PH con transferencia PH-IT-AT |
| `2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_2.md` | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | Registro vivo de referencias lógicas |
| `2026-06-05_Alcance_Operativo_Fase_2_Base_Conocimiento_Comun_PH_IT_AT_v0_2.md` | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/` | Alcance operativo del perfil piloto |
| `Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` | Sistema de clasificación transversal |
| `Glosario_Centralizado_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` o `17_INTERNACIONALIZACION_LOCALIZACION/Glosarios/` | Pendiente de decisión: taxonomía conceptual vs. glosario lingüístico |
| `Plantilla_Activacion_Proyecto_Caleidoscopico_v0_1.md` | `07_PLANTILLAS_Y_MODELOS/Plantillas_Proyectos/` | Plantilla de activación |
| `Protocolo_Curaduria_Transdisciplinaria_v0_1.md` | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Protocolos_Trabajo_Humano_IA/` | Protocolo metodológico |
| `Mapa_Seguridad_Longitudinal_Fase_2_PH_IT_AT_v0_1.md` | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` | Seguridad transversal |

---

## 11. Reglas para versiones reemplazadas

Cuando una versión nueva reemplaza una versión anterior:

```text
1. la nueva versión se coloca en su ruta canónica;
2. la versión anterior se marca como reemplazada;
3. no se edita la versión anterior;
4. se actualiza el índice maestro correspondiente;
5. se registra la referencia lógica;
6. se actualiza el Registro de Deuda de Referencias Lógicas;
7. se anota en bitácora o changelog;
8. se decide más adelante si se mueve a archivo histórico.
```

No mover inmediatamente al archivo histórico si todavía se está trabajando en el bloque, salvo que sea necesario para evitar confusión.

---

## 12. Seguridad transversal

Todo documento debe ser evaluado con estas preguntas:

| Criterio | Pregunta |
|---|---|
| Datos | ¿Incluye datos personales, estudiantiles, institucionales o de investigación? |
| Privacidad | ¿Debe anonimizarse, restringirse o separarse algún contenido? |
| IA/agentes | ¿Puede ser usado por IA, agentes o automatizaciones? |
| Riesgo | ¿Podría causar uso indebido, automatización prematura o confusión operativa? |
| Gobernanza | ¿Requiere decisión formal antes de activarse? |
| Trazabilidad | ¿Está claro quién decidió, cuándo, por qué y dónde se registra? |
| Accesibilidad | ¿Es comprensible para usuarios N1-N4 con andamiaje adecuado? |
| Mantenimiento | ¿Tiene ruta de actualización, reemplazo o archivo? |

---

## 13. Compatibilidad con base de datos futura

Este protocolo prepara el repositorio para futura base de datos mediante campos estables:

```yaml
id_documento:
titulo:
version:
fecha:
tipo_documento:
ruta_canonica:
referenciado_desde:
modulo_repositorio:
subcarpeta:
perfil_principal:
perfiles_relacionados:
fase:
nivel_usuario:
nivel_proyecto:
nivel_producto:
reusabilidad:
estado:
seguridad:
datos_privacidad:
requiere_revision_humana:
tipo_espejo:
copia_fisica:
documento_reemplazado:
documentos_relacionados:
deuda_referencias_logicas:
proxima_accion:
```

---

## 14. Relación con transferencia simétrica reversible

La colocación documental debe preservar la simetría PH-IT-AT.

```text
PH puede ser perfil piloto.
PH no debe convertirse en centro jerárquico.
IT y AT deben poder incorporar aportes futuros sin rehacer la estructura.
El caleidoscopio debe poder invocar documentos mediante metadatos, etiquetas y referencias lógicas.
```

Toda ruta canónica debe permitir que el documento sea encontrado, referenciado, evaluado, reutilizado, transferido, auditado, actualizado y archivado.

---

## 15. Protocolo mínimo de cierre por documento

Antes de declarar un documento como listo:

```text
1. Confirmar ruta canónica existente.
2. Confirmar que no se creó carpeta nueva innecesaria.
3. Confirmar metadatos mínimos.
4. Confirmar referencia lógica o deuda registrada.
5. Confirmar impacto en índice maestro.
6. Confirmar impacto en bitácora, changelog o registro de decisiones.
7. Confirmar revisión de seguridad.
8. Confirmar próxima acción.
```

---

## 16. Deuda técnica y referencias lógicas anotadas

Estas deudas quedan **registradas y diferidas** para permitir continuar la cascada sin perder control. No bloquean el próximo producto, pero deben atenderse antes del cierre de sesión o al cierre del bloque documental.

| ID deuda | Documento | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|---|
| RDL-F2-20260605-012 | Protocolo de Manejo de Carpetas y Sub-carpetas v0.2 | Referencia lógica | Importante | Registrar referencia lógica en `Enlaces_Espejo/` | Diferida registrada |
| RDL-F2-20260605-013 | Protocolo de Manejo de Carpetas y Sub-carpetas v0.2 | Bitácora | Importante | Anotar validación en bitácora activa | Diferida registrada |
| RDL-F2-20260605-014 | Protocolo de Manejo de Carpetas y Sub-carpetas v0.2 | Índice | Importante | Actualizar Índice Maestro v0.2 con documento activo | Diferida registrada |
| RDL-F2-20260605-015 | Protocolo de Manejo de Carpetas y Sub-carpetas v0.2 | Changelog | De cierre | Incluir en changelog de sesión | Diferida registrada |
| DT-F2-20260605-001 | Protocolo de Manejo de Carpetas y Sub-carpetas v0.2 | Deuda técnica | Importante | Crear `Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md` | Abierta |
| DT-F2-20260605-002 | Sistema de colocación documental | Deuda técnica | Importante | Crear o actualizar tabla de ubicación documental en `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` | Abierta |
| DT-F2-20260605-003 | Sistema de indexación | Deuda técnica | Alta | Crear convención de metadatos e indexación PH-IT-AT | Abierta |

---

## 17. Próxima acción

Después de validar este protocolo, se autoriza continuar con la cascada documental porque las deudas técnicas quedan anotadas. Se recomienda atenderlas por bloque antes del cierre de sesión:

```text
1. registrar referencia lógica en Enlaces_Espejo;
2. anotar validación en bitácora activa;
3. actualizar Índice Maestro v0.2;
4. actualizar Registro de Deuda de Referencias Lógicas;
5. crear Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md.
```

---

## 18. Cierre de versión v0.2

```text
Protocolo de carpetas y sub-carpetas validado.
Rutas canónicas estandarizadas.
Sub-carpetas numeradas internas no auditadas bloqueadas.
Regla de estructura existente primero adoptada.
Relación con referencias lógicas integrada.
Seguridad transversal incorporada.
Transferencia simétrica reversible preservada.
Próxima acción: continuar con Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md, manteniendo deudas técnicas registradas.
```
