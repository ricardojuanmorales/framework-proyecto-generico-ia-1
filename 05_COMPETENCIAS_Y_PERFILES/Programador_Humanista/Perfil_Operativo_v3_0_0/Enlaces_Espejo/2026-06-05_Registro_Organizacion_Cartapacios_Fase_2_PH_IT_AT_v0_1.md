# Registro de Organización de Cartapacios — Fase 2 PH-IT-AT v0.1

**Código documental:** 2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1  
**Versión:** v0.1  
**Fecha:** 2026-06-05  
**Estado:** Registro operativo inicial  
**Tipo de documento:** Registro de organización documental, rutas canónicas y referencias lógicas  
**Framework maestro estable:** Framework Genérico V4.1.0  
**Repositorio operativo vivo:** Framework Genérico V4.1.1  
**Fase relacionada:** Fase 2 PH-IT-AT  
**Perfil piloto activo:** Programador Humanista v3.0.0  
**Perfiles relacionados:** Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario, Caleidoscopio  
**Ruta canónica recomendada:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
**Referenciado desde:**  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/`  
- `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/`  
- `18_DOCUMENTACION_ACTIVA/Changelog/`  
- `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/`  
**Protocolo normativo relacionado:** `2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md`  
**Protocolo de colocación relacionado:** `2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md`  
**Índice relacionado:** `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md`  
**Registro de deuda relacionado:** `2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_2.md`  

---

## 0. Propósito

Este registro organiza los cartapacios, rutas canónicas, referencias lógicas, estados de colocación y deudas de ubicación de los productos tangibles de la Fase 2 PH-IT-AT.

Su función es evitar que los productos generados queden dispersos, duplicados, sin ruta canónica o sin vínculo con la transferencia simétrica reversible.

Este registro no reemplaza el mapa estructural del repositorio. Funciona como una capa operativa para aplicar el mapa a la producción concreta de Fase 2.

---

## 1. Principio rector

```text
Cada producto debe tener una ruta canónica.
Cada ruta debe existir en el mapa estructural o requerir decisión explícita.
Cada referencia debe ser lógica, no copia física.
Cada deuda debe quedar visible hasta ser atendida.
```

---

## 2. Alcance del registro

Este registro cubre:

```text
1. documentos ya producidos durante la cascada Fase 2;
2. productos pendientes prioritarios;
3. rutas canónicas recomendadas;
4. referencias lógicas necesarias;
5. estado de deuda de ubicación;
6. relación con índice maestro, bitácora, changelog y seguridad;
7. preparación para futura tabla de ubicación documental;
8. transferencia simétrica PH-IT-AT;
9. invocación caleidoscópica dinámica;
10. compatibilidad futura con metadatos, JSON y bases de datos.
```

---

## 3. Estados de colocación

| Estado | Significado |
|---|---|
| `canonico_colocado` | El archivo fue colocado manualmente en su ruta canónica. |
| `canonico_recomendado` | La ruta canónica fue definida, pero falta confirmación manual. |
| `referencia_logica_registrada` | Existe entrada en Enlaces_Espejo o registro equivalente. |
| `referencia_logica_pendiente` | Debe registrarse referencia lógica. |
| `bitacora_pendiente` | Debe anotarse evento en bitácora activa. |
| `indice_pendiente` | Debe actualizarse Índice Maestro u otro índice. |
| `changelog_pendiente` | Debe anotarse en changelog. |
| `reemplazado` | Existe versión posterior activa. |
| `archivo_historico_pendiente` | Puede moverse o referenciarse luego desde archivo histórico. |
| `bloqueado` | No debe colocarse hasta decisión de gobernanza. |
| `no_aplica` | No requiere acción adicional, con justificación. |

---

## 4. Tabla de productos activos de Fase 2

| ID | Producto | Versión activa | Ruta canónica recomendada | Referencias lógicas | Estado actual | Acción pendiente |
|---|---|---|---|---|---|---|
| F2-BCC-00-001 | `2026-06-04_Marco_Ruta_Caleidoscopica_PH_IT_AT_v0_2.md` | v0.2 | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase/` o ruta canónica aprobada | Índice Maestro, bitácora reversible | canonico_recomendado | Confirmar colocación manual y registrar referencia lógica si falta |
| F2-BCC-00-002 | `2026-06-05_Alcance_Operativo_Fase_2_Base_Conocimiento_Comun_PH_IT_AT_v0_2.md` | v0.2 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Alcance_Operativo/` | Índice Maestro, Enlaces_Espejo, bitácora | canonico_recomendado | Confirmar colocación manual y registrar referencia lógica si falta |
| F2-BCC-00-003 | `2026-06-05_Protocolo_Convenciones_Canonicas_Espejos_Logicos_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_3.md` | v0.3 | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | Enlaces_Espejo, Índice Maestro, bitácora | canonico_colocado_segun_usuario | Mantener referencia lógica activa |
| F2-BCC-00-004 | `2026-06-05_Protocolo_Manejo_Carpetas_Subcarpetas_Colocacion_Documental_Framework_Generico_V4_1_1_v0_2.md` | v0.2 | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` | Enlaces_Espejo, Índice Maestro, bitácora, changelog | canonico_recomendado | Registrar referencia lógica y anotación en bitácora |
| F2-BCC-01-001 | `2026-06-05_Indice_Maestro_Base_Conocimiento_PH_IT_AT_v0_2.md` | v0.2 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | Enlaces_Espejo, bitácora, changelog | canonico_recomendado | Confirmar colocación manual |
| F2-BCC-06-001 | `2026-06-05_Registro_Deuda_Referencias_Logicas_Sesion_Fase_2_PH_IT_AT_v0_2.md` | v0.2 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | Bitácora, Índice Maestro | canonico_recomendado | Usar como última exportación formal; mantener canvas activo |
| F2-BCC-06-002 | `2026-06-05_Entrada_Referencia_Logica_Protocolo_Convenciones_v0_3_Enlaces_Espejo_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | Registro de referencias | canonico_recomendado | Integrar o colocar como entrada individual |
| F2-BCC-06-003 | `2026-06-05_Entrada_Bitacora_Validacion_Protocolo_Convenciones_v0_3_Fase_2_PH_IT_AT_v0_1.md` | v0.1 | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` | Bitácora activa | canonico_recomendado | Colocar o integrar en bitácora |
| F2-BCC-06-004 | `2026-06-05_Entrada_Referencia_Logica_Indice_Maestro_v0_2_Enlaces_Espejo_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | Registro de referencias | canonico_recomendado | Integrar o colocar |
| F2-BCC-06-005 | `2026-06-05_Entrada_Bitacora_Actualizacion_Indice_Maestro_v0_2_PH_IT_AT_v0_1.md` | v0.1 | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` | Bitácora activa | canonico_recomendado | Colocar o integrar |
| F2-BCC-06-006 | `2026-06-05_Entrada_Changelog_Indice_Maestro_v0_2_PH_IT_AT_v0_1.md` | v0.1 | `18_DOCUMENTACION_ACTIVA/Changelog/` | Changelog | canonico_recomendado | Colocar o integrar |
| F2-BCC-06-007 | `2026-06-05_Registro_Organizacion_Cartapacios_Fase_2_PH_IT_AT_v0_1.md` | v0.1 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/` | Índice Maestro, bitácora, tabla de ubicación | canonico_recomendado | Colocar en ruta canónica y registrar en canvas de deuda |

---

## 5. Productos pendientes prioritarios y rutas preliminares

| Orden | Producto pendiente | Ruta canónica preliminar | Estado |
|---|---|---|---|
| 1 | `Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | pendiente |
| 2 | `Plantilla_Minima_Metadatos_MD_JSON_PH_IT_AT_v0_1.md` | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentos/` o `10_REPOSITORIOS_Y_FLUJO_TECNICO/Formatos_Documentales/` | pendiente de decisión |
| 3 | `Taxonomia_Operativa_Investigativa_Base_Conocimiento_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` | pendiente |
| 4 | `Glosario_Centralizado_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/Taxonomias/` o `17_INTERNACIONALIZACION_LOCALIZACION/Glosarios/` | pendiente de decisión |
| 5 | `Catalogo_Basico_Documentos_Invocables_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | pendiente |
| 6 | `Catalogo_Basico_Metodologias_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` o `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/` | pendiente de decisión |
| 7 | `Catalogo_Basico_Herramientas_Procesos_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` | pendiente |
| 8 | `Rubrica_Sistemica_Holistica_Base_Conocimiento_PH_IT_AT_v0_1.md` | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | pendiente |
| 9 | `Rubrica_Madurez_N1_N4_Proyecto_Producto_Usuario_v0_1.md` | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | pendiente |
| 10 | `Mapa_Seguridad_Longitudinal_Fase_2_PH_IT_AT_v0_1.md` | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` | pendiente |
| 11 | `Mapa_Expansion_Fase_2_PH_IT_AT_N1_N4_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/` o `20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/` | pendiente de decisión |
| 12 | `Tabla_Ubicacion_Documental_Fase_2_PH_IT_AT_v0_1.md` | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` | pendiente |

