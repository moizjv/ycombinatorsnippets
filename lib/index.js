const y = (fn) => {
  return (x) => {
    return fn(Y(fn))(x);
  };
};

const fac = (recurse) => {
  return function(x) {
    return x === 0 ? 1 : x * recurse(x-1);
  };
};

const Y = (f) => {
  const g = (h) => {
    return (x) => {
      return f(h(h))(x);
    };
  };
  return g(g);
};

export { y, Y, fac };
