function sumOddFiveThousands() {
    for(var i = 1, sum = 0; i <= 5000; i += 2) {
        sum += i;
    }
    return sum;
}