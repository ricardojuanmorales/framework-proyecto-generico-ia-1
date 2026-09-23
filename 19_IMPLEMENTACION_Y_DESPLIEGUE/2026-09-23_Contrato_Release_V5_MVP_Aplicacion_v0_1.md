# Contrato de Release V5 + MVP de Aplicación v0.1

**Fecha:** 2026-09-23  
**Estado:** candidato Fase 2  
**Rama:** `fase2-operacionalizacion-v5`  
**Función:** definir qué debe hacer la aplicación V5 y qué condiciones mínimas deben cumplirse para publicar una versión autosostenida Framework Genérico V5.0.0.

---

## 1. Tesis

```text
Fase 2
→ define contratos

Fase 3
→ construye, verifica y empaqueta

V5.0.0
→ publica un ecosistema autosostenido
```

La aplicación no es el Framework completo.

Es su principal superficie de aprendizaje, diseño y portabilidad.

---

# PARTE A · MVP DE APLICACIÓN V5

## 2. Propósito

La aplicación V5 debe permitir que una persona:

1. aprenda lo mínimo necesario;
2. describa un problema real;
3. diseñe una implementación;
4. visualice su estado;
5. exporte un proyecto semilla portable;
6. pueda regresar después sin perder continuidad.

---

## 3. Arquitectura de experiencia

La interfaz principal se organiza en cuatro zonas:

```text
APRENDER
→ DISEÑAR
→ PORTAFOLIO
→ EXPORTAR
```

No se usa la estructura 00–21 como navegación primaria del usuario.

---

## 4. Zona APRENDER

Objetivo:

> enseñar suficiente para decidir, no convertir al usuario en archivista del Framework.

Contenidos mínimos:

- qué problema resuelve el Framework;
- problema como centro;
- PH;
- IT;
- AT;
- Caleidoscopio;
- N1–N4;
- humano–máquina–IA;
- gates;
- evidencia;
- transferencia;
- reversibilidad;
- Base Federada.

Forma recomendada:

- recorrido guiado;
- microexplicaciones;
- escenarios;
- decisiones;
- ejemplos;
- retroalimentación;
- progresión lúdica sin vigilancia.

No requiere evaluación automática final.

---

## 5. Zona DISEÑAR

Debe implementar el Contrato de Activación.

### Entrada

```text
START
INTEGRATE
AUDIT
```

El usuario describe:

- problema;
- contexto;
- personas afectadas;
- propósito;
- restricciones;
- riesgos;
- artefactos existentes.

### La aplicación propone

- perfiles activos;
- perfiles latentes;
- N1–N4 inicial;
- métodos invocables;
- conocimiento relevante;
- gates;
- evidencia mínima;
- siguiente bloque.

### El humano decide

- activación;
- propósito;
- riesgos aceptables;
- cambios sensibles;
- publicación;
- decisiones estructurales.

---

## 6. Zona PORTAFOLIO

Debe responder de forma humana:

```text
¿Dónde estoy?
¿Qué decidí?
¿Qué estoy construyendo?
¿Qué evidencia tengo?
¿Qué falta?
¿Qué perfiles están activos?
¿Qué aprendí?
¿Qué puedo reabrir?
```

Debe mostrar:

- estado del proyecto;
- productos;
- decisiones;
- evidencia;
- invocaciones;
- transferencias;
- riesgos;
- gates;
- N1–N4;
- reaperturas;
- aprendizaje candidato.

No debe duplicar innecesariamente todos los archivos del repositorio.

---

## 7. Zona EXPORTAR

Debe generar el Paquete Portable V5:

```text
README
manifest
framework-state
portfolio
decisions
transfers
schemas
```

El usuario debe poder:

- descargarlo;
- usarlo fuera de la aplicación;
- subirlo a GitHub;
- reimportarlo después.

---

## 8. Capacidades que se preservan de la aplicación histórica

La app V4 ya contiene capacidades útiles:

- intake wizard;
- explorador;
- kanban;
- generador;
- revisor;
- wiki;
- dashboard.

V5 no necesita descartarlas.

Debe reinterpretarlas.

### Posible correspondencia

```text
intake wizard
→ DISEÑAR

explorador + wiki
→ APRENDER / invocación contextual

kanban
→ PORTAFOLIO / estado

generador
→ DISEÑAR / paquete

revisor
→ gates / evidencia

dashboard
→ PORTAFOLIO
```

La evolución debe reutilizar lo valioso sin preservar una interfaz V4 por nostalgia.

---

## 9. Funciones fuera del MVP

No son requisito para V5.0.0:

- cuentas de usuario;
- backend obligatorio;
- cloud;
- colaboración remota multiusuario;
- agentes finales autónomos;
- multiagentes;
- publicación automática;
- evaluación automática final;
- marketplace;
- analíticas invasivas;
- integración con todas las plataformas educativas.

Pueden evolucionar después si la evidencia lo justifica.

---

# PARTE B · CONTRATO DE RELEASE V5.0.0

## 10. Qué significa “autosostenida”

V5.0.0 es autosostenida cuando otra persona puede:

```text
entender
→ usar
→ exportar
→ continuar
→ colaborar
→ verificar
→ volver
```

