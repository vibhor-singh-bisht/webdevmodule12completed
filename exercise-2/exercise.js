// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

console.dir(document.body.firstElementChild);
const firstButtonElement=document.body.children[2].children[4];
// document.querySelector('button')
console.log(firstButtonElement);
const secondButtonElement=document.body.querySelector('#secondButtonElement');
console.log(secondButtonElement);

firstButtonElement.addEventListener('click',addingEventtoButton1)
secondButtonElement.addEventListener('click',addingEventtoButton2)

function addingEventtoButton1(){
    // let removingPara=
    document.body.children[2].children[3].remove();
    // removingPara.remove();
}
function addingEventtoButton2(event){
    firstParaElement.style.backgroundColor='#d7ecff';
}

const firstParaElement=document.body.children[2].children[1];
const seconfParaElement=document.body.children[2].children[2];