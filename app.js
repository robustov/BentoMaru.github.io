let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.show()
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
let btn9p = document.getElementById("btn9+");
let btn9m = document.getElementById("btn9-");
let locationb = document.getElementById("loc");

//let im1 = document.getElementById("im1");



let am1 = localStorage.getItem("am1");
let am2 = localStorage.getItem("am2");
let am3 = localStorage.getItem("am3");
let am4 = localStorage.getItem("am4");
let am5 = localStorage.getItem("am5");
let am6 = localStorage.getItem("am6");
let am7 = localStorage.getItem("am7");
let am8	= localStorage.getItem("am8");
let am9	= localStorage.getItem("am9");

if(am1 == null){
	document.getElementById("count1").innerText = 0;
}
else{
	document.getElementById("count1").innerText = localStorage.getItem("am1")
}
if(am2 == null){
	document.getElementById("count2").innerText = 0;
}
else{
	document.getElementById("count2").innerText = localStorage.getItem("am2")
}
if(am3 == null){
	document.getElementById("count3").innerText = 0;
}
else{
	document.getElementById("count3").innerText = localStorage.getItem("am3")
}

if(am4 == null){
	document.getElementById("count4").innerText = 0;
}
else{
	document.getElementById("count4").innerText = localStorage.getItem("am4")
}

if(am5 == null){
	document.getElementById("count5").innerText = 0;
}
else{
	document.getElementById("count5").innerText = localStorage.getItem("am5")
}

if(am6 == null){
	document.getElementById("count6").innerText = 0;
}
else{
	document.getElementById("count6").innerText = localStorage.getItem("am6")
}

if(am7 == null){
	document.getElementById("count7").innerText = 0;
}
else{
	document.getElementById("count7").innerText = localStorage.getItem("am7")
}

if(am8 == null){
	document.getElementById("count8").innerText = 0;
}

else{
	document.getElementById("count8").innerText = localStorage.getItem("am8")
}
if(am9 == null){
	document.getElementById("count9").innerText = 0;
}

else{
	document.getElementById("count9").innerText = localStorage.getItem("am9")
}

//document.getElementById("count2").innerText = am2;
//document.getElementById("count3").innerText = am3;
//document.getElementById("count4").innerText = am4;
//document.getElementById("count5").innerText = am5;
//document.getElementById("count6").innerText = am6;
//document.getElementById("count7").innerText = am7;
//document.getElementById("count8").innerText = am8;






tg.MainButton.setText("Выберите товары");




document.getElementById("im1").addEventListener("click", function(){
	tg.MainButton.hide()
});
document.getElementById("im2").addEventListener("click", function(){
	tg.MainButton.hide()
});
document.getElementById("im3").addEventListener("click", function(){
	tg.MainButton.hide()
});
document.getElementById("im4").addEventListener("click", function(){
	tg.MainButton.hide()
});
document.getElementById("im5").addEventListener("click", function(){
	tg.MainButton.hide()
});
document.getElementById("im6").addEventListener("click", function(){
	tg.MainButton.hide()
});
document.getElementById("im7").addEventListener("click", function(){
	tg.MainButton.hide()
});
document.getElementById("im8").addEventListener("click", function(){
	tg.MainButton.hide()
});










btn1p.addEventListener("click", function(){
		am1 = Number(localStorage.getItem("am1"));
		am1 = am1+1;
		document.getElementById("count1").innerText = am1;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am1', am1);
});

btn1m.addEventListener("click", function(){
	am1 = Number(localStorage.getItem("am1"));
	if (am1 > 0) {
		am1 = am1-1;
		document.getElementById("count1").innerText = am1;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am1', am1);
	}
});





btn2p.addEventListener("click", function(){
		am2 = Number(localStorage.getItem("am2"));
		am2 = am2+1;
		document.getElementById("count2").innerText = am2;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am2', am2);
});

btn2m.addEventListener("click", function(){
	am2 = Number(localStorage.getItem("am2"));
	if (am2 > 0) {
		am2 = am2-1;
		document.getElementById("count2").innerText = am2;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am2', am2);
	}
});





