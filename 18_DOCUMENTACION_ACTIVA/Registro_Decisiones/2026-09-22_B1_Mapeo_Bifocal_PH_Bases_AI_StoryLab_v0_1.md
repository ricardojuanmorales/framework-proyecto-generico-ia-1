# B1 · Mapeo bifocal PH + Bases de Conocimiento
## AI StoryLab 1 como prototipo de contraste

**Fecha:** 2026-09-22  
**Estado:** experimental / no canónico  
**Rama:** `integracion-ph-bases-fase2`  
**Base:** B0 Línea base arqueológica  
**Propósito:** mapear la práctica observada en AI StoryLab 1 contra el Programador Humanista y contra las Bases de Conocimiento sin asumir transferencia literal de estructura.

---

## 1. Lectura A — Práctica ↔ PH

### Evidencia: delimitación documental previa a código
Se observa en H08-0/H08-1:
- alcance autorizado;
- reservas;
- fronteras;
- arquitectura provisional;
- criterios de avance;
- cero código funcional en etapas iniciales.

Mapeo PH:
- **PH-C01** situación, propósito y criterios de intervención;
- **PH-C02** diseño computacional y arquitectura;
- **PH-C07** documentación, trazabilidad y continuidad;
- **PH-C08** evolución y transferencia situada;
- **UN-PH-01** situar y especificar;
- **UN-PH-02** diseñar arquitectura;
- **UN-PH-05** documentar y hacer mantenible.

Lectura:
PH explica adecuadamente la práctica. No aparece necesidad de una competencia nueva denominada SDD.

Estado provisional: **CONFIRMA PH**.

---

### Evidencia: arquitectura reversible y decisiones diferidas
Se observa:
- stack provisional;
- persistencia diferida;
- adaptadores sustituibles;
- frontera legacy;
- alternativas ponderadas;
- capacidad explícita de reabrir decisiones.

Mapeo PH:
- **PH-C02** diseño y arquitectura;
- **PH-C04** confiabilidad y recuperación;
- **PH-C08** mantenimiento, evolución y transferencia;
- **UN-PH-02** diseñar arquitectura;
- **UN-PH-04** verificar, proteger y recuperar;
- **UN-PH-06** transferir, evolucionar y reabrir.

Lectura:
la reversibilidad está cubierta por PH, pero AI StoryLab la usa con suficiente centralidad como para investigar si debe hacerse más visible como principio operativo.

Estado provisional: **CONFIRMA + posible REFINA**.

---

### Evidencia: contratos, schemas e invariantes antes de interfaces
Se observa:
- objetos de dominio;
- contratos;
- schemas versionados;
- fixtures;
- invariantes;
- errores tipados;
- política de migración.

Mapeo PH:
- **PH-C02** arquitectura;
- **PH-C03** construcción e integración;
- **PH-C04** verificación;
- **PH-C06** seguridad/privacidad;
- **PH-C07** trazabilidad;
- **UN-PH-02**, **UN-PH-03**, **UN-PH-04**.

Lectura:
PH cubre la actuación, pero el conocimiento técnico necesario para ejecutar este patrón no está resuelto por la matriz de competencias. Debe venir de Bases o de rutas comunes.

Estado provisional: **CONFIRMA PH / REABRE suficiencia cognitiva**.

---

### Evidencia: prueba, CI y auditoría como parte del diseño
Se observa:
- typecheck;
- tests;
- paridad dominio-schema;
- auditoría de arquitectura;
- auditoría de secretos;
- CI reproducible;
- revisión independiente.

Mapeo PH:
- **PH-C04** verificación, confiabilidad y recuperación;
- **PH-C06** seguridad;
- **PH-C07** trazabilidad;
- **UN-PH-04** verificar, proteger y recuperar;
- gates **G-PH-3**, **G-PH-4**, **G-PH-5**.

Lectura:
PH explica claramente la práctica.

Estado provisional: **CONFIRMA PH**.

---

### Evidencia: autoridad humana separada de automatización
Patrón observado:

```text
CI verifica ejecución
re-review interpreta evidencia
persona revisora aprueba integración
gate autoriza siguiente unidad
```

Mapeo PH:
- **PH-C05** integración H-M-IA;
- **PH-C07** trazabilidad;
- **PH-C08** evolución;
- **V-PH-10** gobernanza y juicio humano;
- múltiples gates.

Lectura:
PH ya contiene esta arquitectura. Sin embargo, la distinción entre verificar, interpretar, autorizar y habilitar podría requerir nomenclatura compartida para Fase 2.

Estado provisional: **CONFIRMA + EMERGE nomenclatura**.

---

### Evidencia: implementación que corrige especificación
Caso PR #58:
- dominio y JSON Schema divergían;
- la prueba detecta grieta semántica;
- se define semántica única;
- se agregan pruebas compartidas.

Mapeo PH:
- **PH-C02** arquitectura;
- **PH-C03** construcción;
- **PH-C04** verificación;
- **PH-C07** trazabilidad;
- **PH-C08** evolución/reapertura;
- **UN-PH-04**, **UN-PH-06**.

Lectura:
el perfil contempla reapertura, pero la práctica muestra con fuerza que especificación y código deben coevolucionar.

