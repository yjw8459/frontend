/* eslint-disable */
const {
  app,
  BrowserWindow,
  Notification,
  ipcMain,
  Menu,
  Tray,
} = require("electron");
const path = require("path");
const shell = require("electron").shell;

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadURL("http://localhost:8080");

  const tray = new Tray(path.join(__dirname, "/assets/cloudTemplate.png"));

  const menu = Menu.buildFromTemplate([
    {
      label: "종료",
      type: "normal",
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setToolTip("트레이 아이콘!");
  tray.setContextMenu(menu);
}

app.whenReady().then(createWindow);

app.setAppUserModelId(process.execPath);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("notification", (event, arg) => {
  const dataItem = arg;

  const notification = new Notification({
    title: `Merge requests - ${dataItem.name}`,
    body: dataItem.web_url,
  });

  notification.show();

  notification.on("click", (event, arg) => {
    shell.openExternal(`${dataItem.web_url}/merge_requests`);
  });
});
