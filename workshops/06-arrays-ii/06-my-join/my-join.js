// YOUR CODE BELOW

// myJoin(['Beyonce', 'Kelly', 'Michelle'], ' and ');

const myJoin = (array, seperator) => {
    debugger;

    let newArray = [];
    let count = 0;

    for (let arr of array) {
        count++;
        
        if(arr === null){
            newArray += seperator;
            continue;
        }
        newArray += arr;
        if (array.length !== count) {
            if (seperator === undefined) {
                newArray += ',';
                continue;
            }
            newArray += seperator;
        }


    }
    return newArray;
}
