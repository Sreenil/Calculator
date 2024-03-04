var display = document.getElementById('display');

function btnClick(value)
{
    display.value += value ;
}

function clearDisplay()
{
    display.value = "" ;
}

function findResult()
{
    var result = eval(display.value);
    display.value = result ;
}