// YOUR CODE BELOW

const maxOfThree = (num1, num2, num3) => {
    let max = 0;
    if(num1 > num2){
        max = num1
    }else{
        max = num2
    }
    max = ( max > num3) ? max: num3;
    return max;
}