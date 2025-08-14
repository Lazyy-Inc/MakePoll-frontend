cd MakePoll-frontend

git stash
git stash clear

# Met à jour le dépôt
git pull

# Installe exactement les dépendances
npm ci

# Build du projet
npm run build

# Supprime l'ancien contenu du dossier cible
rm -rf /static-site/MakePoll-frontend

# Recrée le dossier cible
mkdir -p /static-site/MakePoll-frontend

# Déplace le nouveau build
mv dist/* /static-site/MakePoll-frontend/
