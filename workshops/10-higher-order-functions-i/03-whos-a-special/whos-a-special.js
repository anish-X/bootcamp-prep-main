// YOUR CODE BELOW

let specialPets = [{
        name: 'Mr. Binns',
        species: 'cat'
      }, {
        name: 'Pusheen',
        species: 'cat'
      }
    ];

// 'Mr. Binns the cat is very special! Pusheen the cat is very special!'

const whosASpecial = (arrayOfObject) => {
    let specialString = [];
    // for(let i = 0; i < arrayOfObject.length; i++){
    //     specialString += `${arrayOfObject[i].name} the ${arrayOfObject[i].species} is very special!` ;
    //     if(i < arrayOfObject.length - 1){
    //         specialString += " ";
    //     }
    // }
    arrayOfObject.forEach(  (element) => {
        specialString.push(`${element.name} the ${element.species} is very special!`);
    });

    return specialString.join(' ');
}

