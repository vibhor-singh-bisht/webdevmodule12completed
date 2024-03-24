//First Example
const calculateSumButton=document.querySelector('#calculator button');
function calculateSum(event){
    const userNumberInputElement =document.querySelector('#user-number');
    const enteredNumber=userNumberInputElement.value;
    let sumuptoNumber=0;
    for(let i=1;i<=enteredNumber;i++){
        sumuptoNumber+=i;
    }
    const sumOutput=document.querySelector('#calculated-sum');
    sumOutput.textContent=sumuptoNumber;
    sumOutput.style.display='block';
}
calculateSumButton.addEventListener('click',calculateSum);

//Second Example (Highlight the links)  

const HighlightLinksButtonElement=document.querySelector('#highlight-links button');
const allAnchorElement=document.querySelectorAll('#highlight-links a');

HighlightLinksButtonElement.addEventListener('click',changeColourofAllLinks)
function changeColourofAllLinks(){
    for( let x of allAnchorElement){
        x.classList.add('highlight');
    }
}


//example three (Display user data )

const dummyUserData={
    firstName:'Vibhor',
    lastName:'Singh',
    age:23
}
const displayUserDataButtonElement=document.querySelector('#user-data button')
function displayUserData(){
    const outputDataElement=document.getElementById('output-user-data');
    outputDataElement.innerHTML='';
    for(let x in dummyUserData){
        const newUserDataListItemElement=document.createElement('li');
        newUserDataListItemElement.textContent=x + ' : ' + dummyUserData[x];
        outputDataElement.append(newUserDataListItemElement);
    }
}
displayUserDataButtonElement.addEventListener('click',displayUserData)

//Statistics Roll the dice example

const rollDiceElement=document.querySelector('statistics button');
function rollDice(){
    return Math.floor(Math.random()*6)+1;
}
function deriveNumberofDiceRolls(){
    const targetNumberInputElement=document.getElementById('user-targer-number');
    const diceRollsListElement=document.getElementById('dice-rolls')

    const enteredNumber=targetNumberInputElement.value;
    diceRollsListElement.innerHTML='';

    let hasRolledTargetNumber=false;
    let numberofRolls=0;


    while(!hasRolledTargetNumber){
        const rolledNumber=rollDice()
        numberofRolls++;
        const newRollListItemElemet=document.createElement('li');
        const outputText= 'Roll'+numberofRolls+':'+rolledNumber;
        newRollListItemElemet.textContent=outputText;
        diceRollsListElement.append(newRollListItemElemet);
        hasRolledTargetNumber=enteredNumber==rolledNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement=document.getElementById('output-target-number');

    outputTargetNumberElement.textContent=enteredNumber;
    outputTotalRollsElement.textContent=numberofRolls;

}
rollDiceElement.addEventListener('click',deriveNumberofDiceRolls)