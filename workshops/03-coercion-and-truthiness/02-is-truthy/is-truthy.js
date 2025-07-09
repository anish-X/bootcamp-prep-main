// YOUR CODE BELOW
const isTruthy = (value) => {
    if(value){
        return true;
    }else if(value === null){
        return `The ${value} value is falsey`;
    } else if(value === false){
        return "The boolean value false is falsey";
    }else if (value === 0){
        return "The number 0 is falsey (the only falsey number)";
    }else if(value === ''){
        return "The empty string is falsey (the only falsey string)";
    }else{
        return "undefined is falsey";
    }
}