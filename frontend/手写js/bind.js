function bind(fn, context) {
  return function (...args) {
    fn.apply(context, args);
  };
}

const fn = bind(
  function () {
    console.log(this.a);
  },
  { a: 3 }
);

fn();
