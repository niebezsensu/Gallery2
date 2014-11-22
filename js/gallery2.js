

var ob1 = document.getElementById('b1');
var ob2 = document.getElementById('b2');
var ob3 = document.getElementById('b3');

var p1 = document.getElementById('pic1');
var p2 = document.getElementById('pic2');
var p3 = document.getElementById('pic3');

ob1.addEventListener('click', function(){displayIm(ob1)}, false); 
ob2.addEventListener('click', function(){displayIm(ob2)}, false); 
ob3.addEventListener('click', function(){displayIm(ob3)}, false); 

p1.addEventListener('click', function(){resetAll();}, false);
p2.addEventListener('click', function(){resetAll();}, false);
p3.addEventListener('click', function(){resetAll();}, false);

function displayIm(im){

	var picture1, picture2, picture3;
	var button1, button2, button3;
	
	switch(im.id){
		case "b1": ob1.style['left'] = '970px'; ob2.style['left'] = '1195px'; ob3.style['left'] = '1420px'; picture1 = p1; picture2 = p2; picture3 = p3; break;
		case "b2": ob1.style['left'] = '-225px'; ob2.style['left'] = '970px'; ob3.style['left'] = '1195px'; picture1 = p2; picture2 = p1; picture3 = p3; break;
		case "b3": ob1.style['left'] = '-450px'; ob2.style['left'] = '-225px'; ob3.style['left'] = '970px'; picture1 = p3; picture2 = p2; picture3 = p1; break;
		default: break;
	}

	picture1.style['z-index'] = 4;
	picture2.style['z-index'] = 0;
	picture3.style['z-index'] = 0;
}

function resetAll(){
	if(p1.style['z-index'] == '4' || p2.style['z-index'] == '4' || p3.style['z-index'] == '4'){
		p1.style['z-index'] = '3';
		p2.style['z-index'] = '1';
		p3.style['z-index'] = '1';

		ob1.style['left'] = '80px';
		ob2.style['left'] = '305px';
		ob3.style['left'] = '530px';
 	}

function showIm(str){

}

}