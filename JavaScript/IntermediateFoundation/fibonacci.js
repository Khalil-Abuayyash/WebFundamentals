function fibonacci(num) {
    var base = [0,1];
    for (var i = 2; i <= num; i++) {
        base.push(base[i-2] + base[i-1]);
    }
    return base[base.length - 1];
}
