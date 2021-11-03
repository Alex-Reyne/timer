const prompt = require('prompt-sync')();

const timer = function(seconds) {
  const timerArr = [];
  
  for (const char of seconds) {
    timerArr.push(Number(char));
  }

  for (const number of timerArr) {
    if (number === 'NaN') {
      null;
    } else if (number > 0) {
      setTimeout(() => process.stdout.write('\x07'), number * 1000);
    }
  }

}

timer(prompt('Set timers: '));