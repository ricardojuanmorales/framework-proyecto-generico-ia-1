# Mapa Rector
## Programador Humanista v3.0.0 - normalización Fase 1

**Código documental:** `2026-09-17_Mapa_Rector_Programador_Humanista_v3_0_0_v0_3`  
**Versión:** v0.3  
**Estado:** Aprobado por humano  
**Fecha:** 2026-09-17  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Perfil:** Programador Humanista  
**Fase:** Fase 1 - auditoría, normalización y actualización  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Mapa_Rector/`  
**Documento antecedente:** `Mapa_Rector_Programador_Humanista_v3_0_0_v0_2.md`  
**Documento base aprobado:** `2026-09-17_Alcance_Operativo_Programador_Humanista_v3_0_0_v0_3`  
**Función arquitectónica:** IDENTIDAD + articulación funcional  
**Autoridad final:** validación humana  
**Estado de residencia:** aprobado para consolidación canónica  

---

## 1. Propósito

Este Mapa Rector traduce el Alcance Operativo PH v0.3 aprobado en una arquitectura de trabajo coherente con la Gramática Arquitectónica Común PH-IT-AT.

Su función es ordenar:

```text
identidad
→ capacidades
→ actuación
→ conocimiento
→ relación
→ gobernanza
```

sin convertir el perfil en una réplica del Framework.

El mapa conserva el valor histórico del PH como perfil piloto, pero reorganiza su arquitectura alrededor de una tesis ya aprobada:

```text
PH = construcción tecnológica humanista situada
educación = dominio histórico/piloto prioritario
```

---

## 2. Tesis rectora

El Programador Humanista convierte necesidades, restricciones y posibilidades de un problema complejo en **artefactos y sistemas tecnológicos funcionales, gobernables, documentados, seguros, accesibles, mantenibles y capaces de evolucionar**.

Su actuación no parte de una tecnología predeterminada.

Parte de:

```text
problema situado
→ necesidad de intervención tecnológica
→ diseño computacional
→ construcción
→ integración
→ verificación
→ documentación
→ mantenimiento / evolución
→ transferencia o reapertura
```

El PH no sustituye al Investigador Transdisciplinario ni al Artista Transdisciplinario. Colabora con ellos cuando el problema lo exige.

---

## 3. Principios rectores

### 3.1 Propósito humano situado

La tecnología se justifica por su relación con personas, contexto, agencia, accesibilidad y consecuencias, no por novedad técnica.

### 3.2 Construcción verificable

Un artefacto PH debe poder probarse, comprenderse y revisarse.

```text
funciona una vez
≠
construcción madura
```

### 3.3 Arquitectura antes que herramientismo

Lenguajes, frameworks, proveedores, modelos de IA y plataformas son instrumentos intercambiables.

La competencia central es diseñar relaciones entre componentes, flujos, datos, límites y dependencias.

### 3.4 Seguridad, privacidad y accesibilidad longitudinales

Estas responsabilidades acompañan requisitos, diseño, construcción, prueba, integración, despliegue y mantenimiento cuando corresponda.

No constituyen un módulo decorativo ni convierten al PH en dueño de la seguridad general del Framework.

### 3.5 Documentación viva

Cada decisión material debe dejar suficiente rastro para permitir revisión, continuidad y transferencia.

### 3.6 Mantenibilidad y evolución

La madurez incluye capacidad de actualizar, corregir, retirar, observar y reactivar sistemas cuando aplique.

### 3.7 Transferencia situada

La relación con IT y AT depende del problema.

```text
simetría
≠ traducción obligatoria de todo producto
```

### 3.8 Neutralidad instrumental

La identidad PH no depende de una herramienta, stack o paradigma técnico concreto.

---

## 4. Las seis funciones cognitivas en PH

| Función | Resolución en PH |
|---|---|
| IDENTIDAD | Alcance Operativo + Mapa Rector + Fórmula Nuclear |
| CAPACIDAD | Matriz de Competencias + Métricas |
| ACTUACIÓN | Unidades Nucleares |
| CONOCIMIENTO | frontera entre Base Común y conocimiento específico PH |
| RELACIÓN | Enlaces Espejo + transferencia situada y reversible |
| GOBERNANZA | criterios de deriva, reapertura, deuda y evolución |

Las responsabilidades longitudinales de seguridad, privacidad, accesibilidad, agencia humana, trazabilidad y revisión no constituyen una séptima función.

---

## 5. Arquitectura documental común aplicada a PH

La arquitectura disponible es:

```text
Perfil_Operativo_v3_0_0/
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

