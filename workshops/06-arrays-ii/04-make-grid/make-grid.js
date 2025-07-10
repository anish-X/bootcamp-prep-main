// YOUR CODE BELOW
const makeGrid = (numsColumn, numsRow) => {
    let grid = [];
    for (let i = 0; i < numsRow ; i++) {
        let row = [];
        for (let j = 0; j < numsColumn; j++) {
            row.push(j+1);
        }
        grid.push(row);
    }

    return grid;
}
