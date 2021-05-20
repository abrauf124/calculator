function displayNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
}
function allClr(){
    form.displayResult.value="";
}
function clrLast(){
    form.displayResult.value=form.displayResult.value.substring(0,form.displayResult.value.length*1-1)
}