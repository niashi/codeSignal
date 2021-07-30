/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
*/

function centuryFromYear(year) {

    yearToString = year.toString()

    if (yearToString.length == 4) {

        firstTwo = yearToString[0] + yearToString[1]

        if (yearToString[yearToString.length - 1] == 0 && yearToString[yearToString.length - 2] == 0) {
        
            parseInt(firstTwo)
            
            return parseInt(firstTwo)
            
        } else return (parseInt(firstTwo) + 1)
        
    } else if (yearToString.length == 3) {

        if (yearToString[yearToString.length - 1] == 0 && yearToString[yearToString.length - 2] == 0) {
            
            return parseInt(yearToString[0])
            
        } else return (parseInt(yearToString[0]) + 1)

    } else {
        if (year >= 1 && year <= 100) {
            return 1
        } else return ('Please, insert a valid value.')
    }
}

console.log(centuryFromYear(1700))