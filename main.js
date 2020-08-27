const { app, BrowserWindow, Menu } = require("electron");

let mainWindow;

app.on("ready", () => {
    Menu.setApplicationMenu(null)
    mainWindow = new BrowserWindow({
        frame: false,
        width: 1023,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    const urlLocation = "http://localhost:3000";
    mainWindow.loadURL(urlLocation);
    mainWindow.webContents.openDevTools()
});
