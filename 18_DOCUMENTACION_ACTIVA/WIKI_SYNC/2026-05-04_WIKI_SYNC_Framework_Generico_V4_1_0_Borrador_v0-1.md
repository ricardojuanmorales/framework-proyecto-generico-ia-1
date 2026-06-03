# WIKI_SYNC
## Framework Genérico V4.1.0 - Borrador v0.1

**Archivo:** `2026-05-04_WIKI_SYNC_Framework_Generico_V4_1_0_Borrador_v0-1.md`  
**Fecha:** 2026-05-04  
**Versión:** v0.1  
**Estado:** Documento inicial de sincronización Wiki para rama V4.1.0-borrador  
**Marco madre:** Framework Genérico V4.0.0  
**Rama activa:** Framework Genérico V4.1.0-borrador  
**Nivel recomendado actual:** N3 - Avanzado  
**Tipo de documento:** Sincronización entre documentación oficial, guías humanas, continuidad y transferencia  
**Decisiones relacionadas:** D-A28, D-A29, D-A30, D-A31, D-A32, D-A33, D-A34  

---

## 0. Propósito

Este documento define cómo sincronizar la documentación oficial del **Framework Genérico V4.1.0-borrador** con la **Wiki humana**.

La documentación oficial conserva trazabilidad, versiones, decisiones y estructura.  
La Wiki humana traduce esa arquitectura para uso cotidiano, aprendizaje, transferencia, adopción y continuidad.

WIKI_SYNC evita que el framework tenga dos memorias que envejecen por separado como relojes en casas distintas.

---

## 1. Principio rector

```text
Si cambia el proceso, cambia la guía.
Si cambia la guía, cambia el índice.
Si cambia el índice, cambia el README.
Si cambia la versión, cambia el primer de continuidad.
```

La Wiki no es tarea posterior. Es parte del ciclo de trabajo.

---

## 2. Cuándo aplicar WIKI_SYNC

Aplicar WIKI_SYNC cuando ocurra cualquiera de estas situaciones:

```text
se crea un documento base;
se crea un documento de gobernanza;
se modifica una regla del framework;
se añade un perfil transversal;
se activa o modifica Caleidoscopio;
se crea una matriz;
se crea una plantilla;
se crea un Gate;
se crea un CHECK;
se abre una nueva versión;
se produce un cierre formal;
se prepara archivo histórico;
se crea un recurso educativo;
se genera una guía reusable;
se cambia una metodología;
se define un flujo humano-IA;
se crea un producto destinado a transferencia.
```

No aplicar WIKI_SYNC si:

```text
el cambio es puramente privado;
el documento es exploratorio N1 sin continuidad;
la nota no cambia procesos ni guías;
el producto no será reutilizado.
```

---

## 3. Estados WIKI_SYNC

| Estado | Significado | Acción |
|---|---|---|
| Pendiente | La wiki debe actualizarse, pero aún no se ha hecho | Crear tarea o nota de actualización |
| En progreso | La actualización está en desarrollo | Mantener referencia al documento fuente |
| Actualizado | La wiki refleja el cambio | Registrar fecha y documento fuente |
| No aplica | No requiere actualización wiki | Indicar razón |
| Requiere validación | La actualización necesita revisión humana | No publicar hasta validar |
| Archivado | La página wiki quedó preservada como versión anterior | Referenciar nueva página o versión |

---

## 4. Páginas Wiki objetivo V4.1.0-borrador

### 4.1 Wiki de Programador Humanista

```text
21_WIKI_DOCUMENTACION_HUMANA/
└── 09_Guias_Programador_Humanista/
    ├── Home_Programador_Humanista.md
    ├── Guia_Sistema_Agents_Skills.md
    ├── Guia_Arquitectura_Diseno_Programacion.md
    ├── Guia_Uso_IA_en_Flujo_Desarrollo.md
    ├── Guia_Terminal_IDE_Git.md
    ├── Guia_Testing_Validacion_Despliegue.md
    ├── Guia_CHECKS_Programador_Humanista.md
    ├── Glosario_Programador_Humanista.md
    └── Actualizaciones_Documentacion_Oficial.md
```

### 4.2 Wiki de Investigador Transdisciplinario

