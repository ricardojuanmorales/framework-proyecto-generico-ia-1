# Catálogo Básico de Documentos Invocables PH-IT-AT v0.1

**Código documental:** 2026-06-05_Catalogo_Basico_Documentos_Invocables_PH_IT_AT_v0_1  
**ID documento:** F2-BCC-04-001  
**Versión:** v0.1  
**Fecha:** 2026-06-05  
**Estado:** Borrador operativo para validación  
**Tipo de documento:** catalogo  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase:** Fase 2  
**Perfil principal:** comun  
**Perfiles relacionados:** PH, IT, AT, Caleidoscopio  
**Nivel usuario:** todos  
**Nivel proyecto:** todos  
**Nivel producto:** todos  
**Modalidad:** comun, individual, dual, triadica, caleidoscopica  
**Reusabilidad:** comun, documentacion_humana, transferencia_reversible, caleidoscopico, metadatos, evaluacion, seguridad  
**Ruta canónica recomendada:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/`  
**Referenciado desde:**  
- `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md`  
- `2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md`  
- `2026-06-05_Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md`  
- `2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_2.md`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
**Tipo de espejo:** logico_tipo_1  
**Copia física:** false  
**Estado de transferencia:** reversible_activa  
**Seguridad:** requiere_revision  
**Datos y privacidad:** no_contiene_datos  
**Requiere revisión humana:** si  
**Documentos relacionados:**  
- `2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md`  
- `2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md`  
- `2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md`  
- `2026-06-05_Plantilla_Minima_Metadatos_MD_JSON_PH_IT_AT_v0_1.md`  
- `2026-06-05_Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md`  
- `2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_2.md`  
**Deuda de referencias lógicas:** registrar_enlaces_espejo, actualizar_indice_maestro, anotar_bitacora, incluir_changelog  
**Próxima acción:** crear `Catalogo_Basico_Metodologias_PH_IT_AT_v0_1.md`

---

## 0. Propósito

Este catálogo identifica los documentos que pueden ser invocados de forma recurrente por usuarios, perfiles, proyectos, productos, rutas N1-N4, documentación humana, evaluación, seguridad y futuras automatizaciones.

Un documento invocable es un documento preparado para ser llamado, citado, reutilizado o activado sin duplicarlo físicamente.

El catálogo sirve para responder preguntas como:

```text
¿Qué documento debo usar para ubicar archivos?
¿Qué documento define metadatos?
¿Qué plantilla debo usar para crear un documento?
¿Qué protocolo controla el glosario?
¿Qué documento sostiene la transferencia reversible?
¿Qué documentos son seguros para usuarios N1?
¿Qué documentos requieren revisión humana antes de automatizarse?
```

---

## 1. Principio rector

```text
Un documento invocable no es una copia.
Es una fuente canónica con metadatos, ruta, estado, seguridad y propósito claro.
```

La invocación debe ocurrir mediante:

```text
1. índice maestro;
2. referencia lógica;
3. metadatos;
4. catálogo;
5. bitácora;
6. documentación humana;
7. futura base de datos o sistema agéntico, cuando sea aprobado.
```

---

## 2. Tipos de documentos invocables

| Tipo | Función | Ejemplos |
|---|---|---|
| Rector | Define visión, alcance o ruta mayor | Marco de ruta, alcance operativo |
| Normativo | Define reglas obligatorias | protocolos de colocación, convenciones |
| Operativo | Permite ejecutar procedimientos | registros, checklists, flujos |
| Plantilla | Permite crear productos nuevos | plantillas MD/JSON, entrada de glosario |
| Taxonómico | Clasifica conocimiento | taxonomía, glosario |
| Evaluativo | Permite valorar calidad o madurez | rúbricas, gates |
| Seguridad | Atiende datos, privacidad, IA, agentes | mapas y checklists de seguridad |
| Documentación humana | Explica para uso N1-N4 | guías, wiki, manuales |
| Referencia lógica | Conecta sin duplicar | enlaces espejo, registros de deuda |
| Histórico | Preserva versiones cerradas | snapshots, exportaciones finales |

---

## 3. Estados de invocabilidad

| Estado | Significado |
|---|---|
| `invocable_activo` | Puede usarse como referencia operativa. |
| `invocable_en_revision` | Puede consultarse, pero requiere revisión humana antes de uso normativo. |
| `invocable_condicional` | Puede usarse bajo condiciones específicas. |
| `invocable_pendiente` | Existe o está planificado, pero no debe usarse todavía. |
| `invocable_bloqueado` | No debe usarse hasta decisión de gobernanza. |
| `reemplazado` | Existe versión más nueva. |
| `historico` | Solo referencia histórica. |

---

## 4. Criterios mínimos para declarar un documento invocable

Un documento debe cumplir al menos los siguientes criterios:

```text
1. tiene ruta canónica recomendada o confirmada;
2. tiene versión clara;
3. tiene estado;
4. tiene propósito;
5. tiene perfil principal y perfiles relacionados;
6. tiene nivel o declara no aplica;
7. tiene seguridad declarada;
8. tiene referencia lógica o deuda registrada;
9. tiene documentos relacionados;
10. tiene próxima acción.
```

---

## 5. Catálogo inicial de documentos invocables activos

| ID | Documento | Tipo invocable | Estado | Ruta canónica recomendada | Uso principal |
|---|---|---|---|---|---|
| INV-F2-001 | `2026-06-04_Marco_Ruta_Caleidoscopica_PH_IT_AT_v0_2.md` | Rector | invocable_en_revision | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase/` o ruta aprobada | Orientar arquitectura general PH-IT-AT-Caleidoscopio |
| INV-F2-002 | `2026-06-05_Alcance_Operativo_Fase_2_Base_Conocimiento_Comun_PH_IT_AT_v0_2.md` | Rector | invocable_activo | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/` | Delimitar Fase 2 |
| INV-F2-003 | `2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md` | Normativo | invocable_activo | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | Regular archivo canónico, referencias lógicas y deuda |
| INV-F2-004 | `2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md` | Normativo | invocable_activo | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | Regular carpetas, sub-carpetas y rutas |
| INV-F2-005 | `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md` | Índice | invocable_activo | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Navegar la base de conocimiento |
| INV-F2-006 | `2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_2.md` | Registro | invocable_condicional | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | Exportación formal del registro de deuda |
| INV-F2-007 | Canvas Activo de Registro de Deuda | Registro vivo | invocable_activo | No aplica como archivo hasta exportación | Controlar deuda durante la sesión |
| INV-F2-008 | `2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md` | Registro | invocable_activo | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | Controlar rutas, referencias y ubicación |
| INV-F2-009 | `2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md` | Convención | invocable_activo | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Definir metadatos, IDs y valores controlados |
| INV-F2-010 | `2026-06-05_Plantilla_Minima_Metadatos_MD_JSON_PH_IT_AT_v0_1.md` | Plantilla | invocable_activo | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/` | Crear documentos con metadatos MD/YAML/JSON |
| INV-F2-011 | `2026-06-05_Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md` | Taxonomía | invocable_activo | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` | Clasificar conocimiento, evidencia, seguridad y niveles |
| INV-F2-012 | `2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_2.md` | Glosario | invocable_en_revision | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` | Definir lenguaje común técnico y conceptual-operativo |
| INV-F2-013 | `2026-06-05_Protocolo_Gestion_Terminos_Glosario_PH_IT_AT_v0_1.md` | Protocolo | invocable_activo | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` | Regular crecimiento del glosario |
| INV-F2-014 | `2026-06-05_Plantilla_Entrada_Glosario_PH_IT_AT_v0_1.md` | Plantilla | invocable_activo | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/` | Añadir términos al glosario sin caos |

