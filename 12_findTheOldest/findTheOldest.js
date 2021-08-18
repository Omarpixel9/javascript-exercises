// TO IMPROVE: Make code shorter. You can do that using the ternary operator and creating an inner function
// to reduce repetitive code
const findTheOldest = function(people) {
    return people.reduce((first, second) => {
        let firstAge, secondAge;
        let todayDate = new Date();

        const getAge = function(birth, death) {
            if (!death) {
                return todayDate.getFullYear() - birth;
            } else {
                return death - birth;
            }
        }

        firstAge = getAge(first.yearOfBirth, first.yearOfDeath);
        secondAge = getAge(second.yearOfBirth, second.yearOfDeath);

        return firstAge > secondAge ? first : second;

        // if ('yearOfDeath' in first) {
        //     firstAge = first.yearOfDeath - first.yearOfBirth;
        // } else {
        //     firstAge = todayDate.getFullYear() - first.yearOfBirth;

        // }

        // if ('yearOfDeath' in second) {
        //     secondAge = second.yearOfDeath - second.yearOfBirth;
        // } else {
        //     secondAge = todayDate.getFullYear() - second.yearOfBirth;
            
        // }
        
                
        // if (firstAge > secondAge) {
        //     return first;
        // } else {
        //     return second;
        // }
        
    });
};


module.exports = findTheOldest;
