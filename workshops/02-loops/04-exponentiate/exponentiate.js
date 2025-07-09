// YOUR CODE BELOW
//(3,4)

const exponentiate = (base, power) => {
    let result = base;
    if(power === 0){
        return 1;
    }
    for(let i = 1; i < power; i++){
         result *= base;
    }
    return result;
}