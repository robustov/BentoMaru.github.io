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
let btn16p = document.getElementById("btn16+");
let btn16m = document.getElementById("btn16-");
let btn17p = document.getElementById("btn17+");
let btn17m = document.getElementById("btn17-");
let btn18p = document.getElementById("btn18+");
let btn18m = document.getElementById("btn18-");
let btn19p = document.getElementById("btn19+");
let btn19m = document.getElementById("btn19-");
let btn20p = document.getElementById("btn20+");
let btn20m = document.getElementById("btn20-");
let btn21p = document.getElementById("btn21+");
let btn21m = document.getElementById("btn21-");
let btn22p = document.getElementById("btn22+");
let btn22m = document.getElementById("btn22-");
let btn23p = document.getElementById("btn23+");
let btn23m = document.getElementById("btn23-");
let btn24p = document.getElementById("btn24+");
let btn24m = document.getElementById("btn24-");

//ddddddddddddddddddddddddddddddddddddddddddddddddddddd
let btn1dp = document.getElementById("btn1d+");
let btn1dm = document.getElementById("btn1d-");
let btn2dp = document.getElementById("btn2d+");
let btn2dm = document.getElementById("btn2d-");
let btn3dp = document.getElementById("btn3d+");
let btn3dm = document.getElementById("btn3d-");
let btn4dp = document.getElementById("btn4d+");
let btn4dm = document.getElementById("btn4d-");
let btn5dp = document.getElementById("btn5d+");
let btn5dm = document.getElementById("btn5d-");
let btn6dp = document.getElementById("btn6d+");
let btn6dm = document.getElementById("btn6d-");
let btn7dp = document.getElementById("btn7d+");
let btn7dm = document.getElementById("btn7d-");
let btn8dp = document.getElementById("btn8d+");
let btn8dm = document.getElementById("btn8d-");
let btn9dp = document.getElementById("btn9d+");
let btn9dm = document.getElementById("btn9d-");
let btn10dp = document.getElementById("btn10d+");
let btn10dm = document.getElementById("btn10d-");
let btn11dp = document.getElementById("btn11d+");
let btn11dm = document.getElementById("btn11d-");
let btn12dp = document.getElementById("btn12d+");
let btn12dm = document.getElementById("btn12d-");
//ddddddddddddddddddddddddddddddddddddddddddddddddddddd


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
let am16 = localStorage.getItem("am16");
let am17 = localStorage.getItem("am17");
let am18 = localStorage.getItem("am18");
let am19 = localStorage.getItem("am19");
let am20 = localStorage.getItem("am20");
let am21 = localStorage.getItem("am21");
let am22 = localStorage.getItem("am22");
let am23 = localStorage.getItem("am23");
let am24 = localStorage.getItem("am24");

//ddddddddddddddddddddddddddddddddddddddd
let amd1 = localStorage.getItem("amd1");
let amd2 = localStorage.getItem("amd2");
let amd3 = localStorage.getItem("amd3");
let amd4 = localStorage.getItem("amd4");
let amd5 = localStorage.getItem("amd5");
let amd6 = localStorage.getItem("amd6");
let amd7 = localStorage.getItem("amd7");
let amd8 = localStorage.getItem("amd8");
let amd9 = localStorage.getItem("amd9");
let amd10 = localStorage.getItem("amd10");
let amd11 = localStorage.getItem("amd11");
let amd12 = localStorage.getItem("amd12");


//ddddddddddddddddddddddddddddddddddddddd




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
if(am16 == null){
	document.getElementById("count16").innerText = 0;
}

else{
	document.getElementById("count16").innerText = localStorage.getItem("am16")
}
if(am17 == null){
	document.getElementById("count17").innerText = 0;
}

else{
	document.getElementById("count17").innerText = localStorage.getItem("am17")
}
if(am18 == null){
	document.getElementById("count18").innerText = 0;
}

else{
	document.getElementById("count18").innerText = localStorage.getItem("am18")
}
if(am19 == null){
	document.getElementById("count19").innerText = 0;
}

else{
	document.getElementById("count19").innerText = localStorage.getItem("am19")
}
if(am20 == null){
	document.getElementById("count20").innerText = 0;
}

else{
	document.getElementById("count20").innerText = localStorage.getItem("am20")
}
if(am21 == null){
	document.getElementById("count21").innerText = 0;
}

else{
	document.getElementById("count21").innerText = localStorage.getItem("am21")
}
if(am22 == null){
	document.getElementById("count22").innerText = 0;
}

