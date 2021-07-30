/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
*/

function adjacentElementsProduct(inputArray) {
    
    let aux;
    let aux2 = -Infinity;
    
    for (let i = 0; i <= inputArray.length - 2; i++) {
        aux = inputArray[i] * inputArray[i + 1]
        
        if (aux > aux2) {
            aux2 = aux
        }
    }
    
    return aux2
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))