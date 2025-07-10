// YOUR CODE BELOW

const evenAndOdd = (array) => {
    let oddArray = [];
    let evenArray = [];
    let newArray = [];

    for(let arr of array){
        if(arr % 2 === 0){
            evenArray.push(arr);
        }else{
            oddArray.push(arr);
        }
    }
    newArray.push(evenArray);
    newArray.push(oddArray);

    return newArray;
}