const path = require('path');
const fs = require('fs');

readdir = (dir, fn) => {
    fs.readdir(dir, function(err, f) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } else {
            fn(f);
        }
    })
}

module.exports = { readdir };