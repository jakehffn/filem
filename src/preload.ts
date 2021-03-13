import { Titlebar, Color } from 'custom-electron-titlebar';
import files from "./util/files";

declare global {
    interface Window { 
        dir: any; 
        inputDir: any;
        inDir: any;
        tabPrefix: string;

        displayDir: any;
        tabCompletion: any;
        updateInDir: any;
        enterParse: any;
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
    if (window.tabPrefix === '') {
        window.tabPrefix = window.inputDir.split('\\').pop();
    }

    files.tabCompletion(window.tabPrefix, window.inputDir, window.dir, function(tabComplete: string) {
        (<HTMLInputElement>document.getElementById('command-line')).value = tabComplete;
        window.inputDir = tabComplete;
    })
}

window.enterParse = function() {
    files.ifDir(window.inputDir, function() {
        if (window.inputDir.slice(-1) !== '\\'){
            let newDir = window.inputDir + '\\';
            (<HTMLInputElement>document.getElementById('command-line')).value = newDir;
            window.inputDir = newDir;
        }
        
    })
}