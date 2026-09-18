# Índice de Enlaces Espejo y Transferencia Situada
## Programador Humanista v3.0.0 - normalización Fase 1

**Código documental:** `2026-09-17_Indice_Enlaces_Espejo_Transferencia_Situada_Programador_Humanista_v0_3`  
**Versión:** v0.3  
**Estado:** Aprobado por humano  
**Fecha:** 2026-09-17  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Perfil:** Programador Humanista  
**Fase:** Fase 1 - normalización y cierre  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
**Documentos antecedentes:** `enlaces_espejo_programador_humanista_v_3_0_0_v_0_2.md` + `matriz_transferencia_simetrica_triada_ph_it_at_v_0_2.md`  
**Función arquitectónica:** RELACIÓN  
**Autoridad final:** validación humana  
**Fase 2:** no iniciada  

---

## 1. Propósito

Este documento resuelve la función **RELACIÓN** del Programador Humanista con mínima carga documental.

Integra dos necesidades:

```text
Enlaces Espejo
+ Transferencia situada y reversible
```

No crea una arquitectura paralela ni obliga a mantener una carpeta independiente de transferencia si la función ya queda gobernada aquí y en Gobernanza del Perfil.

---

## 2. Tesis de relación

```text
una fuente canónica
+ referencias lógicas
+ transferencia cuando el problema lo requiera
```

El PH no es centro obligatorio de la tríada.

```text
PERFIL = lente
FRAMEWORK = espacio operativo
PROBLEMA = centro
```

---

## 3. Qué es un Enlace Espejo

Un Enlace Espejo conecta el PH con una fuente canónica externa sin duplicarla.

Debe responder:

```text
qué se invoca
dónde vive
para qué se usa
qué responsabilidad conserva PH
```

Regla:

```text
referenciar != copiar
invocar != apropiarse
```

---

## 4. Fuentes rectoras prioritarias

