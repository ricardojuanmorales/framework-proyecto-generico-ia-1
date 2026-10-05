# Contrato de Base de Conocimiento común V5 v1.0

**Fecha:** 2026-10-05  
**Estado:** APROBADO · canónico

## Tesis

La Base de Conocimiento común es el bien epistemológico compartido del ecosistema.

```text
una base común
→ múltiples lentes
→ usos situados
→ trazabilidad compartida
```

No pertenece a PH, IT ni AT.

## Unidad mínima

Toda entrada debe poder conservar:

- identidad y tipo;
- procedencia;
- referencia o fuente;
- estado de madurez y verificación;
- conceptos o palabras clave;
- perfiles relacionados;
- anotaciones;
- relaciones con otras entradas;
- historial y conflictos de migración.

Schema operativo:
`apps/framework-v5/src/schemas/common-knowledge-item.schema.json`

## Estados

```text
proposed
→ reviewed
→ validated
→ reference
→ superseded
```

`superseded` preserva historia; no significa borrado.

## Distinción obligatoria

```text
fuente/evidencia
!= interpretación
!= decisión
!= canon
```

## Acceso por perfiles

PH, IT y AT consultan el mismo patrimonio.

- PH pregunta por diseño, construcción, tecnología, riesgo, mantenimiento y gobernabilidad.
- IT pregunta por método, evidencia, procedencia, incertidumbre y validez.
- AT pregunta por percepción, experiencia, simbolismo, representación e imaginación crítica.

Una entrada puede ser relevante para varias lentes sin duplicarse.

## IA y comunidad

La IA puede localizar, resumir, contrastar, relacionar y detectar inconsistencias.  
La comunidad puede proponer, anotar, contextualizar, contrastar y reportar errores.

Ninguna de estas acciones convierte por sí sola una entrada en canon.

## Memoria

- Base común = patrimonio disponible.
- Conocimientos activos = conocimiento invocado ahora.
- PORTAFOLIO = historia de uso, interpretación y cambio.

## Migración

El corpus inicial proviene del repositorio institucional de bibliografía anotada. Toda inconsistencia histórica se preserva y se explicita hasta ser reconciliada mediante evidencia y decisión trazable.
