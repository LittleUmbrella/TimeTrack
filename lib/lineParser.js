/**
 *
 * @param cb - function to call after parsing out each line of the file in filePath below
 * @param filePath
 * @param fs - this is for unit testing, allowing mocks
 * @param readline
 * @returns {Promise<void>}
 */
async function processLineByLine(cb, filePath, fs = require('fs'), readline = require('readline')) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in file stream will be successively available here as `line`.
        console.log(`Line from file: ${line}`);
        cb(line);
    }
}

module.exports = processLineByLine;
