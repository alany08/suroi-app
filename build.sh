echo "Updating deps"
npm audit fix
npm i
echo "Building"
npx electron-builder
echo "Built app is in dist/"