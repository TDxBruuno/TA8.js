const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  {
    name: "Joe",
    yearOfBirth: 1920,
    yearOfDeath: 2005,
  },
];
function findTheOldest(people) {
    const oldest = people.reduce((oldest, person) => {
        const currentAge = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        return currentAge > oldestAge ? person : oldest;
    });
    console.log(`La persona mas vieja es ${oldest.name} con ${oldest.yearOfDeath - oldest.yearOfBirth} años`);
}

findTheOldest(people);