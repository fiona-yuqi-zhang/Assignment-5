
  let radius=3*3*Math.PI
let area=3*3*Math.PI
let circumference=2*radius*Math.PI
area = radius * radius * Math.PI
function number() {
  radius = document.getElementById("answer").value;
}
function CalculateArea(){
    var radius =document.form1.txtRadius.value;
    document.write("<P>The area of the circle is " + (radius * radius * Math.PI) + "</p>");
    document.write("<P>The circumference of the circle is " + (2 * radius * Math.PI) + "</p>");
    }
function number() {
  radius=document.getElementById("answer").value;
    radius=parseInt(radius,10);
  area=(radius * radius * Math.PI)
  alert(area)
  circumference:(2 * radius * Math.PI)
  alert(circumference);
}
function cf() {
  let circle = document.getElementById("answer").value;
  document.getElementById("demo").innerHTML = circle;
}