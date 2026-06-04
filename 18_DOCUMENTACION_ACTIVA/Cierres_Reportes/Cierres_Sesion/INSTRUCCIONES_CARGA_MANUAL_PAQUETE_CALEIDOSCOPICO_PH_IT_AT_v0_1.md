# Instrucciones de Carga Manual — Paquete Caleidoscópico PH-IT-AT v0.1

**Código documental:** INSTRUCCIONES_CARGA_MANUAL_PAQUETE_CALEIDOSCOPICO_PH_IT_AT_v0_1  
**Fecha:** 2026-06-02  
**Paquete:** Paquete_Caleidoscopico_PH_IT_AT_Fase2_v0_1.zip  
**Destino:** Repositorio operativo Framework Genérico V4.1.1  
**Rama sugerida:** `main`  

---

## 1. Propósito

Este archivo indica dónde colocar manualmente los documentos del paquete caleidoscópico PH-IT-AT v0.1 en el repositorio local.

El paquete prepara la transición hacia Fase 2, entendida como construcción de la base de conocimientos común para los tres perfiles simétricos: Programador Humanista, Investigador Transdisciplinario y Artista Transdisciplinario.

---

## 2. Archivos incluidos y ubicación recomendada

| Archivo | Cartapacio recomendado |
|---|---|
| `Marco_Ruta_Caleidoscopica_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/00_Marco_Ruta/` |
| `Protocolo_Curaduria_Transdisciplinaria_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/01_Curaduria_Transdisciplinaria/` |
| `Modelo_Niveles_N1_N4_Caleidoscopio_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/02_Niveles_N1_N4/` |
| `Plantilla_Activacion_Proyecto_Caleidoscopico_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/03_Plantillas/` |
| `Plantilla_Lente_Latente_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/03_Plantillas/` |
| `Mapa_Base_Conocimiento_Comun_PH_IT_AT_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/04_Base_Conocimiento_Comun/` |
| `Bitacora_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_1.md` | `18_DOCUMENTACION_ACTIVA/Transferencia_Simetrica/Bitacoras/` |

---

## 3. Opción A — Copiar la estructura completa

El ZIP ya incluye la estructura de cartapacios recomendada. Puedes descomprimirlo y copiar las carpetas superiores directamente dentro de la raíz del repositorio local:

```bash
cp -R Paquete_Caleidoscopico_PH_IT_AT_Fase2_v0_1/05_COMPETENCIAS_Y_PERFILES .
cp -R Paquete_Caleidoscopico_PH_IT_AT_Fase2_v0_1/18_DOCUMENTACION_ACTIVA .
```

Si usas Finder o el explorador de archivos, copia estas dos carpetas dentro de la raíz del repositorio:

```text
05_COMPETENCIAS_Y_PERFILES
18_DOCUMENTACION_ACTIVA
```

El sistema debe fusionar carpetas existentes, no reemplazar todo el repositorio.

---

## 4. Opción B — Crear cartapacios y copiar manualmente

Desde la raíz del repositorio:

```bash
mkdir -p 05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/00_Marco_Ruta
mkdir -p 05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/01_Curaduria_Transdisciplinaria
mkdir -p 05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/02_Niveles_N1_N4
mkdir -p 05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/03_Plantillas
mkdir -p 05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica/04_Base_Conocimiento_Comun
mkdir -p 18_DOCUMENTACION_ACTIVA/Transferencia_Simetrica/Bitacoras
```

Luego copia cada archivo a su cartapacio correspondiente según la tabla de la sección 2.

---

## 5. Verificaciones antes del commit

Ejecutar desde la raíz del repositorio:

```bash
git status

find . -name ".DS_Store"

find . \( -name "AGENTS.md" -o -name "CLAUDE.md" -o -name "SKILLS.md" \)

find .github/workflows -type f 2>/dev/null
```

Resultado esperado:

```text
No deben aparecer .DS_Store.
No deben aparecer AGENTS.md, CLAUDE.md ni SKILLS.md.
No deben aparecer workflows operativos finales no autorizados.
```

---

## 6. Commit sugerido

```bash
git add 05_COMPETENCIAS_Y_PERFILES/_Marco_Triada_Caleidoscopica
git add 18_DOCUMENTACION_ACTIVA/Transferencia_Simetrica/Bitacoras/Bitacora_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_1.md

git commit -m "docs: agregar marco caleidoscopico PH IT AT fase 2 v0.1"

git push origin main

git status
```

---

## 7. Estado esperado al final

```text
working tree clean
```

---

## 8. Nota de gobernanza

Este paquete no crea:

```text
AGENTS.md
CLAUDE.md
SKILLS.md
workflows operativos finales
```

Los locks vigentes se mantienen. El paquete solo añade documentos rectores, plantillas, bitácora y mapa de base común.

---

## 9. Próxima acción después de subir el paquete

Crear el documento:

```text
Alcance_Operativo_Fase_2_Base_Conocimiento_Comun_PH_IT_AT_v0_1.md
```
