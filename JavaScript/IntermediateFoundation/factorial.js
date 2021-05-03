function factorial(num) {
    var mult = 1;
    for (let i = 2; i <= num; i++) {
        mult *= i;
    }
    return mult;
}
