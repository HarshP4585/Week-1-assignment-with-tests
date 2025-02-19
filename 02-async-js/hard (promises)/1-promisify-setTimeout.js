/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, n, "hello world")
    })
}

wait(5000).then(data => console.log(data))

console.log("This is test");
