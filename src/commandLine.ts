document.getElementById('command-line').addEventListener('keydown', (evt) => {

    var evt = (evt) ? evt : null;
    if(evt.key === "Tab") {
        // Prevents tab from going to next element
        evt.preventDefault();
    } else if (evt.key === "Enter") {
        window.inputDir = (<HTMLInputElement>document.getElementById('command-line')).value;
        window.enterParse();
    } else {
        window.tabPrefix = ''
    }
})

document.getElementById('command-line').addEventListener('keyup', (evt) => {
    var evt = (evt) ? evt : null;
    if (evt.key === "Tab") {
        window.tabCompletion();
    } else {
        window.inputDir = (<HTMLInputElement>document.getElementById('command-line')).value;
        window.displayDir();
    }

    
})
