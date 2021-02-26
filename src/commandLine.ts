document.getElementById('command-line').addEventListener('keyup', (evt) => {
    let path = (<HTMLInputElement>document.getElementById('command-line')).value;

    var evt = (evt) ? evt : null;
    if(evt.key === "Tab") {
        const str = path.split("\\").pop();
        evt.preventDefault();

        console.log(str);
    }

    window.displayDir(path);
})