else{
	document.getElementById("count22").innerText = localStorage.getItem("am22")
}
if(am23 == null){
	document.getElementById("count23").innerText = 0;
}

else{
	document.getElementById("count23").innerText = localStorage.getItem("am23")
}
if(am24 == null){
	document.getElementById("count24").innerText = 0;
}

else{
	document.getElementById("count24").innerText = localStorage.getItem("am24")
}













//ddddddddddddddddddddddddddddddddddd
if(amd1 == null){
	document.getElementById("count1d").innerText = 0;
}
else{
	document.getElementById("count1d").innerText = localStorage.getItem("amd1")
}
if(amd2 == null){
	document.getElementById("count2d").innerText = 0;
}
else{
	document.getElementById("count2d").innerText = localStorage.getItem("amd2")
}
if(amd3 == null){
	document.getElementById("count3d").innerText = 0;
}
else{
	document.getElementById("count3d").innerText = localStorage.getItem("amd3")
}

if(amd4 == null){
	document.getElementById("count4d").innerText = 0;
}
else{
	document.getElementById("count4d").innerText = localStorage.getItem("amd4")
}

if(amd5 == null){
	document.getElementById("count5d").innerText = 0;
}
else{
	document.getElementById("count5d").innerText = localStorage.getItem("amd5")
}

if(amd6 == null){
	document.getElementById("count6d").innerText = 0;
}
else{
	document.getElementById("count6d").innerText = localStorage.getItem("amd6")
}

if(amd7 == null){
	document.getElementById("count7d").innerText = 0;
}
else{
	document.getElementById("count7d").innerText = localStorage.getItem("amd7")
}

if(amd8 == null){
	document.getElementById("count8d").innerText = 0;
}

else{
	document.getElementById("count8d").innerText = localStorage.getItem("amd8")
}

if(amd9 == null){
	document.getElementById("count9d").innerText = 0;
}

else{
	document.getElementById("count9d").innerText = localStorage.getItem("amd9")
}
if(amd10 == null){
	document.getElementById("count10d").innerText = 0;
}

else{
	document.getElementById("count10d").innerText = localStorage.getItem("amd10")
}
if(amd11 == null){
	document.getElementById("count11d").innerText = 0;
}

else{
	document.getElementById("count11d").innerText = localStorage.getItem("amd11")
}
if(amd12 == null){
	document.getElementById("count12d").innerText = 0;
}

else{
	document.getElementById("count12d").innerText = localStorage.getItem("amd12")
}
//ddddddddddddddddddddddddddddddddddd




//document.getElementById("count2").innerText = am2;
//document.getElementById("count3").innerText = am3;
//document.getElementById("count4").innerText = am4;
//document.getElementById("count5").innerText = am5;
//document.getElementById("count6").innerText = am6;
//document.getElementById("count7").innerText = am7;
//document.getElementById("count8").innerText = am8;






tg.MainButton.setText(""+price()+"р");



function price() {
  return am1*450+am2*450+am3*800+am4*800+am5*850+am6*800+am7*1250+am8*1250+am9*550+am10*550+am11*550+am12*600+am13*690+am14*460+am15*500+am16*500+am17*1550+am18*1200+am19*980+am20*2000+am21*1950+am22*1500+am23*200+(amd1+amd2+amd3)*140+amd4*150+(amd5+amd6+amd7+amd8)*270+amd9*350+amd10*350+amd11*450+amd12*350;
}









btn1p.addEventListener("click", function(){
		am1 = Number(localStorage.getItem("am1"));
		am1 = am1+1;
		document.getElementById("count1").innerText = am1;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am1', am1);
});

btn1m.addEventListener("click", function(){
	am1 = Number(localStorage.getItem("am1"));
	if (am1 > 0) {
		am1 = am1-1;
		document.getElementById("count1").innerText = am1;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am1', am1);
	}
});





btn2p.addEventListener("click", function(){
		am2 = Number(localStorage.getItem("am2"));
		am2 = am2+1;
		document.getElementById("count2").innerText = am2;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am2', am2);
});

btn2m.addEventListener("click", function(){
	am2 = Number(localStorage.getItem("am2"));
	if (am2 > 0) {
		am2 = am2-1;
		document.getElementById("count2").innerText = am2;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am2', am2);
	}
});





btn3p.addEventListener("click", function(){
		am3 = Number(localStorage.getItem("am3"));
		am3 = am3+1;
		document.getElementById("count3").innerText = am3;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am3', am3);
});

