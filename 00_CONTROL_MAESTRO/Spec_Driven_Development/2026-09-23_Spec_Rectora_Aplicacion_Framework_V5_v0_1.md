# Spec Rectora de la Aplicación Framework V5 v0.1

**Fecha:** 2026-09-23  
**Estado:** candidata · Fase 3  
**Rama:** `fase3-construccion-v5`  
**Función:** traducir los contratos aprobados de Fase 2 en una especificación rectora previa a arquitectura técnica e implementación funcional.

---

## 1. Propósito

La aplicación V5 debe permitir que una persona pueda:

```text
APRENDER
→ DISEÑAR
→ REGISTRAR / PORTAFOLIO
→ EXPORTAR
→ CONTINUAR
→ REIMPORTAR
```

sin depender del autor original, de una cuenta, de una nube obligatoria ni de una IA externa.

---

## 2. Principio rector

```text
problema real
→ configuración situada
→ actuación trazable
→ evidencia
→ continuidad
→ aprendizaje reversible
```

La aplicación acompaña.

No reemplaza el Framework, la responsabilidad humana ni el proyecto real.

---

## 3. Método de desarrollo

La aplicación se construirá mediante SDD:

```text
principio
→ spec
→ arquitectura
→ contrato técnico
→ implementación
→ prueba
→ auditoría
→ verificación
→ revisión humana
→ gate
```

Regla:

```text
implementación funcional
no precede
a especificación suficiente
```

SDD se aplica proporcionalmente al riesgo y complejidad.

---

## 4. Guardarraíles longitudinales

Toda decisión técnica debe respetar:

- local-first;
- Security by Design;
- Security by Default;
- human-centered AI;
- agencia humana;
- privacidad;
- accesibilidad;
- reversibilidad;
- portabilidad;
- trazabilidad;
- compatibilidad;
- verificación reproducible.

---

## 5. Arquitectura local-first

Presunción inicial del MVP:

```text
backend_required: false
cloud_required: false
account_required: false
telemetry_default: false
external_AI_required: false
automatic_publication: false
```

Estas capacidades solo podrán añadirse posteriormente con:

```text
spec
+ riesgo
+ prueba
+ autorización
```

---

## 6. Modos de entrada

La aplicación debe soportar:

### START
Crear un proyecto nuevo.

### INTEGRATE
Añadir una capa Framework a un proyecto existente sin colonizar su estructura.

### AUDIT
Contrastar un proyecto maduro sin obligarlo a reorganizarse.

---

## 7. Superficies humanas

### APRENDER

Debe explicar de forma accesible:

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
- reversibilidad;
- Base Federada.

### DISEÑAR

Debe permitir:

- describir problema;
- contexto;
- propósito;
- restricciones;
- riesgos;
- artefactos existentes;
- perfiles sugeridos;
- N1–N4;
- métodos y conocimiento;
- gates;
- siguiente bloque.

### PORTAFOLIO

Debe mostrar:

- estado;
- decisiones;
- evidencia;
- artefactos;
- perfiles;
- N1–N4;
- invocaciones;
- transferencias;
- riesgos;
- reaperturas;
- aprendizaje candidato.

### EXPORTAR

Debe producir un paquete portable y reimportable.

---

## 8. Autoridad

```text
Framework propone
IA analiza y contrasta
máquina ejecuta y evidencia
humano decide y autoriza lo material
```

La IA no puede operar como juez final ni autoridad invisible.

---

## 9. Datos

La aplicación debe minimizar datos.

Reglas:

- recopilar solo lo necesario;
- no exigir identidad personal si no hace falta;
- no incluir secretos en exportaciones;
- no exportar reflexión privada accidentalmente;
- distinguir contenido, metadatos y referencias;
- preservar procedencia;
- permitir eliminación o exclusión cuando aplique.

---

## 10. Importación como superficie no confiable

Todo paquete importado debe tratarse como entrada no confiable.

Debe:

- validar schema;
- validar versión;
- limitar tamaño y estructura según implementación;
- manejar errores de forma segura;
- rechazar contenido inválido sin corrupción;
- preservar el original cuando exista conflicto;
- evitar ejecución de contenido importado.

---

## 11. Schemas mínimos

Implementar:

```text
project.schema
framework-state.schema
portfolio.schema
decision.schema
transfer.schema
```

