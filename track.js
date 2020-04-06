const fs = require('fs');
const readline = require('readline');
const Decimal = require('decimal.js');

//const timeFile = fs.openSync("~/documents/time.txt");
const filepath = "/Users/tfarris/Documents/time.txt";

// const content = fs.readFileSync(filepath, 'utf-8');

async function processLineByLine(cb) {
    const fileStream = fs.createReadStream(filepath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        console.log(`Line from file: ${line}`);
        cb(line);
    }
}

var previousDate;
var currentDate;
var totalHours = new Decimal(0);
var currentState;
var reset = false;
processLineByLine(
    line => {
        switch (line.toLowerCase().trim()) {
            case "":
                return;
            case "work":
            case "support":
            case "admin": {
                if (previousDate) {
                    if (currentDate){
                        if ((new Date(currentDate)).getDay() == 1 /*Monday*/) {
                            if (reset === true) {
                                console.log(`hours for the week is ${totalHours}`);
                                totalHours = totalHours.minus(40);
                                reset = false;
                            }
                        } else {
                            reset = true;
                        }
                        const hours = (new Decimal(currentDate - previousDate)).dividedBy(1000).dividedBy(60).dividedBy(60);
                        console.log(`adding ${hours} hours to ${totalHours}`);
                        totalHours = totalHours.plus(hours);
                    }
                }

                console.log(`changing state to ${line}`);
                currentState = line;
                break;
            }
            case "break":
            case "start":
                previousDate = currentDate;
                console.log(`changing state to ${line}`);

                currentState = line;
                break;
            default:
                const d = Date.parse(line);
                if (!d) {
                    const hours = new Decimal(line.split(' ')[0]);

                    if (!hours) {
                        throw new Error(`unknown input: ${line}`);
                    }
                    console.log(`adding ${hours} hours to ${totalHours}`);
                    totalHours = totalHours.plus(hours);
                    return;
                }

                previousDate = currentDate;
                currentDate = d;

                break;
        }
    }
);