btn3m.addEventListener("click", function(){
	am3 = Number(localStorage.getItem("am3"));
	if (am3 > 0) {
		am3 = am3-1;
		document.getElementById("count3").innerText = am3;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am3', am3);
	}
});




btn4p.addEventListener("click", function(){
		am4 = Number(localStorage.getItem("am4"));
		am4 = am4+1;
		document.getElementById("count4").innerText = am4;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am4', am4);
});

btn4m.addEventListener("click", function(){
	am4 = Number(localStorage.getItem("am4"));
	if (am4 > 0) {
		am4 = am4-1;
		document.getElementById("count4").innerText = am4;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am4', am4);
	}
});





btn5p.addEventListener("click", function(){
		am5 = Number(localStorage.getItem("am5"));
		am5 = am5+1;
		document.getElementById("count5").innerText = am5;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am5', am5);
});

btn5m.addEventListener("click", function(){
	am5 = Number(localStorage.getItem("am5"));
	if (am5 > 0) {
		am5 = am5-1;
		document.getElementById("count5").innerText = am5;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am5', am5);
	}
});





btn6p.addEventListener("click", function(){
		am6 = Number(localStorage.getItem("am6"));
		am6 = am6+1;
		document.getElementById("count6").innerText = am6;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am6', am6);
});

btn6m.addEventListener("click", function(){
	am6 = Number(localStorage.getItem("am6"));
	if (am6 > 0) {
		am6 = am6-1;
		document.getElementById("count6").innerText = am6;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am6', am6);
	}
});






btn7p.addEventListener("click", function(){
		am7 = Number(localStorage.getItem("am7"));
		am7 = am7+1;
		document.getElementById("count7").innerText = am7;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am7', am7);
});

btn7m.addEventListener("click", function(){
	am7 = Number(localStorage.getItem("am7"));
	if (am7 > 0) {
		am7 = am7-1;
		document.getElementById("count7").innerText = am7;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am7', am7);
	}
});



btn8p.addEventListener("click", function(){
		am8 = Number(localStorage.getItem("am8"));
		am8 = am8+1;
		document.getElementById("count8").innerText = am8;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am8', am8);
});

btn8m.addEventListener("click", function(){
	am8 = Number(localStorage.getItem("am8"));
	if (am8 > 0) {
		am8 = am8-1;
		document.getElementById("count8").innerText = am8;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am8', am8);
	}
});

btn9p.addEventListener("click", function(){
		am9 = Number(localStorage.getItem("am9"));
		am9 = am9+1;
		document.getElementById("count9").innerText = am9;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am9', am9);
});

btn9m.addEventListener("click", function(){
	am9 = Number(localStorage.getItem("am9"));
	if (am9 > 0) {
		am9 = am9-1;
		document.getElementById("count9").innerText = am9;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am9', am9);
	}
});

btn10p.addEventListener("click", function(){
		am10 = Number(localStorage.getItem("am10"));
		am10 = am10+1;
		document.getElementById("count10").innerText = am10;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am10', am10);
});

btn10m.addEventListener("click", function(){
	am10 = Number(localStorage.getItem("am10"));
	if (am10 > 0) {
		am10 = am10-1;
		document.getElementById("count10").innerText = am10;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am10', am10);
	}
});

btn11p.addEventListener("click", function(){
		am11 = Number(localStorage.getItem("am11"));
		am11 = am11+1;
		document.getElementById("count11").innerText = am11;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am11', am11);
});

btn11m.addEventListener("click", function(){
	am11 = Number(localStorage.getItem("am11"));
	if (am11 > 0) {
		am11 = am11-1;
		document.getElementById("count11").innerText = am11;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am11', am11);
	}
});

btn12p.addEventListener("click", function(){
		am12 = Number(localStorage.getItem("am12"));
		am12 = am12+1;
		document.getElementById("count12").innerText = am12;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am12', am12);
});

btn12m.addEventListener("click", function(){
	am12 = Number(localStorage.getItem("am12"));
	if (am12 > 0) {
		am12 = am12-1;
		document.getElementById("count12").innerText = am12;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am12', am12);
	}
});


btn13p.addEventListener("click", function(){
		am13 = Number(localStorage.getItem("am13"));
		am13 = am13+1;
		document.getElementById("count13").innerText = am13;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am13', am13);
});

