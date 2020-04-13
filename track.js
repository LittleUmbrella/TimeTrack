#!/usr/bin/env node
const lineParser = require('./lib/lineParser');
const processLineByLine = require('./lib/lineProcessor');

lineParser(processLineByLine, process.argv[3] || "/Users/tfarris/Documents/time.txt");
