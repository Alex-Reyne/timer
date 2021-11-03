const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log(`\nSimple Timer:\n\nb: to beep.\n1-9: set timer in seconds.\n^+c: exit.\n`)

stdin.on('data', (key) => {
  
  if (key === '\u0003') {
    process.exit();
  }
  
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  if (key > 0) {
    console.log(`Setting timer for ${key} seconds...`)
    setTimeout(() => process.stdout.write('\x07'), key * 1000);
  }
  
});

// const prompt = require('prompt-sync')();

// const timer = function(input, callback) {
//   // const timerArr = [];

//   callback(input);
  
//   // for (const char of seconds) {
//   //   timerArr.push(Number(char));
//   // }

//   // for (const number of timerArr) {
//   //   if (number === 'NaN') {
//   //     null;
//   //   } else if (number > 0) {
//   //     setTimeout(() => process.stdout.write('\x07'), number * 1000);
//   //   }
//   // }

// };



// timer(prompt('Timer! '), setTimer => {
//   if (setTimer === 'b') {
//     process.stdout.write('\x07');
//   }

//   if (setTimer === )
// });