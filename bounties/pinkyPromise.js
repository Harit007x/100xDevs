class pinkyPromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;

        this.resolveHandlers = [];
        this.rejectHandlers = [];

        executor(value => this.resolve(value), reason => this.reject(reason));
    }

    resolve(value) {
        this.state = "fulfilled";
        this.value = value;

        this.resolveHandlers.forEach(handler => handler(this.value));
    }

    reject(reason) {
        this.state = "rejected";
        this.reason = reason;

        this.rejectHandlers.forEach(handler => handler(this.reason));
    }

    then(resolveHandler) {
        this.resolveHandlers.push(resolveHandler);

        return this;
    }

    catch(rejectHandler) {
        this.rejectHandlers.push(rejectHandler);
    }
}

function myTimeoutFn(n) {
    return new pinkyPromise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promise resolved")
        },n)
    });
}

async function main() {
    const res = await myTimeoutFn(2000)
    console.log("Res =", res)
}

main()