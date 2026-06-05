# Rúbrica de Madurez N1-N4 — Proyecto, Producto y Usuario v0.1

**Código documental:** 2026-06-05_Rubrica_Madurez_N1_N4_Proyecto_Producto_Usuario_v0_1  
**ID documento:** F2-BCC-05-002  
**Versión:** v0.1  
**Fecha:** 2026-06-05  
**Estado:** Borrador operativo para validación  
**Tipo de documento:** rubrica  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase:** Fase 2  
**Perfil principal:** comun  
**Perfiles relacionados:** PH, IT, AT, Caleidoscopio  
**Nivel usuario:** todos  
**Nivel proyecto:** todos  
**Nivel producto:** todos  
**Modalidad:** comun, individual, dual, triadica, caleidoscopica  
**Reusabilidad:** comun, evaluacion, transferencia_reversible, caleidoscopico, seguridad, documentacion_humana, metadatos  
**Ruta canónica recomendada:** `15_EVALUACION_CALIDAD_Y_AUDITORIA/Rubricas_N3_N4/`  
**Referenciado desde:**  
- `15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/`  
- `15_EVALUACION_CALIDAD_Y_AUDITORIA/Evidencias_Validacion/`  
- `15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/`  
- `2026-06-05_Rubrica_Sistemica_Holistica_Base_Conocimiento_PH_IT_AT_v0_2.md`  
- `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md`  
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
- `2026-06-05_Rubrica_Sistemica_Holistica_Base_Conocimiento_PH_IT_AT_v0_2.md`  
- `2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md`  
- `2026-06-05_Plantilla_Minima_Metadatos_MD_JSON_PH_IT_AT_v0_1.md`  
- `2026-06-05_Catalogo_Basico_Documentos_Invocables_PH_IT_AT_v0_1.md`  
- `2026-06-05_Catalogo_Basico_Metodologias_PH_IT_AT_v0_1.md`  
- `2026-06-05_Catalogo_Basico_Herramientas_Procesos_PH_IT_AT_v0_1.md`  
**Deuda de referencias lógicas:** registrar_enlaces_espejo, actualizar_indice_maestro, anotar_bitacora, incluir_changelog  
**Próxima acción:** crear `Mapa_Seguridad_Longitudinal_Fase_2_PH_IT_AT_v0_1.md`

---

## 0. Propósito

Esta rúbrica permite evaluar la madurez diferenciada de **usuario**, **proyecto** y **producto** en los niveles N1-N4 dentro del ecosistema PH-IT-AT-Caleidoscopio.

La rúbrica responde a una necesidad clave de la Fase 2:

```text
No basta saber si un documento o producto existe.
Hay que saber si el usuario puede sostenerlo,
si el proyecto tiene madurez suficiente,
y si el producto evidencia el nivel declarado.
```

Evalúa tres planos complementarios:

```text
1. Usuario: competencias, autonomía, juicio, documentación y seguridad.
2. Proyecto: alcance, complejidad, gobernanza, trazabilidad y sostenibilidad.
3. Producto: funcionalidad, evidencia, calidad, documentación y madurez técnica/humana.
```

---

## 1. Principio rector

```text
El nivel de madurez no se declara por aspiración.
Se evidencia por competencias, productos, trazabilidad, seguridad y capacidad de transferencia.
```

---

## 2. Regla de separación de niveles

Los niveles deben evaluarse por separado:

```yaml
nivel_usuario:
nivel_proyecto:
nivel_producto:
```

Un usuario puede estar en N2, un proyecto en N3 y un producto en N1. La madurez del conjunto no debe inflarse artificialmente.

---

## 3. Regla caleidoscópica de nivel mínimo

En proyectos con más de un perfil activo:

```text
Nivel operativo caleidoscópico = menor nivel entre los perfiles activos.
```

Ejemplo:

```text
PH = N3
IT = N2
AT = N4

Nivel operativo del proyecto triádico = N2
```

Esta regla protege la transferencia simétrica y evita que un perfil avanzado empuje al sistema más allá del andamiaje real de los demás.

---

## 4. Definición general de niveles N1-N4

