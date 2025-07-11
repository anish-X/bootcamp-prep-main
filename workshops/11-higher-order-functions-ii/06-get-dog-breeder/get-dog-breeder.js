const getDogBreeder = (defaultName, defaultAge) => {
    let returnedValue = {};

    if(!defaultAge && !defaultName){
        returnedValue['name'] = defaultName;
        returnedValue['age'] = defaultAge;

    }

    if(defaultName){
        returnedValue['name'] = defaultName;
    }
    if(defaultAge || defaultAge === 0){
        returnedValue['age'] = defaultAge;
    }
    return (defaultName, defaultAge) => {
        if(defaultName!== undefined ){
            if(typeof defaultName !== "number"){
                returnedValue['name'] = defaultName;
            }else{
                returnedValue['age'] = defaultName;
            }
            
        }
        if(defaultAge !== undefined){
            returnedValue['age'] = defaultAge;
        }
       
        return returnedValue;
    }
}


