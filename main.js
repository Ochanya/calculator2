let calculation = document.querySelector('#outcome');

let number = document.querySelectorAll('.num');

let clear = document.querySelector('.clear');

let operator = document.querySelectorAll('.operator');





number.forEach(function(number){
  number.addEventListener("click", function(){

    if(calculation.innerHTML.length<=13){
    // calculation.innerHTML="" ;
    calculation.innerHTML+= number.value;
    }
  });
})

clear.addEventListener("click", function(){
  calculation.innerHTML="";
})

operator.forEach(function(operator){
  operator.addEventListener("click", function(){
    let a = Number(calculation.innerHTML);
    console.log(a);
    let b = operator.innerHTML;
    calculation.innerHTML ="";
    console.log(a + b);
    console.log(b);

    // if(calculation.innerHTML.length<=13){
    // // calculation.innerHTML="" ;
    // calculation.innerHTML+= operator.innerHTML;
    // }
  });
})

// number.addEventListener("click", display);
