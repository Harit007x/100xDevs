let counter = 5

const countDown = setInterval(() => {
    console.log("Countdown =", counter)
    counter = counter - 1
    if(counter < 0){
        clearInterval(countDown);
    }
}, 1000);