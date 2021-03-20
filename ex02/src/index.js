function myCounter(n) {

    if (n < 1) {
        return [];
    } else {
        const myArray = myCounter(n - 1);
        myArray.unshift(n);
        return myArray

    }
}

console.log(myCounter(10));
module.exports = myCounter; 