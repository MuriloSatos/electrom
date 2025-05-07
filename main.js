//mains
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { configurarHandleSelectFile } = require('./handleUpload');
 
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
  });

app.whenReady().then(
function() {
    createWindow();
    configurarHandleSelectFile();
  
}
);
 
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
  });
 
 
function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
           
         }
    });
 
    win.loadFile('janelas/calc.html');
}

