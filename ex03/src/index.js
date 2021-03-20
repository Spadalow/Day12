function rangeOfNumbers(startN, endN) {

    if (startN === endN) {
        return [startN];

    } else if (startN > endN) {
        return "The starting number will always be less than or equal to the ending number";
    }
    else {
        const myArray = rangeOfNumbers(startN, endN - 1);
        myArray.push(endN);
        return myArray;
    }

}

console.log(rangeOfNumbers(5, 5));
module.exports = rangeOfNumbers;
