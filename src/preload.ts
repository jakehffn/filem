import { Titlebar, Color } from 'custom-electron-titlebar';
import files from "./util/files";
import cmd from 'node-cmd';

declare global {
    interface Window { 
        displayDir: any;
        currentDir: any; 
        currentDirs: any;
    }
}

declare global {
    interface HTMLElement { 
        defaultValue: string;
        
    }
}

window.currentDir = 'C:\\';

window.addEventListener('DOMContentLoaded', () => {
    new Titlebar({
        backgroundColor: Color.fromHex('#292828')
    })
    
    document.getElementById('command-line').defaultValue = "C:\\";
})

window.displayDir = function() {
    if (files.isDir(window.currentDir)) {
        files.getDir(window.currentDir, function(f: any[]) {
            let fileList = document.getElementById('files-container');
            fileList.innerHTML = '';

            f.forEach((file: string) => {
                let node = document.createElement('p');
                node.classList.add('file')
                node.appendChild(document.createTextNode(file));
                fileList.appendChild(node);
            });
            
            console.log(f);
        }) 
    }
}