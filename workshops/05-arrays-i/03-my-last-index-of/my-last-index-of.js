// YOUR CODE BELOW

const myLastIndexOf = (array, searchValue, startIdx) => {
    debugger;
    let lastValue = -1;
    if(startIdx === undefined){
        startIdx = 0;
    }

    for(let i = startIdx; i < array.length; i++){
        if(array[i] === searchValue){
            lastValue = i-startIdx;
        }
    }
    return lastValue;
}