---

## 6. Documentos invocables pendientes prioritarios

| ID | Documento pendiente | Tipo invocable | Estado | Ruta canónica recomendada | Uso esperado |
|---|---|---|---|---|---|
| INV-F2-P001 | `Catalogo_Basico_Metodologias_PH_IT_AT_v0_1.md` | Catálogo | invocable_pendiente | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` o `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/` | Organizar métodos comunes y específicos |
| INV-F2-P002 | `Catalogo_Basico_Herramientas_Procesos_PH_IT_AT_v0_1.md` | Catálogo | invocable_pendiente | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Registrar herramientas y procesos |
| INV-F2-P003 | `Rubrica_Sistemica_Holistica_Base_Conocimiento_PH_IT_AT_v0_1.md` | Rúbrica | invocable_pendiente | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | Evaluar coherencia, transferencia, seguridad y utilidad |
| INV-F2-P004 | `Rubrica_Madurez_N1_N4_Proyecto_Producto_Usuario_v0_1.md` | Rúbrica | invocable_pendiente | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | Evaluar niveles diferenciados |
| INV-F2-P005 | `Mapa_Seguridad_Longitudinal_Fase_2_PH_IT_AT_v0_1.md` | Seguridad | invocable_pendiente | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` | Regular datos, privacidad, IA y automatización |
| INV-F2-P006 | `Mapa_Expansion_Fase_2_PH_IT_AT_N1_N4_v0_1.md` | Mapa | invocable_pendiente | `20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/` o ruta aprobada | Preparar evolución futura |
| INV-F2-P007 | `Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_1.md` | Tabla | invocable_pendiente | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` | Convertir rutas en tabla de control |
| INV-F2-P008 | `Plantilla_Activacion_Proyecto_Caleidoscopico_v0_1.md` | Plantilla | invocable_pendiente | `07_PLANTILLAS_Y_MODELOS/Plantillas_Proyectos/` | Activar proyectos por problema, nivel y perfiles |
| INV-F2-P009 | `Plantilla_Lente_Latente_PH_IT_AT_v0_1.md` | Plantilla | invocable_pendiente | `07_PLANTILLAS_Y_MODELOS/Plantillas_Proyectos/` | Mantener presente el tercer perfil |
| INV-F2-P010 | `Protocolo_Curaduria_Transdisciplinaria_v0_1.md` | Protocolo | invocable_pendiente | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Protocolos_Trabajo_Humano_IA/` | Integrar función, evidencia y experiencia |

