# Tabla de Ubicación Documental — Fase 2 PH-IT-AT v0.2

**Código documental:** 2026-06-08_Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_2  
**ID documento:** F2-BCC-06-008  
**Versión:** v0.2  
**Fecha:** 2026-06-08  
**Estado:** Validada y actualizada para Ronda 2A / Bloque 1  
**Tipo de documento:** tabla de ubicación documental específica de Fase 2  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase:** Fase 2  
**Ronda:** Ronda 2A  
**Perfil principal:** repositorio  
**Perfiles relacionados:** PH, IT, AT, Caleidoscopio  
**Nivel usuario:** todos  
**Nivel proyecto:** todos  
**Nivel producto:** todos  
**Modalidad:** repositorio, común, caleidoscópica  
**Reusabilidad:** común, metadatos, referencia_lógica, transferencia_reversible, seguridad, documentación_humana, invocación_documental  
**Ruta canónica recomendada:** `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/`  
**Documento reemplazado:** `2026-06-05_Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_1.md`  
**Estado de versión anterior:** reemplazada_por_v0_2  
**Referenciado desde:**  
- `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/`  
- `00_CONTROL_MAESTRO/Indices_Maestros/`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
- `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/`  
- `18_DOCUMENTACION_ACTIVA/Changelog/`  
**Tipo de espejo:** logico_tipo_1  
**Copia física:** false  
**Estado de transferencia:** reversible_activa  
**Seguridad:** requiere_revision  
**Datos y privacidad:** no_contiene_datos  
**Requiere revisión humana:** sí  
**Documentos relacionados:**  
- `2026-06-08_Tree_Repositorio_Framework_Generico_V4_1_1_v0_2.md`  
- `2026-06-08_Tabla_Ubicacion_Documental_Framework_Generico_V4_1_1_v0_2.md`  
- `2026-06-08_Protocolo_Pago_Deuda_Estructural_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_2.md`  
- `2026-06-08_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_4.md`  
- `2026-06-08_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_3.md`  
**Deuda de referencias lógicas:** registrar_enlaces_espejo_ronda_2A, anotar_bitacora_bloque_1, incluir_changelog_bloque_1  
**Próxima acción:** actualizar Enlaces_Espejo, Registro de Deuda, glosario/taxonomía y catálogos en bloques posteriores  

---

## 0. Propósito

Esta versión v0.2 actualiza la tabla específica de Fase 2 PH-IT-AT para integrar la **Ronda 2A** y el **Bloque 0 / Bloque 1** del pago de deuda estructural.

Su función es servir como instrumento de control para:

```text
1. ubicar cada archivo nuevo en su ruta canónica;
2. autorizar sub-cartapacios estructurales nuevos cuando sean necesarios;
3. diferenciar archivo canónico, referencia lógica y documento invocable;
4. registrar modos de invocación;
5. visibilizar deuda saldada y deuda diferida legítima;
6. preparar actualización de Enlaces_Espejo, glosario, taxonomía y catálogos;
7. sostener transferencia simétrica PH-IT-AT;
8. mantener Caleidoscopio como propiedad emergente, no como agente autónomo.
```

---

## 1. Principio rector actualizado

```text
La tabla ubica.
El índice orienta.
El registro de cartapacios controla.
La referencia lógica invoca.
La taxonomía clasifica.
La categoría etiqueta.
La bitácora recuerda.
El changelog confirma.
La rúbrica evalúa.
El mapa de seguridad protege.
El retorno sistémico aprende.
```

---

## 2. Estados de ubicación

| Estado | Significado |
|---|---|
| `ruta_confirmada` | Ruta recomendada alineada con mapa estructural vigente. |
| `subcartapacio_confirmado` | El documento debe ir en sub-cartapacio específico. |
| `referencia_logica_requerida` | Debe registrarse en Enlaces_Espejo u otro punto de invocación. |
| `actualizar_indice` | Debe incluirse en Índice Maestro activo. |
| `bitacora_pendiente` | Debe anotarse en documentación activa. |
| `changelog_pendiente` | Debe registrarse en changelog. |
| `version_reemplazada` | Existe versión más reciente activa. |
| `deuda_diferida_legitima` | Pendiente no bloqueante que depende de trabajo futuro real. |
| `no_colocar` | No debe colocarse en esa ruta o versión. |

