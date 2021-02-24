"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isMac = process.platform === 'darwin';
var template = [{
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
    { role: 'window', submenu: [{ role: 'minimize' }, { role: 'close' }] }, {
        role: 'help',
        submenu: [{
                label: 'Learn More',
                click: function () {
                    require('electron').shell.openExternal('https://electron.atom.io');
                }
            }]
    }
];
exports.default = template;
