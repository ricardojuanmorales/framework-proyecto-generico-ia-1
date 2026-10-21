# Preflight de estabilidad técnica Framework v5.3.0
**Corte:** 2026-10-20 · **Estado:** BLOQUEADO COMO ESTABLE; APTO PARA CONTINUAR EN PILOTO DOCUMENTAL.

## Fuentes comprobadas
- `apps/framework-v5/package.json` en rama principal: **version 5.2.0**, scripts `verify = typecheck + build + test + audit`, Node >=22 <27, React/Vite/Vitest y fflate.
- `apps/framework-v5/README.md` declara **Vertical Slice 0.1**: START → persistir localmente → exportar → staging de importación → confirmación humana → importar → roundtrip. **Indica explícitamente que INTEGRATE y AUDIT son deuda conocida**, y no representa un MVP completo.
- `.github/workflows/framework-v5-pages.yml`: despliega en push a `main` si cambia app o workflow, usando Node 24, npm ci, npm run verify, build y GitHub Pages.
- `.github/workflows/framework-v5.2-release.yml`: contrato v5.2.0 con prueba/empacado/sha256 y creación de release inmutable.
- GitHub Releases: v5.2.0 última estable pública localizada al corte.

## Dictamen de controles V53-T1..T6
| Gate | Resultado | Acción necesaria |
|---|---|---|
| V53-T1 fuente y trazabilidad | Parcial: rama, PR y documentación verificables; **root físico no accesible** | Comparar manifiestos root↔repo |
| V53-T2 flujos START/INTEGRATE/AUDIT | **No cumple aún**: README confirma deuda INTEGRATE/AUDIT | Implementar y probar de acuerdo con contratos |
| V53-T3 ZIP autosostenido v5.3 | **No comprobado** | Empaquetar release verificable, comprobar sin red |
| V53-T4 roundtrip | Parcial: START describe roundtrip, ejecución actual no verificada | Ejecutar roundtrip y comprobar invariantes |
| V53-T5 README/Wiki/reportes | En rama piloto, sin fusionar | Revisar enlaces y estados, merge tras evaluación |
| V53-T6 privacidad/licencias/autoridad | Reservas activas | Revisar fuentes, permisos y actas antes de publicación |

**Decisión:** no crear tag ni release **v5.3.0** estable, no cambiar `package.json` como sustituto de pruebas. Conservar `main` v5.2.0. El Gate humano autorizó proceder **condicionado a evidencia**; la condición técnica de estabilidad no ha sido satisfecha. Enlace PR de documentación: https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/pull/13.

**Transparencia:** no se ejecutó `npm ci` / `npm run verify` en checkout completo porque este contenedor no tiene acceso a clonación directa GitHub; los archivos de proyecto se inspeccionaron mediante GitHub connector. Esto no equivale a un fallo del software, pero impide certificar sus pruebas aquí.

## Rectificación de lectura de código · 2026-10-20
**CORRECCIÓN TRAZABLE DEL JUICIO ANTERIOR:** la afirmación «INTEGRATE y AUDIT no implementados» estaba basada en `apps/framework-v5/README.md`, cuyo texto sigue etiquetándolos como deuda. La inspección directa de **`apps/framework-v5/src/presentation/App.tsx`** y **`src/application/project-service.ts`** muestra código para seleccionar `START`, `INTEGRATE` y `AUDIT`, solicitar contexto de origen en los dos últimos, preservar el origen (`preservationRule: preserve_source`) y solicitar foco de auditoría para AUDIT; `createProject` asigna a AUDIT el estado `review`.

**Nuevo dictamen V53-T2:** **IMPLEMENTACIÓN PARCIAL VERIFICADA ESTÁTICAMENTE, VALIDACIÓN FUNCIONAL PENDIENTE**. No afirmar inexistencia de los modos. No afirmar equivalencia/ejecución integral validada sin ensayos.

**Deuda adicional concreta:** actualizar README de la app después de pruebas; crear matriz de correspondencia START/INTEGRATE/AUDIT frente a contratos y casos de prueba; medir cobertura UI → servicio → esquema → portabilidad → reconstrucción. La compatibilidad histórica de proyectos `5.0.0`, `5.1.0` y `5.2.0` se comprueba como intención de prueba explícita en `src/tests/framework-v5.2-compatibility.test.ts`; **no se ejecutaron esas pruebas en este entorno**.