```text
21_WIKI_DOCUMENTACION_HUMANA/
└── 10_Guias_Investigador_Transdisciplinario/
    ├── Home_Investigador_Transdisciplinario.md
    ├── Guia_Problematizacion_Indagacion.md
    ├── Guia_Fuentes_Colecciones_Bibliometria.md
    ├── Guia_IA_en_Investigacion_Transdisciplinaria.md
    ├── Guia_Publicaciones_Multimodales_REA.md
    ├── Guia_Diseno_Instruccional_AVAT.md
    ├── Guia_Sensibilizacion_Social_Ambiental_Cultural.md
    ├── Guia_CHECKS_Investigador_Transdisciplinario.md
    ├── Glosario_Investigador_Transdisciplinario.md
    └── Actualizaciones_Documentacion_Oficial.md
```

### 4.3 Wiki de Artista Transdisciplinario

```text
21_WIKI_DOCUMENTACION_HUMANA/
└── 11_Guias_Artista_Transdisciplinario/
    ├── Home_Artista_Transdisciplinario.md
    ├── Guia_Investigacion_Creacion.md
    ├── Guia_Memoria_Territorio_Materialidades.md
    ├── Guia_Curaduria_Publicacion_Multimodal.md
    ├── Guia_Derechos_Culturales_Licencias.md
    ├── Guia_IA_en_Creacion_Transdisciplinaria.md
    ├── Guia_Archivo_Obra_Colecciones.md
    ├── Guia_CHECKS_Artista_Transdisciplinario.md
    ├── Glosario_Artista_Transdisciplinario.md
    └── Actualizaciones_Documentacion_Oficial.md
```

### 4.4 Wiki de Caleidoscopio

```text
21_WIKI_DOCUMENTACION_HUMANA/
└── 12_Guias_Caleidoscopio/
    ├── Home_Caleidoscopio.md
    ├── Guia_Activacion_Caleidoscopio.md
    ├── Guia_Modos_C1_C7.md
    ├── Guia_Integracion_Perfiles_Transversales.md
    ├── Guia_Evidencia_Transdisciplinaria.md
    ├── Guia_Evaluacion_Multidimensional.md
    ├── Guia_Publicacion_Multimodal_Archivo_Transferencia.md
    ├── Guia_CHECKS_Caleidoscopio.md
    ├── Glosario_Caleidoscopio.md
    └── Actualizaciones_Documentacion_Oficial.md
```

### 4.5 Wiki de Framework Genérico V4.1.0

```text
21_WIKI_DOCUMENTACION_HUMANA/
└── 13_Guias_Framework_Generico_V4_1_0/
    ├── Home_Framework_Generico_V4_1_0.md
    ├── Guia_Inicio_Rapido_V4_1_0.md
    ├── Guia_Niveles_N1_N4.md
    ├── Guia_Gates_CHECKS.md
    ├── Guia_Mapa_Macro_Meso_Micro.md
    ├── Guia_Indice_Manifest_Documentos.md
    ├── Guia_Gobernanza_Changelog_Decisiones.md
    ├── Guia_Archivo_Historico.md
    ├── Guia_Paso_Borrador_a_Estable.md
    ├── Glosario_Framework_V4_1_0.md
    └── Actualizaciones_Documentacion_Oficial.md
```

Nota: Esta es una subcarpeta dentro de la Wiki humana existente. No constituye macrocarpeta nueva.

---

## 5. Matriz fuente documental -> wiki

| Documento fuente | Página Wiki sugerida | Tipo de actualización | Prioridad |
|---|---|---|---|
| README V4.1.0-borrador | Home_Framework_Generico_V4_1_0.md | Crear / actualizar entrada principal | Alta |
| Índice Maestro | Guia_Indice_Manifest_Documentos.md | Explicar navegación documental | Alta |
| Manifest JSON | Guia_Indice_Manifest_Documentos.md | Explicar uso técnico legible por máquina | Alta |
| Mapa Macro-Meso-Micro | Guia_Mapa_Macro_Meso_Micro.md | Explicar arquitectura por escalas | Alta |
| Matriz N1-N4 | Guia_Niveles_N1_N4.md | Explicar niveles y cuándo usarlos | Alta |
| Matriz Gates | Guia_Gates_CHECKS.md | Explicar compuertas de validación | Alta |
| CHECKS | Guia_Gates_CHECKS.md | Convertir checks en guía usable | Alta |
| Paquete Consolidado | Guia_Integracion_Perfiles_Transversales.md | Explicar visión transversal | Alta |
| Matriz Comparativa | Guia_Integracion_Perfiles_Transversales.md | Comparar perfiles | Media-alta |
| Matriz C1-C7 | Guia_Modos_C1_C7.md | Explicar modos Caleidoscopio | Alta |
| Plantillas Base | Guia_Sistema_Agents_Skills.md / Guia_Gates_CHECKS.md | Explicar uso operativo | Media-alta |
| Changelog | Guia_Gobernanza_Changelog_Decisiones.md | Explicar cambios recientes | Media |
| Registro Decisiones | Guia_Gobernanza_Changelog_Decisiones.md | Explicar decisiones D-A24 a D-A34 | Media |
| Reporte Cierre V4.0.0 | Guia_Archivo_Historico.md | Explicar cierre y archivo V4.0.0 | Media |
| Primer V4.1.0 | Guia_Inicio_Rapido_V4_1_0.md | Explicar reactivación | Alta |

