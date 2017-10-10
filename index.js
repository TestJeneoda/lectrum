function delayedLog(arr, delay) {
    // await until each array element is resolved 
    let accumulate = Promise.resolve();
    arr.forEach(element => {
        accumulate = accumulate.then(() => new Promise((resolve) => setTimeout(resolve, delay)))
        .then(() => console.log(element));
    });
};

delayedLog([1,2,3,4,5], 1000);
