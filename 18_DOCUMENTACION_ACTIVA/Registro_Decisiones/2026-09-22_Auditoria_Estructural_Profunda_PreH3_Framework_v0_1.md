# Auditoría estructural profunda Pre-H3 · Framework Genérico V4.1.1

**Fecha:** 2026-09-22  
**Estado:** diagnóstico estructural / no canónico  
**Rama:** `integracion-ph-bases-fase2`  
**Propósito:** contrastar los candidatos Pre-Fase 2 con la arquitectura 00–21/99, las reglas de colocación documental, la semántica de niveles inferiores y el ciclo de vida documental antes de autorizar retorno a `main`.

---

# 1. Dictamen ejecutivo

La macroestructura `00–21 + 99` sigue siendo sólida y no requiere rediseño general.

El principal riesgo estructural se encuentra en niveles inferiores, donde a veces se mezclan:

1. función semántica;
2. tipo documental;
3. estado del ciclo de vida;
4. propiedad epistemológica;
5. residencia histórica.

El problema no es la existencia de esas dimensiones, sino tratarlas como si fueran equivalentes.

Regla central derivada:

```text
función
!= tipo documental
!= estado de ciclo de vida
!= propiedad epistemológica
!= residencia física
```

---

# 2. Lectura de la macroestructura

## 00
Control de la arquitectura documental, índices, reglas, versiones y mapas.

## 01–05
Fundamentos, arquitectura conceptual, metodología, gobernanza y perfiles.

## 06–17
Capacidades y dominios funcionales especializados.

## 18
Memoria operativa activa, decisiones en curso, cierres, bitácoras y continuidad.

## 19–20
Implementación/despliegue y mantenimiento/evolución.

## 21
Traducción y navegación humana.

## 99
Memoria histórica cerrada.

### Dictamen

La secuencia expresa correctamente:

```text
fundamento
→ arquitectura
→ método
→ gobernanza
→ capacidad/perfil
→ operación especializada
→ evidencia/evaluación
→ documentación activa
→ implementación
→ evolución
→ documentación humana
→ archivo
```

No se recomienda renumerar ni reemplazar la macroestructura.

---

# 3. Hallazgo crítico A — Caleidoscopio como residencia

Actualmente:

```text
05_COMPETENCIAS_Y_PERFILES/
├── Programador_Humanista/
├── Investigador_Transdisciplinario/
├── Artista_Transdisciplinario/
└── Caleidoscopio/
```

y dentro de `Caleidoscopio/` reside:

`Mapa_Base_Conocimiento_Comun_PH_IT_AT_v0_1.md`.

Esto entra en tensión con la arquitectura más reciente:

```text
Caleidoscopio != cuarto perfil
Caleidoscopio = propiedad emergente
```

### Riesgo

La residencia física hace que Caleidoscopio parezca:

- cuarto contenedor equivalente a PH/IT/AT;
- propietario de la Base Común;
- centro de integración.

### Recomendación

No eliminar precipitadamente `Caleidoscopio/`.

Reinterpretarlo y limitarlo a artefactos que describan:

- emergencia;
- configuraciones caleidoscópicas;
- resultados de recombinación;
- criterios de reconocimiento de emergencia.

La Base Común no debe ser propiedad física de Caleidoscopio.

**Severidad: alta.**

---

# 4. Hallazgo crítico B — “Base Común” como posible monolito incorrecto

La arquitectura histórica de Fase 2 tendió a imaginar una Base de Conocimiento Común centralizada.

Pero la macroestructura 00–21 ya distribuye conocimiento por función:

- metodología → 03;
- gobernanza → 04;
- perfiles → 05;
- IA → 09;
- flujo técnico → 10;
- investigación/evidencia → 13;
- evaluación → 15;
- seguridad → 16;
- mantenimiento → 20;
- documentación humana → 21.

### Deducción

La Base Común no necesita ser un gran almacén físico.

Puede ser principalmente:

```text
índice lógico
+ taxonomía
+ referencias canónicas
+ metadatos de invocación
```

sobre conocimiento que sigue viviendo en su cartapacio semántico.

### Recomendación

Redefinir:

```text
Base Común física
→ Base Común lógica/federada
```

Regla:

