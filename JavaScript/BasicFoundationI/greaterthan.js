function greaterthan(y, arr) {
    for (var i = 0, counter = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            counter++;
        }
    }
    return counter;
}