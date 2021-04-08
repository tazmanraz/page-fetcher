const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const saveFile = process.argv[3];

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  fs.writeFile(saveFile, body, (err, data) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(`Downloaded and saved x bytes to ${saveFile}`);
      process.exit();
    }
  });
  
  
  console.log('body:', body); // Print the HTML for the Google homepage.
});