

var ob1 = document.getElementById('b1');
var ob2 = document.getElementById('b2');
var ob3 = document.getElementById('b3');
var ob4 = document.getElementById('b4');
var ob5 = document.getElementById('b5');
var ob6 = document.getElementById('b6');

var p1 = document.getElementById('pic1');
var p2 = document.getElementById('pic2');
var p3 = document.getElementById('pic3');
var p4 = document.getElementById('pic4');
var p5 = document.getElementById('pic5');
var p6 = document.getElementById('pic6');

ob1.addEventListener('click', function(){displayIm(ob1)}, false); 
ob2.addEventListener('click', function(){displayIm(ob2)}, false); 
ob3.addEventListener('click', function(){displayIm(ob3)}, false);
ob4.addEventListener('click', function(){displayIm(ob4)}, false); 
ob5.addEventListener('click', function(){displayIm(ob5)}, false); 
ob6.addEventListener('click', function(){displayIm(ob6)}, false); 

//WYLACZYC NA CZAS PRZEJSCIA!!
p1.addEventListener('click', function(){resetAll();}, false);
p2.addEventListener('click', function(){resetAll();}, false);
p3.addEventListener('click', function(){resetAll();}, false);
p4.addEventListener('click', function(){resetAll();}, false);
p5.addEventListener('click', function(){resetAll();}, false);
p6.addEventListener('click', function(){resetAll();}, false);

function displayIm(im){

	var picture1, picture2, picture3, picture4, picture5, picture6;
	var button1, button2, button3, button4, button5, button6;
	
	switch(im.id){
		case "b1": ob1.style['left'] = '1280px'; ob2.style['left'] = '1380px'; ob3.style['left'] = '1480px'; 
					ob4.style['left'] = '1580px'; ob5.style['left'] = '1680px'; ob6.style['left'] = '1780px'; 
					picture1 = p1; picture2 = p2; picture3 = p3; picture4 = p4; picture5 = p5; picture6 = p6; break;
		case "b2": ob1.style['left'] = '-180px'; ob2.style['left'] = '1280px'; ob3.style['left'] = '1380px';
					ob4.style['left'] = '1480px'; ob5.style['left'] = '1580px'; ob6.style['left'] = '1680px';  
					picture1 = p2; picture2 = p1; picture3 = p3; picture4 = p4; picture5 = p5; picture6 = p6; break;
		case "b3": ob1.style['left'] = '-280px'; ob2.style['left'] = '-180px'; ob3.style['left'] = '1280px';
					ob4.style['left'] = '1380px'; ob5.style['left'] = '1480px'; ob6.style['left'] = '1580px';   
					picture1 = p3; picture2 = p2; picture3 = p1; picture4 = p4; picture5 = p5; picture6 = p6; break;
		case "b4": ob1.style['left'] = '-380px'; ob2.style['left'] = '-280px'; ob3.style['left'] = '-180px';
					ob4.style['left'] = '1280px'; ob5.style['left'] = '1380px'; ob6.style['left'] = '1480px';
					picture1 = p4; picture2 = p2; picture3 = p3; picture4 = p1; picture5 = p5; picture6 = p6; break;
		case "b5": ob1.style['left'] = '-480px'; ob2.style['left'] = '-380px'; ob3.style['left'] = '-280px';
					ob4.style['left'] = '-180px'; ob5.style['left'] = '1280px'; ob6.style['left'] = '1380px';
					picture1 = p5; picture2 = p4; picture3 = p3; picture4 = p2; picture5 = p1; picture6 = p6; break;
		case "b6": ob1.style['left'] = '-580px'; ob2.style['left'] = '-480px'; ob3.style['left'] = '-380px';
					ob4.style['left'] = '-280px'; ob5.style['left'] = '-180px'; ob6.style['left'] = '1280px';
					picture1 = p6; picture2 = p2; picture3 = p3; picture4 = p4; picture5 = p5; picture6 = p1; break;		
		default: break;
	}

	ob2.style['visibility'] = 'hidden';
 
	picture1.style['z-index'] = 4;
	picture2.style['z-index'] = 0;
	picture3.style['z-index'] = 0;
	picture4.style['z-index'] = 0;
	picture5.style['z-index'] = 0;
	picture6.style['z-index'] = 0;

	ob1.style['visibility'] = 'hidden';
	ob2.style['visibility'] = 'hidden';
	ob3.style['visibility'] = 'hidden';
	ob4.style['visibility'] = 'hidden';
	ob5.style['visibility'] = 'hidden';
	ob6.style['visibility'] = 'hidden';
}

function stateAfter(elem, offset){

}

function resetAll(){
	if(p1.style['z-index'] == '4' || p2.style['z-index'] == '4' || p3.style['z-index'] == '4' || p4.style['z-index'] == '4' || p5.style['z-index'] == '4' || p6.style['z-index'] == '4'){
		p1.style['z-index'] = '3';
		p2.style['z-index'] = '1';
		p3.style['z-index'] = '1';
		p4.style['z-index'] = '1';
		p5.style['z-index'] = '1';
		p6.style['z-index'] = '1';

		ob1.style['left'] = '80px';
		ob2.style['left'] = '180px';
		ob3.style['left'] = '280px';
		ob4.style['left'] = '380px';
		ob5.style['left'] = '480px';
		ob6.style['left'] = '580px';

		ob1.style['visibility'] = 'visible';
		ob2.style['visibility'] = 'visible';
		ob3.style['visibility'] = 'visible';
		ob4.style['visibility'] = 'visible';
		ob5.style['visibility'] = 'visible';
		ob6.style['visibility'] = 'visible';

  	}

function showIm(str){

}

}