// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function problem3(inventory) {

    return inventory.sort((first, second) => {
        return first.car_model.localeCompare(second.car_model)
    })

}

module.exports = problem3