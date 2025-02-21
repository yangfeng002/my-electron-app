// console.log("Hello World!");

const { app, BrowserWindow } = require('electron')

// create new window method
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true
        // x: 0,
        // y: 0
    })

    // load external web page
    // win.loadURL('https://www.baidu.com') // 加载外部网页

    // 加载本地文件
     win.loadFile('index.html')

}

// app is ready
app.on('ready', () => {
  console.log("程序准备完毕了")
  // create new window
  createWindow()
  // app监听activate事件
  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// app is closed 关闭所有窗口时退出应用 process.platform 是操作系统 目前只支持 win32 (Windows), linux (Linux) 和 darwin (macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})