# Tabla de Ubicación Documental — Fase 2 PH-IT-AT v0.1

**Código documental:** 2026-06-05_Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_1  
**ID documento:** F2-BCC-06-008  
**Versión:** v0.1  
**Fecha:** 2026-06-05  
**Estado:** Borrador operativo para validación  
**Tipo de documento:** tabla de ubicación documental  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase:** Fase 2  
**Perfil principal:** repositorio  
**Perfiles relacionados:** PH, IT, AT, Caleidoscopio  
**Nivel usuario:** todos  
**Nivel proyecto:** todos  
**Nivel producto:** todos  
**Modalidad:** repositorio, comun, caleidoscopica  
**Reusabilidad:** comun, metadatos, referencia_logica, transferencia_reversible, seguridad, documentacion_humana  
**Ruta canónica recomendada:** `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/`  
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
**Requiere revisión humana:** si  
**Documentos relacionados:**  
- `2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md`  
- `2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md`  
- `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md`  
- `2026-06-05_Mapa_Expansion_Fase_2_PH_IT_AT_N1_N4_v0_1.md`  
**Deuda de referencias lógicas:** registrar_enlaces_espejo, actualizar_indice_maestro, anotar_bitacora, incluir_changelog  
**Próxima acción:** preparar actualización del Índice Maestro a v0.3 o cerrar bloque documental

---

## 0. Propósito

Esta tabla consolida la ubicación documental de los productos creados durante la cascada de Fase 2 PH-IT-AT.

Su función es servir como instrumento de control para:

```text
1. ubicar cada archivo en su ruta canónica;
2. evitar rutas demasiado generales;
3. evitar sub-cartapacios inventados;
4. diferenciar archivo canónico de referencia lógica;
5. registrar referencias necesarias;
6. visibilizar deuda documental;
7. preparar actualización del Índice Maestro;
8. facilitar sincronización manual del repositorio;
9. apoyar futura migración a JSON o base de datos;
10. sostener transferencia simétrica PH-IT-AT.
```

---

## 1. Principio rector

```text
La tabla ubica.
El índice orienta.
El registro de cartapacios controla.
La referencia lógica invoca.
La bitácora recuerda.
El changelog confirma.
```

Esta tabla no duplica documentos. Solo declara dónde deben vivir.

---

## 2. Estados de ubicación

| Estado | Significado |
|---|---|
| `ruta_confirmada` | Ruta recomendada alineada con mapa estructural vigente. |
| `ruta_por_confirmar` | Ruta razonable, pero requiere revisión antes de sincronizar. |
| `subcartapacio_confirmado` | El documento debe ir en sub-cartapacio específico. |
| `referencia_logica_requerida` | Debe registrarse en Enlaces_Espejo u otro punto de invocación. |
| `actualizar_indice` | Debe incluirse en Índice Maestro v0.3 o actualización equivalente. |
| `bitacora_pendiente` | Debe anotarse en documentación activa. |
| `changelog_pendiente` | Debe registrarse en changelog. |
| `version_reemplazada` | Existe versión más reciente activa. |
| `no_colocar` | No debe colocarse en esa ruta o versión. |

---

## 3. Tabla de ubicación documental de productos activos

