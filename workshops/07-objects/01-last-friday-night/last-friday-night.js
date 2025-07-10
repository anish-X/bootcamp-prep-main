

const lastFridayNight = (transactions) => {
    debugger;
    // let sum = 0;
    // for (let transaction of transactions) {
    //     sum += transaction.amount;
    // }
    // console.log(typeof sum);
    // return Number(sum);\
    let sum = 0;
    for(let i = 0; i < transactions.length; i++){
        sum += transactions[i].amount;
    }
    return sum;
}

