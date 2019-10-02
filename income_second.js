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








window.addEventListener('load', close_Income, false)
window.addEventListener('load', open_Income, false)
