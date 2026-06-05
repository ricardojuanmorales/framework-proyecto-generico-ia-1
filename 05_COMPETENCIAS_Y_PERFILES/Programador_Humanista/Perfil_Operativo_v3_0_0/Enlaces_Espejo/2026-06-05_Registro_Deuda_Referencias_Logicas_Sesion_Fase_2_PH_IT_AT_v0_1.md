# Registro de Deuda de Referencias Lógicas de Sesión — Fase 2 PH-IT-AT v0.1

**Código documental:** 2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_1  
**Versión:** v0.1  
**Fecha:** 2026-06-05  
**Estado:** Registro vivo de sesión  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Perfil piloto activo:** Programador Humanista v3.0.0  
**Perfiles relacionados:** Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario  
**Fase:** Fase 2  
**Ruta canónica recomendada:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
**Referencia de proceso recomendada:** `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/`  
**Protocolo rector relacionado:** `2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md`  

---

## 1. Propósito

Este registro documenta, durante la sesión, las referencias lógicas pendientes que nacen al crear, validar, actualizar o reemplazar productos documentales de la Fase 2 PH-IT-AT.

Su función es evitar que las referencias a índices, registros, bitácoras, decisiones, changelogs y enlaces lógicos queden invisibles o dependan de memoria conversacional.

Este registro no duplica documentos. Opera como tablero de deuda viva para sostener la regla:

```text
Un documento, una fuente canónica.
Muchos índices pueden apuntar a él.
Ningún espejo físico editable sin decisión explícita.
Ninguna referencia lógica pendiente debe quedar invisible.
```

---

## 2. Regla operativa adoptada

Cada archivo nuevo o nueva versión producida durante la Fase 2 debe generar una entrada en este registro antes de pasar al siguiente producto, o declarar explícitamente `no aplica`.

Las referencias lógicas se clasifican en tres niveles de prioridad:

| Prioridad | Definición | Momento de atención |
|---|---|---|
| Crítica | Afecta reglas, rutas, seguridad, gobernanza, continuidad o producción dependiente | Antes de continuar al siguiente producto dependiente |
| Importante | Afecta índice, registro, bitácora, trazabilidad o enlaces, pero no bloquea la producción inmediata | Al cierre del bloque de trabajo |
| De cierre | Referencia informativa o consolidación de sesión | Al cierre de sesión |
| No aplica | No requiere referencia lógica adicional | Se declara y se cierra |

---

## 3. Instrumentos que deben revisarse según aplique

| Instrumento | Ruta canónica o zona del repositorio | Uso |
|---|---|---|
| Índice Maestro de Base de Conocimiento | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Navegación e invocación de productos de Fase 2 |
| Registro de Organización de Cartapacios | Pendiente de creación en `Enlaces_Espejo/` | Ubicación canónica, referencias lógicas y no duplicación |
| Enlaces_Espejo | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | Registro estable de espejos lógicos |
| Bitácora activa de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` | Memoria del proceso y decisiones vivas |
| Registro de decisiones | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` | Decisiones arquitectónicas y de gobernanza |
| Changelog | `18_DOCUMENTACION_ACTIVA/Changelog/` | Cambios consolidados de sesión |
| Tablas de ubicación documental | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` | Mapa formal de colocación documental |
| Reglas de colocación documental | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | Protocolos generales de ubicación |

---

## 4. Formato mínimo de entrada

```yaml
id_deuda:
fecha:
documento_origen:
version:
ruta_canonica_recomendada:
tipo_documento:
perfil_principal:
perfiles_relacionados:
referencias_logicas_pendientes:
prioridad:
estado:
accion_requerida:
responsable_manual:
momento_de_atencion:
riesgo_si_no_se_actualiza:
seguridad_transversal:
notas:
```

---

## 5. Registro vivo de deuda de referencias lógicas

### RDL-F2-20260605-001 — Registro de Deuda de Referencias Lógicas de Sesión v0.1

```yaml
id_deuda: RDL-F2-20260605-001
fecha: 2026-06-05
documento_origen: 2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_1.md
version: v0.1
ruta_canonica_recomendada: 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/
tipo_documento: registro_deuda_referencias_logicas
perfil_principal: PH
perfiles_relacionados: [PH, IT, AT]
referencias_logicas_pendientes:
  - 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/
  - 00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/
