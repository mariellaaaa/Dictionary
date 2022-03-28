let wordsList = [];

function addWords() {
  let template = wordsList.map(word => `<li>${word}</li>`).join('\n');
}

let buttonAdd = document.querySelector('button');
let input = document.querySelector('input');

buttonAdd.addEventListener('click', () =>{
  wordsList.push(input.value);
  input.value = '';
  addWords();
});

function verifyWord() {
  let value = document.getElementById('wordToverify').value;
  if (wordsList.indexOf(value) > -1) {
    document.getElementById('outputtext').innerHTML = value + " " + "exists in the Dictionary";
  } else {
    document.getElementById('outputtext').innerHTML = value + " " + "doesn't exist in the Dictionary";
  }
}
