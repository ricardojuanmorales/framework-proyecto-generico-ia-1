# Modelo Portable de Proyecto + Portafolio + Schemas V5 v0.1

**Fecha:** 2026-09-22  
**Estado:** candidato Fase 2  
**Rama:** `fase2-operacionalizacion-v5`  
**Función:** definir la unidad portable mínima para que un proyecto pueda salir de la aplicación V5, vivir en GitHub, reabrirse y devolver aprendizaje al Framework sin depender de una instancia concreta de la aplicación.

---

## 1. Tesis

```text
aplicación
→ diseña y acompaña

paquete portable
→ preserva estado y continuidad

repositorio del proyecto
→ vive y evoluciona

Framework
← recibe aprendizaje reversible
```

La aplicación no debe ser una cárcel.

El proyecto debe poder sobrevivir sin ella.

---

## 2. Unidad portable mínima

Todo proyecto V5 debe poder exportar un **Paquete de Proyecto Framework** compuesto por:

1. manifest;
2. estado del Framework;
3. portafolio;
4. decisiones;
5. evidencia;
6. transferencias;
7. schemas versionados;
8. README de continuidad.

No se obliga a replicar la estructura 00–21 dentro del proyecto.

---

## 3. Manifest

El manifest identifica el paquete y su compatibilidad.

Campos mínimos:

```text
project_id:
project_name:
framework_version:
package_version:
mode: START / INTEGRATE / AUDIT
created_at:
updated_at:
repository_url:
schema_versions:
status:
```

Su función es permitir:

- identificación;
- compatibilidad;
- importación;
- migración futura;
- verificación de versión.

---

## 4. Estado del Framework

Debe registrar la configuración viva del proyecto.

Campos conceptuales:

```text
problem:
context:
purpose:

profiles:
  active:
  latent:

maturity:
  project:
  products:
  autonomy:
  user: optional

methods_invoked:
knowledge_invoked:
risks:
gates:
human_decisions:
next_step:
```

Este estado representa **cómo está usando el Framework el proyecto**, no toda la historia del repositorio.

---

## 5. Portafolio

El portafolio es la memoria organizada de trabajo.

Debe poder contener entradas de:

- artefactos;
- decisiones;
- evidencia;
- reflexiones;
- invocaciones;
- transferencias;
- reaperturas;
- hitos.

El portafolio no sustituye los archivos reales.

Los referencia y conserva contexto.

---

## 6. Decisiones

Toda decisión material debe poder registrar:

```text
id:
fecha:
pregunta:
alternativas:
decision:
razon:
autoridad:
evidencia:
impacto:
reversible: sí / no / parcial
condiciones_reapertura:
```

No toda acción cotidiana requiere una decisión formal.

---

## 7. Evidencia

La evidencia debe registrar suficiente procedencia para ser interpretable.

Campos mínimos:

```text
id:
tipo:
descripcion:
fuente:
fecha:
perfil_relacionado:
objeto_relacionado:
criterio:
resultado:
limitaciones:
```

La palabra evidencia conserva significado situado según PH, IT o AT.

---

## 8. Transferencias

Toda transferencia material debe poder representar:

```text
origen:
destino:
objeto:
proposito:
contexto:
transformacion:
limites:
evidencia:
retorno:
estado:
```

Esto permite transferencia:

- entre perfiles;
- proyecto → Framework;
- Framework → proyecto;
- proyecto → proyecto cuando corresponda.

---

## 9. Cinco schemas conceptuales mínimos

Fase 2 define cinco contratos de datos conceptuales.

### 9.1 project.schema

Identidad y metadatos del paquete.

### 9.2 framework-state.schema

Configuración del Framework dentro del proyecto.

### 9.3 portfolio.schema

Índice de entradas y relaciones del portafolio.

### 9.4 decision.schema

Decisiones materiales y condiciones de reapertura.

### 9.5 transfer.schema

Transferencias reversibles.

La evidencia puede representarse inicialmente como tipo de entrada del portafolio.

Solo se separará en un `evidence.schema` propio si la implementación demuestra que la complejidad lo exige.

---

## 10. Regla de mínima proliferación

```text
schema nuevo
solo si existe
necesidad estructural real
```

No crear un schema por cada concepto del Framework.

Los schemas describen contratos de interoperabilidad, no toda la ontología.

---

## 11. Exportación

La aplicación V5 debe poder exportar como mínimo:

```text
framework-project/
├── README.md
├── manifest.json
├── framework-state.json
├── portfolio.json
├── decisions/
├── transfers/
└── schemas/
```

