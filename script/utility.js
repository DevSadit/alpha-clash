function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add(`hidden`);
}
function addElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove(`hidden`);
}


function continueGame(){
  // s1: creat a alphabet array .
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetArray.split('');
  // console.log(alphabets)

  // s2: creat a random numbwer between 0 to 25

  const randomNumber = Math.floor(Math.random() * 26 );
  // console.log(randomNumber)
  
  //s3: get the letter with randomnumber index

  const unickAlphabet = alphabets[randomNumber];

  //s4: show the random Alphabet to the webPage (p)

  const currentAlphabet = document.getElementById(`currentAlphabet`);
  currentAlphabet.innerText = unickAlphabet;

  //s5: set the bg color of kbd alphabetwise!!

  const kbd = document.getElementById(unickAlphabet);
  // console.log(kbd)
  kbd.classList.add("bg-yellow-600");
}