# Matriz Gates
## Framework Genérico V4.1.0 — Borrador v0.1

**Archivo:** `2026-05-04_Matriz_Gates_Framework_Generico_V4_1_0_Borrador_v0-1.md`  
**Fecha:** 2026-05-04  
**Versión:** v0.1  
**Estado:** Matriz inicial de Gates para rama V4.1.0-borrador  
**Marco madre:** Framework Genérico V4.0.0  
**Rama activa:** Framework Genérico V4.1.0-borrador  
**Nivel recomendado:** N3 — Avanzado  
**Tipo de documento:** Gobernanza operativa, validación, control de calidad y continuidad  
**Decisiones relacionadas:** D-A28, D-A29, D-A30, D-A31, D-A32  

---

## 0. Propósito

Esta matriz formaliza los **Gates** del Framework Genérico V4.1.0-borrador. Un Gate es una compuerta de validación que permite decidir si un proyecto, documento, perfil, flujo, producto o integración puede avanzar sin perder:

```text
propósito
evidencia
ética
accesibilidad
calidad
trazabilidad
documentación
wiki
archivo
continuidad
```

Los Gates no existen para burocratizar el trabajo. Existen para evitar que el proyecto avance con los zapatos desamarrados mientras carga vidrio fino.

---

## 1. Principio rector

```text
Ningún avance sustantivo debe pasar de fase, nivel o versión sin evidencia mínima, revisión humana, documentación activa y continuidad definida.
```

Todo Gate debe responder:

```text
¿Qué se verifica?
¿Qué evidencia se requiere?
¿Quién valida?
¿Qué riesgo reduce?
¿Qué documento actualiza?
¿Qué pasa si no se cumple?
```

---

## 2. Tipos de Gates

| Tipo de Gate | Función | Uso principal |
|---|---|---|
| Gate de propósito | Asegura que el trabajo tenga razón clara | Inicio de sesión, proyecto o documento |
| Gate de ubicación | Evita piezas sueltas sin arquitectura | Antes de crear documentos o carpetas |
| Gate de perfil | Verifica que el perfil o modo Caleidoscopio sea correcto | Activación de Programador, Investigador, Artista o Caleidoscopio |
| Gate metodológico | Revisa ruta, método, proceso y coherencia | Investigación, creación, programación, integración |
| Gate de evidencia | Confirma productos verificables | Antes de cierre, publicación o archivo |
| Gate ético | Revisa riesgos, derechos, IA, comunidad y cuidado | Uso de IA, datos, cultura, comunidad, publicación |
| Gate de accesibilidad | Revisa DUA/POUR, formatos, legibilidad y alternativas | Publicación, wiki, REA, AVAT |
| Gate técnico | Revisa seguridad, pruebas, dependencias y despliegue | Programación, agentes, automatización |
| Gate de documentación | Verifica README, changelog, decisiones, wiki_sync | Antes de cerrar ciclos |
| Gate de archivo | Conserva versiones, fuentes, código, obras y contexto | Cierre de versión, release, transferencia |
| Gate de continuidad | Deja próximo paso, primer y reactivación | Fin de sesión o ciclo |
| Gate de estabilización | Determina si un borrador puede pasar a estable | Release o versión formal |

---

## 3. Gates base V4.1.0-borrador

