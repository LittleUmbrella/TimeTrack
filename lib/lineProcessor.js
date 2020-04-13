const Decimal = require('decimal.js');

//const timeFile = fs.openSync("~/documents/time.txt");
const filepath = "/Users/tfarris/Documents/time.txt";

// const content = fs.readFileSync(filepath, 'utf-8');

let previousDate;
let currentDate;
let totalHours = new Decimal(0);
let currentState;
let reset = false;
function processLineByLine(line) {

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

module.exports = processLineByLine;
