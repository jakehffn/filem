import customTitlebar from 'custom-electron-titlebar'
import files from "./util/files"

declare global {
    interface Window { readdir: any; }
}

declare global {
    interface HTMLElement { 
        defaultValue: any;
        
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex('#292828')
    })

    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type]);
    }
    
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