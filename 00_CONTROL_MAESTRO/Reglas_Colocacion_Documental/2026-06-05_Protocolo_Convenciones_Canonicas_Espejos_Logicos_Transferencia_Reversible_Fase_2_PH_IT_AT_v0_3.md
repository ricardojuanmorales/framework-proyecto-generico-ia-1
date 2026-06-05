# Protocolo de Convenciones Canónicas, Espejos Lógicos, Deuda de Referencias y Transferencia Reversible — Fase 2 PH-IT-AT v0.3

**Código documental:** 2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3  
**Versión:** v0.3  
**Fecha:** 2026-06-05  
**Estado:** Actualización directa del protocolo v0.2 con gestión obligatoria de deuda de referencias lógicas  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Perfiles relacionados:** Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario  
**Fase relacionada:** Fase 2 — Base de Conocimiento Común PH-IT-AT  
**Ruta canónica recomendada:** `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/`  
**Registro estable asociado:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
**Referencia de proceso asociada:** `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/`  
**Tipo de actualización:** Actualización directa + deuda de referencias visible  

---

## 0. Nota de actualización v0.3

La versión v0.3 actualiza directamente la versión v0.2 porque incorpora una regla operativa que afecta el flujo completo de producción documental de Fase 2:

```text
Todo archivo nuevo o versión nueva debe generar, antes de pasar al próximo producto, una entrada en el Registro de Deuda de Referencias Lógicas de Sesión o una declaración explícita de no aplicación.
```

Esta actualización no invalida la v0.2. La fortalece. La v0.2 estableció la regla de archivo canónico único y espejo lógico Tipo 1. La v0.3 añade el mecanismo para que las referencias lógicas pendientes no queden invisibles durante la sesión.

---

## 1. Propósito

Este protocolo establece la convención operativa para manejar:

```text
archivos canónicos;
espejos lógicos;
referencias cruzadas;
deuda de referencias lógicas;
registro de sesión;
transferencia simétrica reversible;
colocación documental sin duplicación física;
seguridad transversal;
preparación gradual para bases de datos, agentes y automatización futura.
```

Su función es asegurar que cada producto tangible de Fase 2 quede vinculado a su ruta canónica, sus registros de referencia, su trazabilidad, su seguridad y su potencial de transferencia PH-IT-AT.

---

## 2. Regla central adoptada

```text
Un documento, una fuente canónica.
Muchos índices pueden apuntar a él.
Ningún espejo físico editable sin decisión explícita.
Ninguna referencia lógica pendiente debe quedar invisible.
```

Esta regla busca evitar:

```text
duplicación documental;
versiones divergentes;
rutas inventadas;
espejos físicos obsoletos;
referencias pendientes olvidadas;
caos al cierre de sesión;
pérdida de transferencia reversible.
```

---

## 3. Definiciones operativas

| Término | Definición |
|---|---|
| Archivo canónico | Archivo maestro completo que se edita y se versiona como fuente única de verdad. |
| Ruta canónica | Cartapacio oficial donde vive el archivo maestro según el mapa estructural vigente. |
| Espejo lógico | Referencia, enlace, ficha o registro que apunta al archivo canónico sin duplicarlo físicamente. |
| Espejo físico | Copia completa de un archivo en otra ruta. No se permite como copia editable salvo decisión explícita. |
| Referencia lógica | Mención o vínculo registrado en índice, bitácora, registro, catálogo, enlace espejo o documento relacionado. |
| Deuda de referencias lógicas | Lista visible de referencias que deben actualizarse porque se creó, modificó, validó, movió o deprecó un archivo. |
| Registro de Deuda de Referencias Lógicas de Sesión | Instrumento obligatorio para documentar referencias pendientes durante la sesión. |
| Documento invocable | Documento que puede ser llamado por usuarios, perfiles, proyectos, productos o el caleidoscopio. |
| Registro de organización | Documento o tabla que indica qué archivo existe, dónde vive, qué lo referencia y cuál es su estado. |
| Transferencia reversible | Circuito vivo mediante el cual un hallazgo, documento o producto puede afectar PH, IT, AT y el caleidoscopio, dejando trazabilidad. |

---

## 4. Convención estructural validada

