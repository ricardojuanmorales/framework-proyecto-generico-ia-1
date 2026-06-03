# CHECKS
## Framework Genérico V4.1.0 - Borrador v0.1

**Archivo:** `2026-05-04_CHECKS_Framework_Generico_V4_1_0_Borrador_v0-1.md`  
**Fecha:** 2026-05-04  
**Versión:** v0.1  
**Estado:** Documento inicial de listas verificables para rama V4.1.0-borrador  
**Marco madre:** Framework Genérico V4.0.0  
**Rama activa:** Framework Genérico V4.1.0-borrador  
**Nivel recomendado actual:** N3 - Avanzado  
**Tipo de documento:** Validación operativa, calidad, ética, accesibilidad, documentación y continuidad  
**Decisiones relacionadas:** D-A28, D-A29, D-A30, D-A31, D-A32, D-A33  

---

## 0. Propósito

Este documento convierte la **Matriz Gates V4.1.0-borrador** en listas de verificación prácticas.

La Matriz Gates define las compuertas.  
Este documento define las llaves.

Su función es permitir que cualquier sesión, documento, perfil, producto, integración Caleidoscopio o flujo humano-IA pueda ser revisado de forma proporcional al nivel N1-N4 antes de avanzar, cerrar, publicar, archivar o escalar.

---

## 1. Principio rector

```text
Ningún avance sustantivo debe continuar sin propósito, evidencia, revisión humana, documentación activa y continuidad.
```

Los CHECKS deben ser:

```text
proporcionales
claros
verificables
reutilizables
humanos
compatibles con IA
orientados a evidencia
```

No deben convertirse en liturgia burocrática. Un buen check no es una pared, es una baranda.

---

## 2. Estados permitidos para cada check

| Estado | Significado | Acción |
|---|---|---|
| Cumple | La evidencia está presente y revisada | Puede avanzar |
| Cumple con pendiente | Puede avanzar, pero debe registrar pendiente | Avanza con cautela |
| No cumple | Falta evidencia o validación crítica | No debe avanzar |
| No aplica | El check no corresponde al nivel o producto | Registrar razón |
| Requiere validación humana | La IA no debe resolverlo sola | Detener hasta revisión humana |

---

## 3. CHECKS maestro de sesión

Usar al inicio, durante y al cierre de toda sesión V4.1.0-borrador.

### 3.1 Antes de comenzar

- [ ] ¿Está claro el propósito de la sesión?
- [ ] ¿Está identificado el problema, tensión o necesidad?
- [ ] ¿Está definido el nivel N1, N2, N3 o N4?
- [ ] ¿Está identificado el perfil activo o modo Caleidoscopio?
- [ ] ¿Se revisaron los documentos base necesarios?
- [ ] ¿Se sabe qué producto tangible se espera?
- [ ] ¿Se identificaron riesgos iniciales?
- [ ] ¿Se sabe qué documentos podrían actualizarse?
- [ ] ¿Se evitó reescribir documentos cerrados sin decisión explícita?
- [ ] ¿Se respetó la secuencia mapa, documento, carpeta, automatización?

### 3.2 Durante el trabajo

- [ ] ¿Se está produciendo evidencia verificable?
- [ ] ¿La IA se usa como apoyo y no como autoridad?
- [ ] ¿Se registran decisiones relevantes?
- [ ] ¿Se distingue entre borrador, documento derivado, gobernanza y archivo?
- [ ] ¿Se mantiene trazabilidad con documentos base?
- [ ] ¿Se revisan riesgos éticos, técnicos, culturales o socioambientales?
- [ ] ¿Se consideran accesibilidad y lenguaje claro?
- [ ] ¿Se evita crear componentes duplicados?
- [ ] ¿Se respeta el nivel de activación seleccionado?
- [ ] ¿Se registra cualquier cambio de alcance?

### 3.3 Antes de cerrar

