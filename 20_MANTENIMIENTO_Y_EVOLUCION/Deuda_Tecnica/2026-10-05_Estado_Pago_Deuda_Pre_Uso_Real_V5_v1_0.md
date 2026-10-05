# Estado de pago de deuda pre-uso real · 2026-10-05

**Estado:** cierre técnico candidato  
**Objetivo:** distinguir deuda pagada de deuda legítimamente pendiente.

## Deuda pagada en esta integración

| Prioridad | Deuda | Estado |
|---|---|---|
| P0 | Canon A-G, Marco Pedagógico y registro de decisiones | PAGADA |
| P1 | Schema canónico de Base de Conocimiento común | PAGADA |
| P2 | Migración estructural inicial del repositorio bibliográfico | PAGADA EN ESTRUCTURA |
| P3 | Contrato técnico de invocación PH·IT·AT | PAGADA |
| P4 | Gobernanza comunitaria operativa mínima | PAGADA |
| P5 | Instrumento ligero de verificación caleidoscópica | PAGADA |
| P6 | Superficies mínimas en aplicación | PAGADA EN CANDIDATO |
| P7 | Pruebas y verificación integrada | PAGADA · CI VERDE NODE 22/24 |
| P8 | Gate humano para uso real | PENDIENTE |

## Alcance exacto de P2

Se migraron **54 registros bibliográficos** del listado institucional a un corpus común validable por schema, preservando procedencia y el conflicto histórico de identificador `BA-003`.

La migración no corrige silenciosamente la fuente ni eleva registros a estado validado.

El repositorio histórico contiene además fichas anotadas BA-001–BA-060. Su contenido permanece preservado en la fuente institucional; su enriquecimiento estructurado puede incorporarse progresivamente sin bloquear la operación de la Base común. La **verificación contra fuentes primarias** permanece separada y requerida antes de elevar entradas a `validated` o `reference`.

## Deuda que permanece abierta por requerir realidad

- comunidad de práctica efectiva;
- validación pedagógica empírica;
- casos reales de emergencia caleidoscópica;
- transferencia de aprendizaje entre contextos;
- indicadores de madurez comunitaria;
- necesidad o no de métricas cuantitativas.

## Verificación técnica completada

GitHub Actions `Framework V5 Verify` completó satisfactoriamente `npm run verify` en **Node 22 y Node 24** sobre el candidato integrado.

```text
typecheck ✓
build ✓
tests ✓
audits ✓
Node 22 ✓
Node 24 ✓
```

## Gate restante

Solo permanece P8: decisión humana de integrar el candidato a `main` y declarar el Framework preparado para uso real controlado.
