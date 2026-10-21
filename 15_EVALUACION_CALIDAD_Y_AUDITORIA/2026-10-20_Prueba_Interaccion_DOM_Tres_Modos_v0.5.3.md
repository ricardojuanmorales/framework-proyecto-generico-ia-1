# Prueba de interacción UI por modo · Framework v5.3 piloto
**Fecha:** 2026-10-20 · **Alcance:** G-FW53-EXEC-01 · **Estado:** CI exitosa, no navegador E2E ni release estable.

- **Fuente:** `apps/framework-v5/src/tests/framework-v5.3-dom-flow.test.tsx`
- **Commit probado:** `4d0ac2dde654774e09dca5edd1da3d39c739ff06`.
- **Ejecución CI:** https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1/actions/runs/39514978004
- **Node 22:** completed/success, Verify success.
- **Node 24:** completed/success, Verify success.

## Acciones simuladas contra componente React real y repositorio en memoria
1. Cambiar `select` START/INTEGRATE/AUDIT y detectar botón inicialmente desactivado.
2. Rellenar nombre, problema y propósito; para INTEGRATE/AUDIT exigir procedencia; para AUDIT exigir foco explícito.
3. Crear proyecto mediante clic DOM, consultar `repository.latest()` y comprobar modo, nombre y perfil PH.
4. Examinar `preservationRule=preserve_source` para INTEGRATE/AUDIT, y `status=review` para AUDIT.
5. Comprobar que los botones de exportación ZIP/JSON se habilitan una vez creado.

**Limitaciones:** jsdom no es Chrome/Firefox real; repositorio en memoria, sin recarga real del navegador ni descarga real de archivos; no prueba completa de cancelación/confirmación humana de importación ni de uso sin red. No demuestra TSR independiente, paridad del cartapacio raíz Local_First, N3/N4 ni release autosostenida v5.3.0. Los casos son sintéticos y no incluyen datos humanos reales.

**Deuda de continuación:** browser E2E con Playwright o equivalente bajo CI, persistencia LocalStorage tras recarga, importación con aprobación/rechazo, offline, restauración ZIP integral, cotejo root físico, Gate de release específico. Conservar PR #13 en draft y v5.2.0 estable intacta.
