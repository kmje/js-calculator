let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => {
    if(b == 0){
        return "undefined";
    }
    return a / b;
}   

let operate = (operator, num1, num2) => operator(num1, num2);
const display = document.querySelector('#calc-screen');
const numPress = document.querySelectorAll('.num-button');
const operatorPress = document.querySelector('.operator-button');
numPress.forEach(numButton => {
    numButton.addEventListener('click', () => {
        if(display.innerHTML == "0"){
            display.innerHTML = numButton.innerHTML;
        }
        else{
            display.append(numButton.innerHTML);
        }
    })
})
operatorPress.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        
    })
})
