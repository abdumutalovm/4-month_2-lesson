// Homework 4-month 2-lesson

// ex-1
let number = +prompt("1-masala:Ixtiyoriy sonni kiriting");
if (number > 0) {
  console.log(number + " ushbu son musbat");
} else {
  console.log(number + " ushbu son manfiy");
}

// ex-2
const randomNuber = +prompt("2-masala:Ixtiyoriy 100gacha bolgan son kiriting");
if (randomNuber >= 90 && randomNuber <= 100) {
  console.log("A");
} else if (randomNuber >= 80 && randomNuber <= 89) {
  console.log("B");
} else if (randomNuber >= 70 && randomNuber <= 79) {
  console.log("C");
} else if (randomNuber >= 60 && randomNuber <= 69) {
  console.log("D");
} else if (randomNuber >= 0 && randomNuber <= 59) {
  console.log("F");
}
//ex-3
let year = +prompt("3-masala:Ixtiyoriy yilni kiriting");
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(year + " ushbu yil kabisa yili");
} else {
  console.log(year + " ushbu yil kabisa yili emas");
}

//ex-4
let numberR = +prompt("4-masala:Ixtiyoriy sonni kiriting");
if (numberR > 0) {
  console.log(numberR + " ushbu son musbat");
} else if (numberR < -0) {
  console.log(numberR + " ushbu son manfiy");
} else if (numberR == 0) {
  console.log(numberR + " ushbu son 0 ga teng");
}

// ex-5
let firstNumber = +prompt("5-masala:1-sonni kiriting");
let secondNumber = +prompt("5-masaladagi 2-sonni kiriting");
if (firstNumber === secondNumber) {
  console.log("ikkala son ham teng");
} else if (firstNumber > secondNumber) {
  console.log("Birinchi son ikkinchi sondan katta");
} else {
  console.log("Ikkinchi son birinchi sondan katta");
}

// ex-6
let firstNumber_6 = +prompt("6-masala:1-sonni kiring");
let secondNumber_6 = +prompt("6-masalani 2-sonini kiriting");
let thirdNumber_6 = +prompt("6-masalani 3-sonini kiriting");
if (firstNumber_6 === secondNumber_6 && secondNumber_6 === thirdNumber_6) {
  console.log("uchala son ham teng");
} else if (firstNumber_6 < secondNumber_6 && thirdNumber_6) {
  console.log("1-son eng kichigi");
} else if (secondNumber_6 < thirdNumber_6 && firstNumber_6) {
  console.log("2-son eng kichigi");
} else if (thirdNumber_6 < secondNumber_6 && firstNumber_6) {
  console.log("3-son eng kichigi");
}

// ex-7
let firstNumber_7 = +prompt("7-masala:1-sonni kiriting");
let secondNumber_7 = +prompt("7-masalani 2-sonini kiriting");
let thirdNumber_7 = +prompt("7-masalani 3-sonini kiriting");

let res = 0;
if (firstNumber_7 < 0) {
  res += firstNumber_7;
}
if (secondNumber_7 < 0) {
  res += secondNumber_7;
}
if (thirdNumber_7 < 0) {
  res += thirdNumber_7;
  console.log(res);
}
