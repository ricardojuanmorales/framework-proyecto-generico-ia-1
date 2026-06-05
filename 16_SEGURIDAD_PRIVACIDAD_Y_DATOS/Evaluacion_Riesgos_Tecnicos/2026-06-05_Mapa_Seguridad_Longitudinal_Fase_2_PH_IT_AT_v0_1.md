# Mapa de Seguridad Longitudinal — Fase 2 PH-IT-AT v0.1

**Código documental:** 2026-06-05_Mapa_Seguridad_Longitudinal_Fase_2_PH_IT_AT_v0_1  
**ID documento:** F2-BCC-07-001  
**Versión:** v0.1  
**Fecha:** 2026-06-05  
**Estado:** Borrador operativo para validación  
**Tipo de documento:** mapa de seguridad longitudinal  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase:** Fase 2  
**Perfil principal:** comun  
**Perfiles relacionados:** PH, IT, AT, Caleidoscopio  
**Nivel usuario:** todos  
**Nivel proyecto:** todos  
**Nivel producto:** todos  
**Modalidad:** comun, individual, dual, triadica, caleidoscopica  
**Reusabilidad:** comun, seguridad, transferencia_reversible, caleidoscopico, metadatos, evaluacion, documentacion_humana, automatizacion_futura, agentes_futuros  
**Ruta canónica recomendada:** `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Evaluacion_Riesgos_Tecnicos/`  
**Referenciado desde:**  
- `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Checklists_Seguridad/`  
- `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Politicas_Datos/`  
- `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/`  
- `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Gestion_Secretos/`  
- `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Seguridad_IA_Agentes/`  
- `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Cumplimiento_Normativo/`  
- `15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Seguridad/`  
- `15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_IA_Agentes/`  
- `2026-06-05_Rubrica_Sistemica_Holistica_Base_Conocimiento_PH_IT_AT_v0_2.md`  
- `2026-06-05_Rubrica_Madurez_N1_N4_Proyecto_Producto_Usuario_v0_1.md`  
- `2026-06-05_Catalogo_Basico_Herramientas_Procesos_PH_IT_AT_v0_1.md`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
**Tipo de espejo:** logico_tipo_1  
**Copia física:** false  
**Estado de transferencia:** reversible_activa  
**Seguridad:** requiere_revision  
**Datos y privacidad:** no_contiene_datos  
**Requiere revisión humana:** si  
**Documentos relacionados:**  
- `2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md`  
- `2026-06-05_Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md`  
- `2026-06-05_Catalogo_Basico_Herramientas_Procesos_PH_IT_AT_v0_1.md`  
- `2026-06-05_Rubrica_Sistemica_Holistica_Base_Conocimiento_PH_IT_AT_v0_2.md`  
- `2026-06-05_Rubrica_Madurez_N1_N4_Proyecto_Producto_Usuario_v0_1.md`  
**Deuda de referencias lógicas:** registrar_enlaces_espejo, actualizar_indice_maestro, anotar_bitacora, incluir_changelog  
**Próxima acción:** crear `Mapa_Expansion_Fase_2_PH_IT_AT_N1_N4_v0_1.md`

---

## 0. Propósito

Este mapa establece la capa de **seguridad longitudinal** para la Fase 2 PH-IT-AT.

La seguridad longitudinal no es un checklist final. Es una práctica continua que acompaña la creación, ubicación, invocación, transferencia, evaluación, publicación y futura automatización de la Base de Conocimiento.

Su función es asegurar que cada documento, producto, flujo, herramienta, metodología, rúbrica o activación caleidoscópica pueda responder:

```text
1. qué datos toca;
2. qué riesgos crea;
3. qué revisión humana requiere;
4. qué automatización bloquea o permite;
5. qué perfiles afecta;
6. qué evidencias deja;
7. qué límites debe respetar;
8. qué ruta documental sostiene la decisión;
9. qué condiciones requiere para escalar;
10. qué debe auditarse antes de avanzar.
```

---

## 1. Principio rector