---

## 3. Actualización estructural de sub-cartapacios Ronda 2A

| Sub-cartapacio | Uso | Acción |
| --- | --- | --- |
| `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/Invocables/` | Documentos invocables comunes, mapa de familias y plantillas activables. | Crear en Bloque 1 y registrar en Tabla Fase 2, Índice Maestro y Registro de Cartapacios. |
| `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/Invocables/Formatos/` | Formatos especializados para invocables maestros y artefactos rectores. | Sub-cartapacio hijo de Invocables; no colocar documentos sueltos fuera de su familia funcional. |


---

## 4. Productos nuevos o actualizados de Bloque 0 y Ronda 2A

| ID | Documento | Versión | Ruta canónica | Función | Tipo de invocabilidad | Modo de invocación |
| --- | --- | --- | --- | --- | --- | --- |
| F2-R2A-00-001 | `2026-06-08_Tree_Repositorio_Framework_Generico_V4_1_1_v0_2.md` | v0.2 | `00_CONTROL_MAESTRO/Mapas_Repositorio/` | Tree / árbol del repositorio | documento_rector_invocable | consulta, validacion, trazabilidad |
| F2-R2A-00-002 | `2026-06-08_Tabla_Ubicacion_Documental_Framework_Generico_V4_1_1_v0_2.md` | v0.2 | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` | Tabla general de ubicación documental | documento_rector_invocable | consulta, clasificacion, trazabilidad |
| F2-R2A-00-003 | `2026-06-08_Protocolo_Pago_Deuda_Estructural_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_2.md` | v0.2 | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | Protocolo rector de pago de deuda estructural | documento_rector_invocable | activacion, gobernanza, cierre |
| F2-R2A-00-004 | `2026-06-08_Informe_Validacion_Bloque_0_Control_Estructural_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_1.md` | v0.1 | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` | Informe/bitácora de validación del Bloque 0 | documento_memoria_invocable | consulta, cierre, trazabilidad |
| F2-R2A-01-001 | `2026-06-06_Paquete_Conocimiento_Comun_Minimo_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Semilla histórica del conocimiento común mínimo | documento_rector_invocable | consulta, activacion, transferencia |
| F2-R2A-01-002 | `2026-06-07_Convencion_Base_Conocimiento_Comun_PH_IT_AT_Caleidoscopio_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Convención de arquitectura viva de conocimiento común | documento_rector_invocable | consulta, gobernanza, transferencia |
| F2-R2A-01-003 | `2026-06-07_Mapa_Modular_Base_Conocimiento_Comun_PH_IT_AT_Caleidoscopio_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Mapa modular del conocimiento común | documento_rector_invocable | consulta, clasificacion, transferencia |
| F2-R2A-01-004 | `2026-06-07_Base_Conocimiento_Comun_PH_IT_AT_Caleidoscopio_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Base común robusta PH-IT-AT-Caleidoscopio | documento_rector_invocable | consulta, activacion, transferencia |
| F2-R2A-02-001 | `2026-06-07_Plantilla_Documento_Invocable_Artefacto_Funcional_PH_IT_AT_Caleidoscopio_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/Invocables/` | Plantilla general de documento invocable como artefacto funcional | invocable_formal | activacion, validacion, trazabilidad |
| F2-R2A-02-002 | `2026-06-07_Mapa_Familias_Documentos_Invocables_Base_Comun_PH_IT_AT_Caleidoscopio_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/Invocables/` | Mapa de familias de documentos invocables | documento_rector_invocable | consulta, clasificacion, transferencia |
| F2-R2A-02-003 | `2026-06-07_Formato_Estandarizado_Invocable_Maestro_Familia_PH_IT_AT_Caleidoscopio_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/Invocables/Formatos/` | Formato de invocable maestro de familia | invocable_formal | activacion, gobernanza, validacion |
| F2-R2A-06-001 | `2026-06-07_Entrada_Bitacora_Ronda_2A_Plantilla_Invocables_Familias_v0_1.md` | v0.1 | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` | Entrada de bitácora sobre plantilla, invocables y familias | documento_memoria_invocable | consulta, cierre |
| F2-R2A-06-002 | `2026-06-07_Entrada_Bitacora_Ronda_2A_Formato_Estandarizado_Mapa_Familias_Revisado_v0_1.md` | v0.1 | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` | Entrada de bitácora sobre formato estandarizado y mapa revisado | documento_memoria_invocable | consulta, cierre |


