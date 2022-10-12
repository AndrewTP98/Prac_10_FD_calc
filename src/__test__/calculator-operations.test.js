
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
        expect(result).toBe(expectedValue);
    });
    test('Check addTodo able add todo to todoList', () => {
        document.body.innerHTML = `
        <div class="calculator__screen-number" id="sc-number">0</div>
        <div class="calculator__btn" id="btn-7" onclick="pressBtn(this)">7</div>        
        <script src="/src/index.js"></script>`;
        calculatorFunctions.pressBtn(document.getElementById('btn-7'))
        const expectedValue = 7;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue);
    });
    test('Check addTodo able add todo to todoList', () => {
        document.body.innerHTML = `
        <div class="calculator__screen-number" id="sc-number">0</div>
        <div class="calculator__btn" id="btn-7" onclick="pressBtn(this)">7</div>        
        <script src="/src/index.js"></script>`;
        calculatorFunctions.pressBtn(document.getElementById('btn-7'))
        const expectedValue = 7;
        const result = document.getElementById('sc-number').innerHTML;
        expect(result).toBe(expectedValue);
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