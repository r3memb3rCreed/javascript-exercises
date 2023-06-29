
const reverseString = function() {
    let text = "hello"
    let newText = "there"
    let firstReturn = text.charAt(4) + text.charAt(3) + text.charAt(2) + text.charAt(1) + text.charAt(0);
    let secondReturn = newText.charAt(4) + newText.charAt(3) + newText.charAt(2) + newText.charAt(1) + newText.charAt(0)
    
    return secondReturn + " " + firstReturn;
    
};

// Do not edit below this line
module.exports = reverseString;
