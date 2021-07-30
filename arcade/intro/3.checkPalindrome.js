/*
Given the string, check if it is a palindrome.
*/

function checkPalindrome(inputString) {

    let invertedString = []

    for (let i = inputString.length - 1; i >= 0; i--) {
        invertedString.push(inputString[i])
    }

    if (invertedString.join('') == inputString) {
        return true
    } else return false
}

console.log(checkPalindrome('abac'))