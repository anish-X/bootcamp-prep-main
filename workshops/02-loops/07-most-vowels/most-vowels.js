const mostVowels = (str) => {
    let cleanedStr = str.replace(/[.?]/g, '');
    let words = cleanedStr.split(' ');
    let maxVowelCount = 0;
    let maxVowelWord = '';
   
    for(let word of words){
        let count = 0;
        for(let i = 0; i < word.length; i++){
            if(word[i] === 'a' || word[i] === 'e' || word[i] === 
            'i' || word[i] === 'o' || word[i] ==='u'){
                count++;
            }
           
        }
        if(count > maxVowelCount && count > 0){
            maxVowelCount = count;
            maxVowelWord = word;
        }
    }
     return maxVowelWord;
}

