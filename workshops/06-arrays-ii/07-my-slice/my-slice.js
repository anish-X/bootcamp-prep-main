// YOUR CODE BELOW
const mySlice = (originalArray, startIdx, endIdx) => {
    debugger;
    let afterSliced = [];

    if(startIdx === undefined && endIdx === undefined){
        return originalArray;
    }

    if(startIdx < 1 && endIdx === undefined){
            startIdx *= -1; 
    }

    
    for (let i = startIdx; i < originalArray.length; i++) {
        if(endIdx === undefined){
            endIdx = originalArray.length;
        }
        if(endIdx < 1){
            endIdx = originalArray.length - endIdx -2;
        }
        if (i < endIdx) {
            afterSliced.push(originalArray[i]);
        }
        
    }
    return afterSliced;
}

