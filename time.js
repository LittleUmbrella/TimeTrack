#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const addTimeEntry = require('./lib/time');
const pathToTimeEntryLog = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], 'time.txt');

fs.stat(pathToTimeEntryLog, function(err, stat) {
    if(err == null) {
        console.log('File exists');
    } else if(err.code === 'ENOENT') {
        // file does not exist
        console.log(`File (${pathToTimeEntryLog}) DOES NOT exist. Creating...`);
        fs.writeFileSync(pathToTimeEntryLog, '');
    } else {
        console.log('Some other error: ', err.code);
        return;
    }
    addTimeEntry(process.argv[2], process.argv[3] || `${pathToTimeEntryLog}`);
});

