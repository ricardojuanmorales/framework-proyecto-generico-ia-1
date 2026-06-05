# Protocolo de Convenciones Canónicas, Espejos Lógicos y Transferencia Reversible — Fase 2 PH-IT-AT v0.2

**Código documental:** 2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_2  
**Versión:** v0.2  
**Fecha:** 2026-06-05  
**Estado:** Actualizado y validado contra mapa estructural auditado vigente  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Perfiles relacionados:** Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario  
**Fase relacionada:** Fase 2 — Base de Conocimiento Común PH-IT-AT  
**Ruta canónica recomendada:** `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/`  
**Referenciado desde:**  
- `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Gobernanza_Perfil/`  
- `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/`  
- `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/`

---

## 1. Propósito

Este protocolo establece la convención operativa para manejar archivos canónicos, espejos lógicos, referencias cruzadas y transferencia reversible durante la Fase 2 del Programador Humanista v3.0.0 y su articulación futura con el Investigador Transdisciplinario y el Artista Transdisciplinario.

La versión v0.2 corrige la versión anterior para alinearla con el mapa estructural auditado del repositorio. En particular, elimina la recomendación de crear sub-carpetas numeradas nuevas dentro del perfil PH y reemplaza la noción de “cartapacio espejo” por “espejo lógico registrado”.

---

## 2. Regla adoptada

```text
Un documento, una fuente canónica.
Muchos índices pueden apuntar a él.
Ningún espejo físico editable sin decisión explícita.
```

Esta regla busca evitar duplicación documental, versiones divergentes, rutas inventadas y pérdida de trazabilidad.

---

## 3. Definiciones operativas

| Término | Definición |
|---|---|
| Archivo canónico | Archivo maestro completo que se edita y se versiona como fuente única de verdad. |
| Ruta canónica | Cartapacio oficial donde vive el archivo maestro según el mapa estructural vigente. |
| Espejo lógico | Referencia, enlace, ficha o registro que apunta al archivo canónico sin duplicarlo físicamente. |
| Espejo físico | Copia completa de un archivo en otra ruta. No se permite como copia editable salvo decisión explícita. |
| Documento invocable | Documento que puede ser llamado por usuarios, perfiles, proyectos, productos o el caleidoscopio. |
| Registro de organización | Documento o tabla que indica qué archivo existe, dónde vive, qué lo referencia y cuál es su estado. |
| Transferencia reversible | Circuito vivo mediante el cual un hallazgo, documento o producto puede afectar PH, IT, AT y el caleidoscopio, dejando trazabilidad. |

---

## 4. Corrección de nomenclatura y rutas

### 4.1 Convención estructural observada

El repositorio usa módulos superiores numerados:

```text
00_CONTROL_MAESTRO/
01_FUNDAMENTO_FILOSOFICO/
02_ARQUITECTURA_CONCEPTUAL/
...
21_WIKI_DOCUMENTACION_HUMANA/
99_ARCHIVO_HISTORICO/
```

Sin embargo, dentro de esos módulos predominan sub-carpetas semánticas sin prefijos numéricos internos, por ejemplo:

```text
Alcance_Operativo/
Bases_Conocimiento/
Enlaces_Espejo/
Gobernanza_Perfil/
Transferencia_Simetrica/
Unidades_Nucleares/
```

### 4.2 Regla corregida

No crear sub-carpetas internas nuevas con prefijos como:

```text
00_Indice_Maestro/
01_Alcance_Gobernanza/
02_Metadatos_Indexacion/
03_Glosario_Centralizado/
```

salvo que exista una decisión explícita de arquitectura.

### 4.3 Regla sobre cartapacios no auditados

No crear rutas como:

```text
05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/
```

mientras continúe vigente la excepción de gobernanza que bloquea cartapacios nuevos no auditados.

---

## 5. Tipos de documentos y rutas canónicas recomendadas

