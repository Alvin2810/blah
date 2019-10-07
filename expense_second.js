//function to add event listener to the Add Expense button//
function open_Expense(){
  var expense1 = document.getElementById('expense1');
  expense1.addEventListener('click', showaddExpense, false);
}

//function to add event listener to Add expense and cancel button//
function close_Expense(){
  var button1 = document.getElementById('button1');
  var cancel1 = document.getElementById("cancel1")
  cancel1.addEventListener('click', hideaddExpense, false);
  button1.addEventListener('click', hideaddExpense, false);
}

//Adding event listener to the Summary button//
function open_Summary(){
  var summary = document.getElementById('summary');
  summary.addEventListener('click', showSum, false);
}

//Adding event listener to the go back button//
function close_Summary(){
  var back = document.getElementById('back');
  back.addEventListener('click', hidesum, false);
}

//function to show the option to add expense//
function showaddExpense() {
   document.getElementById('add_expense').style.display = "block";
}

//function to hide the option to add expense//
function hideaddExpense() {
   document.getElementById('add_expense').style.display = "none";
}

//show the summary of expense and income//
function showSum() {
   document.getElementById('transaction_summary').style.display = "block";
}

//hide the summary of expense and income//
function hidesum() {
   document.getElementById('transaction_summary').style.display = "none";
}

window.addEventListener('load', close_Summary, false)
window.addEventListener('load', close_Expense, false)
window.addEventListener('load', open_Expense, false)
window.addEventListener('load', open_Summary, false)
