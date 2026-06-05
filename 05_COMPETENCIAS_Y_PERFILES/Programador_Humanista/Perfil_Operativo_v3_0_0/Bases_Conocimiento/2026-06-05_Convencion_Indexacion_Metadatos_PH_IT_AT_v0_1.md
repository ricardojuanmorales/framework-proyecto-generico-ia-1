# Convención de Indexación y Metadatos PH-IT-AT v0.1

**Código documental:** 2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1  
**Versión:** v0.1  
**Fecha:** 2026-06-05  
**Estado:** Borrador operativo para validación  
**Tipo de documento:** Convención de indexación, metadatos e interoperabilidad documental  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase relacionada:** Fase 2 PH-IT-AT  
**Perfil piloto activo:** Programador Humanista v3.0.0  
**Perfiles relacionados:** Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario, Caleidoscopio  
**Ruta canónica recomendada:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/`  
**Referenciado desde:**  
- `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md`  
- `2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md`  
- `2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_2.md`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
**Protocolo normativo relacionado:** `2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md`  
**Protocolo de colocación relacionado:** `2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md`  

---

## 0. Propósito

Esta convención establece el sistema mínimo de indexación y metadatos para los productos de la Fase 2 PH-IT-AT.

Su función es permitir que los documentos creados en formato Markdown sean:

```text
1. encontrables;
2. trazables;
3. comparables;
4. transferibles;
5. auditables;
6. reutilizables;
7. compatibles con JSON;
8. compatibles con bases de datos futuras;
9. invocables por el caleidoscopio;
10. gobernables en escenarios con IA, agentes y automatización futura.
```

La convención evita que la Base de Conocimiento crezca como colección dispersa. Cada documento debe declarar qué es, dónde vive, qué perfiles toca, a qué niveles aplica, cómo se transfiere y qué riesgos o condiciones de seguridad tiene.

---

## 1. Principio rector

```text
Las carpetas organizan ubicación.
Los metadatos organizan significado.
Los índices organizan navegación.
Las referencias lógicas organizan invocación.
La bitácora organiza memoria del proceso.
```

La ruta canónica indica dónde vive el archivo. Los metadatos explican cómo debe interpretarse, reutilizarse y relacionarse.

---

## 2. Alcance

Esta convención aplica a:

```text
documentos de base de conocimiento;
protocolos;
índices;
catálogos;
rúbricas;
plantillas;
glosarios;
taxonomías;
registros;
bitácoras;
changelogs;
mapas;
documentos de seguridad;
documentos de gobernanza;
documentos de transferencia;
productos de Fases 3-6 que regresen a la base común.
```

No sustituye la futura plantilla MD/JSON. La próxima plantilla será una implementación concreta de esta convención.

---

## 3. Estructura de identificación documental

### 3.1 ID funcional de Fase 2

Se adopta la siguiente convención provisional:

```text
F2-BCC-[familia]-[número]
```

Donde:

| Componente | Significado |
|---|---|
| `F2` | Fase 2 |
| `BCC` | Base de Conocimiento Común |
| `[familia]` | Familia documental |
| `[número]` | Número secuencial dentro de la familia |

### 3.2 Familias documentales

| Código | Familia | Ejemplo |
|---|---|---|
| `00` | Gobierno, alcance y protocolos normativos | `F2-BCC-00-003` |
| `01` | Índice y navegación | `F2-BCC-01-001` |
| `02` | Metadatos e indexación | `F2-BCC-02-001` |
| `03` | Taxonomía, glosario y lenguaje común | `F2-BCC-03-001` |
| `04` | Catálogos básicos | `F2-BCC-04-001` |
| `05` | Rúbricas y evaluación | `F2-BCC-05-001` |
| `06` | Flujo, registros y referencias lógicas | `F2-BCC-06-001` |
| `07` | Seguridad longitudinal | `F2-BCC-07-001` |
| `08` | Perfiles específicos | `F2-BCC-08-001` |
| `09` | Invocación caleidoscópica | `F2-BCC-09-001` |
| `99` | Archivo histórico | `F2-BCC-99-001` |

---

## 4. Convención de nombres de archivo

Los nombres de archivo deben ser legibles, estables y compatibles con GitHub, Obsidian y sistemas futuros.

### 4.1 Patrón recomendado

```text
AAAA-MM-DD_Titulo_Documento_Contexto_vX_Y.md
```

Ejemplo:

```text
2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md
```

### 4.2 Reglas de nombre

```text
1. Usar fecha inicial en formato AAAA-MM-DD.
2. Usar guiones bajos entre bloques.
3. Evitar espacios en nombres de archivo.
4. Evitar caracteres especiales innecesarios.
5. Mantener siglas estables: PH, IT, AT.
6. Usar versión con guion bajo en archivo: v0_1.
7. Usar versión con punto dentro del documento: v0.1.
8. No cambiar el nombre de versiones anteriores.
9. No crear duplicados con títulos casi iguales.
10. Si una versión reemplaza otra, registrarlo en metadatos y referencias lógicas.
```

---

## 5. Bloque mínimo de metadatos en Markdown

Todo documento de Fase 2 debe incluir un bloque de metadatos visible al inicio.

### 5.1 Campos obligatorios

```yaml
id_documento:
codigo_documental:
titulo:
version:
fecha:
estado:
tipo_documento:
fase:
perfil_principal:
perfiles_relacionados:
nivel_usuario:
nivel_proyecto:
nivel_producto:
modalidad:
reusabilidad:
ruta_canonica:
referenciado_desde:
tipo_espejo:
copia_fisica:
estado_transferencia:
seguridad:
datos_privacidad:
requiere_revision_humana:
documentos_relacionados:
deuda_referencias_logicas:
proxima_accion:
```

### 5.2 Campos recomendados

```yaml
resumen:
proposito:
alcance:
audiencia:
familia_documental:
modulo_repositorio:
subcarpeta:
documento_reemplazado:
documento_reemplaza_a:
estado_version_anterior:
estado_bitacora:
estado_indice:
estado_changelog:
criterios_validacion:
palabras_clave:
taxonomia:
entidades_futuras:
compatibilidad_json:
compatibilidad_base_datos:
```

---

## 6. Valores controlados

### 6.1 Estado del documento

```yaml
estado:
  - borrador
  - en_revision
  - validado
  - activo
  - diferido
  - reemplazado
  - archivado
  - obsoleto
  - bloqueado
