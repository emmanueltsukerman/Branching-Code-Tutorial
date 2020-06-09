
function getData(data, callBack){
    setTimeout(() => {
        callBack(data);
    }, 1000);
}


var getData10 = makeThunk(getData, 10);
var getData30 = makeThunk(getData, 30);

getData10(function(num1){
    var x = num1 + 1;
    getData30(function(num2){
        var y = num2 + 1;
        var getAnswer = makeThunk(getData, 'The meaning of life is ' + (x + y));
        getAnswer(function(answer){
            console.log(answer);
        });
    });
});



function makeThunk(fn){
    var args = [].splice.call(arguments, 1);
    return function(cb){
        args.push(cb);
        fn.apply(null, args);
    }
}