| Tipo de producto | Ruta canónica recomendada | Nota |
|---|---|---|
| Protocolo general de colocación documental | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | Aplica a todo el repositorio. |
| Convenciones de nombres | `00_CONTROL_MAESTRO/Convenciones_Nombres/` | Usar cuando el foco sea nomenclatura de archivos. |
| Tabla de ubicación documental | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` | Usar para matriz archivo-ruta-estado. |
| Índice maestro general | `00_CONTROL_MAESTRO/Indices_Maestros/` | Usar para índices de escala repositorio. |
| Mapas de repositorio | `00_CONTROL_MAESTRO/Mapas_Repositorio/` | Usar para mapas estructurales auditados. |
| Alcance operativo PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/` | Ya existe y contiene alcances previos. |
| Base de conocimiento PH-IT-AT desde PH piloto | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Usar mientras PH sea perfil piloto. |
| Enlaces espejo del PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | Contiene registros de referencias, no copias físicas. |
| Gobernanza del perfil PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Gobernanza_Perfil/` | Para decisiones y protocolos específicos del perfil. |
| Transferencia simétrica del PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Transferencia_Simetrica/` | Para matrices y referencias de transferencia del perfil. |
| Caleidoscopio como perfil/conector | `05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/` | Para documentos propios del caleidoscopio ya aceptados en el mapa. |
| Taxonomías | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` | Para taxonomías de competencias, perfiles y conocimiento. |
| Plantillas documentales | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/` | Para plantillas reutilizables de documentos. |
| Plantillas de proyectos | `07_PLANTILLAS_Y_MODELOS/Plantillas_Proyectos/` | Para activación caleidoscópica y lente latente. |
| Formatos MD/JSON/YAML | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/` | Para normas técnicas de formatos. |
| Seguridad transversal | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` | Para políticas y protocolos generales de seguridad. |
| Evaluación y auditoría | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | Para rúbricas, checks y evidencias de validación generales. |
| Wiki humana | `21_WIKI_DOCUMENTACION_HUMANA/` | Para guías orientadas a usuarios humanos. |
| Bitácoras activas | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` | Documentación activa de sesión o transferencia. |
| Registros de decisión activos | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` | Decisiones de arquitectura y gobernanza. |
| Changelogs | `18_DOCUMENTACION_ACTIVA/Changelog/` | Cambios relevantes de sesión o versión. |
| Primers de continuidad | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` | Continuidad entre sesiones. |
| Archivo histórico | `99_ARCHIVO_HISTORICO/` | Versiones cerradas, copias congeladas y exportaciones. |

---

## 6. Procedimiento estándar de cuatro pasos

### Paso 1 — Clasificar el documento

Antes de guardar un archivo, clasificarlo según su función principal:

```text
alcance operativo
base de conocimiento
gobernanza
enlace espejo
metodología
plantilla
seguridad
evaluación
wiki humana
documentación activa
archivo histórico
```

Si un documento pertenece a más de una categoría, elegir una ruta canónica principal y registrar las demás como referencias lógicas.

### Paso 2 — Elegir ruta canónica existente

Buscar primero una carpeta existente en el mapa estructural vigente.

Ejemplo:

```text
Alcance Operativo Fase 2
→ 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/
```

No crear una ruta alternativa como:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Fase_2_Base_Conocimiento/01_Alcance_Gobernanza/
```

porque no aparece en el mapa estructural vigente.

### Paso 3 — Actualizar referencias lógicas

Después de colocar el archivo canónico, actualizar los registros o índices relacionados:

```text
Índice Maestro de Base de Conocimiento PH-IT-AT
Registro de Organización de Cartapacios
Enlaces_Espejo del perfil correspondiente
Bitácora de Transferencia Reversible
Registro de Decisiones, si aplica
Changelog, si aplica
```

No crear copias físicas del archivo salvo decisión explícita.

