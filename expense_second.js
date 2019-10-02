function open_Expense(){
  var expense1 = document.getElementById('expense1');
  expense1.addEventListener('click', showDiv, false);
}
function showDiv() {
   document.getElementById('add_expense').style.display = "block";
}
function close_Expense(){
  var button1 = document.getElementById('button1');
  button1.addEventListener('click', hideDiv, false);
}
function hideDiv() {
   document.getElementById('add_expense').style.display = "none";
}

function open_Summary(){
  var summary = document.getElementById('summary');
  summary.addEventListener('click', showSum, false);
}
function showSum() {
   document.getElementById('bloo').style.display = "block";

}
function close_Summary(){
  var back = document.getElementById('back');
  back.addEventListener('click', hidesum, false);
}
function hidesum() {
   document.getElementById('bloo').style.display = "none";
}




window.addEventListener('load', close_Summary, false)

window.addEventListener('load', close_Expense, false)
window.addEventListener('load', open_Expense, false)
window.addEventListener('load', open_Summary, false)
