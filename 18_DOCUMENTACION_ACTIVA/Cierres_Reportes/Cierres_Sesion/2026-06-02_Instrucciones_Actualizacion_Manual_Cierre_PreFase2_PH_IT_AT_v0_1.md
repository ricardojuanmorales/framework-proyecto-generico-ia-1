# Instrucciones de Actualización Manual — Cierre Pre-Fase 2 PH-IT-AT v0.1

**Código documental:** 2026-06-02_Instrucciones_Actualizacion_Manual_Cierre_PreFase2_PH_IT_AT_v0_1  
**Versión:** v0.1  
**Fecha:** 2026-06-02  
**Estado:** Instrucciones de carga manual post-cierre  
**Ubicación recomendada:** `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion/`

---

## 1. Propósito

Guiar la actualización manual del repositorio local después del cierre de sesión pre-Fase 2, respetando la estructura auditada del Framework Genérico V4.1.1.

---

## 2. Regla estructural obligatoria

No crear cartapacios nuevos fuera de la estructura auditada sin una decisión explícita de arquitectura.

Convención vigente:

```text
Nivel raíz: NN_NOMBRE_EN_MAYUSCULAS
Sub-niveles: Nombre_En_PascalCase sin prefijo numérico
Archivos: YYYY-MM-DD_Nombre_Descriptivo_vX-Y.md o Nombre_Descriptivo.md
```

---

## 3. Ubicación de cada archivo

| Archivo | Cartapacio destino |
|---|---|
| `2026-06-02_Compendio_Cierre_Sesion_PreFase2_PH_IT_AT_v0_1.md` | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/` |
| `2026-06-02_Bitacora_Sesion_PreFase2_PH_IT_AT_v0_1.md` | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |
| `2026-06-02_Bitacora_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_2.md` | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/` |
| `2026-06-02_Registro_Gobernanza_PreFase2_PH_v3_0_0_v0_1.md` | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Gobernanza_Perfil/` |
| `2026-06-02_Registro_Decisiones_PreFase2_Caleidoscopico_DA49_DA56_v0_1.md` | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |
| `2026-06-02_Changelog_PreFase2_PH_IT_AT_v0_1.md` | `18_DOCUMENTACION_ACTIVA/Changelog/` |
| `2026-06-02_Primer_Continuidad_PreFase2_PH_IT_AT_v0_1.md` | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/` |
| `2026-06-02_Prompt_Activacion_Verificacion_Estado_y_Plan_Fase_2_PH_v0_1.md` | `00_CONTROL_MAESTRO/Prompts_Activacion/` |
| `2026-06-02_Instrucciones_Actualizacion_Manual_Cierre_PreFase2_PH_IT_AT_v0_1.md` | `18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion/` |
| `manifest_cierre_prefase2_ph_it_at_2026_06_02_v0_1.json` | `00_CONTROL_MAESTRO/Manifiestos/` |

Archivo generado previamente y pendiente de ubicación correcta:

| Archivo | Cartapacio destino |
|---|---|
| `Mapa_Ruta_Desarrollo_Perfiles_Simetricos_PH_IT_AT_Fases_1_6_v0_1.md` | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase/` |

---

## 4. Comandos sugeridos

Ejecutar desde la raíz del repositorio local.

### 4.1 Crear cartapacios si no existen

```bash
mkdir -p 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios
mkdir -p 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras
mkdir -p 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion
mkdir -p 18_DOCUMENTACION_ACTIVA/Registro_Decisiones
mkdir -p 18_DOCUMENTACION_ACTIVA/Changelog
mkdir -p 18_DOCUMENTACION_ACTIVA/Primers_Continuidad
mkdir -p 00_CONTROL_MAESTRO/Prompts_Activacion
mkdir -p 00_CONTROL_MAESTRO/Manifiestos
mkdir -p 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase
mkdir -p 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Gobernanza_Perfil
```

### 4.2 Copiar archivos desde la carpeta de descargas

Ajustar `~/Downloads/Cierre_Sesion_PreFase2_PH_IT_AT_2026_06_02_v0_1/` según el lugar donde se haya descomprimido el paquete.

```bash
SRC=~/Downloads/Cierre_Sesion_PreFase2_PH_IT_AT_2026_06_02_v0_1

cp "$SRC/2026-06-02_Compendio_Cierre_Sesion_PreFase2_PH_IT_AT_v0_1.md" \
18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/

cp "$SRC/2026-06-02_Bitacora_Sesion_PreFase2_PH_IT_AT_v0_1.md" \
18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/

cp "$SRC/2026-06-02_Bitacora_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_2.md" \
18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/

cp "$SRC/2026-06-02_Registro_Gobernanza_PreFase2_PH_v3_0_0_v0_1.md" \
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Gobernanza_Perfil/

