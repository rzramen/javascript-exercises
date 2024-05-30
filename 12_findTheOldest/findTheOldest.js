const findTheOldest = function(arr) {
    arr.sort((a, b) => getAge(b) - getAge(a));
    return arr[0];
};

function getAge(person) {
    let death = person.yearOfDeath;
    if (!person.yearOfDeath){
        death = new Date().getFullYear();
    }
    return death - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
