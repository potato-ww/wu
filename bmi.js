//Mark
let MarkMass=47;
let MarkHeight=1.8;
let BMI1=MarkMass/(MarkHeight*MarkHeight);
console.log("Mark的BMI是："+BMI1);
//John
let JohnMass=48;
let JohnHeight=1.7;
let BMI2=JohnMass/(JohnHeight*JohnHeight);
console.log("John的BMI是："+BMI2);
//比较BMI大小
let BMI=( BMI1 > BMI2 ? "Mark的BMI比John的BMI大" : "John的BMI比Mark的BMI大");
console.log(BMI);