| Nivel | Nombre operativo | Descripción general |
|---|---|---|
| N1 | Exploración guiada | Comprende, identifica, usa ejemplos, produce artefactos mínimos con apoyo. |
| N2 | Producción asistida | Usa plantillas, registra metadatos, produce documentos o productos funcionales básicos. |
| N3 | Integración avanzada | Integra métodos, herramientas, evidencias, evaluación, trazabilidad y seguridad. |
| N4 | Gobernanza sostenible | Diseña, audita, mantiene, escala y prepara automatización o ecosistemas complejos con gobernanza. |

---

## 5. Dimensiones de madurez

La rúbrica evalúa 10 dimensiones:

```text
A. Comprensión conceptual
B. Competencia operativa
C. Documentación y trazabilidad
D. Uso de metadatos, taxonomía e indexación
E. Calidad del producto
F. Evidencia y validación
G. Seguridad, privacidad y revisión humana
H. Transferencia PH-IT-AT
I. Invocación caleidoscópica
J. Sostenibilidad y evolución
```

---

## 6. Matriz de madurez del usuario

### N1 — Usuario en exploración guiada

| Dimensión | Evidencia mínima |
|---|---|
| Comprensión conceptual | Puede explicar el propósito básico del Framework, el perfil activo y el producto que intenta crear. |
| Competencia operativa | Sigue instrucciones paso a paso con apoyo. |
| Documentación | Usa una plantilla o bitácora simple. |
| Metadatos | Reconoce campos básicos como título, versión, ruta y estado. |
| Calidad | Produce un artefacto inicial comprensible. |
| Evidencia | Presenta reflexión breve o checklist básico. |
| Seguridad | Identifica si hay datos sensibles o necesidad de revisión. |
| Transferencia | Reconoce que PH, IT y AT tienen funciones distintas. |
| Caleidoscopio | Comprende que un problema puede mirarse desde varios lentes. |
| Sostenibilidad | Puede guardar, nombrar y ubicar su archivo con ayuda. |

### N2 — Usuario en producción asistida

| Dimensión | Evidencia mínima |
|---|---|
| Comprensión conceptual | Distingue conocimiento común, específico, ruta canónica y referencia lógica. |
| Competencia operativa | Usa plantillas, catálogos y registros con apoyo moderado. |
| Documentación | Produce documentos con metadatos mínimos. |
| Metadatos | Completa campos obligatorios y registra deuda de referencias. |
| Calidad | Produce un producto funcional básico o documento reusable. |
| Evidencia | Incluye checklist, bitácora o justificación de decisiones. |
| Seguridad | Marca seguridad, datos y revisión humana. |
| Transferencia | Identifica cómo su producto puede transferirse a otro perfil. |
| Caleidoscopio | Usa lente latente o matriz simple PH-IT-AT. |
| Sostenibilidad | Puede actualizar una versión y explicar cambios. |

### N3 — Usuario en integración avanzada

| Dimensión | Evidencia mínima |
|---|---|
| Comprensión conceptual | Integra sistema, perfiles, niveles, seguridad y evidencia. |
| Competencia operativa | Combina herramientas, metodologías y catálogos. |
| Documentación | Mantiene trazabilidad entre producto, fuentes, metadatos y decisiones. |
| Metadatos | Usa taxonomía, reusabilidad, niveles y referencias lógicas. |
| Calidad | Produce artefactos compuestos, evaluables y transferibles. |
| Evidencia | Usa rúbricas, validación, pruebas o instrumentos. |
| Seguridad | Aplica revisión de riesgos, privacidad, IA o automatización. |
| Transferencia | Documenta transferencia reversible entre perfiles. |
| Caleidoscopio | Activa combinaciones duales o triádicas con nivel operativo mínimo. |
| Sostenibilidad | Puede preparar mejoras, archivo, versión y continuidad. |

### N4 — Usuario en gobernanza sostenible

| Dimensión | Evidencia mínima |
|---|---|
| Comprensión conceptual | Gobierna relaciones entre conocimiento, perfiles, seguridad, datos, automatización y evolución. |
| Competencia operativa | Diseña ecosistemas, protocolos, auditorías y flujos complejos. |
| Documentación | Mantiene sistemas documentales auditables y transferibles. |
| Metadatos | Prepara interoperabilidad con JSON, bases de datos, tableros o agentes futuros. |
| Calidad | Produce sistemas robustos, resilientes, sostenibles y flexibles. |
| Evidencia | Define instrumentos, indicadores, gates y reportes. |
| Seguridad | Integra seguridad longitudinal y gobernanza de IA/agentes. |
| Transferencia | Administra transferencia simétrica y reversible entre perfiles. |
| Caleidoscopio | Gobierna activaciones caleidoscópicas complejas. |
| Sostenibilidad | Diseña mantenimiento, escalamiento, archivo, pruebas y automatización gobernada. |

