const countTotalSalary = function (employees) {
  "use strict";
  const salary = Object.values(employees);
  let total = 0;
  for (const employee of salary) {
    total += employee;
  }
  return total;
  // Write code under this line
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
