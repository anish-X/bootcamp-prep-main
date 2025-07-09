// YOUR CODE BELOW
const zeroDarkThirty = (value) => {
    let valueString = value.toString();
    let noZeroValue = '';
    if(value === 0){
        return NaN;
    }
    for(let value of valueString){
        if(value == 0){
            continue;
        }
        noZeroValue += value;
    }

    return Number(noZeroValue);
}