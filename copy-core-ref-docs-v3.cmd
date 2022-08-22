@ECHO off
SETLOCAL

REM This currently points to NetCore folder but will need changing
SET VENDR_DIR=.\..\Vendr_v3
SET TARGET_FRAMEWORK=net6.0

:MENU1
CLS
ECHO.
ECHO ==============================
ECHO Enter the destination version folder to copy docs to
ECHO ==============================
ECHO eg. 2.0.0
ECHO.
SET /P DEST_VERSION=Type the version number then press ENTER:
GOTO BUILD



:BUILD
SET SOURCE_DOCS_DIR=%VENDR_DIR%\docs\output\%TARGET_FRAMEWORK%
SET TARGET_DOCS_DIR=%~dp0content\core\%DEST_VERSION%\reference

echo.
echo ==============================
echo Buid settings
echo ==============================
echo.
echo. Source docs directory:
echo %SOURCE_DOCS_DIR%
echo.
echo. Target docs directory:
echo %TARGET_DOCS_DIR%

echo.
echo ==============================
echo Clearing previous docs
echo ==============================
echo.
FOR /d %%i IN (%TARGET_DOCS_DIR%\*) DO ( rmdir "%%i" /s /q ) 
echo done!

echo.
echo ==============================
echo Copying docs from source project
echo ==============================
echo.
xcopy %SOURCE_DOCS_DIR%\ %TARGET_DOCS_DIR%\ /E
echo done!

echo.
echo ==============================
echo Fixing README links
echo ==============================
echo.
tools\rxrepl.exe -D "%TARGET_DOCS_DIR%" -O %TARGET_DOCS_DIR% -I *README.md -a .md -R -s "\[([^\]]*?)\]\(([^\)]*?)(?:\/README)?\.md\)" -r "[\1](\2/)" --no-backup
tools\rxrepl.exe -D "%TARGET_DOCS_DIR%" -O %TARGET_DOCS_DIR% -I *.md -a .md -R -s "\[([^\]]*)\]\(README\.md\)" -r "[\1](../)" -s "\[([^\]]*?)\]\(([^\)]*?)(?:\/README)?\.md\)" -r "[\1](../\2/)" --no-backup
echo done!

echo.
echo ==============================
echo Copying complete!
echo ==============================
echo.
GOTO END

GOTO MENU1
ENDLOCAL

:END
IF %ERRORLEVEL% NEQ 0 GOTO ERR
EXIT /B 0
:ERR
PAUSE
EXIT /B 1
