console.log("- 2.A -");

const {power, division} =require("./maths_helper");
console.log("- 2.B -");

const age=30;

const calculateBMI = (obj) => {
    const { weight, height } = obj;

    const heightSq = power(height, 2);
    const bmi = division(weight, heightSq);
    
    setTimeout(() => {
        console.log(bmi);
    }, 1000);

};

module.exports = calculateBMI;
console.log("- 2.C -");