---

## 7. Invocación por nivel N1-N4

| Nivel | Documentos invocables principales | Andamiaje requerido |
|---|---|---|
| N1 | Alcance Operativo, Glosario, Guías humanas, Plantillas simples | Explicaciones breves, ejemplos, rutas claras |
| N2 | Índice Maestro, Plantilla MD/JSON, Catálogo de Documentos, Registro de Cartapacios | Plantillas, checklist, ejemplos de uso |
| N3 | Taxonomía, Convención de Metadatos, Rúbricas, Catálogos, Seguridad | Matrices, evaluación, trazabilidad |
| N4 | Protocolos normativos, Seguridad Longitudinal, Mapas de Expansión, Preparación de agentes | Auditoría, gobernanza, pruebas, revisión humana |

Regla:

```text
Todos los niveles pueden acceder al ciclo completo.
Lo que cambia es el andamiaje, la responsabilidad, el método y la evidencia esperada.
```

---

## 8. Invocación por perfil

### 8.1 Programador Humanista

Invoca principalmente:

```text
protocolos de colocación;
convención de metadatos;
plantillas;
catálogo de herramientas;
seguridad técnica;
documentación humana;
registro de cartapacios;
índice maestro.
```

### 8.2 Investigador Transdisciplinario

Invoca principalmente:

