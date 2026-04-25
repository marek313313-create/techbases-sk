@echo off
setlocal

cd /d "%~dp0"
echo Spustam server pre techbases.sk...
echo.

npm run dev

if errorlevel 1 (
  echo.
  echo Server sa nepodarilo spustit. Skontroluj, ci je nainstalovany Node.js a dependencies.
  pause
)
