#!/usr/bin/env node
const addTimeEntry = require('./lib/time');

addTimeEntry(process.argv[2], process.argv[3] || "/Users/tfarris/Documents/time.txt");
