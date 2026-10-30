@echo off
title Moonlight App Store Runner
color 0b

echo ========================================================
echo       MOONLIGHT APP STORE - LAUNCHER
echo ========================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Node.js found. Starting Moonlight Web Server...
    start "" http://localhost:3000
    node server.js
) else (
    where python >nul 2>nul
    if %ERRORLEVEL% equ 0 (
        echo [INFO] Python found. Starting Python server on port 3000...
        start "" http://localhost:3000
        python -m http.server 3000
    ) else (
        echo [INFO] Opening Moonlight App Store directly in your default browser...
        start "" "%~dp0index.html"
    )
)

pause