---

## 6. Matriz Wiki por perfil

| Perfil | Página inicial | Guías mínimas | Glosario | Checks |
|---|---|---|---|---|
| Programador Humanista | Home_Programador_Humanista | Agents/Skills, Arquitectura-Diseño-Programación, IA, Testing | Sí | Guia_CHECKS_Programador_Humanista |
| Investigador Transdisciplinario | Home_Investigador_Transdisciplinario | Problematización, Fuentes, IA, REA, AVAT | Sí | Guia_CHECKS_Investigador_Transdisciplinario |
| Artista Transdisciplinario | Home_Artista_Transdisciplinario | Investigación-creación, memoria, curaduría, derechos, IA | Sí | Guia_CHECKS_Artista_Transdisciplinario |
| Caleidoscopio | Home_Caleidoscopio | Activación, C1-C7, integración, evidencia, evaluación | Sí | Guia_CHECKS_Caleidoscopio |
| Framework V4.1.0 | Home_Framework_Generico_V4_1_0 | Inicio, niveles, Gates, índice, gobernanza, archivo | Sí | Guia_Gates_CHECKS |

---

## 7. Prioridades de sincronización

### Prioridad alta

Actualizar primero:

```text
Home_Framework_Generico_V4_1_0.md
Guia_Inicio_Rapido_V4_1_0.md
Guia_Niveles_N1_N4.md
Guia_Gates_CHECKS.md
Guia_Mapa_Macro_Meso_Micro.md
Guia_Activacion_Caleidoscopio.md
Guia_Modos_C1_C7.md
```

### Prioridad media-alta

Actualizar después:

```text
Guia_Integracion_Perfiles_Transversales.md
Guia_Sistema_Agents_Skills.md
Guia_Indice_Manifest_Documentos.md
Guia_Gobernanza_Changelog_Decisiones.md
```

### Prioridad media

Actualizar en cierre del ciclo:

```text
Guia_Archivo_Historico.md
Guia_Paso_Borrador_a_Estable.md
Glosario_Framework_V4_1_0.md
Actualizaciones_Documentacion_Oficial.md
```

---

## 8. Qué contenido debe pasar a Wiki

La Wiki debe traducir, no copiar todo.

### 8.1 Pasar a Wiki

```text
definiciones prácticas
rutas de uso
tablas simplificadas
ejemplos breves
preguntas frecuentes
checklists resumidos
glosarios
diagramas textuales
advertencias de uso
rutas de inicio rápido
```

### 8.2 No pasar completo a Wiki

```text
registros largos de decisiones
changelog completo
manifest JSON completo
tablas demasiado extensas
borradores internos
evidencia sensible
material no validado
versiones históricas completas
```

### 8.3 Mantener enlace o referencia

Cuando la Wiki resuma un documento oficial, debe indicar:

```text
Documento fuente:
Versión:
Fecha:
Estado:
Decisión relacionada:
Última sincronización:
```

---

## 9. Protocolo WIKI_SYNC

### Paso 1 - Identificar cambio

```text
Documento fuente:
Tipo de cambio:
Nivel N1-N4:
Perfil / Caleidoscopio:
Decisión relacionada:
```

### Paso 2 - Determinar si aplica Wiki

Responder:

```text
¿Cambia proceso?
¿Cambia guía?
¿Cambia nivel?
¿Cambia Gate?
¿Cambia CHECK?
¿Cambia perfil?
¿Cambia ruta de activación?
¿Afecta transferencia?
¿Afecta uso por terceros?
```

Si dos o más respuestas son sí, WIKI_SYNC aplica.

### Paso 3 - Seleccionar página