btn3p.addEventListener("click", function(){
		am3 = Number(localStorage.getItem("am3"));
		am3 = am3+1;
		document.getElementById("count3").innerText = am3;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am3', am3);
});

btn3m.addEventListener("click", function(){
	am3 = Number(localStorage.getItem("am3"));
	if (am3 > 0) {
		am3 = am3-1;
		document.getElementById("count3").innerText = am3;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am3', am3);
	}
});




btn4p.addEventListener("click", function(){
		am4 = Number(localStorage.getItem("am4"));
		am4 = am4+1;
		document.getElementById("count4").innerText = am4;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am4', am4);
});

btn4m.addEventListener("click", function(){
	am4 = Number(localStorage.getItem("am4"));
	if (am4 > 0) {
		am4 = am4-1;
		document.getElementById("count4").innerText = am4;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am4', am4);
	}
});





btn5p.addEventListener("click", function(){
		am5 = Number(localStorage.getItem("am5"));
		am5 = am5+1;
		document.getElementById("count5").innerText = am5;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am5', am5);
});

btn5m.addEventListener("click", function(){
	am5 = Number(localStorage.getItem("am5"));
	if (am5 > 0) {
		am5 = am5-1;
		document.getElementById("count5").innerText = am5;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am5', am5);
	}
});





btn6p.addEventListener("click", function(){
		am6 = Number(localStorage.getItem("am6"));
		am6 = am6+1;
		document.getElementById("count6").innerText = am6;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am6', am6);
});

btn6m.addEventListener("click", function(){
	am6 = Number(localStorage.getItem("am6"));
	if (am6 > 0) {
		am6 = am6-1;
		document.getElementById("count6").innerText = am6;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am6', am6);
	}
});






btn7p.addEventListener("click", function(){
		am7 = Number(localStorage.getItem("am7"));
		am7 = am7+1;
		document.getElementById("count7").innerText = am7;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am7', am7);
});

btn7m.addEventListener("click", function(){
	am7 = Number(localStorage.getItem("am7"));
	if (am7 > 0) {
		am7 = am7-1;
		document.getElementById("count7").innerText = am7;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am7', am7);
	}
});



btn8p.addEventListener("click", function(){
		am8 = Number(localStorage.getItem("am8"));
		am8 = am8+1;
		document.getElementById("count8").innerText = am8;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am8', am8);
});

btn8m.addEventListener("click", function(){
	am8 = Number(localStorage.getItem("am8"));
	if (am8 > 0) {
		am8 = am8-1;
		document.getElementById("count8").innerText = am8;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am8', am8);
	}
});

btn9p.addEventListener("click", function(){
		am9 = Number(localStorage.getItem("am9"));
		am9 = am9+1;
		document.getElementById("count9").innerText = am9;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am9', am9);
});

btn9m.addEventListener("click", function(){
	am9 = Number(localStorage.getItem("am9"));
	if (am9 > 0) {
		am9 = am9-1;
		document.getElementById("count9").innerText = am9;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р Продолжить?");
		localStorage.setItem('am9', am9);
	}
});






Telegram.WebApp.onEvent('mainButtonClicked', function(){
	am1 = Number(localStorage.getItem("am1"));
	am2 = Number(localStorage.getItem("am2"));
	am3 = Number(localStorage.getItem("am3"));
	am4 = Number(localStorage.getItem("am4"));
	am5 = Number(localStorage.getItem("am5"));
	am6 = Number(localStorage.getItem("am6"));
	am7 = Number(localStorage.getItem("am7"));
	am8 = Number(localStorage.getItem("am8"));
	let paym = document.getElementById("paym").value;
	topay = (""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250)+"р");
	let loc = document.getElementById("loc").value;
	let number = document.getElementById("number").value;
	tg.sendData(((""+am1)+" "+(""+am2)+" "+(""+am3)+" "+(""+am4)+" "+(""+am5)+" "+(""+am6)+" "+(""+am7)+" "+(""+am8)+" "+(""+am9)+" !"+(""+loc)+"!"+(""+number)+"!"+(topay)+"!"+(paym)));
	localStorage.clear();
	
	//при клике на основную кнопку отправляем данные в строковом виде
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);