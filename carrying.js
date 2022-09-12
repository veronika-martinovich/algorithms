function sum(a) {
  console.log(a);
  return function (b) {
    return sum(a + b);
  };
}

console.log(sum(4)(4)(4)(4));