Regla:

```text
función arquitectónica disponible
≠ carpeta obligatoria
≠ documento artificial
```

La normalización PH no crea ni conserva una ruta solo para sostener simetría visual.

---

## 6. Componentes históricos que dejan de ser núcleo arquitectónico

El Mapa Rector histórico v0.2 incorporaba ramas adicionales como:

```text
Aplicaciones_Educativas/
Arquitectura_Humano_Maquina_IA/
Artefactos/
```

Estas rutas no se eliminan ni mueven todavía.

Durante la normalización se reinterpretan así:

| Ruta histórica | Lectura normalizada |
|---|---|
| `Aplicaciones_Educativas/` | casos de uso, proyectos o dominio piloto; no función cognitiva del perfil |
| `Arquitectura_Humano_Maquina_IA/` | especialización PH de una capacidad transversal; no arquitectura común propia |
| `Artefactos/` | productos o implementaciones; no función documental del perfil |

Toda decisión física se posterga hasta un mapa de consolidación reversible.

---

## 7. Flujo operativo rector

El PH puede recorrer un ciclo no completamente lineal:

```text
situar problema
→ identificar necesidad tecnológica
→ definir propósito y criterios de aceptación
→ diseñar arquitectura / flujo
→ construir o integrar
→ probar y verificar
→ revisar seguridad, privacidad y accesibilidad
→ documentar
→ desplegar / operar si corresponde
→ mantener / evolucionar
→ transferir / reabrir
```

Puede regresar a etapas anteriores cuando una prueba, dependencia, riesgo, nueva necesidad o aporte de IT/AT modifique el problema.

La reapertura es una propiedad de gobernanza, no una falla.

---

## 8. Frontera Perfil PH ↔ Macroestructura

El PH invoca funciones comunes del Framework:

