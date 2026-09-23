# Mapa Rector Operacional · Fase 2 Framework V5 v0.1

**Fecha:** 2026-09-23  
**Estado:** candidato de cierre conceptual Fase 2  
**Rama:** `fase2-operacionalizacion-v5`

## 1. Propósito de Fase 2

Transformar el Framework desde una arquitectura documentada hacia una arquitectura **operable, invocable y portable**.

Fase 2 no construye todavía el producto V5.

Define los contratos que Fase 3 debe implementar.

---

## 2. Los siete contratos

### 1. Activación
Convierte un problema en configuración inicial START / INTEGRATE / AUDIT.

### 2. N1–N4
Define madurez operacional situada para proyecto, producto y autonomía.

### 3. Orquestación
Coordina PH, IT y AT sin forzar tríada ni Caleidoscopio.

### 4. Invocación
Permite encontrar y usar métodos y conocimiento desde la Base Federada.

### 5. Portabilidad
Define estado portable, portafolio, decisiones, transferencias y schemas.

### 6. Onboarding
Separa uso del Framework de evolución del Framework.

### 7. Release + MVP
Define la aplicación mínima y el contrato de publicación V5.0.0.

---

## 3. Secuencia operacional

```text
APRENDER
↓
ACTIVAR
↓
ORQUESTAR
↓
SITUAR N1–N4
↓
INVOCAR
↓
DISEÑAR / ACTUAR
↓
REGISTRAR
↓
EVALUAR / REABRIR
↓
EXPORTAR / CONTINUAR
↓
TRANSFERIR APRENDIZAJE
```

---

## 4. Superficie humana de la aplicación

```text
APRENDER
→ DISEÑAR
→ PORTAFOLIO
→ EXPORTAR
```

La simplicidad de interfaz no elimina la riqueza del modelo interno.

---

## 5. Dos paquetes

### Paquete de Proyecto
Semilla portable de un proyecto concreto.

### Paquete de Distribución Framework
Release autosostenida del Framework V5.

```text
proyecto portable
!=
distribución del Framework
```

---

## 6. N1–N4

N1–N4 pertenecen conceptualmente a Fase 2.

No son fases posteriores.

```text
N1 Exploración guiada
N2 Producción asistida
N3 Integración avanzada
N4 Ecosistema gobernado
```

Cada proyecto decide la granularidad operacional necesaria.

---

## 7. Perfiles y Caleidoscopio

```text
problema = centro
PH / IT / AT = lentes
Caleidoscopio = emergencia posible
```

Los perfiles pueden trabajar:

- individualmente;
- en pares;
- triádicamente.

Consultar conocimiento de otra lente no obliga a activarla.

---

## 8. Estado portable mínimo

Debe representar:

- identidad;
- problema/contexto/propósito;
- perfiles activos y latentes;
- N1–N4;
- métodos/conocimiento sugeridos e invocados;
- riesgos;
- gates;
- decisiones;
- evidencia;
- portafolio;
- transferencias;
- reaperturas;
- aprendizaje candidato.

---

## 9. Contratos de datos mínimos

```text
project.schema
→ valida manifest.json

framework-state.schema
portfolio.schema
decision.schema
transfer.schema
```

Evidence permanece inicialmente como entrada tipada del portafolio salvo necesidad técnica posterior.

---

## 10. Autoridad

```text
Framework propone
IA analiza y contrasta
máquina ejecuta y evidencia
humano decide y autoriza lo material
```

---

## 11. Cierre de Fase 2

Fase 2 se considera conceptualmente cerrada cuando:

- los siete contratos están aprobados;
- la auditoría interna confirma coherencia;
- este Mapa Rector queda aprobado;
- no existen contradicciones materiales pendientes.

No requiere:

- aplicación V5 construida;
- schemas JSON implementados;
- RC;
- pilotos oficiales.

Eso pertenece a Fase 3 y posteriores.

---

## 12. Entrada a Fase 3

Fase 3 recibe un único encargo:

> **convertir los contratos de Fase 2 en un producto autosostenido, verificable y publicable como Framework V5.0.0.**

Horizonte:

```text
Fase 2
CONTRATOS APROBADOS
↓
Fase 3
CONSTRUCCIÓN + VERIFICACIÓN
↓
v5.0.0-rc.1
↓
V5.0.0
↓
pilotos oficiales
↓
V5.x
```
