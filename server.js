
const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

args["port"]

const port = args.port || 5000;

// Require Express.js
const express = require('express')
const app = express()

// Start an app server
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
});

app.get('/app/', (req, res) => {
    // Respond with status 200
        res.statusCode = 200;
    // Respond with status message "OK"
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
});

app.get('/app/flips/:number', (req, res) => {
    const raw = coinFlips(req.params.number)
    const summary = countFlips(raw);
    res.status(200).json({raw, summary});
    res.type("text/plain")
});

app.get('/app/flip/', (req, res) => {
  const flip = coinFlip(req.params.number)
	res.status(200).json({flip})
  res.type("text/plain")
});

app.get('/app/flip/call/heads', (req, res) => {
  flips = flipACoin("heads")
	res.status(200).json(flips)
  res.type("text/plain")
});

app.get('/app/flip/call/tails', (req, res) => {
  flips = flipACoin("tails")
	res.status(200).json(flips)
  res.type("text/plain")
});

app.use(function(req, res){
  res.status(404).send('404 NOT FOUND')
	res.type("text/plain")
});

/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

 function coinFlip() {
    let rand = Math.random();
    if (rand < 0.5) {
      return "heads";
    } else {
      return "tails";
    }
  }
  
  /** Multiple coin flips
   * 
   * Write a function that accepts one parameter (number of flips) and returns an array of 
   * resulting "heads" or "tails".
   * 
   * @param {number} flips 
   * @returns {string[]} results
   * 
   * example: coinFlips(10)
   * returns:
   *  [
        'heads', 'heads',
        'heads', 'tails',
        'heads', 'tails',
        'tails', 'heads',
        'tails', 'heads'
      ]
   */
  
  function coinFlips(flips) {
    let array = [];
    for (let i = 0; i < flips; i++) {
      array[i] = coinFlip();
    }
    return array;
  }
  
  /** Count multiple flips
   * 
   * Write a function that accepts an array consisting of "heads" or "tails" 
   * (e.g. the results of your `coinFlips()` function) and counts each, returning 
   * an object containing the number of each.
   * 
   * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
   * { tails: 5, heads: 5 }
   * 
   * @param {string[]} array 
   * @returns {{ heads: number, tails: number }}
   */
  
  function countFlips(array) {
    let numHeads = 0;
    let numTails = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "heads") {
        numHeads++;
      } else {
        if (array[i] === "tails") {
          numTails++;
        }
      }
    }
    if (numHeads == 0) {
      return { "tails": numTails };
    } else {
      if (numTails == 0) {
        return { "heads": numHeads };
      } else {
        return { "heads": numHeads, "tails": numTails };
      }
    }
  }
  
  /** Flip a coin!
   * 
   * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
   * 
   * @param {string} call 
   * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
   * 
   * example: flipACoin('tails')
   * returns: { call: 'tails', flip: 'heads', result: 'lose' }
   */
  
  function flipACoin(call) {
    let actual = coinFlip();
    if (actual === call) {
      return { "call": call, "flip": actual, result: "win" }
    } else {
      return { "call": call, "flip": actual, result: "lose" }
    }
  }
