//function to add event listener to the Add Income button//
function open_Income(){
  var income1 = document.getElementById('income1');
  income1.addEventListener('click', showaddIncome, false);
}

//function to add event listener to Add Income and cancel button//
function close_Income(){
  var button2 = document.getElementById('button2');
  var cancel = document.getElementById("cancel2")
  cancel.addEventListener('click', hideaddIncome, false);
  button2.addEventListener('click', hideaddIncome, false);
}

//function to show the option to add income//
function showaddIncome() {
   document.getElementById('add_income').style.display = "block";
}
//function to hide the option to add income//
function hideaddIncome() {
   document.getElementById('add_income').style.display = "none";
}


window.addEventListener('load', close_Income, false)
window.addEventListener('load', open_Income, false)
