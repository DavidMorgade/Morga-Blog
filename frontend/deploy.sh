#!/bin/bash

# Paso 1: Ejecutar npm run build
echo "Iniciando la construcción del proyecto..."
npm run build

# Verificar si npm run build fue exitoso
if [ $? -ne 0 ]; then
  echo "Error: Falló la construcción del proyecto."
fi

echo "Construcción completada."

# Configura tus credenciales y servidor aquí
USER="morgade"
SERVER="codigomorga.es"
REMOTE_DIR="/home/proyectos/frontend"


echo "Eliminando la carpeta dist en el servidor..."
ssh $USER@$SERVER "rm -rf $REMOTE_DIR/dist"

echo "Copiando la carpeta dist al servidor..."
scp -r dist/ $USER@$SERVER:$REMOTE_DIR

# Verificar si la copia fue exitosa
if [ $? -ne 0 ]; then
  echo "Error: Falló la copia de los archivos."
fi

echo "Copia completada con éxito."