Usar la matriz fuente documental -> wiki y la matriz por perfil.

### Paso 4 - Definir tipo de actualización

Tipos:

```text
crear página
actualizar página
añadir sección
añadir ejemplo
añadir checklist
añadir glosario
marcar obsoleto
archivar página
```

### Paso 5 - Registrar metadatos

```text
Fuente:
Versión:
Fecha:
Responsable:
Estado:
Resumen de cambio:
Riesgo:
Próxima revisión:
```

### Paso 6 - Validar claridad humana

Verificar:

```text
¿Una persona nueva puede entenderlo?
¿El lenguaje es claro?
¿Hay ruta de inicio?
¿Hay ejemplo?
¿Hay advertencia de límites?
¿Hay enlace a documento oficial?
```

### Paso 7 - Cerrar sincronización

Registrar en:

```text
Actualizaciones_Documentacion_Oficial.md
Changelog si aplica
Registro de decisiones si aplica
Primer si cambia continuidad
```

---

## 10. Plantilla de ficha WIKI_SYNC

```text
# Ficha WIKI_SYNC

ID:
Fecha:
Documento fuente:
Versión fuente:
Estado fuente:
Decisión relacionada:
Nivel N1-N4:
Perfil / componente:
Página wiki afectada:
Tipo de actualización:
Prioridad: alta / media-alta / media / baja
Resumen del cambio:
Contenido sugerido:
Riesgo si no se actualiza:
Validación humana requerida: sí / no
Estado: pendiente / en progreso / actualizado / no aplica / requiere validación / archivado
Responsable:
Próxima revisión:
```

---

## 11. Primera ronda sugerida de sincronización Wiki

### 11.1 Crear Home Framework V4.1.0

Página:

```text
21_WIKI_DOCUMENTACION_HUMANA/13_Guias_Framework_Generico_V4_1_0/Home_Framework_Generico_V4_1_0.md
```

Contenido mínimo:

```text
Qué es V4.1.0-borrador
Qué hereda de V4.0.0
Qué incorpora
Estado actual
Cómo comenzar
Qué documentos abrir primero
Advertencia: no es versión estable todavía
```

### 11.2 Crear Guía de Inicio Rápido

Página:

```text
Guia_Inicio_Rapido_V4_1_0.md
```

Contenido mínimo:

```text
1. Abrir README
2. Revisar índice
3. Identificar nivel N1-N4
4. Identificar perfil o Caleidoscopio
5. Aplicar Gates
6. Aplicar CHECKS
7. Documentar
8. Sincronizar Wiki
9. Cerrar y archivar
```

### 11.3 Crear Guía N1-N4

Página:

```text
Guia_Niveles_N1_N4.md
```

Contenido mínimo:

```text
Qué es N1
Qué es N2
Qué es N3
Qué es N4
Cuándo subir de nivel
Cuándo bajar de nivel
Documentos mínimos por nivel
```

### 11.4 Crear Guía Gates y CHECKS

Página:

```text
Guia_Gates_CHECKS.md
```

Contenido mínimo:

```text
Qué es un Gate
Qué es un CHECK
Diferencia entre Gate y CHECK
Gates base
CHECKS por nivel
CHECKS por perfil
Cómo registrar resultado
```

### 11.5 Crear Guía Caleidoscopio C1-C7

Página:

```text
Guia_Modos_C1_C7.md
```

Contenido mínimo:

```text
Qué es Caleidoscopio
Por qué no es un cuarto perfil
Qué son C1-C7
Cuándo usar cada modo
Ejemplos breves
Riesgos de integración superficial
```

---

## 12. Integración con documentación activa

Toda sincronización wiki debe revisar si actualiza:

```text
18_DOCUMENTACION_ACTIVA/
├── Changelog.md
├── Decisiones.md
├── Bitacora_Maestra.md
├── Prompts_de_Sesion/
└── Cierres_Parciales/
```

Regla:

```text
Si WIKI_SYNC modifica interpretación oficial, registrar decisión.
Si WIKI_SYNC solo traduce documento existente, registrar actualización.
Si WIKI_SYNC corrige error, registrar corrección.
Si WIKI_SYNC cambia proceso, actualizar changelog.
```

---

## 13. Integración con archivo histórico

Si una página wiki reemplaza una versión anterior:

```text
1. No borrar sin registrar.
2. Marcar como obsoleta o archivada.
3. Indicar documento nuevo.
4. Registrar fecha.
5. Conservar enlace a versión histórica si existe.
```

