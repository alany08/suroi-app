// Modules to control application life and create native browser window
const { app, BrowserWindow, session, protocol } = require('electron');
const path = require('node:path');

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    autoHideMenuBar: true
  })

  mainWindow.loadURL(`https://suroi.io`);

  mainWindow.webContents.on('will-prevent-unload', (event) => {
    event.preventDefault();
  });

  return mainWindow;
}

app.whenReady().then(() => {
  var win = createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on('ready-to-show', () => { 
  })
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});