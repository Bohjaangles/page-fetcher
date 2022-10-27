const request = require('request');
const fs = require('fs');
const http = require('http');

let args = process.argv.slice(2);
const URL = args[0];
const PATH = args[1];

// console.log(args[0], 'arg0', args[1], 'arg1');


request(URL, (error, response, body) => {
  if (error) console.log('Error:', error);
  if (response) console.log('status: yes(thumbs up!)');
  fs.writeFile(PATH, body, error => {
    if (error) console.log('error:', error);
    console.log(`Downloaded and saved ${body.length} bytes to ${PATH}`);
  });
})


