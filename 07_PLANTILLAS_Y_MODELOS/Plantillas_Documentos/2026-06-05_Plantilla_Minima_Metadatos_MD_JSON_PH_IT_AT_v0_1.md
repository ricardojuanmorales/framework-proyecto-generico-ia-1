# Plantilla Mínima de Metadatos MD/JSON PH-IT-AT v0.1

**Código documental:** 2026-06-05_Plantilla_Minima_Metadatos_MD_JSON_PH_IT_AT_v0_1  
**Versión:** v0.1  
**Fecha:** 2026-06-05  
**Estado:** Borrador operativo para validación  
**Tipo de documento:** Plantilla documental reutilizable  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase relacionada:** Fase 2 PH-IT-AT  
**Perfil piloto activo:** Programador Humanista v3.0.0  
**Perfiles relacionados:** Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario, Caleidoscopio  
**Ruta canónica recomendada:** `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/`  
**Referenciado desde:**  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/`  
- `10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/Markdown/`  
- `10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/JSON/`  
- `10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/YAML/`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
**Convención relacionada:** `2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md`  
**Índice relacionado:** `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md`  
**Registro relacionado:** `2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md`  

---

## 0. Propósito

Esta plantilla permite crear documentos de Fase 2 PH-IT-AT con metadatos mínimos estandarizados, compatibles con Markdown, YAML, JSON, Obsidian, GitHub y futuras bases de datos.

Su función es convertir la convención de metadatos en una herramienta práctica para producir documentos consistentes, trazables, transferibles y reutilizables.

---

## 1. Cuándo usar esta plantilla

Usar esta plantilla para crear:

```text
1. documentos de base de conocimiento;
2. protocolos;
3. índices;
4. catálogos;
5. rúbricas;
6. taxonomías;
7. glosarios;
8. registros;
9. plantillas;
10. guías humanas;
11. documentos de seguridad;
12. documentos de gobernanza;
13. documentos de transferencia;
14. productos de Fases 3-6 que regresen a la base común.
```

---

## 2. Regla central

```text
Todo documento nuevo debe declarar:
qué es,
dónde vive,
a quién aplica,
qué nivel atiende,
cómo se referencia,
qué seguridad requiere,
qué deuda genera,
y cuál es su próxima acción.
```

---

## 3. Plantilla mínima Markdown con metadatos visibles

Copiar y completar este bloque al inicio de cada documento.

```markdown
# [Título del Documento]

**Código documental:** [AAAA-MM-DD_Titulo_Documento_Contexto_vX_Y]  
**ID documento:** [F2-BCC-XX-000]  
**Versión:** [v0.1]  
**Fecha:** [AAAA-MM-DD]  
**Estado:** [borrador | en_revision | validado | activo | diferido | reemplazado | archivado | obsoleto | bloqueado]  
**Tipo de documento:** [alcance_operativo | indice_maestro | protocolo | convencion | plantilla | glosario | taxonomia | catalogo | rubrica | registro | bitacora | changelog | mapa | guia_humana | documento_seguridad | documento_gobernanza | documento_transferencia | artefacto | evidencia]  
**Fase:** [Fase 1 | Fase 2 | Fase 3 | Fase 4 | Fase 5 | Fase 6 | transversal]  
**Perfil principal:** [comun | PH | IT | AT | Caleidoscopio | repositorio | framework]  
**Perfiles relacionados:** [PH, IT, AT, Caleidoscopio, comun, ninguno]  
**Nivel usuario:** [N1 | N2 | N3 | N4 | todos | no_aplica]  
**Nivel proyecto:** [N1 | N2 | N3 | N4 | todos | no_aplica]  
**Nivel producto:** [N1 | N2 | N3 | N4 | todos | no_aplica]  
**Modalidad:** [individual | dual | triadica | caleidoscopica | comun | repositorio | no_aplica]  
**Reusabilidad:** [comun, PH, IT, AT, PH-IT, PH-AT, IT-AT, triadico, caleidoscopico, seguridad, metadatos, documentacion_humana, automatizacion_futura, agentes_futuros, evaluacion, transferencia_reversible, referencia_logica]  
**Ruta canónica recomendada:** `[ruta/canonica/]`  
**Referenciado desde:** `[índice, registro, bitácora, enlaces lógicos o no_aplica]`  
**Tipo de espejo:** [logico_tipo_1 | stub_tipo_2 | fisico_congelado_tipo_3 | no_aplica]  
**Copia física:** [false | true]  
**Estado de transferencia:** [reversible_activa | reversible_parcial | reversible_pendiente | reversible_bloqueada | lente_latente_activo | no_aplica]  
**Seguridad:** [no_aplica | requiere_revision | aprobado_con_condiciones | aprobado | bloqueado]  
**Datos y privacidad:** [no_aplica | no_contiene_datos | contiene_datos_publicos | contiene_datos_institucionales | contiene_datos_investigacion | contiene_datos_personales | requiere_anonimizacion | requiere_revision_privacidad | bloqueado]  
**Requiere revisión humana:** [si | no | pendiente | no_aplica]  
**Documentos relacionados:**  
- `[documento_1.md]`
- `[documento_2.md]`

