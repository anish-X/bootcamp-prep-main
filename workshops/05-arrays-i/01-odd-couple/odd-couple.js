// YOUR CODE BELOW
const oddCouple =(array) => {
    let oddArray = [];
    for(let arr of array){
        if(arr % 2 === 0){
            continue;
        }else{
            oddArray.push(arr);
        }

        if(oddArray.length == 2){
            break;
        }
    }
    return oddArray;
}

