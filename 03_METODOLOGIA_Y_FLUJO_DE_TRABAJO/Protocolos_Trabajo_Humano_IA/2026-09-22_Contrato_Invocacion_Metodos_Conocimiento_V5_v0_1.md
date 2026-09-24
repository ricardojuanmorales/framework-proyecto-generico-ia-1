# Contrato de Invocación de Métodos y Conocimiento V5 v0.1

**Fecha:** 2026-09-22  
**Estado:** candidato Fase 2  
**Rama:** `fase2-operacionalizacion-v5`  
**Función:** permitir que personas, proyectos, la aplicación y la IA localicen y usen conocimiento pertinente sin conocer la estructura interna 00–21 ni activar perfiles innecesariamente.

---

## 1. Tesis

```text
necesidad
→ localizar
→ invocar
→ aplicar
→ producir evidencia
→ registrar aprendizaje
→ devolver al Framework cuando corresponda
```

Invocar no significa copiar documentos ni activar todo el ecosistema.

---

## 2. Qué puede invocarse

Un proyecto puede invocar, según necesidad:

- método;
- protocolo;
- guía;
- criterio;
- plantilla;
- taxonomía;
- Base de Conocimiento;
- gate;
- esquema;
- ejemplo;
- herramienta;
- documentación humana.

La unidad de invocación es funcional, no necesariamente un archivo individual.

---

## 3. Base Federada

La Base Común opera como federación lógica.

```text
índice común
→ fuente canónica
→ uso situado
```

El contenido permanece en su residencia semántica.

No se duplica dentro de cada perfil.

---

## 4. Entrada mínima de invocación

Para invocar conocimiento basta conocer:

```text
qué necesito resolver:
contexto:
perfil o perfiles activos:
N1-N4 relevante:
riesgo:
producto esperado:
```

No se exige conocer:

- ruta física;
- familia histórica;
- código documental;
- cartapacio;
- linaje completo.

El sistema puede resolver esas referencias.

---

## 5. Resultado de una invocación

La salida mínima debe indicar:

```text
objeto o conocimiento recomendado:
para qué sirve:
por qué aplica:
fuente canónica:
perfil propietario o común:
nivel N1-N4 aplicable:
riesgos o límites:
cómo usarlo:
qué evidencia debería producir:
```

---

## 6. Método invocable

Un método invocable:

- organiza capacidades existentes;
- tiene propósito y condiciones de uso;
- puede atravesar varios perfiles;
- no se convierte automáticamente en competencia;
- puede adaptarse al nivel N1–N4;
- debe declarar límites.

Ejemplo inicial validado:

```text
SDD
→ método invocable
→ probado en AI StoryLab 1
```

---

## 7. Conocimiento común vs específico

### Común

Se usa cuando:

- varios perfiles pueden necesitarlo;
- su función no depende de una única responsabilidad disciplinar.

### Específico

Se usa cuando:

- la responsabilidad epistemológica o práctica pertenece inequívocamente a PH, IT o AT.

Regla:

```text
usar conocimiento específico
!= transferir responsabilidad del perfil
```

---

## 8. Transferencia y activación

Si una invocación basta para continuar responsablemente:

```text
consultar
→ aplicar
→ registrar
```

Si la decisión requiere juicio propio de otra lente:

```text
invocación insuficiente
→ activar perfil
```

Esto conecta directamente con el Contrato de Orquestación.

---

## 9. N1–N4 e invocación

El mismo conocimiento puede ofrecer distinto andamiaje.

### N1
explicación + ejemplo + guía cercana.

### N2
plantilla + criterios + revisión.

### N3
integración + trazabilidad + adaptación autónoma.

### N4
gobernanza + auditoría + evolución + transferencia.

No se necesitan cuatro documentos distintos por defecto.

---

## 10. Semáforo de pertinencia

### Verde
Necesario para avanzar responsablemente.

### Amarillo
Útil, pero puede diferirse sin bloquear.

### Rojo
La situación requiere pausa, escalamiento o decisión humana antes de usar o continuar.

El semáforo clasifica pertinencia/riesgo, no calidad del conocimiento.

---

## 11. Registro mínimo de uso

Toda invocación material debe poder dejar:

```text
necesidad:
objeto_invocado:
fuente:
contexto:
uso:
resultado:
evidencia:
límites:
aprendizaje:
requiere_retorno: sí / no
```

Usos triviales no necesitan bitácora extensa.

---

## 12. Retorno al Framework

El aprendizaje regresa cuando:

- revela error o ambigüedad;
- mejora el método;
- aporta un caso reusable;
- identifica riesgo nuevo;
- demuestra una adaptación recurrente;
- cambia criterios;
- justifica nueva Base o derivado.

Regla:

```text
uso único
!= nuevo documento automático
```

Primero puede permanecer como evidencia o semilla.

---

## 13. Creación de conocimiento nuevo

Crear un nuevo objeto canónico solo cuando exista:

- necesidad recurrente;
- propósito diferenciado;
- usuario o contexto reconocible;
- evidencia de utilidad;
- residencia semántica clara;
- criterio de mantenimiento;
- relación con fuentes existentes.

Si no:

```text
registrar aprendizaje
> crear documento prematuro
```

---

## 14. Relación con la aplicación V5

La aplicación debe poder:

1. recibir una necesidad en lenguaje humano;
2. consultar el índice federado;
3. sugerir pocos objetos relevantes;
4. explicar por qué;
5. adaptar la explicación a N1–N4;
6. distinguir conocimiento común de específico;
7. advertir cuándo debe activarse otro perfil;
8. registrar el uso en el estado portable del proyecto.

El usuario no debe navegar manualmente el repositorio para encontrar conocimiento básico.

---

## 15. Relación con IA

La IA puede:

- buscar;
- resumir;
- comparar;
- sugerir;
- contextualizar;
- detectar contradicciones;
- proponer enlaces.

No puede:

- inventar fuentes;
- alterar la fuente canónica silenciosamente;
- declarar propiedad epistemológica sin base;
- convertir una sugerencia en obligación;
- sustituir revisión humana en decisiones críticas.

---

## 16. Estado portable

Campos mínimos:

```text
invocaciones:
  - id:
    necesidad:
    fuente:
    tipo:
    perfil_propietario:
    nivel:
    estado:
    resultado:
    evidencia:
    retorno:
```

---

## 17. Antipatrones

Evitar:

```text
copiar conocimiento común dentro de cada perfil
crear una Base por cada uso
obligar FAM-01…FAM-15
activar otro perfil para cada consulta
mostrar rutas internas al usuario como requisito
usar N1-N4 para multiplicar documentos
confundir invocación con canonización
confundir recomendación IA con decisión
```

---

## 18. Criterio de estabilidad para Fase 2

Este contrato queda suficientemente estable cuando:

- una persona nueva puede pedir conocimiento en lenguaje natural;
- la aplicación puede resolver la fuente canónica;
- una IA puede sugerir sin inventar;
- PH, IT y AT pueden usar conocimiento común sin apropiárselo;
- conocimiento específico puede consultarse sin transferir automáticamente responsabilidad;
- N1–N4 cambia el andamiaje, no multiplica innecesariamente artefactos;
- el uso puede registrarse y retornar aprendizaje al Framework.
