//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i = 5) {
       // console.log("5 is in the loop");
    }
    else{
        //console.log("not actually.");
    }
}


//nested loop

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
       // console.log(`inner loop value : ${j} and inner loop ${i}`);
        //console.log(`${i} + ${j} = ${i}*${j}`);
    }
}

//break and continue

for (let i = 1; i <=20; i++) {
    if (i = 5) {
        //console.log("detected 5");
        break
    }
    //console.log(`value of i is ${i}`);
}

//
for (let i = 1; i <=20; i++) {
    if (i = 5) {
        console.log("detected 5");
        continue
    }
    console.log(`value of i is ${i}`);
}