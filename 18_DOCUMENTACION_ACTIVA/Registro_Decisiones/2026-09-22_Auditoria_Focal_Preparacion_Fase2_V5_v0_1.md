# Auditoría focal · Preparación Fase 2 hacia Framework V5.0.0 v0.1

**Fecha:** 2026-09-22
**Estado:** diagnóstico focal / no canónico
**Ámbito:** preparación operacional para Fase 2 y horizonte V5.0.0

---

## 1. Pregunta rectora

> ¿Qué es lo mínimo que debemos construir para que otra persona o proyecto pueda usar correctamente el Framework sin nosotros al lado?

Respuesta operativa:

**un paquete autosostenido que permita aprender el lenguaje mínimo del Framework, describir un problema, seleccionar y coordinar PH/IT/AT, situar el trabajo en N1–N4, invocar métodos y conocimiento pertinentes, generar un proyecto semilla portable, registrar decisiones y evidencia, y devolver aprendizaje al Framework mediante transferencia reversible.**

---

## 2. Hallazgo ejecutivo

El Framework ya contiene suficiente materia conceptual sobre:

- PH, IT y AT;
- N1–N4;
- documentos invocables;
- transferencia;
- seguridad;
- trazabilidad;
- gobernanza;
- conocimiento federado.

La brecha principal no es falta de teoría.

La brecha es convertir esa teoría en **cuatro contratos operacionales de producto**:

1. onboarding de usuario;
2. onboarding de colaborador;
3. modelo portable de proyecto;
4. contrato de release V5.0.0.

---

# 3. Auditoría de los seis frentes

## A. Usuario nuevo

### Ya existe
- aplicación histórica con activación, explorador, kanban, generador, revisor y wiki;
- documentación humana amplia;
- conceptos de perfiles, gates y madurez.

### Falta
- recorrido introductorio coherente y lúdico;
- distinción START / INTEGRATE / AUDIT;
- diseño explícito del proyecto semilla;
- exportación portable;
- guía mínima posterior a exportación.

### Dictamen
**REFINA, no reconstruir desde cero.**

---

## B. Colaborador del Framework

### Ya existe
- macroestructura 00–21/99;
- reglas de residencia semántica;
- gobernanza;
- trazabilidad;
- GitHub como repositorio operativo.

### Falta
- onboarding técnico único;
- protocolo de contribución;
- flujo branch → cambio → evidencia → PR → revisión;
- comandos reproducibles para ejecutar/verificar la aplicación;
- contratos explícitos de compatibilidad.

### Dictamen
**BRECHA MATERIAL.**

V5 necesita un camino separado para “usar” y para “evolucionar” el Framework.

---

## C. Contrato de Fase 2

### Ya existe
- Base Federada;
- métodos invocables;
- glosario común;
- N1–N4;
- perfiles;
- transferencia.

### Falta
cerrar una definición compacta de Fase 2 que garantice seis capacidades:

1. activar;
2. invocar;
3. orquestar perfiles;
4. gobernar N1–N4;
5. registrar/transferir;
6. reconocer emergencia caleidoscópica.

### Dictamen
**LISTO PARA FORMALIZARSE.**

---

## D. MVP de aplicación

### Aplicación histórica actual
Ya contiene elementos valiosos:
- intake wizard;
- explorador;
- kanban;
- generador;
- revisor;
- wiki;
- dashboard.

### Riesgo
Su estructura refleja V4 y no todavía la experiencia simplificada de V5.

### MVP V5 recomendado

**Zona 1 — Aprender**
- introducción;
- recorrido lúdico;
- PH / IT / AT;
- Caleidoscopio;
- N1–N4;
- H-M-IA;
- gates;
- transferencia.

**Zona 2 — Diseñar implementación**
- START / INTEGRATE / AUDIT;
- problema;
- contexto;
- usuarios;
- riesgos;
- lentes sugeridos;
- N1–N4 inicial;
- métodos y Bases sugeridas;
- decisiones;
- mapa de implementación.

**Zona 3 — Proyecto / Portafolio**
- estado;
- decisiones;
- evidencia;
- artefactos;
- transferencia;
- exportación.

### Dictamen
**EVOLUCIONAR aplicación existente, preservando versión histórica.**

---

