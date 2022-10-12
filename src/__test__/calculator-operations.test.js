
const calculatorFunctions = require('../index');
describe('my beverage', () => {
    test('Check addTodo able add todo to todoList', () => {
        document.body.innerHTML = `
        <div class="calculator__screen-number" id="sc-number">0</div>
        <div class="calculator__btn" id="btn-7" onclick="pressBtn(this)">7</div>        
        <script src="/src/index.js"></script>`;
        calculatorFunctions.pressBtn(document.getElementById('btn-7'))
        const expectedValue = 7;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue.toString());
    });
    test('should concat the new button pressed to the screen if already exist some valor', () => {
        document.body.innerHTML = `
        <div class="calculator__screen-number" id="sc-number">0</div>
        <div class="calculator__btn" id="btn-7" onclick="pressBtn(this)">7</div>
        <div class="calculator__btn" id="btn-8" onclick="pressBtn(this)">8</div>             
        <script src="/src/index.js"></script>`;
        calculatorFunctions.pressBtn(document.getElementById('btn-7'))
        calculatorFunctions.pressBtn(document.getElementById('btn-8'))
        const expectedValue = 78;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue.toString());
    });
    test('should calculate the operations if equal button is pressed', () => {
        document.body.innerHTML = `   
        <div class="calculator__screen-number" id="sc-number">3+5</div>
        <div class="calculator__btn calculator__btn--equal" id="btn-equal" onclick="pressBtn(this)">=</div>     
        <script src="/src/index.js"></script>`;
        calculatorFunctions.pressBtn(document.getElementById('btn-equal'))
        const expectedValue = 8;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue.toString());
    });
    test('should channge the screen to 8 if the sum is 3 + 5', () => {
        document.body.innerHTML = `
        <div class="calculator__screen-number" id="sc-number">3+5</div>      
        <script src="/src/index.js"></script>`;
        calculatorFunctions.calculate();
        const expectedValue = 8;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue.toString());
    });
    test('should clear the screen and set 0', () => {
        document.body.innerHTML = `
        <div class="calculator__screen-number" id="sc-number">3+5</div>
        <div class="calculator__btn calculator__btn--clear" id="btn-clear" onclick="clearScreen()">C</div>    
        <script src="/src/index.js"></script>`;
        calculatorFunctions.clearScreen()
        const expectedValue = 0;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue.toString());
    });
});

/* const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('my beverage', () => {
    test('Check addTodo able add todo to todoList', () => {
        const dom = new JSDOM(`
        <div class="calculator__screen-number" id="sc-number">0</div>
        <div class="calculator__btn" id="btn-7" onclick="pressBtn(this)">7</div>        
        <script src="/src/index.js"></script>`);
        require('../index.js');

        const action = dom.window.document.getElementById('btn-7');
        const expectedValue = 7;
        const result = dom.window.document.getElementById('sc-number').innerHTML;
        action.click();

        expect(result).toBe(expectedValue);
    });
});  */