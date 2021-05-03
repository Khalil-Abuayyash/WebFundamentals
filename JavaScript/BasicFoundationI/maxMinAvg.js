function maxMinAvg(arr) {
    var sum = 0;4
    var max = arr[0];
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    avg = sum / arr.length;
    return [max, min, avg];
}

console.log(maxMinAvg([1,1,1,2,2,2]));