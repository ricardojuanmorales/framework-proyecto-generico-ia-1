# Manifiesto de pre-release v5.3.0 · No publicado
**Estado:** PREPARACIÓN. **Rama:** `release/prepare-v5.3.0-gate-20261020`.

## Identidades inmutables
- Release pública vigente al corte: `v5.2.0`.
- Commit de integración v0.5.3: `0d06baaae2304b5b3ecaf72d5083dbf1328059b9`.
- Edición documental: `v0.5.3`, **piloto experimental**. No renombrar retrospectivamente originales ni proclamarlos canónicos universales.
- Próxima release deseada: `v5.3.0`, **no publicada**.

## Matriz de paridad de versiones
| Destino | Versión actual | Acción previa al lanzamiento |
|---|---|---|
| `apps/framework-v5/package.json` | 5.2.0 | cambiar a 5.3.0 en rama release cuando se haya congelado alcance |
| `apps/framework-v5/package-lock.json` | cotejar | regenerar de forma reproducible con Node/npm compatibles |
| Encabezado de UI `App.tsx` | v5.2.0 | versión derivada de metadatos o sincronizar sin hardcode divergente |
| `apps/framework-v5/README.md` | describe v5.2.0 | revisar nombre, capacidades/limitaciones y compatibilidad |
| `README.md` principal | v5.2.0 + accesos piloto v0.5.3 | anunciar nueva versión solo tras prueba y Gate |
| Release workflow | 5.2.0 para v5.2 anterior | crear workflow inmutable de v5.3.0, sin tocar releases pasadas |
| `.release/v5.3.0` y notas | no existen | escribir y activar solo al aprobar publicación |
| Paquetes y checksum | candidato piloto | empaquetar commit exacto y verificar en receptor |
| GitHub Pages | app v5.2.0 | despliegue post-release y smoke público |

## Identidad de producto
El Framework no se reduce a la app. La versión v5.3.0, si llegase a emitirse, debe declarar con precisión qué es novedad documental (PIEF/IEISP, comunidad y contratos de transferencia en investigación) y qué es capacidad técnica probada (tres modos, persistencia/ZIP/JSON). **Ningún texto debe atribuir TSR empírica, N3/N4 o equivalencia situada general que no esté documentada.**

## Gate
AHE del piloto aprobada; **Gate de release aún pendiente**. No fusionar esta rama ni crear marcador de lanzamiento sin nueva decisión documentada.
