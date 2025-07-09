// YOUR CODE BELOW
const howEqual = (args1, args2) => {
    if(args1 === args2){
        return 'strictly';
    }else if (args1 == args2){
        return 'loosely';
    }else{
        return "not equal";
    }
}