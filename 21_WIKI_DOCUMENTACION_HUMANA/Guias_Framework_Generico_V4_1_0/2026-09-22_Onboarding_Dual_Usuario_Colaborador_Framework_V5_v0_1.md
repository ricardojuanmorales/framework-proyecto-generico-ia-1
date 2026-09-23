# Onboarding Dual de Usuario y Colaborador · Framework V5 v0.1

**Fecha:** 2026-09-22  
**Estado:** candidato Fase 2  
**Rama:** `fase2-operacionalizacion-v5`  
**Función:** ofrecer dos puertas claras al ecosistema V5 sin mezclar uso del Framework con desarrollo del Framework.

---

## 1. Tesis

```text
usar el Framework
!=
evolucionar el Framework
```

V5 debe ofrecer dos recorridos distintos:

1. **Usuario** → quiere aplicar el Framework a un proyecto.
2. **Colaborador** → quiere modificar, mantener o extender el Framework mismo.

Ambos comparten principios, pero no la misma carga cognitiva.

---

# PARTE A · ONBOARDING DE USUARIO

## 2. Objetivo

Permitir que una persona nueva pueda:

- entender qué es el Framework;
- describir un problema;
- activar un proyecto;
- recibir orientación;
- generar un proyecto semilla;
- continuar fuera de la aplicación.

No necesita conocer Git, ramas, estructura 00–21 ni procesos internos antes de empezar.

---

## 3. Entrada recomendada

El usuario necesita solamente:

```text
un problema o necesidad
+ contexto
+ personas afectadas
+ propósito
+ disposición a revisar decisiones
```

El uso de IA puede formar parte del proyecto, pero el Framework no presupone que toda actividad deba automatizarse.

---

## 4. Recorrido mínimo

### Paso 1 · Aprender

La aplicación presenta de forma guiada:

- propósito del Framework;
- PH;
- IT;
- AT;
- Caleidoscopio;
- N1–N4;
- humano–máquina–IA;
- gates;
- evidencia;
- transferencia;
- reversibilidad.

Meta:

> comprender suficiente para tomar decisiones, no memorizar el repositorio.

---

### Paso 2 · Elegir modo

```text
START
crear proyecto nuevo

INTEGRATE
integrar un proyecto existente

AUDIT
contrastar un proyecto maduro
```

---

### Paso 3 · Activar

El usuario describe:

- problema;
- contexto;
- propósito;
- restricciones;
- riesgos;
- artefactos existentes.

El Framework propone:

- perfiles;
- N1–N4 inicial;
- métodos;
- conocimiento;
- gates;
- siguiente bloque.

El humano autoriza lo material.

---

### Paso 4 · Diseñar implementación

La aplicación ayuda a construir:

- mapa de proyecto;
- responsabilidades;
- portafolio inicial;
- decisiones;
- invocaciones;
- criterios de evidencia.

---

### Paso 5 · Exportar semilla

El usuario obtiene un paquete portable con:

- README;
- manifest;
- estado Framework;
- portafolio;
- decisiones;
- transferencias;
- schemas.

---

### Paso 6 · Continuar

El proyecto puede:

- continuar localmente;
- vivir en GitHub;
- regresar a la aplicación;
- evolucionar sin depender permanentemente de la app.

---

## 5. Qué NO necesita aprender al inicio

No es requisito inicial comprender:

- cartapacios 00–21;
- reglas de colocación documental;
- F2-BCC histórica;
- arquitectura interna de schemas;
- gobernanza de contribuciones;
- ramas Git;
- procesos de release.

Eso pertenece al onboarding de colaborador.

---

## 6. Criterio de éxito del usuario

El onboarding funciona cuando una persona puede responder:

```text
qué problema estoy trabajando
qué perfiles necesito
qué nivel N1–N4 aproximado tengo
qué métodos o conocimiento debo invocar
qué decisiones siguen siendo humanas
qué paquete me llevo
qué hago después
```

sin asistencia del equipo que creó el Framework.

---

# PARTE B · ONBOARDING DE COLABORADOR

## 7. Objetivo

Permitir que una persona contribuya al Framework sin romper:

- arquitectura;
- semántica;
- trazabilidad;
- compatibilidad;
- documentación humana;
- estabilidad de releases.

---

## 8. Prerrequisitos conceptuales

Antes de modificar el Framework, el colaborador debe comprender:

### Arquitectura
- macroestructura 00–21 / 99;
- residencia semántica;
- fuente canónica;
- Base Federada;
- PH / IT / AT;
- Caleidoscopio;
- N1–N4.

### Gobernanza
- humano como autoridad final;
- cambios trazables;
- reapertura controlada;
- no editar silenciosamente canónicos aprobados;
- deuda visible.

### Ciclo de vida
```text
activo → 18 cuando corresponda
estable → residencia semántica
histórico → 99 cuando corresponde
```

---

## 9. Flujo técnico mínimo

Flujo recomendado:

```text
clonar
→ crear rama
→ comprender función afectada
→ modificar
→ verificar
→ documentar
→ comparar
→ PR
→ revisión
→ decisión
→ merge
```

El colaborador no debe trabajar directamente sobre `main` para cambios estructurales.

---

## 10. Regla antes de modificar

Responder primero:

