const sumAll = function(num1, num2) {
    let minNum;
    let maxNum;
    let sum = 0;

    if(num1 < 0 || num2 < 0)
    {
        return 'ERROR';
    }

    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }
    
    if(num1 < num2){
        minNum = num1;
        maxNum = num2;
    }
    else{
        minNum = num2;
        maxNum = num1;
    }

    for(let i = minNum; i <= maxNum; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