| Necesidad PH | Función macro invocada |
|---|---|
| metodologías generales | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/` |
| recursos modulares | `06_PASTILLAS_MODULARES/` |
| plantillas | `07_PLANTILLAS_Y_MODELOS/` |
| cursos y trayectorias | `08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/` |
| IA, agentes y copilotos | `09_IA_AGENTES_Y_COPILOTOS/` |
| repositorios, Git, pruebas y formatos | `10_REPOSITORIOS_Y_FLUJO_TECNICO/` |
| multimodalidad y publicación | `11_MULTIMODALIDAD_Y_PUBLICACION/` |
| evaluación y auditoría general | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` |
| seguridad, privacidad y datos | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` |
| implementación y despliegue | `19_IMPLEMENTACION_Y_DESPLIEGUE/` |
| mantenimiento y evolución | `20_MANTENIMIENTO_Y_EVOLUCION/` |
| documentación humana | `21_WIKI_DOCUMENTACION_HUMANA/` |

El perfil conserva **criterios de uso y responsabilidad PH**, no la infraestructura común completa.

---

## 9. Frontera PH ↔ IT ↔ AT

### PH

Se concentra en:

```text
diseño computacional
construcción funcional
arquitectura técnica
integración
verificación
documentación técnica
mantenibilidad
```

### IT

Se concentra en:

```text
problematización investigable
método
evidencia
análisis
interpretación
validación
incertidumbre
responsabilidad epistemológica
```

### AT

Se concentra en:

```text
percepción situada
imaginación crítica
configuración sensible-simbólica-material
interpretación
mediación cuando corresponda
valoración artística
transformación
```

Las fronteras no impiden superposición práctica.

Evitan que una coincidencia funcional se convierta en apropiación de responsabilidad.

---

## 10. Humano-Máquina-IA

La arquitectura general H-M-IA pertenece al Framework.

El PH especializa su uso desde la construcción:

```text
roles
interfaces
permisos
flujos
integraciones
automatizaciones
validaciones
fallbacks
observabilidad
revisión humana
```

Tesis operativa:

> El PH gobierna técnica y operacionalmente la integración H-M-IA dentro de su propia actuación.

Esto no le otorga autoridad epistemológica sobre IT ni artística sobre AT.

---

## 11. Seguridad y confianza como columna longitudinal

La seguridad histórica del PH se conserva, pero cambia de residencia conceptual.

El PH debe saber:

- diseñar con seguridad;
- minimizar permisos;
- proteger secretos y datos;
- validar entradas y salidas;
- revisar dependencias;
- registrar riesgos;
- diseñar fallos seguros;
- preparar rollback cuando aplique;
- detener integraciones irresponsables;
- pedir revisión especializada cuando exceda su competencia.

Los marcos específicos, listas de controles y herramientas deben residir o invocarse desde la macroestructura técnica y de seguridad.

```text
responsabilidad PH por construcción segura
≠ propiedad PH sobre la seguridad del Framework
```

---

## 12. Accesibilidad y experiencia

PH conserva responsabilidad directa sobre:

```text
accesibilidad técnica
legibilidad funcional
interacción comprensible
errores recuperables
consistencia de interfaz
uso responsable de datos y permisos
```

Cuando el problema exige una elaboración artística, cultural, sensible o mediacional más profunda, puede colaborar con AT.

La accesibilidad no se transfiere fuera del PH por trabajar con AT. Sigue siendo una responsabilidad transversal de construcción responsable.

---

## 13. Educación dentro del mapa

La educación permanece como:

```text
dominio histórico
+ dominio piloto
+ espacio prioritario de validación
+ fuente de casos reales
```

No se convierte en:

```text
frontera identitaria
+ requisito universal
+ subarquitectura obligatoria de todo PH
```

Las aplicaciones educativas futuras deben tratarse como casos de uso o proyectos, salvo que un objeto canónico justifique otra residencia.

---

## 14. Evidencia funcional propia del PH

PH necesita rastros para demostrar calidad de construcción, por ejemplo:

```text
criterios de aceptación
pruebas
logs
resultados reproducibles
revisión de código
configuraciones
versiones
checklists
incidentes
rollback
deuda técnica
observabilidad
documentación
```

Estos rastros son **evidencia funcional/técnica** de PH.

No deben confundirse automáticamente con evidencia investigativa en sentido IT.

---

## 15. Madurez N1-N4

PH adopta la escala común:

| Nivel | Lectura PH |
|---|---|
| N1 - Exploración guiada | reconoce problema, propósito, componentes y riesgos básicos con apoyo significativo |
| N2 - Producción asistida | construye artefactos acotados con asistencia, pruebas y documentación básica |
| N3 - Integración avanzada | integra arquitectura, construcción, IA cuando aplica, pruebas, seguridad, documentación y mantenimiento con autonomía sustantiva |
| N4 - Ecosistema gobernado | sostiene sistemas complejos, auditables, mantenibles, transferibles y gobernados a escala de equipo o ecosistema |

N1-N4 no se traduce en un promedio universal.

Los criterios críticos pueden ser no compensables.

---

## 16. Relación Competencias ↔ Unidades Nucleares

La normalización debe preservar una relación muchos-a-muchos.

```text
varias competencias
→ una Unidad Nuclear

