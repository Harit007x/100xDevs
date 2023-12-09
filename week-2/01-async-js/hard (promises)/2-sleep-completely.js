/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {
        // sorry the thread is in busy wait state, grab a coffee while you wait thanks...
    }
    console.log("Leaving sauna sleep...")
}

// Example usage: Sleep for 2 seconds
console.log('Going in sauna sleep...');
sleep(5000);
  