function swap(arr) {
    if (arr.length < 2) {
        return "the size of array is less than 2";
    }
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}