| ID | Documento | Versión activa | Ruta canónica recomendada | Sub-cartapacio exacto | Referencias lógicas recomendadas | Estado | Acción pendiente |
|---|---|---|---|---|---|---|---|
| F2-BCC-00-001 | `2026-06-04_Marco_Ruta_Caleidoscopica_PH_IT_AT_v0_2.md` | v0.2 | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase/` | `Secuencias_Fase_Por_Fase/` | `Bases_Conocimiento/`, `Enlaces_Espejo/`, bitácora | ruta_por_confirmar | Confirmar ubicación exacta del marco rector |
| F2-BCC-00-002 | `2026-06-05_Alcance_Operativo_Fase_2_Base_Conocimiento_Comun_PH_IT_AT_v0_2.md` | v0.2 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/` | `Alcance_Operativo/` | Índice Maestro, Enlaces_Espejo, bitácora | ruta_confirmada | Confirmar colocación manual |
| F2-BCC-00-003 | `2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md` | v0.3 | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | `Reglas_Colocacion_Documental/` | Enlaces_Espejo, Índice Maestro, bitácora | ruta_confirmada | Mantener referencia lógica activa |
| F2-BCC-00-004 | `2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md` | v0.2 | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | `Reglas_Colocacion_Documental/` | Enlaces_Espejo, Índice Maestro, bitácora, changelog | ruta_confirmada | Registrar referencia lógica |
| F2-BCC-01-001 | `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md` | v0.2 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | `Bases_Conocimiento/` | Enlaces_Espejo, bitácora, changelog | ruta_confirmada | Actualizar a v0.3 tras este bloque |
| F2-BCC-02-001 | `2026-06-05_Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | `Bases_Conocimiento/` | Enlaces_Espejo, Índice Maestro, Registro de Cartapacios | ruta_confirmada | Registrar referencia lógica |
| F2-BCC-02-002 | `2026-06-05_Plantilla_Minima_Metadatos_MD_JSON_PH_IT_AT_v0_1.md` | v0.1 | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/` | `Plantillas_Documentos/` | `Formatos_Documentales/Markdown/`, `JSON/`, `YAML/`, Enlaces_Espejo | ruta_confirmada | Registrar referencia lógica |
| F2-BCC-03-001 | `2026-06-05_Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` | `Taxonomias/` | Índice Maestro, Glosario, Enlaces_Espejo | ruta_confirmada | Registrar referencia lógica |
| F2-BCC-03-002 | `2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_2.md` | v0.2 | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` | `Taxonomias/` | Índice Maestro, Taxonomía, Enlaces_Espejo | ruta_confirmada | Registrar referencia lógica y marcar v0.1 reemplazada |
| F2-BCC-03-003 | `2026-06-05_Protocolo_Gestion_Terminos_Glosario_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` | `Taxonomias/` | Glosario, Plantilla Entrada Glosario, Enlaces_Espejo | ruta_confirmada | Registrar referencia lógica |
| F2-BCC-03-004 | `2026-06-05_Plantilla_Entrada_Glosario_PH_IT_AT_v0_1.md` | v0.1 | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/` | `Plantillas_Documentos/` | Glosario, Protocolo Gestión Términos, Enlaces_Espejo | ruta_confirmada | Registrar referencia lógica |
| F2-BCC-04-001 | `2026-06-05_Catalogo_Basico_Documentos_Invocables_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | `Bases_Conocimiento/` | Índice Maestro, Registro Cartapacios, Enlaces_Espejo | ruta_confirmada | Registrar referencia lógica |
| F2-BCC-04-002 | `2026-06-05_Catalogo_Basico_Metodologias_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | `Bases_Conocimiento/` | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/`, Enlaces_Espejo | ruta_confirmada | Registrar referencia lógica |
| F2-BCC-04-003 | `2026-06-05_Catalogo_Basico_Herramientas_Procesos_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | `Bases_Conocimiento/` | `10_REPOSITORIOS_Y_FLUJO_TECNICO/`, `09_IA_AGENTES_Y_COPILOTOS/`, `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/`, Enlaces_Espejo | ruta_confirmada | Registrar referencia lógica |
| F2-BCC-05-001 | `2026-06-05_Rubrica_Sistemica_Holistica_Base_Conocimiento_PH_IT_AT_v0_2.md` | v0.2 | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Rubricas_N3_N4/` | `Rubricas_N3_N4/` | `Gates_Checks_Evaluacion/`, `Evidencias_Validacion/`, `Reportes_Auditoria/`, Enlaces_Espejo | subcartapacio_confirmado | Usar v0.2, no v0.1 |
| F2-BCC-05-002 | `2026-06-05_Rubrica_Madurez_N1_N4_Proyecto_Producto_Usuario_v0_1.md` | v0.1 | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Rubricas_N3_N4/` | `Rubricas_N3_N4/` | `Gates_Checks_Evaluacion/`, `Evidencias_Validacion/`, `Reportes_Auditoria/`, Enlaces_Espejo | subcartapacio_confirmado | Registrar referencia lógica |
| F2-BCC-06-001 | `2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_2.md` | v0.2 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | `Enlaces_Espejo/` | Bitácora, Índice Maestro | ruta_confirmada | Mantener como última exportación formal |
| F2-BCC-06-007 | `2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | `Enlaces_Espejo/` | Índice Maestro, Tabla Ubicación, bitácora | ruta_confirmada | Registrar referencia lógica |
| F2-BCC-06-008 | `2026-06-05_Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_1.md` | v0.1 | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` | `Tablas_Ubicacion_Documental/` | Índice Maestro, Registro Cartapacios, Enlaces_Espejo, bitácora | ruta_confirmada | Colocar y registrar referencia lógica |
| F2-BCC-07-001 | `2026-06-05_Mapa_Seguridad_Longitudinal_Fase_2_PH_IT_AT_v0_1.md` | v0.1 | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Evaluacion_Riesgos_Tecnicos/` | `Evaluacion_Riesgos_Tecnicos/` | `Checklists_Seguridad/`, `Privacidad/`, `Politicas_Datos/`, `Seguridad_IA_Agentes/`, Enlaces_Espejo | subcartapacio_confirmado | Registrar referencia lógica |
| F2-BCC-07-002 | `2026-06-05_Mapa_Expansion_Fase_2_PH_IT_AT_N1_N4_v0_1.md` | v0.1 | `20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/` | `Planes_Evolucion/` | `Roadmap/`, `Backlog_Evolutivo/`, `Primers_Continuidad/`, Enlaces_Espejo | subcartapacio_confirmado | Registrar referencia lógica |

---

## 4. Versiones reemplazadas o que no deben usarse como activas

| Documento | Estado | Acción recomendada |
|---|---|---|
| `2026-06-04_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_1.md` | reemplazado por v0.2 | No editar; conservar como histórico o referencia de trazabilidad |
| `2026-06-05_Rubrica_Sistemica_Holistica_Base_Conocimiento_PH_IT_AT_v0_1.md` | reemplazado por v0.2 | No colocar como versión activa; v0.2 corrige sub-cartapacio |
| `2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_1.md` | reemplazado por v0.2 | Mantener como borrador semilla si se desea trazabilidad |
| `2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_1.md` | reemplazado por v0.2 | Usar v0.2 como última exportación formal |
| Entradas mínimas sueltas de índice o bitácora ya integradas | insumo de proceso | Pueden conservarse en bitácora o compendio, no como documentos rectores |

---

## 5. Referencias lógicas obligatorias por familia

| Familia documental | Referenciar desde |
|---|---|
| Protocolos de colocación | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`, Índice Maestro, bitácora |
| Base de conocimiento PH-IT-AT | Enlaces_Espejo, Índice Maestro, Registro de Cartapacios |
| Taxonomías y glosarios | Enlaces_Espejo, Índice Maestro, documentación humana futura |
| Plantillas | Enlaces_Espejo, Base de Conocimiento, formatos técnicos si aplica |
| Catálogos | Enlaces_Espejo, Índice Maestro, Base de Conocimiento |
| Rúbricas | Enlaces_Espejo, Gates, Evidencias, Reportes de Auditoría |
| Seguridad | Enlaces_Espejo, Evaluación de Seguridad, Checklists, Privacidad, Políticas |
| Evolución | Enlaces_Espejo, Roadmap, Backlog Evolutivo, Primers de Continuidad |
| Documentación activa | Bitácoras, Changelog, Compendios, Registro de Decisiones |
| Tablas de ubicación | Reglas de colocación, Índice Maestro, Registro de Cartapacios |

