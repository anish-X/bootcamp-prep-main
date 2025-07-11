// YOUR CODE BELOW
const billerBuilder = (state) => {

    return function(price){
        if(state === 'NY'){
            return price * 1.03 * 1.04;
        }
        return price * 1.05 * 1.06625;
    }

}