function calculateSI()
{

var p = parseFloat(document.getElementById("principal").value);
var r = parseFloat(document.getElementById("rate").value);
var t = parseFloat(document.getElementById("time").value);

var si = (p * r * t) / 100;

document.getElementById("result").innerHTML =
"Simple Interest = " + si;

}