- [ ] ¿Existe producto o avance tangible?
- [ ] ¿El producto tiene nombre, fecha, versión y estado?
- [ ] ¿Se actualizó changelog si hubo cambio sustantivo?
- [ ] ¿Se actualizó registro de decisiones si hubo decisión nueva?
- [ ] ¿Se identificó si la wiki debe actualizarse?
- [ ] ¿Se dejó próximo paso claro?
- [ ] ¿Se preparó primer de continuidad si corresponde?
- [ ] ¿Se definió si el resultado debe archivarse?
- [ ] ¿Se registraron riesgos pendientes?
- [ ] ¿La sesión puede ser retomada por otra persona o IA?

---

## 4. CHECKS por nivel N1-N4

## 4.1 CHECKS N1 - Mínimo controlado

Usar para microtareas, exploraciones, borradores simples o productos de bajo riesgo.

### Entrada

- [ ] Propósito definido en una o dos oraciones.
- [ ] Producto esperado identificado.
- [ ] Riesgo bajo confirmado.
- [ ] No hay datos sensibles.
- [ ] No hay publicación pública inmediata.
- [ ] No requiere integración compleja de perfiles.
- [ ] No requiere automatización.

### Producción

- [ ] Se produjo un documento, borrador, idea, prototipo o evidencia mínima.
- [ ] Se revisó que el resultado responde al propósito.
- [ ] Se registró cualquier uso relevante de IA.
- [ ] Se identificó si debe escalar a N2.
- [ ] Se evitó activar plantillas innecesarias.

### Cierre

- [ ] Se dejó una nota de cierre.
- [ ] Se indicó próximo paso.
- [ ] Se guardó el archivo o resultado si corresponde.
- [ ] Se registró si no requiere seguimiento.

### No exigir en N1

```text
manifest JSON
RACI formal
matriz completa de riesgos
wiki extensa
auditoría
release institucional
automatización
```

---

## 4.2 CHECKS N2 - Operativo

Usar para proyectos pequeños o medianos con varias fases, documentación y validación básica.

### Entrada

- [ ] Brief de proyecto creado.
- [ ] Alcance definido.
- [ ] Contexto básico identificado.
- [ ] Perfil activo seleccionado.
- [ ] Nivel N2 justificado.
- [ ] Producto esperado definido.
- [ ] Criterios de aceptación iniciales definidos.
- [ ] Riesgos iniciales revisados.

### Producción

- [ ] Documento base o README creado.
- [ ] Matriz operativa creada si aplica.
- [ ] Uso de IA documentado si aplica.
- [ ] Revisión humana realizada.
- [ ] Fuentes, código, obra o prototipo organizados.
- [ ] Checklist operativo aplicado.
- [ ] Decisiones principales registradas.
- [ ] Accesibilidad básica revisada.
- [ ] Derechos o licencias revisados si aplica.

### Cierre

- [ ] Changelog actualizado si hubo cambio sustantivo.
- [ ] Registro de decisiones actualizado si hubo decisión.
- [ ] Wiki mínima actualizada si cambió proceso.
- [ ] Primer o nota de continuidad creada.
- [ ] Archivo básico preparado si corresponde.
- [ ] Se determinó si escala a N3.

---

## 4.3 CHECKS N3 - Avanzado

Usar para la fase activa de V4.1.0-borrador y proyectos con perfiles transversales, Caleidoscopio, IA, evaluación, wiki y archivo.

### Entrada

- [ ] README o documento de entrada revisado.
- [ ] Índice maestro revisado.
- [ ] Manifest JSON disponible si aplica.
- [ ] Mapa macro-meso-micro consultado.
- [ ] Matriz N1-N4 revisada.
- [ ] Matriz Gates revisada.
- [ ] Perfil transversal o modo Caleidoscopio seleccionado.
- [ ] Evidencia mínima esperada definida.
- [ ] Riesgos técnicos, éticos, epistemológicos, culturales o socioambientales identificados.
- [ ] Documentos oficiales potencialmente afectados identificados.

### Producción

