document.getElementById('command-line').addEventListener('keydown', (evt) => {

    var evt = (evt) ? evt : null;
    if(evt.key === "Tab") {
        const str = window.currentDir.split("\\").pop();

        
        // Prevents tab from going to next element
        evt.preventDefault();

        console.log(str);
    }
})

document.getElementById('command-line').addEventListener('keyup', (evt) => {
    window.currentDir = (<HTMLInputElement>document.getElementById('command-line')).value;

    window.displayDir();
})
