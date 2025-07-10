// YOUR CODE BELOW
const myIncludes = (values, searchValue) => {
    for(let value of values){
        if(value === searchValue){
            return true;
        }
    }
    return false;
}