## E. Paquete autosostenido

Debe poder sobrevivir fuera de la aplicación.

### Contenido mínimo

- README de activación;
- manifest de proyecto;
- estado Framework;
- perfiles activados;
- N1–N4 situados;
- métodos invocados;
- riesgos/gates;
- portafolio inicial;
- decisiones;
- evidencia;
- transferencias;
- schemas versionados;
- guía humana mínima.

### Capacidades

- exportar;
- importar;
- versionar;
- continuar en GitHub;
- reabrir;
- transferir aprendizaje al Framework.

### Dictamen
**BRECHA MATERIAL.**

---

## F. Contrato de release V5.0.0

AI StoryLab 1 ofrece un patrón de calidad útil:

- aplicación pública;
- release estable;
- snapshot histórico;
- desarrollo local reproducible;
- documentación humana;
- límites honestos;
- verificación;
- seguridad;
- evolución posterior.

### V5 debe incluir

- release GitHub oficial;
- paquete descargable autosostenido;
- app V5 pública;
- app V4 histórica accesible;
- docs de usuario;
- docs de colaborador;
- schemas versionados;
- verificación reproducible;
- límites conocidos;
- changelog;
- guía de migración/evolución;
- ecosistema de mantenimiento.

### Dictamen
**CONTRATO A DEFINIR EN FASE 2 Y EJECUTAR EN FASE 3.**

---

# 4. N1–N4

La auditoría confirma que N1–N4 ya están profundamente presentes en el repositorio.

El problema histórico fue tratarlos como fases temporales.

Regla corregida:

```text
N1–N4 = escala de madurez operacional situada
!= fases de desarrollo del Framework
```

Fase 2 debe definir:

- significado;
- criterios observables;
- uso en usuario/proyecto/producto;
- relación con perfiles;
- relación con métodos/gates;
- cómo se registra y revisa.

Los proyectos piloto determinan su granularidad real.

---

# 5. Fase 2 mínima

Fase 2 debe producir solo siete bloques de producto, no siete subfases:

1. **Contrato de Activación**
2. **Modelo N1–N4 Operacional**
3. **Contrato de Orquestación PH-IT-AT + Caleidoscopio**
4. **Contrato de Invocación de conocimiento y métodos**
5. **Modelo Portable de Proyecto + Portafolio + Schemas**
6. **Onboarding Usuario + Colaborador**
7. **Contrato de Release V5 y MVP de Aplicación**

Estos productos pueden trabajarse en cascada y consolidarse como un único paquete Fase 2.

---

# 6. Qué no debe hacer Fase 2

- no crear todos los invocables históricos FAM-01…FAM-15;
- no llenar catálogos exhaustivos;
- no ejecutar los cuatro pilotos oficiales;
- no construir todavía plataforma multiusuario;
- no activar agentes finales;
- no convertir N1–N4 en cuatro fases;
- no reescribir toda la macroestructura;
- no crear Base Común física.

---

# 7. Criterio de cierre de Fase 2

Fase 2 queda suficientemente estable cuando podemos responder “sí” a:

1. ¿Un usuario nuevo puede aprender lo mínimo sin leer el repositorio completo?
2. ¿Puede describir un problema y recibir un diseño de implementación?
3. ¿Puede PH/IT/AT activarse de manera situada y trazable?
4. ¿Puede declarar y revisar N1–N4 sin convertirlo en burocracia?
5. ¿Puede invocar conocimiento y métodos desde la Base Federada?
6. ¿Puede generar un proyecto semilla portable?
7. ¿Puede un colaborador modificar el Framework con un flujo reproducible?
8. ¿Existe un contrato claro de lo que debe contener V5.0.0?

Si sí, Fase 2 cierra.

---

# 8. Fase 3

Fase 3 ejecuta el producto:

- aplicación V5;
- schemas;
- paquete autosostenido;
- desarrollo local;
- verificación;
- documentación;
- preservación V4;
- release candidate;
- release oficial V5.0.0.

---

# 9. Horizonte

```text
Fase 2
→ definir contratos operacionales

Fase 3
→ construir, verificar, empaquetar y publicar

V5.0.0
→ plataforma autosostenida

Pilotos oficiales
→ validar transferencia real

V5.x
→ evolución basada en evidencia
```
