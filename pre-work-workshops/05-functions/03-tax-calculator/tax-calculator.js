// YOUR CODE BELOW

const taxCalculator = (amount, state) => {
    switch(state){
        case 'NY':
            return amount * 1.04;
        case 'NJ':
            return amount * 1.06625;
        default:
            return amount;
    }
}