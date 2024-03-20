//map

const myNums = [1,2,3,4,5,6,7,8]

const newNums = myNums.map((num) => num -1)
//console.log(newNums);


const newnums = myNums
.map( (nums) => nums*10 +1)
.filter( (nums) => nums>=20)

console.log(newnums);
