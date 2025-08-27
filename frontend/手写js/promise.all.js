/*
题目：手写实现 Promise.all 方法

要求：
1. 接收一个 Promise 数组，返回一个新的 Promise
2. 所有 Promise 都成功则返回成功结果数组
3. 任意一个 Promise 失败则返回第一个失败的原因
4. 空数组直接返回成功，结果为空数组

示例：
const p1 = Promise.resolve(1);
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 1000));
const p3 = Promise.resolve(3);

Promise.myAll([p1, p2, p3]).then(
  values => console.log(values), // [1, 2, 3]
  error => console.log(error)
);
*/

// 实现代码框架：
Promise.myAll = function (promises) {
  // 请实现此处代码
};