**Deuda de referencias lógicas:** [registrar_enlaces_espejo | actualizar_indice_maestro | anotar_bitacora | incluir_changelog | no_aplica]  
**Próxima acción:** [acción concreta siguiente]

---

## 0. Propósito

[Explicar para qué existe este documento.]

---

## 1. Alcance

[Indicar qué cubre y qué no cubre.]

---

## 2. Contenido principal

[Desarrollar el documento.]

---

## 3. Seguridad, privacidad y revisión humana

[Indicar riesgos, datos, revisión humana, automatización o no aplicación.]

---

## 4. Transferencia reversible PH-IT-AT

[Indicar impacto en PH, IT, AT y Caleidoscopio.]

---

## 5. Deuda de referencias lógicas

[Anotar las referencias pendientes o declarar no aplica.]

---

## 6. Cierre de versión

[Resumen breve del estado de la versión y próxima acción.]
```

---

## 4. Plantilla YAML

Usar este bloque cuando se quiera copiar metadatos de forma más estructurada.

```yaml
id_documento: F2-BCC-XX-000
codigo_documental: AAAA-MM-DD_Titulo_Documento_Contexto_vX_Y
titulo: 
version: v0.1
fecha: AAAA-MM-DD
estado: borrador
tipo_documento: 
fase: Fase 2
perfil_principal: comun
perfiles_relacionados:
  - PH
  - IT
  - AT
nivel_usuario:
  - todos
nivel_proyecto:
  - todos
nivel_producto:
  - todos
modalidad: comun
reusabilidad:
  - comun
ruta_canonica: 
referenciado_desde:
  - 
tipo_espejo: logico_tipo_1
copia_fisica: false
estado_transferencia: reversible_activa
seguridad: requiere_revision
datos_privacidad: no_contiene_datos
requiere_revision_humana: si
documentos_relacionados:
  - 
deuda_referencias_logicas:
  - registrar_enlaces_espejo
  - actualizar_indice_maestro
  - anotar_bitacora
