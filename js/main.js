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