---

## 7. Matriz de madurez del proyecto

### N1 — Proyecto exploratorio

| Criterio | Evidencia mínima |
|---|---|
| Alcance | Problema o necesidad inicial claramente expresada. |
| Producto esperado | Artefacto mínimo o ficha inicial. |
| Documentación | Nota de intención o bitácora simple. |
| Perfil | Perfil principal identificado. |
| Nivel | Nivel del usuario y producto declarado. |
| Seguridad | Riesgos básicos revisados. |
| Transferencia | Posible relación con otros perfiles indicada. |

### N2 — Proyecto asistido

| Criterio | Evidencia mínima |
|---|---|
| Alcance | Problema delimitado y propósito operativo. |
| Producto esperado | Documento, prototipo o recurso funcional básico. |
| Documentación | Metadatos, ruta canónica y deuda registrada. |
| Perfil | Perfil principal y relacionados identificados. |
| Nivel | Usuario, proyecto y producto diferenciados. |
| Seguridad | Datos, privacidad y revisión humana declarados. |
| Transferencia | Transferencia potencial documentada. |

### N3 — Proyecto integrado

| Criterio | Evidencia mínima |
|---|---|
| Alcance | Problema, método, producto, evaluación y seguridad conectados. |
| Producto esperado | Producto compuesto o ecosistema parcial. |
| Documentación | Índice, catálogos, bitácora, evidencia y rúbrica conectados. |
| Perfil | Combinación de perfiles explícita. |
| Nivel | Nivel operativo mínimo aplicado si hay combinación. |
| Seguridad | Riesgos, datos, IA y revisión evaluados. |
| Transferencia | Transferencia reversible activa. |

### N4 — Proyecto gobernado

| Criterio | Evidencia mínima |
|---|---|
| Alcance | Ecosistema o proyecto complejo con gobernanza. |
| Producto esperado | Sistema robusto, auditable, sostenible o escalable. |
| Documentación | Protocolos, auditoría, seguridad, mantenimiento y archivo definidos. |
| Perfil | PH-IT-AT integrados con roles, límites y responsabilidades. |
| Nivel | Madurez diferenciada monitoreada por usuario, proyecto y producto. |
| Seguridad | Seguridad longitudinal implementada. |
| Transferencia | Transferencia simétrica y reversible validada. |

---

## 8. Matriz de madurez del producto

### N1 — Producto mínimo comprensible

| Criterio | Evidencia mínima |
|---|---|
| Función | Cumple una función simple y clara. |
| Forma | Se entiende qué es y cómo usarlo. |
| Documentación | Tiene título, versión, fecha y propósito. |
| Calidad | Es usable como borrador o ejemplo. |
| Seguridad | No expone datos sensibles o marca revisión. |
| Transferencia | Puede explicarse a otro perfil. |

### N2 — Producto funcional asistido

| Criterio | Evidencia mínima |
|---|---|
| Función | Cumple una tarea básica de manera consistente. |
| Forma | Usa plantilla, estructura o guía. |
| Documentación | Tiene metadatos mínimos y ruta canónica. |
| Calidad | Puede ser reutilizado con revisión. |
| Seguridad | Declara seguridad, datos y revisión humana. |
| Transferencia | Tiene reusabilidad y perfil relacionado. |

### N3 — Producto integrado y evaluable

| Criterio | Evidencia mínima |
|---|---|
| Función | Integra varias funciones, documentos o procesos. |
| Forma | Es navegable, evaluable y documentado. |
| Documentación | Tiene referencias lógicas, evidencias y bitácora. |
| Calidad | Puede evaluarse con rúbrica. |
| Seguridad | Aplica controles o revisión de riesgos. |
| Transferencia | Alimenta base común o específica con trazabilidad. |

### N4 — Producto sostenible y gobernable

| Criterio | Evidencia mínima |
|---|---|
| Función | Opera como componente de ecosistema. |
| Forma | Es robusto, mantenible, escalable y auditable. |
| Documentación | Tiene protocolos, pruebas, archivo y mantenimiento. |
| Calidad | Puede sostener uso prolongado o institucional. |
| Seguridad | Integra seguridad longitudinal y gobernanza. |
| Transferencia | Puede invocarse, adaptarse y auditarse por perfiles y proyectos. |

