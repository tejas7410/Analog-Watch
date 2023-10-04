 setInterval(() => {
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let mrorate = 6*m;
let hrorate = h*30+m/2;
let srorate = 6*s;
document.getElementById("second").style.transform = "rotate("+srorate+"deg)";
document.getElementById("minute").style.transform = "rotate("+mrorate+"deg)";
document.getElementById("hour").style.transform = "rotate("+hrorate+"deg)";

}, 1000);