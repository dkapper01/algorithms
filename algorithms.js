
// FizzBuzz

// "Write a program that prints the numbers from 1 to 100. But for
// multiples of three print “Fizz” instead of the number and for the
// multiples of five print “Buzz”. For numbers which are multiples
// of both three and five print “FizzBuzz”."

// function FizzBuzz(num) {
//   for(var i = 1; i < num; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
//     } else if(i % 3 === 0) {
//     console.log("Fizz");
//     } else if (i % 5 === 0) {
//     console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
//
// FizzBuzz(20);
// ----------------------------------------------------
//
// Harmless Ransom Note
//
// Given an arbitrary ransom note string and another string
// containing letters from all the magazines, write a function
// that will return true if the ransom note can be constructed
// from the magazines; otherwise, it will return false.
// Each letter in the magazine string can only be used once
// in your ransom note. You may assume that both strings
// contain only lowercase letters.

// function harmlessRansomNote(noteText, magasineText){
//   var magasineArr = magasineText.split(' ');
//   var noteArr = noteText.split(' ');
//   var magasineObj = {};
//
//   magasineArr.forEach(function(word) {
//     if(!magasineObj[word]) {
//       magasineObj[word] = 0;
//     }
//     magasineObj[word]++;
//   });
//   // console.log(magasineObj);
//   var isNotePossible = true;
//
//   noteArr.forEach(function(wordI){
//     if(magasineObj[wordI]) {
//       magasineObj[wordI]--;
//       if(magasineObj < 0) {
//         isNotePossible = false;
//       }
//     } else {
//       isNotePossible = false;
//     }
//   });
//   console.log(isNotePossible);
//   return isNotePossible;
// }
//
// harmlessRansomNote('the the note bob', 'the bob the paper maybe note')
// ------------------------------------------------------
