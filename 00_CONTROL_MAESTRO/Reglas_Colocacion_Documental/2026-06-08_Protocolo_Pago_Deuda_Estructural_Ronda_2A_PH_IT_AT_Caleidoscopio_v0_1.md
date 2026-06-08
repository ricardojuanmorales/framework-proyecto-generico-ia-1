# Protocolo de Pago de Deuda Estructural — Ronda 2A PH-IT-AT-Caleidoscopio v0.1

**Código documental:** `2026-06-08_Protocolo_Pago_Deuda_Estructural_Ronda_2A_PH_IT_AT_Caleidoscopio_v0_1`  
**Versión:** v0.1  
**Fecha:** 2026-06-08  
**Estado:** Protocolo rector para revisión humana y aplicación operativa  
**Fase:** Fase 2  
**Ronda:** Ronda 2A  
**Ecosistema:** PH-IT-AT-Caleidoscopio  
**Tipo de documento:** Protocolo operativo de gobernanza documental  
**Clasificación principal:** Gobernanza documental / pago de deuda estructural  
**Clasificaciones secundarias:** conocimiento común; trazabilidad; referencias lógicas; bitácora; changelog; seguridad longitudinal; transferencia simétrica reversible; invocación documental  
**Nivel N1-N4:** Multinivel, con énfasis operativo N3/N4  
**Ruta canónica recomendada:** `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/`  
**Referencias lógicas recomendadas:**  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Enlaces_Espejo/`  
- `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Bases_Conocimiento/`  
- `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/`  
- `18_DOCUMENTACION_ACTIVA/Changelog/`  
- `05_COMPETENCIAS_Y_PERFILES/Taxonomias/`  
**Estado de revisión humana:** pendiente de aprobación final  

---

## 0. Propósito

Este protocolo formaliza el procedimiento para **acumular, clasificar, pagar, diferir y documentar deuda estructural** dentro de la Fase 2 Ronda 2A del ecosistema PH-IT-AT-Caleidoscopio.

Su función es evitar que la creación de documentos, mapas, plantillas, catálogos, enlaces espejo, bitácoras, rúbricas, taxonomías y actualizaciones genere deuda técnica o documental invisible.

Este protocolo debe usarse antes de continuar con la creación de los **Invocables Maestros FAM-01 a FAM-15**.

---

## 1. Principio rector

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

La deuda estructural no se elimina por silencio. Se paga con evidencia documental, actualización de relaciones y revisión humana.

---

## 2. Definición de deuda estructural

La **deuda estructural** es cualquier pendiente que afecte la coherencia, trazabilidad, ubicación, seguridad, invocabilidad, clasificación o continuidad de un documento o bloque documental.

Incluye, entre otras:

```text
rutas canónicas no registradas;
referencias lógicas pendientes;
índice desactualizado;
tabla de ubicación desactualizada;
catálogo no sincronizado;
glosario o taxonomía incompleta;
bitácora sin anotación;
changelog pendiente;
versión reemplazada sin marcar;
evaluación sistémica pendiente;
revisión de seguridad pendiente;
deuda diferida sin justificación;
invocables sin categoría;
espejos funcionales sin modo de invocación;
retorno sistémico no declarado.
```

---

## 3. Tipos de deuda

| Tipo de deuda | Definición | Ejemplo | Acción esperada |
|---|---|---|---|
| Deuda bloqueante | Impide continuar sin riesgo de ruptura estructural | Documento sin ruta canónica o versión activa dudosa | Pausar y resolver antes de avanzar |
| Deuda saldable inmediata | Puede pagarse en la ronda actual | Registrar documento en índice, tabla, catálogo o enlaces espejo | Saldar en cascada |
| Deuda de cierre | Puede pagarse al cerrar bloque | Changelog, bitácora consolidada, paquete final | Saldar antes de declarar cierre |
| Deuda diferida legítima | Depende de trabajo futuro real | JSON, tableros, agentes gobernados, automatización | Registrar como diferida con justificación |
| Deuda emergente | Aparece durante el trabajo | Nueva categoría, ruta o familia invocable | Evaluar con semáforo |
| Deuda conceptual | Afecta definiciones o taxonomía | Término nuevo sin definición | Registrar en glosario/taxonomía |
| Deuda relacional | Afecta vínculos entre documentos | Falta referencia lógica o espejo funcional | Crear entrada o actualizar relación |
| Deuda de seguridad | Afecta privacidad, datos, revisión humana o automatización | Documento invocable sin límites de uso | Revisar con mapa de seguridad |
| Deuda de uso humano | Afecta legibilidad, carga cognitiva o continuidad | Documento demasiado complejo sin guía | Añadir andamiaje o nota humana |

---

## 4. Semáforo de deuda

### Verde — integrar ahora

Se integra inmediatamente cuando:

```text
sostiene trazabilidad;
evita duplicación;
corrige ruta;
activa referencia lógica necesaria;
mejora seguridad básica;
no aumenta complejidad innecesaria;
permite continuidad humana clara.
```

### Amarillo — registrar y programar

Se registra como deuda controlada cuando:

```text
es valiosa pero no bloquea el avance;
requiere revisión posterior;
depende de otro documento;
requiere prueba de uso;
puede vivir como nota, sección, ejemplo o caso;
aún no justifica documento propio.
```

### Rojo — pausar, escalar o gobernar

Se pausa o escala cuando:

```text
hay datos sensibles;
hay evaluación de personas;
hay publicación externa;
hay automatización o agentes;
hay riesgo ético, pedagógico, institucional o humano significativo;
la ruta o categoría contradice el mapa vigente;
se perdería trazabilidad si se avanza.
```

---

## 5. Cascada oficial de pago de deuda

La cascada debe ejecutarse en este orden siempre que sea posible:

```text
1. Tree / árbol del repositorio.
2. Tabla general de ubicación documental.
3. Tabla específica de Fase 2 PH-IT-AT.
4. Índice Maestro.
5. Registro de Organización de Cartapacios.
6. Enlaces_Espejo / referencias lógicas.
7. Catálogos aplicables.
8. Glosario y taxonomía.
9. Bitácora.
10. Changelog.
11. Evaluación sistémica.
12. Revisión de seguridad longitudinal.
13. Registro de deuda saldada y diferida.
14. Paquete de cierre técnico.
```

Esta cascada puede adaptarse si un documento no existe o no está disponible, pero toda alteración debe anotarse en bitácora.

---

## 6. Relación entre tabla, índice, taxonomía, categoría y catálogo

| Componente | Función | Pregunta que responde |
|---|---|---|
| Tree | Retrata estructura existente | ¿Qué existe hoy en el repositorio? |
| Tabla de ubicación | Define ruta canónica | ¿Dónde vive este documento? |
| Índice Maestro | Orienta navegación | ¿Cómo encuentro y entiendo su función? |
| Taxonomía | Clasifica conocimiento | ¿Qué tipo de pieza es? |
| Categorías | Etiquetan uso y relaciones | ¿Cómo se filtra, invoca o conecta? |
| Catálogo | Agrupa por función | ¿A qué conjunto operativo pertenece? |
| Enlaces_Espejo | Permite invocación funcional | ¿Desde dónde se usa sin duplicar? |
| Bitácora | Registra proceso y decisiones | ¿Qué pasó y por qué? |
| Changelog | Confirma cambio oficial | ¿Qué cambió en el sistema? |

---

## 7. Taxonomía y categorías en el pago de deuda

Toda pieza nueva o actualizada debe declarar categorías mínimas.

### 7.1 Categorías mínimas recomendadas

```yaml
tipo_documento:
tipo_invocabilidad:
familia_invocable:
nivel_N1_N4:
perfil_entrada:
modo_invocacion:
ruta_canonica:
referencias_logicas:
seguridad:
trazabilidad:
estado_revision:
relacion_PH_IT_AT_Caleidoscopio:
retorno_sistemico:
```

### 7.2 Tipo de invocabilidad

```text
invocable_formal:
  diseñado para activar trabajo repetible humano-máquina-IA.

