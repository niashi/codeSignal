/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
*/

function almostIncreasingSequence(sequence) {
    var count = 0;
    
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i-1]) {
            count++
            
            if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false
            
        }
    }
    
    return count <= 1
}

console.log(almostIncreasingSequence([1, 3, 2]))