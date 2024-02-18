//math and number in js

const score = 400
console.log(score);


//you can define explicitly the type =>
const balance = new Number(200)
console.log(balance);


//with the second method of defining string you can access the prototype methods.
const value = new Number(900)
console.log(value.toString().length);
console.log(value.toFixed(3));


//intresting method of math js
const othervalue = 678.88
console.log(othervalue.toPrecision(12));
