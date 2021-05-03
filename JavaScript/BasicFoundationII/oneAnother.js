function oneAnother(arr) {
    var thereisanodd = false;
    var odd;
    for (var i = 0; i < arr.length; i++) {
        if (i > 0) {
            console.log(arr[i]);
        }
        if(!thereisanodd) {
            if (arr[i] % 2 == 1) {
                odd = arr[i];
                thereisanodd = true;
            }
        }
    }
    return odd;
}
