$ErrorActionPreference = 'Stop'
$buildRoot = $PSScriptRoot
$pythonExe = Join-Path $buildRoot '../env/Scripts/python.exe'
if (-not (Test-Path -LiteralPath $pythonExe)) { throw 'Install requirements.txt in ../env first.' }
Push-Location $buildRoot
try {
    & $pythonExe -m PyInstaller --noconfirm --clean --onefile --windowed --name Task_Migrator --collect-all playwright --distpath release --workpath build source/desktop_entry.py
    if ($LASTEXITCODE -ne 0) { throw 'EXE build failed' }
    $previousBrowserPath = $env:PLAYWRIGHT_BROWSERS_PATH
    try {
        $env:PLAYWRIGHT_BROWSERS_PATH = Join-Path $buildRoot 'release/browsers'
        & $pythonExe -m playwright install chromium
        if ($LASTEXITCODE -ne 0) { throw 'Chromium installation failed' }
    } finally {
        $env:PLAYWRIGHT_BROWSERS_PATH = $previousBrowserPath
    }
} finally {
    Pop-Location
}
