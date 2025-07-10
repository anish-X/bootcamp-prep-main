// YOUR CODE BELOW
// let originalGrid = [
//       [1, 2, 3],
//       [1, 2, 3]
//     ];
// let reversedGrid = [
//       [3, 2, 1], [3, 2, 1]
//     ];


const removeColumns = (originalGrid, numColums) =>{
    let formattedGrid = [];
    for(let i = 0; i < originalGrid.length; i++){
            originalGrid[i].reverse();
    }

    for(let i = 0; i < originalGrid.length; i++){
        formattedGrid[i] = originalGrid[i].slice(numColums).reverse();
    }
    
    return formattedGrid;
}
