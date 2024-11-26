// Filter
const nums = [3, 7, 6, 4, 9];

const evenNums = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNums);

// Map
const numsMultipliedByTwo = nums.map((num) => {
  return num * 2;
});

console.log(numsMultipliedByTwo);

const users = [
  { name: "pepe", lastname: "gonzalez", age: 34 },
  { name: "maria", lastname: "fernandez", age: 43 },
  { name: "marcos", lastname: "rodriguez", age: 23 },
  { name: "alicia", lastname: "otero", age: 25 },
];

const usersWithFullName = users.map((user) => {
  return { name: `${user.name} ${user.lastname}`, age: user.age };
});

console.log(users);
console.log(usersWithFullName);
