#!/usr/bin/env node
const path = require('path');
const lineParser = require('./lib/lineParser');
const processLineByLine = require('./lib/lineProcessor');
const pathToTimeEntryLog = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], 'time.txt');

lineParser(processLineByLine, process.argv[3] || pathToTimeEntryLog);