- [ ] Matriz de perfil, combinación o C1-C7 aplicada si corresponde.
- [ ] AGENTS / SKILLS / WORKFLOWS definidos si aplica.
- [ ] CHECKS específicos aplicados.
- [ ] WIKI_SYNC evaluado.
- [ ] Uso de IA documentado con rol, límites y validación humana.
- [ ] Evidencias organizadas.
- [ ] Evaluación técnica, epistemológica, estética o integrada realizada según perfil.
- [ ] Accesibilidad revisada.
- [ ] Derechos, licencias y permisos revisados.
- [ ] Changelog actualizado.
- [ ] Registro de decisiones actualizado.
- [ ] Primer de continuidad actualizado si corresponde.

### Cierre

- [ ] Producto tiene versión, estado y fecha.
- [ ] Producto está enlazado a documentos base.
- [ ] Riesgos pendientes quedan registrados.
- [ ] Wiki pendiente o actualizada queda indicada.
- [ ] Archivo preparado con manifest o paquete si aplica.
- [ ] Próximo paso declarado.
- [ ] Se evaluó si debe escalar a N4 o mantenerse en N3.

---

## 4.4 CHECKS N4 - Institucional

Usar para programas, laboratorios, políticas, adopción formal, publicación pública, repositorios oficiales, capacitación, auditoría o transferencia institucional.

### Entrada

- [ ] Propósito institucional definido.
- [ ] Responsable académico o institucional identificado.
- [ ] RACI creado.
- [ ] Gobernanza formal definida.
- [ ] Nivel N4 justificado.
- [ ] Riesgos altos identificados.
- [ ] AIAS / IBATA / DUA / POUR aplicados según corresponda.
- [ ] Plan de implementación creado.
- [ ] Plan de mantenimiento creado.
- [ ] Plan de capacitación creado.
- [ ] Plan de archivo histórico creado.

### Producción

- [ ] Evaluación integral realizada.
- [ ] Auditoría o revisión externa contemplada si aplica.
- [ ] Documentación pública o institucional preparada.
- [ ] Wiki actualizada y validada.
- [ ] Indicadores o dashboard definidos.
- [ ] Licencias, derechos y consentimientos revisados.
- [ ] Seguridad y privacidad revisadas.
- [ ] Capacitación diseñada.
- [ ] Soporte y mantenimiento asignados.
- [ ] Release institucional preparado.

### Cierre

- [ ] Decisión institucional registrada.
- [ ] Changelog formal actualizado.
- [ ] Registro de decisiones formal actualizado.
- [ ] Archivo histórico completo preparado.
- [ ] Primer institucional creado.
- [ ] Plan de revisión periódica establecido.
- [ ] Validación humana final registrada.

---

## 5. CHECKS por perfil transversal

## 5.1 CHECKS Programador Humanista

### Entrada

- [ ] ¿Está definido el problema técnico o sociotécnico?
- [ ] ¿Se tradujo el problema a requisitos?
- [ ] ¿Se identificó arquitectura o estructura mínima?
- [ ] ¿Se definió el entorno de trabajo?
- [ ] ¿Se revisaron datos, secretos, permisos o dependencias?
- [ ] ¿Se definió cómo se usará IA en el flujo técnico?
- [ ] ¿Se sabe qué evidencia técnica se producirá?

### Producción

- [ ] Código, script, prototipo o estructura creada.
- [ ] README o documentación técnica actualizada.
- [ ] Prueba manual o automatizada realizada según nivel.
- [ ] Errores o limitaciones documentadas.
- [ ] Seguridad mínima revisada.
- [ ] Dependencias registradas.
- [ ] Uso de IA revisado por humano.
- [ ] Se evitó saltar arquitectura cuando era necesaria.
- [ ] Se evitó desplegar sin prueba mínima.

### Cierre

- [ ] Changelog técnico actualizado si aplica.
- [ ] Decisiones técnicas registradas.
- [ ] Instrucciones de uso incluidas.
- [ ] Próximo paso técnico definido.
- [ ] Archivo o release preparado si aplica.
- [ ] Wiki técnica actualizada si cambió proceso.

---

## 5.2 CHECKS Investigador Transdisciplinario

### Entrada

- [ ] ¿Está definido el problema, fenómeno o tensión?
- [ ] ¿Está formulada la pregunta guía?
- [ ] ¿Está identificado el contexto social, cultural, ambiental o institucional?
- [ ] ¿Se definieron saberes relevantes?
- [ ] ¿Se estableció metodología inicial?
- [ ] ¿Se definieron criterios de fuentes?
- [ ] ¿Se identificaron riesgos epistemológicos o éticos?
- [ ] ¿Se sabe si habrá publicación multimodal o REA?

