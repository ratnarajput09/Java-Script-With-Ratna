const Mynums = [1,2,3,4]

//const total = Mynums.reduce(function (acc , curval){
    //return acc + curval
//}, 0)

//console.log(total);

//const acc = 0
const total = Mynums.reduce ((acc , curval) => acc + curval ,0)
//console.log(total);


const MyCart = [
    {
        course : 'js',
        price :9000
    },
    {
        course : 'python',
        price : 8000
    },
    {
        course : 'java',
        price : 7000
    },
    {
        course : 'c++',
        price :10000
    },
    {
        course : 'reactjs',
        price : 9800
    },
]

const totalprice = MyCart.reduce((acc , items) => acc + items.price , 0)
console.log(totalprice);