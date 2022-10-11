function clearScreen(){
    let screen = document.getElementById('sc-number');
    screen.innerHTML = '0';
}
function pressBtn(element){
    let screen = document.getElementById('sc-number')
    screen.innerHTML
    let btn = element.innerHTML;
    if(btn === '=')
    {
        calculate();
    }else{
        if( screen.innerHTML === '0')
        {
            screen.innerHTML = btn;
        }
        else{
            screen.innerHTML = screen.innerHTML + btn;
        }
    }
}
function calculate(){
    let screen = document.getElementById('sc-number')
    const res = eval(screen.innerHTML)
    screen.innerHTML = res;
}