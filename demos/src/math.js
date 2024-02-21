
function sum(a, b) {
  return a + b;
}
function rest(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) return null;
  return a / b;
}
module.exports = {
  sum,
  rest,
  mult,
  div,
};
