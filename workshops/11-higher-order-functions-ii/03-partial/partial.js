// YOUR CODE BELOW
const partial = (callbackFn, argumentA) => {
    return (argumentB) => {
        return callbackFn(argumentA, argumentB);
    }
}