---

## 9. Hoja de puntuación triple

| Dimensión | Usuario N1-N4 | Proyecto N1-N4 | Producto N1-N4 | Evidencia | Acción |
|---|---|---|---|---|---|
| Comprensión conceptual |  |  |  |  |  |
| Competencia operativa |  |  |  |  |  |
| Documentación y trazabilidad |  |  |  |  |  |
| Metadatos e indexación |  |  |  |  |  |
| Calidad del producto |  |  |  |  |  |
| Evidencia y validación |  |  |  |  |  |
| Seguridad y revisión humana |  |  |  |  |  |
| Transferencia PH-IT-AT |  |  |  |  |  |
| Invocación caleidoscópica |  |  |  |  |  |
| Sostenibilidad y evolución |  |  |  |  |  |

---

## 10. Interpretación de desalineaciones

| Caso | Interpretación | Acción sugerida |
|---|---|---|
| Usuario N1, proyecto N3, producto N3 | El proyecto exige más que el usuario puede sostener | Añadir andamiaje, mentoría o reducir alcance |
| Usuario N3, proyecto N1, producto N1 | El usuario puede más que el proyecto actual | Usar como práctica o subir complejidad con cuidado |
| Usuario N2, proyecto N2, producto N1 | Hay intención funcional, pero producto inmaduro | Mejorar producto con plantilla y validación |
| Usuario N4, proyecto N3, producto N2 | Gobernanza posible, pero producto aún no sostiene nivel alto | Fortalecer producto antes de escalar |
| Perfiles activos con niveles distintos | El nivel operativo se define por el menor nivel | Aplicar regla caleidoscópica de nivel mínimo |

---

## 11. Gates mínimos por nivel

### Gate N1

```text
1. propósito claro;
2. producto mínimo;
3. ubicación o ruta sugerida;
4. revisión básica de seguridad;
5. próxima acción.
```

### Gate N2

```text
1. metadatos mínimos;
2. plantilla usada;
3. ruta canónica recomendada;
4. deuda registrada;
5. seguridad declarada;
6. evidencia básica.
```

### Gate N3

```text
1. referencias lógicas;
2. evaluación con rúbrica;
3. evidencia trazable;
4. transferencia reversible;
5. revisión de seguridad;
6. documentación humana inicial.
```

### Gate N4

```text
1. gobernanza;
2. auditoría;
3. mantenimiento;
4. seguridad longitudinal;
5. preparación para datos, automatización o agentes;
6. archivo y sostenibilidad.
```

---

## 12. Uso en proyectos caleidoscópicos

Para cada perfil activo, registrar:

| Perfil | Nivel usuario | Nivel de contribución | Evidencia | Riesgo | Acción |
|---|---|---|---|---|---|
| PH |  |  |  |  |  |
| IT |  |  |  |  |  |
| AT |  |  |  |  |  |

Luego determinar:

```text
Nivel operativo caleidoscópico = menor nivel demostrado entre perfiles activos.
```

Si un perfil queda como lente latente, registrar:

```text
Perfil latente:
Pregunta crítica:
Documento invocado:
Impacto esperado:
```

---

## 13. Uso por tipo de usuario

| Usuario | Cómo usar la rúbrica |
|---|---|
| N1 | Para saber qué necesita entender y producir como evidencia mínima. |
| N2 | Para revisar si su producto tiene plantilla, metadatos, ruta y seguridad. |
| N3 | Para integrar evaluación, transferencia y evidencia. |
| N4 | Para gobernar proyectos, productos, datos, seguridad y evolución. |
| Docente o mentor | Para orientar andamiaje y no sobreexigir niveles. |
| Investigador | Para estudiar progresión, evidencia y madurez. |
| Curador documental | Para decidir si un producto entra a base común, específica o archivo. |

---

## 14. Plantilla breve de informe de madurez