```text
taxonomía;
glosario;
rúbricas;
catálogos metodológicos;
registro de evidencias;
bitácora reversible;
seguridad de datos;
metadatos para trazabilidad.
```

### 8.3 Artista Transdisciplinario

Invoca principalmente:

```text
glosario;
documentación humana;
plantillas de mediación;
taxonomía de experiencia;
rúbricas holísticas;
lente latente;
curaduría transdisciplinaria.
```

### 8.4 Caleidoscopio

Invoca principalmente:

```text
base común;
metadatos;
taxonomía;
glosario;
plantillas de activación;
nivel operativo mínimo;
lente latente;
seguridad longitudinal;
curaduría transdisciplinaria.
```

---

## 9. Invocación por tipo de necesidad

| Necesidad | Documento a invocar primero | Documento secundario |
|---|---|---|
| Decidir dónde guardar un archivo | Protocolo de Manejo de Carpetas v0.2 | Registro de Cartapacios |
| Saber si duplicar o referenciar | Protocolo de Convenciones v0.3 | Registro de Deuda |
| Crear documento nuevo | Plantilla Mínima MD/JSON | Convención de Metadatos |
| Añadir término al glosario | Protocolo de Gestión de Términos | Plantilla de Entrada de Glosario |
| Entender un término | Glosario Centralizado | Taxonomía |
| Clasificar un documento | Taxonomía Operativa Investigativa | Convención de Metadatos |
| Ubicar productos de Fase 2 | Registro de Cartapacios | Índice Maestro |
| Controlar deuda durante sesión | Canvas activo de deuda | Registro de Deuda exportado |
| Preparar evaluación | Rúbricas pendientes | Taxonomía |
| Revisar seguridad | Mapa de Seguridad pendiente | Protocolo de Manejo de Carpetas |
| Activar proyecto caleidoscópico | Plantilla pendiente de Activación Caleidoscópica | Glosario, Taxonomía, Metadatos |

---

## 10. Invocación por seguridad

| Nivel de seguridad | Regla de invocación |
|---|---|
| `no_aplica` | Puede usarse sin revisión especial. |
| `requiere_revision` | Puede consultarse, pero no automatizarse ni normativizarse sin revisión humana. |
| `aprobado_con_condiciones` | Usar solo bajo condiciones explícitas. |
| `aprobado` | Puede invocarse según su propósito. |
| `bloqueado` | No invocar salvo decisión de gobernanza. |

Regla especial para IA y agentes:

```text
Ningún documento debe ser usado por agentes, multiagentes, CI/CD o automatizaciones finales si su estado de seguridad no lo permite explícitamente.
```

---

## 11. Invocación por fase

| Fase | Uso del catálogo |
|---|---|
| Fase 1 | Identificar documentos de perfil y preparación conceptual |
| Fase 2 | Organizar base común, metadatos, glosario, taxonomía y catálogos |
| Fase 3 | Invocar documentos N1 para productos iniciales |
| Fase 4 | Invocar documentos N2 para producción asistida |
| Fase 5 | Invocar documentos N3 para integración avanzada |
| Fase 6 | Invocar documentos N4 para gobernanza, seguridad y sostenibilidad |

---

## 12. Reglas para añadir documentos al catálogo

Añadir un documento cuando:

```text
1. será usado por varios productos, usuarios o perfiles;
2. tiene función de referencia frecuente;
3. organiza otros documentos;
4. define reglas, plantillas, criterios o rutas;
5. afecta seguridad, transferencia, metadatos o evaluación;
6. prepara uso futuro por bases de datos o sistemas agénticos;
7. requiere control de versión y estado de invocabilidad.
```

No añadir si:

```text
1. es una nota efímera de sesión;
2. no tiene ruta canónica;
3. no tiene función reusable;
4. es una copia física;
5. no tiene estado claro;
6. todavía no debe ser invocado por seguridad.
```

---

## 13. Campos mínimos para registrar un documento invocable

