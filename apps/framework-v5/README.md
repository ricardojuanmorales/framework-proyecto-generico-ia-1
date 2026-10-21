# Framework V5 App · Candidata técnica v5.3.0

**Versión técnica candidata:** `5.3.0`. **Estado:** rama de estabilización sin tag ni release; la edición documental v0.5.3 permanece experimental. No implica certificación de TSR semántica ni publicación estable.

## Modos presentes en el código

La interfaz `src/presentation/App.tsx` permite seleccionar los modos **START**, **INTEGRATE** y **AUDIT**. El servicio `src/application/project-service.ts` implementa la creación de proyectos en los tres modos, con reglas iniciales diferentes:

- **START:** proyecto nuevo, nombre, problema, propósito, contexto y perfiles activos.
- **INTEGRATE:** añade datos de proyecto preexistente y `preservationRule: preserve_source`; el flujo completo de no invasión requiere prueba situada.
- **AUDIT:** requiere contexto del origen y foco de auditoría; crea un registro con estado `review`, sin constituir por sí solo un dictamen de auditoría terminado.

Las tres rutas usan una infraestructura compartida de persistencia y exportación/importación. Se observan mecanismos para ZIP y JSON técnicos, prevalidación y confirmación humana antes de guardar una importación. **La presencia de estos mecanismos en el código no equivale a certificar una evaluación funcional completa o TSR T1–T8**.

## Contratos de integridad y gobernanza

- Diseño **Local_First**, sin backend ni cuenta obligatoria según contrato vigente.
- Datos importados tratados como no confiables y validados antes de persistir.
- Conservar identidad, fuente, historial y decisiones humanas.
- Mantener compatibilidad con proyectos históricos v5.0.0, v5.1.0 y v5.2.0; existen pruebas de compatibilidad en `src/tests/framework-v5.2-compatibility.test.ts`.
- Madurez `N1–N4` es estado a examinar, no acreditación automática.

## Desarrollo y verificación

```bash
cd apps/framework-v5
npm ci --ignore-scripts
npm run verify
```

El comando `verify` contempla TypeScript, build, Vitest y auditorías de arquitectura, secretos, privacidad, accesibilidad y dependencias. El workflow `.github/workflows/framework-v5-verify.yml` lo ejecuta en Node 22 y 24 cuando un PR cambia archivos bajo `apps/framework-v5/**`.

## Deuda para la release estable v5.3.0

1. Obtener y conservar resultados CI verificables sobre el commit de la rama.
2. Ejecutar pruebas E2E reales de los tres modos, persistencia y recuperación.
3. Probar fallos, importación cancelada, fuentes restringidas y operación sin red.
4. Verificar paquetes ZIP, integridad y retorno con receptor independiente.
5. Reconciliar cartapacio raíz Local_First con repositorio GitHub.
6. Examinar TSR T1–T8 y límites de madurez, aplicados a implementaciones piloto.
7. Realizar un Gate de estabilidad específico antes de etiquetar/released v5.3.0.

La documentación histórica del primer vertical slice v0.1 sigue respaldada por los commits y archivos de versiones anteriores. La actualización editorial no altera el código de la aplicación.

[Auditoría preflight del piloto](../../15_EVALUACION_CALIDAD_Y_AUDITORIA/2026-10-20_Preflight_Estabilidad_Framework_v5.3.0.md) · [Matriz de los tres modos](../../15_EVALUACION_CALIDAD_Y_AUDITORIA/2026-10-20_Matriz_START_INTEGRATE_AUDIT_v5.3_Piloto.md).
