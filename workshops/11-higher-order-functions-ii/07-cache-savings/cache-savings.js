// YOUR CODE BELOW
const cacheSavings = (callbackFn) => {
    let cache = {};
    return (arg) => {
        if (arg in cache) {
            return cache[arg]; 
        }
        let resultFn = callbackFn(arg)
        cache[arg] = resultFn;
        return resultFn;
    }
   
}
