function displayNumberofwords(event){
    let string=event.target.value;
    let length=string.length;
    let remainingcharacters= maxAllowedCharacters - length;
    remainingcharsElement.textContent=remainingcharacters;
    
}

let productNameInputElement = document.getElementById('product-name');
let remainingcharsElement = document.getElementById('remaining-chars');
let maxAllowedCharacters=productNameInputElement.maxLength;


let theLength=document.body.querySelector('input');

productNameInputElement.addEventListener('input',displayNumberofwords);

// let newElement=document.createElement('h3');
// h3.textContent='/80';
// document.body.append(newElement); 