---

## 6. Reglas de actualización de este registro

Este registro debe actualizarse cuando:

```text
1. se crea un nuevo producto;
2. se valida una nueva versión;
3. se cambia una ruta canónica;
4. se registra una referencia lógica;
5. se reemplaza una versión;
6. se archiva un documento;
7. se decide crear o bloquear una carpeta;
8. se detecta conflicto de ubicación;
9. se genera o atiende deuda documental;
10. se cierra un bloque de trabajo.
```

---

## 7. Diferencia entre este registro y la tabla de ubicación documental

| Elemento | Función |
|---|---|
| Registro de Organización de Cartapacios | Control operativo vivo de productos Fase 2, deudas, referencias y rutas. |
| Tabla de Ubicación Documental | Tabla estable de reglas generales o específicas de ubicación. |
| Índice Maestro | Navegación conceptual, documental y funcional de la base de conocimiento. |
| Registro de Deuda | Pendientes de referencias lógicas, bitácoras, índices y changelog. |
| Mapa estructural | Estado real de carpetas y archivos del repositorio. |

---

## 8. Relación con transferencia simétrica PH-IT-AT

Este registro protege la transferencia simétrica porque evita que los productos del PH piloto se conviertan en silos. Todo producto debe poder declarar:

```text
1. si pertenece al conocimiento común;
2. si pertenece al PH;
3. si será transferible a IT;
4. si será transferible a AT;
5. si podrá ser invocado por el Caleidoscopio;
6. si requiere lente latente;
7. si afecta seguridad, datos, privacidad o automatización.
```

