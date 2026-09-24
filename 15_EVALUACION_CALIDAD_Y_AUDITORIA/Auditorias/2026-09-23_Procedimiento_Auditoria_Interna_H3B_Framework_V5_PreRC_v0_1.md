# Procedimiento de Auditoría Interna H3-B · Framework V5 Pre-RC v0.1

**Fecha:** 2026-09-23  
**Rama objetivo:** `fase3-construccion-v5`  
**Propósito:** ejecutar la revisión humana final del producto integrado antes de autorizar, autorizar con reservas o bloquear `v5.0.0-rc.1`.

---

## 1. Principio de trabajo

Esta auditoría no busca rediseñar V5.

Busca responder una sola pregunta:

```text
¿Puede una persona usar, comprender, revisar y transportar
el Framework V5 de forma suficientemente segura,
accesible, trazable y autónoma para entrar en RC?
```

Clasificación única para cada prueba:

```text
PASS
PASS WITH RESERVATIONS
BLOCK
```

Solo `BLOCK` impide promover la RC.

---

## 2. Qué necesitas antes de comenzar

Preparar:

- navegador moderno;
- acceso al build preview o ejecución local de V5;
- carpeta local vacía para exportaciones;
- editor de texto;
- lector ZIP;
- este procedimiento;
- hoja de hallazgos;
- un proyecto de prueba ficticio;
- opcionalmente lector de pantalla del sistema.

No usar datos personales ni información sensible.

---

## 3. Proyecto de prueba recomendado

Usar un caso sencillo y suficientemente rico:

**Nombre:** Biblioteca Escolar Híbrida  
**Problema:** estudiantes usan poco los recursos disponibles y la experiencia está fragmentada entre espacio físico y recursos digitales.  
**Contexto:** escuela secundaria con recursos limitados.  
**Propósito:** diseñar una experiencia integrada y accesible que aumente descubrimiento, uso y reflexión.  

Este caso permite activar PH, IT y AT sin requerir un dominio especializado.

---

# BLOQUE A · Entrada y comprensión

## A1. Abrir la aplicación

Verificar:

- carga sin login;
- no solicita cuenta;
- no solicita API key;
- no requiere IA externa;
- muestra claramente que es Framework V5;
- informa el modo de persistencia.

**Evidencia mínima:** captura o nota de pantalla inicial.

**Resultado:** PASS / PASS WITH RESERVATIONS / BLOCK.

---

## A2. Revisar APRENDER

Leer la zona APRENDER sin consultar documentación externa.

Preguntarse:

- ¿entiendo qué problema resuelve el Framework?;
- ¿distingo PH, IT y AT?;
- ¿entiendo que Caleidoscopio no es un cuarto perfil?;
- ¿entiendo N1–N4 sin verlo como puntuación?;
- ¿queda claro que la IA sugiere pero no decide materialmente?

**Criterio PASS:** se puede explicar el modelo básico en lenguaje propio después de una lectura breve.

---

# BLOQUE B · Activación operacional

## B1. Probar START

Crear el proyecto de prueba en modo START.

Completar:

- nombre;
- problema;
- contexto;
- propósito;
- perfiles autorizados.

Verificar:

- no exige llenar campos innecesarios;
- el lenguaje es comprensible;
- se distingue claramente lo obligatorio de lo opcional;
- el estado resultante se entiende.

Registrar:

- perfil o perfiles seleccionados;
- N1 inicial;
- siguiente paso propuesto.

---

## B2. Probar INTEGRATE

Crear un segundo proyecto en modo INTEGRATE.

Usar como procedencia ficticia:

```text
Proyecto escolar existente con README,
material pedagógico y una aplicación web básica.
```

Artefactos:

```text
README.md
docs/contexto.md
app/index.html
```

Verificar:

- exige procedencia;
- no fuerza a reorganizar el proyecto;
- preserva explícitamente la fuente;
- la relación Framework/proyecto existente se entiende.

---

## B3. Probar AUDIT

Crear un tercer proyecto en modo AUDIT.

Foco sugerido:

```text
Contrastar trazabilidad de decisiones,
calidad de evidencia y claridad de responsabilidades.
```

Verificar:

- exige foco de auditoría;
- trata el proyecto como objeto de contraste;
- no aparenta modificarlo automáticamente;
- el estado inicial aparece como revisión.

---

# BLOQUE C · Estado vivo

Usar el proyecto START.

## C1. Registrar evidencia

Ejemplo:

**Título:** Entrevistas con estudiantes  
**Resumen:** Cinco estudiantes identifican dificultad para descubrir recursos relevantes.

Verificar:

- queda visible;
- aumenta contador de portafolio;
- persiste al recargar si localStorage está disponible.

---

## C2. Registrar una decisión humana

Ejemplo:

**Decisión:** Priorizar descubrimiento guiado antes de añadir nuevas funciones.  
**Razón:** La evidencia muestra un problema de orientación, no de falta de contenido.

Verificar:

- queda registrada como decisión humana;
- no aparece atribuida a IA;
- se conserva la razón.

---

## C3. Actualizar N1–N4

Cambiar:

```text
Proyecto: N1 → N2
Autonomía: N1 → N2
```

Preguntarse:

- ¿se entiende qué está cambiando?;
- ¿se siente como madurez operacional y no como calificación?

---

## C4. Registrar transferencia

Ejemplo:

```text
Origen: IT
Destino: PH
Objeto: criterio de trazabilidad de evidencia
```

Verificar:

- queda registrada;
- no borra responsabilidad del perfil de origen;
- se entiende como transferencia situada.

---

## C5. Reabrir

Registrar razón:

```text
Nueva evidencia contradice una decisión previa.
```

Verificar:

