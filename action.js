
var num = document.getElementsByClassName('number');
var texta = document.querySelector('#text');

var operator1 = 0;
var operator2 = 0;
var operator = 0;

for(var i=0;i<num.length;i++) {
  num[i].addEventListener("click",function(event){
     event.preventDefault();
     event.stopPropagation();
    var value=this.getAttribute('data-value');
      console.log(value);
    switch(value) {
  case "AC":
   texta.innerText = " ";
   console.log("I was here ")
    break;
  case "+": operator1= texta.innerText;
    texta.innerText=" ";
    operator= "+";
    break;
  case "-": operator1= texta.innerText;
    texta.innerText=" ";
    operator= "-";
    break; 
  case "*": operator1= texta.innerText;
    texta.innerText=" ";
    operator= "*";
    break;
  case "/": operator1= texta.innerText;
    texta.innerText=" ";
    operator= "/";
    break;     
  case "%": operator1= texta.innerText;
    texta.innerText=" ";
    operator= "%";
    break;  
  case "=":
   var result ;
   operator2=texta.innerText;
   texta.innerText=" ";
   result = eval(operator1 + operator + operator2);
   texta.innerText=result;
   operator=0;
   operator1=0;
   operator=0;
    break;
  default:
    texta.innerText= texta.innerText + value;
}
     
  });
}