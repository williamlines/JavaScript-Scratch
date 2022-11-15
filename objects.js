const person = {
  name: "Maxine",
  age: 32,
  address: {
    city: "London",
    postcode: "E1 123",
  },
  hobbies: ["writing", "tennis", "cooking"],
};

const cohort = {
  name: "May2022",
  id: 1234,
  students: ["john", "ringo", "paul", "george"],
};

const printCohort = (cohort) => {
  console.log(
    `<${cohort.id}> - <${cohort.name}> - <${cohort.students.length}> students in the cohort.`
  );
};

module.exports = { person, cohort, printCohort };

printCohort(cohort);
