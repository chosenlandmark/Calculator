
const calculator = {
    display: "0",
    operator:"",
    result: "",
    num:0,
    add:function(num1,num2){
        return num1 + num2;
    },
    subtract:function(num1,num2){
        return num1 - num2;
    },
    multiply:function(num1,num2){
        return num1 * num2;
    },
    divide:function(num1,num2){
        if(num1 === 0 || num2 === 0){
            return 0;
        } 
        else{
            return num1 / num2;
        }
    },
    operate: function(operator,num1,num2){
        number1 = parseInt(num1);
        number2 = parseInt(num2);
    //add function
    if(operator === "+"){
        return this.add(number1,number2);
        }
    //subtract function
    if(operator === "-"){
         return this.subtract(number1,number2);
        }
    //multiply function
    if(operator === "*"){
        return this.multiply(number1,number2);
        }
    //multiply function
    if(operator === "/"){
        return this.divide(number1,number2);
        }

    },
    operatorHandler: function(operator){
        this.operator = operator;
        console.log(this.operator);
        //set the first display to number 
        this.num = this.display;
        display.textContent = "";
        return this.operator;
    }
}


const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

function updateDisplay(pressedNumber){
    if(display.textContent === "0"){
        display.textContent = pressedNumber;
        calculator.display = pressedNumber;
    }
    else {
        display.textContent =  display.textContent + pressedNumber;
        calculator.display = parseInt(display.textContent);
    }
    console.log(pressedNumber);
}
//Number Clicks
numbers.forEach((number) => {
    number.addEventListener("click",() => {
      updateDisplay(number.id);
    })
});

//Operator Clicks
operators.forEach((operator) => {
    operator.addEventListener("click",() => {
        calculator.operatorHandler(operator.id);
    })
});

//equals
equals.addEventListener("click",() =>{
    let result= calculator.operate(calculator.operator,calculator.num,calculator.display);
    console.log("=");
    //set display to the result of the operation
    calculator.display = result.toString();
    display.textContent = result.toString();
    console.log(result);
})

//clear
clear.addEventListener("click",() => {
    console.log(clear.id);
    display.textContent = "0";
    calculator.display = "0";
    calculator.num = "0";
})