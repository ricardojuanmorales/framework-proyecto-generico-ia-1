# PMC-02/03/04 · Patrimonio operativo exhaustivo y fichas universales
**Aplicación:** cualquier asistente, sin imponer número máximo ni predominio de una disciplina.

## A. Taxonomía orientadora, no restrictiva

| Prefijo | Clase | Pregunta principal | Ejemplo **solo ilustrativo** |
|---|---|---|---|
| `CAP` | Capacidad | ¿Qué función puede ofrecer? | Guiar el diseño de una actividad |
| `DES` | Destreza | ¿Qué manera especializada de actuar aplica? | Ajustar actividades a un contexto |
| `SK` | Skill conceptual candidata | ¿Qué núcleo procedimental podría reutilizarse? | Preparar una rúbrica guiada |
| `MET` | Método | ¿Qué técnica ejecuta? | Comparación razonada |
| `MTO` | Metodología | ¿Qué marco organiza métodos y criterios? | Diseño iterativo contextualizado |
| `PRO` | Protocolo | ¿Qué reglas y decisiones recurrentes observa? | Revisión de privacidad antes de compartir |
| `PRC` | Procedimiento | ¿Cuál es la secuencia operativa? | Recibir, analizar, producir, revisar |
| `FLU` | Flujo de trabajo | ¿Cómo se coordinan etapas, actores y productos? | Cocreación y revisión humana |
| `INS` | Instrumento/recurso | ¿Con qué soporte opera? | Plantilla de ficha o rúbrica |
| `PRD` | Producto/entregable | ¿Qué resultado deja? | Plan de trabajo documentado |

**Importante:** lo ilustrativo NO es afirmación sobre Simplicio ni cualquier GPT concreto. Una etiqueta no se crea por obligación; si la clase no aplica o es desconocida, registrarlo con justificación. Si un procedimiento también se considera skill candidata, crear dos IDs **con vínculo de derivación**, no copiar la ficha completa dos veces.

## B. Estructura de `PMC-02_INVENTARIO_PATRIMONIO.md`

### Encabezado
`Asistente` · `Fecha` · `Versión` · `Alcance y fuentes realmente accesibles` · `Estado CANDIDATO`.

### Matriz por clase

| ID | Nombre distintivo | Función o finalidad | Soporte/certeza | Ficha | IDs relacionados |
|---|---|---|---|---|---|
| `CAP-001` | `[nombre]` | `[qué hace]` | `[AUTODESCRIPCION / F-...]` | `PMC-03#CAP-001` | `[DES-001 / PRD-001]` |
| `DES-001` | `[nombre]` | `[cómo lo hace]` | `[estado]` | `PMC-03#DES-001` | `[CAP-001 / PRC-001]` |

Mantener una secuencia estable para cada clase y contar las entradas. No inventar filas para completar la matriz. Cuando aparezca un nuevo elemento después, añadir ID y registrar revisión; no renumerar retrospectivamente sin motivo.

### Matriz de cobertura

| Clase | N.º identificado | N.º con ficha | Acceso/estado | Vacíos y razón |
|---|---:|---:|---|---|
| CAP | [n] | [n] | [accesible/parcial] | [...] |
| DES | [n] | [n] | [...] | [...] |
| SK | [n] | [n] | [...] | [...] |
| MET | [n] | [n] | [...] | [...] |
| MTO | [n] | [n] | [...] | [...] |
| PRO | [n] | [n] | [...] | [...] |
| PRC | [n] | [n] | [...] | [...] |
| FLU | [n] | [n] | [...] | [...] |
| INS | [n] | [n] | [...] | [...] |
| PRD | [n] | [n] | [...] | [...] |

**Conciliación:** todo ID de inventario debe aparecer en PMC-03; las diferencias son pendientes explícitos, no se ocultan.

## C. Ficha conceptual universal `PMC-03`, una por CADA ID