```text
La seguridad no se añade al final.
La seguridad viaja con el documento, el dato, el usuario, el producto, el perfil y el proyecto.
```

---

## 2. Alcance

Este mapa aplica a:

```text
1. documentos de Fase 2;
2. bases de conocimiento común y específica;
3. glosario, taxonomía, metadatos y catálogos;
4. rúbricas y seguimiento N1-N4;
5. productos del Programador Humanista;
6. aportes futuros del Investigador Transdisciplinario;
7. aportes futuros del Artista Transdisciplinario;
8. activaciones caleidoscópicas;
9. documentación humana;
10. datos, privacidad y evidencias;
11. IA, asistentes, prompts, agentes futuros y automatización;
12. publicación, despliegue y repositorios.
```

---

## 3. Ejes de seguridad longitudinal

| Eje | Pregunta central | Sub-cartapacio relacionado |
|---|---|---|
| Datos | ¿Qué datos se manejan y con qué sensibilidad? | `Politicas_Datos/` |
| Privacidad | ¿Qué debe anonimizarse, restringirse o protegerse? | `Privacidad/` |
| Accesos | ¿Quién puede leer, editar, publicar o automatizar? | `Accesos_Permisos/` |
| Secretos | ¿Hay credenciales, claves, tokens o configuraciones sensibles? | `Gestion_Secretos/` |
| Riesgos técnicos | ¿Qué puede fallar técnica, documental o operativamente? | `Evaluacion_Riesgos_Tecnicos/` |
| IA y agentes | ¿Se usa IA, asistentes, agentes o automatización futura? | `Seguridad_IA_Agentes/` |
| Aplicaciones | ¿El producto puede ejecutarse, publicarse o recibir datos? | `Seguridad_Aplicaciones/` |
| APIs | ¿Se conectan servicios, endpoints o credenciales? | `Seguridad_APIs/` |
| Bases de datos | ¿Hay estructuras de datos persistentes o consultables? | `Seguridad_Bases_Datos/` |
| Cumplimiento | ¿Hay políticas, normas o revisión institucional? | `Cumplimiento_Normativo/` |
| Respuesta | ¿Qué pasa si ocurre un incidente? | `Incidentes_Respuesta/` |
| Recuperación | ¿Cómo se restaura, respalda o revierte? | `Backups_Recuperacion/` |

---

## 4. Estados de seguridad

| Estado | Significado | Acción |
|---|---|---|
| `no_aplica` | No se identifican riesgos relevantes | Documentar por qué |
| `requiere_revision` | Hay incertidumbre o posible impacto | Revisar antes de escalar |
| `aprobado_con_condiciones` | Puede usarse bajo límites explícitos | Documentar condiciones |
| `aprobado` | Puede usarse según su propósito | Mantener monitoreo |
| `bloqueado` | No debe usarse o activarse | Requiere decisión de gobernanza |
| `archivado_por_riesgo` | Se conserva, pero no se usa | Mover o referenciar como histórico |

Valor por defecto en Fase 2:

```yaml
seguridad: requiere_revision
```

---

## 5. Clasificación de datos y privacidad

| Clasificación | Descripción | Regla mínima |
|---|---|---|
| `no_contiene_datos` | No incluye datos personales ni sensibles | Puede avanzar con revisión documental básica |
| `datos_publicos` | Información pública, no sensible | Verificar fuente y atribución |
| `datos_institucionales` | Datos de la institución, cursos, proyectos o repositorios internos | Requiere revisión humana |
| `datos_investigacion` | Datos de estudios, instrumentos, observaciones o participantes | Requiere revisión ética y metodológica |
| `datos_personales` | Identificadores o información de personas | Requiere privacidad y minimización |
| `datos_sensibles` | Información que podría causar daño, exposición o discriminación | Bloquear hasta gobernanza específica |
| `requiere_anonimizacion` | Debe eliminar o transformar identificadores | No publicar antes de anonimizar |
| `bloqueado` | No debe usarse | Escalar a gobernanza |

---

## 6. Gates de seguridad por nivel N1-N4

### Gate N1 — Seguridad mínima

