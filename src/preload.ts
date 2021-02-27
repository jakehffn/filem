import { Titlebar, Color } from 'custom-electron-titlebar';
import files from "./util/files";

declare global {
    interface Window { 
        dir: any; 
        inputDir: any;
        inDir: any;

        displayDir: any;
        tabCompletion: any;
    }
}

declare global {
    interface HTMLElement { 
        defaultValue: string;
        
    }
}

window.dir = 'C:\\';
window.inputDir = 'C:\\';

window.addEventListener('DOMContentLoaded', () => {
    new Titlebar({
        backgroundColor: Color.fromHex('#292828')
    })
    
    document.getElementById('command-line').defaultValue = "C:\\";
})

window.displayDir = function() {
    files.ifDir(window.inputDir, function() {

        // If inputDir is valid, set as current dir and display
        window.dir = window.inputDir;

        files.getDir(window.dir, function(f: any[]) {
            let fileList = document.getElementById('files-container');
            fileList.innerHTML = '';

            f.forEach((file: string) => {
                let node = document.createElement('p');
                node.classList.add('file')
                node.appendChild(document.createTextNode(file[3]));
                fileList.appendChild(node);
            });
        }) 
    })
}

window.tabCompletion = function() {
    files.tabCompletion(window.inputDir, window.dir, function(tabComplete: string) {
        (<HTMLInputElement>document.getElementById('command-line')).value = tabComplete;
    })
}