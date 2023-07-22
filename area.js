

// function calcArea(width,breadth){
//     let result = width * breadth;
//     return result+"sqft";

// }

// console.log(calcArea(12,60));
// console.log(calcArea(12.5,60));
// console.log(calcArea(15,60));
// console.log(calcArea(15,55));

// record => widht * breadth = area sqft
// record Object => {width:17+"ft",breadth:60"ft",area:1020+"sqft"}


const records = [];


function calcArea(width,breadth){
    let area = width * breadth;
    let recordObject = {
        width : width + "ft",
        breadth : breadth + "ft",
        area : area + "sqft"
    }
    records[records.length] = recordObject
    return area+"sqft";
}


console.log(calcArea(12,60));
console.log(calcArea(12,48));
console.log(calcArea(12,55));
console.log(calcArea(15,60));
console.log(calcArea(12,70));

//show records

console.table(records);