btn13m.addEventListener("click", function(){
	am13 = Number(localStorage.getItem("am13"));
	if (am13 > 0) {
		am13 = am13-1;
		document.getElementById("count13").innerText = am13;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am13', am13);
	}
});

btn14p.addEventListener("click", function(){
		am14 = Number(localStorage.getItem("am14"));
		am14 = am14+1;
		document.getElementById("count14").innerText = am14;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am14', am14);
});

btn14m.addEventListener("click", function(){
	am14 = Number(localStorage.getItem("am14"));
	if (am14 > 0) {
		am14 = am14-1;
		document.getElementById("count14").innerText = am14;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am14', am14);
	}
});

btn15p.addEventListener("click", function(){
		am15 = Number(localStorage.getItem("am15"));
		am15 = am15+1;
		document.getElementById("count15").innerText = am15;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am15', am15);
});

btn15m.addEventListener("click", function(){
	am15 = Number(localStorage.getItem("am15"));
	if (am15 > 0) {
		am15 = am15-1;
		document.getElementById("count15").innerText = am15;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am15', am15);
	}
});

btn16p.addEventListener("click", function(){
		am16 = Number(localStorage.getItem("am16"));
		am16 = am16+1;
		document.getElementById("count16").innerText = am16;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am16', am16);
});

btn16m.addEventListener("click", function(){
	am16 = Number(localStorage.getItem("am16"));
	if (am16 > 0) {
		am16 = am16-1;
		document.getElementById("count16").innerText = am16;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am16', am16);
	}
});

btn17p.addEventListener("click", function(){
		am17 = Number(localStorage.getItem("am17"));
		am17 = am17+1;
		document.getElementById("count17").innerText = am17;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am17', am17);
});

btn17m.addEventListener("click", function(){
	am17 = Number(localStorage.getItem("am17"));
	if (am17 > 0) {
		am17 = am17-1;
		document.getElementById("count17").innerText = am17;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am17', am17);
	}
});

btn18p.addEventListener("click", function(){
		am18 = Number(localStorage.getItem("am18"));
		am18 = am18+1;
		document.getElementById("count18").innerText = am18;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am18', am18);
});

btn18m.addEventListener("click", function(){
	am18 = Number(localStorage.getItem("am18"));
	if (am18 > 0) {
		am18 = am18-1;
		document.getElementById("count18").innerText = am18;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am18', am18);
	}
});
btn19p.addEventListener("click", function(){
		am19 = Number(localStorage.getItem("am19"));
		am19 = am19+1;
		document.getElementById("count19").innerText = am19;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am19', am19);
});

btn19m.addEventListener("click", function(){
	am19 = Number(localStorage.getItem("am19"));
	if (am19 > 0) {
		am19 = am19-1;
		document.getElementById("count19").innerText = am19;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am19', am19);
	}
});
btn20p.addEventListener("click", function(){
		am20 = Number(localStorage.getItem("am20"));
		am20 = am20+1;
		document.getElementById("count20").innerText = am20;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am20', am20);
});

btn20m.addEventListener("click", function(){
	am20 = Number(localStorage.getItem("am20"));
	if (am20 > 0) {
		am20 = am20-1;
		document.getElementById("count20").innerText = am20;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am20', am20);
	}
});
btn21p.addEventListener("click", function(){
		am21 = Number(localStorage.getItem("am21"));
		am21 = am21+1;
		document.getElementById("count21").innerText = am21;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am21', am21);
});

btn21m.addEventListener("click", function(){
	am21 = Number(localStorage.getItem("am21"));
	if (am21 > 0) {
		am21 = am21-1;
		document.getElementById("count21").innerText = am21;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am21', am21);
	}
});
btn22p.addEventListener("click", function(){
		am22 = Number(localStorage.getItem("am22"));
		am22 = am22+1;
		document.getElementById("count22").innerText = am22;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am22', am22);
});

btn22m.addEventListener("click", function(){
	am22 = Number(localStorage.getItem("am22"));
	if (am22 > 0) {
		am22 = am22-1;
		document.getElementById("count22").innerText = am22;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am22', am22);
	}
});
btn23p.addEventListener("click", function(){
		am23 = Number(localStorage.getItem("am23"));
		am23 = am23+1;
		document.getElementById("count23").innerText = am23;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am23', am23);
});

btn23m.addEventListener("click", function(){
	am23 = Number(localStorage.getItem("am23"));
	if (am23 > 0) {
		am23 = am23-1;
		document.getElementById("count23").innerText = am23;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am23', am23);
	}
});
btn24p.addEventListener("click", function(){
		am24 = Number(localStorage.getItem("am24"));
		am24 = am24+1;
		document.getElementById("count24").innerText = am24;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am24', am24);
});

