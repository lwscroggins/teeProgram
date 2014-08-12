var fs = require('fs');
var prompt = require('prompt')
var input;
prompt.start();

var printTee = function() {
  prompt.get(['enterString'], function(err, result) {
    console.log(result.enterString)
    fs.writeFile('output.txt', result.enterString, function(err, result){
      if(err) throw err;
    });
  }); 
}

printTee();