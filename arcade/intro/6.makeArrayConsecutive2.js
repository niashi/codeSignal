/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/

var statues = [6, 2, 3, 8]

function makeArrayConsecutive2(statues) {
    
    let aux = - Infinity
    let aux2 = Infinity
        
    for (let statue of statues) {
        
        if (statue > aux) {
            aux = statue
        }
        
        if (statue < aux2) {
            aux2 = statue
        }
    }
    
    let difference = aux - aux2 - 1 - (statues.length - 2)
    
    return difference
}

console.log(makeArrayConsecutive2(statues))