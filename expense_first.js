//Adding event listener to the Add Expense button//
function add_Expense(){
  var button1 = document.getElementById('button1');
  button1.addEventListener('click', addRecord, false);

}
//function to display expense added, total expense and get the data for the chart//
window.sum=[];
window.category1 = [];
window.expense = []
function addRecord() {
window.category_input = document.getElementById('category1');
window.expense_input = document.getElementById('expense');

  window.expense.push(window.expense_input.value);
  window.category1.push(category_input.value);
  window.sum.push({name: window.category_input.value, value:Number(window.expense_input.value)});
  window.category_input.value = "";
  window.expense_input.value="";
  window.total_expense = Number(expense.reduce(myFunc))
  document.getElementById("expense_added").innerHTML = window.category1.join ("<br/> ");
  document.getElementById("expense_added2").innerHTML = "$" +window.expense.join("<br/> $");
  document.getElementById("expense_total").innerHTML = "Expense - $"+window.expense.reduce(myFunc);
  document.getElementById("expense_total1").innerHTML = "$"+window.expense.reduce(myFunc);
  if (window.total_income==null){
    document.getElementById("total").innerHTML = "Balance: $ -" +  window.total_expense;
  }
  else{
    var expense_input = Number(window.total_income) - Number(window.total_expense)
    document.getElementById("total").innerHTML ="Balance: $" + expense_input;
  }
  function myFunc(total, expense) {
  return Number(total) + Number(expense);
}

var holder = {};

sum.forEach(function(data) {
  if (holder.hasOwnProperty(data.name)) {
    holder[data.name] = holder[data.name] + Number(data.value);
  } else {
    holder[data.name] = data.value;
  }
});



var data1 = [],
    data2 = [];

for (var property in holder) {

   if ( ! holder.hasOwnProperty(property)) {
      continue;
   }

   data1.push(property);
   data2.push(holder[property]);

}

//Adding chart to the app//
let myChart = document.getElementById('piechart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
  type:'pie',
  data:{
    labels:data1,
    datasets:[{
      label:'Population',
      data:data2,
      backgroundColor:[
        "orange",
        "white",
        'yellow',
        'red',
        'magenta',
        'purple',
        'blue',
        "cyan",
        "green",
        'dark green',
        'brown',
        'tan',
        'light grey',
        'blue',
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000',
    }]
  },
  options:{
    title:{
      display:true,
      text:'Expense',
      fontColor:"Black",
      fontSize:18,
      responsive:true
    },
    legend:{
      display:true,
      position:'bottom',
      labels:{
        usePointStyle: true,
        fontColor:'#000',
        fontSize: 13,
        boxWidth: 7,
      }
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});
}

window.addEventListener('load', add_Expense, false)
