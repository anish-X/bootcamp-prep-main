// YOUR CODE BELOW


const chainReaction = (startingValue, arrayOfFunc) => {
    
    let returnValue = 0;
    for (let i = 0; i < arrayOfFunc.length; i++) {
        if (i === 0) {
            returnValue = arrayOfFunc[i](startingValue);
            continue;
        }
        returnValue = arrayOfFunc[i](returnValue);
    }
    return returnValue;
}
