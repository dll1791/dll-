onmessage = function (e) {
    var i = 0;
    var n = e.data;
    var sum = 0;
    while (i <= n){
        sum += i;
        i++;
    }
    postMessage(sum);
};