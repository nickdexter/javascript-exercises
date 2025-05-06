const reverseString = function(word) {
    let string = "";

    for(let i = -1; i >= -word.length; i--)
    {
        string += word.at(i);
    }

    return string
};

// Do not edit below this line
module.exports = reverseString;
