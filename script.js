 /* var a = document.createElement("div");
a.setAttribute("id","calculator");
var b = document.createElement("div");
b.setAttribute("class","top");
var c = document.createElement("button");
c.setAttribute("class","clear");
c.innerHTML="C";
var d = document.createElement("div");
d.setAttribute("class","screen");
var keys1 = document.createElement("div");
keys1.setAttribute("class","keys");
var span1 = document.createElement("button");
span1.innerHTML="7";
var span2 = document.createElement("button");
span2.innerHTML="8";
var span3 = document.createElement("button");
span3.innerHTML="9";
var span4 = document.createElement("button");
span4.setAttribute("class","operator");
span4.innerHTML="+";

var span5 = document.createElement("button");
span5.innerHTML="4";
var span6 = document.createElement("button");
span6.innerHTML="5";
var span7 = document.createElement("button");
span7.innerHTML="6";
var span8 = document.createElement("button");
span8.setAttribute("class","operator");
span8.innerHTML="-";

var span9 = document.createElement("button");
span9.innerHTML="1";
var span10 = document.createElement("button");
span10.innerHTML="2";
var span11 = document.createElement("button");
span11.innerHTML="3";
var span12 = document.createElement("button");
span12.setAttribute("class","operator");
span12.innerHTML="÷";

var span13 = document.createElement("button");
span13.innerHTML="0";
var span14 = document.createElement("button");
span14.innerHTML=".";
var span15 = document.createElement("button");
span15.setAttribute("class","eval");
span15.innerHTML= "=";
var span16 = document.createElement("button");
span16.setAttribute("class","operator");
span16.innerHTML="x";

document.body.append(a,b,c,d,keys1,span1,span2,span3,span4,span5,span6,span7,span8,span9,span10,span11,span12,span13,span14,span15,span16)*/
 
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
	
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		else if(operators.indexOf(btnVal) > -1) {
			var lastChar = inputVal[inputVal.length - 1];
			
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
		
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		

		else {
			input.innerHTML += btnVal;
		}
		
		e.preventDefault();
	} 
}