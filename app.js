let paragraphElement = document.body.firstElementChild;

console.log(paragraphElement);
function whenClicked(){
    paragraphElement.textContent='Clicked!';
}

paragraphElement.addEventListener('click',whenClicked)

let inputElement =document.body.querySelector('input');

function whenTyped(){
    let enteredText=inputElement.value;
    console.log(enteredText);
}

//Another more effecieny way to this is :

function retrieveUserInput(event){
    let enteredText=event.target.value;
    console.log(enteredText);
}

// inputElement.addEventListener('input',whenTyped);
// inputElement.addEventListener('input',retrieveUserInput);