### 4.1 Módulos superiores numerados

El repositorio usa módulos superiores numerados, por ejemplo:

```text
00_CONTROL_MAESTRO/
01_FUNDAMENTO_FILOSOFICO/
02_ARQUITECTURA_CONCEPTUAL/
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
...
21_WIKI_DOCUMENTACION_HUMANA/
99_ARCHIVO_HISTORICO/
```

### 4.2 Sub-carpetas semánticas

Dentro de los módulos predominan sub-carpetas semánticas existentes. En el perfil operativo del Programador Humanista v3.0.0, por ejemplo, se utilizan carpetas como:

```text
Alcance_Operativo/
Aplicaciones_Educativas/
Arquitectura_Humano_Maquina_IA/
Artefactos/
Bases_Conocimiento/
Competencias/
Enlaces_Espejo/
Formula_Nuclear/
Gobernanza_Perfil/
Mapa_Rector/
Metricas/
Transferencia_Simetrica/
Unidades_Nucleares/
```

### 4.3 Regla corregida

No crear sub-carpetas internas nuevas con prefijos como:

```text
00_Indice_Maestro/
01_Alcance_Gobernanza/
02_Metadatos_Indexacion/
03_Glosario_Centralizado/
```

salvo que exista una decisión explícita de arquitectura.

### 4.4 Regla sobre cartapacios no auditados

No crear rutas como:

```text
05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/
```

sin decisión explícita de arquitectura. Si un documento anterior sugiere una ruta no auditada, debe corregirse mediante referencia lógica hacia la ruta canónica vigente.

---

## 5. Rutas canónicas por función documental

| Función documental | Ruta canónica preferida | Criterio |
|---|---|---|
| Reglas generales de colocación documental | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | Protocolos transversales del repositorio. |
| Convenciones de nombres | `00_CONTROL_MAESTRO/Convenciones_Nombres/` | Normas de nomenclatura. |
| Tablas de ubicación documental | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` | Mapas tabulares de qué va dónde. |
| Mapas de repositorio | `00_CONTROL_MAESTRO/Mapas_Repositorio/` | Mapas estructurales auditados. |
| Alcance operativo del PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/` | Alcance específico del perfil piloto. |
| Base de conocimiento del PH piloto | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Documentos de base de conocimiento trabajados desde PH. |
| Enlaces espejo del PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | Referencias lógicas y deuda de referencias. |
| Gobernanza del PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Gobernanza_Perfil/` | Reglas, decisiones y excepciones del perfil. |
| Transferencia simétrica del PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Transferencia_Simetrica/` | Matrices y mecanismos de transferencia PH-IT-AT. |
| Caleidoscopio | `05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/` | Documentos aceptados del caleidoscopio. |
| Taxonomías | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` | Taxonomías de perfiles, competencias y conocimiento. |
| Plantillas documentales | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/` | Plantillas reutilizables de documentos. |
| Plantillas de proyectos | `07_PLANTILLAS_Y_MODELOS/Plantillas_Proyectos/` | Activación caleidoscópica y lente latente. |
| Formatos MD/JSON/YAML | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/` | Normas técnicas de formatos. |
| Seguridad transversal | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` | Políticas y protocolos generales de seguridad. |
| Evaluación y auditoría | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | Rúbricas, checks y evidencias de validación generales. |
| Wiki humana | `21_WIKI_DOCUMENTACION_HUMANA/` | Guías orientadas a usuarios humanos. |
| Bitácoras activas | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` | Documentación activa de sesión o transferencia. |
| Registros de decisión activos | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` | Decisiones de arquitectura y gobernanza. |
| Changelogs | `18_DOCUMENTACION_ACTIVA/Changelog/` | Cambios relevantes de sesión o versión. |
| Primers de continuidad | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` | Continuidad entre sesiones. |
| Archivo histórico | `99_ARCHIVO_HISTORICO/` | Versiones cerradas, copias congeladas y exportaciones. |

---

## 6. Procedimiento estándar de cinco pasos

La v0.3 reemplaza el procedimiento de cuatro pasos por un procedimiento de cinco pasos. El nuevo paso obligatorio es el registro de deuda de referencias lógicas.

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

### Paso 3 — Registrar deuda de referencias lógicas antes de continuar

Antes de pasar al siguiente producto, debe crearse una entrada en el Registro de Deuda de Referencias Lógicas de Sesión o declararse explícitamente que no aplica.

La entrada vive canónicamente en:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/
```