```text
1. declarar si el documento contiene datos;
2. evitar información personal innecesaria;
3. identificar si requiere revisión humana;
4. no publicar sin confirmar ruta y contenido;
5. registrar próxima acción.
```

### Gate N2 — Seguridad funcional

```text
1. completar metadatos de seguridad;
2. revisar privacidad y datos;
3. registrar deuda o condición;
4. usar checklist básico;
5. declarar si hay IA, prompts o herramientas externas.
```

### Gate N3 — Seguridad integrada

```text
1. evaluar riesgos técnicos y documentales;
2. revisar IA, APIs, datos, credenciales y publicación;
3. documentar evidencia de validación;
4. aplicar rúbricas o gates;
5. registrar condiciones antes de automatización parcial.
```

### Gate N4 — Seguridad gobernada

```text
1. definir políticas, auditoría y responsables;
2. preparar controles para bases de datos, agentes o CI/CD;
3. mantener registro de incidentes y recuperación;
4. bloquear automatización no aprobada;
5. sostener revisión longitudinal y cumplimiento.
```

---

## 7. Matriz de riesgo por tipo de producto

| Producto | Riesgo típico | Estado inicial recomendado | Acción mínima |
|---|---|---|---|
| Glosario | Ambigüedad, mal uso conceptual | requiere_revision | Validar términos y riesgos |
| Taxonomía | Clasificación rígida o sesgada | requiere_revision | Revisar con perfiles PH-IT-AT |
| Plantilla MD/JSON | Campos insuficientes o datos sensibles | requiere_revision | Validar metadatos |
| Catálogo de documentos | Invocar documentos obsoletos | requiere_revision | Registrar versión y estado |
| Catálogo de herramientas | Normalizar herramienta riesgosa | requiere_revision | Añadir límites de uso |
| Rúbrica | Evaluar personas sin contexto | requiere_revision | Evaluar evidencias, no identidad |
| App educativa | Exposición de datos o errores funcionales | requiere_revision | Checklist técnico y privacidad |
| Repositorio público | Publicación accidental | requiere_revision | Revisar secretos y datos |
| Prompt | Filtración de datos o instrucciones vagas | requiere_revision | Limitar datos y registrar uso |
| Agente futuro | Automatización prematura | bloqueado | Requiere gobernanza explícita |
| CI/CD futuro | Publicación o ejecución automática riesgosa | bloqueado | Requiere protocolo y pruebas |

---

## 8. Matriz PH-IT-AT de seguridad

| Perfil | Riesgos principales | Controles mínimos |
|---|---|---|
| PH | credenciales, publicación, rutas, código, APIs, automatización, repositorios | revisión de secretos, rutas canónicas, pruebas, bloqueo de agentes |
| IT | datos de investigación, privacidad, consentimiento, evidencia, sesgos, interpretación | anonimización, revisión humana, trazabilidad, ética investigativa |
| AT | representación, accesibilidad, experiencia, lenguaje, mediaciones, datos en recursos visuales | revisión de accesibilidad, sensibilidad cultural, privacidad visual |
| Caleidoscopio | combinación inestable, nivel inflado, lente ausente, seguridad desigual entre perfiles | nivel operativo mínimo, lente latente, curaduría, gate de seguridad |

---

## 9. Seguridad en transferencia reversible

Cada movimiento de conocimiento entre perfiles debe registrar:

```yaml
documento_origen:
perfil_origen:
perfil_destino:
tipo_transferencia:
datos_involucrados:
riesgos:
seguridad:
requiere_revision_humana:
referencia_logica:
bitacora:
proxima_accion:
```

Regla:

```text
La transferencia no es segura si no puede reconstruirse.
```

---

## 10. Seguridad en activaciones caleidoscópicas

Antes de activar un proyecto caleidoscópico, confirmar:

```text
1. problema común definido;
2. perfiles activos declarados;
3. lente latente identificado si aplica;
4. nivel operativo mínimo calculado;
5. datos y privacidad revisados;
6. seguridad de herramientas revisada;
7. documentos invocables vigentes;
8. revisión humana requerida o completada;
9. riesgos registrados;
10. próxima acción definida.
```

