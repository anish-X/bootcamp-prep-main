// YOUR CODE BELOW
const deeperCopy = (array) => {
            let deepCopied = [];

    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            for(let j = 0; j < array[i].length; j++){
                deepCopied.push(array[i]);
            }
        }else{
            deepCopied.push(array[i]);

        }
    }
    return deepCopied;
}

console.log(deeperCopy(['apples', ['bananas', 'citrus']]));