```yaml
id_invocable:
documento:
id_documento:
version:
tipo_invocable:
estado_invocabilidad:
ruta_canonica:
referenciado_desde:
perfil_principal:
perfiles_relacionados:
nivel_usuario:
nivel_proyecto:
nivel_producto:
fase:
reusabilidad:
seguridad:
datos_privacidad:
requiere_revision_humana:
documentos_relacionados:
proxima_accion:
```

---

## 14. Relación con bases de datos futuras

Este catálogo puede convertirse en una entidad `invocable_documents`.

Campos sugeridos:

```yaml
db_entity: invocable_documents
primary_key: id_invocable
relations:
  - documents
  - profiles
  - levels
  - taxonomy_codes
  - security_events
  - references
  - learning_paths
  - project_types
```

---

## 15. Relación con transferencia simétrica

El catálogo evita que PH sea el único punto de acceso. Aunque muchos documentos nacen durante la Fase 2 del PH como perfil piloto, cada entrada debe declarar si también aplica a IT, AT o Caleidoscopio.

Regla:

```text
Un documento creado desde PH puede ser común, específico o transferible.
Debe declararlo mediante metadatos y reusabilidad.
```

---

## 16. Relación con documentación humana

Todo documento invocable importante debe tener, tarde o temprano, una versión o guía de uso humano.

Prioridades para guías humanas:

```text
1. Índice Maestro.
2. Glosario Centralizado.
3. Plantilla MD/JSON.
4. Protocolo de Manejo de Carpetas.
5. Protocolo de Convenciones Canónicas y Espejos Lógicos.
6. Taxonomía Operativa Investigativa.
7. Catálogo de Documentos Invocables.
```

---

## 17. Deuda generada por este catálogo

Esta deuda debe añadirse al canvas activo de deuda, sin exportar nueva versión del registro salvo cierre de bloque o solicitud explícita.

| ID deuda | Documento | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|---|
| RDL-F2-20260605-048 | Catálogo de Documentos Invocables v0.1 | Referencia lógica | Importante | Registrar referencia lógica en Enlaces_Espejo | Abierta |
| RDL-F2-20260605-049 | Catálogo de Documentos Invocables v0.1 | Bitácora | Importante | Anotar creación en bitácora activa | Abierta |
| RDL-F2-20260605-050 | Catálogo de Documentos Invocables v0.1 | Índice | Importante | Actualizar Índice Maestro v0.2 | Abierta |
| RDL-F2-20260605-051 | Catálogo de Documentos Invocables v0.1 | Changelog | De cierre | Incluir en changelog de sesión | Abierta |
| DT-F2-20260605-020 | Guías humanas de documentos invocables | Deuda técnica | Media | Crear guías N1-N4 para usar documentos invocables | Abierta |
| DT-F2-20260605-021 | Tabla futura de invocabilidad | Deuda técnica | Media | Convertir catálogo a tabla o JSON futuro | Abierta |

---

## 18. Próxima acción

Crear:

```text
2026-06-05_Catalogo_Basico_Metodologias_PH_IT_AT_v0_1.md
```

Ruta canónica recomendada pendiente de decisión:

```text
Opción A: 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
Opción B: 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
```

Recomendación inicial:

```text
Usar Bases_Conocimiento si el catálogo organiza metodologías como documentos invocables de Fase 2.
Usar 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO si el documento se convierte en protocolo metodológico general del repositorio.
```

Para v0.1, se recomienda iniciar en:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
```

con referencia lógica hacia `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/`.

---

## 19. Cierre de versión v0.1

```text
Catálogo Básico de Documentos Invocables creado.
Documentos activos y pendientes clasificados.
Estados de invocabilidad definidos.
Invocación por nivel, perfil, necesidad, seguridad y fase establecida.
Relación con transferencia simétrica y documentación humana incorporada.
Deuda registrada en canvas activo.
Próxima acción: Catálogo Básico de Metodologías.
```
