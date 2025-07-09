
const mySlice = (originalString, startIdx, endIdx) => {
    let slicedString = '';
    
    if(endIdx == null){
        endIdx = originalString.length;
    }
    
    if(startIdx == null){
        return originalString;
    }

    for(let i = startIdx; i < endIdx; i++){
        slicedString += originalString[i];
    }
    return slicedString;
}