---

## 6. Rutas bloqueadas o no autorizadas

No usar estas rutas para productos de Fase 2 salvo decisión explícita posterior:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Fase_2_Base_Conocimiento/
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Fase_2_Base_Conocimiento/00_Indice_Maestro/
18_DOCUMENTACION_ACTIVA/Transferencia_Simetrica/Base_Conocimiento_Comun/
18_DOCUMENTACION_ACTIVA/Transferencia_Simetrica/Base_Conocimiento_Comun/00_Indice_Maestro/
05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/
15_EVALUACION_CALIDAD_Y_AUDITORIA/ sin sub-cartapacio cuando exista uno más específico
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/ sin sub-cartapacio cuando exista uno más específico
```

---

## 7. Regla de sub-cartapacio

Cuando el módulo tenga sub-cartapacios específicos, usar el sub-cartapacio más adecuado.

Ejemplos aplicados:

| Documento | No usar | Usar |
|---|---|---|
| Rúbrica Sistémica y Holística | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Rubricas_N3_N4/` |
| Rúbrica de Madurez N1-N4 | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Rubricas_N3_N4/` |
| Mapa de Seguridad Longitudinal | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Evaluacion_Riesgos_Tecnicos/` |
| Mapa de Expansión | `20_MANTENIMIENTO_Y_EVOLUCION/` | `20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/` |

