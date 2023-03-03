// function d6() {
//   var roll = Math.ceil(Math.random()*6);

//   return roll;
// }
  
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);


// var lifesAnswers = [
//   "It is certain.",
//   "It is decidedly so.",
//   "Without a doubt.",
//   "Yes – definitely.",
//   "You may rely on it.",
//   "As I see it, yes.",
//   "Most likely.",
//   "Outlook good.",
//   "Yes.",
//   "Signs point to yes.",
//   "Reply hazy, try again.",
//   "Ask again later.",
//   "Better not tell you now.",
//   "Cannot predict now.",
//   "Concentrate and ask again.",
//   "Don't count on it.",
//   "My reply is no.",
//   "My sources say no.",
//   "Outlook not so good.",
//   "Very doubtful."
// ];
// function oracle(question){
//   var answer = lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)]
//   console.log(answer)
// }
// oracle("will it rain today")




// var pokémon = [
//   { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
//   { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
//   { "id": 9,   "name": "Blastoise",  "types": ["water"] },
//   { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
//   { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
//   { "id": 23,  "name": "Ekans",      "types": ["poison"] },
//   { "id": 24,  "name": "Arbok",      "types": ["poison"] },
//   { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
//   { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
//   { "id": 52,  "name": "Meowth",     "types": ["normal"] },
//   { "id": 63,  "name": "Abra",       "types": ["psychic"] },
//   { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
//   { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
//   { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
//   { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
//   { "id": 98,  "name": "Krabby",     "types": ["water"] },
//   { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
//   { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
//   { "id": 133, "name": "Eevee",      "types": ["normal"] },
//   { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
//   { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
//   { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
//   { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
// ];


// var arr2d = [ [2, 5, 8],
//               [3, 6, 1],
//               [5, 7, 7] ]
// function checkValue(){
//   for(var i=0; i<arr2d.length; i++){
//     for(var j=0; j<arr2d[i].length; j++){
//       if(arr2d[i][j]==10){
//         console.log(arr2d[i][j])
//         return true
//       }
//     }
//   }
//   console.log("false")
//   }
// checkValue();

// function flatten(arr2d){
//   var flat=[]
//   for(var i=0; i<arr2d.length; i++){
//     for(var j=0; j<arr2d[i].length; j++){
//       flat.push(arr2d[i][j])
//     }
//   }
//       return flat;
// }
// var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
// console.log(result);


// function sumIndex(){


//   console.log("no sum in the array can be found")
// }


/*
Write a function that takes in an array and a number of steps to shift the values to the **right** by. 
Then wrap-around any values to that shift off array's end to the other side so that no data is lost.

Example Function Call: rotateArray(arr, 2)
Before: [1,2,3,4] 1      [4,1,2,3] 
Expected Output: [3, 4, 1, 2]

*/

// const arr = [1, 2, 3, 4];

// function rotateArray(arr, shiftBy) {
//     let newArr = [4,1,2,3];
//     if (shiftBy > 0) {
//         for (let i = arr.length - shiftBy; i < arr.length; i++) {
//             newArr.push(arr[i]);
//         }
//         for (let i = 0; i < arr.length - shiftBy; i++) {
//             newArr.push(arr[i]);
//         }
//     }
//     else if(shiftBy < 0){
//         for(let i = -shiftBy; i < arr.length; i++){
//             newArr.push(arr[i]);
//         }
//         for(let i = 0; i < -shiftBy; i++){
//             newArr.push(arr[i]);
//         }
//     }
//     else{
//         return arr;
//     }


//     return newArr; // Can also do this in place and return arr if you want an additional challenge!
// }

// console.log(rotateArray(arr, 1))
// console.log(rotateArray(arr, -4))

// Bonus Challenge: Allow the ShiftBy to be a negative value to shift left, or a positive value to shift right.
//[2,3,4,1]  -1

// ------ ****** Part 2 ******--------

/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item

  If index is out of range, return null and don't alter the array
  
  No built-in array methods except pop().
*/


// function removeIndex(arr, index){
//     if(index >= arr.length || index < 0){
//         return null;
//     }
//     temp = arr[index];
//     for(let i = index; i < arr.length - 1; i++){
//         arr[i] = arr[i + 1];
//     }
//     arr.pop();    
    
//     return temp;
// }

// const arr1 = ["a", "b", "c", "d", "e"]; 
// const removeIdx1 = 1;
// const expected1 = "b";
// const arr1Expected = ["a", "c", "d", "e"];

// console.log(removeIndex(arr1, 1));
// console.log(arr1);

// const arr2 = ["a", "b", "c"];
// const removeIdx2 = 3;
// const expected2 = null;
// const arr2Expected = ["a", "b", "c"];

// console.log(removeIndex(arr2, 3));
// console.log(arr2);

// const arr3 = ["a", "b", "c"];
// const removeIdx3 = -3;
// const expected3 = null;
// const arr3Expected = ["a", "b", "c"];

// console.log(removeIndex(arr3, -3));
// console.log(arr3);

// const arr4 = ["cake", "pie", "cookies", "vegetables", "candy"];
// const removeIdx4 = 3;
// const expected4 = "vegetables";
// const arr4Expected =  ["cake", "pie", "cookies", "candy"];

// console.log(removeIndex(arr4, 3));
// console.log(arr4);

// var matches = [
// ["HTML", "C#"],
// ["C#", "Python"],
// ["Python", "HTML"]
// ]

// var results = [0,0,1]

// function tournament(matches, results){
//     var maxScore = 0
//     var tournamentWinner = " "
//     var score = []
//     var winnerInArray = false
//     var loserInArray = false
//     for(var i=0; i < matches.length; i++){
//         if(results[i]==0){
//             var winner = matches[i][1]
//             var loser = matches[i][0]
//         }
//         else if(results[i]==1){
//             var winner = matches[i][0]
//             var loser = matches[i][1]
//         }
//         for(j = 0; j < score.length; j++){
//             if(score[j][0]==winner){
//                 winnerInArray = true
//             }
//             if(score[j][0]==loser){
//                 loserInArray = true
//             }
//         }
//         if(!winnerInArray){
//             score.push([winner,0])
//         }
//         if(!loserInArray){
//             score.push([loser,0])
//         }
//         for(j = 0; j < score.length; j++){
//             if(score[j][0]==winner){
//                 score[j][1]+=3
//             }
//             if(score[j][0]==loser){
//                 score[j][1]+=0
//             }
//         }

//         console.log(winner+" beats " +loser )
//     }
//     for(h=0; h<score.length;h++){
//         console.log(''+score[h][0]+' - '+score[h][1]+'')
//         if(score[h][1]>maxScore){
//             maxScore = score[h][1]
//             tournamentWinner = "Tournament Winner: " + score[h][0] + ' ' + maxScore
//         }
//     }
//     return tournamentWinner
// }

// console.log(tournament(matches, results));
