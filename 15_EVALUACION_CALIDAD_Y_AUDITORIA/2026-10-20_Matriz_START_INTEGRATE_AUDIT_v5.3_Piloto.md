# Matriz de trazabilidad funcional · START / INTEGRATE / AUDIT para v5.3

**Corte:** 2026-10-20. **Estado:** evaluación estática de código, no prueba funcional; AHE G-FW53-EXEC-01.
**Fuentes concretas:** `apps/framework-v5/src/presentation/App.tsx`, `src/application/project-service.ts`, `src/tests/framework-v5.2-compatibility.test.ts`, `apps/framework-v5/package.json`, `apps/framework-v5/README.md`.

| Dimensión | START | INTEGRATE | AUDIT | Verificación |
|---|---|---|---|---|
| Selección modo UI | Estado `Mode` | Estado `Mode` | Estado `Mode` | Código en App.tsx, estática |
| Datos base | nombre/problema/propósito/perfiles | idem + origen | idem + origen + foco auditoría | `canCreate`, `onCreate` |
| Servicio | `createProject` | `createProject` | `createProject` | Código estático |
| Control preservar fuente | no aplica | `preserve_source` | `preserve_source` | `project-service.ts` |
| Estado inicial | `active` | `active` | `review` | `project-service.ts` |
| Exportar/importar | ZIP y JSON, `stageImport`, confirmación humana | infraestructura común | infraestructura común | código estático, no recorrido E2E |
| Persistencia | `repository.save` | mismo servicio | mismo servicio | comportamiento real no probado |
| Pruebas históricas | compatibilidad 5.0/5.1/5.2 declarada | cobertura por comprobar | cobertura por comprobar | test visto, no ejecutado |
| Resultado técnico integral | no certificado | no certificado | no certificado | pendiente |

## Divergencia documental detectada
`apps/framework-v5/README.md` titula «Vertical Slice 0.1» y enumera INTEGRATE/AUDIT como deuda conocida. El código actual contiene rutas para ambos. Esta divergencia documental debe corregirse **después de fijar evidencia funcional**, sin convertir la presencia de código en prueba del contrato completo.

## Contrato de verificación requerido para stable release
1. Instalar dependencias reproducibles mediante lockfile y ejecutar `npm run verify` (typecheck, build, tests, auditorías). Registre Node/npm, commit y logs.
2. Crear tres proyectos START / INTEGRATE / AUDIT desde UI; comprobar validaciones, límites y ausencia de escrituras no autorizadas.
3. Persistir, reiniciar, recuperar, exportar ZIP/JSON, prevalidar archivo no confiable, exigir gate humano, importar y comparar T1–T8.
4. Ensayar casos adversos: ZIP/JSON inválido, grande, schema incompatible; cancelación humana, inmutabilidad de fuente y operación sin red.
5. Contrastar manifest empaquetado con archivo root Local_First y repositorio; prueba extracción/restauración independiente.
6. Publicar release v5.3.0 solo con evidencias de todos los bloqueantes y decisión humana específica.

**Interpretación:** el estado más preciso es «implementación parcial observable en fuente, ejecución y completitud contractual no verificadas». Una edición experimental documental no constituye un release de software.
