/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Promise 1 resolved.")
            resolve("Promise 1 resolved.")
        }, 1000)
    })

}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Promise 2 resolved.")
            resolve("Promise 2 resolved.")
        }, 2000)
    })

}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Promise 3 resolved.")
            resolve("Promise 3 resolved.")
        }, 3000)
    })

}

function calculateTime() {
    const startTime = new Date()
    waitOneSecond()
    .then(()=> waitTwoSecond())
    .then(()=> waitThreeSecond())
    .then(()=> {
        const totalTime = (new Date() - startTime) / 1000
        console.log(`All promises got resolved in total ${Math.floor(totalTime)} seconds`)
    })
}

calculateTime()