//Create and array of words

var word = ['the proposal', 'leap year', 'the wedding date','the notebook'];
var doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
          'y','z',
         
]

//Choose word randomly
let randNum = Math.floor (Math.random() * word.length);
let choosenWord = word[randNum];
let lettersInWord = [];
let numBlanks = 0;

let rightWord = [];
let wrongWord = [];
let UnderScore = [];

let docUnderScore = document.getElementsByClassName ('underscores');
let docRightGuess = document.getElementsByClassName ('rightGuess');
let docWrongGuess = document.getElementsByClassName ('wrongGuess');

//testing
console.log(choosenWord);

//Create underscores based on lenght of word
let generateUnderScore = () => {
  for (let i = 0; i < choosenWord.length; i++)
  {
    UnderScore.push('_');

}
return UnderScore;

}

function startGame()
{
	choosenWord.length;
	lettersInWord = choosenWord.split('');
	//Get the number of blanks
	numBlanks = lettersInWord.length;
	
	rightWord = [];
	wrongLetters =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
            'y','z'];
}

//Get Users guess

document.addEventListener('keypress', (event) => {
  let keyword = String.fromCharCode(event.keyCode);
  
// if users guess is right

  if (choosenWord.indexOf(keyword) > -1) {
// add to right words array
    rightWord.push(keyword);
    UnderScore[choosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = UnderScore.join('');
    docRightGuess[0].innerHTML = rightWord;

    if(UnderScore.join('') ==  choosenWord) {
      alert('You Win');
    }
  }

  else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
  }


});


docUnderScore[0].innerHTML = generateUnderScore ().join('');	



// Check if guest is right

// If right push to right array

// If wrong push to wrong array