```

### 6.2 Tipo de documento

```yaml
tipo_documento:
  - alcance_operativo
  - indice_maestro
  - protocolo
  - convencion
  - plantilla
  - glosario
  - taxonomia
  - catalogo
  - rubrica
  - registro
  - bitacora
  - changelog
  - mapa
  - guia_humana
  - documento_seguridad
  - documento_gobernanza
  - documento_transferencia
  - artefacto
  - evidencia
```

### 6.3 Fase

```yaml
fase:
  - Fase 1
  - Fase 2
  - Fase 3
  - Fase 4
  - Fase 5
  - Fase 6
  - transversal
```

### 6.4 Perfil principal

```yaml
perfil_principal:
  - comun
  - PH
  - IT
  - AT
  - Caleidoscopio
  - repositorio
  - framework
```

### 6.5 Perfiles relacionados

```yaml
perfiles_relacionados:
  - PH
  - IT
  - AT
  - Caleidoscopio
  - comun
  - ninguno
```

### 6.6 Nivel

Los tres campos de nivel deben mantenerse separados.

```yaml
nivel_usuario:
  - N1
  - N2
  - N3
  - N4
  - todos
  - no_aplica

nivel_proyecto:
  - N1
  - N2
  - N3
  - N4
  - todos
  - no_aplica

nivel_producto:
  - N1
  - N2
  - N3
  - N4
  - todos
  - no_aplica
```

### 6.7 Modalidad

```yaml
modalidad:
  - individual
  - dual
  - triadica
  - caleidoscopica
  - comun
  - repositorio
  - no_aplica
```

### 6.8 Reusabilidad

```yaml
reusabilidad:
  - comun
  - PH
  - IT
  - AT
  - PH-IT
  - PH-AT
  - IT-AT
  - triadico
  - caleidoscopico
  - seguridad
  - metadatos
  - documentacion_humana
  - automatizacion_futura
  - agentes_futuros
  - evaluacion
  - transferencia_reversible
  - referencia_logica
```

### 6.9 Seguridad

```yaml
seguridad:
  - no_aplica
  - requiere_revision
  - aprobado_con_condiciones
  - aprobado
  - bloqueado
```

### 6.10 Datos y privacidad

```yaml
datos_privacidad:
  - no_aplica
  - no_contiene_datos
  - contiene_datos_publicos
  - contiene_datos_institucionales
  - contiene_datos_investigacion
  - contiene_datos_personales
  - requiere_anonimizacion
  - requiere_revision_privacidad
  - bloqueado
```

### 6.11 Revisión humana

```yaml
requiere_revision_humana:
  - si
  - no
  - pendiente
  - no_aplica
```

### 6.12 Tipo de espejo

```yaml
tipo_espejo:
  - logico_tipo_1
  - stub_tipo_2
  - fisico_congelado_tipo_3
  - no_aplica