- estado cambia a reopened;
- se crea hito;
- no se pierde historial.

---

# BLOQUE D · Base Federada e invocación

## D1. Buscar conocimiento

Consultar:

```text
Necesito una metodología para desarrollar la aplicación
con arquitectura, pruebas y trazabilidad.
```

Esperado:

- SDD aparece entre primeros resultados;
- se muestran pocos resultados;
- cada resultado explica propósito;
- muestra fuente canónica;
- muestra evidencia esperada.

---

## D2. Invocar

Invocar SDD.

Verificar:

- queda registrado en portafolio;
- queda registrado en `knowledgeInvoked`;
- la recomendación no se presenta como obligación automática.

---

# BLOQUE E · Portabilidad y seguridad

## E1. Exportar ZIP

Exportar el proyecto START como ZIP.

Abrir fuera de la aplicación.

Debe contener al menos:

```text
README.md
manifest.json
framework-state.json
portfolio.json
decisions.json
transfers.json
schemas/
```

Verificar:

- archivos legibles;
- proyecto entendible fuera de la app;
- no aparecen secretos;
- no aparecen datos no introducidos;
- versión y modo son identificables.

---

## E2. Importar el ZIP exportado

Cerrar o reiniciar la aplicación.

Importar el ZIP.

Verificar:

- primero valida;
- pide confirmación humana;
- no persiste antes de aceptar;
- restaura problema;
- restaura perfiles;
- restaura N1–N4;
- restaura evidencia;
- restaura decisiones;
- restaura transferencias;
- restaura procedencia cuando aplique.

Resultado esperado:

```text
roundtrip semántico preservado
```

---

## E3. Probar rechazo seguro

Crear o usar un archivo JSON inválido.

Intentar importar.

Esperado:

- rechazo;
- mensaje comprensible;
- no corrupción;
- no persistencia;
- app continúa operativa.

Si es viable, repetir con ZIP inválido.

---

# BLOQUE F · Accesibilidad y experiencia humana

## F1. Solo teclado

Sin usar mouse:

- recorrer toda la aplicación con Tab / Shift+Tab;
- abrir selects;
- marcar perfiles;
- crear proyecto;
- registrar evidencia;
- buscar conocimiento;
- exportar.

Verificar:

- foco siempre visible;
- orden lógico;
- ningún control queda inaccesible.

---

## F2. Lectura y comprensión

Observar:

- contraste;
- tamaño de texto;
- densidad;
- longitud de formularios;
- claridad de botones;
- mensajes de estado;
- uso en ventana estrecha.

Clasificar cualquier fricción:

```text
cosmética
usabilidad
accesibilidad
bloqueante
```

---

## F3. Lector de pantalla, si está disponible

Recorrer al menos:

- encabezado;
- APRENDER;
- formulario START;
- estado;
- botones de exportación/importación.

Verificar:

- headings útiles;
- labels comprensibles;
- estados anunciados;
- controles identificables.

Si no se dispone de lector de pantalla, registrar:

```text
NOT TESTED · external accessibility review pending
```

No marcar PASS sin evidencia.

---

# 4. Hoja de hallazgos

Usar una fila por hallazgo:

| ID | Bloque | Observación | Severidad | Evidencia | Resultado | Acción sugerida |
|---|---|---|---|---|---|---|
| H3B-001 | F1 | Ejemplo | menor / mayor / crítica | captura / nota | PASS WITH RESERVATIONS | corregir antes de final |

Regla:

- **menor:** no impide tarea ni comprensión;
- **mayor:** degrada una función material;
- **crítica:** compromete seguridad, pérdida de datos, agencia humana, accesibilidad esencial o flujo principal.

Una crítica normalmente implica `BLOCK`.

---

# 5. Dictamen final

Al terminar, responder estas ocho preguntas:

1. ¿Una persona nueva puede orientarse?
2. ¿Puede activar START, INTEGRATE y AUDIT?
3. ¿Puede registrar estado vivo sin ambigüedad?
4. ¿La autoridad humana es visible?
5. ¿La Base Federada orienta sin sobrecargar?
6. ¿El ZIP puede salir y regresar preservando significado?
7. ¿La app rechaza entradas inválidas sin daño?
8. ¿La experiencia básica es accesible y comprensible?

---

## 6. Regla de decisión H3-B

### PASS

```text
sin BLOCK
+ reservas menores no comprometen RC
```

Resultado:

```text
AUTORIZAR v5.0.0-rc.1
```

### PASS WITH RESERVATIONS

```text
sin BLOCK
+ deuda concreta
+ mitigación / seguimiento explícito
```

Resultado:

```text
AUTORIZAR v5.0.0-rc.1 CON RESERVAS
```

### BLOCK

```text
seguridad
o pérdida de datos
o fallo de roundtrip
o agencia humana comprometida
o accesibilidad esencial rota
o flujo principal inutilizable
```

Resultado:

```text
NO PROMOVER RC
→ corregir
→ repetir solo bloques afectados
```

---

# 7. Evidencia mínima que debe conservarse

No hace falta documentar cada clic.

Conservar solamente:

- fecha;
- navegador / plataforma;
- build o commit revisado;
- resultado por bloque A–F;
- hoja de hallazgos;
- 3–6 capturas representativas;
- ZIP exportado de prueba;
- dictamen H3-B;
- reservas aceptadas;
- decisión humana final.

---

# 8. Cierre recomendado

El cierre debe producir un solo documento:

```text
Resultado_Auditoria_Interna_H3B_Framework_V5_PreRC_v0_1.md
```

con:

- alcance;
- evidencia;
- hallazgos;
- reservas;
- dictamen;
- autorización humana.

Evitar crear documentos adicionales salvo que un BLOCK requiera una investigación separada.
