// YOUR CODE BELOW
const arrayFlattener = (array) => {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
             for(let j = 0; j < array[i].length; j++){
                newArray.push(array[i][j]);
            }
            break;
        }
            newArray.push(array[i]);
    }
    return newArray;
}

