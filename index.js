var month = 'hun';
var day = 9;
console.log("Hello today is ".concat(month, " ").concat(day));
function sendLogs(arg) {
    console.log(arg);
    return "[log] ".concat(arg);
    console.log('hello after return wtf');
}
sendLogs('test lOGG');