Si hay diferencia de nivel entre perfiles:

```text
operar al nivel del perfil activo con menor nivel.
```

---

## 11. Bloqueos vigentes

Quedan bloqueados hasta decisión explícita de gobernanza:

```text
1. AGENTS.md operativo final;
2. SKILLS.md operativo final;
3. CLAUDE.md operativo final;
4. workflows finales automatizados;
5. multiagentes;
6. agentes con acceso a repositorio o datos;
7. CI/CD con publicación automática;
8. evaluación automatizada de usuarios reales;
9. recolección de datos personales sin protocolo;
10. publicación de materiales con datos sensibles.
```

---

## 12. Checklist mínimo antes de publicar o desplegar

| Criterio | Confirmado |
|---|---|
| No contiene datos personales innecesarios | ☐ |
| No contiene secretos, claves o tokens | ☐ |
| Tiene ruta canónica correcta | ☐ |
| Tiene metadatos de seguridad | ☐ |
| Tiene revisión humana | ☐ |
| Tiene versión y estado | ☐ |
| Tiene referencia lógica o deuda registrada | ☐ |
| Tiene licencia o procedencia clara si aplica | ☐ |
| Tiene accesibilidad mínima | ☐ |
| No activa agentes ni workflows no aprobados | ☐ |

---

## 13. Checklist de seguridad para documentos

| Criterio | Confirmado |
|---|---|
| Declara `seguridad` | ☐ |
| Declara `datos_privacidad` | ☐ |
| Declara `requiere_revision_humana` | ☐ |
| Declara documentos relacionados | ☐ |
| Declara deuda de referencias lógicas | ☐ |
| Evita datos sensibles innecesarios | ☐ |
| Evita rutas no canónicas | ☐ |
| Evita duplicaciones físicas editables | ☐ |
| Indica próxima acción | ☐ |

---

## 14. Checklist de seguridad para herramientas

| Criterio | Confirmado |
|---|---|
| Herramienta registrada en catálogo | ☐ |
| Propósito definido | ☐ |
| Nivel N1-N4 definido | ☐ |
| Riesgos descritos | ☐ |
| Datos y privacidad revisados | ☐ |
| Accesos o credenciales revisados | ☐ |
| Uso de IA declarado | ☐ |
| Automatización bloqueada o aprobada | ☐ |
| Revisión humana asignada | ☐ |

---

## 15. Checklist de seguridad para IA y agentes futuros

| Criterio | Confirmado |
|---|---|
| La IA se usa como apoyo, no como autoridad final | ☐ |
| No se comparten datos sensibles innecesarios | ☐ |
| Hay revisión humana | ☐ |
| Las respuestas se validan antes de publicar | ☐ |
| Los prompts no contienen secretos | ☐ |
| No hay agentes con permisos activos sin gobernanza | ☐ |
| No hay workflows finales automáticos sin decisión | ☐ |
| Se documenta propósito, riesgo y salida esperada | ☐ |

---

## 16. Relación con evaluación y auditoría

Este mapa debe conectarse con:

```text
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Seguridad/
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_IA_Agentes/
15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evidencias_Validacion/
15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/
```

La seguridad longitudinal alimenta rúbricas, gates, reportes y evidencias.

---

## 17. Relación con documentación humana

Debe producirse una versión humana simplificada para usuarios N1-N2:

```text
¿Qué datos no debo compartir?
¿Qué debo revisar antes de publicar?
¿Qué significa revisión humana?
¿Qué son secretos o credenciales?
¿Qué puedo usar con IA?
¿Qué no debo automatizar todavía?
¿Qué hago si encuentro un riesgo?
```

---

## 18. Relación con base de datos futura

Este mapa prepara la entidad futura `security_events`.

Campos sugeridos:

