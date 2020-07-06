function calcAmount() {

    let amountInput = document.querySelector("input[name='amount-input']");

}


function singleSelectChangeValue() {
    //Getting Value
    // METHOD 1
    var selValue = document.getElementById("hamburgerValasztas").value;
    //METHOD 2
    var selObj = document.getElementById("hamburgerValasztas");
    var selValue = selObj.options[selObj.selectedIndex].value;
    //Setting Value
    document.getElementById("hamburgerValasztasJS").value = selValue;
}


function singleSelectChangeValue2() {
    //Getting Value
    // METHOD 1
    var selValue = document.getElementById("pizzaValasztas").value;
    //METHOD 2
    var selObjPizza = document.getElementById("pizzaValasztas");
    var selValue = selObjPizza.options[selObjPizza.selectedIndex].value;
    //Setting Value
    document.getElementById("pizzaValasztasJS").value = selValue;
}


function singleSelectChangeValue3() {
    //Getting Value
    // METHOD 1
    var selValue = document.getElementById("uditoValasztas").value;
    //METHOD 2
    var selObjUdito = document.getElementById("uditoValasztas");
    var selValue = selObjUdito.options[selObjUdito.selectedIndex].value;
    //Setting Value
    document.getElementById("uditoValasztasJS").value = selValue;
}



