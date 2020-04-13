const lineParser = require('./lib/lineParser');
const processLineByLine = require('./lib/lineProcessor');

lineParser(processLineByLine, "/Users/tfarris/Documents/time.txt");
