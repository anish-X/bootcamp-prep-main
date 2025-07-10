let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW

const leetTranslator = (translate) => {

    let mappedValue = {};
    let leetValue = '';

    for(let i = 0; i < letters.length; i++){
        mappedValue[letters[i]] = leetChars[i];
    } 

    for(let i = 0; i < translate.length; i++){
        let char = translate.toLowerCase();

        let keyValue = Object.keys(mappedValue);
        
        if(keyValue.includes(char[i])){
            leetValue += mappedValue[char[i]];
        }else{
            leetValue += lowerCase;
        }
    }
    return leetValue;
}