### Producción

- [ ] Fuentes registradas.
- [ ] Criterios de inclusión y exclusión documentados.
- [ ] Se distinguió fuente, dato, evidencia e interpretación.
- [ ] Se documentó uso de IA.
- [ ] Se revisaron sesgos y límites.
- [ ] Se produjo síntesis verificable.
- [ ] Se aplicó validación humana.
- [ ] Se protegieron saberes sensibles o comunitarios.
- [ ] Se preparó ficha multimodal si aplica.

### Cierre

- [ ] SOURCE_REGISTRY o equivalente actualizado.
- [ ] EVIDENCE_LEDGER o equivalente actualizado.
- [ ] Bibliografía o fuentes organizadas.
- [ ] Hallazgos y límites documentados.
- [ ] Próxima pregunta o línea de indagación indicada.
- [ ] Wiki investigativa actualizada si cambió proceso.
- [ ] Archivo de fuentes preparado si corresponde.

---

## 5.3 CHECKS Artista Transdisciplinario

### Entrada

- [ ] ¿Está definido el contexto cultural, social, territorial o simbólico?
- [ ] ¿Está clara la intención artística o creativa?
- [ ] ¿Se identificaron memorias, símbolos, materialidades o comunidades relacionadas?
- [ ] ¿Se revisaron derechos culturales, autoría y permisos?
- [ ] ¿Se definió el tipo de obra, experiencia, avatar, colección o publicación?
- [ ] ¿Se revisó accesibilidad estética y multimodal?
- [ ] ¿Se identificó si se usará IA generativa o herramientas digitales?

### Producción

- [ ] Concepto, boceto, prototipo u obra creado.
- [ ] Statement o nota conceptual redactada.
- [ ] Ficha técnica o curatorial creada.
- [ ] Derechos, licencias y permisos documentados.
- [ ] Uso de IA declarado si aplica.
- [ ] Accesibilidad revisada.
- [ ] Materialidades o medios documentados.
- [ ] Retroalimentación humana o comunitaria considerada si aplica.
- [ ] Archivo de versiones preparado.

### Cierre

- [ ] Obra o prototipo tiene versión y estado.
- [ ] Curaduría documentada.
- [ ] Licencia o restricción indicada.
- [ ] Riesgos culturales o de representación registrados.
- [ ] Próximo paso creativo definido.
- [ ] Wiki artística actualizada si cambió proceso.
- [ ] Archivo de obra o colección preparado si corresponde.

---

## 5.4 CHECKS Caleidoscopio

### Entrada

- [ ] ¿El problema realmente requiere integración transdisciplinaria?
- [ ] ¿Está claro el propósito de integración?
- [ ] ¿Se identificó contexto social, cultural, ambiental, técnico o institucional?
- [ ] ¿Se seleccionaron perfiles a activar?
- [ ] ¿Se definió modo C1-C7?
- [ ] ¿Se justificó por qué no basta un solo perfil?
- [ ] ¿Se definió producto emergente esperado?
- [ ] ¿Se identificaron riesgos integrados?
- [ ] ¿Se definieron evidencias mínimas por perfil?

### Producción

- [ ] Matriz C1-C7 aplicada.
- [ ] Roles humanos e IA definidos.
- [ ] Skills necesarias identificadas.
- [ ] Workflow de integración definido.
- [ ] Evidencias técnicas, investigativas, creativas y éticas organizadas.
- [ ] Producto o prototipo emergente creado.
- [ ] Validación técnica, epistemológica, estética, ética y accesible realizada.
- [ ] Derechos, licencias y archivo revisados.
- [ ] Documentación integrada actualizada.

### Cierre

- [ ] Producto emergente descrito.
- [ ] Se explicó qué emergió que no podía producir un perfil aislado.
- [ ] Gates aplicados.
- [ ] WIKI_SYNC evaluado.
- [ ] Registro de decisiones actualizado.
- [ ] Changelog actualizado.
- [ ] Archivo integrado preparado.
- [ ] Primer de continuidad creado.

