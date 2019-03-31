
// Variables
var  wordArr = ["unicorn","griffin","dragon","mermaid","centaur","pegasus"];
// for (var i=0; i<wordArr.length; i++){
//   console.log(wordArr[i]);
// } 
var cntWins,
  curCntGuess,
  ltr_0,
  ltr_1,
  ltr_2, 
  ltr_3, 
  ltr_4,
  ltr_5,
  ltr_6;

 var ltrTried_0,
  ltrTried_1,
  ltrTried_2, 
  ltrTried_3, 
  ltrTried_4,
  ltrTried_5,
  ltrTried_6,
  ltrTried_7,
  ltrTried_8, 
  ltrTried_9 ;
var  cntWins=0;
var userGuess;
// within the game
// while wordArr.length>0
//while (wordArr.length>0) {
var curPtr=0, curCntGuess = 0;   
var curLetter="",curWord="",myWord="";
var badGuess = [], curWordArr=[];
var isSolved=false;
   //clear the ltrTried & ltr elements

curPtr=getRandomPtr(wordArr.length); //0
//curWordArr = array the word at that index
curWord=wordArr[curPtr];   //unicorn
console.log(curPtr);
console.log(curWord);
document.onkeydown = function(event){
  
    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess=userGuess.toLowerCase()
    alert(userGuess);
    //for (var i=0; i<curWord.length; i++){
      // console.log(thisWord.charAt([i]));
      //fruits.push("Kiwi")
    //  curWordArr.push(curWord.charAt([i]));
    //}
  }


// intialize badGuess as empy array 

// //  while (curCntGuess < 10 && !isSolved){
// //                   // get a keypress to curLetter
// //                   // if escape, exit
// //     document.onkeyup = function(event) {
// //                   // Determines which key was pressed.
// //     var userGuess = event.key;
// //     userGuess=userGuess.toLowerCase()}
// //                    // increment curCntGuess
// //     for (var j=0; j<badGuess.length; j++) {
// //       //See if that letter was already chosen by parsing badGuess 
// //       if (badGuess[j]===userGuess){
// //         alert("You alread guessed "+userGuess)}
// //       else {
// //         //see if it's in the target word
// //         // for every letter in curWord, see if that letter exists at that index  charAt(index)
  
// //         for (var i=0; i<curWordArr.length; i++){
        
// //            //if index [j]is blank and matches our guess  
// //            if (index[j]="" && curWordArr[j]===userGuess) { 
           
// //           // pop that into correct index in curWord 
// //             curWordArr[j]=userGuess;
// //           //set getElementId for that index (see if I can create a variable "ltr_"+(toString([j]))
// //             el="ltr_"+j;
// //            //getElementById(el).textContent:userGuess;
// //            } else {
// //             // push to badArray
// //             badArray.push(userGuess)
// //             curCntGuess++
// //             // push content for ltrTried ids
// //             // show content for badguesses
// //            }
// //           }
// //         }
// //       }
// //     // now compare the word in curWordArr with curWord
// //     if (collapseArray()===curWord){
// //       // you won      
// //       isSolved=true;
// //         // show the wins
// //         // remove the word from the array
// //     }
// //     wordArr.pop.curPtr;
// //   }
// // //}


function collapseArray(){
  for (var k=0; k<curWordArr.length; k++) {
    myWord=myWord+curWordArr[k]
  }
    return myWord;
}


function getUserGuess() { 
  var userGuess= document.getElementById("getKeyPress");
  userGuess=userGuess.toLowerCase();
    

  }
 


function getRandomPtr(max) {
      return Math.floor(Math.random() * Math.floor(max));
      // this will return 0 through max-1
}
function getRandomInt(max) {
  return getRandomPtr(max)+1
  // this will return 1 through max
}