prioridad: critica
estado: abierta
accion_requerida: Colocar este registro en Enlaces_Espejo y referenciarlo en la bitácora activa de sesión.
responsable_manual: usuario
momento_de_atencion: antes_de_continuar_al_protocolo_de_carpetas
riesgo_si_no_se_actualiza: El sistema de espejos lógicos queda sin tablero vivo y se pierden referencias pendientes.
seguridad_transversal: requiere_revision_humana
otas: Este registro inaugura la regla del Protocolo de Convenciones v0.3.
```

### RDL-F2-20260605-002 — Protocolo de Convenciones Canónicas y Espejos Lógicos v0.3

```yaml
id_deuda: RDL-F2-20260605-002
fecha: 2026-06-05
documento_origen: 2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md
version: v0.3
ruta_canonica_recomendada: 00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/
tipo_documento: protocolo_general_colocacion_y_espejos
perfil_principal: comun
perfiles_relacionados: [PH, IT, AT]
referencias_logicas_pendientes:
  - 00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/
  - 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/
  - 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/
  - 18_DOCUMENTACION_ACTIVA/Registro_Decisiones/
  - 18_DOCUMENTACION_ACTIVA/Changelog/
prioridad: critica
estado: abierta
accion_requerida: Registrar el protocolo v0.3 como regla activa y marcar v0.2 como reemplazada o superada.
responsable_manual: usuario
momento_de_atencion: antes_de_cerrar_el_bloque_de_convenciones
riesgo_si_no_se_actualiza: Pueden seguir usándose rutas no canónicas o espejos físicos duplicados.
seguridad_transversal: requiere_revision_humana
otas: La lógica v0.3 debe ser reconocida por el próximo protocolo de manejo de carpetas.
```

### RDL-F2-20260605-003 — Protocolo de Convenciones Canónicas y Espejos Lógicos v0.2

```yaml
id_deuda: RDL-F2-20260605-003
fecha: 2026-06-05
documento_origen: 2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_2.md
version: v0.2
ruta_canonica_recomendada: 00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/
tipo_documento: version_reemplazada
perfil_principal: comun
perfiles_relacionados: [PH, IT, AT]
referencias_logicas_pendientes:
  - 00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/
  - 18_DOCUMENTACION_ACTIVA/Changelog/
prioridad: importante
estado: abierta
accion_requerida: Marcar v0.2 como reemplazada por v0.3 en los registros correspondientes, sin eliminarla.
responsable_manual: usuario
momento_de_atencion: cierre_de_bloque
riesgo_si_no_se_actualiza: Ambigüedad sobre cuál versión del protocolo está activa.
seguridad_transversal: no_aplica
otas: v0.2 conserva valor histórico, pero la versión activa es v0.3.
```

### RDL-F2-20260605-004 — Alcance Operativo Fase 2 v0.2

```yaml
id_deuda: RDL-F2-20260605-004
fecha: 2026-06-05
documento_origen: 2026-06-05_Alcance_Operativo_Fase_2_Base_Conocimiento_Comun_PH_IT_AT_v0_2.md
version: v0.2
ruta_canonica_recomendada: 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/
tipo_documento: alcance_operativo
perfil_principal: PH
perfiles_relacionados: [PH, IT, AT]
referencias_logicas_pendientes:
  - 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
  - 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/
  - 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/
  - 18_DOCUMENTACION_ACTIVA/Changelog/
prioridad: importante
estado: abierta
accion_requerida: Registrar el alcance operativo como documento rector activo de Fase 2 y enlazarlo desde el Índice Maestro.
responsable_manual: usuario
momento_de_atencion: cierre_de_bloque
riesgo_si_no_se_actualiza: El Índice Maestro puede no reconocer el alcance activo y producir desalineación de Fase 2.
seguridad_transversal: requiere_revision_humana
otas: No crear copia espejo física.
```

### RDL-F2-20260605-005 — Índice Maestro Base de Conocimiento PH-IT-AT v0.1

```yaml
id_deuda: RDL-F2-20260605-005
fecha: 2026-06-05
documento_origen: 2026-06-04_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_1.md
version: v0.1
ruta_canonica_recomendada: 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
tipo_documento: indice_maestro_base_conocimiento
perfil_principal: PH
perfiles_relacionados: [PH, IT, AT]
referencias_logicas_pendientes:
  - actualizar_rutas_no_canonicas
  - eliminar_subcarpetas_numeradas_internas_propuestas
  - enlazar_Protocolo_Convenciones_v0_3
  - enlazar_Registro_Deuda_Referencias_Logicas_v0_1
  - enlazar_futuro_Protocolo_Manejo_Carpetas_Subcarpetas
