# Estándar editorial de la tríada documental · v1.0

**Estado:** APROBADO por autoridad humana el 2026-10-21; gate de canonización autorizado.\
**Edición:** v1.0 del estándar documental transversal. **Ámbito:** modelos transferibles a distintos proyectos y versiones; la adopción al Framework v5.3.0 se registra por separado.
**Principio:** tres miradas autónomas; una identidad editorial; cero sustitución de juicio humano.


## 1. Objeto, alcance y estatus
Formalizar la coexistencia de **Memoria Histórica (MH)**, **Informe Ejecutivo Integral de Situación de Proyecto (IEISP)** y **Primer Informe de Evaluación Fractal (PIEF)** como instrumentos complementarios. El informe histórico del 10-X-2026 inspira el tratamiento visual y narrativo, **no** es una plantilla ni un informe de evidencia empírica. IEISP y PIEF v0.5.3 permanecen inalterados como cortes históricos.

## 2. Contrato común
- **Identidad:** título, clave, versión, autores/responsables, fecha de corte, objeto evaluado, alcance y estado.
- **Procedencia:** rutas canónicas, enlaces estables cuando existan, fuentes, fecha de consulta, responsables y límites.
- **Taxonomía de evidencia:** hecho documentado [F], hipótesis [H], interpretación [I], propuesta [P], no verificado [NV]. La evidencia tecnológica no equivale a validación educativa.
- **Gobernanza:** dictamen, reservas, deuda explícita, gate y aprobación humana documentada. Un documento generado es **candidato** hasta aprobación.
- **Capa humana:** relato de orientación, índice anotado, lectura por niveles, resúmenes visuales con texto alternativo.
- **Capa máquina/IA:** encabezado YAML, encabezados jerárquicos, tablas simples, identificadores y vínculos relativos verificables. El YAML no otorga autoridad automática.
- **Capa visual:** figura original o esquema de relaciones, leyenda, fuente, evidencia declarada y alternativa textual. La imagen no es evidencia empírica.
- **Protección editorial:** manuscritos bajo arbitraje y sus imágenes no se enlazan ni se replican a índices públicos; no se publican versiones completas sin verificar condiciones de la revista.

## 3. Funciones que no se sustituyen
| Instrumento | Pregunta rectora | Salida principal | Límite |
|---|---|---|---|
| MH | ¿Cómo llegamos y qué cambió? | Cronología, genealogía, interpretación y archivo | No decide por sí sola la aptitud del sistema |
| IEISP | ¿Dónde estamos y qué podemos decidir? | Estado integral, riesgos, evidencia y dictamen | No certifica relaciones interescala |
| PIEF | ¿Qué permanece y cambia entre escalas? | Mapa F0-F4, satélites, invariantes T1-T8 y TSR | No sustituye la lectura longitudinal |

## 4. Arquitectura editorial común
Portada significativa → resumen ejecutivo de una página → cómo leer → índice anotado → cuerpo propio de cada informe → matriz de evidencia/riesgos → memoria, decisión y continuidad → transparencia de IA → fuentes/registro de versiones.

**Principio de proporcionalidad:** los componentes se simplifican según caso; no añadir burocracia estética ni nuevos controles sólo para completar la plantilla.

## 5. Normas visuales
Paleta conceptual sobria (azul MH, verde IEISP, violeta PIEF) con significado en texto y no dependiente únicamente del color; figuras vectoriales SVG versionadas; tipografía legible; máximo una figura por problema conceptual; tablas que no rompan en exportación PDF/Word; enlaces de referencia persistentes; captions y atribución clara. Imágenes generativas deben etiquetarse como ilustrativas y divulgar su procedencia.

## 6. Distinción obligatoria entre modelo y aplicación
- **Modelo genérico:** reglas, preguntas, secciones y marcadores de posición. No lleva fecha de corte, versión del proyecto ni dictamen real.
- **Ejemplar aplicado:** informe producido para un objeto y momento identificables, con fuentes, evidencias, límites y decisión humana específica.
- **Registro de adopción:** versión del modelo, sistema receptor, fecha de aprobación conceptual, cambios y estado de publicación; nunca reemplaza el informe.
- Los informes históricos existentes se conservan y no se convierten retroactivamente en instancias de la versión v1.0.

## 7. Residencia semántica y dependencias
- 00: esta norma transversal, sólo tras gate humano.
- 07: tres **plantillas reutilizables**, una por instrumento, nunca informes ya ejecutados.
- 18: ejecuciones, memoria histórica, bitácoras de aprobación y deuda.
- 21: guías de uso y resúmenes visuales para lectores humanos (enlaces a fuentes, sin copiar canon).
- README: un enlace al portal de la tríada. No convertir el README en un informe.

## 8. Ciclo de producción y aprobación
1. Identificar problema, destinatario, corte y fuentes. 2. Aplicar plantilla sin sobredocumentar. 3. Conservar hechos y separar inferencias. 4. Crear resumen visual con alt-text. 5. Auditar rutas y trazabilidad. 6. Gate humano: aprobar, devolver o archivar. 7. Publicar una sola copia por lugar canónico. 8. Registrar versión y evolución sin sobrescribir cortes anteriores.

## 9. Criterios de aceptación del estándar
Las tres plantillas tienen propósito distinto, guías ejecutables, visuales interpretables, trazabilidad; enlaces comprobados; Word/MD concordantes; no se toca el material en revisión editorial. La aprobación conceptual y el gate humano de canonización constan el 2026-10-21. La vigencia en `main` se comprueba por el commit de fusión y la revisión de los enlaces publicados.

## 10. Antecedentes
Informe histórico v5.2.0 fechado 10-X-2026 (PDF proporcionado por autores); `IEISP_Framework_V0.5.3.md`, `PIEF_Framework_V0.5.3.md` y sus guías de 20-X-2026 en repositorio maestro. La propia evaluación cambia con nuevos datos, sin retroescribir los textos de corte.
