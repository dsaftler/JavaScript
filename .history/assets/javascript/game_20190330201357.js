
// Variables
var wordArr 
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
  badGuess, curWordArr,builtWord,
  isFound,
  curPtr=0,
  firstTime=true;
initGame();

document.onkeydown = function(event){
  isFound=false
  // Determines which key was pressed.
  var userGuess = event.key;
  userGuess=userGuess.toLowerCase()
  console.log("userGuess: "+userGuess);
  // is userGuess already in badGuess 
  for (let i=0; i<badGuess.length; i++) {
        //See if that letter was already chosen by parsing badGuess 
    if (badGuess[i]===userGuess){
      alert("You alread guessed "+userGuess)
      isFound=true
    }
  }
                //see if it's in the target word
                // for every letter in curWord, see if that letter exists at that index  charAt(index)
  console.log("curWordArr "+curWordArr)
  if (!isFound)
  {
    for (let i=0; i<curWordArr.length; i++)
    {
                  //if index [j]is blank and matches our guess  
      
      if (curWordArr[i]===userGuess) 
      { 
        console.log("curWordArr "+i+'='+curWordArr[i])
        builtWord[i]=userGuess
                 //set getElementId for that index (see if I can create a variable "ltr_"+(toString([j]))
        el="ltr_"+i;
        //getElementById(el).textContent:userGuess;
        isFound=true
      }  
    }
  }
  if (!isFound)
  {
        // push to badGuess
      badGuess.push(userGuess)
      console.log("badGuess: "+badGuess)
      curCntGuess++
      console.log("curCntGuess :" +curCntGuess)
      // push content for ltrTried ids
      // show content for badguesses
  }

  

  if (curCntGuess>maxGuesses){
      alert('You lost')
      initGame()
  } else {
    if (collapseArray()===curWord){
      alert("You won ") 
      initGame()
    } else {
      myWord=''
    }   
  }

}


function initGame(){
 
  curCntGuess = 0;   
  curLetter="";
  curWord="";
  myWord="";
  if (firstTime){
    wordArr= ["unicorn","griffin","dragon","mermaid","centaur","pegasus"];
    console.log("WordArr init: "+wordArr)
    console.log("wordArr.length: "+wordArr.length)
    firstTime=false}
  else{
    wordArr.splice(curPtr,1)
    console.log("WordArr post splice: "+wordArr)
    console.log("wordArr.length: "+wordArr.length)
  }
  console.log('firstTime:' +firstTime)
  console.log("Word Arr: " +wordArr)
  if (wordArr.length=0){
    alert("Game Over")
  }
  badGuess = [];
  curWordArr=[];
  builtWord=[];
  console.log("WordArr aft: "+wordArr)
  console.log("wordArr.length: "+wordArr.length)
  curPtr=getRandomPtr(wordArr.length); //0
  console.log("curPtr: "+curPtr)
  //curWordArr = array the word at that index
  curWord=wordArr[curPtr];   //unicorn
  console.log("curWord: "+curWord) 
  for (let i=0; i<curWord.length; i++){
    myLetter=curWord.charAt([i]);
    //console.log(myLetter);
    curWordArr.push(myLetter);
  }
  //clear the ltrTried & ltr elements
  //console.log(curPtr);
  //console.log(curWord);
  console.log("curWordArr "+curWordArr)
}

function nextWord(){
  console.log("Word Arr b4: " +wordArr)
  wordArr.splice(curPtr,1)
  var newArr=Array.from(wordArr)
  console.log("WordArr aft: "+wordArr)
  console.log("newArr aft: "+newArr)
  console.log("wordArr.length: "+wordArr.length)
  console.log("newArr length: "+newArr.length)
  wordArr=[];
  wordArr=Array.from(newArr)
  console.log("wordArr.length: "+wordArr.length)

  if (wordArr.length=0){
    alert("End of Game")
  }else{
    initGame()
  }
}


function collapseArray(){
  
  for (let k=0; k<builtWord.length; k++) {
    localVal=builtWord[k]
    if (typeof(localVal)!='undefined') {
   // console.log("myWord length: "+myWord.length+ " K is "+localVal)    
    myWord=myWord+localVal
   //console.log("myWord "+myWord)
    }
  }
  return myWord
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


