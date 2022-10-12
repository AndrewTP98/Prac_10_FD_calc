const fs = require('fs');
const path =require('path')
const calculatorFunctions = require('../index');
const html = fs.readFileSync(path.resolve(__dirname,'../index.html'), 'utf8').split('</head>')[1].split('<script ')[0]

describe('my beverage', () => {
    beforeEach(() => {
        document.body.innerHTML = html;
    })
   
    test('Check addTodo able add todo to todoList', () => {
        
        calculatorFunctions.pressBtn(document.getElementById('btn-7'))
        const expectedValue = 7;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue.toString());
    });

    test('should concat the new button pressed to the screen if already exist some value', () => {
        
        calculatorFunctions.pressBtn(document.getElementById('btn-7'))
        calculatorFunctions.pressBtn(document.getElementById('btn-8'))
        const expectedValue = 78;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue.toString());
    });

    test('should calculate the operations if equal button is pressed', () => {

        calculatorFunctions.pressBtn(document.getElementById('btn-5'))
        calculatorFunctions.pressBtn(document.getElementById('btn-addition'))
        calculatorFunctions.pressBtn(document.getElementById('btn-7'))
        calculatorFunctions.pressBtn(document.getElementById('btn-equal'))
        const expectedValue = 12;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue.toString());
    });

    test('should channge the screen to 8 if the sum is 3 + 5', () => {
        calculatorFunctions.pressBtn(document.getElementById('btn-3'))
        calculatorFunctions.pressBtn(document.getElementById('btn-addition'))
        calculatorFunctions.pressBtn(document.getElementById('btn-5'))
        calculatorFunctions.pressBtn(document.getElementById('btn-equal'))
        calculatorFunctions.calculate();
        const expectedValue = 8;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue.toString());
    });

    test('should clear the screen and set 0', () => {    
        calculatorFunctions.clearScreen()
        const expectedValue = 0;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue.toString());
    });
});