sin depender del autor original para operar el sistema básico.

---

## 11. Componentes obligatorios de la release

### A. Aplicación V5 pública

Debe estar desplegada y funcional.

### B. Paquete descargable autosostenido

Debe incluir suficiente documentación y contratos para uso fuera de la app.

### C. GitHub Release oficial

Tag:

```text
v5.0.0
```

con artefactos y notas de release.

### D. Aplicación histórica V4

Debe permanecer accesible de forma explícita.

### E. Documentación de usuario

Como mínimo:

- guía rápida;
- guía de usuario;
- explicación de START / INTEGRATE / AUDIT;
- N1–N4;
- portabilidad;
- limitaciones conocidas.

### F. Documentación de colaborador

Como mínimo:

- instalación local;
- arquitectura;
- contribución;
- verificación;
- compatibilidad;
- versionado;
- PR.

### G. Schemas versionados

Núcleo inicial:

- project;
- framework-state;
- portfolio;
- decision;
- transfer.

### H. Verificación reproducible

Debe existir un comando o secuencia documentada equivalente a:

```text
instalar
→ ejecutar
→ verificar
```

### I. Changelog

Debe explicar cambios desde V4.

### J. Límites honestos

Debe declarar explícitamente lo que V5 no afirma ni soporta.

---

## 12. Preservación histórica

V5 no borra V4.

Debe existir:

```text
V5 actual
+
V4 histórica accesible
+
documentación de transición
```

La migración de datos o proyectos no puede ser silenciosa.

---

## 13. Compatibilidad

La release debe declarar:

- versión de aplicación;
- versión de schemas;
- versiones importables;
- política de migración;
- cambios rompientes;
- campos deprecados;
- mecanismos de preservación.

---

## 14. Seguridad, privacidad y accesibilidad

Antes de V5.0.0 debe existir evidencia proporcional de:

- ausencia de secretos en cliente/repositorio;
- validación de importación;
- manejo seguro de errores;
- protección de datos sensibles;
- accesibilidad básica verificada;
- ausencia de publicación automática;
- límites claros de IA;
- revisión humana donde corresponda.

No se exige certificación formal externa si no existe.

Se exige honestidad documental.

---

## 15. Desarrollo local

La experiencia de colaborador debe reducirse a pocos pasos.

Objetivo:

```text
git clone
→ instalar
→ ejecutar
→ verificar
```

Fase 3 seleccionará stack y comandos definitivos.

---

## 16. Release Candidate

Antes de v5.0.0 debe existir al menos una RC:

```text
v5.0.0-rc.1
```

La RC sirve para verificar:

- app;
- export/import;
- schemas;
- docs;
- compatibilidad;
- release packaging;
- instalación local;
- preservación V4.

No requiere ejecutar aún los cuatro pilotos oficiales.

---

## 17. Gates mínimos de release

### G1 · Uso independiente
Una persona nueva puede aprender y diseñar sin asistencia del autor.

### G2 · Portabilidad
Un proyecto puede exportarse y continuar fuera de la app.

### G3 · Roundtrip
Puede reimportarse sin pérdida material.

### G4 · Colaboración
Un colaborador puede ejecutar y verificar localmente.

### G5 · Trazabilidad
Decisiones, schemas, versión y cambios están documentados.

### G6 · Seguridad y accesibilidad
No hay riesgos críticos conocidos sin gobernanza.

### G7 · Historia
V4 permanece accesible y diferenciada.

### G8 · Honestidad
Limitaciones y deuda están explícitas.

---

## 18. Qué NO exige v5.0.0

No exige:

- validar los cuatro pilotos oficiales;
- demostrar efectividad educativa poblacional;
- automatización avanzada;
- agentes autónomos;
- backend;
- nube;
- cuentas;
- colaboración masiva;
- cubrir todo N4 en todos los componentes;
- Base de Conocimiento exhaustiva.

V5.0.0 debe ser estable para su **alcance declarado**.

---

## 19. Relación con los pilotos oficiales

Después de V5.0.0:

```text
V5
→ piloto
→ integración real
→ evidencia
→ transferencia reversible
→ V5.x
```

Los pilotos validan la versión publicada.

No bloquean su publicación.

---

## 20. Criterio de cierre de Fase 2

Fase 2 queda conceptualmente cerrada cuando están aprobados:

1. Contrato de Activación;
2. Modelo Operacional N1–N4;
3. Contrato de Orquestación PH–IT–AT;
4. Contrato de Invocación;
5. Modelo Portable;
6. Onboarding Dual;
7. Contrato de Release + MVP.

A partir de ahí, el trabajo cambia de naturaleza:

```text
diseñar
→ construir
```

Eso marca entrada a Fase 3.

---

## 21. Criterio de cierre de Fase 3

Fase 3 cierra cuando:

```text
app V5
+ paquete autosostenido
+ schemas
+ docs
+ verificación
+ V4 histórica
+ RC
+ gates de release
→ v5.0.0
```

---

## 22. Horizonte

```text
Fase 2
CONTRATOS

↓  

Fase 3
PRODUCTO

↓  

V5.0.0
RELEASE

↓  

Pilotos oficiales
EVIDENCIA

↓  

V5.x
EVOLUCIÓN
```