| Gate | Nombre | Pregunta central | Evidencia mínima | Validador principal |
|---|---|---|---|---|
| G1 | Propósito | ¿Por qué existe este trabajo? | Propósito, problema, alcance, nivel N1-N4 | Orquestador Humano-IA + responsable humano |
| G2 | Ubicación macro-meso-micro | ¿Dónde vive dentro del framework? | Cartapacio, escala, documento base, versión | Orquestador / documentalista |
| G3 | Activación de perfil | ¿Qué perfil o modo Caleidoscopio corresponde? | Perfil activo, modo C1-C7 si aplica, justificación | Orquestador + responsable humano |
| G4 | Metodología / flujo | ¿Cómo se hará el trabajo? | Workflow, método, fases, criterios | Metodólogo / perfil activo |
| G5 | Evidencia | ¿Qué demuestra que hubo avance real? | Producto, fuente, prototipo, matriz, ficha, código u obra | Revisor / responsable |
| G6 | IA responsable | ¿Cómo se usó IA y cómo se validó? | Prompts, bitácora IA, disclosure, revisión humana | Revisor ético / responsable |
| G7 | Ética, derechos y cuidado | ¿Hay riesgos humanos, culturales, técnicos o socioambientales? | Matriz de riesgos, licencias, permisos, salvaguardas | Revisor ético / comunidad si aplica |
| G8 | Accesibilidad | ¿El producto es usable y comprensible por audiencias diversas? | ALT, subtítulos, estructura, lenguaje claro, DUA/POUR | Revisor accesibilidad |
| G9 | Calidad técnica / epistemológica / estética | ¿Cumple criterios de calidad según perfil? | Tests, matriz de fuentes, revisión curatorial, rúbrica | Perfil experto correspondiente |
| G10 | Documentación activa | ¿Se actualizó la memoria del proceso? | README, changelog, decisiones, bitácora, índice | Documentalista |
| G11 | Wiki Sync | ¿Debe actualizarse la wiki humana? | WIKI_SYNC, páginas afectadas, guía actualizada | Curador wiki |
| G12 | Archivo | ¿Quedó preservado lo necesario? | Manifest, paquete, versión, fuentes, exportación | Custodio documental |
| G13 | Continuidad | ¿Alguien puede retomar sin perder contexto? | Primer, prompt de reactivación, próximos pasos | Orquestador |
| G14 | Estabilización | ¿Puede pasar de borrador a versión estable? | Evaluación integral, decisiones, auditoría si aplica | Responsable académico / gobernanza |

---

## 4. Secuencia mínima de Gates por nivel N1-N4

| Gate | N1 | N2 | N3 | N4 |
|---|---:|---:|---:|---:|
| G1 Propósito | Obligatorio | Obligatorio | Obligatorio | Obligatorio |
| G2 Ubicación | Ligero | Obligatorio | Obligatorio | Obligatorio |
| G3 Perfil / Caleidoscopio | Si aplica | Obligatorio si hay perfil | Obligatorio | Obligatorio |
| G4 Metodología / flujo | Ligero | Obligatorio | Obligatorio | Obligatorio formal |
| G5 Evidencia | Obligatorio | Obligatorio | Obligatorio | Obligatorio auditable |
| G6 IA responsable | Si usa IA | Si usa IA | Obligatorio si usa IA | Obligatorio auditable |
| G7 Ética / derechos | Básico | Recomendado | Obligatorio | Obligatorio formal |
| G8 Accesibilidad | Básico | Recomendado | Obligatorio | Obligatorio validado |
| G9 Calidad | Básico | Obligatorio | Obligatorio | Obligatorio auditado |
| G10 Documentación activa | Cierre breve | Obligatorio | Obligatorio | Obligatorio formal |
| G11 Wiki Sync | No / opcional | Si cambia proceso | Obligatorio si aplica | Obligatorio |
| G12 Archivo | Cierre simple | Básico | Obligatorio | Obligatorio histórico |
| G13 Continuidad | Obligatorio | Obligatorio | Obligatorio | Obligatorio formal |
| G14 Estabilización | No | No | Preparación | Obligatorio |

---

## 5. Gate G1 — Propósito

### 5.1 Pregunta central

```text
¿El trabajo tiene un propósito claro, un problema o tensión identificable, un alcance y un nivel de activación?
```

### 5.2 Evidencia requerida

| Nivel | Evidencia |
|---|---|
| N1 | Propósito breve, problema simple, próxima acción |
| N2 | Brief, alcance, contexto básico |
| N3 | Problema complejo, nivel, perfil o modo Caleidoscopio, riesgos iniciales |
| N4 | Propósito alineado a programa, unidad, comunidad o institución |

### 5.3 Riesgos que reduce

```text
producir documentos sin necesidad;
activar perfiles incorrectos;
confundir exploración con proyecto;
avanzar sin pregunta guía.
```

### 5.4 Documentos que actualiza

```text
README
Primer de continuidad
Bitácora
Prompt de activación
```

### 5.5 Si no se cumple

```text
Detener.
Definir propósito antes de producir documentos nuevos.
```

---

## 6. Gate G2 — Ubicación macro-meso-micro

### 6.1 Pregunta central

```text
¿El trabajo está ubicado correctamente en la arquitectura macro, meso y micro?
```

### 6.2 Evidencia requerida

```text
cartapacio sugerido
escala macro / meso / micro
documento base relacionado
versión afectada
tipo de cambio
```

### 6.3 Riesgos que reduce

```text
crear macrocarpetas innecesarias;
duplicar documentos;
perder trazabilidad;
mezclar gobernanza con contenido operativo.
```

### 6.4 Documentos que actualiza

