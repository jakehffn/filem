document.getElementById('path-finder').addEventListener('keyup', (evt) => {
    let path = (<HTMLInputElement>document.getElementById('path-finder')).value;

    var evt = (evt) ? evt : null;
    if(evt.key === "Tab") {
        const str = path.split("\\").pop();
        evt.preventDefault();

        console.log(str);
    }

    window.displayDir(path);
})
