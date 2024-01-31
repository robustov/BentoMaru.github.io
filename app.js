let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.show()
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = "#FF0000";
//tg.MainButton.color = '#2cab37';


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
let btn10p = document.getElementById("btn10+");
let btn10m = document.getElementById("btn10-");
let btn11p = document.getElementById("btn11+");
let btn11m = document.getElementById("btn11-");
let btn12p = document.getElementById("btn12+");
let btn12m = document.getElementById("btn12-");
let btn13p = document.getElementById("btn13+");
let btn13m = document.getElementById("btn13-");
let btn14p = document.getElementById("btn14+");
let btn14m = document.getElementById("btn14-");
let btn15p = document.getElementById("btn15+");
let btn15m = document.getElementById("btn15-");


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
let am10 = localStorage.getItem("am10");
let am11 = localStorage.getItem("am11");
let am12 = localStorage.getItem("am12");
let am13 = localStorage.getItem("am13");
let am14 = localStorage.getItem("am14");
let am15 = localStorage.getItem("am15");

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
if(am10 == null){
	document.getElementById("count10").innerText = 0;
}

else{
	document.getElementById("count10").innerText = localStorage.getItem("am10")
}
if(am11 == null){
	document.getElementById("count11").innerText = 0;
}

else{
	document.getElementById("count11").innerText = localStorage.getItem("am11")
}
if(am12 == null){
	document.getElementById("count12").innerText = 0;
}

else{
	document.getElementById("count12").innerText = localStorage.getItem("am12")
}
if(am13 == null){
	document.getElementById("count13").innerText = 0;
}

else{
	document.getElementById("count13").innerText = localStorage.getItem("am13")
}
if(am14 == null){
	document.getElementById("count14").innerText = 0;
}

else{
	document.getElementById("count14").innerText = localStorage.getItem("am14")
}
if(am15 == null){
	document.getElementById("count15").innerText = 0;
}

else{
	document.getElementById("count15").innerText = localStorage.getItem("am15")
}







//document.getElementById("count2").innerText = am2;
//document.getElementById("count3").innerText = am3;
//document.getElementById("count4").innerText = am4;
//document.getElementById("count5").innerText = am5;
//document.getElementById("count6").innerText = am6;
//document.getElementById("count7").innerText = am7;
//document.getElementById("count8").innerText = am8;






tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р");













btn1p.addEventListener("click", function(){
		am1 = Number(localStorage.getItem("am1"));
		am1 = am1+1;
		document.getElementById("count1").innerText = am1;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am1', am1);
});

btn1m.addEventListener("click", function(){
	am1 = Number(localStorage.getItem("am1"));
	if (am1 > 0) {
		am1 = am1-1;
		document.getElementById("count1").innerText = am1;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am1', am1);
	}
});





btn2p.addEventListener("click", function(){
		am2 = Number(localStorage.getItem("am2"));
		am2 = am2+1;
		document.getElementById("count2").innerText = am2;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am2', am2);
});

btn2m.addEventListener("click", function(){
	am2 = Number(localStorage.getItem("am2"));
	if (am2 > 0) {
		am2 = am2-1;
		document.getElementById("count2").innerText = am2;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am2', am2);
	}
});





btn3p.addEventListener("click", function(){
		am3 = Number(localStorage.getItem("am3"));
		am3 = am3+1;
		document.getElementById("count3").innerText = am3;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am3', am3);
});

btn3m.addEventListener("click", function(){
	am3 = Number(localStorage.getItem("am3"));
	if (am3 > 0) {
		am3 = am3-1;
		document.getElementById("count3").innerText = am3;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am3', am3);
	}
});




btn4p.addEventListener("click", function(){
		am4 = Number(localStorage.getItem("am4"));
		am4 = am4+1;
		document.getElementById("count4").innerText = am4;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am4', am4);
});

btn4m.addEventListener("click", function(){
	am4 = Number(localStorage.getItem("am4"));
	if (am4 > 0) {
		am4 = am4-1;
		document.getElementById("count4").innerText = am4;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am4', am4);
	}
});





btn5p.addEventListener("click", function(){
		am5 = Number(localStorage.getItem("am5"));
		am5 = am5+1;
		document.getElementById("count5").innerText = am5;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am5', am5);
});

btn5m.addEventListener("click", function(){
	am5 = Number(localStorage.getItem("am5"));
	if (am5 > 0) {
		am5 = am5-1;
		document.getElementById("count5").innerText = am5;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am5', am5);
	}
});





btn6p.addEventListener("click", function(){
		am6 = Number(localStorage.getItem("am6"));
		am6 = am6+1;
		document.getElementById("count6").innerText = am6;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am6', am6);
});

btn6m.addEventListener("click", function(){
	am6 = Number(localStorage.getItem("am6"));
	if (am6 > 0) {
		am6 = am6-1;
		document.getElementById("count6").innerText = am6;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am6', am6);
	}
});






btn7p.addEventListener("click", function(){
		am7 = Number(localStorage.getItem("am7"));
		am7 = am7+1;
		document.getElementById("count7").innerText = am7;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am7', am7);
});

btn7m.addEventListener("click", function(){
	am7 = Number(localStorage.getItem("am7"));
	if (am7 > 0) {
		am7 = am7-1;
		document.getElementById("count7").innerText = am7;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am7', am7);
	}
});



