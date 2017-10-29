console.log("connected....");

// str.substr(start, [length]) where to start and the length
// method returns the characters in a string beginning at the specified location through the specified number of characters.

// str.substring(indexStart, [indexEnd]) take start location in Num and end num in num
// method returns a subset of a string between one index and another, or through the end of the string.

function truncateString(str, num) {

  if(str.length > num && num > 3) {
    newStr = str.slice(0, (num - 3)) + "...";
    console.log(newStr);
  } else if (str.length > num && num <= 3) {
    shortStr = str.slice(0, num) + "...";
    console.log(shortStr);
  } else {
    console.log(str);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 100);

// function largestOfFour(arr) {
//   var results = [];
//   for(var i = 0; i < arr.length; i++) {
//     var largestNum = arr[i][0];
//     for(var j = 0; j < arr[i].length; j++) {
//       if(arr[i][j] > results[i][largestNum]) {
//         largestNum = arr[i][j];
//       }
//     }
//     results[n] = largestNum;
//   }
//   return largestNum;
// }
//
// var test = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

// var done = largestOfFour(test);
// console.log(done);



  // for(var i = 0; i < numArr.length; i++) {
  //   if(numArr[i] > max) {
  //     max = numArr[i];
  //   }
  // }
//   return max;
// }
//
// console.log(findMax(numArr));


// var person = {
//   firstName: "daniel",
//   lastName: "kapper",
//   dateOfBrith: 1989
// }
//
// var Person = function(firstName, lastName, dateOfBrith) {
//   this.firstName = firstName,
//   this.lastName = lastName,
//   this.dateOfBrith = dateOfBrith
// }
//
// Person.prototype.calcuateAge = function() {
//   console.log(2017 - this.dateOfBrith); }
//
// var john = new Person("Gulcan", "Yayal", 1989);
//
// john.calcuateAge();

// function largestOfFour(arr) {
//   var max = 0;
//   var arraySpot = 0;
//   for(var i = 0; i < arr[i]; i++) {
//     for(var j = 0; j < arr.length; j++) {
//       if(arr[i] > max) {
//         max = arr[j];
//           console.log(max);
//       }
//     }
//   }
//
//   return arr;
// }
//
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);






// reverse a string

// function reverseStr(str) {
//   var newStr = str.split("").reverse().join('');
//   console.log(newStr);
//   return newStr;
// }
// reverseStr("daniel");
// // 2,3,4,5,6: +1
// // 7,8,9: 0
// // 10,J,Q,K,A: -1
//
// //Setup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["Javascript", "Gaming", "Foxes"]
//     }
// ];
//
//
// function lookUpProfile(firstName, prop){
// // Only change code below this line
// for (var x = 0; x < contacts.length; x++){
//     if (contacts[x].firstName === firstName) {
//         if (contacts[x].hasOwnProperty(prop)) {
//             return contacts[x][prop];
//         } else {
//             return "No such property";
//         }
//     }
// }
// return "No such contact";
// // Only change code above this line
// }
//
// // Change these values to test your function
// var name = lookUpProfile("Akira", "likes");
// console.log(name);


// var arr = [
//   [9,8], [3,4], [5,6]
// ];
// for (var i=0; i < arr.length; i++) {
//   for (var j=0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// // Setup
// function phoneticLookup(val) {
//   var result = "";
//
//   // Only change code below this line
//   var lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chicago",
//     "delta": "Denver",
//     "echo": "Easy",
//     "foxtrot": "Frank"
//   };
//
//   // Only change code above this line
//   return result;
// }
//
// // Change this value to test
// phoneticLookup("charlie");

// var count = 0;
//
// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//     count--;
//       break;
//   }
//   if(count > 0) {
//     return count + " Bet";
//   } else {
//      return count + " Hold";
//   }
//
//   return "Change Me";
//   // Only change code above this line
// }
//
// // Add/remove calls to test your function.
// // Note: Only the last will display
// cc(2); cc(3); cc(7); cc('K'); cc('A');
//
//
//

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
