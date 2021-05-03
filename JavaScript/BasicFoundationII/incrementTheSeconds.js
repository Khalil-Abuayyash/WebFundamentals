function incrementTheSeconds(arr) {
    for(var  i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            arr[i]++;
        }
        console.log(arr[i]);
    }
    return arr;
}
