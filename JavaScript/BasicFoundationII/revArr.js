function revArr(arr) {
    var temp;
    for (var i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - i -1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

console.log(revArr([2,4,6,1,3]));