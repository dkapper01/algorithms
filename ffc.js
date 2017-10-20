console.log("working");

// 2,3,4,5,6: +1
// 7,8,9: 0
// 10,J,Q,K,A: -1

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
      break;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
     return count + " Hold";
  }

  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');




// function reverseStr(str) {
//   var betterStr = str.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
//   var strRev = "";
//
//   for(var i = betterStr.length - 1; i >= 0; i--) {
//     strRev += betterStr[i];
//   }
//   console.log(strRev);
//   return strRev;
// }

// reverseStr("daneL.. !");


// function isPalindrome(str) {
//   // var oneWay = str.toLowerCase;
//   // var name = str;
//   var one = str.toLowerCase().(/[\W_]/g, '');
//   var two = str.toLowerCase().(/[\W_]/g, '').split("").reverse().join("");
//
//   return one === two;
//
//   // console.log(newName);
//   // console.log(nameArr)
//
// }
//
// isPalindrome("Dna I . ");


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
