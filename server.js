import minimist from "minimist";
import { coinFlip } from "./modules/coin.mjs"

const args = minimist(process.argv.slice(2))

args["port"]

const port = args.port || 5000;

// Require Express.js
const express = require('express')
const app = express()

// Start an app server
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%').replace('%PORT%', port)
});

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
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
    const flips = manyflips(req.params.number)
	//Some
	//expressions
	//go
	//here
    result = coinFlip();
    res.json({"flip":result});
});

app.get('/app/flip/', (req, res) => {
    const flips = manyflips(req.params.number)
	//Some
	//expressions
	//go
	//here
});

app.get('/app/flip/call/heads', (req, res) => {
    const flips = manyflips(req.params.number)
	//Some
	//expressions
	//go
	//here
});

app.get('/app/flip/call/tails', (req, res) => {
    const flips = manyflips(req.params.number)
	//Some
	//expressions
	//go
	//here
});

