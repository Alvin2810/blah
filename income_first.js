//Adding event listener to the Add Income button//
function add_Income(){
  var button2 = document.getElementById('button2');
  button2.addEventListener('click', addIncome, false);

}

//function to display income added, total income//
category2 = [];
income = []
function addIncome() {
  var category_input2 = document.getElementById('category2');
  var income_input = document.getElementById('income')
  window.income.push(income_input.value);
  window.category2.push(category_input2.value);
  category_input2.value = "";
  income_input.value="";
  window.total_income= Number(income.reduce(myFunc))
  document.getElementById("income_added").innerHTML = category2.join("<br/> ");
  document.getElementById("income_added2").innerHTML = "$" + income.join("<br/> $");
  document.getElementById("income_total").innerHTML = "Income - $"+income.reduce(myFunc);
  document.getElementById("income_total1").innerHTML = "$"+income.reduce(myFunc);
  if (window.total_expense ==null){
    document.getElementById("total").innerHTML ="Balance: $"+ window.total_income;
  }

  else{
    var blah = Number(window.total_income) - Number(window.total_expense)
    document.getElementById("total").innerHTML = "Balance: $" + blah;
  }
  function myFunc(total, income) {
  return Number(total) + Number(income);
    }
  }

window.addEventListener('load', add_Income, false)
