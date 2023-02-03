// Ededden özünün rəqəmləri cəmini çıxmaq tək ədəd alınana kimi

// let num = prompt("Enter number");
// let total = 0;
// for (let i = 0; i < num.length; i++) {
//   total += +num[i];
// }
// function number(num) {
//   while (true) {
//     num -= total;
//     if (num % 2 !== 0) {
//       return num;
//     }
//   }
// }
// console.log(number(num));

// Input ile daxil olunan ədədin tərsinin bölənlərini göstərin

// let num = prompt("enter number: ");
// let numRev = +num.split("").reverse().join(""); // 372 (number)

// function findDividers(numRev) {
//   if (isNaN(numRev) || numRev < 2) return false;
//   let dividerArr = [];
//   for (let i = 1; i <= numRev; i++) {
//     if (numRev % i == 0) {
//       dividerArr.push(i);
//     }
//   }
//   return dividerArr;
// }

// console.log(findDividers(numRev));

// Daxil edilen ededlerin ededi ortasini tapin

// let numbers = prompt('Enter numbers: "," ');
// numbersArr = numbers.split(",");

// function calcNumericalAverage(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += +arr[i];
//   }

//   return total / arr.length;
// }

// console.log(calcNumericalAverage(numbersArr));

// Daxil olunan ededden sonraki ilk n sade ededi tapin

// let number = prompt('enter number:');

// const findFirstSimple = (num) => {
//   let i = +num + 1;
//   while (true) {
//     let counter = 0;
//     for (let k = 1; k <= i; k++) {
//       if (i % k == 0) {
//         counter++;
//       }
//     }

//     if (counter == 2) {
//       return i;
//     }

//     i++;
//   }
// };

// console.log(findFirstSimple(number));

// Arraylerin hamisin cut olub olmadigina baxin.

// let arr = prompt('enter numbers: "," ').split(",");

// const checkEven = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (+arr[i] % 2 != 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkEven(arr));

// Array icerisindeki tek ededlerin cemini tapin.

// let arr = prompt('enter numbers: "," ').split(",");

// const checkEven = (arr) => {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (+arr[i] % 2 != 0) {
//       total += +arr[i];
//     }
//   }
//   return total;
// };

// console.log(checkEven(arr));

// Array icerisinde nece element oldugunu tapin.

// let arr = prompt('enter numbers: "," ').split(",");

// const findLength = (arr) => {
//   return arr.length;
// };

// console.log(findLength(arr));

// Arraydaki ededlerin ededi ortasini tapin.

// let numbers = prompt('Enter numbers: "," ');
// numbersArr = numbers.split(",");

// function calcNumericalAverage(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += +arr[i];
//   }

//   return total / arr.length;
// }
// console.log(calcNumericalAverage(numbersArr))

// Array icine soz a herfi ile baslayani tapin. ( home work )

// let arr = prompt('Enter words: "," ').split(",");

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].trim()[0] == "a") {
//     console.log(arr[i]);
//   }
// }

// Ededi sadə vuruqlara ayırmaq

let number = 1000;

const asdf = (num) => {
  let i = 2;
  while (true) {
    if (num % i == 0) {
      num /= i;
      console.log(i);
    } else {
      i++;
    }
    if (num == 1) {
      return true;
    }
  }
};

asdf(number);