---

## 5. Productos de Bloque 1 actualizados por esta cascada

| ID | Documento | Versión activa | Ruta canónica | Estado |
|---|---|---|---|---|
| F2-BCC-06-008 | `2026-06-08_Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_2.md` | v0.2 | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` | activo_revisado |
| F2-BCC-01-001 | `2026-06-08_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_4.md` | v0.4 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | activo_revisado |
| F2-BCC-06-007 | `2026-06-08_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_3.md` | v0.3 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | activo_revisado |
| F2-R2A-06-003 | `2026-06-08_Informe_Validacion_Bloque_1_Ubicacion_Indice_Cartapacios_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_1.md` | v0.1 | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` | memoria_bloque |

---

## 6. Reglas de colocación estructural

```text
1. No crear copias físicas editables en rutas paralelas.
2. Todo documento de Ronda 2A vive en su ruta canónica.
3. Los perfiles lo invocan mediante referencia lógica desde Enlaces_Espejo.
4. Los documentos invocables formales viven en Bases_Conocimiento/Invocables/.
5. Los formatos de invocables maestros viven en Bases_Conocimiento/Invocables/Formatos/.
6. El Tree solo se actualiza como snapshot real después de que el usuario coloque archivos y confirme cambios en Git.
```

---

## 7. Deuda saldada por esta versión

| Deuda | Estado |
|---|---|
| Registrar Bloque 0 en Tabla Fase 2 | Saldada documentalmente |
| Registrar documentos sustantivos Ronda 2A en Tabla Fase 2 | Saldada documentalmente |
| Registrar sub-cartapacios estructurales de Invocables y Formatos | Saldada documentalmente |
| Conectar Tabla Fase 2 con Protocolo de Pago de Deuda v0.2 | Saldada documentalmente |
| Preparar actualización del Índice Maestro a v0.4 | Saldada por Bloque 1 |

---

## 8. Deuda diferida legítima

| Deuda | Tipo | Justificación |
|---|---|---|
| Confirmar colocación manual en repositorio local | Técnica | Depende de acción humana en Git/VS Code |
| Regenerar Tree real desde `git ls-files` | Técnica | Solo procede después de colocar archivos |
| Actualizar Enlaces_Espejo Ronda 2A | Relacional | Corresponde al Bloque 6 |
| Actualizar glosario/taxonomía | Conceptual | Corresponde al Bloque 4 |
| Actualizar catálogos | Funcional | Corresponde al Bloque 5 |
| Crear changelog y bitácora de cierre | Memoria/cierre | Corresponde al Bloque 7 |
| Aplicar rúbrica y seguridad al bloque | Evaluación/seguridad | Corresponde al Bloque 8 |

---

## 9. Cierre de versión v0.2

```text
Tabla de Ubicación Documental Fase 2 actualizada a v0.2.
Bloque 0 registrado.
Ronda 2A registrada.
Sub-cartapacios estructurales de Invocables y Formatos autorizados.
Índice Maestro y Registro de Cartapacios quedan listos para actualización sincronizada.
```
