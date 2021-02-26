import cmd from 'node-cmd';

const getDir = (dir, fn) => {
    cmd.run('cd '+ dir + ' && dir', function(err, f, stderr) {
        if (err) {
            return console.log('ERROR: ' + err);
        } else {
            console.log(f);

            let formattedFiles = formatInDir(f.split('\n'));
            fn(formattedFiles);
        }
    });
}

const tabCompletion = (dir, fn) => {
    
}

const formatInDir = (inDir) => {
    inDir.splice(0, 4);

    inDir.pop();
    inDir.pop();
    inDir.pop();

    return inDir;
}

const ifDir = (dir, fn) => {
    let command: string = 'IF exist "' + dir + '" (echo true) else (echo false)';

    cmd.run(command, function(err, data, stderr) {
        data = data.replace(/\s+/g, "");
        if (data === 'true') {
            fn(dir)
        } else {
            console.log("ifDir(): Not a Dir");
        }
    })
}

export default { getDir, tabCompletion, ifDir };