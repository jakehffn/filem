const customTitlebar = require('custom-electron-titlebar')
const files = require("./util/files")

window.addEventListener('DOMContentLoaded', () => {
    new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex('#292828')
    })

    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type]);
    }
    
    document.getElementById("path-finder").defaultValue = "C:\\";
})

window.readdir = function(dir) {
    files.readdir(dir, function(f) {
        let fileList = document.getElementById("files-container");
        fileList.innerHTML = "";

        f.forEach(file => {
            let node = document.createElement("p");
            node.classList.add("file")
            node.appendChild(document.createTextNode(file));
            fileList.appendChild(node);
        });
        
        console.log(f);
    }) 
}