La bitácora activa de sesión debe referenciar esta entrada desde:

```text
18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/
```

### Paso 4 — Actualizar referencias lógicas según prioridad

Después de colocar el archivo canónico y registrar la deuda, actualizar o calendarizar las referencias relacionadas:

```text
Índice Maestro de Base de Conocimiento PH-IT-AT
Registro de Organización de Cartapacios
Enlaces_Espejo del perfil correspondiente
Bitácora de Transferencia Reversible
Registro de Decisiones, si aplica
Changelog, si aplica
```

No crear copias físicas del archivo salvo decisión explícita.

### Paso 5 — Verificar seguridad, trazabilidad y transferencia

Antes de cerrar el producto, confirmar:

```text
ruta canónica correcta
sin copia física editable duplicada
estado de versión claro
deuda de referencias registrada
referencias críticas actualizadas o bloqueadas
sin datos sensibles innecesarios
sin activación prematura de agentes/workflows
sin creación de carpetas no auditadas
impacto PH-IT-AT declarado cuando aplique
```

---

## 7. Registro de Deuda de Referencias Lógicas de Sesión

### 7.1 Regla obligatoria

```text
Cada archivo nuevo o nueva versión debe generar una entrada en el Registro de Deuda de Referencias Lógicas de Sesión antes de pasar al próximo producto.
```

Si no hay referencias pendientes, se registra:

```text
No aplica: sin referencias lógicas pendientes.
```

No se permite dejar la deuda en memoria conversacional.

### 7.2 Ruta canónica del registro

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/
```

Nombre sugerido del registro vivo:

```text
2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_1.md
```

### 7.3 Referencia desde bitácora activa

La bitácora activa de sesión no duplica el registro completo. Solo debe incluir una nota breve:

```text
Se actualiza Registro de Deuda de Referencias Lógicas de Sesión.
Ruta canónica: 05_COMPETENCIAS_Y_PERFILES/.../Enlaces_Espejo/...
Entradas añadidas: [IDs]
Estado: críticas resueltas / pendientes de cierre / bloqueadas.
```

### 7.4 Estados de prioridad

| Estado | Uso | Momento de actualización |
|---|---|---|
| Crítica | Afecta ruta canónica, gobernanza, seguridad, versión activa o producción del próximo producto. | Antes de continuar. |
| Importante | Afecta índice, registro de organización, enlaces espejo o transferencia, pero no bloquea el próximo producto. | Al cierre del bloque de trabajo. |
| De cierre | Referencia informativa o actualización de continuidad. | Al cierre de sesión. |
| No aplica | El documento no genera referencias pendientes. | Se declara antes de continuar. |

### 7.5 Criterios para actualización inmediata

Actualizar inmediatamente cuando la referencia:

```text
cambia una regla de gobernanza;
corrige una ruta canónica;
afecta seguridad o privacidad;
cambia estado de versión activa;
bloquea o habilita el próximo producto;
crea una convención que debe aplicarse de inmediato;
resuelve una contradicción documental.
```

### 7.6 Criterios para deuda documentada

Registrar como deuda cuando la referencia:

```text
solo añade una mención informativa;
depende de aprobación posterior;
requiere que se cree otro registro primero;
no bloquea el próximo producto;
se consolidará al cierre de bloque o sesión;
es parte de limpieza de índice, changelog o bitácora.
```

---

## 8. Plantilla mínima de entrada de deuda

```yaml
id_deuda:
fecha:
sesion:
documento_origen:
version_origen:
ruta_canonica_origen:
tipo_documento:
perfil_principal:
perfiles_relacionados:
referencia_pendiente:
documento_a_actualizar:
ruta_documento_a_actualizar:
prioridad: critica | importante | de_cierre | no_aplica
razon:
accion_requerida:
estado: pendiente | en_proceso | resuelta | bloqueada | no_aplica
responsable_manual:
momento_sugerido: inmediato | cierre_bloque | cierre_sesion
impacto_seguridad:
impacto_transferencia:
notas:
```

---

## 9. Ejemplo aplicado — Protocolo v0.3

```yaml
id_deuda: RDRL-2026-06-05-001
fecha: 2026-06-05
sesion: Fase 2 PH-IT-AT