Esta topología es **conceptual y provisional**.

Fase 3 decidirá su materialización final.

---

## 12. Importación

La aplicación debe poder:

1. leer manifest;
2. verificar versión;
3. validar schemas;
4. cargar estado;
5. reconstruir portafolio;
6. advertir incompatibilidades;
7. preservar contenido que no comprenda;
8. proponer migración, nunca destruir silenciosamente.

---

## 13. Roundtrip

Roundtrip significa:

```text
app
→ exportar
→ trabajar fuera
→ importar
→ conservar significado material
```

No exige identidad byte a byte.

Exige preservación de:

- identidad;
- estado;
- decisiones;
- relaciones;
- procedencia;
- versiones;
- información desconocida cuando sea posible.

---

## 14. Preservación de origen

Al integrar un proyecto existente en modo INTEGRATE o AUDIT:

- no sobrescribir archivos originales;
- no reorganizar repositorio automáticamente;
- registrar procedencia;
- crear capa Framework mínima;
- mantener vínculo con artefactos existentes.

Regla:

```text
integrar
!= colonizar estructura
```

---

## 15. GitHub

GitHub es el entorno operativo recomendado para V5, pero el modelo portable no debe depender conceptualmente de GitHub.

Cuando existe repositorio GitHub, el paquete puede aprovechar:

- versionado;
- ramas;
- PR;
- issues;
- releases;
- trazabilidad;
- colaboración.

Pero los schemas y el paquete deben poder existir fuera de GitHub.

---

## 16. Portafolio y aplicación

La aplicación debe ofrecer al usuario una vista humana del portafolio:

- dónde estoy;
- qué decidí;
- qué produjo el proyecto;
- qué está pendiente;
- qué evidencia tengo;
- qué perfiles están activos;
- qué aprendí;
- qué puedo exportar.

El usuario no debe editar JSON manualmente para operar normalmente.

---

## 17. Transferencia de aprendizaje al Framework

El paquete debe permitir identificar aprendizaje candidato:

```text
observacion:
problema_encontrado:
adaptacion:
evidencia:
generalizable: sí / no / incierto
destino_sugerido:
```

El retorno no modifica automáticamente el Framework.

Genera una propuesta trazable para revisión.

---

## 18. Reapertura

Un proyecto importado o reactivado debe poder continuar desde su estado previo.

Debe conservar:

- versión del Framework original;
- versiones de schemas;
- decisiones relevantes;
- deuda;
- reservas;
- transferencias;
- estado N1–N4.

La aplicación puede sugerir migración a una versión nueva.

No debe fingir que el proyecto siempre nació en la versión actual.

---

## 19. Compatibilidad

V5 debe definir al menos:

### Compatibilidad hacia adelante
Una versión nueva intenta preservar campos desconocidos cuando sea razonable.

### Compatibilidad hacia atrás
La aplicación declara qué versiones anteriores puede importar.

### Migración
Toda migración material debe ser:

- explícita;
- trazable;
- reversible cuando sea posible;
- verificable.

---

## 20. Seguridad y privacidad

El paquete no debe incluir por defecto:

- secretos;
- credenciales;
- datos sensibles innecesarios;
- información personal no requerida.

Los schemas deben distinguir referencias de contenido sensible cuando sea pertinente.

---

## 21. Aplicación y autonomía

Tres niveles de dependencia aceptables:

### Nivel A
La aplicación crea el paquete.

### Nivel B
El proyecto continúa en GitHub sin aplicación.

### Nivel C
La aplicación puede volver a importar y continuar el acompañamiento.

El diseño debe soportar los tres.

---

## 22. Antipatrones

Evitar:

```text
copiar 00–21 dentro de cada proyecto
hacer obligatorio GitHub para entender el modelo
crear decenas de schemas antes de necesidad
guardar secretos en el paquete
hacer la app requisito permanente
perder campos desconocidos al importar
reescribir estructura existente en INTEGRATE
convertir portafolio en duplicado de todos los archivos
retornar aprendizaje automáticamente al canon
```

---

## 23. Criterio de estabilidad para Fase 2

Este modelo queda suficientemente estable cuando:

- START puede generar un paquete;
- INTEGRATE puede añadir Framework sin colonizar;
- AUDIT puede representar un proyecto existente;
- el paquete puede vivir sin la app;
- la app puede reimportarlo;
- decisiones y transferencias conservan trazabilidad;
- N1–N4, perfiles e invocaciones pueden serializarse;
- schemas son pocos y versionables;
- el aprendizaje puede regresar como propuesta reversible.
