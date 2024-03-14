const coding = ['js','python','ruby','java']


const values = coding.forEach( (item) => { 
    //console.log(item);
})

//foreach loop does not return any value.
//console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newvalue = mynums.filter( (num) => num >4)
//console.log(newvalue);

//or

//const newvalue = mynums.filter( (num) => {
   // return num >4
//})


//with foreach loop same fn
 
const newNums = []

mynums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);

