@echo off
echo [BATCH] Starting JSlither
:loop
   cls
   npm start
   echo -------------------------------------------------------
   echo [BATCH] JSlither Shutdown, waiting 15 seconds before a restart.
   timeout /t 15 > nul
   goto loop