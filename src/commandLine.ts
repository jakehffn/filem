document.getElementById('command-line').addEventListener('keydown', (evt) => {
    var evt = (evt) ? evt : null;
    window.updateInputDir();

    if(evt.key === "Tab") {
        // Prevents tab from going to next element
        evt.preventDefault();

    } else if (evt.key === "Enter") {
        window.enterParse();

    } else if (evt.key === "Backspace") {
        // Needed so that proper tab completion can be done from backspace
        window.tabPrefix = '\\'

        if (window.inputDir === "C:\\") {
            evt.preventDefault();
        }
    } else {
        // Default value for no tab completion active
        window.tabPrefix = '\\'
    }
})

document.getElementById('command-line').addEventListener('keyup', (evt) => {
    var evt = (evt) ? evt : null;
    window.updateInputDir();

    if (window.inputDir.length < 3 || (window.inputDir.length == 3 && window.inputDir !== "C:\\")) {
        window.inputDir = "C:\\";
        (<HTMLInputElement>document.getElementById('command-line')).value = "C:\\";
    }

    if (evt.key === "Tab") {
        window.tabCompletion();

    } else {
        window.displayDir();
    }
})
