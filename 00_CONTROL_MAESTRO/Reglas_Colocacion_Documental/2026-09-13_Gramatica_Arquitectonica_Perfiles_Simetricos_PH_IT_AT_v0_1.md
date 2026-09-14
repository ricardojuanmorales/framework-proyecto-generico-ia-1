# Gramática Arquitectónica Común de Perfiles Simétricos PH-IT-AT v0.1

**Código documental:** `2026-09-13_Gramatica_Arquitectonica_Perfiles_Simetricos_PH_IT_AT_v0_1`  
**Versión:** v0.1  
**Estado:** Borrador rector para validación humana  
**Fecha:** 2026-09-13  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Ámbito:** Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario  
**Ruta canónica:** `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/`  
**Tipo:** regla transversal de arquitectura y colocación documental  
**Revisión humana:** obligatoria

---

## 1. Propósito

Esta gramática define la arquitectura mínima común mediante la cual PH, IT y AT pueden desarrollarse con **simetría de madurez**, sin exigir identidad de contenido ni duplicar la macroestructura del Framework.

Principio rector:

```text
Simetría estructural
≠ mismo contenido
≠ mismas prácticas
≠ mismas rutas de especialización.

Simetría estructural
= funciones equivalentes
+ trazabilidad equivalente
+ navegabilidad equivalente
+ gobernanza equivalente.
```

La gramática organiza al perfil como lente autónoma pero conectada. El Framework aloja las capacidades transversales que pueden ser invocadas por cualquier perfil.

---

## 2. Seis funciones cognitivas del perfil

Todo perfil simétrico debe poder resolver seis funciones:

```text
IDENTIDAD
CAPACIDAD
ACTUACIÓN
CONOCIMIENTO
RELACIÓN
GOBERNANZA
```

| Función | Pregunta rectora |
|---|---|
| Identidad | ¿Qué es el perfil, qué no es y cuál es su lógica mínima? |
| Capacidad | ¿Qué puede hacer de forma observable y cómo se reconoce su madurez? |
| Actuación | ¿Cómo se integran varias competencias en prácticas recurrentes y significativas? |
| Conocimiento | ¿Qué conocimiento específico necesita o produce el perfil? |
| Relación | ¿Cómo se conecta, transfiere e invoca otras partes del ecosistema? |
| Gobernanza | ¿Cómo evoluciona, se audita y se reabre sin perder identidad? |

---

## 3. Diez funciones documentales comunes

La gramática se expresa mediante diez funciones documentales:

```text
Perfil_Operativo_vX/
├── Alcance_Operativo/
├── Mapa_Rector/
├── Formula_Nuclear/
├── Competencias/
├── Unidades_Nucleares/
├── Bases_Conocimiento/
├── Metricas/
├── Enlaces_Espejo/
├── Transferencia_Simetrica/
└── Gobernanza_Perfil/
```

### Regla de materialización

```text
Función arquitectónica obligatoria
≠ carpeta vacía obligatoria
≠ documento artificial obligatorio.
```

Una carpeta se materializa cuando existe al menos un objeto canónico cuya función justifica residir allí.

---

## 4. Mapeo función cognitiva → función documental

| Función cognitiva | Funciones documentales |
|---|---|
| Identidad | `Alcance_Operativo/`, `Mapa_Rector/`, `Formula_Nuclear/` |
| Capacidad | `Competencias/`, `Metricas/` |
| Actuación | `Unidades_Nucleares/` |
| Conocimiento | `Bases_Conocimiento/` |
| Relación | `Enlaces_Espejo/`, `Transferencia_Simetrica/` |
| Gobernanza | `Gobernanza_Perfil/` |

---

## 5. Regla sobre Unidades Nucleares

Una **Unidad Nuclear de Perfil** es la configuración mínima, integrada y recurrente de competencias mediante la cual un perfil expresa su lógica propia en una práctica significativa, observable, evaluable y transferible.

```text
Competencias
→ Unidad Nuclear
→ recurso o práctica del Framework
→ proyecto/producto
→ evidencia
→ evaluación
```

Una Unidad Nuclear **no es por sí misma**:

```text
curso;
actividad;
metodología;
plantilla;
artefacto;
instrumento;
agente;
proyecto.
```

El perfil conserva el **mapa nuclear de actuación**. Las implementaciones derivadas deben residir en la macroestructura transversal correspondiente.

---

## 6. Regla de residencia del conocimiento

Toda pieza de conocimiento debe responder tres preguntas:

```text
1. ¿Es común a más de un perfil?
   → Base Común o macroestructura transversal.

2. ¿Es específica a la identidad, capacidad o responsabilidad de un perfil?
   → Bases_Conocimiento del perfil.

3. ¿Emergió de una recombinación y no pertenece plenamente a ningún perfil?
   → Caleidoscopio.
```

Principio:

```text
ubicación física histórica
≠ propiedad epistemológica.
```

Una pieza común alojada históricamente bajo un perfil piloto no se convierte por ello en conocimiento exclusivo de ese perfil.

---

## 7. Regla Perfil ↔ Macroestructura

Los perfiles no deben convertirse en mini-frameworks.

