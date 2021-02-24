const isMac = process.platform === 'darwin'


const template: Electron.MenuItemConstructorOptions[] = [{
    label: 'Edit',
    submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' }
    ]
},
{
    label: 'View',
    submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
    ]
},
{ role: 'window', submenu: [{ role: 'minimize' }, { role: 'close' }] },
{
    role: 'help',
    submenu: [{
        label: 'Learn More',
        click() {
            require('electron').shell.openExternal('https://electron.atom.io');
        }
    }]
}
];

export default template;