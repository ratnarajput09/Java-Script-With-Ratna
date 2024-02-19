const heros = ["ritik", "Salman", "kartik", "ajay"]
const heroins = ["daya", "babita", "madhvi"]

//heros.push(heroins)
//console.log(heros);
//it will give you array in the array 
//[ 'ritik', 'Salman', 'kartik', 'ajay', [ 'daya', 'babita', 'madhvi' ] ]

//console.log(heros[4][2]);//madhvi

//this method is not good for practice lets see another which is concat.

//concat merge the arrays and give you the new array which have all the values.

const newmarvel = heros.concat(heroins)
//console.log(newmarvel);

//['ritik',  'Salman','kartik', 'ajay','daya',   'babita','madhvi' ]

//spread in array

const allheros = [...heros, ...heroins]
//console.log(allheros);//this is most used method and also easy.
//['ritik',  'Salman','kartik', 'ajay','daya',   'babita','madhvi' ]

const array = [1,2,3,4,4,[5,5,6,7,8],8,7,6,[4,4,4]]
//when you want all the array into array in oneline or one array.

const another_array = array.flat(Infinity)
console.log(another_array);
//the op will be in one line.

//when you will do data scraping =>
console.log(Array.isArray("shivani")); //flase means this name is not in array.

console.log(Array.from("shivani"));//[ 's', 'h', 'i','v', 'a', 'n','i' ]