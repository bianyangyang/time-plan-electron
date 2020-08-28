const { app, BrowserWindow, Menu, ipcMain } = require("electron");

let mainWindow;

app.on("ready", () => {
  Menu.setApplicationMenu(null);
  mainWindow = new BrowserWindow({
    frame: false,
    width: 1288,
    height: 780,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  const urlLocation = "http://localhost:3000";
  mainWindow.loadURL(urlLocation);
  mainWindow.webContents.openDevTools();
});

ipcMain.on("window-min", function () {
  mainWindow.minimize();
});
ipcMain.on("window-max", function () {
  if (mainWindow.isMaximized()) {
    mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
});
ipcMain.on("window-close", function () {
  mainWindow.close();
});