Estado provisional: **REFINA interpretación operacional de PH**.

---

## 2. Lectura B — Práctica ↔ Bases de Conocimiento

La Base de Conocimiento histórica ya reconoce familias pertinentes:

- F2-BCC-04 metodologías, herramientas y procesos;
- F2-BCC-05 rúbricas y evaluación;
- F2-BCC-06 flujo del conocimiento;
- F2-BCC-07 seguridad longitudinal;
- F2-BCC-08 perfiles específicos.

Además, el índice histórico menciona explícitamente SDD/TDD/CI/CD dentro de preparación futura.

### Hallazgo 1
Existe **arquitectura de clasificación**, pero no aparece todavía una Base madura e invocable que describa el patrón SDD observado en AI StoryLab como circuito integrado.

Estado: **REFINA / posible EMERGE**.

### Hallazgo 2
El conocimiento requerido por la práctica no es exclusivamente PH.

Ejemplos:
- contratos, schemas, arquitectura, pruebas → conocimiento técnico PH;
- evaluación de validez de evidencia y método → puede requerir IT;
- accesibilidad perceptual/mediación → puede requerir AT o funciones comunes;
- gobernanza, metadatos y transferencia → conocimiento común del Framework.

Estado: **REUBICA potencialmente parte de la Base histórica**.

### Hallazgo 3
La residencia histórica bajo PH no equivale a propiedad epistemológica.

La propia gobernanza PH ya lo reconoce.

Estado: **CONFIRMA deuda de residencia**.

### Hallazgo 4
La antigua Fase 2 histórica contiene mucha taxonomía y planificación anticipada. AI StoryLab sugiere un enfoque más empírico:

```text
práctica real
→ conocimiento requerido
→ patrón reusable
→ Base invocable
```

en vez de:

```text
taxonomía completa
→ documentos planificados
→ posible uso futuro
```

Estado: **REABRE método de construcción de Fase 2**.

---

## 3. Distinción arquitectura vs conocimiento

### Arquitectura PH parece suficiente cuando:
- delimita problema;
- diseña arquitectura;
- construye;
- verifica;
- gobierna H-M-IA;
- integra seguridad;
- documenta;
- evoluciona y reabre.

### Bases de Conocimiento parecen insuficientemente estabilizadas cuando:
- una operación PH existe pero no hay conocimiento invocable claro;
- el conocimiento está disperso entre carpetas históricas;
- la clasificación existe, pero falta evidencia de uso real;
- una metodología aparece nombrada pero no operacionalizada.

Regla provisional:

```text
PH dice qué capacidad debe existir.
Base de Conocimiento ayuda a saber cómo ejercerla, con qué criterios y bajo qué límites.
```

---

## 4. Tensiones prioritarias propuestas para H1

### T1 — ¿SDD debe ser una metodología invocable y no una competencia PH?

**Evidencia:**
AI StoryLab muestra que SDD atraviesa C01, C02, C03, C04, C06, C07 y C08.

**Riesgo de mala decisión:**
si se convierte en competencia, se infla PH;
si se deja implícito, se pierde un patrón de alto valor.

**Hipótesis:**
SDD debe estudiarse como **metodología PH invocable**, potencialmente conectada con conocimiento común, no como nueva competencia.

---

### T2 — ¿Reversibilidad debe elevarse de propiedad distribuida a principio operativo explícito?

**Evidencia:**
AI StoryLab usa reversibilidad de manera repetida:
- decisiones provisionales;
- tecnologías diferidas;
- puertos/adaptadores;
- reapertura;
- reservas;
- migración controlada.

**Riesgo de mala decisión:**
si se sobrerregula, se convierte en burocracia;
si permanece demasiado implícita, se pierde una clave de mantenibilidad.

**Hipótesis:**
investigar si reversibilidad merece una formulación transversal más visible en PH y/o Framework.

---

### T3 — ¿La Fase 2 debe construirse desde evidencia de uso y no desde una taxonomía documental prediseñada?

**Evidencia:**
la Base histórica diseñó familias, catálogos y documentos antes de validación práctica.
AI StoryLab muestra una vía alternativa:
práctica → necesidad → conocimiento reusable → Base.

**Riesgo de mala decisión:**
repetir una Fase 2 documentalmente pesada y poco invocable.

**Hipótesis:**
Fase 2 debería crecer de manera progresiva desde operaciones demostradas y conocimiento realmente requerido.

---

## 5. Tensión diferida

### Nomenclatura común de autoridad y avance
Diferenciar:
- verificar;
- interpretar;
- autorizar;
- habilitar;
- bloquear;
- reabrir.

Es prometedora, pero conviene observar primero T1–T3 antes de estabilizar vocabulario.

Estado: **diferida a B3/B4**.

---

## 6. Recomendación B1

Llevar a H1 las tres tensiones T1–T3.

Si son autorizadas:
- B2 ejecutará micropruebas documentales y comparativas;
- B3 consolidará aprendizaje;
- no se modificará todavía ningún documento canónico PH o Fase 2.

---

## 7. Estado

```text
B0 = cerrado provisionalmente
B1 = cerrado provisionalmente
H1 = pendiente de revisión humana
B2 = bloqueado hasta H1
```
