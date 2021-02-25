import { Titlebar, Color } from 'custom-electron-titlebar'
import files from "./util/files"

declare global {
    interface Window { readdir: any; }
}

declare global {
    interface HTMLElement { 
        defaultValue: string;
        
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new Titlebar({
        backgroundColor: Color.fromHex('#292828')
    })
    
    document.getElementById('path-finder').defaultValue = "C:\\";
})

window.readdir = function(dir: any) {
    files.readdir(dir, function(f: any[]) {
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