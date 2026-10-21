# Matriz TSR T1–T8 · Lectura pública multicaso, v0.5.3
**Corte de evidencia:** 2026-10-20. **Estado:** contraste documental inicial, NO validación TSR externa ni cierre de deuda. **Gate humano:** G-FW53-EXEC-01.

## Fuente, alcance y estatutos de evidencia
Se revisaron directamente vía conector GitHub el README y el inventario raíz de los siguientes cinco repositorios públicos, usando la rama `main` de cada uno:
1. [Framework maestro](https://github.com/ricardojuanmorales/framework-proyecto-generico-ia-1): README blob `f5defe3b3a9f8fdc6294f7f55d9785914e227548`; arquitectura base y release pública v5.2.0.
2. [EME](https://github.com/ricardojuanmorales/estudio-metodologico-estadistico-1): README blob `81f02a69879f20639954d9dceaf184d8b04f9a44`; START y tres lentes, etapa inicial.
3. [IA en Acción](https://github.com/ricardojuanmorales/educacion-universitaria-iag-1): README blob `fe6ab29b1d6d73bd4c5f2d9fddae836611cb0f2e`; trabajo docente situado, integración documental y reserva de evidencia humana.
4. [RIB-EG-IA](https://github.com/ricardojuanmorales/repositorio-institucional-eg-ia-1): README blob `ad09471aebca82de760dd14b051d77518cfc0482`; integración técnica documentada, app bibliográfica no desplegada.
5. [EugenIA/BIVA](https://github.com/ricardojuanmorales/eugenia-lab-aplicacion-agentica-1): README blob `aea4a315a1293c2ab66960f8b69696837e21e1b0`; montaje paralelo, motor apagado, snapshot parcial.

**Niveles de evidencia:** `D` afirmación documentada en README; `V` observación técnica directa del inventario público; `P` propuesta contractual; `NV` no verificado; `NA` no aplicable. D/V no equivalen a validación empírica por pares.

## Identidades, estructura y estado
| Caso | Modo documentado | Inventario raíz observado | Madurez y límites |
|---|---|---|---|
| EME | START completado [D] | 00–21 y 99 [V] | Marco M1 v1.0.0 y Marco Mundi; evaluación N1–N4 pendiente [D] |
| IA en Acción | INTEGRATE autorizado [D] | 00–21 + 99, **extras 00_CONTROL, 18_CONTINUIDAD** [V] | Entrevistas y archivos sensibles no publicables; comparación app/entrevista pendiente [D] |
| RIB-EG-IA | INTEGRATE técnico completado según expediente [D] | 00–21+99, **extra 22_INTEGRATE_FRAMEWORK_V5_2** [V] | N3 y N4 declarados, no certificados; 8/8 etapas y 41/41 pruebas **informadas en expediente**, no reproducidas en este cotejo [D] |
| EugenIA/BIVA | INTEGRATE paralelo, no ejecutado [D] | `biva-source-snapshot`, `integrate-v5.2`, `18_DOCUMENTACION_ACTIVA` [V] | `enabled=false`, `dry_run=true`, `production_write=false`; snapshot parcial y N3/N4 pendientes [D] |

No suponer que dos repositorios son copias completas por compartir nombres de directorios. **RIB-EG-IA `22_INTEGRATE` y las extensiones IA en Acción son divergencias justificables a evaluar, no violaciones automáticas.**

## TSR T1–T8: estados de evidencia por caso
| Criterio | EME | IA en Acción | RIB-EG-IA | BIVA | Qué falta para aprobar |
|---|---|---|---|---|---|
| T1 Identidad | D/V | D/V | D/V | D/V, fuente parcial | Receptor reconstruye identidad sin mezclar objeto, repo y perfil |
| T2 Procedencia | D | D | D, evidencia origen bibliográfico | D, snapshot parcial | Hash e inventario fuente↔destino y fecha de corte por objeto |
| T3 Autoridad humana | D | D, privacidad | D, gate particular | D, motor no activado | Decisiones firmadas/reproducibles por cada actor y receptor |
| T4 Estado epistemológico | D, M1 | D, pedagogía y entrevistas | D, N3/N4 declarados | D, N3/N4 metas | Distinguir observado, declarado, inferido, propuesto, no verificado |
| T5 Deuda y riesgo | D, pendientes | D, riesgo privacidad | D, app no desplegada | D, activación pendiente | Registro federado conciliado, no duplicado |
| T6 Relaciones | P | P | P | P | Enlaces espejo bidireccionales con versión y permisos |
| T7 Continuidad | D | D | D | D | Reconstrucción por receptor y contradevolución con diferencias |
| T8 Autonomía | NV | NV | NV | D, motor desactivado | Restauración autónoma y límites de terceros verificables |

**Interpretación:** esta matriz identifica cuatro expedientes elegibles para un **ensayo futuro** de TSR. No asigna un porcentaje de TSR ni proclama casos aprobados. El éxito del ZIP técnico del maestro en CI no prueba la TSR semántica entre proyectos.

## Contrato mínimo para el ensayo independiente
1. Congelar en cada caso ID de proyecto, HEAD del repositorio, rutas/corte Local_First autorizado y estado de madurez, sin divulgar información sensible.
2. Exportar un objeto no sensible con fuente, método, evidencia, decisiones, límites, versiones y deudas; registrar hashes antes de enviar.
3. Entregarlo a receptor autónomo diferente, que reconstruya T1–T8 **sin consultar al productor** y registre sus inferencias y huecos.
4. Retornar una contra-ficha al origen; comparar diferencias de significado y requisitos de autoridad. Reconciliar exclusivamente con aprobación humana.
5. Registrar PASS/FAIL/INCONCLUSO por invariante y caso, con evidencia, juez humano y deuda residual. La estructura fractal F0–F4 no debe confundirse con N1–N4.

**Restricciones de gobernanza:** no incorporar NotebookLM ni asistente cuantitativo ajeno, como fue decidido; el nombre descriptivo del proyecto EME no autoriza usar ese asistente excluido como instrumento. No publicar entrevistas, participantes, credenciales ni copia BIVA completa sin licencias. No alterar repositorios satélites desde este Gate, limitado al maestro.

## Resultado
**Comparación pública estructural y epistemológica inicial: completada.** **TSR multi-actor: NO VALIDADA.** Cotejo del cartapacio físico bajo custodia humana: **pendiente**. El PR #13 puede conservar esta evidencia en rama experimental sin autorizar merge ni release v5.3.0.
