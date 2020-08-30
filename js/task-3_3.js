const findBestEmployee = function (employees) {
  "use strict";
  //   const group = Object.keys(employees);
  //   const efficiency = Object.values(employees);
  let max = 0;
  let bestEmployee = "";

  //ИСХОДНЫЙ РАБОЧИЙ ВАРИАНТ
  //   for (let i = 0; i < efficiency.length; i++) {
  //     if (efficiency[i] > max) {
  //       max = efficiency[i];
  //       bestEmployee = group[i];
  //       // console.log(efficiency[i], group[i]);
  //     }
  //   }

  for (const key in employees) {
    if (employees[key] > max) {
      max = employees[key];
      bestEmployee = key;
      // console.log(efficiency[i], group[i]);
    }
    // console.log(employees[key]);
  }

  //   console.log(bestEmployee);
  return bestEmployee;
  //   console.log(group);
  //   return bestEmployee;

  //   console.log(Math.max(10, 20, 5));
  //   let max = 0;
  //   let bestEmployee = "";
  //   for (const member of efficiency) {
  //     if (efficiency > max) {
  //       bestEmployee = group[member];
  //     }
  // console.log(employees);
  //   }
  //   console.log(bestEmployee);
  // Write code under this line
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
//console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
//console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
console.log(findBestEmployee(supports));
console.log(findBestEmployee(developers));
// 'lux'
