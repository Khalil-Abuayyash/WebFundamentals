function secondLargest(arr) {
    if (arr.length < 2) return;
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    // console.log(max);
    var secMax = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < max && arr[i] > secMax) secMax = arr[i];
    }
    return secMax;
}