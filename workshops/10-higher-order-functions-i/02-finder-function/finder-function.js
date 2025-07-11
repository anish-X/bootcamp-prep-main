// YOUR CODE BELOW

const finderFunction = (array, callbackFunc) => {
    for(let i = 0 ; i < array.length; i++){
        if(callbackFunc(array[i])){
            return i;
        }
    }
    return -1;
}
