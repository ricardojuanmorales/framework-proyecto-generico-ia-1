# Plan de Archivo Histórico
## Framework Genérico V4.0.0 y V4.1.0-borrador — v0.1

**Archivo:** `2026-05-04_Plan_Archivo_Historico_Framework_Generico_V4_0_0_y_V4_1_0_Borrador_v0-1.md`  
**Fecha:** 2026-05-04  
**Versión:** v0.1  
**Estado:** Plan inicial de archivo histórico  
**Marco madre:** Framework Genérico V4.0.0  
**Rama activa:** Framework Genérico V4.1.0-borrador  
**Nivel recomendado actual:** N3 — Avanzado  
**Tipo de documento:** Preservación, trazabilidad, cierre, memoria institucional y continuidad  
**Decisiones relacionadas:** D-A28, D-A29, D-A30, D-A31, D-A32, D-A33, D-A34, D-A35  

---

## 0. Propósito

Este plan define cómo preservar el cierre formal de **Framework Genérico V4.0.0** y cómo archivar ordenadamente los documentos generados para la apertura de **Framework Genérico V4.1.0-borrador**.

Su función es asegurar que:

```text
V4.0.0 quede cerrada sin ser sobrescrita.
V4.1.0-borrador quede documentada como evolución controlada.
Las decisiones queden trazables.
Los documentos tengan versión, estado y ubicación.
La Wiki humana pueda sincronizarse sin perder fuente oficial.
Los futuros ciclos puedan reactivarse sin depender de memoria conversacional.
```

El archivo histórico no es cementerio. Es semillero con etiquetas.

---

## 1. Principio rector

```text
Nada se archiva sin versión, estado, propósito, decisión relacionada y ruta de continuidad.
```

La preservación debe cumplir cinco criterios:

```text
trazabilidad
integridad
legibilidad humana
legibilidad técnica
reactivación futura
```

---

## 2. Alcance del archivo

Este plan cubre tres bloques documentales:

```text
Bloque A — Cierre V4.0.0
Bloque B — Capa de Perfiles Transversales y Caleidoscopio
Bloque C — Apertura y estabilización inicial V4.1.0-borrador
```

No cubre todavía:

```text
release estable V4.1.0
automatización formal
auditoría institucional
publicación pública completa
dashboard de seguimiento
```

Esos elementos corresponden a una fase posterior, probablemente N4.

---

## 3. Estructura sugerida de archivo

Ubicación base:

```text
99_ARCHIVO_HISTORICO/
```

Subestructura sugerida:

```text
99_ARCHIVO_HISTORICO/
├── Releases/
│   ├── Framework_Generico_V4_0_0_Cierre/
│   └── Framework_Generico_V4_1_0_Borrador/
├── Versiones_Cerradas/
│   └── V4_0_0/
├── Ciclos_Completados/
│   └── 2026-05-04_Perfiles_Transversales_Caleidoscopio/
├── Exportaciones_Finales/
│   ├── MD/
│   ├── JSON/
│   └── ZIP/
└── Wiki_Archivada/
```

Nota: estas son subcarpetas dentro del archivo histórico existente. No constituyen macrocarpetas nuevas.

---

## 4. Bloque A — Cierre V4.0.0

### 4.1 Propósito

Preservar V4.0.0 como base estabilizada y evitar que la apertura V4.1.0-borrador sobrescriba su memoria.

### 4.2 Documentos a archivar

| ID | Documento | Estado | Destino |
|---|---|---|---|
| A-01 | `reporte_situacion_actual_framework_generico_v_4.md` | Base diagnóstica cerrada | `Versiones_Cerradas/V4_0_0/` |
| A-02 | `2026-05-04_Reporte_Cierre_Situacion_Actual_Framework_Generico_V4_para_Archivo_Historico_v1-0.md` | Cierre formal | `Versiones_Cerradas/V4_0_0/` |
| A-03 | Changelog V4.0.0 relacionado | Gobernanza | `Versiones_Cerradas/V4_0_0/` |
| A-04 | Registro de decisiones relacionado | Gobernanza | `Versiones_Cerradas/V4_0_0/` |
| A-05 | Primer de continuidad anterior | Reactivación histórica | `Versiones_Cerradas/V4_0_0/` |

### 4.3 Regla de protección

```text
V4.0.0 no se edita dentro del archivo histórico.
Si se requiere corrección, se crea fe de errata o nueva versión documentada.
```

---

## 5. Bloque B — Perfiles Transversales y Caleidoscopio

### 5.1 Propósito

Preservar el ciclo que formalizó:

```text
Programador Humanista v0.2
Investigador Transdisciplinario v0.1
Artista Transdisciplinario v0.1
Caleidoscopio v0.1
```

### 5.2 Documentos base a archivar

