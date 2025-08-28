function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

const fn = throttle(() => {
  console.log(1);
}, 100);

fn();
fn();
fn();
