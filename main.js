"use strict";

const electron = require("electron");
var mainWindow = null;

electron.app.on("window-all-closed", () => {
  if (process.platform != "darwin") electron.app.quit();
});

electron.app.on("ready", () => {
  mainWindow = new electron.BrowserWindow({
    width: 1080, height: 600,
    useContentSize: true,
    resizable: false,
    // icon: `${__dirname}/icon.png`
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on("closed", () => { mainWindow = null; });
});
