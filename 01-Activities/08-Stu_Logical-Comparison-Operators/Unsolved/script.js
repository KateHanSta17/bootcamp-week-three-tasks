const a = '50';
const b = 50;
const c = 100;
const d = c % b;
const e = c / 2;

const expression1 = (b === e);
const expression2 = (d < e);

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);
console.log(b == e);
console.log(c > b);
console.log(d == 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2);
console.log(!expression1 || expression2);
  

// Key Points:
// NaN is a Number: Despite its name, NaN is categorized under the "number" type in JavaScript.
// Result of Invalid Operations: NaN is returned from operations that don't yield a meaningful number.
// IEEE 754 Standard: JavaScript follows this standard, which includes NaN as part of its number type.
