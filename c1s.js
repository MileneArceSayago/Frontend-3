//ARROW FUNCTIONS
const arrowAddOne = (number) => {
    const result = number +1
    return result;
};
console.log(arrowAddOne(5));


//FUNCION TRADICIONAL
const traditionalAddOne = function(number){
    const result = number +1
    return result;
};
console.log(traditionalAddOne(6));

//TEMPLATE LITERALS
function sayHello(text){
    return `Hello ${text}!`;
}

console.log(sayHello("React"));

//TERNARY OPERATORS
const result = true ? 'TRUE' : 'FALSE';
console.log(result);

const result2 = undefined ? 'TRUE' : 'FALSE';
console.log(result2);

const result3 = ""? 'TRUE' : 'FALSE';
console.log(result3);