```

Valor por defecto para Fase 2:

```yaml
tipo_espejo: logico_tipo_1
copia_fisica: false
```

---

## 7. Campos de rutas y referencias

### 7.1 Ruta canónica

```yaml
ruta_canonica:
```

Debe indicar dónde vive el archivo completo.

Ejemplo:

```yaml
ruta_canonica: 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
```

### 7.2 Referenciado desde

```yaml
referenciado_desde:
  - ruta_o_documento_1
  - ruta_o_documento_2
```

Indica desde dónde se invoca el documento sin duplicarlo físicamente.

### 7.3 Campo deprecado

El campo `ubicacion_espejo` queda deprecado. No debe usarse en nuevos documentos.

Usar:

```yaml
referenciado_desde:
tipo_espejo: logico_tipo_1
copia_fisica: false
```

---

## 8. Metadatos de transferencia reversible

Cada documento que afecte PH, IT, AT o Caleidoscopio debe incluir:

```yaml
estado_transferencia:
  - reversible_activa
  - reversible_parcial
  - reversible_pendiente
  - reversible_bloqueada
  - lente_latente_activo
  - no_aplica
```

Además, si aplica:

```yaml
transferencia_hacia_PH:
transferencia_hacia_IT:
transferencia_hacia_AT:
impacto_caleidoscopio:
lente_latente:
curaduria_transdisciplinaria:
```

---

## 9. Metadatos para futuro seguimiento de usuarios

Para productos que se usen en trayectorias formativas o seguimiento N1-N4, añadir:

```yaml
competencias_relacionadas:
evidencias_requeridas:
criterios_aprobacion:
prerrequisitos:
nivel_minimo_recomendado:
producto_esperado:
proxima_meta:
badges_o_hitos:
```

Estos campos permiten que en el futuro se registren progresos de usuarios sin rehacer la base documental.

---

## 10. Metadatos para futura base de datos

Todo documento debe poder convertirse en una entidad tipo `document`.

Campos mínimos sugeridos:

```yaml
db_entity: document
db_primary_key: id_documento
db_relations:
  - documents
  - concepts
  - taxonomy
  - profiles
  - levels
  - competencies
  - products
  - projects
  - evidence
  - references
  - security_events
```

---

## 11. Ejemplo de bloque de metadatos completo

```yaml
id_documento: F2-BCC-02-001
codigo_documental: 2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1
titulo: Convención de Indexación y Metadatos PH-IT-AT
version: v0.1
fecha: 2026-06-05
estado: borrador
tipo_documento: convencion
fase: Fase 2
perfil_principal: comun
perfiles_relacionados:
  - PH
  - IT
  - AT
  - Caleidoscopio
nivel_usuario:
  - todos
nivel_proyecto:
  - todos
nivel_producto:
  - todos
modalidad: comun
reusabilidad:
  - comun
  - metadatos
  - transferencia_reversible
  - caleidoscopico
  - seguridad
ruta_canonica: 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
referenciado_desde:
  - 2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md
  - 2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md
  - 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/
tipo_espejo: logico_tipo_1
copia_fisica: false
estado_transferencia: reversible_activa
seguridad: requiere_revision
datos_privacidad: no_contiene_datos
requiere_revision_humana: si
documentos_relacionados:
  - 2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md
  - 2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md
  - 2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md
deuda_referencias_logicas:
  - registrar_enlaces_espejo
  - actualizar_indice_maestro
  - anotar_bitacora