| ID | Documento | Estado | Destino |
|---|---|---|---|
| B-01 | `2026-05-04_Perfil_Final_Programador_Humanista_Framework_Generico_V4_v0-2.md` | Cerrado funcional | `Ciclos_Completados/2026-05-04_Perfiles_Transversales_Caleidoscopio/` |
| B-02 | `2026-05-04_Perfil_Investigador_Transdisciplinario_Framework_Generico_V4_v0-1.md` | Formalizado preliminar | mismo destino |
| B-03 | `2026-05-04_Perfil_Artista_Transdisciplinario_Framework_Generico_V4_v0-1.md` | Formalizado preliminar | mismo destino |
| B-04 | `2026-05-04_Marco_Caleidoscopio_Framework_Generico_V4_v0-1.md` | Formalizado preliminar | mismo destino |
| B-05 | `2026-05-04_Compendio_Sesion_Perfiles_Transversales_Framework_Generico_V4_v0-1.md` | Compendio de cierre | mismo destino |
| B-06 | `2026-05-04_Primer_Continuidad_Framework_Generico_V4_Perfiles_Transversales_v0-1.md` | Primer histórico | mismo destino |

### 5.3 Documentos derivados a archivar

| ID | Documento | Estado | Destino |
|---|---|---|---|
| B-D01 | `2026-05-04_Paquete_Consolidado_Perfiles_Transversales_Caleidoscopio_Framework_Generico_V4_v0-1.md` | Producido | `Ciclos_Completados/.../Derivados/` |
| B-D02 | `2026-05-04_Matriz_Comparativa_Perfiles_Transversales_Framework_Generico_V4_v0-1.md` | Producido | `Ciclos_Completados/.../Derivados/` |
| B-D03 | `2026-05-04_Matriz_Caleidoscopio_C1_C7_Ejemplos_Framework_Generico_V4_v0-1.md` | Producido | `Ciclos_Completados/.../Derivados/` |
| B-D04 | `2026-05-04_Plantillas_Base_Agents_Skills_Workflows_Checks_WikiSync_Framework_Generico_V4_v0-1.md` | Producido | `Ciclos_Completados/.../Derivados/` |

### 5.4 Regla de protección

```text
El Programador Humanista v0.2 se conserva como cerrado funcional.
Investigador, Artista y Caleidoscopio v0.1 se conservan como formalizados preliminares.
```

---

## 6. Bloque C — V4.1.0-borrador

### 6.1 Propósito

Preservar la apertura controlada de V4.1.0-borrador y sus documentos de estabilización inicial.

### 6.2 Documentos a archivar

| ID | Documento | Estado | Destino |
|---|---|---|---|
| C-01 | `2026-05-04_Borrador_Framework_Generico_V4_1_0_Apertura_v0-1.md` | Apertura formal | `Releases/Framework_Generico_V4_1_0_Borrador/` |
| C-02 | `2026-05-04_README_Framework_Generico_V4_1_0_Borrador_v0-1.md` | Entrada principal | mismo destino |
| C-03 | `2026-05-04_Indice_Maestro_Documentos_Framework_Generico_V4_1_0_Borrador_v0-1.md` | Índice maestro | mismo destino |
| C-04 | `2026-05-04_manifest_framework_v4_1_0_borrador_v0-1.json` | Manifest técnico | mismo destino |
| C-05 | `2026-05-04_Mapa_Macro_Meso_Micro_Framework_Generico_V4_1_0_Borrador_v0-1.md` | Mapa estructural | mismo destino |
| C-06 | `2026-05-04_Matriz_N1_N4_Framework_Generico_V4_1_0_Borrador_v0-1.md` | Matriz niveles | mismo destino |
| C-07 | `2026-05-04_Matriz_Gates_Framework_Generico_V4_1_0_Borrador_v0-1.md` | Matriz Gates | mismo destino |
| C-08 | `2026-05-04_CHECKS_Framework_Generico_V4_1_0_Borrador_v0-1.md` | Checks operativos | mismo destino |
| C-09 | `2026-05-04_WIKI_SYNC_Framework_Generico_V4_1_0_Borrador_v0-1.md` | Wiki Sync | mismo destino |
| C-10 | `2026-05-04_Plan_Archivo_Historico_Framework_Generico_V4_0_0_y_V4_1_0_Borrador_v0-1.md` | Plan de archivo | mismo destino |

---

## 7. Documentos de gobernanza a archivar

