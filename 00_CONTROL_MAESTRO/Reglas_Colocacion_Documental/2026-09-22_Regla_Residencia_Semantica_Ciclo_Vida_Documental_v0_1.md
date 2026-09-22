# Regla de Residencia Semántica y Ciclo de Vida Documental v0.1

**Fecha:** 2026-09-22
**Estado:** candidato estructural estabilizado en rama
**Ámbito:** Framework Genérico V4.1.1
**Rama:** integracion-ph-bases-fase2

## 1. Propósito

Evitar que función, estado, propiedad epistemológica y residencia física se confundan durante la evolución del Framework.

## 2. Regla central

```text
función primaria
!= tipo documental
!= estado de ciclo de vida
!= propiedad epistemológica
!= residencia física
```

La residencia canónica debe seguir la **función primaria** del objeto.

## 3. Jerarquía semántica

### Nivel raíz 00–21
Responde:

> ¿Qué función primaria cumple este objeto dentro del Framework?

### Nivel inferior
Responde:

> ¿Qué familia semántica existente especializa esa función?

### Archivo canónico
Es la unidad concreta versionada.

### Estado de ciclo
Se expresa mediante metadatos, versión y ubicación transitoria cuando corresponda.

No debe inventarse una jerarquía temática paralela solo para representar estado.

## 4. Flujo de residencia

```text
objeto en trabajo
→ 18_DOCUMENTACION_ACTIVA cuando corresponda

objeto estabilizado
→ cartapacio semántico 00–21

objeto cerrado / retirado / histórico
→ 99_ARCHIVO_HISTORICO cuando corresponda
```

## 5. Regla de subcarpetas

No crear una subcarpeta porque un concepto sea nuevo.

Crear una subcarpeta solo cuando:

1. existe una función documental recurrente;
2. no existe familia semántica adecuada;
3. la nueva familia reduce ambigüedad estructural;
4. su creación queda registrada en mapa/tabla estructural.

## 6. Fuente única y espejos

```text
una fuente canónica
+ múltiples referencias lógicas
```

El conocimiento común debe vivir donde su función primaria lo sitúe.

Los perfiles y otros ámbitos lo invocan mediante referencias lógicas.

## 7. Base Común

La Base Común se trata como **federación lógica**, no como almacén físico monolítico.

```text
Base Común
=
índice federado
+ taxonomía común
+ referencias canónicas
+ metadatos de invocación
```

00 gobierna índices y reglas, pero no absorbe contenido sustantivo.

## 8. Caleidoscopio

Caleidoscopio no es cuarto perfil ni propietario de conocimiento común.

Su residencia debe limitarse a objetos cuyo sujeto primario sea:

- emergencia caleidoscópica;
- recombinación de lentes;
- configuraciones emergentes;
- criterios de reconocimiento de emergencia;
- resultados derivados de esa recombinación.

## 9. Conocimiento específico de perfil

Puede residir en:

`05_COMPETENCIAS_Y_PERFILES/<Perfil>/.../Bases_Conocimiento/`

solo cuando la especificidad de ese conocimiento dependa inequívocamente de la responsabilidad propia del perfil.

## 10. Criterio de decisión

Antes de crear o mover un objeto:

```text
¿Qué función primaria cumple?
¿Existe ya una familia semántica?
¿Quién posee responsabilidad epistemológica?
¿Dónde debe vivir la fuente canónica?
¿Qué referencias lógicas deben apuntar a ella?
¿Su ubicación actual refleja función o solo historia?
```

## 11. Compatibilidad

Esta regla complementa y refina los protocolos vigentes de colocación documental. No renumera 00–21/99 ni invalida la regla de fuente canónica única.