proxima_accion: crear Plantilla_Minima_Metadatos_MD_JSON_PH_IT_AT_v0_1.md
```

---

## 12. Ejemplo JSON equivalente

```json
{
  "id_documento": "F2-BCC-02-001",
  "codigo_documental": "2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1",
  "titulo": "Convención de Indexación y Metadatos PH-IT-AT",
  "version": "v0.1",
  "fecha": "2026-06-05",
  "estado": "borrador",
  "tipo_documento": "convencion",
  "fase": "Fase 2",
  "perfil_principal": "comun",
  "perfiles_relacionados": ["PH", "IT", "AT", "Caleidoscopio"],
  "nivel_usuario": ["todos"],
  "nivel_proyecto": ["todos"],
  "nivel_producto": ["todos"],
  "modalidad": "comun",
  "reusabilidad": ["comun", "metadatos", "transferencia_reversible", "caleidoscopico", "seguridad"],
  "ruta_canonica": "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/",
  "referenciado_desde": [
    "2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md",
    "2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md",
    "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/"
  ],
  "tipo_espejo": "logico_tipo_1",
  "copia_fisica": false,
  "estado_transferencia": "reversible_activa",
  "seguridad": "requiere_revision",
  "datos_privacidad": "no_contiene_datos",
  "requiere_revision_humana": "si",
  "documentos_relacionados": [
    "2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md",
    "2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md",
    "2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md"
  ],
  "deuda_referencias_logicas": [
    "registrar_enlaces_espejo",
    "actualizar_indice_maestro",
    "anotar_bitacora"
  ],
  "proxima_accion": "crear Plantilla_Minima_Metadatos_MD_JSON_PH_IT_AT_v0_1.md"
}
```

---

## 13. Reglas de validación mínima

Antes de declarar un documento como listo, verificar:

```text
1. tiene id_documento;
2. tiene codigo_documental;
3. tiene version;
4. tiene fecha;
5. tiene estado;
6. tiene tipo_documento;
7. tiene ruta_canonica;
8. declara referenciado_desde o no_aplica;
9. declara tipo_espejo;
10. declara copia_fisica;
11. declara seguridad;
12. declara datos_privacidad;
13. declara estado_transferencia;
14. registra deuda de referencias lógicas o declara no_aplica;
15. incluye proxima_accion.
```

---

## 14. Errores comunes a evitar

```text
1. Usar ubicacion_espejo en documentos nuevos.
2. Crear copia física editable como si fuera espejo.
3. Mezclar nivel_usuario, nivel_proyecto y nivel_producto.
4. Usar rutas no auditadas.
5. Crear sub-carpetas por categorías que deberían ser metadatos.
6. Omitir seguridad en documentos de IA, agentes, datos o automatización.
7. Usar etiquetas distintas para lo mismo.
8. Crear documentos sin estado de versión.
9. Dejar referencias lógicas pendientes invisibles.
10. No declarar si el documento es común, PH, IT, AT o caleidoscópico.
```

---

## 15. Relación con taxonomía operativa investigativa

Esta convención prepara la taxonomía, pero no la reemplaza.

La taxonomía deberá definir categorías para:

```text
1. tipos de conocimiento;
2. funciones documentales;
3. niveles de evidencia;
4. competencias;
5. riesgos;
6. seguridad;
7. usos de IA;
8. perfiles;
9. combinaciones caleidoscópicas;
10. accesibilidad y andamiaje.
```

---

## 16. Relación con la plantilla mínima MD/JSON

La próxima plantilla debe ofrecer:

```text
1. bloque YAML listo para copiar;
2. estructura Markdown base;
3. exportación JSON equivalente;
4. instrucciones de llenado;
5. validación mínima;
6. ejemplo de documento común;
7. ejemplo de documento específico de perfil;
8. ejemplo de documento caleidoscópico.
```

---

## 17. Deuda generada por esta convención

Esta deuda debe añadirse al canvas activo de deuda, sin exportar nueva versión del registro salvo cierre de bloque o solicitud explícita.

| ID deuda | Documento | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|---|
| RDL-F2-20260605-020 | Convención de Indexación y Metadatos v0.1 | Referencia lógica | Importante | Registrar referencia lógica en Enlaces_Espejo | Abierta |
| RDL-F2-20260605-021 | Convención de Indexación y Metadatos v0.1 | Bitácora | Importante | Anotar creación en bitácora activa | Abierta |
| RDL-F2-20260605-022 | Convención de Indexación y Metadatos v0.1 | Índice | Importante | Actualizar Índice Maestro v0.2 | Abierta |
| RDL-F2-20260605-023 | Convención de Indexación y Metadatos v0.1 | Changelog | De cierre | Incluir en changelog de sesión | Abierta |
| DT-F2-20260605-004 | Plantilla mínima MD/JSON | Deuda técnica | Alta | Crear plantilla basada en esta convención | Abierta |

---

## 18. Próxima acción

Crear:

```text
2026-06-05_Plantilla_Minima_Metadatos_MD_JSON_PH_IT_AT_v0_1.md
```

Ruta canónica recomendada pendiente de decisión:

```text
Opción A: 07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/
Opción B: 10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/
```

Recomendación inicial: usar `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/` si se concibe como plantilla para humanos, y referenciar desde `10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/` como estándar compatible con MD/JSON/YAML.

---

## 19. Cierre de versión v0.1

```text
Convención de indexación y metadatos creada.
Campos obligatorios definidos.
Valores controlados establecidos.
Ubicación espejo deprecada.
referenciado_desde adoptado.
tipo_espejo logico_tipo_1 adoptado.
Compatibilidad MD/JSON preparada.
Transferencia simétrica PH-IT-AT preservada.
Seguridad transversal integrada.
Próxima acción: Plantilla mínima MD/JSON.
```
