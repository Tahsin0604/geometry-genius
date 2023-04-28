const inputs=document.getElementsByClassName('input');
for(const input of inputs){
  input.addEventListener('blur',function(){
    const inputString=input.value;
    if(isNaN(inputString)){
      validationFunction(input,'invalid-input');
    }
    else{
      const inputValue=parseFloat(inputString);
      if(inputValue<0){
        validationFunction(input,'error-input');
      }
      else{
        validationFunction(input,'no-error');
      }
    }    
  });
}