Destino sugerido:

```text
99_ARCHIVO_HISTORICO/
└── Wiki_Archivada/
```

Nota: `Wiki_Archivada` se propone como subcarpeta de archivo, no como macrocarpeta nueva.

---

## 14. Criterios de calidad Wiki

Toda página wiki debe cumplir:

```text
título claro
propósito breve
ruta de uso
documento fuente
versión fuente
estado
ejemplo o aplicación
advertencias
próximo paso
fecha de actualización
```

Además:

```text
lenguaje claro
estructura navegable
tablas moderadas
listas útiles
sin copiar documentos completos innecesariamente
sin esconder decisiones críticas
sin depender solo de memoria conversacional
```

---

## 15. Riesgos WIKI_SYNC

| Riesgo | Descripción | Salvaguarda |
|---|---|---|
| Divergencia | Wiki dice algo distinto al documento oficial | Referenciar documento fuente y versión |
| Sobrecopia | Wiki replica documentos enormes | Resumir y enlazar |
| Desactualización | Cambia el framework y no cambia la guía | WIKI_SYNC obligatorio |
| Pérdida de trazabilidad | No se sabe de dónde salió una guía | Metadatos en cada página |
| Burocratización | Cada microcambio exige wiki | Aplicar por proporcionalidad |
| Accesibilidad débil | Guías no son entendibles por usuarios nuevos | Lenguaje claro y rutas rápidas |
| Archivo ausente | Se borran versiones sin memoria | Marcar obsoleto y archivar |

---

## 16. Semáforo WIKI_SYNC V4.1.0-borrador

| Área | Estado | Acción |
|---|---|---|
| Home V4.1.0 | Rojo preventivo | Crear página |
| Guía inicio rápido | Rojo preventivo | Crear página |
| Guía N1-N4 | Amarillo | Derivar de matriz N1-N4 |
| Guía Gates/CHECKS | Amarillo | Derivar de Matriz Gates + CHECKS |
| Guía Caleidoscopio | Amarillo | Derivar Marco + Matriz C1-C7 |
| Guías perfiles | Amarillo | Actualizar con v0.2/v0.1 |
| Glosario V4.1.0 | Amarillo | Crear luego de primeras guías |
| Archivo wiki | Amarillo | Definir en plan de archivo |

---

## 17. Decisión sugerida

```text
D-A35 — Crear WIKI_SYNC Framework Genérico V4.1.0-borrador v0.1 como protocolo de sincronización entre documentación oficial, Wiki humana, guías de perfiles, Caleidoscopio, niveles N1-N4, Gates, CHECKS, archivo histórico y continuidad.
```

**Estado sugerido:** Aceptada para continuidad documental.  
**Tipo de cambio:** Ajuste menor de gobernanza documental y transferencia.  
**Justificación:** Evita divergencia entre documentación oficial y guías humanas; integra wiki como parte del trabajo.  
**Impacto:** Alto para adopción, enseñanza, transferencia, accesibilidad y continuidad.  
**Riesgo:** Bajo si se aplica proporcionalmente y no como copia total de documentos.  
**Documentos afectados:** README, índice maestro, manifest JSON, CHECKS, Matriz Gates, Matriz N1-N4, Wiki humana, changelog, registro de decisiones, primer.  
**Versión afectada:** V4.1.0-borrador v0.1.  
**Recomendación:** Registrar D-A35 en la próxima actualización del Registro de Decisiones.

---

## 18. Próximo producto recomendado

Crear:

```text
2026-05-04_Plan_Archivo_Historico_Framework_Generico_V4_0_0_y_V4_1_0_Borrador_v0-1.md
```

### Propósito del plan de archivo

Definir cómo preservar:

```text
V4.0.0 cerrada
capa transversal
apertura V4.1.0-borrador
gobernanza
manifest
matrices
checks
wiki_sync
paquetes de sesión
versiones futuras
```

WIKI_SYNC ayuda a encontrar.  
El archivo histórico ayuda a recordar sin deformar.

---

## 19. Cierre

WIKI_SYNC convierte la documentación humana en parte del sistema vivo. Sin esta pieza, el framework tendría arquitectura para iniciados y niebla para recién llegados. Con ella, cada cambio importante deja huella, guía y puerta de entrada.

**Estado:** Listo para validación.  
**Siguiente acción:** Crear Plan de Archivo Histórico V4.0.0 y V4.1.0-borrador v0.1.
