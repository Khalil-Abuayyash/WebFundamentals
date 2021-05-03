function sumOneThousandsEven() {
    for(var i = 1, sum =0; i <= 1000; i++) {
        if(i % 2 == 0) {
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}