Por defecto, las siguientes funciones pertenecen a la macroestructura transversal y son **invocadas** por PH, IT y AT:

```text
metodologías generales;
plantillas;
recursos modulares;
cursos y trayectorias;
IA, agentes y copilotos;
repositorios y flujo técnico;
multimodalidad y publicación;
seguridad transversal;
evaluación general;
implementación y despliegue;
mantenimiento y evolución;
documentación humana.
```

Un perfil puede especializar su uso, pero no duplicar la infraestructura general salvo decisión explícita de arquitectura.

---

## 8. Regla sobre diferencias entre perfiles

Las diferencias entre PH, IT y AT deben expresarse principalmente mediante:

```text
contenido;
competencias;
unidades nucleares;
bases de conocimiento específicas;
criterios de evaluación;
patrones de invocación de la macroestructura;
formas de transferencia;
responsabilidades propias.
```

No mediante proliferación automática de carpetas exclusivas.

---

## 9. Enlaces Espejo

Cada perfil debe poder mantener una vista local de sus conexiones con:

```text
Base Común;
otros perfiles;
Caleidoscopio;
seguridad;
evaluación;
metodologías;
IA;
publicación;
documentación;
otras rutas canónicas relevantes.
```

Regla central:

```text
Un documento, una fuente canónica.
Muchos índices pueden apuntar a él.
Ningún espejo físico editable sin decisión explícita.
```

`Enlaces_Espejo/` organiza topología lógica, no copias de contenido.

---

## 10. Transferencia Simétrica

Cada perfil debe documentar qué:

```text
entrega;
recibe;
transforma;
devuelve;
deja pendiente.
```

Se distinguen tres formas:

| Tipo | Definición |
|---|---|
| Funcional | un perfil entrega algo utilizable por otro |
| Transformativa | el receptor modifica su propio producto o interpretación |
| Recursiva | el resultado transformado vuelve al perfil inicial y genera nuevo ciclo |

La transferencia madura es reversible y deja trazabilidad.

---

## 11. Relación con Caleidoscopio

```text
Caleidoscopio
≠ cuarto perfil
≠ copia de PH + IT + AT
```

El Caleidoscopio recibe y conserva solo aquello que emerge de combinaciones trazables alrededor de problemas comunes y no está completo en una lente aislada.

---

## 12. Regla de gobernanza y reapertura

`Gobernanza_Perfil/` debe poder registrar:

```text
fronteras;
decisiones;
excepciones;
deuda estructural;
versionado;
auditorías;
criterios de reapertura;
cambios de identidad;
promoción de conocimiento hacia lo común;
referencias lógicas pendientes.
```

Un perfil se reabre cuando cambia materialmente su identidad, su frontera, su arquitectura de competencias, su relación con la Base Común o aparece una contradicción estructural relevante.

---

## 13. Regla de promoción y contextualización del conocimiento

Dos movimientos mantienen vivo el ecosistema:

```text
CONTEXTUALIZACIÓN
Base Común → Perfil

PROMOCIÓN
Perfil → validación → Base Común
```

Una tercera operación produce emergencia:

```text
PH ↔ IT ↔ AT
→ recombinación trazable
→ Caleidoscopio
```

---

## 14. Regla de mínima carga cognitiva

La arquitectura documental debe aumentar capacidad de orientación más rápido de lo que aumenta carga cognitiva.

```text
más carpetas
+ más documentos
+ más referencias
≠ mayor comprensión automática.
```

Antes de crear una nueva carpeta o documento debe demostrarse al menos una de estas condiciones:

- función canónica independiente;
- necesidad de versionado independiente;
- necesidad de invocación independiente;
- uso por múltiples documentos o perfiles;
- requerimiento de auditoría o gobernanza propia.

---

## 15. Aplicación provisional a PH, IT y AT

### PH

PH permanece como piloto histórico. Su estructura actual sirve como evidencia, pero algunas ramas pueden representar deuda histórica y deberán auditarse sin migración automática.

### IT

IT será el primer candidato para implementar limpiamente esta gramática al cerrar Fase 1.

### AT

AT funcionará como prueba independiente de validez de la gramática cuando se desarrolle su Perfil Operativo.

```text
PH = piloto histórico
IT = normalización controlada
AT = validación independiente
```

---

## 16. Condiciones antes de migrar perfiles

No se moverán documentos ni se crearán estructuras físicas masivas hasta completar:

```text
1. aprobación humana de esta gramática;
2. mapa de destino del perfil;
3. registro de deuda de referencias;
4. plan reversible de migración;
5. verificación de espejos e índices afectados.
```

Primero arquitectura. Después migración.

---

## 17. Estado y siguiente movimiento

Esta gramática es **candidata para validación humana**.

Su aprobación habilita:

```text
1. derivar Unidades Nucleares IT;
2. construir el Bloque 4 robusto IT;
3. diseñar la arquitectura física objetivo de IT;
4. ejecutar posteriormente una migración controlada;
5. usar AT como segunda prueba de simetría arquitectónica.
```

**Deuda de referencias lógicas:** registrar esta gramática en Tree/tabla/índices/changelog al cierre del bloque arquitectónico.  
**Deuda crítica:** ninguna identificada.  
**Revisión humana:** pendiente.
