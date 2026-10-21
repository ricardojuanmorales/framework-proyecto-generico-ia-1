#!/usr/bin/env python3
"""Build traceable, reproducible-candidate offline bundle; not a stable release."""
from __future__ import annotations
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED

app = Path(__file__).resolve().parent.parent
repo = app.parent.parent
out = Path(os.environ.get("FW53_OUTPUT_DIR", "/tmp/fw53-candidate-artifacts")).resolve()
out.mkdir(parents=True, exist_ok=True)
dist = app / "dist"
assert (dist / "index.html").exists(), "Run: FRAMEWORK_V5_BASE_PATH=./ npm run build"
head = subprocess.check_output(["git", "-C", str(repo), "rev-parse", "HEAD"], text=True).strip()
short = head[:12]
package = json.loads((app / "package.json").read_text(encoding="utf-8"))
edition = "v0.5.3"
label = "Framework v5.3 evaluacion experimental, NO release estable"

with tempfile.TemporaryDirectory(prefix="fw53-bundle-") as tmp:
    bundle = Path(tmp) / "offline-app"
    shutil.copytree(dist, bundle)
    (bundle / "serve_offline.py").write_text("""#!/usr/bin/env python3
# Servidor estatico LOCAL, usando solo biblioteca estandar de Python.
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os
os.chdir(Path(__file__).resolve().parent)
ThreadingHTTPServer(("127.0.0.1", 4174), SimpleHTTPRequestHandler).serve_forever()
""", encoding="utf-8")
    (bundle / "LEER_PRIMERO.md").write_text(
        "# Paquete offline, candidato de evaluación v5.3\n\n"
        "**NO es v5.3.0 estable.** La aplicación incluida conserva "
        f"version {package['version']}; la edición documental es {edition}.\n\n"
        "Extrae el ZIP localmente. En este directorio ejecuta "
        "`python3 serve_offline.py` y abre http://127.0.0.1:4174 . "
        "Python sirve archivos locales; no requiere backend, cuenta ni IA remota. "
        "El navegador puede conservar proyectos en su almacenamiento local.\n\n"
        "Para verificar integridad: `sha256sum -c MANIFEST.sha256` "
        "(ejecutado desde la carpeta extraída). "
        "El documento fuente completo está en el ZIP de código que acompaña "
        "a este paquete de evaluación.\n\n"
        "Sin red externa no equivale a independencia de software previamente "
        "instalado: se necesita navegador y Python 3 para esta vía de acceso. "
        "No se ha verificado aún retorno TSR independiente ni paridad con "
        "cartapacio raíz físico Local_First.\n",
        encoding="utf-8",
    )
    (bundle / "RECORD.json").write_text(json.dumps({
        "object": "framework-offline-app",
        "classification": "CANDIDATO-PILOTO-EXPERIMENTAL",
        "source_commit": head,
        "original_app_version": package["version"],
        "documentary_edition": edition,
        "target_release_version": "5.3.0",
        "release_status": "NOT_RELEASED",
        "distribution": "standalone static files via local python http server",
        "external_services_required": False,
        "local_first_root_reconciled": False,
        "tsr_multicase_validated": False,
    }, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")

    def files_in(folder: Path):
        return sorted((p for p in folder.rglob("*") if p.is_file()), key=lambda p: p.relative_to(folder).as_posix())

    manifest_lines = []
    for file in files_in(bundle):
        digest = hashlib.sha256(file.read_bytes()).hexdigest()
        manifest_lines.append(f"{digest}  {file.relative_to(bundle).as_posix()}\n")
    (bundle / "MANIFEST.sha256").write_text("".join(manifest_lines), encoding="utf-8")

    archive = out / f"framework-v5.3-piloto-offline-app_{short}.zip"
    with ZipFile(archive, "w", compression=ZIP_DEFLATED, compresslevel=9) as z:
        for file in files_in(bundle):
            info = ZipInfo(file.relative_to(bundle).as_posix(), date_time=(1980, 1, 1, 0, 0, 0))
            info.compress_type = ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            z.writestr(info, file.read_bytes(), compress_type=ZIP_DEFLATED, compresslevel=9)
    assert ZipFile(archive).testzip() is None
    # Retain an extracted copy only for the CI isolated restore test.
    shutil.copytree(bundle, out / "restore", dirs_exist_ok=True)

source_zip = out / f"framework-v5.3-piloto-source_{short}.zip"
subprocess.run(["git", "-C", str(repo), "archive", "--format=zip", "--output", str(source_zip), "HEAD"], check=True)
assert ZipFile(source_zip).testzip() is None
sha_lines = [f"{hashlib.sha256(f.read_bytes()).hexdigest()}  {f.name}\n" for f in (archive, source_zip)]
(out / "SHA256SUMS").write_text("".join(sha_lines), encoding="utf-8")
(out / "INDEX.json").write_text(json.dumps({
    "label": label, "source_commit": head,
    "documentary_edition": edition, "app_version": package["version"],
    "stable_v5_3_0": False,
    "files": [{"name": p.name, "bytes": p.stat().st_size, "sha256": hashlib.sha256(p.read_bytes()).hexdigest()} for p in (archive, source_zip)]
}, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print("CANDIDATE_CREATED source="+head)
print((out / "INDEX.json").read_text(encoding="utf-8"))