| Fuente | Uso PH |
|---|---|
| Gramática Arquitectónica Común PH-IT-AT | simetría estructural, seis funciones y límites |
| Protocolo de convenciones canónicas y transferencia reversible | residencia, espejos, deuda y reversibilidad |
| Mapa de Ruta PH-IT-AT | secuencia de maduración de perfiles |
| Perfil IT aprobado | referencia simétrica para responsabilidad epistemológica |
| Perfil AT aprobado | referencia simétrica para responsabilidad artística |
| `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` | soporte especializado y evidencia transversal de seguridad |
| `10_REPOSITORIOS_Y_FLUJO_TECNICO/` | repositorios, pruebas, lenguajes, APIs y flujo técnico |
| `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | auditoría, gates y evaluación general |
| `19_IMPLEMENTACION_Y_DESPLIEGUE/` | despliegue, rollback, runbooks y observabilidad |
| `20_MANTENIMIENTO_Y_EVOLUCION/` | deuda, mantenimiento, incidentes y retiro |
| `21_WIKI_DOCUMENTACION_HUMANA/` | guías y documentación para personas |

---

## 5. Seguridad: especialidad PH con espejos técnicos

La seguridad técnica forma parte de la especialidad PH.

Incluye, cuando corresponda:

```text
Security by Design
Security by Default
SSDLC / SSDF
DevSecOps
OWASP y marcos defensivos
codificación segura
dependencias
secretos
seguridad de APIs y datos
despliegue seguro
rollback
observabilidad
seguridad H-M-IA
```

Los Enlaces Espejo conectan esta especialidad con las rutas técnicas del Framework.

```text
especialidad PH
+ soporte documental especializado
!= duplicación
```

---

## 6. Mapa mínimo de enlaces PH

| Necesidad PH | Ruta espejo principal | Responsabilidad PH |
|---|---|---|
| seguridad, privacidad, datos | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` | aplicar y gobernar seguridad en la construcción |
| Git, código, pruebas, APIs | `10_REPOSITORIOS_Y_FLUJO_TECNICO/` | construir e integrar con trazabilidad |
| IA y copilotos | `09_IA_AGENTES_Y_COPILOTOS/` | integrar técnicamente con límites y revisión humana |
| evaluación y gates | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | producir evidencia funcional y responder a gates |
| despliegue | `19_IMPLEMENTACION_Y_DESPLIEGUE/` | preparar y operar despliegue proporcional |
| mantenimiento | `20_MANTENIMIENTO_Y_EVOLUCION/` | mantener, evolucionar, retirar o reactivar |
| metodología general | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/` | invocar métodos, no duplicarlos |
| gobernanza y riesgos | `04_GOBERNANZA_ETICA_Y_RIESGOS/` | registrar decisiones, excepciones y riesgos PH |
| documentación activa | `18_DOCUMENTACION_ACTIVA/` | conservar continuidad y trazabilidad |
| documentación humana | `21_WIKI_DOCUMENTACION_HUMANA/` | comunicar uso, límites y continuidad |

---

## 7. Transferencia situada

La transferencia ocurre solo cuando el problema la necesita.

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

No todo artefacto PH necesita pasar por IT y AT.

---

## 8. PH hacia IT

PH puede transferir:

```text
artefactos
datos operativos
logs
anomalías
instrumentos técnicos
restricciones
preguntas
```

IT decide cómo esos materiales entran, o no, en un proceso investigativo.

```text
evidencia funcional PH
!= evidencia epistemológica automática
```

---

## 9. IT hacia PH

IT puede transferir:

```text
hallazgos
incertidumbre
criterios metodológicos
restricciones de evidencia
preguntas reformuladas
```

PH puede transformar esos aportes en cambios de arquitectura, construcción, prueba o mantenimiento.

---

## 10. PH hacia AT

PH puede transferir:

```text
interfaces
artefactos
interacciones
restricciones técnicas
posibilidades computacionales
materialidades digitales
```

AT puede reinterpretar o transformar esos objetos desde su propia responsabilidad artística.

---

## 11. AT hacia PH

AT puede transferir:

```text
configuraciones
criterios de representación
tensiones sensibles
posibilidades de interacción
necesidades de mediación
```

PH puede convertir aportes pertinentes en decisiones técnicas sin absorber la responsabilidad artística.

---

## 12. Estados mínimos de transferencia

| Estado | Significado |
|---|---|
| No requerida | El problema no necesita transferencia |
| Pendiente | Se identificó una transferencia, aún no ocurre |
| Activa | Existe intercambio con trazabilidad |
| Transformada | El aporte recibido cambió durante su incorporación |
| Devuelta | Se devuelve para revisión o nueva iteración |
| Cerrada | La transferencia cumplió su función |
| Reabierta | Nueva evidencia o contexto exige retomarla |

No se usa una escala universal T0-T4.

---

## 13. Registro mínimo

Cuando exista transferencia material, basta registrar:

```text
origen
destino
objeto transferido
propósito
cambio producido
estado
restricciones
fecha / versión
```

No se crea documentación adicional si el registro ya existe en PR, issue, bitácora, decisión o documento rector.

---

## 14. Deuda histórica de `Bases_Conocimiento/`

La carpeta histórica PH contiene un bloque significativo de documentos explícitamente comunes PH-IT-AT y Caleidoscopio.

Para Fase 1 revisada:

```text
clasificación: deuda de residencia histórica
acción actual: no mover
tratamiento: consolidación reversible final
```

Esto no afecta la especialidad técnica y de seguridad propia del PH.

La decisión física se toma solo con mapa de consolidación y referencias identificadas.

---

## 15. Locks

Permanece bloqueada la creación de:

```text
AGENTS.md
CLAUDE.md
SKILLS.md
agentes operativos finales
multiagentes
workflows operativos finales
automatizaciones finales
```

La existencia de enlaces a `09_IA_AGENTES_Y_COPILOTOS/` no altera este lock.

---

## 16. Gate de cierre RELACIÓN

La función RELACIÓN puede considerarse resuelta si:

- [x] existe una fuente canónica por objeto;
- [x] los espejos son referencias, no copias;
- [x] PH no opera como centro obligatorio;
- [x] la transferencia es situada;
- [x] IT conserva responsabilidad epistemológica;
- [x] AT conserva responsabilidad artística;
- [x] seguridad técnica permanece como especialidad PH;
- [x] la deuda de `Bases_Conocimiento/` queda registrada;
- [x] no se fuerza carpeta independiente de transferencia;
- [x] validación humana.

---

## 17. Estado y siguiente movimiento

```text
Documento: Índice de Enlaces Espejo y Transferencia Situada PH
Versión: v0.3
Estado: Aprobado por humano
Función: RELACIÓN
Siguiente movimiento: Gobernanza y Cierre Fase 1 PH
Fase 2: no iniciada
```