documento_rector_invocable:
  orienta decisiones, ubicación, clasificación o gobernanza.

documento_memoria_invocable:
  sostiene continuidad, evidencia, bitácora, changelog o deuda.

referencia_funcional:
  documento consultable desde espejos o rutas sin ser invocable formal.
```

### 7.3 Modo de invocación

```text
consulta;
activacion;
validacion;
seguridad;
evaluacion;
transferencia;
cierre;
clasificacion;
trazabilidad;
gobernanza.
```

---

## 8. Invocación documental y espejos funcionales

### 8.1 Principio

No todo documento relacionado entra al Catálogo de Documentos Invocables. Solo entra como **invocable formal** si activa una acción repetible con estructura, propósito, entradas, salidas, límites, seguridad y revisión humana.

Otros documentos pueden ser invocados como:

```text
documentos rectores invocables;
documentos de memoria invocable;
referencias funcionales;
espejos lógicos;
entradas consolidadas por bloque.
```

### 8.2 Archivo canónico, espejo funcional y referencia lógica

| Elemento | Definición |
|---|---|
| Archivo canónico | Ubicación oficial editable del documento |
| Espejo funcional | Lugar desde donde se consulta o invoca sin duplicar físicamente |
| Referencia lógica | Registro explícito de la relación entre archivo canónico y punto de invocación |

### 8.3 Regla de no duplicación

```text
Un documento vive en una ruta canónica.
Los perfiles o módulos que lo necesiten lo invocan mediante referencia lógica.
No se crean copias físicas editables en rutas paralelas.
```

### 8.4 Entrada consolidada por bloque

Para evitar proliferación de fichas espejo sueltas, la estrategia preferida será crear o actualizar una **entrada consolidada por bloque** en `Enlaces_Espejo/`.

Esa entrada debe contener una tabla con:

| Campo | Descripción |
|---|---|
| Documento | Nombre del archivo |
| Ruta canónica | Dónde vive |
| Tipo de invocabilidad | Formal, rector, memoria o referencia |
| Modo de invocación | Consulta, activación, seguridad, evaluación, etc. |
| Perfil relacionado | PH, IT, AT, Caleidoscopio o común |
| Relación con bloque | Por qué se enlaza |
| Estado | Activo, revisado, pendiente, diferido |

---

## 9. Manejo de bitácoras

### 9.1 Función de la bitácora

La bitácora no reemplaza el índice, la tabla, el catálogo ni el changelog. Su función es registrar el proceso humano-operativo:

```text
qué se decidió;
por qué se decidió;
qué tensión apareció;
qué deuda nació;
qué deuda se saldó;
qué deuda quedó diferida;
qué reflexión humana debe recordarse;
qué continuidad se recomienda.
```

### 9.2 Tipos de bitácora

| Tipo | Función | Ruta recomendada |
|---|---|---|
| Bitácora de sesión | Registra una sesión puntual | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |
| Bitácora de transferencia | Registra movimientos PH-IT-AT-Caleidoscopio | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |
| Bitácora de pago de deuda | Registra deuda saldada y diferida | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |
| Bitácora consolidada | Resume un bloque o ronda | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |

### 9.3 Reflexión humana

Toda bitácora relevante debe reservar un espacio para reflexión humana.

Plantilla mínima:

```text
Reflexión humana solicitada:
¿Qué decisión conviene recordar?
¿Qué tensión apareció?
¿Qué aprendizaje queda para el sistema?
¿Qué debe evitarse repetir?
¿Qué recomendación queda para la próxima sesión?
```

La reflexión humana puede quedar pendiente si el usuario decide responder luego, pero debe quedar solicitada en el momento oportuno.

---

## 10. Manejo de changelog

El changelog confirma cambios oficiales del sistema. Debe registrar:

```text
documentos creados;
documentos actualizados;
versiones reemplazadas;
rutas corregidas;
deuda saldada;
deuda diferida;
impacto en índice, tabla, catálogo, glosario, taxonomía, seguridad o evaluación.
```

No debe narrar toda la sesión. Para eso existe la bitácora.

---

## 11. Retorno sistémico

Toda deuda saldada debe indicar si generó aprendizaje reusable.

### 11.1 Alcance de retorno

| Alcance | Significado |
|---|---|
| Local | Corrige un caso puntual sin generalizar |
| Perfil específico | Aplica principalmente a PH, IT o AT |
| Conocimiento común | Genera regla reusable para todos |
| Transferencia PH-IT-AT | Mejora relaciones entre perfiles |
| Caleidoscópico | Revela patrón, tensión o posibilidad emergente |

### 11.2 Columna recomendada para registro de deuda

```text
retorno_sistemico:
  local / perfil_especifico / conocimiento_comun / transferencia_PH_IT_AT / caleidoscopico