```text
¿Qué función primaria cambia?
¿Existe ya una fuente canónica?
¿Estoy creando duplicación?
¿Qué perfiles afecta?
¿Qué contratos rompe o extiende?
¿Necesita migración?
¿Puede revertirse?
¿Qué evidencia demostrará que el cambio funciona?
```

---

## 11. Tipos de contribución

### Tipo A · Contenido
Ejemplo:
- guía;
- documentación humana;
- Base de Conocimiento;
- ejemplo.

### Tipo B · Método / gobernanza
Ejemplo:
- protocolo;
- gate;
- regla estructural.

### Tipo C · Aplicación
Ejemplo:
- interfaz;
- import/export;
- validación;
- portafolio.

### Tipo D · Contrato de datos
Ejemplo:
- schema;
- migración;
- compatibilidad.

### Tipo E · Arquitectura mayor
Ejemplo:
- cambio de macroestructura;
- cambio de identidad de perfiles;
- cambio de modelo de Fase.

Tipo E requiere revisión humana explícita antes de canonización.

---

## 12. Desarrollo local mínimo esperado para V5

Fase 3 deberá asegurar una experiencia reproducible equivalente a:

```text
git clone <repo>
instalar dependencias
ejecutar aplicación
ejecutar verificación
```

Idealmente con pocos comandos documentados.

El onboarding no fija todavía tecnología específica.

Fija el contrato de experiencia.

---

## 13. Verificación mínima antes de PR

Todo cambio material debe comprobar, según aplique:

- funcionalidad;
- compatibilidad;
- schemas;
- documentación;
- accesibilidad;
- seguridad;
- trazabilidad;
- enlaces;
- migración;
- reversibilidad.

No todos los cambios requieren todas las pruebas.

Debe prevalecer proporcionalidad.

---

## 14. Documentación de una contribución

Toda contribución material debe explicar:

```text
problema:
cambio:
por qué:
evidencia:
impacto:
riesgo:
compatibilidad:
migración:
documentación:
reversibilidad:
```

La explicación puede vivir en PR, decisión o documento apropiado.

No se exige crear un archivo adicional para cada cambio.

---

## 15. Compatibilidad con releases

El colaborador debe distinguir:

```text
cambio interno compatible
cambio compatible visible
cambio deprecado
cambio que requiere migración
cambio rompiente
```

Fase 3 definirá la política semántica final de versionado para V5.

---

## 16. Relación con la aplicación histórica

La versión histórica V4 debe preservarse accesible.

Una contribución V5 no debe sobrescribir silenciosamente:

- comportamiento histórico;
- documentación histórica;
- estado de releases anteriores.

La evolución debe ser visible.

---

## 17. IA en colaboración

La IA puede ayudar a:

- investigar;
- comparar;
- generar borradores;
- revisar consistencia;
- detectar duplicación;
- proponer tests;
- documentar.

Pero el colaborador humano sigue siendo responsable de:

- comprender el cambio;
- verificar resultados;
- aceptar riesgo;
- someter PR;
- aprobar decisiones bajo su autoridad.

---

## 18. Criterio de éxito del colaborador

El onboarding funciona cuando una persona externa puede:

1. comprender dónde intervenir;
2. crear una rama;
3. ejecutar el entorno;
4. modificar sin duplicar arquitectura;
5. verificar;
6. documentar;
7. someter PR;
8. explicar impacto y reversibilidad;
9. dejar el repositorio en estado comprensible para otra persona.

---

# PARTE C · RELACIÓN ENTRE AMBOS ONBOARDINGS

## 19. Frontera

```text
Usuario
→ opera proyectos con el Framework

Colaborador
→ opera sobre el Framework
```

Un usuario puede convertirse después en colaborador.

No se presupone ese salto.

---

## 20. Superficie compartida

Ambos deben comprender:

- problema como centro;
- autoridad humana;
- PH / IT / AT;
- Caleidoscopio;
- N1–N4;
- trazabilidad;
- reversibilidad;
- aprendizaje evolutivo.

La diferencia está en la profundidad técnica y de gobernanza.

---

## 21. Relación con la aplicación V5

La aplicación debe ofrecer:

### Vista Usuario
```text
Aprender
→ Diseñar
→ Portafolio
→ Exportar
```

### Vista Colaborador
No necesita estar dentro de la misma interfaz de usuario.

Puede resolverse mediante:

- documentación técnica;
- repositorio;
- scripts;
- tests;
- guías de contribución;
- CI.

No convertir la aplicación pública en IDE del Framework.

---

## 22. Antipatrones

Evitar:

```text
enseñar Git al usuario antes de activar proyecto
exponer 00–21 como interfaz principal
hacer colaborador a todo usuario
hacer aplicación pública demasiado técnica
permitir cambios directos en main
crear documentos por cada contribución
ocultar decisiones importantes solo en chat
usar IA como aprobador final
```

---

## 23. Criterio de estabilidad para Fase 2

Este onboarding queda suficientemente estable cuando:

- un usuario puede activar y exportar sin conocer arquitectura interna;
- un colaborador puede modificar sin depender del autor original;
- ambos entienden autoridad humana y reversibilidad;
- las dos rutas comparten lenguaje pero no carga cognitiva;
- Fase 3 puede convertir estos contratos en experiencia real y reproducible.