### `[PREFIJO-000] · [Nombre funcional propio]`

1. **Identificación:** `ID`, nombre, sinónimos, clase y contexto.
2. **Caracterización / singularidad:** qué es, en qué se diferencia de otros elementos y cuál es su alcance.
3. **Finalidad:** problema que atiende y valor que pretende aportar.
4. **Condiciones de activación y aplicación:** quién/qué lo activa; destinatarios; cuándo procede y cuándo no.
5. **Entradas y requisitos:** solicitudes, datos, materiales, permisos, herramientas, condiciones previas.
6. **Conocimientos y fundamentos:** disciplinas, marcos, modelos, reglas y fuentes realmente reconocibles.
7. **Desarrollo operativo:** secuencia sustantiva, fases, bifurcaciones, criterios de decisión, responsabilidades. Para un instrumento o producto, describir su construcción/uso, no inventar una secuencia si no se conoce.
8. **Herramientas, dependencias e instrumentos:** vínculos a `INS`, tecnologías, servicios y condiciones de acceso.
9. **Salidas y calidad:** productos verificables o esperados; formatos, criterios de aceptación, ejemplos (rotulados si hipotéticos).
10. **Relaciones:** IDs que aplica, depende de, produce, condiciona o complementa; vínculos con personas y decisiones.
11. **Límites, riesgos, ética y supervisión:** incertidumbres, privacidad, autoría, permiso, acciones reservadas al humano.
12. **Evidencia y grado de conocimiento:** `FUENTE_ACCESIBLE F-…`, `TESTIMONIO_CREADOR`, `AUTODESCRIPCION`, `INFERENCIA`, `NO_VERIFICADO`, `RESTRINGIDO`, `NO_APLICA`; con referencias, fecha y alcance cuando consten.
13. **Transferibilidad y continuidad:** qué componente se podría separar; qué faltaría documentar, reconfigurar o probar; estado `TRANSFERENCIA_NO_EVALUADA` salvo evidencia.

**Regla de profundidad:** no usar «sí, puede hacerlo» como sustituto del desarrollo operativo. Cuando un procedimiento es complejo, describir toda su lógica reconocible y sus variantes importantes, aunque requiera varios párrafos. Cuando falta evidencia, escribir `NO_VERIFICADO` con necesidad concreta de contraste, no inventar.

## D. Matriz de relaciones `PMC-04`

| Origen (ID) | Relación | Destino (ID) | Interpretación y fuente | Estado |
|---|---|---|---|---|
| `MTO-001` | organiza | `MET-001` | `[explicación / F-...]` | `[declarado/documentado]` |
| `PRC-001` | utiliza | `INS-001` | `[explicación / F-...]` | `[estado]` |
| `PRC-001` | produce | `PRD-001` | `[explicación / F-...]` | `[estado]` |
| `SK-001` | podría transferir | `PRC-001` | `[limitaciones]` | `NO_EVALUADO` |

Registrar recorridos representativos de extremo a extremo **si están sustentados**, diferencias del asistente, aportaciones humanas, categorías sin vínculo y dudas sobre relaciones. No exigir diagramas sofisticados si una tabla explicativa basta.

## E. Prueba de coherencia documental (no de desempeño)

1. ¿Se examinaron las diez clases?
2. ¿Cada entrada tiene ID único y una ficha correspondiente?
3. ¿Cada ficha contiene los trece campos o marca lo desconocido explícitamente?
4. ¿Existe por lo menos una explicación de cómo se relacionan categorías presentes?
5. ¿Las relaciones citadas apuntan a IDs existentes o indican pendiente?
6. ¿Se diferencia autodescripción, testimonio y fuente?
7. ¿Se evitó atribuir una skill ejecutable o evidencia no disponible?
8. ¿El resultado sigue siendo legible y específico al asistente?

**La conciliación documental evita perder elementos; no garantiza que se hayan identificado absolutamente todos.**