btn24m.addEventListener("click", function(){
	am24 = Number(localStorage.getItem("am24"));
	if (am24 > 0) {
		am24 = am24-1;
		document.getElementById("count24").innerText = am24;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('am24', am24);
	}
});














//ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
btn1dp.addEventListener("click", function(){
		amd1 = Number(localStorage.getItem("amd1"));
		amd1 = amd1+1;
		document.getElementById("count1d").innerText = amd1;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd1', amd1);
});

btn1dm.addEventListener("click", function(){
	amd1 = Number(localStorage.getItem("amd1"));
	if (amd1 > 0) {
		amd1 = amd1-1;
		document.getElementById("count1d").innerText = amd1;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd1', amd1);
	}
});





btn2dp.addEventListener("click", function(){
		amd2 = Number(localStorage.getItem("amd2"));
		amd2 = amd2+1;
		document.getElementById("count2d").innerText = amd2;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd2', amd2);
});

btn2dm.addEventListener("click", function(){
	amd2 = Number(localStorage.getItem("amd2"));
	if (amd2 > 0) {
		amd2 = amd2-1;
		document.getElementById("count2d").innerText = amd2;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd2', amd2);
	}
});





btn3dp.addEventListener("click", function(){
		amd3 = Number(localStorage.getItem("amd3"));
		amd3 = amd3+1;
		document.getElementById("count3d").innerText = amd3;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd3', amd3);
});

btn3dm.addEventListener("click", function(){
	amd3 = Number(localStorage.getItem("amd3"));
	if (amd3 > 0) {
		amd3 = amd3-1;
		document.getElementById("count3d").innerText = amd3;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd3', amd3);
	}
});




btn4dp.addEventListener("click", function(){
		amd4 = Number(localStorage.getItem("amd4"));
		amd4 = amd4+1;
		document.getElementById("count4d").innerText = amd4;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd4', amd4);
});

btn4dm.addEventListener("click", function(){
	amd4 = Number(localStorage.getItem("amd4"));
	if (amd4 > 0) {
		amd4 = amd4-1;
		document.getElementById("count4d").innerText = amd4;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd4', amd4);
	}
});





btn5dp.addEventListener("click", function(){
		amd5 = Number(localStorage.getItem("amd5"));
		amd5 = amd5+1;
		document.getElementById("count5d").innerText = amd5;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd5', amd5);
});

btn5dm.addEventListener("click", function(){
	amd5 = Number(localStorage.getItem("amd5"));
	if (amd5 > 0) {
		amd5 = amd5-1;
		document.getElementById("count5d").innerText = amd5;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd5', amd5);
	}
});





btn6dp.addEventListener("click", function(){
		amd6 = Number(localStorage.getItem("amd6"));
		amd6 = amd6+1;
		document.getElementById("count6d").innerText = amd6;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd6', amd6);
});

btn6dm.addEventListener("click", function(){
	amd6 = Number(localStorage.getItem("amd6"));
	if (amd6 > 0) {
		amd6 = amd6-1;
		document.getElementById("count6d").innerText = amd6;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd6', amd6);
	}
});






btn7dp.addEventListener("click", function(){
		amd7 = Number(localStorage.getItem("amd7"));
		amd7 = amd7+1;
		document.getElementById("count7d").innerText = amd7;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd7', amd7);
});

btn7dm.addEventListener("click", function(){
	amd7 = Number(localStorage.getItem("amd7"));
	if (amd7 > 0) {
		amd7 = amd7-1;
		document.getElementById("count7d").innerText = amd7;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd7', amd7);
	}
});



btn8dp.addEventListener("click", function(){
		amd8 = Number(localStorage.getItem("amd8"));
		amd8 = amd8+1;
		document.getElementById("count8d").innerText = amd8;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd8', amd8);
});

btn8dm.addEventListener("click", function(){
	amd8 = Number(localStorage.getItem("amd8"));
	if (amd8 > 0) {
		amd8 = amd8-1;
		document.getElementById("count8d").innerText = amd8;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd8', amd8);
	}
});

btn9dp.addEventListener("click", function(){
		amd9 = Number(localStorage.getItem("amd9"));
		amd9 = amd9+1;
		document.getElementById("count9d").innerText = amd9;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd9', amd9);
});

