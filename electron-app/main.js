const path = require('path');
const { app, BrowserWindow } = require('electron');
const express = require('express');
const serverApp = express();
const PORT = 4000;
const frontendPath = path.join(__dirname, 'frontend_build');

serverApp.use('/', express.static(frontendPath));
serverApp.get('/_health', (req,res)=>res.send('ok'));

let server = serverApp.listen(PORT, ()=>{
  console.log('Backend serving frontend on', PORT);
});

function createWindow () {
  const win = new BrowserWindow({
    width: 1100,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  win.loadURL(`http://localhost:${PORT}`);
}

app.whenReady().then(()=>{
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
  if (server) server.close();
});