| ID | Documento | Estado | Destino |
|---|---|---|---|
| G-01 | `2026-05-04_Changelog_Actualizacion_Perfiles_Transversales_y_Apertura_V4_1_0_Framework_Generico_V4_v0-2.md` | Changelog actualizado | `Releases/Framework_Generico_V4_1_0_Borrador/Gobernanza/` |
| G-02 | `2026-05-04_Registro_Decisiones_Actualizacion_Perfiles_Transversales_y_Apertura_V4_1_0_Framework_Generico_V4_v0-2.md` | Decisiones D-A24 a D-A28 | mismo destino |
| G-03 | `2026-05-04_Primer_Continuidad_Framework_Generico_V4_1_0_Borrador_v0-1.md` | Primer V4.1.0 | mismo destino |
| G-04 | Futuro registro D-A29 a D-A35 | Pendiente | mismo destino |
| G-05 | Futuro changelog D-A29 a D-A35 | Pendiente | mismo destino |

---

## 8. Metadatos mínimos de archivo

Cada documento archivado debe tener:

```text
Archivo:
Fecha:
Versión:
Estado:
Tipo de documento:
Marco / rama:
Nivel:
Decisiones relacionadas:
Documento fuente si aplica:
Destino de archivo:
Estado de modificación: editable / protegido / histórico
Próxima acción:
```

---

## 9. Manifest de archivo

Cada paquete de archivo debe incluir un manifest:

```text
archive_manifest.json
```

Campos mínimos sugeridos:

```json
{
  "archive_name": "",
  "archive_date": "",
  "framework_version": "",
  "branch": "",
  "status": "",
  "documents": [],
  "decisions": [],
  "profiles": [],
  "checksums_optional": [],
  "created_by": "",
  "next_action": ""
}
```

Nota: los checksums son opcionales en esta fase. Pueden añadirse en N4 o en auditoría institucional.

---

## 10. Criterios de preservación

### 10.1 Integridad

- [ ] El archivo contiene documentos completos.
- [ ] Cada documento tiene versión y estado.
- [ ] No se mezclan borradores con documentos cerrados sin etiqueta.
- [ ] El manifest corresponde al contenido real.
- [ ] Las decisiones relacionadas están incluidas o referenciadas.

### 10.2 Legibilidad humana

- [ ] Hay README o índice.
- [ ] Hay explicación del paquete.
- [ ] Hay ruta de reactivación.
- [ ] Los nombres de archivo son comprensibles.
- [ ] El estado de cada documento es claro.

### 10.3 Legibilidad técnica

- [ ] Hay manifest JSON.
- [ ] Los nombres son consistentes.
- [ ] Los documentos están en formato abierto cuando sea posible.
- [ ] Las rutas lógicas están documentadas.
- [ ] La relación con wiki_sync está indicada.

### 10.4 Continuidad

- [ ] Hay primer de continuidad.
- [ ] Hay próximo paso.
- [ ] Hay riesgos pendientes.
- [ ] Hay documentos que deben abrirse primero.
- [ ] Hay decisión sobre si el ciclo queda cerrado o activo.

---

## 11. Política de modificación de archivo

| Estado | Modificación permitida | Procedimiento |
|---|---|---|
| Histórico cerrado | No | Crear fe de errata o nueva versión |
| Release borrador | Sí, con versión nueva | Registrar changelog |
| Gobernanza | Sí, con decisión | Actualizar registro y changelog |
| Wiki archivada | No modificar directamente | Crear nueva página o versión |
| Manifest | Sí, si cambia paquete | Incrementar versión |
| Primer | Sí, si cambia continuidad | Crear versión nueva |

---

## 12. Fe de errata

Si se detecta un error en documento archivado:

```text
1. No modificar el documento histórico directamente.
2. Crear documento de fe de errata.
3. Indicar documento afectado.
4. Indicar error.
5. Indicar corrección.
6. Indicar impacto.
7. Indicar si requiere nueva versión.
8. Registrar en changelog.
```

Plantilla:

```text
# Fe de Errata

Documento afectado:
Versión:
Fecha de detección:
Error:
Corrección:
Impacto:
Riesgo:
Nueva versión requerida: sí / no
Decisión relacionada:
Responsable:
```

---

## 13. Paquetes de archivo sugeridos

### 13.1 Paquete Cierre V4.0.0

```text
Framework_Generico_V4_0_0_Cierre_Archivo_Historico/
├── README_Archivo.md
├── reporte_situacion_actual_framework_generico_v_4.md
├── 2026-05-04_Reporte_Cierre_Situacion_Actual_Framework_Generico_V4_para_Archivo_Historico_v1-0.md
├── Changelog/
├── Decisiones/
├── Primer/
└── archive_manifest.json
```

### 13.2 Paquete Perfiles Transversales y Caleidoscopio

```text
2026-05-04_Perfiles_Transversales_Caleidoscopio_Archivo/
├── README_Archivo.md
├── 01_Perfiles_Base/
├── 02_Caleidoscopio/
├── 03_Derivados/
├── 04_Gobernanza/
├── 05_Primer/
└── archive_manifest.json
```

### 13.3 Paquete V4.1.0-borrador