### Paso 4 — Verificar seguridad, trazabilidad y transferencia

Antes de cerrar el producto, confirmar:

```text
ruta canónica correcta
sin copia física editable duplicada
estado de versión claro
referencias lógicas actualizadas
sin datos sensibles innecesarios
sin activación prematura de agentes/workflows
sin creación de carpetas no auditadas
impacto PH-IT-AT declarado cuando aplique
```

---

## 7. Registro mínimo de espejo lógico

Cuando un documento tenga valor transversal o de transferencia, debe registrarse en `Enlaces_Espejo/` o en el registro de organización correspondiente.

Formato mínimo sugerido:

```yaml
id:
titulo:
version:
estado:
archivo_canonico:
tipo_documento:
perfil_principal:
perfiles_relacionados:
referenciado_desde:
documentos_relacionados:
estado_transferencia:
ultima_revision:
responsable_revision:
notas:
```

Ejemplo:

```yaml
id: F2-BCC-00-002
titulo: Alcance Operativo Fase 2 Base de Conocimiento Común PH-IT-AT
version: v0.2
estado: activo
archivo_canonico: 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/2026-06-05_Alcance_Operativo_Fase_2_Base_Conocimiento_Comun_PH_IT_AT_v0_2.md
tipo_documento: alcance_operativo
perfil_principal: comun
perfiles_relacionados: [PH, IT, AT, Caleidoscopio]
referenciado_desde:
  - 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
  - 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/
  - 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/
estado_transferencia: reversible_activa
ultima_revision: 2026-06-05
```

---

## 8. Diferencia entre documentos de planificación, gobernanza y base de conocimiento

| Clase | Función | Ruta típica |
|---|---|---|
| Planificación | Define rutas, fases, prioridades, productos futuros y secuencias de trabajo. | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/`, `00_CONTROL_MAESTRO/`, o perfil correspondiente |
| Gobernanza | Declara decisiones, restricciones, riesgos, excepciones, aprobaciones y locks. | `04_GOBERNANZA_ETICA_Y_RIESGOS/`, `00_CONTROL_MAESTRO/`, `Gobernanza_Perfil/`, `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |
| Base de conocimiento | Contiene conocimiento invocable, reusable, educativo, técnico, metodológico o conceptual. | `Bases_Conocimiento/`, `Taxonomias/`, `Caleidoscopio/`, `21_WIKI_DOCUMENTACION_HUMANA/` |
| Flujo/evidencia | Registra trazabilidad, bitácoras, cambios, evidencias, validaciones y continuidad. | `18_DOCUMENTACION_ACTIVA/`, `15_EVALUACION_CALIDAD_Y_AUDITORIA/`, `13_INVESTIGACION_Y_EVIDENCIA/` |

Regla: un documento puede relacionarse con varias clases, pero debe tener una sola clase principal para determinar su ruta canónica.

---

## 9. Seguridad transversal

Este protocolo exige que todo documento transversal declare si afecta:

```text
datos personales
datos institucionales
datos de investigación
privacidad
permisos
automatización
agentes futuros
workflows
pruebas
versionado
publicación
accesibilidad
revisión humana
```

Si afecta seguridad de manera general, debe referenciar también `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/`.

Si afecta evaluación o auditoría, debe referenciar también `15_EVALUACION_CALIDAD_Y_AUDITORIA/`.

Si afecta usuarios humanos o formación, debe referenciar también `21_WIKI_DOCUMENTACION_HUMANA/`.

---

## 10. Transferencia simétrica reversible

Todo documento de Fase 2 que afecte la base común debe declarar:

```text
Impacto en PH
Impacto en IT
Impacto en AT
Impacto en Caleidoscopio
Impacto en seguridad longitudinal
Impacto en documentación humana
Impacto en metadatos/indexación
```

La transferencia no exige duplicar archivos. Exige registrar cómo un documento puede ser invocado, adaptado o extendido por los perfiles.