---

## 6. CHECKS IA responsable

Usar siempre que se emplee IA generativa, copilotos, agentes, automatización, clasificación, síntesis, generación de código, análisis de fuentes, imágenes, sonido, video o texto.

### 6.1 Uso de IA

- [ ] ¿Se declaró qué herramienta o tipo de IA se usó?
- [ ] ¿Se definió el rol de la IA?
- [ ] ¿Se evitó tratar la IA como autoridad final?
- [ ] ¿Se registraron prompts relevantes?
- [ ] ¿Se documentó qué produjo la IA?
- [ ] ¿Se documentó qué revisó o decidió el humano?
- [ ] ¿Se identificaron posibles errores, sesgos o lagunas?
- [ ] ¿Se verificaron datos, fuentes o resultados críticos?
- [ ] ¿Se evitó introducir datos sensibles innecesarios?
- [ ] ¿Se preparó disclosure si el producto se publica?

### 6.2 Validación humana

- [ ] ¿Una persona revisó el resultado?
- [ ] ¿Se contrastó con fuentes, criterios o pruebas?
- [ ] ¿Se corrigieron errores detectados?
- [ ] ¿Se distinguió entre asistencia, co-creación y decisión humana?
- [ ] ¿Se registraron límites del uso de IA?

### 6.3 No avanzar si

- [ ] La IA produjo afirmaciones no verificadas.
- [ ] La IA sustituyó lectura, juicio o validación.
- [ ] Hay datos sensibles sin protección.
- [ ] No se sabe quién es responsable del producto.
- [ ] El producto requiere disclosure y no lo tiene.

---

## 7. CHECKS ética, derechos y cuidado

### 7.1 Ética general

- [ ] ¿Se identificaron personas, comunidades o grupos afectados?
- [ ] ¿Se revisaron posibles daños?
- [ ] ¿Se definieron salvaguardas?
- [ ] ¿Se consideró justicia epistémica?
- [ ] ¿Se consideró reciprocidad comunitaria si aplica?
- [ ] ¿Se documentaron límites e incertidumbres?
- [ ] ¿Se evitó extracción de saberes sin reconocimiento?
- [ ] ¿Se revisó impacto socioambiental si aplica?

### 7.2 Derechos y licencias

- [ ] ¿Está clara la autoría humana?
- [ ] ¿Se declararon colaboradores IA si aplica?
- [ ] ¿Se revisó licencia del producto?
- [ ] ¿Se revisaron derechos de imágenes, audio, video, datos o código?
- [ ] ¿Hay consentimiento si se usan testimonios, comunidades o datos vivos?
- [ ] ¿Se registraron restricciones de uso?
- [ ] ¿Se definió citación recomendada si aplica?

### 7.3 Cuidado cultural

- [ ] ¿Se revisó el contexto cultural?
- [ ] ¿Se evitó apropiación cultural?
- [ ] ¿Se respetaron símbolos, memorias y prácticas?
- [ ] ¿Se incluyó validación comunitaria si corresponde?
- [ ] ¿Se documentó sensibilidad cultural?

---

## 8. CHECKS accesibilidad

### 8.1 Accesibilidad documental

- [ ] Títulos claros.
- [ ] Estructura jerárquica.
- [ ] Lenguaje comprensible.
- [ ] Tablas legibles.
- [ ] Listas no excesivamente densas.
- [ ] Metadatos claros.
- [ ] Formato editable cuando sea posible.
- [ ] Versión ligera si el documento es complejo.

### 8.2 Accesibilidad multimodal

- [ ] Texto alternativo para imágenes.
- [ ] Subtítulos para video.
- [ ] Transcripción para audio.
- [ ] Descripción de gráficos o visualizaciones.
- [ ] Contraste y legibilidad revisados si aplica.
- [ ] Navegación clara.
- [ ] No depender solo del color para comunicar.
- [ ] Instrucciones de uso claras.

### 8.3 DUA / POUR

