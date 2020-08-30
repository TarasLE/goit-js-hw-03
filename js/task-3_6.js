function calculateTotalPrice(array, prop) {
  "use strict";
  // Write code under this line
  let total = 0;
  //ИСХОДНЫЙ РАБОТАЮЩИЙ ВАРИАНТ
  //   for (let i = 0; i < array.length; i++) {
  //     for (const key in array[i]) {
  //       if (array[i][key] === prop) {
  //         total += array[i].price * array[i].quantity;
  //       }
  //     }
  //   }
  for (const key of array) {
    for (const item in key) {
      if (prop === key[item]) {
        total += key.price * key.quantity;
      }
    }
  }
  return total;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар"));
// 9080

console.log(calculateTotalPrice(products, "Сканер"));
// 10200

console.log(calculateTotalPrice(products, "Захват"));
// 2400

console.log(calculateTotalPrice(products, "Дроид"));
// 2800
