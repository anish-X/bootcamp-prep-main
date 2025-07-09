// YOUR CODE BELOW

const crazyCaps = (value) => {
    let val = '';

   for(let i = 0; i < value.length; i++){
    if(i === 0) val[i] = value[0].toLowerCase();
        if( i % 2 === 0) {
            val += value[i].toLowerCase();
        }else{
            val += value[i].toUpperCase();
        }
   }
    return val;
}