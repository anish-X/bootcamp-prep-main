// YOUR CODE BELOW

const myMnemonic = (...args) => {
    let word ="";

    for(let i = 0; i < args.length; ++i){
        const currentWord  = args[i];
        const currentCharacter = currentWord[0];

        word += currentCharacter;

    }
    return word;
}