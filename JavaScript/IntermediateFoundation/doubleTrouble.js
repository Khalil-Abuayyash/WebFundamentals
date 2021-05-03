function doubleTrouble(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        // newArr[i] = arr[i], newArr[i+1] = arr[i];
        newArr.push(arr[i],arr[i]);

    }
    return newArr;
}

console.log(doubleTrouble([4, "Ulysses", 42, false]));

