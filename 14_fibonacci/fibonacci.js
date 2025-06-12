const fibonacci = function(num) {
    let current = 0;
    let prev1 = 1;
    let prev2 = 0;
    num = parseInt(num);
    
    if(num < 0){
        return "OOPS";
    }

    if(num === 0 || num === 1){
        return num;
    }

    for(let i = 2; i <= num; i++){
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current
    }

    return current;

};

// Do not edit below this line
module.exports = fibonacci;
