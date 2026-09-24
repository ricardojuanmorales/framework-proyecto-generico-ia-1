# Auditoría Manual Dirigida · Framework V5 Pre-RC v0.1

**Fecha:** 2026-09-23  
**Rama:** `fase3-construccion-v5`  
**Estado:** candidata para ejecución pre-RC

## Propósito

Complementar las auditorías automáticas con revisión humana proporcional al alcance antes de promover una Release Candidate.

---

## 1. Recorrido humano completo

Probar manualmente:

```text
APRENDER
→ START / INTEGRATE / AUDIT
→ estado vivo
→ invocación
→ export
→ import
→ reapertura
```

Verificar:

- lenguaje comprensible;
- carga cognitiva razonable;
- estados visibles;
- errores entendibles;
- decisiones humanas claramente diferenciadas;
- no ambigüedad entre sugerencia y obligación.

---

## 2. Seguridad de importación

Casos mínimos:

- JSON inválido;
- schema inválido;
- campo desconocido;
- archivo demasiado grande;
- proyecto con invariantes inválidas;
- intento de sobreescritura;
- contenido textual malicioso;
- campos inesperados.

Esperado:

```text
rechazar seguro
+ no ejecutar
+ no persistir
+ mensaje humano
```

---

## 3. Exportación y privacidad

Revisar que el paquete exportado:

- no incluya secretos;
- no incluya datos no solicitados;
- preserve solo estado necesario;
- no publique automáticamente;
- muestre versión y procedencia;
- pueda entenderse fuera de la app.

---

## 4. Accesibilidad manual

Verificar:

- recorrido completo por teclado;
- foco visible;
- orden lógico;
- etiquetas comprensibles;
- contraste suficiente;
- lectura razonable con lector de pantalla;
- mensajes de error perceptibles;
- diseño usable en viewport móvil.

---

## 5. Preservación histórica

Verificar:

- V4 legacy existe;
- V5 no modifica V4;
- la diferencia entre versiones es visible;
- ninguna ruta legacy queda presentada como V5 actual.

---

## 6. Local-first

Confirmar en navegador:

- funciona sin login;
- no requiere backend;
- no hace llamadas de telemetría;
- no requiere IA externa;
- persiste localmente;
- informa fallback a memoria.

---

## 7. Portabilidad

Probar:

- export JSON;
- import del mismo paquete;
- export después de modificar estado;
- preservación de decisiones;
- preservación de evidencia;
- preservación de transferencias;
- preservación de N1–N4;
- preservación de procedencia INTEGRATE/AUDIT.

---

## 8. Readiness

Cada hallazgo se clasifica:

```text
PASS
PASS WITH RESERVATIONS
BLOCK
```

Solo BLOCK impide RC.

Deuda no crítica debe quedar documentada.