documento_origen: 2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md
version_origen: v0.3
ruta_canonica_origen: 00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/
tipo_documento: protocolo_colocacion_documental
perfil_principal: comun
perfiles_relacionados: [PH, IT, AT, Caleidoscopio]

referencia_pendiente: Registrar nueva regla obligatoria sobre deuda de referencias lógicas.
documento_a_actualizar: Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT
ruta_documento_a_actualizar: 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/
prioridad: critica
razon: El registro de deuda es obligatorio antes de crear el próximo producto de la cascada.
accion_requerida: Crear o actualizar el registro vivo de deuda de referencias lógicas de sesión.
estado: pendiente
responsable_manual: usuario/repositorio
momento_sugerido: inmediato
impacto_seguridad: Evita referencias invisibles y pérdida de trazabilidad.
impacto_transferencia: Activa seguimiento reversible PH-IT-AT.
notas: Esta entrada debe resolverse antes del protocolo de manejo de carpetas y sub-carpetas.
```

---

## 10. Decisión: actualización directa vs deuda documentada

### 10.1 Actualización directa

La actualización directa aplica cuando el cambio afecta una regla base de operación.

Ejemplos:

```text
cambio de ruta canónica;
corrección de nomenclatura;
creación de regla obligatoria;
cambio en seguridad transversal;
bloqueo de carpetas no auditadas;
definición de estados críticos;
actualización de protocolo base.
```

### 10.2 Deuda documentada

La deuda documentada aplica cuando la referencia debe actualizarse, pero no requiere editar el documento objetivo en ese mismo instante.

Ejemplos:

```text
añadir mención al índice maestro;
actualizar changelog;
agregar referencia en bitácora de sesión;
registrar en tabla de ubicación documental;
actualizar enlaces espejo de productos ya creados;
corregir una referencia no bloqueante.
```

### 10.3 Regla combinada

Algunos productos generan ambos movimientos:

```text
Actualización directa del documento rector.
Registro de deuda visible para referencias derivadas.
```

El protocolo v0.3 es un caso combinado.

---

## 11. Diferencia entre documentos de planificación, gobernanza y base de conocimiento

| Clase | Función | Ruta típica |
|---|---|---|
| Planificación | Define rutas, fases, prioridades, productos futuros y secuencias de trabajo. | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/`, `00_CONTROL_MAESTRO/`, o perfil correspondiente. |
| Gobernanza | Declara decisiones, restricciones, riesgos, excepciones, aprobaciones y locks. | `04_GOBERNANZA_ETICA_Y_RIESGOS/`, `00_CONTROL_MAESTRO/`, `Gobernanza_Perfil/`, `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/`. |
| Base de conocimiento | Contiene conocimiento invocable, reusable, educativo, técnico, metodológico o conceptual. | `Bases_Conocimiento/`, `Taxonomias/`, `Caleidoscopio/`, `21_WIKI_DOCUMENTACION_HUMANA/`. |
| Flujo/evidencia | Registra trazabilidad, bitácoras, cambios, evidencias, validaciones y continuidad. | `18_DOCUMENTACION_ACTIVA/`, `15_EVALUACION_CALIDAD_Y_AUDITORIA/`, `13_INVESTIGACION_Y_EVIDENCIA/`. |
| Enlaces lógicos | Registra vínculos, referencias, deuda y espejos lógicos sin copia física. | `Enlaces_Espejo/`. |

Regla: un documento puede relacionarse con varias clases, pero debe tener una sola clase principal para determinar su ruta canónica.

---

## 12. Seguridad transversal

Este protocolo exige que todo documento transversal declare si afecta:

```text
datos personales;
datos institucionales;
datos de investigación;
privacidad;
permisos;
automatización;
agentes futuros;
workflows;
pruebas;
versionado;
publicación;
accesibilidad;
revisión humana.
```

