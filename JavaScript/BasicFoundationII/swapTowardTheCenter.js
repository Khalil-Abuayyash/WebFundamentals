function swapTowardTheCenter(arr) {
    for (let i = 0; i < arr.length/2 ; i++) {
        if(i % 2 == 0) {
        temp = arr[i];
        arr[i] = arr[arr.length - i -1];
        arr[arr.length - i - 1] = temp;
        }
    }
    return arr;
}
var l = "l";
var cl = "cl";
var cr = "cr";
var r = "r";
console.log(swapTowardTheCenter([l,cl,l,cl,"center1","center2",cr,r,cr,r]));
console.log(swapTowardTheCenter([true,42,"Ada",2,"pizza"]));



