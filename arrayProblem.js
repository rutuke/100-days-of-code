// printReverse();
function printReverse(arr){
    for (var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
}
}

// isUniform();
function isUniform(arr){
    var first = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (first === arr[i]){
            return true;
        }
        else {
            return false;
        }
    }
}

// sumArray();
function sumArray(num){
    var result = 0;
    for(var i = 0; i < num.length; i++){
        var result = result + num[i];
        }
    return result;
}

// max();
function max(numArr){
    var first = numArr[0];
    var result = 0;
    for( var i = 1; i < numArr.length; i++){
        if ( first < numArr[i] ){
            result = numArr[i];
        } else {
             result = first;
         }
    }
    return result;
}
