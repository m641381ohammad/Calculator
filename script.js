
function allClear() {
    calc.txt.value = '';
}

function taghsim() {
    document.calc.txt.value +='/';
}

function zarb() {
    document.calc.txt.value +='*';
}

function mines() {
    document.calc.txt.value +='-';
}

function plus() {
    document.calc.txt.value +='+';
}

function sevenNumber() {
    document.calc.txt.value +='7';
}

function eightNumber() {
    document.calc.txt.value +='8';
}

function nineNumber() {
    document.calc.txt.value +='9';
}

function fourNumber() {
    document.calc.txt.value +='4';
}

function fiveNumber() {
    document.calc.txt.value +='5';
}

function seixNumber() {
    document.calc.txt.value +='6';
}

function threeNumber() {
    document.calc.txt.value +='3';
}

function towNumber() {
    document.calc.txt.value +='2';
}

function oneNumber() {
    document.calc.txt.value +='1';
}

function zeroNumber() {
    document.calc.txt.value +='0';
}

function towZeroNumber() {
    document.calc.txt.value +='00';
}

function point() {
    document.calc.txt.value +='.';
}

function equal() {
    document.calc.txt.value = eval(calc.txt.value);
}