- [ ] ¿Ofrece múltiples formas de representación?
- [ ] ¿Ofrece múltiples formas de acción o participación?
- [ ] ¿Ofrece múltiples formas de expresión?
- [ ] ¿Es perceptible?
- [ ] ¿Es operable?
- [ ] ¿Es comprensible?
- [ ] ¿Es robusto o transferible?

---

## 9. CHECKS documentación activa

### 9.1 Documentos mínimos

- [ ] README actualizado si corresponde.
- [ ] Índice actualizado si se añadió documento.
- [ ] Manifest actualizado si se añadió documento técnico o de gobernanza.
- [ ] Changelog actualizado si hubo cambio.
- [ ] Registro de decisiones actualizado si hubo decisión.
- [ ] Bitácora actualizada si hubo sesión compleja.
- [ ] Primer actualizado si cambia continuidad.
- [ ] Archivo preparado si se cierra ciclo.

### 9.2 Metadatos mínimos

Todo documento nuevo debe incluir:

```text
Archivo:
Fecha:
Versión:
Estado:
Framework:
Rama:
Nivel:
Tipo de documento:
Decisiones relacionadas:
Próximo paso:
```

### 9.3 No aceptar documento si

- [ ] No tiene nombre.
- [ ] No tiene versión.
- [ ] No tiene estado.
- [ ] No tiene propósito.
- [ ] No indica relación con documentos base.
- [ ] No indica próximo paso.
- [ ] Duplica otro documento sin justificación.

---

## 10. CHECKS wiki_sync

### 10.1 Determinar si aplica wiki_sync

Actualizar wiki si:

- [ ] Cambió un proceso.
- [ ] Cambió un perfil.
- [ ] Cambió una plantilla.
- [ ] Cambió un Gate.
- [ ] Cambió una regla de gobernanza.
- [ ] Se creó una guía reusable.
- [ ] Se creó un recurso educativo.
- [ ] Se creó un producto que otros deben usar.
- [ ] Se añadió vocabulario o glosario.
- [ ] Se abrió una nueva versión del framework.

### 10.2 Páginas posibles

- [ ] Home Framework Genérico V4.1.0.
- [ ] Guía de Perfiles Transversales.
- [ ] Guía Programador Humanista.
- [ ] Guía Investigador Transdisciplinario.
- [ ] Guía Artista Transdisciplinario.
- [ ] Guía Caleidoscopio.
- [ ] Guía agents / skills / workflows.
- [ ] Guía Gates y CHECKS.
- [ ] Glosario.
- [ ] Actualizaciones documentales.

### 10.3 Evidencia wiki_sync

```text
Página afectada:
Cambio requerido:
Documento fuente:
Tipo de actualización:
Responsable:
Estado:
Fecha:
Próxima revisión:
```

---

## 11. CHECKS archivo

### 11.1 Antes de archivar

- [ ] ¿El ciclo está realmente cerrado?
- [ ] ¿Existe reporte de cierre?
- [ ] ¿Los documentos tienen versión y estado?
- [ ] ¿El manifest está actualizado?
- [ ] ¿El changelog está actualizado?
- [ ] ¿El registro de decisiones está actualizado?
- [ ] ¿Hay primer de continuidad?
- [ ] ¿Se identificó carpeta de archivo?
- [ ] ¿Se preservaron fuentes, código, obras, prompts o evidencias?
- [ ] ¿Se indica qué no debe modificarse?

### 11.2 Destinos posibles

```text
99_ARCHIVO_HISTORICO/Releases/
99_ARCHIVO_HISTORICO/Versiones_Cerradas/
99_ARCHIVO_HISTORICO/Ciclos_Completados/
99_ARCHIVO_HISTORICO/Exportaciones_Finales/
```

### 11.3 Paquete mínimo de archivo

```text
README o índice
Reporte de cierre
Changelog
Registro de decisiones
Manifest
Documentos base
Documentos derivados
Primer de continuidad
```

---

## 12. CHECKS para pasar de borrador a estable

Usar antes de considerar V4.1.0 como versión estable.

