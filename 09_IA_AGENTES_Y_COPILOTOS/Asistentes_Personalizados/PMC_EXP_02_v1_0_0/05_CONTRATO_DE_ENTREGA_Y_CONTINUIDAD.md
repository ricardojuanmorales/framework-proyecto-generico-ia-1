# PMC-EXP-02 · Contrato común de entrega y continuidad

## 1. Expediente independiente por asistente

**Identificador recomendado:** `PMC_[slug]_2026-11-05_v0_1_CANDIDATO` (ajustar fecha real).  
**Contexto por caso:** nombre, propósito situado, operador/custodio, fecha, fuentes realmente accesibles, reservas.  
**Regla:** cuatro conversaciones independientes pueden operar en paralelo; no presuponga que un asistente ve entregas o conversaciones de otro.

## 2. Los seis productos lógicos

| Orden | Archivo textual | Contenido indispensable |
|---:|---|---|
| 1 | `PMC-01_PERFIL_MAESTRO.md` | Documento central con títulos originales 1–12 y remisiones por ID |
| 2 | `PMC-02_INVENTARIO_PATRIMONIO.md` | Todos los elementos identificables de diez clases, identificadores y cobertura |
| 3 | `PMC-03_FICHAS_CONCEPTUALES.md` | **Ficha por cada entrada**, con trece campos y fuentes/estados |
| 4 | `PMC-04_MAPA_RELACIONES.md` | Vínculos y rutas entre capacidades, métodos, procedimientos, herramientas, productos y autores |
| 5 | `PMC-05_FUENTES_Y_PENDIENTES.md` | Fuentes disponibles, evidencia, restricciones, incertidumbre, lagunas y necesidades documentales |
| 6 | `PMC-06_RESUMEN_Y_CONTINUIDAD.md` | Síntesis, tabla de cobertura, balance de calidad documental, continuidad y revisión humana |

**Salidas distribuidas:** un producto extenso puede tener partes `-PARTE-01`, `-PARTE-02` o volúmenes por familia, pero las partes se cuentan bajo un solo producto lógico y deben traer índice. **No truncar la documentación por comodidad ni rellenarla con texto repetido.**

## 3. Encapsulación de texto en la conversación

```text
INICIO ARCHIVO: PMC-01_PERFIL_MAESTRO.md
# ...
[contenido sustantivo]
FIN ARCHIVO: PMC-01_PERFIL_MAESTRO.md

PUNTO_DE_CONTROL
Asistente: [nombre]
Producto actual: [PMC-xx]
Última sección o ficha completada: [número o ID]
IDs creados hasta ahora: [conteos / rangos por clase]
Ítems pendientes: [secciones / fichas conocidas / clases]
Próximo punto exacto: [dónde continuar]
FIN_PUNTO_DE_CONTROL
```

**Si el GPT no puede producir archivos adjuntos:** copiar esos bloques como Markdown a archivos locales; no afirmar que un archivo físico existe por el simple hecho de mostrar un nombre. No descargar herramientas ni subir ZIP históricos a cada GPT.

## 4. Continuación durante respuestas muy largas

En **la misma conversación**, enviar simplemente:

> CONTINÚA DESDE EL PUNTO DE CONTROL

El asistente **no debe repetir lo ya terminado** y debe avanzar a la siguiente ficha/documento. Si la conversación alcanza límites y se requiere otra, aportar el `PUNTO_DE_CONTROL` y **los documentos/bloques previos necesarios**; un punto de control por sí solo puede no contener toda la información semántica perdida. No confiar en memoria automática entre chats.

## 5. Criterio de fin del Ciclo A

- `PMC-01`: doce secciones presentes y sustantivas según información accesible.
- `PMC-02`: diez clases examinadas, conteos y pendientes honestos.
- `PMC-03`: una ficha por ID, o diferencias expresamente consignadas como faltantes que deben resolverse antes de declarar completitud documental.
- `PMC-04`: relaciones relevantes, incluyendo puntos de decisión humana y productos.
- `PMC-05`: procedencia, evidencia, límites de acceso y permisos.
- `PMC-06`: resumen, conciliación numérica, estado `CANDIDATO`, firmas/decisiones humanas **pendientes**, condiciones para el retorno.

**No requeridos para el fin de A:** pruebas funcionales, certificaciones, ingesta total de la base de conocimiento, C0/C1, Python, PDF, archivos `SKILL.md` operativos, integración GitHub.

## 6. Calidad sin burocracia

Una verificación editorial concentrada al final revisa omisiones, coherencia de IDs, fuentes y límites; no introduce preguntas por cada habilidad. Los datos sin acceso permanecen abiertos. **La AHE del creador concierne a la aceptación documental del expediente y no convierte autodescripciones en pruebas de rendimiento.**

## 7. Entrega a este proyecto

Adjuntar **los archivos Markdown si existen** o pegar los bloques `INICIO/FIN ARCHIVO` en turnos sucesivos. Indicar nombre del asistente y versión. Después, **en una fase diferenciada**, incorporar bases de conocimiento autorizadas. El análisis del Framework preservará la primera autodocumentación y documentará las diferencias con las fuentes.