```yaml
id_evento_seguridad:
documento:
producto:
proyecto:
perfil:
nivel_usuario:
nivel_proyecto:
nivel_producto:
tipo_riesgo:
datos_privacidad:
estado_seguridad:
requiere_revision_humana:
accion_mitigacion:
responsable:
fecha_revision:
estado:
documentos_relacionados:
referencia_logica:
```

Entidades relacionadas:

```yaml
documents:
tools:
processes:
users:
projects:
products:
profiles:
evidence:
references:
maturity_assessments:
```

---

## 19. Procedimiento mínimo de revisión de seguridad

```text
1. identificar documento, producto o proceso;
2. revisar datos y privacidad;
3. revisar herramienta o IA usada;
4. revisar ruta canónica y publicación;
5. revisar referencias lógicas;
6. clasificar riesgo;
7. asignar estado de seguridad;
8. definir acción de mitigación;
9. registrar evidencia;
10. decidir: proceder, proceder con condiciones, pausar o bloquear.
```

---

## 20. Matriz de decisión

| Condición | Decisión |
|---|---|
| Sin datos sensibles, sin IA, sin publicación externa | Proceder con revisión básica |
| Datos institucionales o de investigación | Proceder con condiciones |
| Datos personales o posible identificación | Pausar y revisar privacidad |
| Secretos, claves o credenciales expuestas | Bloquear y corregir |
| Automatización o agentes sin gobernanza | Bloquear |
| Publicación externa con dudas de seguridad | Pausar |
| Producto N3-N4 sin evidencia de revisión | Proceder solo con condiciones |
| Usuario N1-N2 ante tarea N3-N4 | Añadir andamiaje o reducir alcance |

---

## 21. Deuda generada por este mapa

Esta deuda debe añadirse al canvas activo de deuda, sin exportar nueva versión del registro salvo cierre de bloque o solicitud explícita.

| ID deuda | Documento | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|---|
| RDL-F2-20260605-068 | Mapa de Seguridad Longitudinal v0.1 | Referencia lógica | Importante | Registrar referencia lógica en Enlaces_Espejo | Abierta |
| RDL-F2-20260605-069 | Mapa de Seguridad Longitudinal v0.1 | Bitácora | Importante | Anotar creación en bitácora activa | Abierta |
| RDL-F2-20260605-070 | Mapa de Seguridad Longitudinal v0.1 | Índice | Importante | Actualizar Índice Maestro v0.2 | Abierta |
| RDL-F2-20260605-071 | Mapa de Seguridad Longitudinal v0.1 | Changelog | De cierre | Incluir en changelog de sesión | Abierta |
| DT-F2-20260605-035 | Checklist humano N1-N2 | Deuda técnica | Media | Crear guía simplificada de seguridad para usuarios | Abierta |
| DT-F2-20260605-036 | Registro de eventos de seguridad | Deuda técnica | Media | Crear plantilla futura para security_events | Abierta |
| DT-F2-20260605-037 | Evaluación de seguridad inicial | Deuda técnica | Alta | Aplicar seguridad al bloque documental Fase 2 producido | Abierta |

---

## 22. Próxima acción

Crear:

```text
2026-06-05_Mapa_Expansion_Fase_2_PH_IT_AT_N1_N4_v0_1.md
```

Ruta canónica pendiente de decisión entre:

```text
20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
```

Recomendación inicial: usar `20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/` si el mapa se enfoca en evolución del ecosistema; usar `Bases_Conocimiento/` si será un documento invocable operativo de Fase 2.

---

## 23. Cierre de versión v0.1

```text
Mapa de Seguridad Longitudinal creado.
Ruta canónica ubicada en sub-cartapacio de evaluación de riesgos técnicos.
Ejes de seguridad, datos, privacidad, accesos, secretos, IA, agentes, aplicaciones, APIs, bases de datos y cumplimiento definidos.
Gates N1-N4 establecidos.
Bloqueos de agentes, workflows y automatización final reafirmados.
Checklists mínimos incorporados.
Relación con evaluación, documentación humana y base de datos futura integrada.
Deuda registrada en canvas activo.
Próxima acción: Mapa de Expansión Fase 2 PH-IT-AT N1-N4.
```
