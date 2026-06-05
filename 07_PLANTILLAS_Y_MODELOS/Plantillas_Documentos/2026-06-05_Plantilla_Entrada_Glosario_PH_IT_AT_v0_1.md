# Plantilla de Entrada de Glosario PH-IT-AT v0.1

**Código documental:** 2026-06-05_Plantilla_Entrada_Glosario_PH_IT_AT_v0_1  
**ID documento:** F2-BCC-03-004  
**Versión:** v0.1  
**Fecha:** 2026-06-05  
**Estado:** Borrador operativo para validación  
**Tipo de documento:** plantilla  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase:** Fase 2  
**Perfil principal:** comun  
**Perfiles relacionados:** PH, IT, AT, Caleidoscopio  
**Nivel usuario:** todos  
**Nivel proyecto:** todos  
**Nivel producto:** todos  
**Modalidad:** comun, individual, dual, triadica, caleidoscopica  
**Reusabilidad:** comun, metadatos, documentacion_humana, transferencia_reversible, caleidoscopico, seguridad  
**Ruta canónica recomendada:** `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/`  
**Referenciado desde:**  
- `2026-06-05_Protocolo_Gestion_Terminos_Glosario_PH_IT_AT_v0_1.md`  
- `2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_1.md`  
- `2026-06-05_Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
**Tipo de espejo:** logico_tipo_1  
**Copia física:** false  
**Estado de transferencia:** reversible_activa  
**Seguridad:** requiere_revision  
**Datos y privacidad:** no_contiene_datos  
**Requiere revisión humana:** si  
**Documentos relacionados:**  
- `2026-06-05_Protocolo_Gestion_Terminos_Glosario_PH_IT_AT_v0_1.md`  
- `2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_1.md`  
- `2026-06-05_Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md`  
**Deuda de referencias lógicas:** registrar_enlaces_espejo, actualizar_indice_maestro, anotar_bitacora, incluir_changelog  
**Próxima acción:** usar esta plantilla para crear el núcleo conceptual-operativo del Glosario Centralizado v0.2

---

## 0. Propósito

Esta plantilla estandariza la creación de entradas para el **Glosario Centralizado PH-IT-AT**, evitando duplicación, ambigüedad y crecimiento desordenado.

Cada entrada debe permitir comprender el término desde el conocimiento común, los perfiles PH-IT-AT, los niveles N1-N4, la seguridad longitudinal y la posible activación caleidoscópica.

---

## 1. Ficha completa de entrada de glosario

Copiar y completar esta ficha para cada término nuevo.

```markdown
## [Término preferido]

**ID término:** GLOS-PHITAT-[000]  
**Término preferido:** [Término]  
**Sinónimos o variantes:** [lista o no_aplica]  
**Términos relacionados:** [lista o no_aplica]  
**Tipo de término:** [tecnico_importado | tecnico_adaptado | conceptual_propio | operativo_propio | metodologico | pedagogico | seguridad | caleidoscopico]  
**Estado:** [propuesto | en_revision | activo | validado | fusionado | deprecado | bloqueado]  
**Nivel inicial recomendado:** [N1 | N2 | N3 | N4 | todos]  
**Perfil principal:** [comun | PH | IT | AT | Caleidoscopio]  
**Perfiles relacionados:** [PH, IT, AT, Caleidoscopio]  
**Reusabilidad:** [comun | PH | IT | AT | PH-IT | PH-AT | IT-AT | triadico | caleidoscopico | seguridad | metadatos | documentacion_humana | transferencia_reversible]  
**Taxonomía:** [códigos del documento de taxonomía]  
**Seguridad:** [no_aplica | requiere_revision | aprobado_con_condiciones | aprobado | bloqueado]  
**Fuente o procedencia:** [fuente externa, documento interno, conversación, práctica operativa, no_aplica]  
**Documentos relacionados:** [lista]

### Definición común

[Definición clara y breve, entendible para usuarios N1.]

### Uso en PH

[Cómo lo usa o interpreta el Programador Humanista.]

### Uso en IT

[Cómo lo usa o interpreta el Investigador Transdisciplinario.]

### Uso en AT

[Cómo lo usa o interpreta el Artista Transdisciplinario.]

### Activación caleidoscópica

[Cómo se activa cuando se combinan perfiles alrededor de un problema común.]

### Ejemplo breve

[Ejemplo simple de uso.]

### Riesgo de mal uso

[Ambigüedad, confusión, riesgo ético, técnico o de seguridad.]

### Nota de andamiaje N1-N4

[Cómo se explica o usa por nivel.]

### Estado de validación

[Pendiente, revisado, validado, etc.]

### Próxima acción

[Qué debe pasar luego con este término.]
```

---

## 2. Versión YAML de entrada

```yaml
id_termino: GLOS-PHITAT-000
termino_preferido:
sinonimos:
  - 
terminos_relacionados:
  - 
tipo_termino:
estado: propuesto
nivel_inicial_recomendado:
perfil_principal:
perfiles_relacionados:
  - PH
  - IT
  - AT
  - Caleidoscopio
reusabilidad:
  - comun
taxonomia:
  funcion_documental:
  tipo_conocimiento:
  perfil_modalidad:
  nivel:
  evidencia:
  seguridad:
  intensidad_ia:
  andamiaje:
  invocacion_caleidoscopica:
  transferencia:
seguridad: requiere_revision
fuente_origen:
documentos_relacionados:
  - 
