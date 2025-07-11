// YOUR CODE BELOW
const myForEach = (array, callbackFn) => {
    for(let i = 0; i < array.length; i++){
         callbackFn(array[i], i);
    }
}

