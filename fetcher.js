const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const saveFile = process.argv[3];


const getPage = function(cb) {
  request(url, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    
    fs.writeFile(saveFile, body, (err, data) => {
      if (!err) return cb(data)
        //console.log(`Downloaded and saved x bytes to ${saveFile}`);
        //process.exit();
      
    });

  //console.log('body:', body); // Print the HTML for the Google homepage.
  })
}



//getPage();

const getFileSize = function (fileToRead) {
  let stats = fs.statSync(fileToRead);
  let fileSizeInBytes = stats.size;
  console.log(fileSizeInBytes)
  return fileSizeInBytes;
}


//getFileSize('./index.html')
//console.log(saveFile)

getPage(saveFile => (
  console.log(`Downloaded and saved ${getFileSize(saveFile)} bytes to ${saveFile}`)
))

// if (fs.existsSync(saveFile)) {
//   getPage(saveFile => (
//     console.log(`Downloaded and saved ${getFileSize(saveFile)} bytes to ${saveFile}`)
//   ))
// }
