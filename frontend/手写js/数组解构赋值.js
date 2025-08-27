// var [a, b] = {
//   a: 3,
//   b: 4,
// };

// console.log(a, b); // 3 4

const obj = {
  a: 3,
  b: 4,
};

obj[Symbol.iterator] = function () {
  return {
    next: () => {
      return { value: 3, done: false };
    },
  };
};

var [a, b] = obj;

console.log(a, b); // 3 4
