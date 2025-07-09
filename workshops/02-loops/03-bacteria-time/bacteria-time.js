const bacteriaTime = (currentNum, targetNum) => {

    let count = 0;
    let current = 0;
//( 1, 8)
    if(targetNum < currentNum ){
        return "targetNum must be larger than currentNum";
    }

    while( currentNum < targetNum){
        current = currentNum * 2 ;
        currentNum = current;
        count++;
    }
    return count * 20;
    
}