```text
Framework_Generico_V4_1_0_Borrador_Archivo/
├── README_Archivo.md
├── 00_CONTROL_MAESTRO/
├── 02_ARQUITECTURA_CONCEPTUAL/
├── 09_IA_AGENTES_Y_COPILOTOS/
├── 18_DOCUMENTACION_ACTIVA/
├── 21_WIKI_DOCUMENTACION_HUMANA/
├── 99_ARCHIVO_HISTORICO/
└── archive_manifest.json
```

---

## 14. Relación con WIKI_SYNC

Todo archivo debe indicar si hay páginas wiki relacionadas.

Ejemplo:

```text
Documento archivado:
Página Wiki vigente:
Página Wiki archivada:
Estado WIKI_SYNC:
Fecha última sincronización:
```

Regla:

```text
Si se archiva un documento que tiene guía humana, revisar si la guía debe actualizarse, conservarse o marcarse obsoleta.
```

---

## 15. Relación con CHECKS

Antes de archivar, aplicar:

```text
CHECKS archivo
CHECKS documentación activa
CHECKS wiki_sync
CHECKS no proliferación documental
CHECKS paso a estable si aplica
```

Resultado permitido:

```text
Archivo aprobado
Archivo aprobado con pendientes
Archivo detenido
Archivo requiere validación humana
```

---

## 16. Relación con versiones futuras

V4.1.0-borrador no debe borrar V4.0.0.

La ruta correcta es:

```text
V4.0.0 cerrada y archivada
→ V4.1.0-borrador documentada
→ V4.1.0-borrador evaluada
→ V4.1.0-estable si cumple criterios
```

No se debe declarar V4.1.0 estable hasta completar:

```text
README estable
Índice validado
Manifest validado
Mapa macro-meso-micro validado
Matriz N1-N4 validada
Matriz Gates validada
CHECKS validado
WIKI_SYNC validado
Plan de archivo validado
Protocolo de paso a estable
Changelog actualizado
Registro de decisiones actualizado
Primer final
Validación humana explícita
```

---

## 17. Checklist de archivo rápido

- [ ] ¿El ciclo está cerrado o es release borrador?
- [ ] ¿Existe README de archivo?
- [ ] ¿Existe manifest de archivo?
- [ ] ¿Todos los documentos tienen versión?
- [ ] ¿Todos los documentos tienen estado?
- [ ] ¿Las decisiones están incluidas?
- [ ] ¿El changelog está incluido?
- [ ] ¿El primer está incluido?
- [ ] ¿La wiki relacionada está identificada?
- [ ] ¿Los documentos cerrados están protegidos?
- [ ] ¿Las correcciones futuras usarán fe de errata?
- [ ] ¿Hay próxima acción clara?

---

## 18. Decisión sugerida

```text
D-A36 — Crear el Plan de Archivo Histórico del Framework Genérico V4.0.0 y V4.1.0-borrador v0.1 para preservar la versión V4.0.0, la capa de Perfiles Transversales y Caleidoscopio, la apertura V4.1.0-borrador, los documentos de gobernanza, manifest, matrices, checks, wiki_sync y futuros paquetes de release.
```

**Estado sugerido:** Aceptada para continuidad documental.  
**Tipo de cambio:** Ajuste menor de gobernanza documental y archivo.  
**Justificación:** Protege trazabilidad, evita sobrescritura y permite reactivación futura.  
**Impacto:** Alto para memoria institucional, continuidad, auditoría y transferencia.  
**Riesgo:** Bajo si se mantiene como plan de archivo y no como reestructuración.  
**Documentos afectados:** README, índice maestro, manifest JSON, WIKI_SYNC, CHECKS, changelog, registro de decisiones, primer.  
**Versión afectada:** V4.1.0-borrador v0.1.  
**Recomendación:** Registrar D-A36 en la próxima actualización del Registro de Decisiones.

---

## 19. Próximo producto recomendado

Crear:

```text
2026-05-04_Protocolo_Paso_Borrador_a_Estable_Framework_Generico_V4_1_0_v0-1.md
```

### Propósito del protocolo

Definir las condiciones mínimas para que V4.1.0-borrador pueda convertirse en V4.1.0-estable:

```text
criterios de madurez
validación humana
documentos obligatorios
checks obligatorios
wiki_sync completo
archivo histórico
decisiones finales
riesgos aceptados
condiciones de release
```

El archivo conserva la memoria.  
El protocolo decide cuándo el borrador puede ponerse de pie con nombre estable.

---

## 20. Cierre

Este plan asegura que V4.0.0 no desaparezca bajo la espuma de la evolución y que V4.1.0-borrador no nazca sin registro de cuna. Archivar no es cerrar la puerta; es dejar una llave, un mapa y una lámpara.

**Estado:** Listo para validación.  
**Siguiente acción:** Crear Protocolo de Paso de Borrador a Estable V4.1.0 v0.1.
