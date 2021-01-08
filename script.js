let radius = 3 * 3 * Math.PI
let area = 3 * 3 * Math.PI
let circumference = 2 * radius * Math.PI
area = radius * radius * Math.PI
function number() {
radius = document.getElementById("answer").value;
radius = parseInt(radius,10);
area = (radius * radius * Math.PI)
alert(area)
}
function cf() {
let circle = document.getElementById("final").value;
document.getElementById("final").innerHTML = circle;
radius = parseInt(radius,10);
circumference = (2*radius*Math.PI)
alert(circumference)
}