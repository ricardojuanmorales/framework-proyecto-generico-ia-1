# Decisión de estabilización V5.1.0 · Framework Genérico

**Fecha:** 2026-10-06  
**Estado:** APROBADO · ejecución autorizada

## Decisiones cerradas

1. El Framework es el sistema completo; repositorio, paquete, app, proyecto y release son componentes distintos del mismo ecosistema.
2. 00–21 + 99 permanece como gramática común.
3. La materialización de 00–21 + 99 en proyectos es proporcional a necesidad real.
4. El paquete autosostenido sigue siendo la vía de incorporación portable del Framework a proyectos.
5. La app es la superficie operativa de referencia para todos los usuarios mediante START, INTEGRATE y AUDIT.
6. El repositorio del proyecto conserva la verdad versionada de cada implementación.
7. El repositorio maestro conserva la verdad versionada del Framework.
8. La transferencia simétrica reversible conecta aprendizaje situado con evolución del Framework.
9. V5.1.0 es una extensión compatible de V5.0.0, no una ruptura.
10. El bosquejo del artículo permanece sin cambios; los efectos de esta fase se evaluarán después mediante lectura de impacto.

## Trazabilidad

```text
reflexión
→ consenso
→ arquitectura documentada
→ guías actualizadas
→ README sincronizado
→ identidad V5.1.0
→ verificación CI
→ release reproducible
```

## Deuda que no se paga por diseño

- lector de pantalla;
- verificación primaria completa del corpus;
- validación pedagógica empírica;
- comunidad de práctica efectiva;
- transferencia de aprendizaje observada;
- emergencia caleidoscópica real;
- métricas futuras, solo si la evidencia las justifica.

## Gate

La estabilización se considera completa cuando CI V5 verifica la rama, el PR es integrado y la release V5.1.0 se publica reproduciblemente.
