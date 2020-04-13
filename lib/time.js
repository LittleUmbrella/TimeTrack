/**
 *
 * @param entry
 * @param fs - this is for unit testing, allowing mocks
 */
function addTimeEntry(entry, filePath, fs = require('fs')) {
    const date = new Date();

    fs.appendFileSync(filePath, `\n${date.toLocaleDateString()} ${date.toLocaleTimeString()}` );
    fs.appendFileSync(filePath, `\n${process.argv[2]}`, "utf8");
}

module.exports = addTimeEntry;
