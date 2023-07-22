const mySelf = {
    name : "kyaw moe aung",
    age : 29,
    single : true,

// method

teach : function (what,where){
    return "I can teach " +what+" at "+where;
},



// method ES6

learn(anything="anything"){
    return `${this.name} can learn ${this.anything}`;
},


showThis : function(){
    // console.log(showThis);
    // console.log(this.name,this.age,this.single,this.learn);
    console.log(this.learn());
}
}

console.log(mySelf.showThis());

// console.log(mySelf.teach("frondend developer","MMS IT"));

// console.log(mySelf.learn("Programming."));
// console.log(mySelf);

// console.log(this);