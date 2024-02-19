//date and time

//date is typeof object.

//so if you are reading this in future tc39.es is working on something called "Temporal" which will work like global object.
//so do check this documentation by tc39.es 


let myDate = new Date()
//console.log(myDate);
//the output is not readable.

//after this op get better.


//console.log(myDate.toString());
//console.log(myDate.toDateString());//this remove the universal time
//console.log(myDate.toISOString());//2024-02-18T20:08:25.096Z
//console.log(myDate.toJSON());//2024-02-18T20:08:25.096Z
//console.log(myDate.toLocaleDateString());//2/18/2024
//console.log(myDate.toLocaleString());//2/18/2024, 8:10:59 PM
//console.log(myDate.toLocaleTimeString());//6:55:29 AM

//+++++++++++ How to declare Date ++++++++

let myCreatedDate = new Date(2023 , 1 , 23)
//in js month start from 0.
//console.log(myCreatedDate);//2023-02-23T00:00:00.000Z
//console.log(myCreatedDate.toString());//Thu Feb 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

//2nd way

let myCreatedDate2 = new Date(2024, 2, 22, 6, 4)
//console.log(myCreatedDate2.toLocaleString()); //3/22/2024, 6:04:00 AM

//When you want a specific date
//here the month will start from 1st.
let speDate = new Date("01-12-2020")//indian standard.
//console.log(speDate.toLocaleString());



//+++++++++ Time-Stamp +++++++++

let myTimeStamp = Date.now()
//console.log(myTimeStamp);//1708326896255 milisecond values.
//console.log(speDate.getTime());


// to get your time in milisec but without the decimal values.
//console.log(Math.round(Date.now()/1000));

//if you want a customizable time and date use toLocalString.

let newDate = new Date()
console.log(newDate.toString());

newDate.toLocaleString('default',{
    weekday : "short",
    //timeZone: "23T00"
})







