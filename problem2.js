
// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
"Last car is a *car make goes here* *car model goes here*"


function problem2(inventory) {

    let lastIndex=inventory.length-1

    let lastCarDetail=inventory[lastIndex]

    console.log(`Last car is a ${lastCarDetail.car_make} ${lastCarDetail.car_model}`);
}

module.exports = problem2