```

### 11.3 Dónde registrar primero el retorno

Regla aceptada:

```text
Primero en bitácora.
Luego en protocolo, taxonomía, índice, catálogo o mapa según corresponda.
```

---

## 12. Mini-rúbrica sistémica del ciclo de pago de deuda

Cada ciclo de pago de deuda debe evaluarse brevemente.

| Dimensión | Pregunta guía | Estado |
|---|---|---|
| Coherencia interna | ¿Las piezas actualizadas se contradicen? | fuerte / adecuada / débil |
| Trazabilidad | ¿Se puede seguir el linaje documental? | fuerte / adecuada / débil |
| Ubicación | ¿Las rutas canónicas están claras? | fuerte / adecuada / débil |
| Invocabilidad | ¿Los espejos funcionales indican modo de uso? | fuerte / adecuada / débil |
| Taxonomía | ¿Las categorías están actualizadas? | fuerte / adecuada / débil |
| Seguridad | ¿Los riesgos quedaron revisados o diferidos? | fuerte / adecuada / débil |
| Usabilidad humana | ¿Una persona puede seguir el procedimiento? | fuerte / adecuada / débil |
| Transferencia | ¿PH, IT, AT y Caleidoscopio pueden usar el resultado? | fuerte / adecuada / débil |
| Sostenibilidad | ¿Se evitó proliferación innecesaria? | fuerte / adecuada / débil |

---

## 13. Paquete de cierre técnico mínimo

Cada ronda de pago de deuda debe producir, como mínimo:

```text
1. Registro de deuda saldada y deuda diferida.
2. Instrucciones de actualización manual.
3. Lista de rutas canónicas.
4. Entrada de bitácora.
5. Entrada de changelog.
6. Actualizaciones de índice/tabla/catálogo cuando aplique.
7. Evaluación sistémica breve.
8. Revisión de seguridad breve.
9. ZIP consolidado con archivos MD.
```

---

## 14. Procedimiento humano paso a paso

```text
1. Reunir documentos maestros disponibles.
2. Verificar Tree y Tabla general.
3. Verificar Tabla específica de Fase 2.
4. Identificar documentos nuevos del bloque.
5. Clasificar deuda por tipo y semáforo.
6. Actualizar índice, tabla, catálogos y enlaces espejo.
7. Actualizar glosario/taxonomía si nacen términos nuevos.
8. Registrar modos de invocación.
9. Registrar alcance de retorno sistémico.
10. Anotar en bitácora.
11. Confirmar cambios en changelog.
12. Aplicar mini-rúbrica sistémica.
13. Aplicar revisión de seguridad longitudinal.
14. Crear paquete de cierre técnico.
15. Solicitar reflexión humana.
16. Confirmar deuda diferida legítima.
```

---

## 15. Deuda diferida legítima

Puede quedar diferida si depende de trabajo futuro real, por ejemplo:

```text
crear invocables maestros FAM-01 a FAM-15;
probar invocables en sesiones reales;
crear derivados solo por necesidad demostrada;
crear versión JSON;
crear tableros;
activar automatización gobernada;
activar agentes o multiagentes con gobernanza explícita;
crear guía humana N1 completa;
crear base específica PH semilla;
validar con usuarios externos;
publicar o convertir en REA.
```

Debe registrarse con justificación y no usarse como excusa para ocultar deuda saldable inmediata.

---

## 16. Aplicación inmediata a Ronda 2A

Este protocolo se aplicará a la deuda generada por:

```text
Convención de Base de Conocimiento Común;
Mapa Modular de Base de Conocimiento Común;
Base de Conocimiento Común robusta;
Plantilla de Documento Invocable como Artefacto Funcional;
Mapa de Familias de Documentos Invocables;
Formato Estandarizado de Invocable Maestro;
entradas de bitácora asociadas;
actualización estructural de rutas y sub-cartapacios;
actualización v0.2 de la Rúbrica Sistémica y Holística.
```

---

## 17. Deuda generada por este protocolo

| Deuda | Tipo | Prioridad | Acción requerida | Estado |
|---|---|---|---|---|
| Registrar protocolo en Índice Maestro | Relacional | Alta | Añadir entrada en actualización de índice | Abierta |
| Registrar protocolo en Tabla de Ubicación Fase 2 | Ubicación | Alta | Añadir fila con ruta canónica | Abierta |
| Registrar referencia lógica en Enlaces_Espejo | Invocación | Alta | Añadir a entrada consolidada Ronda 2A | Abierta |
| Añadir términos al glosario/taxonomía | Conceptual | Media-alta | deuda estructural, retorno sistémico, modo de invocación | Abierta |
| Anotar creación en bitácora | Memoria | Alta | Entrada de bitácora de pago de deuda | Abierta |
| Registrar cambio en changelog | Cierre | Media | Entrada de changelog Ronda 2A | Abierta |

---

## 18. Cierre

Este protocolo convierte el pago de deuda estructural en un proceso explícito, trazable, auditable y operable por humanos.

Debe aplicarse antes de crear los invocables maestros para asegurar que el ecosistema PH-IT-AT-Caleidoscopio avance con enlaces, relaciones, categorías, bitácoras, seguridad y continuidad actualizadas.

```text
Estado: listo para revisión humana y aplicación operativa.
Próxima acción: usar este protocolo para actualizar los documentos maestros en cascada.
```
