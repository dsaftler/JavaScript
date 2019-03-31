
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
var maxGuesses=9
var  cntWins=0;
var userGuess;
// within the game
// while wordArr.length>0
//while (wordArr.length>0) {
var curPtr,curCntGuess,   
  curLetter,curWord,myWord,
  badGuess, curWordArr,
  isSolved;
initGame();

document.onkeydown = function(event){
  
  // Determines which key was pressed.
  var userGuess = event.key;
  userGuess=userGuess.toLowerCase()
  console.log("userGuess: "+userGuess);
  // is userGuess already in badGuess 
  for (let i=0; i<badGuess.length; i++) {
        //See if that letter was already chosen by parsing badGuess 
    if (badGuess[i]===userGuess){
      alert("You alread guessed "+userGuess)
    }
  }
                //see if it's in the target word
                // for every letter in curWord, see if that letter exists at that index  charAt(index)
  console.log("curWordArr "+curWordArr)
  for (let i=0; i<curWordArr.length; i++)
  {
                //if index [j]is blank and matches our guess  
    console.log("curWordArr "+i)
    if (index[i]="" && curWordArr[i]===userGuess) 
    { 
                // pop that into correct index in curWord 
      curWordArr[i]=userGuess;
                //set getElementId for that index (see if I can create a variable "ltr_"+(toString([j]))
      el="ltr_"+i;
      //getElementById(el).textContent:userGuess;
    } else 
    {
      // push to badArray
      badArray.push(userGuess)
      console.log("badArray: "+badArray)
      curCntGuess++
      console.log("curCntGuess :" +curCntGuess)
      // push content for ltrTried ids
      // show content for badguesses
    }
  }

  if (curCntGuess>maxGuesses){
      alert('You lost')
      nextWord()
  } else {
    if (collapseArray()===curWord){
      alert("You won ") 
      nextWord()
    }   
  }

}


function initGame(){
  curPtr=0;
  curCntGuess = 0;   
  curLetter="";
  curWord="";
  myWord="";
  badGuess = [];
  curWordArr=[];
  isSolved=false;
  curPtr=getRandomPtr(wordArr.length); //0
  //curWordArr = array the word at that index
  curWord=wordArr[curPtr];   //unicorn
  for (let i=0; i<curWord.length; i++){
    myLetter=curWord.charAt([i]);
    console.log(myLetter);
    curWordArr.push(myLetter);
  }
  //clear the ltrTried & ltr elements
  console.log(curPtr);
  console.log(curWord);
}
function nextWord(){
  wordArr.splice(curPtr,1)
  if (wordArr.length=0){
    alert("End of Game")
  }else{
    initGame()
  }
}


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


