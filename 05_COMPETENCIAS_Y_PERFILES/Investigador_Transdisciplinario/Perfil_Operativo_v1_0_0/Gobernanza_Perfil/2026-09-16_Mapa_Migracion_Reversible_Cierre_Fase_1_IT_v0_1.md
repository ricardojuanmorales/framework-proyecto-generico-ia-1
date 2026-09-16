# Mapa de Migración Reversible y Cierre Operativo de Fase 1
## Investigador Transdisciplinario — Perfil Operativo v1.0.0

**Código documental:** `2026-09-16_Mapa_Migracion_Reversible_Cierre_Fase_1_IT_v0_1`  
**Versión:** v0.1  
**Estado:** Operativo autorizado por humano  
**Fecha:** 2026-09-16  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Perfil:** Investigador Transdisciplinario  
**Arquitectura destino:** `Perfil_Operativo_v1_0_0/`  
**Autorización:** instrucción humana explícita de continuar con cierre operativo

---

## 1. Propósito

Ejecutar una migración física controlada y reversible del paquete aprobado de Fase 1 IT hacia su arquitectura operativa estable, sin alterar el contenido sustantivo de los documentos salvo actualizaciones de ruta o estado necesarias para reflejar su residencia canónica.

```text
primero mapa
→ luego copia a destino
→ verificar destino
→ borrar origen
→ actualizar referencias
→ verificar estructura
```

---

## 2. Regla de reversión

Cada movimiento conserva:

- ruta original;
- ruta destino;
- SHA de contenido previo al movimiento;
- nombre documental;
- función arquitectónica.

Si una verificación falla, el documento puede restaurarse a su ruta original usando el contenido identificado por el SHA previo.

---

## 3. Mapa origen → destino

| Documento | SHA previo | Origen | Destino |
|---|---|---|---|
| Alcance Operativo IT v0.1 | `d6ea03061b518175acdf082c3f3315c0ae91a10f` | `Investigador_Transdisciplinario/2026-09-11_Alcance_Operativo_Investigador_Transdisciplinario_v0_1.md` | `Perfil_Operativo_v1_0_0/Alcance_Operativo/2026-09-11_Alcance_Operativo_Investigador_Transdisciplinario_v0_1.md` |
| Fórmula Nuclear IT v0.1 | `2578741c6230ab80c6e8775433c9e1ff366dc57f` | `Investigador_Transdisciplinario/2026-09-11_Formula_Nuclear_Investigador_Transdisciplinario_v0_1.md` | `Perfil_Operativo_v1_0_0/Formula_Nuclear/2026-09-11_Formula_Nuclear_Investigador_Transdisciplinario_v0_1.md` |
| Mapa Rector IT v0.1 | `979b23da13502daa2a86da1d66c1c0fb3b6e691e` | `Investigador_Transdisciplinario/2026-09-11_Mapa_Rector_Investigador_Transdisciplinario_v0_1.md` | `Perfil_Operativo_v1_0_0/Mapa_Rector/2026-09-11_Mapa_Rector_Investigador_Transdisciplinario_v0_1.md` |
| Matriz de Competencias IT v0.1 | `e9e4077a0ac57e0a184eca0804c6ff2049667168` | `Investigador_Transdisciplinario/2026-09-11_Matriz_Competencias_Investigador_Transdisciplinario_v0_1.md` | `Perfil_Operativo_v1_0_0/Competencias/2026-09-11_Matriz_Competencias_Investigador_Transdisciplinario_v0_1.md` |
| Seguridad, Ética y Responsabilidad Epistemológica IT v0.1 | `1d8fb486ad197ab92efb2a047f7f0b7f3811c22a` | `Investigador_Transdisciplinario/2026-09-11_Matriz_Seguridad_Etica_Responsabilidad_Epistemologica_IT_v0_1.md` | `Perfil_Operativo_v1_0_0/Gobernanza_Perfil/2026-09-11_Matriz_Seguridad_Etica_Responsabilidad_Epistemologica_IT_v0_1.md` |
| Matriz de Evidencia y Métricas IT v0.1 | `faa45e477ad153ad353ecd4ff06e649d327c4ec3` | `Investigador_Transdisciplinario/2026-09-12_Matriz_Evidencia_Metricas_Investigador_Transdisciplinario_v0_1.md` | `Perfil_Operativo_v1_0_0/Metricas/2026-09-12_Matriz_Evidencia_Metricas_Investigador_Transdisciplinario_v0_1.md` |
| Unidades Nucleares IT v0.1 | `903f39c3a7008ab3799fd96891cbd9ef2ac3c494` | `Investigador_Transdisciplinario/2026-09-16_Unidades_Nucleares_Investigador_Transdisciplinario_v0_1.md` | `Perfil_Operativo_v1_0_0/Unidades_Nucleares/2026-09-16_Unidades_Nucleares_Investigador_Transdisciplinario_v0_1.md` |
| Integración, Gobernanza y Cierre Fase 1 IT v0.1 | `278d9a11dca569d90a5f0b58c18c9cd2212667fc` | `Investigador_Transdisciplinario/2026-09-16_Integracion_Gobernanza_Cierre_Fase_1_Investigador_Transdisciplinario_v0_1.md` | `Perfil_Operativo_v1_0_0/Gobernanza_Perfil/2026-09-16_Integracion_Gobernanza_Cierre_Fase_1_Investigador_Transdisciplinario_v0_1.md` |

---

## 4. Funciones no materializadas todavía

No se crearán carpetas vacías para:

```text
Bases_Conocimiento/
Enlaces_Espejo/
Transferencia_Simetrica/
```

Se materializarán únicamente cuando exista un objeto canónico independiente que justifique su residencia, conforme a la Gramática Arquitectónica Común aprobada.

---

## 5. Verificaciones obligatorias

- todos los destinos existen y son legibles;
- ningún documento sustantivo se pierde;
- las rutas origen quedan vaciadas solo después de verificar destino;
- Tree, tabla de ubicación, referencias lógicas, changelog y bitácora se actualizan o quedan explícitamente registrados como deuda de cierre;
- no se generan espejos físicos editables;
- la migración puede reconstruirse a partir de este mapa y del historial Git.

---

## 6. Estado

**Mapa creado antes de la migración física.**  
**Migración física:** autorizada y en ejecución.  
**Cierre operativo:** pendiente de verificación final.
