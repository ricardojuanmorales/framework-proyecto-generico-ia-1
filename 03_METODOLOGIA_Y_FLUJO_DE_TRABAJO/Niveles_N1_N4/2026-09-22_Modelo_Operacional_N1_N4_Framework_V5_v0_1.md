# Modelo Operacional N1–N4 del Framework V5 v0.1

**Fecha:** 2026-09-22  
**Estado:** candidato Fase 2  
**Rama:** `fase2-operacionalizacion-v5`  
**Función:** definir una escala común de madurez operacional para proyectos, productos y autonomía sin convertir N1–N4 en fases del Framework.

---

## 1. Tesis

```text
N1–N4 = madurez operacional situada
!= fases del Framework
!= jerarquía disciplinaria
!= puntuación global
```

Los niveles describen **cómo opera algo en un contexto concreto**, no cuánto vale ni cuán sofisticado parece.

---

## 2. Escala común

| Nivel | Nombre | Lectura mínima |
|---|---|---|
| **N1** | Exploración guiada | Comprende y actúa con acompañamiento cercano; produce rastros iniciales. |
| **N2** | Producción asistida | Produce resultados acotados y verificables con apoyo estructurado. |
| **N3** | Integración avanzada | Integra capacidades, evidencia, trazabilidad y responsabilidad con autonomía significativa. |
| **N4** | Ecosistema gobernado | Sostiene operación compleja, continuidad, gobernanza, evolución y transferencia a escala. |

---

## 3. Qué se nivela

La activación V5 registra tres objetos principales:

### A. Proyecto

Pregunta:

> ¿Qué complejidad exige el problema y su contexto?

El nivel del proyecto orienta el andamiaje general.

### B. Producto

Pregunta:

> ¿Qué madurez demuestra el artefacto, resultado o sistema que se está produciendo?

Un mismo proyecto puede generar productos con niveles distintos.

### C. Autonomía

Pregunta:

> ¿Cuánto apoyo necesita la persona o equipo para actuar responsablemente?

La autonomía no equivale a experiencia profesional ni determina por sí sola el nivel del proyecto.

---

## 4. Nivel del usuario o equipo

Puede registrarse cuando sea útil para aprendizaje, acompañamiento o diseño pedagógico.

No es obligatorio en todos los proyectos.

```text
nivel de usuario
!= nivel de proyecto
!= nivel de producto
```

Esto evita convertir a la persona en objeto de clasificación innecesaria.

---

## 5. Regla de granularidad

Fase 2 define la escala.

Cada proyecto define su aplicación concreta.

Ejemplo:

```text
Proyecto: N2

Producto técnico PH: N3
Instrumento IT: N2
Mediación AT: N1
Autonomía del equipo: N2
```

No se exige igualdad artificial entre perfiles o productos.

---

## 6. Relación con PH, IT y AT

N1–N4 son comunes.

Cada perfil los expresa desde su responsabilidad propia.

### PH

La madurez aumenta en capacidad de:

- situar;
- diseñar;
- construir;
- verificar;
- proteger;
- documentar;
- mantener;
- evolucionar.

### IT

La madurez aumenta en capacidad de:

- formular;
- metodologizar;
- producir y valorar evidencia;
- analizar;
- gestionar incertidumbre;
- validar;
- transferir conocimiento.

### AT

La madurez aumenta en capacidad de:

- percibir;
- imaginar;
- configurar;
- crear;
- interpretar;
- cuidar;
- valorar;
- transformar y reactivar.

No se usa un perfil para calificar a otro.

---

## 7. Caleidoscopio

No tiene nivel independiente.

Cuando emerge, su madurez se interpreta desde:

- complejidad de la configuración;
- calidad de la relación entre lentes;
- trazabilidad de la emergencia;
- responsabilidad y gobernanza del conjunto.

```text
más perfiles
!= mayor nivel
```

---

## 8. Evidencia mínima por nivel

### N1

```text
propósito comprendido
+ actuación guiada
+ rastro inicial
+ riesgo básico reconocido
```

### N2

```text
resultado acotado
+ decisiones básicas registradas
+ evidencia verificable
+ controles proporcionales
```

### N3

```text
integración de capacidades
+ evidencia reproducible o justificable
+ trazabilidad
+ riesgo gobernado
+ continuidad
```

### N4

```text
ecosistema sostenible
+ gobernanza explícita
+ evolución
+ recuperación
+ múltiples responsabilidades
+ transferencia y reapertura
```

La forma exacta de la evidencia depende del perfil, el contexto y el riesgo.

---

## 9. Cómo se asigna un nivel

No por promedio.

No por número de herramientas.

No por usar IA.

No por volumen documental.

Se asigna por **patrón de evidencia suficientemente coherente** con el nivel declarado.

Regla:

```text
evidencia
+ gates
+ contexto
+ riesgo
+ juicio humano
→ nivel provisional
```

---

## 10. Estados posibles

Además del nivel, un objeto puede estar:

- exploratorio;
- en desarrollo;
- apto con observaciones;
- maduro para su alcance;
- requiere reapertura;
- bloqueado.

El estado responde:

> ¿Puede avanzar?

El nivel responde:

> ¿Con qué madurez está operando?

No son lo mismo.

---

## 11. Relación con gates

Los gates no “suben” de nivel automáticamente.

Su función es impedir avance irresponsable o señalar deuda.

Un producto N1 puede estar correctamente aprobado para su alcance.

Un producto N4 puede estar bloqueado.

---

## 12. Progresión

La progresión no es obligatoriamente lineal.

```text
N1 → N2 → N3 → N4
```

es una referencia de madurez, no un itinerario obligatorio.

Un proyecto puede:

- mantenerse en N2 porque es suficiente;
- tener componentes N1 y N3;
- retroceder;
- reabrirse;
- aumentar o reducir complejidad.

---

## 13. Regla de proporcionalidad

Mayor nivel implica mayor responsabilidad, no necesariamente mayor tecnología.

```text
N4
!= más automatización
!= más IA
!= más documentos
```

N4 significa que la complejidad existente puede gobernarse, mantenerse y evolucionar de forma responsable.

---

## 14. Salida mínima para el estado portable

El proyecto debe poder registrar:

```text
nivel_proyecto:
nivel_producto:
nivel_autonomia:
nivel_usuario: opcional

evidencia:
gates:
justificacion:
estado:
fecha_revision:
decision_humana:
```

---

## 15. Relación con la aplicación V5

La aplicación debe:

1. explicar N1–N4 de forma sencilla;
2. sugerir nivel inicial;
3. mostrar que la sugerencia es revisable;
4. permitir niveles distintos entre proyecto, producto y autonomía;
5. evitar puntajes globales;
6. registrar evidencia y cambios de nivel;
7. mostrar qué requiere más andamiaje o gobernanza.

---

## 16. Antipatrones

Evitar:

```text
N4 = mejor persona
N4 = mejor proyecto
N4 = usar agentes
todos los perfiles al mismo nivel
promedio universal
score único
subir por completar checklist
bajar nivel como castigo
```

---

## 17. Criterio de estabilidad para Fase 2

Este modelo queda suficientemente estable cuando:

- usuario y aplicación pueden explicarlo de la misma forma;
- PH, IT y AT pueden especializarlo sin contradicción;
- un proyecto puede declarar niveles distintos sin romper coherencia;
- gates y estados permanecen separados del nivel;
- la evidencia es proporcional;
- no exige complejidad innecesaria;
- puede serializarse en el estado portable del proyecto.
