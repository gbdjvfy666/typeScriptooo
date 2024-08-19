let month: string = 'hun';
let day: number = 9;

console.log(`Hello today is ${month} ${day}`);

function sendLogs(arg:string):string {
  console.log(arg);

  return `[log] ${arg}`;

  console.log('hello after return wtf')
}

sendLogs('test lOGG');