---

## 9. Seguridad y revisión humana

Cada entrada del registro debe indicar si el documento relacionado:

```text
1. contiene datos sensibles;
2. afecta flujos con IA;
3. prepara agentes o automatización;
4. requiere revisión humana;
5. tiene riesgo de uso indebido;
6. necesita restricción de acceso;
7. requiere actualización en seguridad longitudinal.
```

Por defecto, todo documento de gobernanza, seguridad, agentes, datos, evaluación o automatización queda marcado como:

```text
seguridad: requiere_revision
```

hasta que se declare otra cosa.

---

## 10. Campos mínimos recomendados para futuras versiones

```yaml
id_registro:
documento:
version_activa:
version_reemplazada:
tipo_documento:
ruta_canonica:
referenciado_desde:
estado_colocacion:
estado_referencia_logica:
estado_bitacora:
estado_indice:
estado_changelog:
perfil_principal:
perfiles_relacionados:
fase:
nivel_usuario:
nivel_proyecto:
nivel_producto:
reusabilidad:
seguridad:
datos_privacidad:
deuda_asociada:
proxima_accion:
```

---

## 11. Deuda generada por este registro

Esta deuda debe añadirse al canvas activo de deuda, no requiere exportar nueva versión del registro de deuda todavía.

| ID deuda | Documento | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|---|
| RDL-F2-20260605-016 | Registro de Organización de Cartapacios v0.1 | Referencia lógica | Importante | Registrar referencia lógica en Enlaces_Espejo | Abierta |
| RDL-F2-20260605-017 | Registro de Organización de Cartapacios v0.1 | Bitácora | Importante | Anotar creación en bitácora activa | Abierta |
| RDL-F2-20260605-018 | Registro de Organización de Cartapacios v0.1 | Índice | Importante | Actualizar Índice Maestro v0.2 | Abierta |
| RDL-F2-20260605-019 | Registro de Organización de Cartapacios v0.1 | Changelog | De cierre | Incluir en changelog de sesión | Abierta |

---

## 12. Próxima acción

Continuar con:

```text
Convencion_Indexacion_Metadatos_PH_IT_AT_v0_1.md
```

Ruta canónica preliminar recomendada:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/
```

---

## 13. Cierre de versión v0.1

```text
Registro de Organización de Cartapacios creado.
Rutas canónicas de productos Fase 2 consolidadas inicialmente.
Referencias lógicas y deudas visibles.
Diferencia entre índice, tabla, registro, mapa y deuda aclarada.
Transferencia simétrica PH-IT-AT preservada.
Próxima acción: Convención de Indexación y Metadatos.
```
