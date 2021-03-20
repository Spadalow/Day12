function sumFibonacci(num) {
    var n1 = 0;
    var n2 = 1;
    var makelele = 0;

    while (n2 <= num) {
        if (n2 % 2 !== 0) {
            makelele += n2;
        }
        n2 += n1;
        n1 = n2 - n1;
    }
    return makelele;
}

console.log(sumFibonacci(20));
module.exports = sumFibonacci; 