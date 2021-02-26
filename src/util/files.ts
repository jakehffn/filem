import cmd from 'node-cmd';

const getDir = (dir, fn) => {
    cmd.run('cd '+ dir + ' && dir', function(err, f, stderr) {
        if (err) {
            return console.log('ERROR: ' + err);
        } else {
            console.log(f);
            fn(f.split('\n'));
        }
    });
}

const tabCompletion = (dir, fn) => {
    
}

const isDir = (dir) => {
    let command: string = 'IF exist "' + dir + '" (echo true) else (echo false)';
    console.log(command);

    let is: string = cmd.runSync(command).data;
    is = is.replace(/\s+/g, "");

    if (is === 'true') {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

export default { getDir, tabCompletion, isDir };