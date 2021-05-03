function previousLengths(arr) {
    if (arr.length < 2) {
        return "the size of array is less than two";
    }
    for(var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}


console.log(previousLengths(["hello", "dojo", "awesome"]));
