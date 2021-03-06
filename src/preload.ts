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
        updateInputDir: any;
        updateClientInput: any;
    }
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
                let fileName = file[3];
                let node = document.createElement('p');
                node.classList.add('file')
                node.onclick = function() {
                    let newDir = window.dir;

                    if (newDir.slice(-1) === '\\') {
                        newDir += fileName;
                    } else {
                        newDir += '\\' + fileName;
                    }
                    
                    
                    window.inputDir = newDir;
                    window.updateClientInput(newDir);
                    window.displayDir();
                }
                node.appendChild(document.createTextNode(fileName));
                fileList.appendChild(node);
            });
        }) 
    })
}

window.tabCompletion = function() {
    if (window.tabPrefix === '\\') {
        window.tabPrefix = window.inputDir.split('\\').pop();
    }

    files.tabCompletion(window.tabPrefix, window.inputDir, window.dir, function(tabComplete: string) {
        window.updateClientInput(tabComplete);
        window.inputDir = tabComplete;
    })
}

// Given current input is a valid directory, add a slash if there is none
window.enterParse = function() {
    files.ifDir(window.inputDir, function() {
        if (window.inputDir.slice(-1) !== '\\'){
            let newDir = window.inputDir + '\\';
            window.updateClientInput(newDir);
            window.inputDir = newDir;

            window.tabPrefix = '\\';
        }
        
    })
}

window.updateInputDir = function() {
    window.inputDir = (<HTMLInputElement>document.getElementById('command-line')).value;
}

window.updateClientInput = function(newInput) {
    (<HTMLInputElement>document.getElementById('command-line')).value = newInput;
}

window.dir = 'C:\\';
window.inputDir = 'C:\\';
window.tabPrefix = '\\';
window.displayDir();