btn9dm.addEventListener("click", function(){
	amd9 = Number(localStorage.getItem("amd9"));
	if (amd9 > 0) {
		amd9 = amd9-1;
		document.getElementById("count9d").innerText = amd9;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd9', amd9);
	}
});

btn10dp.addEventListener("click", function(){
		amd10 = Number(localStorage.getItem("amd10"));
		amd10 = amd10+1;
		document.getElementById("count10d").innerText = amd10;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd10', amd10);
});

btn10dm.addEventListener("click", function(){
	amd10 = Number(localStorage.getItem("amd10"));
	if (amd10 > 0) {
		amd10 = amd10-1;
		document.getElementById("count10d").innerText = amd10;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd10', amd10);
	}
});

btn11dp.addEventListener("click", function(){
		amd11 = Number(localStorage.getItem("amd11"));
		amd11 = amd11+1;
		document.getElementById("count11d").innerText = amd11;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd11', amd11);
});

btn11dm.addEventListener("click", function(){
	amd11 = Number(localStorage.getItem("amd11"));
	if (amd11 > 0) {
		amd11 = amd11-1;
		document.getElementById("count11d").innerText = amd11;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd11', amd11);
	}
});

btn12dp.addEventListener("click", function(){
		amd12 = Number(localStorage.getItem("amd12"));
		amd12 = amd12+1;
		document.getElementById("count12d").innerText = amd12;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd12', amd12);
});

btn12dm.addEventListener("click", function(){
	amd12 = Number(localStorage.getItem("amd12"));
	if (amd12 > 0) {
		amd12 = amd12-1;
		document.getElementById("count12d").innerText = amd12;
		tg.MainButton.setText(""+price()+"р Продолжить?");
		localStorage.setItem('amd12', amd12);
	}
});
//ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd





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
	am16 = Number(localStorage.getItem("am16"));
	am17 = Number(localStorage.getItem("am17"));
	am18 = Number(localStorage.getItem("am18"));
	am19 = Number(localStorage.getItem("am19"));
	am20 = Number(localStorage.getItem("am20"));
	am21 = Number(localStorage.getItem("am21"));
	am22 = Number(localStorage.getItem("am22"));
	am23 = Number(localStorage.getItem("am23"));
	am24 = Number(localStorage.getItem("am24"));

	amd1 = Number(localStorage.getItem("amd1"));
	amd2 = Number(localStorage.getItem("amd2"));
	amd3 = Number(localStorage.getItem("amd3"));
	amd4 = Number(localStorage.getItem("amd4"));
	amd5 = Number(localStorage.getItem("amd5"));
	amd6 = Number(localStorage.getItem("amd6"));
	amd7 = Number(localStorage.getItem("amd7"));
	amd8 = Number(localStorage.getItem("amd8"));
	amd9 = Number(localStorage.getItem("amd9"));
	amd10 = Number(localStorage.getItem("amd10"));
	amd11 = Number(localStorage.getItem("amd11"));
	amd12 = Number(localStorage.getItem("amd12"));
	let paym = document.getElementById("paym").value;
	let inname = document.getElementById("inname").value;
	let com = document.getElementById("com").value;
	topay = (""+price()+"р");
	let loc = document.getElementById("loc").value;
	let number = document.getElementById("number").value;
	if (loc != "" && number != "") {
		tg.sendData(((""+am1)+" "+(""+am2)+" "+(""+am3)+" "+(""+am4)+" "+(""+am5)+" "+(""+am6)+" "+(""+am7)+" "+(""+am8)+" "+(""+am9)+" "+(""+am10)+" "+(""+am11)+" "+(""+am12)+" "+(""+am13)+" "+(""+am14)+" "+(""+am15)+" "+(""+am16)+" "+(""+am17)+" "+(""+am18)+" "+(""+am19)+" "+(""+am20)+" "+(""+am21)+" "+(""+am22)+" "+(""+am23)+" "+(""+am24)+" "+(""+amd1)+" "+(""+amd2)+" "+(""+amd3)+" "+(""+amd4)+" "+(""+amd5)+" "+(""+amd6)+" "+(""+amd7)+" "+(""+amd8)+" "+(""+amd9)+" "+(""+amd10)+" "+(""+amd11)+" "+(""+amd12)+" !"+(""+loc)+"!"+(""+number)+"!"+(topay)+"!"+(paym)+"!"+(inname)+"!"+(com)));
		localStorage.clear();
	}
	else  {
		if (loc == ""){
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

