# Framework Genérico v5.3.0 · Notas de publicación
**Estado:** Gate humano G-REL53 aprobado explícitamente el 2026-10-20. Publicación estable condicionada a controles de CI, integridad y artefactos del commit definitivo.

## Alcance
- Integración de los informes IEISP y PIEF edición documental **v0.5.3**, guías y Wiki_Humana con autonomía y genealogía preservadas.
- README con cuatro colaboraciones en prototipo experimental, sujetos a evidencia particular.
- Aplicación con flujos START, INTEGRATE y AUDIT, conservación de procedencia, portafolio, decisiones humanas, transferencia documentada y exportación/importación JSON/ZIP.
- Compatibilidad retroactiva de paquetes de proyectos con versiones 5.0.0, 5.1.0 y 5.2.0, preservando schema 0.1.0.

## Verificación de la candidata
CI del commit candidato previo al registro: Node 22 y 24, Chromium E2E con datos sintéticos y paquete independiente recuperado en segundo ejecutor, con solicitudes externas bloqueadas en el navegador. Ver expediente técnico `19_IMPLEMENTACION_Y_DESPLIEGUE/2026-10-20_RESULTADO_PRE_RELEASE_V5_3_0_RC.md`.

## Condiciones, límites y deuda
- TSR T1–T8 semántica interproyectos no validada. N3/N4 no certificados transversalmente.
- Cotejo de material no versionado/ignorado por Git en custodia del usuario sigue pendiente.
- Los datos de alumnado, entrevistas, testimonios y fuentes con licencia restringida no forman parte de la release.
- La app local-first no es un agente autónomo de investigación.
- Ejecutar verificaciones sobre commit exacto de lanzamiento, comprobar SHA-256 y validación de la página pública después de publicación.

**Gobernanza:** Gate G-REL53 aprobado y distinto de la AHE experimental G-FW53-EXEC-01. Este documento acompaña la release únicamente si el workflow de publicación concluye con éxito.