> conocimiento común debe vivir donde su función primaria lo sitúe; la Base Común lo indexa e invoca sin apropiárselo.

**Severidad: alta.**

---

# 5. Hallazgo C — Deuda histórica F2-BCC bajo PH

La Base histórica F2-BCC vive en gran medida bajo el Programador Humanista por su condición de perfil piloto.

Esto ya estaba reconocido como deuda de residencia.

La integración actual confirma que mantenerla como arquitectura activa produciría tres problemas:

1. PH aparentaría propiedad de lo común;
2. Fase 2 heredaría una taxonomía prediseñada;
3. residencia física podría confundirse con propiedad epistemológica.

### Recomendación

Tratar F2-BCC histórica como:

```text
antecedente de diseño
+ inventario de hipótesis
+ deuda histórica
```

No usarla automáticamente como arquitectura canónica de la nueva Fase 2.

**Severidad: alta.**

---

# 6. Hallazgo D — 18_DOCUMENTACION_ACTIVA es correcto para laboratorio, incorrecto como destino canónico de contenido rector

Los documentos B0–B5 y los candidatos PH/Base residen actualmente en `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/`.

Eso es correcto durante la experimentación.

Pero no todos deben permanecer allí después de H3.

### Regla de ciclo de vida

```text
18 = estado activo/proceso
no = residencia temática final por defecto
```

Un objeto que madura debe migrar o integrarse en su función primaria.

Ejemplos:

- método SDD → 03;
- decisión normativa → 04;
- refinamiento PH → 05/PH;
- taxonomía → 05/Taxonomias;
- evaluación/gate → 15;
- plan de evolución → 20.

**Severidad: media-alta.**

---

# 7. Hallazgo E — Delta PH no debe convertirse en nuevo estrato permanente

El `PH_Robustecido_Delta_Candidato` es útil como vehículo de transición.

No debe convertirse en una nueva capa arquitectónica permanente entre Fase 1 y Fase 2.

### Destino semántico de sus contenidos

- SDD como método invocable → referencia desde PH hacia 03.
- reversibilidad → Gobernanza_Perfil + relaciones aplicables.
- documentación operacional → C07.
- separación verificar/interpretar/autorizar → gobernanza H-M-IA y vocabulario común.
- transferencia por patrón/razón → Enlaces_Espejo / transferencia situada.

### Ciclo recomendado

```text
delta activo
→ incorporación distribuida
→ verificación
→ delta archivado como trazabilidad
```

**Severidad: media.**

---

# 8. Hallazgo F — Glosario común mínimo duplica una función ya existente

Ya existe:

`05_COMPETENCIAS_Y_PERFILES/Taxonomias/2026-06-05_Glosario_Centralizado_PH_IT_AT_v0_2.md`

y un protocolo de gestión de términos.

El nuevo glosario mínimo está bien ubicado semánticamente, pero no debe coexistir indefinidamente como segundo glosario rector.

### Recomendación

Usar el glosario mínimo como:

```text
delta semántico validado por práctica
```

y luego:

- reconciliar términos con el glosario existente;
- depurar términos históricos no útiles;
- producir una nueva versión única del glosario central;
- archivar/superseder versiones según reglas existentes.

**Severidad: media-alta.**

---

# 9. Hallazgo G — Un solo “Mapa mínimo de Bases” contiene dos funciones distintas

El candidato actual combina:

1. cómo debe crecer Fase 2;
2. qué es una Base de Conocimiento.

Estas funciones deberían separarse.

### Función metodológica

```text
cómo crece Fase 2
→ 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
```

### Función de navegación/conocimiento

```text
qué conocimiento existe, dónde vive y cómo se invoca
→ índice lógico gobernado por 00 + referencias semánticas
```

La parte específica de propiedad de perfil puede referenciarse desde 05.

### Recomendación

Separar “método de crecimiento” de “mapa de conocimiento”.

**Severidad: alta.**

---

# 10. Hallazgo H — 00 debe gobernar estructura, no contenido sustantivo

Una tentación posible sería trasladar toda Base Común a `00_CONTROL_MAESTRO/`.

Eso también sería incorrecto.

00 debe contener:

- índices;
- reglas;
- mapas;
- convenciones;
- manifest;
- control de versiones.

