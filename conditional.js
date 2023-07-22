// conditional statement
// control structure
// flow control // control flow


// if(true ){
//     console.log("a");
//     console.log("b");
//     console.log("c");
// }else{
//     console.log("this is false");
// }

function canIcome(wakeUpTime){


    // let result;

    // if(wakeUpTime <= 9){
    //     result = "You can Come";
    // }else{
    //     result = "Yo can't"
    // }

    if(wakeUpTime <= 9) {return "Yan can come"}
    return "You can't"
    
}

// console.log(canIcome(9));
// console.log(canIcome(10));
// console.log(canIcome(8.6));

let mark = 40;

if(mark>=80){
    console.log("Distination");

}else if(mark >=40){
    console.log("passed");
}else if(mark <40){
    console.log("failed");
}