- [ ] README V4.1.0 validado.
- [ ] Índice maestro validado.
- [ ] Manifest JSON validado.
- [ ] Mapa macro-meso-micro validado.
- [ ] Matriz N1-N4 validada.
- [ ] Matriz Gates validada.
- [ ] CHECKS validado.
- [ ] WIKI_SYNC creado y validado.
- [ ] Plan de archivo histórico creado.
- [ ] Protocolo de paso a estable creado.
- [ ] Changelog actualizado.
- [ ] Registro de decisiones actualizado.
- [ ] Primer final creado.
- [ ] Wiki humana sincronizada.
- [ ] Riesgos pendientes registrados.
- [ ] Validación humana explícita recibida.
- [ ] Se confirma que V4.0.0 queda archivada y no sobrescrita.
- [ ] Se confirma que V4.1.0 estable tiene alcance definido.
- [ ] Se confirma que automatización, si existe, está gobernada.

Estado actual:

```text
V4.1.0-borrador puede avanzar.
V4.1.0-estable todavía no debe declararse.
```

---

## 13. CHECKS de no proliferación documental

Antes de crear un documento nuevo:

- [ ] ¿Este documento tiene propósito distinto?
- [ ] ¿No duplica otro documento existente?
- [ ] ¿Puede ser una sección de un documento actual?
- [ ] ¿Tiene ubicación macro-meso-micro?
- [ ] ¿Tiene versión?
- [ ] ¿Tiene estado?
- [ ] ¿Tiene relación con una decisión?
- [ ] ¿Tiene próximo paso?
- [ ] ¿Requiere wiki_sync?
- [ ] ¿Requiere archivo?

Si tres o más respuestas son negativas, no crear el documento todavía. Primero mapear.

---

## 14. Plantilla breve de aplicación de CHECKS

```text
# Aplicación de CHECKS

Fecha:
Proyecto / documento:
Nivel N1-N4:
Perfil / modo Caleidoscopio:
Gate relacionado:
Checklist aplicado:
Resultado: cumple / cumple con pendiente / no cumple / no aplica / requiere validación humana
Evidencia:
Riesgos pendientes:
Documentos actualizados:
Wiki_sync:
Archivo:
Próxima acción:
Responsable humano:
```

---

## 15. Decisión sugerida

```text
D-A34 — Crear CHECKS Framework Genérico V4.1.0-borrador v0.1 como documento operativo de listas verificables para niveles N1-N4, perfiles transversales, Caleidoscopio, IA responsable, ética, accesibilidad, documentación activa, wiki_sync, archivo y paso futuro de borrador a estable.
```

**Estado sugerido:** Aceptada para continuidad documental.  
**Tipo de cambio:** Ajuste menor de gobernanza operativa y evaluación.  
**Justificación:** Convierte la Matriz Gates en prácticas verificables y aplicables.  
**Impacto:** Alto para calidad, continuidad, seguridad, accesibilidad, archivo y transferencia.  
**Riesgo:** Bajo si se aplica proporcionalmente por nivel y no como burocracia rígida.  
**Documentos afectados:** README, índice maestro, manifest JSON, mapa macro-meso-micro, matriz N1-N4, matriz Gates, WIKI_SYNC, registro de decisiones, primer.  
**Versión afectada:** V4.1.0-borrador v0.1.  
**Recomendación:** Registrar D-A34 en la próxima actualización del Registro de Decisiones.

---

## 16. Próximo producto recomendado

Crear:

```text
2026-05-04_WIKI_SYNC_Framework_Generico_V4_1_0_Borrador_v0-1.md
```

### Propósito de WIKI_SYNC

Definir qué páginas humanas deben actualizarse, con qué fuente documental, qué tipo de cambio, qué prioridad y qué estado.

CHECKS verifica que la puerta puede abrirse.  
WIKI_SYNC se asegura de que alguien encuentre la puerta después.

---

## 17. Cierre

Este documento convierte la gobernanza en acción cotidiana. Los Gates dicen cuándo mirar. Los CHECKS dicen qué mirar. La continuidad depende de que cada mirada deje huella.

**Estado:** Listo para validación.  
**Siguiente acción:** Crear WIKI_SYNC V4.1.0-borrador v0.1.
