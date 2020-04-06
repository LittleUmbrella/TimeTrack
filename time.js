const fs = require('fs');

//const timeFile = fs.openSync("~/documents/time.txt");
const filepath = "/Users/tfarris/Documents/time.txt";
const data = new Date().getDate()
fs.appendFileSync(filepath, `\n${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` );
fs.appendFileSync(filepath, `\n${process.argv[2]}`, "utf8");
