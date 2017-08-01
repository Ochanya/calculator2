let calculation = document.querySelector('#outcome');

let number = document.querySelectorAll('.num');

let clear = document.querySelector('.clear');

let operator = document.querySelectorAll('.operator');

let equal = document.querySelector('.equal');


let a;
let b;


number.forEach(function(number){
  number.addEventListener("click", function(){

    if( calculation.innerHTML.length<=13){

    calculation.innerHTML+= number.value;
    calculation.value+=number.value;
    }
  });
})

clear.addEventListener("click", function(){
  calculation.innerHTML="";
})

operator.forEach(function(operator){
  operator.addEventListener("click", function(){
    a = Number(calculation.innerHTML);
    console.log(a);
     b = operator.innerHTML;
       calculation.innerHTML+= operator.innerHTML;
     calculation.value ="";
    console.log(a + b);
    console.log(b);
    return a;
    return b;

  });
})

equal.addEventListener("click", function(){
  let c = Number(calculation.value);
  console.log(c);
  console.log(b);
  console.log(a);
  if (b==="+"){
    calculation.innerHTML= a+c;
    console.log(calculation.innerHTML)
  }else if (b==="-"){
    calculation.innerHTML=a-c;
    console.log(calculation.innerHTML)
  }else if (b==="/"){
    calculation.innerHTML=a/c;
    console.log(calculation.innerHTML)
  }else if (b==="*"){
    calculation.innerHTML=a*c;
    console.log(calculation.innerHTML)
  }

})
