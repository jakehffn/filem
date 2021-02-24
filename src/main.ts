import { app, BrowserWindow, Menu } from 'electron'
import path from 'path'
import template from './menu'

let mainWindow: BrowserWindow

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		webPreferences: {
		preload: path.join(__dirname, 'src/preload.ts'),
		enableRemoteModule: true,
		nodeIntegration: false,
		}
	})
  
  	mainWindow.loadFile('index.html')

	// Open devTools
	mainWindow.webContents.openDevTools()

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
	if (mainWindow === null) createWindow()
})