Regla:

```text
manifest.json
→ instancia validada por project.schema
```

No crear schemas adicionales sin necesidad demostrada.

---

## 12. Portabilidad

El paquete mínimo debe preservar:

- identidad;
- versión;
- estado;
- perfiles;
- N1–N4;
- decisiones;
- evidencia;
- invocaciones;
- transferencias;
- riesgos;
- gates;
- procedencia;
- deuda;
- reaperturas.

---

## 13. Roundtrip

Debe verificarse:

```text
app
→ exportar
→ modificar / continuar fuera
→ importar
→ conservar significado material
```

No requiere identidad byte a byte.

Sí requiere preservación semántica suficiente.

---

## 14. Reversibilidad

Toda decisión de arquitectura relevante debe declarar:

```text
estado
límites
condiciones de salida
impacto
migración
reapertura
```

Evitar dependencias difíciles de retirar cuando exista alternativa razonable más simple.

---

## 15. Seguridad por diseño

Antes de implementar una superficie crítica debe existir análisis proporcional de:

- amenaza;
- abuso;
- exposición;
- corrupción;
- pérdida;
- automatización indebida;
- dependencia externa;
- error humano razonablemente previsible.

Superficies críticas iniciales:

- importación;
- exportación;
- persistencia local;
- schemas;
- migración;
- futuro uso de IA;
- publicación futura.

---

## 16. Seguridad por defecto

Por defecto:

```text
funciones futuras OFF
servicios externos OFF
publicación OFF
telemetría OFF
analíticas OFF
IA externa OFF
migración destructiva OFF
```

---

## 17. IA

La aplicación debe funcionar sin IA externa.

Cuando se use IA, podrá:

- explicar;
- sugerir;
- comparar;
- buscar;
- resumir;
- detectar tensiones;
- ayudar a redactar.

No podrá:

- decidir propósito;
- aprobar riesgo;
- publicar automáticamente;
- modificar canon;
- emitir evaluación final sobre personas;
- activar cambios irreversibles sin revisión humana.

---

## 18. Accesibilidad

La interfaz debe diseñarse para:

- navegación por teclado;
- estructura semántica;
- contraste suficiente;
- mensajes comprensibles;
- lenguaje claro;
- reducción de carga cognitiva;
- estados visibles;
- alternativas a interacción compleja.

Fase 3 debe producir evidencia de accesibilidad proporcional al alcance.

---

## 19. Preservación histórica V4

La aplicación V4 debe permanecer accesible.

V5 no puede sobrescribir silenciosamente:

- aplicación histórica;
- documentación histórica;
- estado de release;
- datos o proyectos previos.

---

## 20. Verificación

Debe existir una secuencia reproducible equivalente a:

```text
instalar
→ ejecutar
→ verificar
```

La verificación debe cubrir, según implementación:

- build;
- tests;
- schemas;
- import/export;
- roundtrip;
- seguridad;
- compatibilidad;
- integridad del paquete;
- documentación crítica.

---

## 21. Fuera de alcance del MVP

No es requisito para V5.0.0:

- backend;
- cuentas;
- nube;
- colaboración remota multiusuario;
- agentes autónomos finales;
- multiagentes;
- telemetría;
- analíticas;
- publicación automática;
- evaluación automática final;
- Base de Conocimiento exhaustiva.

---

## 22. Criterios de aceptación

La Spec Rectora se considera satisfecha cuando otra persona puede:

### Usuario

```text
aprender
→ activar
→ diseñar
→ registrar
→ exportar
→ continuar
→ reimportar
```

### Colaborador

```text
clonar
→ instalar
→ ejecutar
→ verificar
→ modificar
→ probar
→ someter PR
```

---

## 23. Gate antes de arquitectura técnica

No se selecciona stack ni arquitectura ejecutable hasta confirmar:

- alcance;
- local-first;
- modelo de datos;
- superficies críticas;
- restricciones de seguridad;
- portabilidad;
- reversibilidad;
- criterios de aceptación;
- fuera de alcance.

---

## 24. Siguiente movimiento

Después de aprobación humana de esta Spec Rectora:

```text
Spec Rectora aprobada
→ Arquitectura Técnica Mínima V5
→ Schemas ejecutables
→ primer vertical slice
```
