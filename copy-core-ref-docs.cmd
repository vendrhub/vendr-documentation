@ECHO off
SETLOCAL

REM Parse command line arg if present
SET ARG1=%~1

REM If command line arg present, set the DEST_VERSION
REM otherwise, prompt the user
IF NOT "%ARG1%" == "" SET DEST_VERSION=%ARG1%
IF "%ARG1%" == "" SET /P DEST_VERSION=Please select the destination version:

SET DOCS_DIR=%~dp0content\docs\core\%DEST_VERSION%\reference

REM Clear previous docs
for /d %%i in (%DOCS_DIR%\*) do ( rmdir "%%i" /s /q ) 

REM Copy generated docs over
xcopy .\..\Vendr\docs %DOCS_DIR% /E

tools\rxrepl.exe -D "%DOCS_DIR%" -O %DOCS_DIR% -I *README.md -a .md -R -s "\[([^\]]*?)\]\(([^\)]*?)(?:\/README)?\.md\)" -r "[\1](\2/)" --no-backup

tools\rxrepl.exe -D "%DOCS_DIR%" -O %DOCS_DIR% -I *.md -a .md -R -s "\[([^\]]*)\]\(README\.md\)" -r "[\1](../)" -s "\[([^\]]*?)\]\(([^\)]*?)(?:\/README)?\.md\)" -r "[\1](../\2/)" --no-backup

ENDLOCAL

IF %ERRORLEVEL% NEQ 0 GOTO err
EXIT /B 0
:err
PAUSE
EXIT /B 1
