// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

function problem5(yearArray) {

    let result=[];

    for(let year of yearArray){
        if(year<2000){
            result.push(year)
        }
    }

    console.log(`${result.length} cars are older than 2000`);

    return result

}

module.exports = problem5