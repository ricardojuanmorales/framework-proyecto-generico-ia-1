# Arquitectura Técnica Mínima · Framework V5 v0.1

**Fecha:** 2026-09-23  
**Estado:** candidata · Fase 3  
**Rama:** `fase3-construccion-v5`  
**Origen metodológico:** Spec Rectora V5 + transferencia situada desde AI StoryLab 1  
**Función:** seleccionar una arquitectura mínima, reversible y verificable antes de implementar código funcional.

---

## 1. Decisión ejecutiva

Se propone una aplicación web local-first basada en:

```text
React
+ TypeScript
+ Vite
+ AJV
+ Vitest
```

con arquitectura por capas:

```text
domain
→ application
→ adapters
→ presentation
```

y persistencia:

```text
localStorage
→ fallback in-memory
```

para el MVP inicial.

---

## 2. Razón de selección

La selección no se basa en novedad tecnológica.

Se basa en seis criterios:

- arquitectura probada en AI StoryLab 1;
- ejecución completamente cliente;
- despliegue estático sencillo;
- bajo acoplamiento a proveedor;
- testing reproducible;
- reversibilidad suficiente.

---

## 3. Qué se transfiere de AI StoryLab

Se transfieren patrones:

- separación dominio / aplicación / adaptadores / presentación;
- repositorios intercambiables;
- persistencia local;
- fallback en memoria;
- export/import;
- validación runtime de schemas;
- importación tratada como no confiable;
- tests por capas;
- verificación reproducible;
- preservación legacy;
- auditorías de arquitectura, secretos y privacidad.

No se transfieren:

- dominio narrativo;
- objetos específicos de StoryLab;
- sus misiones;
- estructura pedagógica particular;
- schemas propios;
- UI específica.

```text
transferir capacidad y razón
!= copiar implementación
```

---

## 4. Estructura propuesta

```text
apps/framework-v5/
├── src/
│   ├── domain/
│   ├── application/
│   ├── adapters/
│   │   ├── browser/
│   │   ├── storage/
│   │   └── memory/
│   ├── presentation/
│   ├── schemas/
│   ├── tests/
│   └── main.tsx
├── tools/
├── public/
├── package.json
├── tsconfig.json
└── vite.config.ts
```

Esta topología es mínima y puede refinarse por evidencia.

---

## 5. Domain

Contiene conceptos puros del Framework.

Objetos iniciales probables:

- Project;
- FrameworkState;
- Portfolio;
- Decision;
- Transfer;
- ProfileActivation;
- MaturityState;
- Invocation;
- GateState.

Reglas:

- sin acceso al navegador;
- sin localStorage;
- sin React;
- sin GitHub;
- sin APIs externas.

---

## 6. Application

Contiene casos de uso.

Casos iniciales:

- createProject;
- integrateProject;
- auditProject;
- updateFrameworkState;
- recordDecision;
- recordEvidence;
- recordTransfer;
- exportProject;
- stageImport;
- importProject;
- reopenProject.

La capa application coordina.

No conoce detalles de UI ni almacenamiento concreto.

---

## 7. Adapters

Implementan dependencias externas.

### storage

Contrato inicial:

```text
ProjectRepository
```

Implementaciones:

- LocalStorageProjectRepository;
- InMemoryProjectRepository.

### browser

Responsabilidades:

- file download;
- local file selection;
- Web Crypto si se requiere checksum;
- entorno browser.

Regla:

```text
dominio
no depende
de adapters
```

---

## 8. Presentation

React actúa solo como capa de presentación.

Superficies principales:

```text
Learn
Design
Portfolio
Export
```

La UI llama casos de uso.

No implementa reglas de negocio directamente.

---

## 9. Persistencia local

Para el MVP:

```text
localStorage
```

se usa porque:

- elimina backend;
- mantiene control local;
- simplifica despliegue;
- permite continuidad básica;
- ya fue probado en AI StoryLab.

Si no está disponible:

```text
fallback
→ memoria
```

La UI debe mostrar claramente el modo de persistencia.

---

## 10. Criterio para evolucionar persistencia

No introducir IndexedDB u otra persistencia hasta demostrar necesidad por:

- volumen;
- archivos grandes;
- rendimiento;
- transacciones;
- múltiples proyectos complejos;
- límites reales de localStorage.

```text
necesidad demostrada
→ migración
```

no anticipación.

---

## 11. Schemas

Tecnología propuesta:

```text
JSON Schema
+ AJV
```

Schemas iniciales:

- project.schema.json;
- framework-state.schema.json;
- portfolio.schema.json;
- decision.schema.json;
- transfer.schema.json.

Deben existir:

- como archivos versionados;
- con validación runtime;
- con tests contractuales.

---

## 12. Importación

La importación se divide en dos etapas:

```text
archivo no confiable
→ staging / validación
→ confirmación humana
→ persistencia
```

Nunca:

```text
archivo
→ persistencia automática
```

---

## 13. Exportación

El exportador construye un paquete desde estado validado.

