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
  window.category2.push(input.value);
  input.value = "";
  bah.value="";
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