una competencia
→ puede intervenir en varias Unidades Nucleares
```

Las Unidades Nucleares no serán módulos educativos, cursos, aplicaciones ni listas de herramientas.

Expresarán actuaciones recurrentes del PH.

---

## 17. Transferencia simétrica situada

PH puede:

```text
entregar
recibir
transformar
devolver
dejar pendiente
rechazar justificadamente
reabrir
```

La transferencia puede ser:

```text
funcional
transformativa
recursiva
```

No todo artefacto necesita traducción completa a IT y AT.

La transferencia debe conservar, cuando corresponda:

```text
procedencia
contexto
restricciones
estado
transformaciones
decisiones
límites
```

---

## 18. Enlaces Espejo

`Enlaces_Espejo/` debe conectar el perfil con las fuentes canónicas que invoca.

No almacena copias editables.

Debe permitir navegación hacia:

```text
Base Común
IT
AT
Caleidoscopio
seguridad
evaluación
repositorios
IA
implementación
mantenimiento
documentación
otros objetos canónicos relevantes
```

---

## 19. Conocimiento específico PH

La Base de Conocimiento PH solo debe contener conocimiento reusable cuya especificidad dependa de la lente PH.

Candidatos futuros podrían incluir:

```text
patrones de traducción problema → intervención tecnológica;
criterios de arquitectura humanista situada;
patrones de integración H-M-IA desde construcción;
decisiones de confiabilidad y mantenimiento propias de artefactos PH;
patrones de documentación técnica humanista;
formas de transferencia de artefactos y restricciones técnicas.
```

No deben duplicarse allí:

```text
seguridad general;
ética transversal;
metodologías generales;
guías genéricas de Git;
documentación general de IA;
evaluación común;
despliegue general;
mantenimiento general.
```

La clasificación real se hará antes de cualquier migración.

---

## 20. Gobernanza y control de deriva

PH debe observar su propia evolución:

```text
observar
→ comparar con Alcance + Fórmula Nuclear
→ detectar tensión o deuda
→ mantener / adaptar / reabrir
→ documentar
```

Señales de deriva:

- convertir PH en desarrollador genérico;
- reducirlo a educación;
- convertir IA o agentes en identidad;
- absorber investigación completa;
- absorber mediación artística completa;
- duplicar seguridad o infraestructura común;
- equiparar complejidad técnica con madurez;
- convertir transferencia en obligación triádica;
- acumular artefactos dentro del perfil;
- medir madurez solo por promedios;
- tratar despliegue o DevSecOps como identidad en vez de capacidades invocadas.

---

## 21. Ruta documental de actualización

La cascada normalizada será:

```text
Alcance Operativo v0.3
→ Mapa Rector v0.3
→ Fórmula Nuclear revisada
→ Matriz de Competencias revisada
→ Unidades Nucleares revisadas
→ Métricas / Valoración revisadas
→ frontera de conocimiento
→ Enlaces / Transferencia
→ Gobernanza y cierre
```

Cada documento debe aprobarse antes de estabilizar el siguiente.

---

## 22. Invariantes de estabilidad

Este Mapa Rector puede considerarse estable si mantiene:

- construcción tecnológica humanista situada como núcleo;
- educación como dominio histórico/piloto prioritario;
- seis funciones cognitivas comunes;
- separación Perfil ↔ Macroestructura;
- fronteras simétricas PH ↔ IT ↔ AT;
- seguridad, privacidad y accesibilidad longitudinales;
- H-M-IA como capacidad transversal especializada desde PH;
- evidencia funcional distinta de evidencia investigativa;
- N1-N4 completo;
- Unidades Nucleares como actuación, no cursos;
- transferencia situada y reversible;
- Enlaces Espejo sin duplicación;
- Caleidoscopio como propiedad emergente;
- neutralidad instrumental;
- control de deriva y reapertura.

---

## 23. Estado y siguiente movimiento

```text
Documento: Mapa Rector Programador Humanista v3.0.0
Versión: v0.3
Estado: Aprobado por humano
Función: IDENTIDAD + articulación funcional
Documento base: Alcance Operativo PH v0.3 aprobado
Siguiente movimiento tras aprobación: Fórmula Nuclear PH revisada
Fase 2: no iniciada
```

La aprobación de este mapa permite actualizar la Fórmula Nuclear sin arrastrar las once capas históricas como si todas fueran identidad del perfil.
