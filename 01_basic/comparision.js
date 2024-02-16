//the comparisons and equality check works differently.
//(>,<) ,(==) , (>= <=) are works in different manner.
//comparisons convert null to number (treat null as a 0)


console.log(null > 0); //=> false
console.log(null == 0); //=> false
console.log(null >= 0); //=> true

//avoid this type of conversons and focus on clean code.