---

## 8. Procedimiento manual de colocación

Para cada archivo:

```text
1. Descargar archivo MD.
2. Colocarlo en su ruta canónica exacta.
3. No crear copia física editable en otra ruta.
4. Registrar referencia lógica en Enlaces_Espejo si aplica.
5. Actualizar Registro de Organización de Cartapacios.
6. Actualizar Índice Maestro en la próxima versión.
7. Anotar en bitácora o changelog según prioridad.
8. Marcar versión anterior como reemplazada si aplica.
```

---

## 9. Preparación para JSON futuro

Esta tabla puede convertirse luego en una entidad `document_locations`.

Campos sugeridos:

```yaml
id_documento:
documento:
version_activa:
ruta_canonica:
subcartapacio:
referenciado_desde:
estado_ubicacion:
estado_version:
accion_pendiente:
perfil_principal:
perfiles_relacionados:
fase:
seguridad:
deuda_asociada:
fecha_revision:
```

---

## 10. Deuda generada por esta tabla

Esta deuda debe añadirse al canvas activo de deuda, sin exportar nueva versión del registro salvo cierre de bloque o solicitud explícita.

| ID deuda | Documento | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|---|
| RDL-F2-20260605-076 | Tabla de Ubicación Documental v0.1 | Referencia lógica | Importante | Registrar referencia lógica en Enlaces_Espejo | Abierta |
| RDL-F2-20260605-077 | Tabla de Ubicación Documental v0.1 | Bitácora | Importante | Anotar creación en bitácora activa | Abierta |
| RDL-F2-20260605-078 | Tabla de Ubicación Documental v0.1 | Índice | Alta | Actualizar Índice Maestro v0.3 con esta tabla y productos del bloque | Abierta |
| RDL-F2-20260605-079 | Tabla de Ubicación Documental v0.1 | Changelog | De cierre | Incluir en changelog de sesión | Abierta |
| DT-F2-20260605-043 | Sincronización manual | Deuda técnica | Alta | Confirmar que todos los archivos fueron colocados manualmente en rutas canónicas | Abierta |
| DT-F2-20260605-044 | Registro de Cartapacios | Deuda técnica | Alta | Actualizar Registro de Organización de Cartapacios con la tabla | Abierta |
| DT-F2-20260605-045 | Índice Maestro v0.3 | Deuda técnica | Alta | Crear Índice Maestro v0.3 consolidado | Abierta |

---

## 11. Próxima acción

La próxima acción recomendada es una de estas dos:

```text
Opción A: Actualizar Índice Maestro a v0.3.
Opción B: Hacer cierre de bloque documental con compendio, deuda, changelog y primer.
```

Recomendación:

```text
Crear Índice Maestro v0.3 antes del cierre de bloque,
porque esta tabla ya organiza las rutas necesarias para consolidarlo.
```

---

## 12. Cierre de versión v0.1

```text
Tabla de Ubicación Documental Fase 2 creada.
Rutas canónicas consolidadas.
Sub-cartapacios precisos incorporados.
Versiones reemplazadas identificadas.
Referencias lógicas obligatorias organizadas por familia.
Rutas bloqueadas reiteradas.
Procedimiento manual de colocación definido.
Deuda registrada en canvas activo.
Próxima acción recomendada: Índice Maestro v0.3.
```
