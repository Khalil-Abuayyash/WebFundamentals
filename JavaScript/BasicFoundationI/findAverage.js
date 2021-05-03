function findAvg(arr) {
    var avg = 0;
    var sum = 0;
    for (var  i = 0; i < arr.length; i++) {
        sum += i;
    }
    avg = sum / arr.length;
    return avg;
}