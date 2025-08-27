// var [a, b] = {
//   a: 3,
//   b: 4,
// };

// console.log(a, b); // 3 4

const obj = {
  a: 3,
  b: 4,
};

// obj[Symbol.iterator] = function* () {
//   yield 3;
//   yield 4;
// };

obj[Symbol.iterator] = function () {
  let index = 0;
  const keys = Object.keys(obj); // ['a', 'b']
  return {
    next: () => {
      return { value: obj[keys[index++]], done: index > keys.length }; // { value: 3, done: false }
    },
  };
};

var [a, b] = obj;

console.log(a, b); // 3 4
