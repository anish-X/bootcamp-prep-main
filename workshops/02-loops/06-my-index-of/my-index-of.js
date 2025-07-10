// YOUR CODE BELOW
//   1. source (string)
//   2. searchValue (string)
//   3. startIdx (number) - optional


//   let returnedValue = myIndexOf('here and there', 'here', 4);
//     expect(returnedValue).toEqual(10);


const myIndexOf = (source, searchValue, startIdx) => {
  debugger;
  if (startIdx === undefined) {
    startIdx = 0
  }

  // for(let i = startIdx; i < source.length ; i++){
  //   let slicedString = source.slice(i, searchValue.length + i);
  //   if(slicedString === searchValue){
  //     return i;
  //   }
  // }
  debugger;

  if (source.includes(searchValue)) {
    for (let i = startIdx; i < source.length - searchValue.length; i++) {
      for (let j = 0; j < searchValue.length; j++) {
        if (source[i] === searchValue[j]) {
          return i;
        }
      }

    }
  } else {
    return -1;
  }
}


myIndexOf('here and there', 'here', 4);