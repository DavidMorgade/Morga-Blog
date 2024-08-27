echo 'Switching to branch main...'

git checkout main

echo 'Building app...'
npm run build

echo 'Deploying files to server...'
rsync -avz ./dist/* morgade@codigomorga.es:/home/proyectos/frontend/dist

echo 'Done!'
