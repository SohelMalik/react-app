//"1.internal module::node", "2.user/developer defined module", "3.external modul::express""

console.log("- 1.A -");

const bmi = require("./bmi_helper.js")
console.log("- 1.B -");

const {division} =require("./maths_helper.js")
console.log("- 1.C -");

const student ={
    name: "Sohel",
    age: 22,
    weight: 70,
    height: 5.8,
    country: "Bangladesh"
};

bmi(student);

console.log(division(33, 11));

// whenevr u require (resolution /execution is done synchronous)
// 1.A -->2.A -->3.A-->3.B-->2.B-->2.C--1.B-->(CACHING)-->1.C