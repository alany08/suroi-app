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

  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.6834.159 Safari/537.36';
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });

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