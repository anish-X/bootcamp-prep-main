const mySplice = (array, startIdx, deleteCount, item) => {
    let poppedElements = [];
    let movedToEnd = [];

    for (let k = array.length - 1; k >= startIdx + deleteCount; k--) {
        movedToEnd.unshift(array.pop());
    }

    for (let j = 0; j < deleteCount; j++) {
        poppedElements.push(array.pop());
    }

    if (item !== undefined) {
        array.push(item);
    }

    for (let i = 0; i < movedToEnd.length; i++) {
        array.push(movedToEnd[i]);
    }

    return poppedElements.reverse();
};


    