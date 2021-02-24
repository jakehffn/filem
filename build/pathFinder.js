"use strict";
document.getElementById('path-finder').addEventListener('keyup', function () {
    var path = document.getElementById('path-finder').value;
    console.log(window.readdir(path));
});
