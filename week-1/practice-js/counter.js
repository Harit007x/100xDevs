let count = 0;

function updateCounter() {
  count++;
  console.log(`Counter: ${count}`);
}

// Update the counter every second
const intervalId = setInterval(updateCounter, 1000);

// Stop the counter after 5 seconds (for demonstration purposes)
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Counter stopped.');
}, 5000);
