# Arquitectura de distribución y transferencia · Framework V5.1.0

**Fecha:** 2026-10-06  
**Estado:** APROBADO · canónico  
**Origen:** cierre de reflexión sobre Framework, repositorios, paquete autosostenido, aplicación y transferencia.

## Regla principal

El Framework es el sistema completo. Sus superficies y artefactos no son equivalentes entre sí.

```text
Framework
!= repositorio maestro
!= paquete autosostenido
!= repositorio del proyecto
!= aplicación
!= release
```

Todos forman parte del mismo ecosistema.

## Funciones

| Elemento | Función |
|---|---|
| Framework | arquitectura, principios, perfiles, pedagogía, conocimiento, gobernanza y evolución |
| Repositorio maestro | fuente canónica, memoria versionada y evolución del Framework |
| Macroestructura 00–21 + 99 | gramática común de organización e interoperabilidad |
| Paquete autosostenido | incorporación portable y suficiente del Framework a un proyecto |
| Repositorio del proyecto | fuente versionada de verdad de una implementación situada |
| Aplicación | superficie operativa de referencia para START, INTEGRATE y AUDIT |
| Release | fotografía reproducible de una versión estable |
| Transferencia simétrica reversible | retorno gobernado de aprendizaje situado al Framework |

## Flujo

```text
Framework maestro
→ paquete autosostenido
→ proyecto real
↔ aplicación
→ práctica + evidencia + aprendizaje
→ transferencia simétrica reversible
→ contraste + gate humano
→ posible evolución del Framework
```

## Aplicación

La aplicación es la superficie operativa de referencia para todos los usuarios. No sustituye el repositorio del proyecto ni convierte GitHub en requisito de dominio.

```text
START     → construir estado Framework
INTEGRATE → incorporar sin colonizar lo existente
AUDIT     → contrastar estado, evidencia e historia
```

Debe aplicar lectura y apoyo proporcionales a la necesidad.

## Autonomía

El proyecto debe poder continuar sin conexión al repositorio maestro y sin dependencia permanente de la aplicación.

Principio:

> salir de la aplicación sin salir del Framework.

## Transferencia

Lo que retorna al Framework no es el proyecto completo. Retornan candidatos transportables:

- patrones;
- métodos;
- criterios;
- hallazgos;
- problemas recurrentes;
- mejoras de contratos o schemas;
- aprendizajes pedagógicos;
- casos y contraejemplos.

```text
experiencia situada
→ aprendizaje candidato
→ contraste
→ revisión humana
→ posible integración
```

La transferencia no altera silenciosamente el canon.
