var ChatbotModule = require('./chatboatModule');
var readline = require('readline');

var r1 = readline.createInterface(process.stdin, process.stdout);
r1.setPrompt("You==>");
r1.prompt();
r1.on('line', function(message) {
    console.log('Bot ==> '+ ChatbotModule.ChatbotReply(message));   
    r1.prompt();
}).on('close',function(){  
    process.exit(0);
});