// YOUR CODE BELOW
const veryOdd = (allTheNum) => {
    let oddNum = [];

    for(let i = 0; i < allTheNum.length; i++){
        if(allTheNum[i] % 2 !== 0){
            oddNum.push(allTheNum[i]);
        }
    }
    return oddNum;
}