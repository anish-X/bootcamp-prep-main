

const zooInventory = (array) => {
    let expectedValue = [];
    debugger;
    for (let i = 0; i < array.length; i++) {
        let value = [];

        for (let k = 0; k < array[i].length; k++) {
            if (Array.isArray(array[i][k])) {
                for (let j = 0; j < array[i][k].length; j++) {
                    value.push(array[i][k][j]);
                }
            }else{
                 value.push(array[i][k]);
            }
           
        }
       
        expectedValue[i] = value;
  
    }
      for (let i = 0; i < expectedValue.length; i++) {
        let name = expectedValue[i][0];
        let species = expectedValue[i][1];
        let age = expectedValue[i][2];

        expectedValue[i] = `${name} the ${species} is ${age}.`;
  }
    

    return expectedValue;
}

