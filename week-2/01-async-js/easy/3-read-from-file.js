// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

function readAndPrintFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File contents:', data);

      // Simulate an expensive operation (e.g., a CPU-intensive task)

      console.log('After expensive operation');
    }
  });
}

function expensiveOperation() {
  // Simulate a CPU-intensive task by running a loop
  const start = new Date();
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  const end = new Date();
  console.log('Expensive operation took:', end - start, 'milliseconds');
}

// Example usage: Provide the path to the file you want to read
const filePath = 'path/to/your/file.txt';
readAndPrintFile('../easy/1-counter.md');
expensiveOperation();