---

## 11. Errores a evitar

```text
Crear sub-carpetas numeradas internas sin autorización.
Crear _Marco_Triada_Caleidoscopica sin decisión explícita.
Duplicar archivos completos como espejos editables.
Guardar documentos de cierre dentro de bases de conocimiento.
Guardar protocolos generales solo dentro del perfil PH.
Mezclar planificación, gobernanza y conocimiento invocable sin metadatos.
Activar AGENTS.md, SKILLS.md, CLAUDE.md o workflows finales antes de autorización.
Dejar productos sin ruta canónica.
Dejar productos sin referencia en índice, registro o bitácora cuando aplica.
```

---

## 12. Checklist de cierre por documento

Antes de considerar un documento completado:

```text
[ ] Tiene título y código documental.
[ ] Tiene versión y fecha.
[ ] Tiene estado declarado.
[ ] Tiene ruta canónica existente.
[ ] No depende de una carpeta nueva no aprobada.
[ ] Tiene clasificación documental.
[ ] Tiene perfil principal y perfiles relacionados.
[ ] Declara relación con N1-N4 cuando aplica.
[ ] Declara seguridad y privacidad cuando aplica.
[ ] Declara si requiere revisión humana.
[ ] Está registrado en índice o catálogo si es invocable.
[ ] Está registrado en Enlaces_Espejo si tiene referencias transversales.
[ ] Está registrado en bitácora reversible si afecta PH-IT-AT.
[ ] Está registrado en changelog o registro de decisiones si cambia gobernanza.
[ ] No hay copia física editable duplicada.
```

---

## 13. Acciones posteriores requeridas

Después de aprobar este protocolo v0.2:

```text
1. Crear Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_1.md.
2. Actualizar el Índice Maestro de Base de Conocimiento PH-IT-AT para eliminar rutas no canónicas.
3. Crear o actualizar Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md.
4. Continuar con Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md.
```

---

## 14. Nota de bitácora reversible

**Evento:** Actualización del Protocolo de Convenciones Canónicas y Espejos Lógicos a v0.2.  
**Fecha:** 2026-06-05  
**Tipo de transferencia:** Reversible activa.  
**Perfil origen:** Programador Humanista como perfil piloto.  
**Perfiles relacionados:** Investigador Transdisciplinario, Artista Transdisciplinario, Caleidoscopio.  

### Hallazgo

La lógica de archivo canónico y espejo lógico es correcta, pero debe alinearse con el mapa estructural auditado. No se deben crear sub-carpetas numeradas internas ni rutas triádicas no aprobadas.

### Impacto en PH

El PH mantiene su Fase 2 dentro de carpetas existentes como `Alcance_Operativo/`, `Bases_Conocimiento/`, `Enlaces_Espejo/`, `Gobernanza_Perfil/` y `Transferencia_Simetrica/`.

### Impacto en IT

El IT podrá incorporar sus productos futuros respetando la misma lógica: archivo canónico único, referencias lógicas, transferencia reversible y rutas auditadas.

### Impacto en AT

El AT podrá aportar conocimiento específico y mediaciones sin quedar subordinado a la estructura del PH, usando convenciones compartidas.

### Impacto en Caleidoscopio

El caleidoscopio podrá invocar documentos por referencia lógica, etiquetas, metadatos, nivel y problema común, sin requerir duplicación de archivos.

### Próxima acción

Crear el protocolo específico de manejo de carpetas y sub-carpetas con tabla de colocación documental por tipo de producto.

---

## 15. Cierre de versión v0.2

```text
Protocolo actualizado.
Regla de archivo canónico único adoptada.
Espejo lógico Tipo 1 confirmado.
Rutas no canónicas corregidas.
Sub-carpetas numeradas internas bloqueadas salvo decisión explícita.
Transferencia reversible preservada.
Próximo paso: protocolo de manejo de carpetas y sub-carpetas.
```