btn8p.addEventListener("click", function(){
		am8 = Number(localStorage.getItem("am8"));
		am8 = am8+1;
		document.getElementById("count8").innerText = am8;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am8', am8);
});

btn8m.addEventListener("click", function(){
	am8 = Number(localStorage.getItem("am8"));
	if (am8 > 0) {
		am8 = am8-1;
		document.getElementById("count8").innerText = am8;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am8', am8);
	}
});

btn9p.addEventListener("click", function(){
		am9 = Number(localStorage.getItem("am9"));
		am9 = am9+1;
		document.getElementById("count9").innerText = am9;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am9', am9);
});

btn9m.addEventListener("click", function(){
	am9 = Number(localStorage.getItem("am9"));
	if (am9 > 0) {
		am9 = am9-1;
		document.getElementById("count9").innerText = am9;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am9', am9);
	}
});

btn10p.addEventListener("click", function(){
		am10 = Number(localStorage.getItem("am10"));
		am10 = am10+1;
		document.getElementById("count10").innerText = am10;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am10', am10);
});

btn10m.addEventListener("click", function(){
	am10 = Number(localStorage.getItem("am10"));
	if (am10 > 0) {
		am10 = am10-1;
		document.getElementById("count10").innerText = am10;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am10', am10);
	}
});

btn11p.addEventListener("click", function(){
		am11 = Number(localStorage.getItem("am11"));
		am11 = am11+1;
		document.getElementById("count11").innerText = am11;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am11', am11);
});

btn11m.addEventListener("click", function(){
	am11 = Number(localStorage.getItem("am11"));
	if (am11 > 0) {
		am11 = am11-1;
		document.getElementById("count11").innerText = am11;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am11', am11);
	}
});

btn12p.addEventListener("click", function(){
		am12 = Number(localStorage.getItem("am12"));
		am12 = am12+1;
		document.getElementById("count12").innerText = am12;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am12', am12);
});

btn12m.addEventListener("click", function(){
	am12 = Number(localStorage.getItem("am12"));
	if (am12 > 0) {
		am12 = am12-1;
		document.getElementById("count12").innerText = am12;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am12', am12);
	}
});


btn13p.addEventListener("click", function(){
		am13 = Number(localStorage.getItem("am13"));
		am13 = am13+1;
		document.getElementById("count13").innerText = am13;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am13', am13);
});

btn13m.addEventListener("click", function(){
	am13 = Number(localStorage.getItem("am13"));
	if (am13 > 0) {
		am13 = am13-1;
		document.getElementById("count13").innerText = am13;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am13', am13);
	}
});

btn14p.addEventListener("click", function(){
		am14 = Number(localStorage.getItem("am14"));
		am14 = am14+1;
		document.getElementById("count14").innerText = am14;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am14', am14);
});

btn14m.addEventListener("click", function(){
	am14 = Number(localStorage.getItem("am14"));
	if (am14 > 0) {
		am14 = am14-1;
		document.getElementById("count14").innerText = am14;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am14', am14);
	}
});

btn15p.addEventListener("click", function(){
		am15 = Number(localStorage.getItem("am15"));
		am15 = am15+1;
		document.getElementById("count15").innerText = am15;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am15', am15);
});

btn15m.addEventListener("click", function(){
	am15 = Number(localStorage.getItem("am15"));
	if (am15 > 0) {
		am15 = am15-1;
		document.getElementById("count15").innerText = am15;
		tg.MainButton.setText(""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р Продолжить?");
		localStorage.setItem('am15', am15);
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
	am9 = Number(localStorage.getItem("am9"));
	am10 = Number(localStorage.getItem("am10"));
	am11 = Number(localStorage.getItem("am11"));
	am12 = Number(localStorage.getItem("am12"));
	am13 = Number(localStorage.getItem("am13"));
	am14 = Number(localStorage.getItem("am14"));
	am15 = Number(localStorage.getItem("am15"));
	let paym = document.getElementById("paym").value;
	let inname = document.getElementById("inname").value;
	let com = document.getElementById("com").value;
	topay = (""+(am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*500+am11*550+am12*600+am13*690+am14*460)+"р");
	let loc = document.getElementById("loc").value;
	let number = document.getElementById("number").value;
	if (loc != "" && number != "") {
		tg.sendData(((""+am1)+" "+(""+am2)+" "+(""+am3)+" "+(""+am4)+" "+(""+am5)+" "+(""+am6)+" "+(""+am7)+" "+(""+am8)+" "+(""+am9)+" "+(""+am10)+" "+(""+am11)+" "+(""+am12)+" "+(""+am13)+" "+(""+am14)+" "+(""+am15)+" !"+(""+loc)+"!"+(""+number)+"!"+(topay)+"!"+(paym)+"!"+(inname)+"!"+(com)));
		localStorage.clear();
	}
	else  {
		if (loc != null){
			tg.MainButton.setText("Введите адрес");
			tg.MainButton.color = "#FF0000";
		}
		else{
			tg.MainButton.setText("Введите номер телефона");
			tg.MainButton.color = "#FF0000";
		}
	}
	//при клике на основную кнопку отправляем данные в строковом виде
});


let usercard = document.getElementById("usercard");

