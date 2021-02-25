document.getElementById('path-finder').addEventListener('keyup', () => {
    let path = (<HTMLInputElement>document.getElementById('path-finder')).value;
    console.log(window.readdir(path))
})

