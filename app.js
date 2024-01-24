let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1p = document.getElementById("btn1+");
let btn1m = document.getElementById("btn1-");
let btn2p = document.getElementById("btn2+");
let btn2m = document.getElementById("btn2-");
let btn3p = document.getElementById("btn3+");
let btn3m = document.getElementById("btn3-");
let btn4p = document.getElementById("btn4+");
let btn4m = document.getElementById("btn4-");
let btn5p = document.getElementById("btn5+");
let btn5m = document.getElementById("btn5-");
let btn6p = document.getElementById("btn6+");
let btn6m = document.getElementById("btn6-");
let btn7p = document.getElementById("btn7+");
let btn7m = document.getElementById("btn7-");
let btn8p = document.getElementById("btn8+");
let btn8m = document.getElementById("btn8-");
let locationb = document.getElementById("loc");



let am1 = 0;
let am2 = 0;
let am3 = 0;
let am4 = 0;
let am5 = 0;
let am6 = 0;
let am7 = 0;
let am8	 = 0;

document.getElementById("count1").innerText = am1
document.getElementById("count2").innerText = am2
document.getElementById("count3").innerText = am3
document.getElementById("count4").innerText = am4
document.getElementById("count5").innerText = am5
document.getElementById("count6").innerText = am6
document.getElementById("count7").innerText = am7
document.getElementById("count8").innerText = am8








btn1p.addEventListener("click", function(){
		am1 = am1+1;
		document.getElementById("count1").innerText = am1;
});

btn1m.addEventListener("click", function(){
	if (am1 > 0) {
		am1 = am1-1;
		document.getElementById("count1").innerText = am1;
	}
});





btn2p.addEventListener("click", function(){
		am2 = am2+1;
		document.getElementById("count2").innerText = am2;
});

btn2m.addEventListener("click", function(){
	if (am2 > 0) {
		am2 = am2-1;
		document.getElementById("count2").innerText = am2;
	}
});





btn3p.addEventListener("click", function(){
		am3 = am3+1;
		document.getElementById("count3").innerText = am3;
});

btn3m.addEventListener("click", function(){
	if (am3 > 0) {
		am3 = am3-1;
		document.getElementById("count3").innerText = am3;
	}
});




btn4p.addEventListener("click", function(){
		am4 = am4+1;
		document.getElementById("count4").innerText = am4;
});

btn4m.addEventListener("click", function(){
	if (am4 > 0) {
		am4 = am4-1;
		document.getElementById("count4").innerText = am4;
	}
});





btn5p.addEventListener("click", function(){
		am5 = am5+1;
		document.getElementById("count5").innerText = am5;
});

btn5m.addEventListener("click", function(){
	if (am5 > 0) {
		am5 = am5-1;
		document.getElementById("count5").innerText = am5;
	}
});





btn6p.addEventListener("click", function(){
		am6 = am6+1;
		document.getElementById("count6").innerText = am6;
});

btn6m.addEventListener("click", function(){
	if (am6 > 0) {
		am6 = am6-1;
		document.getElementById("count6").innerText = am6;
	}
});






btn7p.addEventListener("click", function(){
		am7 = am7+1;
		document.getElementById("count7").innerText = am7;
});

btn7m.addEventListener("click", function(){
	if (am7 > 0) {
		am7 = am7-1;
		document.getElementById("count7").innerText = am7;
	}
});



btn8p.addEventListener("click", function(){
		am8 = am8+1;
		document.getElementById("count8").innerText = am8;
});

btn8m.addEventListener("click", function(){
	if (am8 > 0) {
		am8 = am8-1;
		document.getElementById("count8").innerText = am8;
	}
});






tg.MainButton.show()

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	let loc = document.getElementById("loc").value;
	let number = document.getElementById("number").value;
	tg.sendData(((""+am1)+" "+(""+am2)+" "+(""+am3)+" "+(""+am4)+" "+(""+am5)+" "+(""+am6)+" "+(""+am7)+" "+(""+am8)+" "+(""+loc)+" "(""+number)));
	
	//при клике на основную кнопку отправляем данные в строковом виде
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);