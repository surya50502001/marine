@echo off
echo ===================================================
echo Starting Aegis International Trading FZ LLC Website
echo ===================================================
echo Opening in default web browser...
start index.html
echo.
echo Launching local development web server at http://localhost:8000
python -m http.server 8000
pause