proxima_accion: 
```

---

## 5. Plantilla JSON equivalente

Usar este bloque para preparar exportaciones, tableros, scripts, bases de datos o validaciones futuras.

```json
{
  "id_documento": "F2-BCC-XX-000",
  "codigo_documental": "AAAA-MM-DD_Titulo_Documento_Contexto_vX_Y",
  "titulo": "",
  "version": "v0.1",
  "fecha": "AAAA-MM-DD",
  "estado": "borrador",
  "tipo_documento": "",
  "fase": "Fase 2",
  "perfil_principal": "comun",
  "perfiles_relacionados": ["PH", "IT", "AT"],
  "nivel_usuario": ["todos"],
  "nivel_proyecto": ["todos"],
  "nivel_producto": ["todos"],
  "modalidad": "comun",
  "reusabilidad": ["comun"],
  "ruta_canonica": "",
  "referenciado_desde": [],
  "tipo_espejo": "logico_tipo_1",
  "copia_fisica": false,
  "estado_transferencia": "reversible_activa",
  "seguridad": "requiere_revision",
  "datos_privacidad": "no_contiene_datos",
  "requiere_revision_humana": "si",
  "documentos_relacionados": [],
  "deuda_referencias_logicas": [
    "registrar_enlaces_espejo",
    "actualizar_indice_maestro",
    "anotar_bitacora"
  ],
  "proxima_accion": ""
}
```

---

## 6. Ejemplo 1 — Documento común PH-IT-AT

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
ruta_canonica: 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
referenciado_desde:
  - 2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md
  - 2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md
tipo_espejo: logico_tipo_1
copia_fisica: false
estado_transferencia: reversible_activa
seguridad: requiere_revision
datos_privacidad: no_contiene_datos
requiere_revision_humana: si
documentos_relacionados:
  - 2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md
deuda_referencias_logicas:
  - registrar_enlaces_espejo
  - actualizar_indice_maestro
  - anotar_bitacora
proxima_accion: crear plantilla minima MD JSON
```

---

## 7. Ejemplo 2 — Documento específico PH

```yaml
id_documento: F2-BCC-08-PH-001
codigo_documental: AAAA-MM-DD_Documento_Especifico_PH_v0_1
titulo: Documento Específico del Programador Humanista
version: v0.1
fecha: AAAA-MM-DD
estado: borrador
tipo_documento: guia_humana
fase: Fase 2
perfil_principal: PH
perfiles_relacionados:
  - IT
  - AT
  - Caleidoscopio
nivel_usuario:
  - N1
  - N2
nivel_proyecto:
  - N1
nivel_producto:
  - N1
modalidad: individual
reusabilidad:
  - PH
  - transferencia_reversible
ruta_canonica: 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
referenciado_desde:
  - 2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md
tipo_espejo: logico_tipo_1
copia_fisica: false
estado_transferencia: reversible_pendiente
seguridad: requiere_revision
datos_privacidad: no_contiene_datos
requiere_revision_humana: si
documentos_relacionados: []
deuda_referencias_logicas:
  - actualizar_indice_maestro
  - anotar_bitacora
proxima_accion: revisar transferencia hacia IT y AT
```

---

## 8. Ejemplo 3 — Documento caleidoscópico

```yaml
id_documento: F2-BCC-09-001
codigo_documental: AAAA-MM-DD_Plantilla_Activacion_Proyecto_Caleidoscopico_v0_1
titulo: Plantilla de Activación de Proyecto Caleidoscópico
version: v0.1
fecha: AAAA-MM-DD
estado: borrador
tipo_documento: plantilla
fase: Fase 2
perfil_principal: Caleidoscopio
perfiles_relacionados:
  - PH
  - IT
  - AT
nivel_usuario:
  - todos
nivel_proyecto:
  - N1
  - N2
  - N3
  - N4
nivel_producto:
  - todos
modalidad: caleidoscopica
reusabilidad:
  - triadico
  - caleidoscopico
  - transferencia_reversible
ruta_canonica: 07_PLANTILLAS_Y_MODELOS/Plantillas_Proyectos/
referenciado_desde:
  - 05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/
  - 2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md
tipo_espejo: logico_tipo_1
copia_fisica: false
estado_transferencia: reversible_activa
seguridad: requiere_revision
datos_privacidad: no_contiene_datos
requiere_revision_humana: si
documentos_relacionados:
  - Plantilla_Lente_Latente_PH_IT_AT_v0_1.md
deuda_referencias_logicas:
  - registrar_enlaces_espejo
  - actualizar_indice_maestro
  - anotar_bitacora
proxima_accion: validar con protocolo de curaduria transdisciplinaria
```