```text
Índice maestro
Manifest JSON
Mapa macro-meso-micro
Registro de decisiones si hay cambio relevante
```

### 6.5 Si no se cumple

```text
No crear carpeta ni documento nuevo.
Primero mapear ubicación.
```

---

## 7. Gate G3 — Activación de perfil o Caleidoscopio

### 7.1 Pregunta central

```text
¿El trabajo corresponde a Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario o Caleidoscopio?
```

### 7.2 Evidencia requerida

```text
perfil activo
justificación
modo C1-C7 si hay integración
agente humano/IA sugerido
skills necesarias
documento base del perfil
```

### 7.3 Activación recomendada

| Situación | Activación |
|---|---|
| Construir sistema, app, script, repositorio, automatización | Programador Humanista |
| Investigar, revisar fuentes, producir síntesis, bibliometría | Investigador Transdisciplinario |
| Crear obra, narrativa, avatar, galería, experiencia multimodal | Artista Transdisciplinario |
| Integrar dos o más perfiles con emergencia | Caleidoscopio |

### 7.4 Si no se cumple

```text
No activar plantillas especializadas.
Volver a matriz comparativa y matriz C1-C7.
```

---

## 8. Gate G4 — Metodología / flujo

### 8.1 Pregunta central

```text
¿Existe una ruta de trabajo coherente, documentada y proporcional al nivel?
```

### 8.2 Evidencia requerida

```text
workflow aplicable
fases
métodos
criterios de aceptación
roles
producto esperado
```

### 8.3 Riesgos que reduce

```text
mezclar métodos incompatibles;
saltar arquitectura, fuentes o curaduría;
confundir proceso creativo con ocurrencia;
programar sin requisitos;
investigar sin método.
```

### 8.4 Documentos que actualiza

```text
WORKFLOWS.md
INQUIRY_WORKFLOWS.md
CREATION_WORKFLOWS.md
INTEGRATION_WORKFLOWS.md
```

---

## 9. Gate G5 — Evidencia

### 9.1 Pregunta central

```text
¿Qué prueba verificable demuestra que el trabajo avanzó?
```

### 9.2 Evidencia por perfil

| Perfil | Evidencia |
|---|---|
| Programador Humanista | Código, tests, README, ADR, release, checklist |
| Investigador Transdisciplinario | Matriz de fuentes, evidence ledger, síntesis, marco, bibliografía |
| Artista Transdisciplinario | Boceto, obra, statement, ficha curatorial, colección, derechos |
| Caleidoscopio | Producto integrado, matriz C1-C7, evaluación multidimensional |

### 9.3 Si no se cumple

```text
No cerrar la sesión como completada.
Registrar como avance exploratorio.
```

---

## 10. Gate G6 — IA responsable

### 10.1 Pregunta central

```text
¿Se usó IA de forma documentada, revisada y subordinada al juicio humano?
```

### 10.2 Evidencia requerida

```text
prompts relevantes
rol de IA
aporte humano
validación humana
disclosure si aplica
riesgos de sesgo o error
límites de uso
```

### 10.3 Riesgos que reduce

```text
autoría difusa;
falsa autoridad de IA;
síntesis sin lectura;
automatización opaca;
errores no detectados.
```

### 10.4 Documentos que actualiza

```text
Bitácora IA
AIAS si aplica
IBATA si aplica
Registro de decisiones
Disclosure del producto
```

---

## 11. Gate G7 — Ética, derechos y cuidado

### 11.1 Pregunta central

```text
¿El trabajo protege personas, comunidades, datos, culturas, derechos, licencias y contextos?
```

### 11.2 Evidencia requerida

```text
riesgos identificados
salvaguardas
licencias
permisos
consentimiento si aplica
derechos culturales
protección de datos
reciprocidad comunitaria si aplica
```

### 11.3 Aplicación por perfil

| Perfil | Riesgo principal |
|---|---|
| Programador Humanista | datos, secretos, seguridad, despliegue |
| Investigador Transdisciplinario | extracción epistémica, fuentes débiles, sesgos |
| Artista Transdisciplinario | apropiación cultural, derechos, representación |
| Caleidoscopio | suma sin ética integrada, publicación sin cuidado |

---

## 12. Gate G8 — Accesibilidad

### 12.1 Pregunta central

```text
¿El producto puede ser usado, leído, comprendido o adaptado por audiencias diversas?
```

### 12.2 Evidencia requerida

```text
estructura clara
lenguaje accesible
texto alternativo
subtítulos o transcripción si aplica
contraste o legibilidad si aplica
formatos editables si aplica
DUA/POUR si aplica
```

