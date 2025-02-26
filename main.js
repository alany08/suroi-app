// Modules to control application life and create native browser window
const { app, BrowserWindow, session, protocol } = require('electron');
const path = require('node:path');

function createWindow () {
  protocol.interceptFileProtocol('file', (request, callback) => {
    const url = request.url.substring(7); // Remove 'file://' prefix
    const rootPath = path.join(__dirname, 'client'); // Treat 'client/' as root
    const filePath = path.join(rootPath, url === '/' ? 'index.html' : url);
    callback({ path: filePath });
  });
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    autoHideMenuBar: true
  })

  mainWindow.loadURL(`file:///index.html`);
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});