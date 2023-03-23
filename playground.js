//const a = 10 + 10 + 10;
//console.log(a);

//สามารถใส่ค่าได้เรื่อยๆ
// var temp = "Hello";
// temp = "Google";
//ส่วนใหญ่จะใช้กับFunction
// let temp2 = 100;
// temp2 = 50;
//ไม่สามารถเปลี่ยนค่าได้
// const temp3 = true;
//temp3 = false;

// temp4 = "Dog";
// temp4 = "Cat";

// var temp5 = null;
// const a = 10;
// const b = 5;
// let c = 5;
// const sum = a + b;
// c = "ABC";

// console.log(a + b);
// console.log(sum);
// console.log(a + b + c);

// const temp6 = [1, 2, 3, 4, 5, "A"];
// console.log(temp6[0]);
// temp6.push(6);
// console.log("Insert 6 to array", temp6.length);

// function sayHello() {
//   console.log("Hi");
// }
// sayHello();

// Note function arg.Arrow Fucntion

// const sayHello = (number) => {
//   console.log("Number is = ", number);
// };
// sayHello(20);

// const sayHello = (number, name) => {
//   console.log(`Number is = ${number} by ${name}`);
// };
// const nickname = "NEW";
// sayHello(20, nickname);

// const temp7 = [1, 2, 3, 4, 5]

// temp7.forEach(item => {
//     console.log(item);
// });
// const flietemp = temp7.filter((item) => item >= 3)
// console.log("fliter number more than 3 is:",flietemp)

// const car1 = {
// color:'Red'
// ,brand:'Honde'
// ,model:{
//     a1:"asd",
//     a2:"fgh"
// }}
// car1.color ='Blue'
// console.log(car1.model.a2)

// note : function return
const firstName = "War";
const lastName = "phong";
const mergeName = (firstName, lastName) => {
  //แบบที่1
  //   return firstName + " " + lastName;
  //แบบที่2
  //   const fullName = firstName + " " + lastName;
  //   return fullName;
  //แบบที่3
  return `${firstName} ${lastName}`;
};
console.log(mergeName(firstName, lastName));
// const fullName = mergeName(firstName, lastName);
// console.log(fullName);

//Condition (if else) เงื่อนไข
const number1 = 40;
// if (number1 > 30) {
//   console.log(" number1 is more 30");

if (number1 < 30) {
  console.log(" number1 is less 30");
} else {
  console.log(" number1 is more 30");
}

if (number1 < 30) {
  console.log(" number1 is less 30");
} else if (number1 > 30) {
  console.log(" number1 is more 30");
} else {
  console.log(" number1 is less 30");
}

// switch(number1){
// case 10;
//     console.log("number1 is less" ):
// case 20;
//     console.log("number1 is less" ):
// case 30;
//     console.log("number1 is less" ):
// case 40;
//     console.log("number1 is less" ):
//     break;
//     default :
//     console.log("number1 is less" ):
//     break;
// }

// const Mycar = ["ford rapter", "Honda CRV", "toyota fortuner", "tesla Model3"];
// for (let index = 0; index < Mycar.length; index++) {
//   const car = Mycar[index];
//   console.log(car);
// }
// const car1 = {
//   color: "Red",
//   brand: "Honde",
//   model: {
//     a1: "asd",
//     a2: "fgh",
//   },
// };
// for (const key in car1) {
//   if (Object.hasOwnProperty.call(call, key)) {
//     const element = car1[key];
//     console.log(element);
//   }
// }

// for (const car of Mycar) {
//   console.log(car);
// }

// let i = 0;
// while (i < 20) {
//   console.log("the number is :", i);
//   i++;
// }
