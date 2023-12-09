// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter(seconds, callback) {
    if (seconds >= 0) {
      console.log(`${seconds} seconds remaining`);
      setTimeout(() => {
        counter(seconds - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  counter(5, () => {
    console.log('Countdown complete!');
  });