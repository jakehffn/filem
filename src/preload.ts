import { Titlebar, Color } from 'custom-electron-titlebar';
import files from "./util/files";
import cmd from 'node-cmd';

declare global {
    interface Window { 
        displayDir: any;
        process: any; 
    }
}

declare global {
    interface HTMLElement { 
        defaultValue: string;
        
    }
}

window.process = cmd.runSync('cd \\');

window.addEventListener('DOMContentLoaded', () => {
    new Titlebar({
        backgroundColor: Color.fromHex('#292828')
    })
    
    document.getElementById('path-finder').defaultValue = "C:\\";
})

window.displayDir = function(dir: any) {
    files.getDir(dir, function(f: any[]) {
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