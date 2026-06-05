# Protocolo de Gestión de Términos del Glosario PH-IT-AT v0.1

**Código documental:** 2026-06-05_Protocolo_Gestion_Terminos_Glosario_PH_IT_AT_v0_1  
**ID documento:** F2-BCC-03-003  
**Versión:** v0.1  
**Fecha:** 2026-06-05  
**Estado:** Borrador operativo para validación  
**Tipo de documento:** protocolo  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase:** Fase 2  
**Perfil principal:** comun  
**Perfiles relacionados:** PH, IT, AT, Caleidoscopio  
**Nivel usuario:** todos  
**Nivel proyecto:** todos  
**Nivel producto:** todos  
**Modalidad:** comun, individual, dual, triadica, caleidoscopica  
**Reusabilidad:** comun, metadatos, documentacion_humana, transferencia_reversible, caleidoscopico, seguridad, evaluacion  
**Ruta canónica recomendada:** `05_COMPETENCIAS_Y_PERFILES/Taxonomias/`  
**Referenciado desde:**  
- `2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_1.md`  
- `2026-06-05_Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md`  
- `2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md`  
- `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
**Tipo de espejo:** logico_tipo_1  
**Copia física:** false  
**Estado de transferencia:** reversible_activa  
**Seguridad:** requiere_revision  
**Datos y privacidad:** no_contiene_datos  
**Requiere revisión humana:** si  
**Documentos relacionados:**  
- `2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_1.md`  
- `2026-06-05_Plantilla_Entrada_Glosario_PH_IT_AT_v0_1.md`  
- `2026-06-05_Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md`  
- `Glosario_programacion_200_mouredevpro.pdf`  
**Deuda de referencias lógicas:** registrar_enlaces_espejo, actualizar_indice_maestro, anotar_bitacora, incluir_changelog  
**Próxima acción:** validar plantilla de entrada y actualizar glosario centralizado a v0.2

---

## 0. Propósito

Este protocolo establece cómo añadir, modificar, fusionar, deprecar, validar y organizar términos en el **Glosario Centralizado PH-IT-AT** sin crear caos documental, duplicaciones, contradicciones o pérdida de trazabilidad.

El glosario debe funcionar como lenguaje común del ecosistema, no como una lista plana de definiciones. Cada término debe poder dialogar con:

```text
1. la Base de Conocimiento Común;
2. el Programador Humanista;
3. el Investigador Transdisciplinario;
4. el Artista Transdisciplinario;
5. el Caleidoscopio;
6. los niveles N1-N4;
7. la taxonomía operativa investigativa;
8. la seguridad longitudinal;
9. la documentación humana;
10. la futura base de datos.
```

---

## 1. Principio rector

```text
La taxonomía clasifica.
El glosario define.
La plantilla estandariza.
Los metadatos registran.
El índice orienta.
La referencia lógica invoca.
La bitácora conserva memoria.
```

Un término nuevo no debe añadirse solo porque aparece en una conversación. Debe añadirse cuando mejora comprensión, operación, transferencia, evaluación, seguridad o reutilización.

---

## 2. Tipos de términos

Cada término debe clasificarse por procedencia.

| Tipo | Descripción | Ejemplo |
|---|---|---|
| `tecnico_importado` | Término proveniente de vocabularios técnicos externos | API, JSON, Git, Testing |
| `tecnico_adaptado` | Término técnico reinterpretado para PH-IT-AT | Repositorio, Pipeline, Framework |
| `conceptual_propio` | Término propio del Framework o del ecosistema | Transferencia Simétrica, Lente Latente |
| `operativo_propio` | Término usado para operar el repositorio o la Fase 2 | Ruta Canónica, Referencia Lógica |
| `metodologico` | Término de método, investigación o diseño | Curaduría Transdisciplinaria |
| `pedagogico` | Término de aprendizaje, andamiaje o niveles | N1, N2, Andamiaje |
| `seguridad` | Término vinculado con datos, riesgo, privacidad, IA o automatización | Seguridad Longitudinal |
| `caleidoscopico` | Término usado en combinaciones dinámicas PH-IT-AT | Nivel Operativo Caleidoscópico |

---

## 3. Cuándo añadir un término

Añadir un término cuando cumpla al menos una de estas condiciones:

```text
1. aparece de forma recurrente en productos de Fase 2;
2. es necesario para entender decisiones de gobernanza;
3. distingue conocimiento común de conocimiento específico;
4. afecta transferencia simétrica PH-IT-AT;
5. ayuda a operar el caleidoscopio;
6. reduce ambigüedad para usuarios N1-N4;
7. mejora seguridad, privacidad o revisión humana;
8. será usado en metadatos, taxonomía, rúbricas o catálogos;
9. será invocado por documentación humana;
10. permite estudiar evolución del conocimiento.
```

---

## 4. Cuándo no añadir un término

No añadir un término cuando:

```text
1. solo aparece una vez y no tiene función operativa;
2. es sinónimo menor de un término ya existente;
3. puede resolverse con una nota dentro de una entrada existente;
4. pertenece a un contexto externo no central al proyecto;
5. crea jerga innecesaria para usuarios N1;
6. duplica un término sin aportar distinción;
7. todavía no se entiende su uso;
8. no puede ubicarse en la taxonomía;
9. introduce riesgo de confusión sin necesidad;
10. es una ocurrencia temporal de sesión sin estabilidad.
```

En esos casos, registrar en bitácora o nota de revisión, no en el glosario estable.

---

## 5. Estados de un término

| Estado | Uso |
|---|---|
| `propuesto` | El término se propone, pero no está aprobado. |
| `en_revision` | Requiere ajuste conceptual, técnico, ético o pedagógico. |
| `activo` | Puede usarse como término vigente. |
| `validado` | Revisado y aceptado como estable. |
| `fusionado` | Se integró con otro término preferido. |
| `deprecado` | Ya no se recomienda, pero se conserva por trazabilidad. |
| `bloqueado` | No debe usarse hasta nueva decisión. |

---

## 6. Flujo de gestión de términos

```text
necesidad o aparición del término
→ registrar propuesta
→ verificar duplicados
→ clasificar tipo de término
→ redactar definición común
→ redactar usos PH, IT y AT
→ evaluar activación caleidoscópica
→ asignar nivel inicial N1-N4
→ clasificar con taxonomía
→ revisar riesgos de mal uso
→ registrar fuente o procedencia
→ validar estado
→ insertar en glosario
→ actualizar índice, referencia lógica y bitácora si aplica
```

---

## 7. Reglas para definiciones

Cada definición debe ser:

```text
1. clara para usuarios N1;
2. útil para usuarios N2-N4;
3. suficientemente precisa para documentación técnica;
4. suficientemente flexible para uso transdisciplinario;
5. no dependiente de un único perfil;
6. acompañada de usos diferenciados PH, IT y AT cuando aplique;
7. conectada a seguridad si hay riesgo;
8. conectada a ejemplos cuando sea necesario.
```

---

## 8. Reglas para sinónimos y términos relacionados

Si dos términos se parecen, decidir una de estas opciones:

| Decisión | Uso |
|---|---|
| `termino_preferido` | Término oficial usado en documentos. |
| `sinonimo` | Variante aceptada que redirige al término preferido. |
| `termino_relacionado` | No es equivalente, pero debe enlazarse. |
| `fusionado_con` | Término absorbido por otro. |
| `diferenciar` | Se mantienen ambos con distinción explícita. |

Ejemplo:

```text
Espejo Lógico no es igual a Copia Física.
Debe mantenerse la diferencia.
```

---

## 9. Regla de procedencia y fuentes

Cada término debe indicar su procedencia:

```text
1. fuente externa;
2. conversación de trabajo;
3. documento rector;
4. protocolo;
5. práctica operativa;
6. término propio del Framework;
7. término técnico adaptado;
8. término emergente de Fases 3-6.
```

Si el término proviene del glosario de programación usado como base, marcar:

```yaml
fuente_origen: Glosario_programacion_200_mouredevpro.pdf
tipo_termino: tecnico_importado
```

Si fue redefinido para PH-IT-AT, marcar:

```yaml
tipo_termino: tecnico_adaptado
```

---

## 10. Relación con los 200 términos técnicos base

Los términos técnicos base se usarán como inventario semilla, no como autoridad única del glosario PH-IT-AT.

Reglas:

```text
1. No copiar definiciones extensas de la fuente base.
2. Reformular definiciones para el ecosistema PH-IT-AT.
3. Añadir uso PH, IT, AT y caleidoscópico cuando aplique.
4. Marcar fuente de procedencia.
5. Diferenciar término técnico importado de término técnico adaptado.
6. Priorizar términos útiles para Fase 2 y niveles N1-N4.
```

---

## 11. Reglas para términos propios del proyecto

Los términos propios del proyecto deben recibir prioridad si son necesarios para operar la Fase 2.

Núcleo inicial recomendado:

```text
Base de Conocimiento Común
Base de Conocimiento Específica
Caleidoscopio
Lente Caleidoscópico
Lente Latente
Transferencia Simétrica
Transferencia Reversible
Bitácora de Transferencia
Documentación Activa
Archivo Canónico
Ruta Canónica
Referencia Lógica
Espejo Lógico
Copia Física
Deuda de Referencias Lógicas
Deuda Técnica
Cartapacio
Mapa Estructural Auditado
Índice Maestro
Registro de Organización de Cartapacios
Metadatos
Taxonomía Operativa Investigativa
Documento Invocable
Reusabilidad Transversal
Seguridad Longitudinal
Revisión Humana
Andamiaje
Nivel N1
Nivel N2
Nivel N3
Nivel N4
Nivel Operativo Caleidoscópico
Perfil Piloto
Perfil Simétrico
Curaduría Transdisciplinaria
```

---

## 12. Criterios de validación de una entrada

Antes de validar una entrada, confirmar:

| Criterio | Confirmación |
|---|---|
| Tiene término preferido | ☐ |
| Tiene definición común | ☐ |
| Tiene tipo de término | ☐ |
| Tiene uso PH, IT y AT o justificación de no aplicación | ☐ |
| Tiene nivel inicial | ☐ |
| Tiene clasificación taxonómica | ☐ |
| Tiene reusabilidad | ☐ |
| Tiene seguridad | ☐ |
| Tiene riesgo de mal uso | ☐ |
| Tiene fuente o procedencia | ☐ |
| Tiene estado | ☐ |
| Tiene documentos relacionados | ☐ |

---

## 13. Control de versiones del glosario

No crear nueva versión del glosario por cada término.

Crear nueva versión formal cuando:

```text
1. se completa un lote de términos;
2. se valida un núcleo conceptual-operativo;
3. se corrige una ambigüedad importante;
4. se agrega una familia completa de términos;
5. se cierra un bloque de trabajo;
6. se necesita sincronizar repositorio;
7. el usuario solicita exportación formal.
```

Durante la sesión, usar un registro o canvas activo de términos propuestos.

---

## 14. Lotes de expansión recomendados

| Lote | Contenido | Prioridad |
|---|---|---|
| Lote A | Núcleo conceptual-operativo del Framework | Alta |
| Lote B | Términos técnicos esenciales para PH | Alta |
| Lote C | Términos de investigación y evidencia para IT | Alta |
| Lote D | Términos de mediación, experiencia y narrativa para AT | Alta |
| Lote E | Términos de caleidoscopio y combinaciones dinámicas | Alta |
| Lote F | Seguridad, privacidad, datos, IA y agentes | Alta |
| Lote G | Metadatos, JSON, bases de datos y repositorios | Media |
| Lote H | Evaluación, rúbricas, evidencias y madurez | Media |
| Lote I | Documentación humana y accesibilidad | Media |
| Lote J | Términos técnicos ampliados del inventario base | Media |

---

## 15. Relación con documentación humana

Toda entrada debe poder convertirse en lenguaje humano accesible.

Si un término es muy técnico, debe incluir:

```text
1. definición breve;
2. ejemplo cotidiano o educativo;
3. uso en el proyecto;
4. advertencia de mal uso;
5. nivel inicial recomendado.
```

---

## 16. Relación con seguridad

Por defecto, marcar como `requiere_revision` los términos relacionados con:

```text
1. datos personales;
2. privacidad;
3. APIs;
4. credenciales;
5. automatización;
6. agentes;
7. seguridad técnica;
8. evaluación de usuarios;
9. investigación con participantes;
10. toma de decisiones asistida por IA.
```

---

## 17. Relación con base de datos futura

Cada término debe poder convertirse en una entidad `concept`.

Campos sugeridos:

```yaml
id_termino:
termino_preferido:
sinonimos:
tipo_termino:
definicion_comun:
uso_PH:
uso_IT:
uso_AT:
activacion_caleidoscopica:
nivel_inicial:
taxonomia:
reusabilidad:
seguridad:
riesgo_mal_uso:
fuente_origen:
documentos_relacionados:
estado:
fecha_creacion:
fecha_revision:
```

---

## 18. Deuda generada por este protocolo

Esta deuda debe añadirse al canvas activo de deuda, sin exportar nueva versión del registro salvo cierre de bloque o solicitud explícita.

| ID deuda | Documento | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|---|
| RDL-F2-20260605-036 | Protocolo de Gestión de Términos v0.1 | Referencia lógica | Importante | Registrar referencia lógica en Enlaces_Espejo | Abierta |
| RDL-F2-20260605-037 | Protocolo de Gestión de Términos v0.1 | Bitácora | Importante | Anotar creación en bitácora activa | Abierta |
| RDL-F2-20260605-038 | Protocolo de Gestión de Términos v0.1 | Índice | Importante | Actualizar Índice Maestro v0.2 | Abierta |
| RDL-F2-20260605-039 | Protocolo de Gestión de Términos v0.1 | Changelog | De cierre | Incluir en changelog de sesión | Abierta |
| DT-F2-20260605-016 | Glosario Centralizado v0.2 | Deuda técnica | Alta | Añadir núcleo conceptual-operativo mínimo | Abierta |

---

## 19. Próxima acción

Validar y usar junto con:

```text
2026-06-05_Plantilla_Entrada_Glosario_PH_IT_AT_v0_1.md
```

Luego crear:

```text
2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_2.md
```

---

## 20. Cierre de versión v0.1

```text
Protocolo de gestión de términos creado.
Reglas para añadir, fusionar, deprecar y validar términos establecidas.
Diferencia entre términos técnicos importados, técnicos adaptados y propios del Framework definida.
Control de versiones del glosario establecido.
Base para actualizar Glosario Centralizado a v0.2 preparada.
```
