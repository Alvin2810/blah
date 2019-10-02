function add_Expense(){
  var button1 = document.getElementById('button1');
  button1.addEventListener('click', addRecord, false);

}

window.sum=[];
window.category1 = [];
window.expense = []
function addRecord() {
window.inp = document.getElementById('category1');
window.blah = document.getElementById('expense');

  window.expense.push(window.blah.value);
  window.category1.push(inp.value);
  window.sum.push({name: window.inp.value, value:Number(window.blah.value)});
  window.inp.value = "";
  window.blah.value="";
  window.total_expense = Number(expense.reduce(myFunc))
  document.getElementById("expense_added").innerHTML = window.category1.join ("<br/> ");
  document.getElementById("expense_added2").innerHTML = "$" +window.expense.join("<br/> $");
  document.getElementById("expense_total").innerHTML = "Expense - $"+window.expense.reduce(myFunc);
  document.getElementById("expense_total1").innerHTML = "$"+window.expense.reduce(myFunc);
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

var holder = {};

sum.forEach(function(d) {
  if (holder.hasOwnProperty(d.name)) {
    holder[d.name] = holder[d.name] + Number(d.value);
  } else {
    holder[d.name] = d.value;
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



console.log(data1)
console.log(data2)
let myChart = document.getElementById('piechart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
  type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:data1,
    datasets:[{
      label:'Population',
      data:data2,
      //backgroundColor:'green',
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
      fontSize:18,
      responsive:true
    },
    legend:{
      display:true,
      position:'bottom',
      labels:{
        fontColor:'#000',
        fontSize: 14,
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