No debe convertirse en biblioteca temática.

### Regla

```text
00 sabe dónde está el conocimiento
00 no necesita poseer el conocimiento
```

**Severidad preventiva: media.**

---

# 11. Hallazgo I — semántica inferior necesita regla explícita

La arquitectura se beneficiaría de una regla estable para niveles inferiores.

## Propuesta

### Nivel 1 — cartapacio raíz
Responde:

> ¿Cuál es la función primaria de este objeto en el Framework?

### Nivel 2 — familia semántica
Responde:

> ¿Qué clase de función cumple dentro del cartapacio?

Ejemplo:

```text
03/
  Protocolos_Trabajo_Humano_IA/
  Secuencias_Fase_Por_Fase/
```

### Nivel 3 — objeto canónico/versionado
Responde:

> ¿Cuál es la unidad documental o artefacto concreto?

### Estado de ciclo de vida
No debe codificarse creando una jerarquía temática paralela.

Se expresa mediante:

- metadatos;
- versión;
- estado;
- 18 mientras está activo;
- 99 cuando está cerrado/archivado.

---

# 12. Regla de residencia canónica candidata

Para cualquier artefacto:

```text
1. identificar función primaria;
2. elegir cartapacio 00–21;
3. elegir familia semántica existente;
4. evitar subcarpeta nueva si la función ya existe;
5. mantener una sola fuente canónica;
6. crear referencias lógicas desde perfiles u otros índices;
7. registrar estado de ciclo sin confundirlo con propiedad;
8. archivar en 99 solo cuando el ciclo esté realmente cerrado.
```

---

# 13. Propuesta estructural para Pre-Fase 2

## 13.1 SDD

Canon metodológico:

`03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/`

PH lo invoca mediante Enlaces_Espejo.

No debe residir canónicamente como propiedad PH.

---

## 13.2 Base de Conocimiento común

Modelo recomendado:

```text
Base Común = federación lógica de fuentes canónicas
```

Componentes:

- índice maestro → 00;
- vocabulario/taxonomía → 05/Taxonomias;
- métodos → 03;
- gobernanza → 04;
- evaluación → 15;
- seguridad → 16;
- evolución → 20;
- guías humanas → 21.

No requiere una macrocarpeta nueva.

---

## 13.3 Conocimiento específico de perfil

Puede residir en:

`05_COMPETENCIAS_Y_PERFILES/<Perfil>/Perfil_Operativo.../Bases_Conocimiento/`

solo cuando su propiedad sea inequívocamente específica.

Si el contenido es común:

- se mueve o consolida en su ruta funcional;
- el perfil conserva referencia lógica.

---

## 13.4 Caleidoscopio

Debe contener únicamente objetos cuyo sujeto sea la emergencia caleidoscópica.

No Base Común general.

---

# 14. Implicación para H3

H3 debe permanecer **pausado**.

No porque los contenidos candidatos sean incorrectos, sino porque un merge inmediato consolidaría residencias provisionales como si fueran arquitectura final.

Antes de H3 se recomienda un bloque adicional:

```text
B4.5 — Reconciliación estructural
```

con cuatro productos:

1. mapa semántico de residencia de cada candidato;
2. conciliación del glosario mínimo con el glosario central existente;
3. separación de metodología Fase 2 vs índice lógico de conocimiento;
4. plan de corrección de deuda Caleidoscopio/Base Común/F2-BCC.

---

# 15. Dictamen final

## Macroestructura 00–21/99
**CONFIRMA.**

## Semántica de niveles inferiores
**REFINA.**

## Base Común histórica
**REABRE.**

## Caleidoscopio como contenedor de Base Común
**REUBICA.**

## Uso de 18 como laboratorio
**CONFIRMA**, pero requiere migración antes de canonización.

## Glosario mínimo paralelo
**REFINA / consolidar, no duplicar.**

## H3
**PAUSAR hasta reconciliación estructural.**

---

# 16. Principio sistémico resultante

```text
la arquitectura física debe seguir la función
la función no debe inferirse de la residencia histórica
el estado de trabajo no debe convertirse en propiedad
lo común se referencia; no necesita un centro propietario
la emergencia no debe convertirse en contenedor
```
