console.log("working");


function reverseStr(str) {
  var betterStr = str.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
  var strRev = "";

  for(var i = betterStr.length - 1; i >= 0; i--) {
    strRev += betterStr[i];
  }
  console.log(strRev);
  return strRev;
}

// reverseStr("daneL.. !");


function isPalindrome(str) {
  // var oneWay = str.toLowerCase;
  // var name = str;
  var one = str.toLowerCase().(/[\W_]/g, '');
  var two = str.toLowerCase().(/[\W_]/g, '').split("").reverse().join("");

  return one === two;

  // console.log(newName);
  // console.log(nameArr)

}

isPalindrome("Dna I . ");


//
// function fact(num) {
//   if(num < 0 || num == 1) {
//     return 1;
//   }
//   for(var i = num - 1: i < num; i--) {
//     return num * fact(num);
//   }
// }
//
// var answer = fact(-5);
// console.log(answer);


// function fact(num) {
//   if(num < 0) {
//     return 1;
//   } else if (num == 0){
//     return 1;
//   } else {
//     return num * fact(num - 1);
//   }
// }
//
