function negArr(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr[i] = arr[i] * -1;
        }
    }
    return newArr;
}