import { coinFlips, countFlips } from "./modules/coin.mjs";

import minimist from "minimist";

const args = minimist(process.argv.slice(2));

args['number'];

const number = args.number;

let array = [];

if (typeof number === 'undefined') {
    array = coinFlips(1);
} else {
    array = coinFlips(number);
}

console.log(array);
console.log(countFlips(array));