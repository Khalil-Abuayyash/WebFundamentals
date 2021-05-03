function evenOdd(arr) {
    for(var i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 == 0 && arr[i+1] % 2 == 0 && arr[i+2] % 2 == 0) {
            console.log("Even more so!");
        } 
        if (arr[i] % 2 == 1 && arr[i+1] % 2 == 1 && arr[i+2] % 2 == 1) {
            console.log("That's odd!");
        }
    }
}

evenOdd([1,1,1,2,2,2,2,1]);