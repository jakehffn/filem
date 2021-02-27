import cmd from 'node-cmd';

const getDir = (dir, fn) => {
    // Change to dir and get dir info
    cmd.run('cd '+ dir + ' && dir', function(err, f, stderr) {
        if (err) {
            return console.log('getDir(): ' + err);
        } else {
            let formattedFiles = formatInDir(f.split('\n'));
            fn(formattedFiles);
        }
    });
}

const tabCompletion = (inputDir, currentDir, fn) => {
    getDir(currentDir, function() {

    })
}

const formatInDir = (inDir) => {

    // Removes prefix info: Volume in drive, volume serial number, and directory
    inDir.splice(0, 5);

    // Removes suffix info
    inDir.pop(); // Newline
    let numDirs = inDir.pop();
    let numFiles = inDir.pop();

    let indexed = []

    inDir.forEach(f => {
        f = f.replace(/  +/g, ' ');
        let arr = f.split(' ');
        let result = [];
        
        result.push(arr.shift());
        result.push(arr.splice(0, 2).join(' '));
        result.push(arr.shift());
        result.push(arr.join(' '));

        indexed.push(result);
    });

    return indexed;
}

const ifDir = (dir, fn) => {
    // Checks if the directory exists
    let command: string = 'IF exist "' + dir + '" (echo true) else (echo false)';

    cmd.run(command, function(err, data, stderr) {

        // Removes extraneous white space
        data = data.replace(/\s+/g, "");
        if (data === 'true') {
            fn(dir)
        } else {
            console.log("ifDir(): Not a Dir");
        }
    })
}

export default { getDir, tabCompletion, ifDir };