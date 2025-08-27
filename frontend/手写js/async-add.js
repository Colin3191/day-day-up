/**
 * 基于 asyncAdd 实现 sum 函数，sum 函数接收若干个异步请求，返回一个 Promise，
 */

function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 1000);
}

async function sum(...args) {
  // todo
  if (args.length === 0) {
    return 0;
  }
  if (args.length === 1) {
    return args[0];
  }
  let res = 0;

  return;
}

sum(1, 2, 3).then((res) => {
  console.log(res); // 6
});

const promisifyAdd = (a, b) => {
  return new Promise((resolve) => {
    asyncAdd(a, b, resolve);
  });
};
