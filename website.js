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

function add_Expense(){
  var button1 = document.getElementById('button1');
  button1.addEventListener('click', addRecord, false);

}


category1 = [];
expense = []
function addRecord() {
  var inp = document.getElementById('category1');
  var blah = document.getElementById('expense');

  window.expense.push(blah.value);
  category1.push(inp.value);
  inp.value = "";
  blah.value="";
  window.total_expense = Number(expense.reduce(myFunc))
  document.getElementById("expense_added").innerHTML = category1.join("<br/> ");
  document.getElementById("expense_added3").innerHTML = "$" +expense.join("<br/> $");
  document.getElementById("expense_total").innerHTML = "$"+expense.reduce(myFunc);
  if (window.total_income==null){
    document.getElementById("total").innerHTML = "Balance: $ -" +  window.total_expense;
  }
  else{
    var blah = Number(window.total_income) - Number(window.total_expense)
    document.getElementById("total").innerHTML ="Balance: $" + blah;
  }
  function myFunc(total, expense) {
  return Number(total) + Number(expense);
}
}

function date_spent(){
  var button1 = document.getElementById('button1');
  button1.addEventListener('click', date1, false);
}
function date1() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  document.getElementById("expense_added2").innerHTML = n;
}


function open_Income(){
  var income1 = document.getElementById('income1');
  income1.addEventListener('click', showDiv1, false);
}
function showDiv1() {
   document.getElementById('add_income').style.display = "block";
}
function close_Income(){
  var button2 = document.getElementById('button2');
  button2.addEventListener('click', hideDiv1, false);
}
function hideDiv1() {
   document.getElementById('add_income').style.display = "none";
}


function add_Income(){
  var button2 = document.getElementById('button2');
  button2.addEventListener('click', addIncome, false);

}

category2 = [];
income = []
function addIncome() {
  var input = document.getElementById('category2');
  var bah = document.getElementById('income')
  window.income.push(bah.value);
  category2.push(input.value);
  input.value = "";
  bah.value="";
  window.total_income= Number(income.reduce(myFunc))
  document.getElementById("income_added").innerHTML = category2.join("<br/> ");
  document.getElementById("income_added3").innerHTML = "$" + income.join("<br/> $");
  document.getElementById("income_total").innerHTML = "$"+income.reduce(myFunc);
  if (window.total_expense ==null){
    document.getElementById("total").innerHTML ="Balance: $"+ window.total_income;
  }

  else{
    var blah = Number(window.total_income) - Number(window.total_expense)
    document.getElementById("total").innerHTML = "Balance: $" + blah;
  }
  console.log(Number(blah))
  function myFunc(total, income) {
  return Number(total) + Number(income);
    }
}

function date_earn(){
  var button2 = document.getElementById('button2');
  button2.addEventListener('click', date2, false);
}

function date2() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  document.getElementById("income_added2").innerHTML = n +"<br/>";
}
window.addEventListener('load', date_earn, false)
window.addEventListener('load', date_spent, false)
window.addEventListener('load', close_Income, false)
window.addEventListener('load', open_Income, false)
window.addEventListener('load', close_Expense, false)
window.addEventListener('load', open_Expense, false)
window.addEventListener('load', add_Expense, false)
window.addEventListener('load', add_Income, false)
