# Changelog · Framework Genérico v5.2.0

**Fecha:** 2026-10-09  
**Estado:** candidato técnico en rama release/v5.2.0-arquitectura-integrada; NO publicado ni ratificado como release estable.

## Motivo histórico

La arquitectura conceptual integrada, canonizada el 2026-10-08, es posterior al release v5.1.0 documentado el 2026-10-06. El repositorio vivo ya la integra en su README, pero ello no retroactualiza artefactos ni releases históricos.

## Referencia canónica preservada

- `02_ARQUITECTURA_CONCEPTUAL/Arquitecturas_Referencia/2026-10-08_Arquitectura_Conceptual_Integrada_Framework_Canon_v1_0.md`
- `01_FUNDAMENTO_FILOSOFICO/Marcos_Referencia/2026-10-08_Repositorio_Epistemologico_Fundacional_Framework_Canon_v1_0.md`

## Changed

- Nuevos proyectos de la aplicación identificados con frameworkVersion 5.2.0.
- Tipado TypeScript, validador JSON Schema y manifiesto ZIP admiten 5.2.0 sin retirar soporte para 5.0.0 y 5.1.0.
- Metadatos npm de aplicación y lockfile alineados con 5.2.0.
- Se documenta la diferencia entre canon vivo, aplicación, paquete autosostenido y release reproducible.

## Conceptos rectores preservados

- Perfil = lente; Framework = espacio operativo evolutivo; problema situado = centro.
- PH, IT, AT sin supremacía epistemológica de uno sobre otros.
- Caleidoscopio como emergencia posible, no resultado automático ni cuarto perfil.
- Fundamento longitudinal, cuatro áreas fundacionales, patrimonio común, conocimiento especializado, base federada y memoria situada.
- Macroestructura 00–21 + 99 como cuerpo estructural, operativo y memorial.
- Portafolio como continuidad de la experiencia humana.
- Ecología humano·máquina·IA gobernada por agencia y responsabilidad humana.
- Transferencia simétrica reversible y canon revisable.

## Compatibilidad

- Versiones 5.0.0 y 5.1.0 admitidas en la representación de proyectos.
- Schema y package portable siguen en 0.1.0; no se infiere validación empírica de la compatibilidad declarada.
- Releases previos deben permanecer inmutables.

## Gates aún requeridos

1. Revisión de referencias de versión en código, pruebas, despliegue y artefactos de distribución.
2. Typecheck, test, build y auditorías del proyecto.
3. Pruebas de importación/exportación y compatibilidad de proyectos 5.0.0/5.1.0/5.2.0.
4. Verificación de que el archivo fuente y los artefactos distribuidos incorporan el canon 2026-10-08.
5. Validación de checksum SHA-256, tag y assets por CI y revisión humana.
6. Solo al final, actualizar el README general y decidir publicación.

**Regla:** no afirmar que el release v5.2.0 existe hasta que se hayan creado, verificado y aprobado tag, assets y publicación en GitHub.