### 12.3 Documentos que actualiza

```text
CHECKS
WIKI_SYNC
Guías wiki
Ficha multimodal
REA si aplica
```

---

## 13. Gate G9 — Calidad técnica, epistemológica y estética

### 13.1 Pregunta central

```text
¿El producto cumple criterios de calidad según el perfil activado?
```

### 13.2 Evidencia por dimensión

| Dimensión | Evidencia |
|---|---|
| Técnica | pruebas, seguridad, rendimiento, mantenibilidad |
| Epistemológica | fuentes, metodología, validez, límites |
| Estética / cultural | coherencia simbólica, curaduría, sensibilidad, documentación |
| Integrada | evaluación multidimensional, feedback, iteración |

### 13.3 Si no se cumple

```text
Clasificar como borrador.
No publicar ni estabilizar.
Definir iteración.
```

---

## 14. Gate G10 — Documentación activa

### 14.1 Pregunta central

```text
¿El proceso quedó documentado mientras ocurrió, no después de que la memoria se evaporó?
```

### 14.2 Evidencia requerida

```text
README actualizado
bitácora
changelog
registro de decisiones
índice si aplica
manifest si aplica
cierre de sesión
```

### 14.3 Riesgos que reduce

```text
pérdida de continuidad;
decisiones huérfanas;
versiones confusas;
documentación tardía;
trabajo irreproducible.
```

---

## 15. Gate G11 — Wiki Sync

### 15.1 Pregunta central

```text
¿El cambio requiere actualizar la documentación humana, guías, glosarios o materiales educativos?
```

### 15.2 Evidencia requerida

```text
páginas wiki afectadas
tipo de cambio
texto sugerido o resumen de actualización
responsable de sincronización
estado: pendiente / actualizado / no aplica
```

### 15.3 Páginas wiki objetivo

```text
21_WIKI_DOCUMENTACION_HUMANA/09_Guias_Programador_Humanista/
21_WIKI_DOCUMENTACION_HUMANA/10_Guias_Investigador_Transdisciplinario/
21_WIKI_DOCUMENTACION_HUMANA/11_Guias_Artista_Transdisciplinario/
21_WIKI_DOCUMENTACION_HUMANA/12_Guias_Caleidoscopio/
21_WIKI_DOCUMENTACION_HUMANA/13_Guias_Framework_Generico_V4_1_0/
```

---

## 16. Gate G12 — Archivo

### 16.1 Pregunta central

```text
¿Quedó preservada la versión, evidencia, contexto y continuidad?
```

### 16.2 Evidencia requerida

```text
manifest
paquete
documentos fuente
versión
estado
fecha
decisiones relacionadas
archivo histórico destino
```

### 16.3 Ubicación sugerida

```text
99_ARCHIVO_HISTORICO/
├── Releases/
├── Versiones_Cerradas/
├── Ciclos_Completados/
└── Exportaciones_Finales/
```

---

## 17. Gate G13 — Continuidad

### 17.1 Pregunta central

```text
¿Puede otra persona o IA reactivar el trabajo sin reconstruir todo desde cenizas?
```

### 17.2 Evidencia requerida

```text
primer de continuidad
prompt de reactivación
estado actual
próxima acción
riesgo principal
documentos que deben abrirse primero
```

### 17.3 Si no se cumple

```text
No cerrar formalmente.
Crear primer breve antes de terminar.
```

---

## 18. Gate G14 — Estabilización

### 18.1 Pregunta central

```text
¿El borrador tiene suficiente evidencia, gobernanza, documentación, evaluación y validación para convertirse en versión estable?
```

### 18.2 Evidencia requerida para V4.1.0 estable

```text
README estable
Índice maestro validado
Manifest JSON validado
Matriz N1-N4 validada
Matriz Gates validada
CHECKS formal
WIKI_SYNC formal
Plan de archivo histórico
Registro de decisiones actualizado
Changelog actualizado
Primer final
Validación humana explícita
```

### 18.3 Estado actual

```text
V4.1.0-borrador puede avanzar.
V4.1.0-estable todavía no debe declararse.
```

---

## 19. Matriz Gates por producto