```markdown
# Informe de Madurez N1-N4

**Fecha:**  
**Evaluador/a:**  
**Usuario o equipo:**  
**Proyecto:**  
**Producto:**  
**Perfiles activos:**  
**Perfil latente si aplica:**  

## Niveles declarados

| Plano | Nivel declarado | Evidencia |
|---|---|---|
| Usuario |  |  |
| Proyecto |  |  |
| Producto |  |  |

## Niveles validados

| Plano | Nivel validado | Justificación |
|---|---|---|
| Usuario |  |  |
| Proyecto |  |  |
| Producto |  |  |

## Nivel operativo caleidoscópico

**Nivel:**  
**Razón:**  

## Fortalezas

1. 
2. 
3. 

## Brechas

1. 
2. 
3. 

## Riesgos de seguridad

1. 
2. 
3. 

## Acciones recomendadas

| Acción | Prioridad | Responsable | Momento |
|---|---|---|---|

## Decisión

[Proceder | Proceder con condiciones | Reducir nivel | Añadir andamiaje | Pausar | Bloquear]
```

---

## 15. Relación con seguimiento futuro de usuarios

Esta rúbrica prepara una futura base de datos de progreso, pero no la activa todavía.

Entidades futuras posibles:

```yaml
users:
projects:
products:
profiles:
competencies:
evidence:
maturity_assessments:
learning_paths:
security_events:
```

Campos mínimos futuros:

```yaml
id_usuario:
id_proyecto:
id_producto:
perfil:
nivel_declarado:
nivel_validado:
evidencia:
fecha_evaluacion:
evaluador:
acciones_recomendadas:
estado_seguridad:
proxima_meta:
```

---

## 16. Seguridad y privacidad

Si esta rúbrica se usa para evaluar usuarios reales, aplicar cuidado especial.

Reglas:

```text
1. No registrar datos personales innecesarios.
2. No publicar evaluaciones individuales sin consentimiento o política aplicable.
3. No usar resultados para decisiones sensibles sin revisión humana.
4. No automatizar perfiles de usuario sin gobernanza explícita.
5. No convertir niveles en etiquetas fijas de identidad.
6. Evaluar productos y evidencias, no valor personal del usuario.
```

---

## 17. Relación con documentación humana

Esta rúbrica requiere una versión simplificada para usuarios N1-N2.

Versión humana futura recomendada:

```text
¿Qué nivel tengo ahora?
¿Qué puedo hacer en este nivel?
¿Qué evidencia necesito?
¿Qué puedo intentar después?
¿Qué apoyo debo pedir?
¿Qué riesgos debo revisar?
```

---

## 18. Deuda generada por esta rúbrica

Esta deuda debe añadirse al canvas activo de deuda, sin exportar nueva versión del registro salvo cierre de bloque o solicitud explícita.

| ID deuda | Documento | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|---|
| RDL-F2-20260605-064 | Rúbrica de Madurez N1-N4 v0.1 | Referencia lógica | Importante | Registrar referencia lógica en Enlaces_Espejo | Abierta |
| RDL-F2-20260605-065 | Rúbrica de Madurez N1-N4 v0.1 | Bitácora | Importante | Anotar creación en bitácora activa | Abierta |
| RDL-F2-20260605-066 | Rúbrica de Madurez N1-N4 v0.1 | Índice | Importante | Actualizar Índice Maestro v0.2 | Abierta |
| RDL-F2-20260605-067 | Rúbrica de Madurez N1-N4 v0.1 | Changelog | De cierre | Incluir en changelog de sesión | Abierta |
| DT-F2-20260605-032 | Versión simplificada N1-N2 | Deuda técnica | Media | Crear versión humana de autoevaluación | Abierta |
| DT-F2-20260605-033 | Instrumento JSON de madurez | Deuda técnica | Media | Preparar estructura para seguimiento futuro | Abierta |
| DT-F2-20260605-034 | Piloto de aplicación | Deuda técnica | Media | Aplicar rúbrica a un producto o proyecto piloto | Abierta |

---

## 19. Próxima acción

Crear:

```text
2026-06-05_Mapa_Seguridad_Longitudinal_Fase_2_PH_IT_AT_v0_1.md
```

Ruta canónica recomendada:

```text
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
```

Pendiente verificar sub-cartapacio más específico antes de producir el archivo.

---

## 20. Cierre de versión v0.1

```text
Rúbrica de Madurez N1-N4 creada.
Evaluación diferenciada usuario-proyecto-producto definida.
Regla de nivel operativo caleidoscópico incorporada.
Matrices N1-N4 para usuario, proyecto y producto establecidas.
Gates mínimos por nivel incluidos.
Seguridad y privacidad para seguimiento de usuarios integradas.
Deuda registrada en canvas activo.
Próxima acción: Mapa de Seguridad Longitudinal.
```
