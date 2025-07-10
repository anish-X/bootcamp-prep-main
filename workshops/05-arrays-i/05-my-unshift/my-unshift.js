// YOUR CODE BELOW
const myUnshift = (array, value) => {
    let shiftedArray = [];
    if(value){
        shiftedArray.push(value);
    }
    for(let i = 0; i < array.length; i++){
        
        shiftedArray.push(array[i]);
    }
    return shiftedArray;

    // if(value){
    //     array.unshift(value);
    // }
    // return array;
}

