// YOUR CODE BELOW
const onlyOne = (arg1, arg2, arg3) => {
    // if(arg1 && !arg2 && !arg3){
    //     return true;
    // }else if( !arg1 && arg2 && !arg3){
    //     return true;
    // }else if(!arg1 && !arg2 && arg3){
    //     return true;
    // }else {
    //     return false;
    // }
   

    if(!arg1 && arg2 && arg3){
        return false;
    }else if( arg1 && !arg2 && arg3){
        return false;
    }else if(arg1 && arg2 && !arg3){
        return false;
    }else if(!arg1 && !arg2 && !arg3){
        return false;
    }else if(arg1 && arg2 && arg3){
        return false;
    }else{
        return true;
    }
    
}