---

## 9. Reglas de llenado rápido

```text
1. Si el documento es de todo el sistema, perfil_principal = framework o repositorio.
2. Si el documento es común PH-IT-AT, perfil_principal = comun.
3. Si el documento nace en PH pero transferirá a IT/AT, perfil_principal = PH y reusabilidad incluye transferencia_reversible.
4. Si el documento activa combinaciones dinámicas, perfil_principal = Caleidoscopio.
5. Si aplica a todos los niveles, usar todos.
6. Si no aplica a niveles, usar no_aplica.
7. Si hay duda de seguridad, usar requiere_revision.
8. Si no hay datos, usar no_contiene_datos.
9. Si hay referencia lógica, usar tipo_espejo: logico_tipo_1 y copia_fisica: false.
10. Si falta referencia, anotarla en deuda_referencias_logicas.
```

---

## 10. Validación mínima antes de guardar

Antes de guardar un documento creado con esta plantilla, confirmar:

| Criterio | Confirmado |
|---|---|
| Tiene código documental | ☐ |
| Tiene ID funcional | ☐ |
| Tiene versión | ☐ |
| Tiene fecha | ☐ |
| Declara ruta canónica | ☐ |
| Declara referenciado_desde | ☐ |
| Declara tipo_espejo | ☐ |
| Declara copia_fisica | ☐ |
| Declara seguridad | ☐ |
| Declara datos_privacidad | ☐ |
| Declara revisión humana | ☐ |
| Declara deuda de referencias lógicas o no aplica | ☐ |
| Declara próxima acción | ☐ |

---

## 11. Relación con documentos de gobernanza

Esta plantilla debe usarse junto con:

```text
1. Protocolo de Convenciones Canónicas y Espejos Lógicos v0.3.
2. Protocolo de Manejo de Carpetas y Sub-carpetas v0.2.
3. Índice Maestro Base de Conocimiento PH-IT-AT v0.2.
4. Registro de Organización de Cartapacios v0.1.
5. Registro de Deuda de Referencias Lógicas activo.
```

---

## 12. Deuda generada por esta plantilla

Esta deuda debe añadirse al canvas activo de deuda, sin exportar nueva versión del registro salvo cierre de bloque o solicitud explícita.

| ID deuda | Documento | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|---|
| RDL-F2-20260605-024 | Plantilla Mínima MD/JSON v0.1 | Referencia lógica | Importante | Registrar referencia lógica en Enlaces_Espejo | Abierta |
| RDL-F2-20260605-025 | Plantilla Mínima MD/JSON v0.1 | Bitácora | Importante | Anotar creación en bitácora activa | Abierta |
| RDL-F2-20260605-026 | Plantilla Mínima MD/JSON v0.1 | Índice | Importante | Actualizar Índice Maestro v0.2 | Abierta |
| RDL-F2-20260605-027 | Plantilla Mínima MD/JSON v0.1 | Changelog | De cierre | Incluir en changelog de sesión | Abierta |
| DT-F2-20260605-005 | Validación técnica MD/JSON | Deuda técnica | Media | Preparar esquema JSON o checklist de validación futura | Abierta |

---

## 13. Próxima acción

Crear:

```text
Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md
```

Ruta canónica recomendada:

```text
05_COMPETENCIAS_Y_PERFILES/Taxonomias/
```

---

## 14. Cierre de versión v0.1

```text
Plantilla mínima MD/JSON creada.
Convención de metadatos operacionalizada.
Bloque Markdown preparado.
Bloque YAML preparado.
Bloque JSON preparado.
Ejemplos común, PH y caleidoscópico incluidos.
Validación mínima incluida.
Deuda registrada en canvas activo.
Próxima acción: Taxonomía Operativa Investigativa.
```