definicion_comun:
uso_PH:
uso_IT:
uso_AT:
activacion_caleidoscopica:
ejemplo_breve:
riesgo_mal_uso:
nota_andamiaje_N1_N4:
estado_validacion:
proxima_accion:
```

---

## 3. Versión JSON de entrada

```json
{
  "id_termino": "GLOS-PHITAT-000",
  "termino_preferido": "",
  "sinonimos": [],
  "terminos_relacionados": [],
  "tipo_termino": "",
  "estado": "propuesto",
  "nivel_inicial_recomendado": "",
  "perfil_principal": "",
  "perfiles_relacionados": ["PH", "IT", "AT", "Caleidoscopio"],
  "reusabilidad": ["comun"],
  "taxonomia": {
    "funcion_documental": "",
    "tipo_conocimiento": "",
    "perfil_modalidad": "",
    "nivel": "",
    "evidencia": "",
    "seguridad": "",
    "intensidad_ia": "",
    "andamiaje": "",
    "invocacion_caleidoscopica": "",
    "transferencia": ""
  },
  "seguridad": "requiere_revision",
  "fuente_origen": "",
  "documentos_relacionados": [],
  "definicion_comun": "",
  "uso_PH": "",
  "uso_IT": "",
  "uso_AT": "",
  "activacion_caleidoscopica": "",
  "ejemplo_breve": "",
  "riesgo_mal_uso": "",
  "nota_andamiaje_N1_N4": "",
  "estado_validacion": "",
  "proxima_accion": ""
}
```

---

## 4. Ejemplo — Ruta Canónica

```markdown
## Ruta Canónica

**ID término:** GLOS-PHITAT-001  
**Término preferido:** Ruta Canónica  
**Sinónimos o variantes:** ubicación principal, ruta oficial  
**Términos relacionados:** Archivo Canónico, Referencia Lógica, Espejo Lógico  
**Tipo de término:** operativo_propio  
**Estado:** propuesto  
**Nivel inicial recomendado:** N1  
**Perfil principal:** comun  
**Perfiles relacionados:** PH, IT, AT, Caleidoscopio  
**Reusabilidad:** comun, metadatos, documentacion_humana, transferencia_reversible  
**Taxonomía:** FUNC-REF, KNOW-ORG, PERF-COMUN, NIV-TODOS, SEG-REV, REU-COM, TRANS-ACT  
**Seguridad:** requiere_revision  
**Fuente o procedencia:** práctica operativa Fase 2  
**Documentos relacionados:** Protocolo de Convenciones v0.3, Protocolo de Manejo de Carpetas v0.2

### Definición común

Ubicación oficial donde vive el archivo completo que debe considerarse fuente única de verdad.

### Uso en PH

Permite al Programador Humanista organizar productos, aplicaciones, documentación y bases de conocimiento sin duplicar archivos.

### Uso en IT

Permite rastrear evidencia, versiones y procedencia documental de manera verificable.

### Uso en AT

Permite ubicar mediaciones, guías, narrativas e interfaces sin romper la estructura común.

### Activación caleidoscópica

Cuando un proyecto combina perfiles, la ruta canónica permite invocar el mismo documento desde varios lentes sin crear copias divergentes.

### Ejemplo breve

El protocolo de manejo de carpetas vive en `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/`.

### Riesgo de mal uso

Confundir ruta canónica con referencia lógica o crear copias físicas editables.

### Nota de andamiaje N1-N4

N1: saber dónde vive el archivo.  
N2: registrar la ruta en metadatos.  
N3: mantener referencias lógicas.  
N4: auditar rutas y automatizar validaciones futuras.

### Estado de validación

Pendiente de integración en Glosario v0.2.

### Próxima acción

Incluir en el núcleo conceptual-operativo del glosario.
```

---

## 5. Checklist rápido para añadir un término

| Criterio | Confirmado |
|---|---|
| El término es necesario | ☐ |
| No duplica otro término | ☐ |
| Tiene definición común | ☐ |
| Tiene usos PH, IT y AT | ☐ |
| Tiene activación caleidoscópica o no aplica | ☐ |
| Tiene nivel inicial | ☐ |
| Tiene clasificación taxonómica | ☐ |
| Tiene seguridad | ☐ |
| Tiene riesgo de mal uso | ☐ |
| Tiene fuente o procedencia | ☐ |
| Tiene documentos relacionados | ☐ |
| Tiene próxima acción | ☐ |

---

## 6. Regla de uso en sesión

```text
Durante la sesión, registrar términos propuestos en canvas o sección temporal.
Solo exportar nueva versión del glosario cuando se cierre un lote.
```

---

## 7. Deuda generada por esta plantilla

Esta deuda debe añadirse al canvas activo de deuda, sin exportar nueva versión del registro salvo cierre de bloque o solicitud explícita.

| ID deuda | Documento | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|---|
| RDL-F2-20260605-040 | Plantilla de Entrada de Glosario v0.1 | Referencia lógica | Importante | Registrar referencia lógica en Enlaces_Espejo | Abierta |
| RDL-F2-20260605-041 | Plantilla de Entrada de Glosario v0.1 | Bitácora | Importante | Anotar creación en bitácora activa | Abierta |
| RDL-F2-20260605-042 | Plantilla de Entrada de Glosario v0.1 | Índice | Importante | Actualizar Índice Maestro v0.2 | Abierta |
| RDL-F2-20260605-043 | Plantilla de Entrada de Glosario v0.1 | Changelog | De cierre | Incluir en changelog de sesión | Abierta |
| DT-F2-20260605-017 | Glosario Centralizado v0.2 | Deuda técnica | Alta | Usar esta plantilla para añadir núcleo conceptual-operativo | Abierta |

---

## 8. Próxima acción

Usar esta plantilla para crear:

```text
2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_2.md
```

con el núcleo conceptual-operativo mínimo.

---

## 9. Cierre de versión v0.1

```text
Plantilla de entrada de glosario creada.
Campos Markdown, YAML y JSON definidos.
Ejemplo aplicado incluido.
Checklist de validación incluido.
Preparada para actualización del Glosario Centralizado v0.2.
```
