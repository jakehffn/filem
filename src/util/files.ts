import fs from 'fs';

const readdir = (dir: fs.PathLike, fn: (arg0: string[]) => void) => {
    fs.readdir(dir, function(err, f) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } else {
            fn(f);
        }
    })
}

export default { readdir };