Si afecta seguridad de manera general, debe referenciar también:

```text
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
```

Si afecta evaluación o auditoría, debe referenciar también:

```text
15_EVALUACION_CALIDAD_Y_AUDITORIA/
```

Si afecta usuarios humanos o formación, debe referenciar también:

```text
21_WIKI_DOCUMENTACION_HUMANA/
```

---

## 13. Transferencia simétrica reversible

Todo documento de Fase 2 que afecte la base común debe declarar:

```text
Impacto en PH;
Impacto en IT;
Impacto en AT;
Impacto en Caleidoscopio;
Impacto en seguridad longitudinal;
Impacto en documentación humana;
Impacto en metadatos/indexación;
Impacto en deuda de referencias lógicas.
```

La transferencia no exige duplicar archivos. Exige registrar cómo un documento puede ser invocado, adaptado o extendido por los perfiles.

---

## 14. Errores a evitar

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
Dejar deuda de referencias lógicas invisible.
Pasar al siguiente producto sin registrar deuda o declarar no aplicación.
```

---

## 15. Checklist de cierre por documento

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
[ ] Tiene entrada en el Registro de Deuda de Referencias Lógicas o declaración de no aplicación.
[ ] Está registrado en bitácora reversible si afecta PH-IT-AT.
[ ] Está registrado en changelog o registro de decisiones si cambia gobernanza.
[ ] No hay copia física editable duplicada.
```

---

## 16. Acciones posteriores requeridas

Después de aprobar este protocolo v0.3:

```text
1. Crear o actualizar 2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_1.md.
2. Crear Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_1.md.
3. Actualizar el Índice Maestro de Base de Conocimiento PH-IT-AT para eliminar rutas no canónicas.
4. Crear o actualizar Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md.
5. Continuar con Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md.
```

---

## 17. Nota de bitácora reversible

**Evento:** Actualización del Protocolo de Convenciones Canónicas y Espejos Lógicos a v0.3.  
**Fecha:** 2026-06-05  
**Tipo de transferencia:** Reversible activa.  
**Perfil origen:** Programador Humanista como perfil piloto.  
**Perfiles relacionados:** Investigador Transdisciplinario, Artista Transdisciplinario, Caleidoscopio.  

### Hallazgo

La regla de archivo canónico único y espejo lógico Tipo 1 requiere un instrumento obligatorio para documentar deuda de referencias durante la sesión. De lo contrario, las referencias pendientes pueden quedar invisibles hasta el cierre, creando riesgo de desalineación documental.

### Decisión incorporada

Se adopta formalmente el Registro de Deuda de Referencias Lógicas de Sesión como instrumento obligatorio. Vivirá canónicamente en `Enlaces_Espejo/` del PH piloto, con referencia documental en la bitácora activa de sesión.

### Impacto en PH

El PH tendrá un registro estable para manejar referencias lógicas, deuda documental, espejos lógicos y actualización de índices durante Fase 2.

### Impacto en IT

El IT podrá integrarse posteriormente usando la misma regla: archivo canónico único, deuda visible, referencias actualizadas y transferencia reversible.

### Impacto en AT

El AT podrá aportar mediaciones, narrativas y experiencias sin duplicación documental ni pérdida de trazabilidad.

### Impacto en Caleidoscopio

El caleidoscopio podrá invocar documentos por metadatos, etiquetas y referencias lógicas actualizadas, reduciendo ambigüedad en combinaciones dinámicas.

### Próxima acción

Crear o actualizar el Registro de Deuda de Referencias Lógicas de Sesión antes de pasar al Protocolo de Manejo de Carpetas y Sub-carpetas.

---

## 18. Cierre de versión v0.3

```text
Protocolo actualizado directamente.
Regla de archivo canónico único preservada.
Espejo lógico Tipo 1 confirmado.
Registro de Deuda de Referencias Lógicas de Sesión adoptado como obligatorio.
Prioridades crítica/importante/de cierre/no aplica incorporadas.
Procedimiento ampliado de cuatro a cinco pasos.
Rutas canónicas respetan mapa estructural vigente.
Transferencia reversible fortalecida.
Próximo paso: crear o actualizar el registro vivo de deuda de referencias lógicas.
```