| Producto | Gates obligatorios |
|---|---|
| Documento simple | G1, G5, G10, G13 |
| Perfil transversal | G1, G2, G3, G4, G5, G7, G10, G13 |
| Matriz comparativa | G1, G2, G5, G9, G10, G13 |
| Ejemplo Caleidoscopio | G1, G3, G4, G5, G7, G8, G9, G10, G13 |
| Plantilla agents/skills | G1, G2, G3, G4, G6, G7, G10, G11 |
| Manifest JSON | G1, G2, G5, G9, G10, G12, G13 |
| README maestro | G1, G2, G5, G8, G10, G11, G13 |
| Wiki | G1, G8, G10, G11, G13 |
| Release / archivo | G1, G5, G7, G9, G10, G12, G13 |
| Versión estable | G1-G14 |

---

## 20. Matriz Gates por perfil

| Gate | Programador Humanista | Investigador Transdisciplinario | Artista Transdisciplinario | Caleidoscopio |
|---|---|---|---|---|
| G1 Propósito | Problema técnico | Pregunta/fenómeno | Intención/obra | Problema complejo |
| G3 Perfil | PH | IT | AT | C1-C7 |
| G4 Método | Workflow técnico | Metodología | Proceso creativo | Metodología integrada |
| G5 Evidencia | Código/test | Fuente/evidencia | Obra/ficha | Producto emergente |
| G6 IA | Copilotos/logs | IA en búsqueda/síntesis | IA generativa si aplica | IA orquestada |
| G7 Ética | Seguridad/datos | Fuentes/comunidad | Derechos/cultura | Riesgo integrado |
| G8 Accesibilidad | UX/README | Lenguaje/REA | Accesibilidad estética | Accesibilidad multimodal |
| G9 Calidad | QA/seguridad | Validez/método | Curaduría/coherencia | Evaluación multidimensional |
| G10 Documentación | README/changelog | Source registry | Collection registry | Ledger integrado |
| G11 Wiki | Guía técnica | Guía investigación | Guía artística | Guía Caleidoscopio |
| G12 Archivo | Release | Corpus | Obra/colección | Paquete integrado |
| G13 Continuidad | Primer técnico | Primer investigativo | Primer creativo | Primer integrador |

---

## 21. Checklist rápido de Gate

Antes de avanzar, responder:

```text
1. ¿Qué Gate aplica?
2. ¿Qué evidencia existe?
3. ¿Quién validó?
4. ¿Qué riesgo queda?
5. ¿Qué documento se actualizó?
6. ¿Qué queda pendiente?
7. ¿Se puede continuar, iterar, pausar o archivar?
```

Estados posibles:

```text
Pasa
Pasa con pendientes
No pasa
No aplica
Requiere validación humana
```

---

## 22. Decisión sugerida

```text
D-A33 — Crear la Matriz Gates del Framework Genérico V4.1.0-borrador para formalizar compuertas de validación por nivel, perfil, producto, evidencia, ética, accesibilidad, documentación, archivo y continuidad.
```

**Estado sugerido:** Aceptada para continuidad documental.  
**Tipo de cambio:** Ajuste menor de gobernanza operativa y evaluación.  
**Justificación:** Permite avanzar con control sin convertir el framework en burocracia pesada.  
**Impacto:** Alto para calidad, trazabilidad, ética, accesibilidad y paso futuro a V4.1.0 estable.  
**Riesgo:** Bajo si los Gates se aplican proporcionalmente por nivel N1-N4.  
**Documentos afectados:** README, índice maestro, manifest JSON, mapa macro-meso-micro, matriz N1-N4, CHECKS, WIKI_SYNC, registro de decisiones, primer.  
**Versión afectada:** V4.1.0-borrador v0.1.  
**Recomendación:** Registrar D-A33 en la próxima actualización del Registro de Decisiones.

---

## 23. Próximo producto recomendado

Crear:

```text
2026-05-04_CHECKS_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

### Propósito de CHECKS

El documento CHECKS debe convertir esta matriz en listas verificables, usables y proporcionales:

```text
CHECKS_N1
CHECKS_N2
CHECKS_N3
CHECKS_N4
CHECKS_IA
CHECKS_ETICA
CHECKS_ACCESIBILIDAD
CHECKS_DOCUMENTACION
CHECKS_WIKI
CHECKS_ARCHIVO
CHECKS_CALEIDOSCOPIO
```

La Matriz Gates define compuertas. CHECKS será la llave que confirma si la compuerta se abre.

---

## 24. Cierre

La Matriz Gates deja a V4.1.0-borrador con un sistema de avance controlado. No busca frenar la creatividad ni la investigación; busca evitar que los productos crucen el puente sin saber si el puente existe.

**Estado:** Listo para validación.  
**Siguiente acción:** Crear CHECKS V4.1.0-borrador v0.1.
