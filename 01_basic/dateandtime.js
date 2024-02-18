//date
let myDate = new Date()
//console.log(myDate);
//the op is not readable.
//date is typeof object.

console.log(myDate.toString());
console.log(myDate.toDateString());//this remove the universal time
console.log(myDate.toISOString());//2024-02-18T20:08:25.096Z
console.log(myDate.toJSON());//2024-02-18T20:08:25.096Z
console.log(myDate.toLocaleDateString());//2/18/2024
console.log(myDate.toLocaleString());//2/18/2024, 8:10:59 PM
console.log(myDate.toLocaleTimeString());
//after this op get better.
