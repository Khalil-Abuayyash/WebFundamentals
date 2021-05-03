function alwaysHungry(arr) {
    var noFood = true;
    for(var i =0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            noFood = false;
        }
    }
    if(noFood) {
        console.log("I'm hungry");
    }
}

alwaysHungry(['tai', 'wer', 'qws', 'qwew']);