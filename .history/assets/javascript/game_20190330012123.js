<script></script>
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

 var curPtr=0, curCntGuess = 0; 
 var curLetter="",curWord="";
// curPtr= .... select a random word
//curWordArr = array the word at that index
for (var i=0; i<curWord.length; i++){
  // console.log(thisWord.charAt([i]));
  //fruits.push("Kiwi")
  curWordArr.push(curWord.charAt([i]));
}
// intialize badGuess as empy array 
var badGuess = [], curWordArr=[];
// whil curCntGuess < 10
 // get a keypress to curLetter
 // if escape, exit

 // increment curCntGuess
 curCntGuess++
//See if that letter was already chosen by parsing badGuess  
for (var j=0; j<badGuess.length; j++);
  // alert?  maybe make that letter change color?
//  else

    // for every letter in curWord, see if that letter exists at that index  charAt(index)
    // if so, pop that into correct index in curWordArr
    // for (var i=0; i<curWordArr.length; i++){
    // if index [i]is is blank
      //curWordArr[i]=curLetter
      //set getElementId for that index (see if I can create a variable "ltr_"+(toString([i])) 
      // now compare the word in curWordArr with curWord
      // ===
      // Alert :You Won
      // show image
      // "cntWins"
      // remove that word from the array wordARR

    //else
       // restart the game

 // else
    // pop that letter into the badGuess array
    // push content for ltrTried ids

function getUserGuess() { 
  var userGuess= ddocument.getElementById("getKeyPress")
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