Debe:

- validar antes de exportar;
- incluir versiones;
- evitar secretos;
- no exportar datos excluidos;
- producir salida legible y portable.

---

## 14. Integridad

Checksums pueden incorporarse usando Web Crypto cuando aporten valor real a:

- roundtrip;
- paquete;
- detección de corrupción.

No son requisito ornamental.

---

## 15. Seguridad por diseño

Las primeras superficies con threat analysis obligatorio son:

- importación;
- exportación;
- almacenamiento local;
- schemas;
- migración;
- parsing de archivos.

Controles iniciales:

- validación estricta;
- límites de tamaño;
- parsing seguro;
- mensajes de error no sensibles;
- no ejecución de contenido importado;
- confirmación humana;
- no sobrescritura silenciosa.

---

## 16. Seguridad por defecto

La arquitectura no incluye por defecto:

- backend;
- autenticación;
- telemetría;
- analíticas;
- IA externa;
- publicación;
- sincronización cloud.

No se crean stubs activos para esas capacidades.

---

## 17. IA

La arquitectura base no requiere SDK de IA.

Si posteriormente se añade IA:

```text
AIService
```

debe entrar como puerto/adaptador opcional.

El dominio no dependerá del proveedor de IA.

---

## 18. GitHub

GitHub se usa para:

- repositorio;
- colaboración;
- CI;
- release;
- hosting estático.

No forma parte del contrato de dominio.

Un paquete V5 debe poder existir fuera de GitHub.

---

## 19. Preservación de V4

La aplicación actual V4 se preservará como snapshot histórico.

Propuesta conceptual:

```text
legacy/v4/
```

o ruta equivalente.

No se reutilizará `index.html` V4 como base técnica principal de V5.

Sí se reutilizarán patrones visuales y capacidades cuando aporten valor.

---

## 20. Desarrollo local

Objetivo:

```text
npm ci
npm run dev
npm run verify
```

El repositorio debe declarar versión de Node soportada.

Se recomienda mantener un rango LTS moderno y reproducible.

---

## 21. Testing

Vitest será la base de pruebas.

Capas mínimas:

- domain;
- schemas;
- application;
- adapters;
- presentation;
- integration.

Pruebas críticas:

- START;
- INTEGRATE;
- AUDIT;
- export;
- import;
- roundtrip;
- preservación semántica;
- errores seguros;
- fallback de persistencia.

---

## 22. Verificación reproducible

Objetivo de un único comando:

```text
npm run verify
```

que agregue gradualmente:

- typecheck;
- build;
- schema tests;
- unit tests;
- integration tests;
- architecture audit;
- secrets audit;
- privacy audit;
- accessibility checks;
- package checks.

---

## 23. CI

GitHub Actions ejecutará como mínimo:

```text
install
→ verify
```

antes de aceptar release candidate.

No se necesita DevOps complejo para el MVP.

---

## 24. Despliegue

V5 debe poder desplegarse como sitio estático.

Destino inicial recomendado:

```text
GitHub Pages
```

porque:

- ya existe ecosistema GitHub;
- no requiere backend;
- es reversible;
- simplifica publicación.

---

## 25. Accesibilidad

La arquitectura de presentación debe permitir:

- HTML semántico;
- navegación por teclado;
- foco visible;
- estados accesibles;
- contraste;
- tests automatizables;
- revisión manual.

No se fija biblioteca UI obligatoria en v0.1.

---

## 26. Dependencias

Regla:

```text
cada dependencia
debe justificar
qué complejidad elimina
```

Dependencias iniciales permitidas:

### runtime
- react;
- react-dom.

### desarrollo
- typescript;
- vite;
- vitest;
- ajv;
- ajv-formats;
- testing-library según necesidad.

No incorporar state manager, router, UI framework o backend SDK sin necesidad demostrada.

---

## 27. Reversibilidad

Decisiones fáciles de revertir:

- CSS;
- estructura de componentes;
- nombres de módulos.

Decisiones que requieren mayor cuidado:

- schemas;
- persistencia;
- formato de exportación;
- compatibilidad;
- migraciones.

Por ello, el primer vertical slice debe validar estas últimas temprano.

---

## 28. Primer vertical slice

El primer slice debe demostrar:

```text
START
→ crear proyecto mínimo
→ persistir localmente
→ visualizar estado
→ exportar
→ importar
→ preservar significado
```

No necesita todavía implementar toda la zona APRENDER ni Base Federada completa.

---

## 29. Gate H3-A

Antes de código funcional se requiere confirmar:

- React + TypeScript + Vite;
- arquitectura por capas;
- localStorage + memory fallback;
- JSON Schema + AJV;
- Vitest;
- GitHub Pages;
- primer vertical slice START → roundtrip;
- preservación V4 como legacy.

---

## 30. Siguiente movimiento

Después de aprobación:

```text
Arquitectura aprobada
→ schemas ejecutables
→ contratos TypeScript
→ scaffold técnico
→ vertical slice START
```