prioridad: critica
estado: abierta
accion_requerida: Actualizar el Índice Maestro antes de aprobar versión final descargable.
responsable_manual: usuario_y_asistente
momento_de_atencion: antes_de_aprobar_indice_maestro
riesgo_si_no_se_actualiza: El índice podría seguir recomendando rutas no alineadas con el mapa estructural auditado.
seguridad_transversal: requiere_revision_humana
otas: Este punto conecta directamente con la validación pendiente del Índice Maestro.
```

### RDL-F2-20260605-006 — Protocolo de Manejo de Carpetas y Sub-carpetas

```yaml
id_deuda: RDL-F2-20260605-006
fecha: 2026-06-05
documento_origen: 2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_1.md
version: pendiente
ruta_canonica_recomendada: 00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/
tipo_documento: protocolo_pendiente
perfil_principal: comun
perfiles_relacionados: [PH, IT, AT]
referencias_logicas_pendientes:
  - 00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/
  - 00_CONTROL_MAESTRO/Convenciones_Nombres/
  - 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/
  - 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/
prioridad: critica
estado: pendiente_de_creacion
accion_requerida: Crear el protocolo de manejo de carpetas y sub-carpetas antes de continuar con metadatos, glosario o catálogos.
responsable_manual: usuario_y_asistente
momento_de_atencion: siguiente_producto
riesgo_si_no_se_actualiza: La cascada de Fase 2 podría seguir produciendo archivos con rutas inconsistentes.
seguridad_transversal: requiere_revision_humana
otas: Este será el próximo producto tangible.
```

---

## 6. Resumen de estado

| Estado | Cantidad | Observación |
|---|---:|---|
| Crítica | 4 | Requieren atención antes de avanzar demasiado en la cascada |
| Importante | 2 | Pueden consolidarse al cierre del bloque de convenciones |
| De cierre | 0 | Se añadirán según avance la sesión |
| No aplica | 0 | No se ha declarado todavía |

---

## 7. Checklist antes de pasar al próximo producto

Antes de crear el Protocolo de Manejo de Carpetas y Sub-carpetas, verificar:

```text
[ ] Este registro fue descargado.
[ ] Este registro será colocado en Enlaces_Espejo.
[ ] La bitácora activa de sesión referenciará este registro.
[ ] El protocolo v0.3 queda como versión activa.
[ ] El Índice Maestro queda marcado como pendiente de actualización de rutas.
[ ] No se crearon espejos físicos.
[ ] No se crearon carpetas nuevas no auditadas.
```

---

## 8. Nota de bitácora reversible

**Evento:** Creación del Registro de Deuda de Referencias Lógicas de Sesión Fase 2 PH-IT-AT v0.1.  
**Impacto en PH:** Establece un mecanismo robusto para que el perfil piloto no acumule referencias invisibles.  
**Impacto en IT:** Prepara una metodología transferible para cuando el IT incorpore sus productos de Fase 1 y Fase 2.  
**Impacto en AT:** Prepara una metodología transferible para incorporar mediaciones, experiencias y documentos específicos sin duplicación.  
**Impacto en Caleidoscopio:** Permite que la invocación dinámica dependa de referencias lógicas actualizadas y no de copias físicas divergentes.  
**Impacto en seguridad longitudinal:** Exige revisión de referencias críticas antes de avanzar a productos dependientes.  
**Estado de transferencia:** Reversible activa.  
**Próxima acción:** Crear el Protocolo de Manejo de Carpetas y Sub-carpetas.

---

## 9. Cierre de versión v0.1

```text
Registro de deuda creado.
Espejo lógico Tipo 1 operacionalizado.
Referencia lógica pendiente vuelve visible.
Cascada documental protegida.
Próximo producto: Protocolo de Manejo de Carpetas y Sub-carpetas.
```
