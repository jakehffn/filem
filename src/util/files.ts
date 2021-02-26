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

export default { getDir };