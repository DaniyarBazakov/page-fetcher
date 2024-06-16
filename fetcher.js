const needle = require('needle');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.log('Usage: node fetcher.js <URL> <Local File Path>');
  process.exit(1);
}

needle.get(`${url}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(`${filePath}`, body, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("file saved")
    }
  });
});

// url: http://www.google.com
// path: /home/labber/lighthouse/net/page-fetcher/data/test.txt