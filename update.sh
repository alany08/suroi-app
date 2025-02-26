echo "Cloning git repository"
git clone https://github.com/HasangerGames/suroi suroi_source --depth=1
cd suroi_source
echo "Installing deps"
pnpm i
echo "Building client"
pnpm run build:client
echo "Copying client"
cp -r client/dist/* ../client/
echo "Cleaning up"
cd ..
rm -rf suroi_source
./build.sh
