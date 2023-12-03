// To calculate time taken between setTimeout() and InnerFunction() call
const delayedFunction = () => {
    const endTime = new Date();
    const duration = endTime - startTime;
    console.log(`Time taken: ${duration} milliseconds`);
}

const startTime = new Date();
setTimeout(delayedFunction, 1000);