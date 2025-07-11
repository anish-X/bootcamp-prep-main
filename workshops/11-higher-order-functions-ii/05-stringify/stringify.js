// YOUR CODE BELOW
const stringify = (callbackFn) => {
    return () => {
        let returnedValue = callbackFn();
        returnedValue = returnedValue.toString();
        return returnedValue;
    }
}