cp "$SRC/2026-06-02_Registro_Decisiones_PreFase2_Caleidoscopico_DA49_DA56_v0_1.md" \
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/

cp "$SRC/2026-06-02_Changelog_PreFase2_PH_IT_AT_v0_1.md" \
18_DOCUMENTACION_ACTIVA/Changelog/

cp "$SRC/2026-06-02_Primer_Continuidad_PreFase2_PH_IT_AT_v0_1.md" \
18_DOCUMENTACION_ACTIVA/Primers_Continuidad/

cp "$SRC/2026-06-02_Prompt_Activacion_Verificacion_Estado_y_Plan_Fase_2_PH_v0_1.md" \
00_CONTROL_MAESTRO/Prompts_Activacion/

cp "$SRC/2026-06-02_Instrucciones_Actualizacion_Manual_Cierre_PreFase2_PH_IT_AT_v0_1.md" \
18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion/

cp "$SRC/manifest_cierre_prefase2_ph_it_at_2026_06_02_v0_1.json" \
00_CONTROL_MAESTRO/Manifiestos/
```

### 4.3 Copiar el mapa de ruta previamente descargado

```bash
cp ~/Downloads/Mapa_Ruta_Desarrollo_Perfiles_Simetricos_PH_IT_AT_Fases_1_6_v0_1.md \
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase/
```

Si el mapa ya fue copiado, omitir este paso.

---

## 5. Verificaciones antes del commit

```bash
git status

find . -name ".DS_Store"

find . \( -name "AGENTS.md" -o -name "CLAUDE.md" -o -name "SKILLS.md" \)

find .github/workflows -type f 2>/dev/null
```

Interpretación:

```text
.DS_Store: no debe aparecer.
AGENTS.md, CLAUDE.md, SKILLS.md: no deben aparecer.
Workflows finales: no deben aparecer salvo decisión explícita de gobernanza.
```

---

## 6. Añadir, confirmar y subir cambios

```bash
git add 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Compendios/2026-06-02_Compendio_Cierre_Sesion_PreFase2_PH_IT_AT_v0_1.md

git add 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/2026-06-02_Bitacora_Sesion_PreFase2_PH_IT_AT_v0_1.md

git add 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Bitacoras/2026-06-02_Bitacora_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_2.md

git add 05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo_v3_0_0/Gobernanza_Perfil/2026-06-02_Registro_Gobernanza_PreFase2_PH_v3_0_0_v0_1.md

git add 18_DOCUMENTACION_ACTIVA/Registro_Decisiones/2026-06-02_Registro_Decisiones_PreFase2_Caleidoscopico_DA49_DA56_v0_1.md

git add 18_DOCUMENTACION_ACTIVA/Changelog/2026-06-02_Changelog_PreFase2_PH_IT_AT_v0_1.md

git add 18_DOCUMENTACION_ACTIVA/Primers_Continuidad/2026-06-02_Primer_Continuidad_PreFase2_PH_IT_AT_v0_1.md

git add 00_CONTROL_MAESTRO/Prompts_Activacion/2026-06-02_Prompt_Activacion_Verificacion_Estado_y_Plan_Fase_2_PH_v0_1.md

git add 18_DOCUMENTACION_ACTIVA/Cierres_Reportes/Cierres_Sesion/2026-06-02_Instrucciones_Actualizacion_Manual_Cierre_PreFase2_PH_IT_AT_v0_1.md

git add 00_CONTROL_MAESTRO/Manifiestos/manifest_cierre_prefase2_ph_it_at_2026_06_02_v0_1.json

git add 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Secuencias_Fase_Por_Fase/Mapa_Ruta_Desarrollo_Perfiles_Simetricos_PH_IT_AT_Fases_1_6_v0_1.md
```

Commit sugerido:

```bash
git commit -m "docs: cerrar sesion prefase 2 y activar planificacion PH"
```

Push:

```bash
git push origin main
```

Verificación final:

```bash
git status
```

Resultado esperado:

```text
working tree clean
```

---

## 7. Recordatorio para la próxima sesión

Subir o tener disponibles:

```text
2026-06-02_Prompt_Activacion_Verificacion_Estado_y_Plan_Fase_2_PH_v0_1.md
2026-06-02_Primer_Continuidad_PreFase2_PH_IT_AT_v0_1.md
2026-06-02_Bitacora_Transferencia_Reversible_Fase_2_PH_IT_AT_v0_2.md
Mapa_Ruta_Desarrollo_Perfiles_Simetricos_PH_IT_AT_Fases_1_6_v0_1.md
Mapa_Estructura_Cartapacios_2026_06_02_v0_1.md
Compendio_Estado_Proyecto_Framework_Generico_V4_1_1_2026_06_02_v0_1.md
```
