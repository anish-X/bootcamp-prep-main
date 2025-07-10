// YOUR CODE BELOW
const frequencyAnalysis = (input) => {
    let count = {};

    for(let i = 0; i < input.length; i++){
        if(count[input[i]]){
            count[input[i]] += 1;
        }else{
            count[input[i]] = 1;
        }
    }
    return count;
}