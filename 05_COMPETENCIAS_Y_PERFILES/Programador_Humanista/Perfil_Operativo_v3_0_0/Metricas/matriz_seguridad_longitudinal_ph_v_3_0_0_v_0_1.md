# Matriz de Seguridad Longitudinal
## Programador Humanista v3.0.0

**Código documental:** Matriz_Seguridad_Longitudinal_PH_v3_0_0_v0_1  
**Versión:** v0.1  
**Estado:** Borrador operativo inicial  
**Fecha:** 2026-05-30  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo:** Framework Genérico V4.1.1  
**Perfil:** Programador Humanista v3.0.0  
**Ubicación recomendada:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Metricas/`  
**Documentos base:**  
`Alcance_Operativo_Programador_Humanista_v3_0_0_v0_2.md`  
`Mapa_Rector_Programador_Humanista_v3_0_0_v0_2.md`  
`Formula_Nuclear_Programador_Humanista_v3_0_0_v0_2.md`

---

## 1. Propósito del documento

Este documento establece la **Matriz de Seguridad Longitudinal** del Programador Humanista v3.0.0.

Su función es convertir la seguridad, privacidad y confianza en una práctica sistémica desde Fase 1, sin reducir el perfil a ciberseguridad especializada y sin dispersar la documentación técnica fuera de la arquitectura acordada.

La matriz define:

1. principios de seguridad por diseño;
2. seguridad por defecto;
3. SSDLC / SSDF;
4. DevSecOps;
5. codificación segura;
6. marcos de referencia defensivos;
7. checklist longitudinal;
8. gates técnicos;
9. evidencia mínima;
10. enlaces espejo hacia cartapacios técnicos.

---

## 2. Tesis de seguridad longitudinal

La seguridad del Programador Humanista no será una fase final. Será una condición de diseño, producción intelectual, documentación, evaluación, despliegue, mantenimiento y transferencia.

```text
Seguridad longitudinal = diseño responsable + configuración segura + revisión humana + evidencia + trazabilidad + mantenimiento
```

La pregunta central no es solamente:

```text
¿Funciona?
```

La pregunta completa es:

```text
¿Funciona de forma humana, segura, privada, documentada, evaluable, mantenible y transferible?
```

---

## 3. Principios rectores

| Principio | Definición operativa | Resultado esperado |
|---|---|---|
| Security by design | La seguridad se incorpora desde requisitos, diseño y arquitectura | Riesgos y controles pensados antes de construir |
| Security by default | La configuración inicial reduce exposición y privilegios | El estado inicial no depende de que alguien recuerde endurecerlo después |
| Privacidad por diseño | Los datos se minimizan, clasifican y protegen desde el inicio | Menos exposición, menos recolección innecesaria |
| SSDLC / SSDF | La seguridad acompaña todo el ciclo de vida del software | Gates por fase, evidencia y trazabilidad |
| DevSecOps | La seguridad entra en repositorio, revisión, pruebas, CI/CD y despliegue | Flujo técnico con seguridad integrada |
| Codificación segura | Las prácticas del lenguaje o framework reducen fallas comunes | Código revisable y menos frágil |
| Defensa informada | Marcos como OWASP y MITRE se usan para evaluación y mitigación | Modelos de riesgo defensivos, no instrucciones ofensivas |
| Documentación viva | Toda decisión de seguridad deja rastro | Auditoría, continuidad y aprendizaje |
| Transferencia triádica | La seguridad dialoga con técnica, investigación y arte | Riesgo, evidencia y experiencia se revisan juntos |

---

## 4. Ubicación arquitectónica

La seguridad longitudinal se declara centralmente en el perfil, pero sus documentos técnicos especializados viven en cartapacios espejo.

| Función | Cartapacio central PH | Cartapacios espejo |
|---|---|---|
| Declaración de alcance | `Alcance_Operativo/` | `04`, `16` |
| Arquitectura rectora | `Mapa_Rector/` | `02`, `03`, `16` |
| Matriz de seguridad | `Metricas/` | `15`, `16` |
| Decisiones y excepciones | `Gobernanza_Perfil/` | `04`, `18` |
| Evidencia de gates | `Metricas/` | `15`, `18` |
| Documentación técnica | `Enlaces_Espejo/` | `10`, `15`, `16`, `19`, `20` |
| Transferencia triádica | `Transferencia_Simetrica/` | `13`, `21` |

### 4.1 Regla de centralización con espejos

El perfil Programador Humanista mantiene la visión central. Los detalles técnicos especializados se ubican en sus cartapacios naturales y se conectan mediante enlaces espejo.

```text
Centro conceptual → Perfil PH v3.0.0
Detalle técnico → cartapacios especializados
Conexión → Enlaces_Espejo
Evidencia viva → Documentación_Activa
```

---

## 5. Matriz longitudinal por ciclo de vida

| Momento | Pregunta rectora | Riesgo típico | Control mínimo | Evidencia esperada | Cartapacio espejo |
|---|---|---|---|---|---|
| Idea | ¿Qué problema humano atiende y qué riesgo introduce? | Solución innecesaria o riesgosa | ficha de contexto | propósito, usuarios, límites | `04`, `18` |
| Requisitos | ¿Qué datos, permisos, usuarios y dependencias aparecen? | exposición de datos o alcance confuso | clasificación básica | lista de datos y actores | `16` |
| Arquitectura | ¿Qué estructura técnica, lógica, integración y límites sostienen la solución? | arquitectura insegura, acoplamiento frágil o superficie de ataque mal entendida | arquitectura segura mínima y mapa de componentes | descripción o diagrama de componentes, flujos, límites de confianza y controles | `02`, `10`, `16`, `19` |
| Diseño | ¿Qué controles se incorporan en interacción, experiencia y decisiones de diseño? | seguridad agregada tarde o experiencia riesgosa | threat model básico y criterios de experiencia segura | decisiones de diseño y controles de interacción | `02`, `04`, `12`, `16` |
| Prototipo | ¿Qué puede probarse sin exponer usuarios o datos reales? | prototipo demasiado abierto | entorno controlado | límites de uso | `10`, `16` |
| Implementación | ¿El código evita prácticas inseguras comunes? | errores de validación, permisos o secretos | checklist de codificación segura | revisión por stack | `10`, `16` |
| Dependencias | ¿Las librerías, paquetes y servicios fueron revisados? | dependencia vulnerable o innecesaria | escaneo o revisión manual | reporte o bitácora | `10`, `15`, `16` |
| Datos | ¿Se minimizan y protegen los datos? | recolección excesiva o exposición | minimización y protección | política o decisión | `16` |
| IA | ¿Qué datos, prompts, salidas y límites toca la IA? | salida no verificada o fuga contextual | revisión humana | bitácora de IA | `09`, `16`, `18` |
| Pruebas | ¿Hay evidencia mínima de calidad y seguridad? | falsa sensación de madurez | pruebas técnicas y revisión | reporte de pruebas | `15` |
| Despliegue | ¿La configuración inicial es segura por defecto? | secretos expuestos, permisos amplios | checklist de despliegue | runbook, variables, rollback | `19`, `16` |
| Operación | ¿Cómo se monitorea y responde? | incidentes invisibles | observabilidad mínima | monitoreo, incidentes | `20`, `16` |
| Mantenimiento | ¿Cómo se actualiza, corrige o retira? | deuda técnica acumulada | plan evolutivo | backlog, postmortem | `20`, `18` |
| Transferencia | ¿Qué aprende la tríada del ciclo? | conocimiento encerrado | matriz PH-IT-AT | síntesis transferible | `13`, `21` |

---

## 6. Matriz de marcos, prácticas y herramientas

| Marco, práctica o herramienta | Rol dentro del PH | Uso permitido | Evidencia mínima | No debe usarse para | Cartapacio espejo |
|---|---|---|---|---|---|
| Security by design | Principio de arquitectura | diseño, requisitos, threat modeling básico | decisión de diseño y riesgo | justificar complejidad innecesaria | `04`, `16` |
| Security by default | Principio de configuración | plantillas, permisos mínimos, configuración base | checklist de configuración | ocultar falta de revisión | `07`, `16`, `19` |
| OWASP Top 10 | Referencia de riesgos web | revisión defensiva de aplicaciones | checklist OWASP por aplicación | enseñanza ofensiva o explotación | `15`, `16` |
| OWASP Proactive Controls | Referencia de buenas prácticas | controles positivos de desarrollo seguro | checklist de controles | lista decorativa sin evidencia | `10`, `16` |
| MITRE ATT&CK defensivo | Taxonomía de amenazas | modelado defensivo, mitigación, educación | matriz de amenaza y mitigación | instrucciones ofensivas | `04`, `15`, `16` |
| SSDF / SSDLC | Ciclo de vida seguro | gates por fase, prácticas de desarrollo seguro | evidencia por fase | burocracia sin uso | `03`, `15`, `16`, `20` |
| DevSecOps | Integración al flujo técnico | PR, CI/CD, escaneo, despliegue y revisión | evidencia de pipeline o revisión | despliegue automático sin criterio humano | `10`, `15`, `19` |
| Codificación segura | Práctica de implementación | guías por lenguaje o framework | checklist por stack | culpar solo al programador individual | `10`, `16` |
| Snyk o equivalente | Herramienta de revisión | dependencias, contenedores, IaC o código | reporte, issue o bitácora | reemplazar revisión humana | `10`, `15`, `16`, `19` |
| Laravel u otro stack web | Perfil de implementación | autenticación, autorización, CSRF, validación, configuración | checklist específico | asumir seguridad automática del framework | `10`, `16`, `19` |

---

## 7. Checklist longitudinal mínimo

Este checklist no reemplaza matrices técnicas más profundas. Funciona como control mínimo para Fase 1.

### 7.1 Contexto y datos

| Ítem | Pregunta | Estado |
|---|---|---|
| C-01 | ¿El producto define usuarios, propósito y límites? | pendiente / aprobado / no aplica |
| C-02 | ¿Identifica si usa datos personales, académicos, sensibles o públicos? | pendiente / aprobado / no aplica |
| C-03 | ¿Reduce la recolección de datos a lo necesario? | pendiente / aprobado / no aplica |
| C-04 | ¿Indica quién puede acceder, editar o compartir información? | pendiente / aprobado / no aplica |
| C-05 | ¿Declara restricciones de uso educativo, investigativo o público? | pendiente / aprobado / no aplica |

### 7.2 Diseño y arquitectura

| Ítem | Pregunta | Estado |
|---|---|---|
| D-01 | ¿Incluye seguridad desde el diseño? | pendiente / aprobado / no aplica |
| D-02 | ¿Identifica amenazas o fallas probables de forma defensiva? | pendiente / aprobado / no aplica |
| D-03 | ¿Define controles mínimos antes de implementación? | pendiente / aprobado / no aplica |
| D-04 | ¿Evita dependencias innecesarias o privilegios excesivos? | pendiente / aprobado / no aplica |
| D-05 | ¿Incluye accesibilidad, privacidad y revisión humana? | pendiente / aprobado / no aplica |

### 7.3 Implementación y codificación

| Ítem | Pregunta | Estado |
|---|---|---|
| I-01 | ¿El código evita secretos incrustados? | pendiente / aprobado / no aplica |
| I-02 | ¿Valida entradas y maneja errores de forma segura? | pendiente / aprobado / no aplica |
| I-03 | ¿Usa permisos mínimos razonables? | pendiente / aprobado / no aplica |
| I-04 | ¿Incluye revisión de dependencias? | pendiente / aprobado / no aplica |
| I-05 | ¿Tiene guía específica del stack cuando aplica? | pendiente / aprobado / no aplica |

### 7.4 IA y automatización

| Ítem | Pregunta | Estado |
|---|---|---|
| IA-01 | ¿Se identifican datos enviados a modelos o servicios? | pendiente / aprobado / no aplica |
| IA-02 | ¿Hay revisión humana de salidas relevantes? | pendiente / aprobado / no aplica |
| IA-03 | ¿Se documentan límites, supuestos y riesgos de IA? | pendiente / aprobado / no aplica |
| IA-04 | ¿Se evita usar IA con datos sensibles sin política clara? | pendiente / aprobado / no aplica |
| IA-05 | ¿Se conserva trazabilidad de decisiones críticas? | pendiente / aprobado / no aplica |

### 7.5 Despliegue y operación

| Ítem | Pregunta | Estado |
|---|---|---|
| O-01 | ¿La configuración inicial es segura por defecto? | pendiente / aprobado / no aplica |
| O-02 | ¿Los secretos se gestionan fuera del código? | pendiente / aprobado / no aplica |
| O-03 | ¿Existe ruta de rollback o recuperación? | pendiente / aprobado / no aplica |
| O-04 | ¿Existe observabilidad mínima? | pendiente / aprobado / no aplica |
| O-05 | ¿Se define cómo reportar incidentes o fallas? | pendiente / aprobado / no aplica |

### 7.6 Documentación y transferencia

| Ítem | Pregunta | Estado |
|---|---|---|
| T-01 | ¿La decisión de seguridad queda documentada? | pendiente / aprobado / no aplica |
| T-02 | ¿La documentación puede entenderla otra persona? | pendiente / aprobado / no aplica |
| T-03 | ¿Se registra deuda técnica o riesgo pendiente? | pendiente / aprobado / no aplica |
| T-04 | ¿Se identifica lectura investigativa del riesgo? | pendiente / aprobado / no aplica |
| T-05 | ¿Se identifica lectura artística o experiencial del riesgo? | pendiente / aprobado / no aplica |

---

## 8. Gates técnicos mínimos

Los gates son compuertas de avance. No buscan detener el trabajo creativo, sino evitar que un prototipo inseguro se disfrace de madurez.

| Gate | Nombre | Pregunta de control | Evidencia mínima | Resultado posible |
|---|---|---|---|---|
| G0 | Contexto y datos | ¿Qué datos, usuarios, permisos y riesgos toca? | ficha de contexto | aprobado / observaciones / bloqueado / no aplica |
| G1 | Diseño seguro | ¿Hay seguridad incorporada desde arquitectura? | decisiones y riesgos | aprobado / observaciones / bloqueado / no aplica |
| G2 | Codificación segura | ¿El código evita prácticas inseguras conocidas? | checklist por stack | aprobado / observaciones / bloqueado / no aplica |
| G3 | Dependencias y secretos | ¿Dependencias, paquetes y secretos fueron revisados? | reporte o bitácora | aprobado / observaciones / bloqueado / no aplica |
| G4 | Revisión y pruebas | ¿Hay revisión humana y pruebas mínimas? | PR, code review o bitácora | aprobado / observaciones / bloqueado / no aplica |
| G5 | Despliegue seguro | ¿La configuración inicial es segura por defecto? | checklist de despliegue | aprobado / observaciones / bloqueado / no aplica |
| G6 | Operación y respuesta | ¿Existe monitoreo, respuesta o ruta de mantenimiento? | runbook o plan mínimo | aprobado / observaciones / bloqueado / no aplica |
| G7 | Transferencia y documentación | ¿La tríada puede aprender del proceso? | matriz PH-IT-AT y bitácora | aprobado / observaciones / bloqueado / no aplica |

### 8.1 Estados de gate

| Estado | Significado |
|---|---|
| Aprobado | Cumple criterio mínimo para avanzar. |
| Aprobado con observaciones | Puede avanzar, pero deja deuda o condición registrada. |
| Pendiente | Requiere completar evidencia antes de cerrar fase. |
| Bloqueado | No debe avanzar sin revisión o corrección. |
| No aplica | El gate no corresponde al producto o fase. Debe justificarse brevemente. |

---

## 9. Matriz de severidad y prioridad

La matriz usa una escala simple para Fase 1. No sustituye análisis especializado cuando el riesgo sea alto.

| Nivel | Severidad | Descripción | Acción mínima |
|---|---|---|---|
| S0 | No aplica | No hay exposición razonable en esta fase | justificar no aplicación |
| S1 | Baja | Riesgo menor o contenido no sensible | documentar y continuar |
| S2 | Moderada | Riesgo manejable con controles básicos | aplicar checklist y gate |
| S3 | Alta | Puede afectar datos, usuarios, acceso o confianza | revisar antes de avanzar |
| S4 | Crítica | Puede causar exposición seria, daño institucional o pérdida de control | bloquear avance y escalar revisión |

| Nivel | Probabilidad | Descripción |
|---|---|---|
| P1 | Rara | Poco probable en el contexto actual |
| P2 | Posible | Puede ocurrir si hay error o mala configuración |
| P3 | Probable | Es esperable sin controles explícitos |
| P4 | Alta | Ya hay señales, deuda o exposición concreta |

### 9.1 Prioridad mínima

```text
Prioridad = Severidad + Probabilidad + Exposición documental
```

La exposición documental aumenta cuando el riesgo no está registrado, no tiene dueño, no tiene gate o no tiene ruta de mitigación.

---

## 10. Perfil de implementación por stack

Cada stack requiere checklist específico. Esta matriz define el mínimo, no la guía completa.

| Stack o entorno | Riesgos típicos | Evidencia mínima | Cartapacio espejo |
|---|---|---|---|
| Markdown / documentación | exposición accidental, instrucciones inseguras, rutas sensibles | revisión editorial y de secretos | `18`, `21` |
| Python | dependencias, manejo de archivos, datos, notebooks, APIs | requirements revisado, entorno documentado | `10`, `16` |
| TypeScript / JavaScript | dependencias, frontend, APIs, tokens, validación | package revisado, checklist web | `10`, `16` |
| Laravel / PHP | rutas, autenticación, autorización, CSRF, configuración, consultas | checklist Laravel | `10`, `16`, `19` |
| SQL / bases de datos | inyección, permisos, datos sensibles, backups | esquema, permisos, consultas revisadas | `10`, `16` |
| Docker / contenedores | imágenes vulnerables, secretos, permisos, puertos | revisión de imagen y configuración | `16`, `19` |
| Kubernetes | configuración compleja, permisos, exposición de servicios | revisión de manifiestos y acceso | `16`, `19` |
| IaC | exposición de secretos, permisos amplios, recursos públicos | revisión de configuración | `16`, `19` |
| IA / agentes | datos, prompts, salidas, permisos, herramientas | límites y revisión humana | `09`, `16` |

---

## 11. Checklist mínimo para Laravel u otro stack web

Esta sección funciona como ejemplo de stack. No obliga a usar Laravel. Si se adopta otro framework, se debe crear checklist equivalente.

| Área | Pregunta mínima | Evidencia |
|---|---|---|
| Configuración | ¿El entorno distingue desarrollo, prueba y producción? | archivo de configuración documentado |
| Secretos | ¿Las claves no están en el repositorio? | uso de variables o gestor de secretos |
| CSRF | ¿Las rutas con formularios usan protección adecuada? | revisión de rutas y formularios |
| Autenticación | ¿El acceso de usuarios está definido y probado? | flujo documentado |
| Autorización | ¿Los permisos se revisan por rol o acción? | matriz de permisos |
| Validación | ¿Las entradas de usuario se validan? | reglas o validadores documentados |
| Consultas | ¿Se evita construir consultas inseguras manualmente? | revisión de consultas |
| Errores | ¿Los errores no exponen datos internos? | configuración y prueba básica |
| Dependencias | ¿Los paquetes fueron revisados? | reporte o bitácora |
| Despliegue | ¿La configuración inicial reduce exposición? | checklist de despliegue |

---

## 12. Uso de Snyk o herramienta equivalente

La herramienta concreta puede variar. Lo obligatorio es conservar evidencia de revisión.

| Área de revisión | Uso esperado | Evidencia mínima |
|---|---|---|
| Dependencias | Identificar librerías vulnerables o desactualizadas | reporte, issue o bitácora |
| Código | Señalar patrones riesgosos cuando aplique | reporte o revisión manual |
| Contenedores | Revisar imágenes base y paquetes | reporte o decisión documentada |
| IaC | Revisar configuraciones cloud o infraestructura | reporte o checklist |
| Priorización | Distinguir hallazgos críticos de observaciones menores | decisión de remediación |

### 12.1 Regla de no automatismo

Un escaneo no equivale a seguridad. Todo hallazgo requiere interpretación humana, priorización, decisión y documentación.

```text
Escaneo útil = herramienta + revisión humana + decisión + evidencia + seguimiento
```

---

## 13. Transferencia simétrica con seguridad

La seguridad longitudinal también se transfiere a la tríada.

| Dimensión | Programador Humanista | Investigador Transdisciplinario | Artista Transdisciplinario |
|---|---|---|---|
| Datos | protege estructuras, accesos y flujos | clasifica corpus y evidencia | cuida representación y consentimiento |
| Riesgo | implementa controles técnicos | analiza validez, sesgo y ética | evalúa impacto experiencial y cultural |
| Documentación | registra decisiones técnicas | registra decisiones metodológicas | registra proceso creativo y mediación |
| IA | revisa integraciones y límites | evalúa confiabilidad epistémica | explora percepción, lenguaje y sentido |
| Seguridad | aplica gates y checklist | interpreta implicaciones de evidencia | protege experiencia, contexto y participación |
| Transferencia | crea artefactos reutilizables | produce conocimiento trazable | comunica sentido de forma accesible |

---

## 14. Matriz de evidencia mínima por producto

| Producto | Evidencia de seguridad mínima | Gate requerido |
|---|---|---|
| Alcance operativo | declaración de seguridad longitudinal | G0 |
| Mapa rector | columna de seguridad y enlaces espejo | G0, G1 |
| Fórmula nuclear | seguridad como dimensión nuclear | G0 |
| Matriz de seguridad | checklist, gates, severidad y enlaces | G0-G7 |
| Matriz de competencias | competencias de seguridad por nivel | G1-G4 |
| Unidades nucleares | unidad de seguridad longitudinal | G1-G4 |
| Aplicación educativa | checklist web, datos, revisión y pruebas | G0-G6 |
| Prototipo con IA | límites, datos, revisión humana, trazabilidad | G0-G4, G7 |
| Despliegue | configuración, secretos, rollback, runbook | G5, G6 |
| Guía humana | advertencias, límites y uso responsable | G7 |

---

## 15. Niveles de madurez de seguridad

| Nivel | Descripción | Evidencia típica |
|---|---|---|
| M0 | Seguridad no considerada | no aceptable para producto estable |
| M1 | Seguridad declarada | nota de riesgos o límites |
| M2 | Seguridad documentada | checklist inicial y decisiones |
| M3 | Seguridad integrada | gates, revisión, pruebas y enlaces espejo |
| M4 | Seguridad longitudinal | SSDLC, DevSecOps, monitoreo, mantenimiento y transferencia |

### 15.1 Umbral mínimo para Fase 1

Para productos rectores de Fase 1, el umbral mínimo es **M2**.  
Para prototipos funcionales con datos, usuarios o despliegue, el umbral mínimo es **M3**.  
Para ecosistemas N4, el objetivo es **M4**.

---

## 16. Regla de documentación de excepciones

Cuando un control no aplique o no pueda completarse, debe documentarse.

| Campo | Descripción |
|---|---|
| Control omitido | Qué control no se aplicó |
| Razón | Por qué no aplica o por qué se pospone |
| Riesgo residual | Qué riesgo queda vivo |
| Responsable | Quién debe revisarlo después |
| Fecha de revisión | Cuándo debe reabrirse |
| Estado | aceptado / pendiente / bloqueado |

---

## 17. Antipatrones de seguridad

| Antipatrón | Riesgo | Corrección mínima |
|---|---|---|
| Seguridad al final | controles tardíos y costosos | incluir G0 y G1 desde diseño |
| Prototipo eterno | producto usado sin revisión | declarar límites y estado |
| Escaneo mágico | confiar ciegamente en herramienta | revisión humana y decisión |
| Framework como amuleto | asumir que Laravel u otro framework protege todo | checklist específico |
| Documentación muda | decisiones no registradas | bitácora y changelog |
| Datos invisibles | no clasificar datos usados | ficha de datos |
| Secreto en repositorio | exposición de claves o tokens | gestión de secretos |
| IA sin límites | usar modelos sin revisar datos o salidas | revisión humana y trazabilidad |
| Permisos generosos | acceso excesivo por comodidad | mínimo privilegio razonable |

---

## 18. Plantilla mínima de registro de gate

```text
Gate:
Producto:
Fecha:
Responsable:
Estado:

Pregunta de control:

Evidencia revisada:

Riesgos identificados:

Decisión:

Observaciones:

Próxima revisión:
```

---

## 19. Enlaces espejo recomendados

| Documento futuro | Cartapacio PH | Cartapacio espejo |
|---|---|---|
| Matriz de seguridad longitudinal | `Metricas/` | `15`, `16` |
| Checklist de codificación segura | `Enlaces_Espejo/` | `10`, `16` |
| Checklist Laravel | `Enlaces_Espejo/` | `10`, `16`, `19` |
| Checklist OWASP | `Enlaces_Espejo/` | `15`, `16` |
| Matriz MITRE defensiva | `Enlaces_Espejo/` | `04`, `15`, `16` |
| Gate report | `Metricas/` | `15`, `18` |
| Registro de excepción | `Gobernanza_Perfil/` | `04`, `18` |
| Runbook mínimo | `Enlaces_Espejo/` | `19`, `20` |

---

## 20. Locks vigentes

Durante esta fase no se deben crear todavía:

```text
AGENTS.md
CLAUDE.md
SKILLS.md
workflows operativos finales
```

Se permite crear matrices, checklist, gates, plantillas no finales, mapas, protocolos preliminares y documentación de seguridad longitudinal.

---

## 21. Criterio de cierre de esta matriz

Esta matriz v0.1 podrá considerarse lista para pasar a uso operativo inicial cuando:

1. esté alineada con el Alcance Operativo v0.2;
2. esté alineada con el Mapa Rector v0.2;
3. conserve la estrategia de centralización con enlaces espejo;
4. use marcos de seguridad de forma defensiva y educativa;
5. no cree workflows finales ni archivos bloqueados;
6. pueda alimentar competencias, unidades nucleares y métricas N3/N4.

---

## 22. Próxima acción

Después de revisar esta matriz, el siguiente producto recomendado es:

```text
Matriz_Transferencia_Simetrica_Triada_PH_IT_AT_v0_2.md
```

Luego:

```text
Matriz_Competencias_Programador_Humanista_v3_0_0_v0_2.md
```

---

## 23. Estado de cierre del documento

Este documento queda como **v0.1** de la Matriz de Seguridad Longitudinal del Programador Humanista v3.0.0.

Su función es convertir la seguridad, privacidad y confianza en una práctica longitudinal, transdisciplinaria y documentable desde Fase 1, sin romper la arquitectura centralizada del perfil ni duplicar documentos técnicos que deben vivir en cartapacios especializados.

