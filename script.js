console.log("YOUR BMI:");
const student ={
    name: "Sohel",
    age: 22,
    weight: 70,
    height: 5.8,
    country: "Bangladesh"
};

const calcaulateBMI = (obj) => {
    const { weight, height } = obj;
     
    const bmi = weight / height ** 2;
    setTimeout(() => {
        console.log(bmi);
    }, 1000);


    
}
calcaulateBMI(student);

