/////input validation
let invalidInput = document.getElementById("invalid-input");
let errorInput = document.getElementById("error-input");
invalidInput.style.display = "none";
errorInput.style.display = "none";
//validationFunction shows invalid input
function validationFunction(input, validationType) {
  // Show if the input is not a number
  if (validationType === "invalid-input") {
    invalidInput.style.display = "block";
    input.style.borderColor = "red";
    input.value = "";
    setTimeout(clearInvalid, 5000);
  
  }

  //Show for negative number
  if (validationType === "error-input") {
    errorInput.style.display = "block";
    input.style.borderColor = "red";
    input.value = "";
    setTimeout(clearError, 5000);
  }
  //For valid number
  if (validationType === "no-error") {
    input.style.borderColor = "aqua";
  }
}
function clearInvalid() {
  invalidInput.style.display = "none";
}
function clearError() {
  errorInput.style.display = "none";
}
/////



// changeBackground() returns a random rgba value
function changeBackground() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let rgba = "rgba(" + x + "," + y + "," + z + ",0.35)";
  return rgba;
}
/////////






//getInputValue return input Field Value
function getInputValue(inputNode) {
  const inputString = inputNode.value;
  const inputValue = parseFloat(inputString);
  if (isNaN(inputValue)) {
    validationFunction(inputNode, "invalid-input");
  } else {
    return inputValue;
  }
}
////


////  multiplication for area Calculation
function multiplication(constant, variable1, variable2) {
  const area = constant * variable1 * variable2;
  return precission(area);
}

//floating point fetermination
function precission(value){
  let finalValue;

  if (Number.isInteger(value)) {
    finalValue = value;
  } else {
    finalValue = value.toFixed(2);
  }

  return finalValue;
}
/////////////

////// set result to resultContainer
let serial = 0;
function setAreaResult(area, type) {
  const resultContainer = document.getElementById("result-container");
  const newResult = document.createElement("div");
  newResult.className = "flex justify-between items-center my-3 gap-1";
  newResult.innerHTML = `
              <div class="flex gap-1 w-4/6 items-center">
                <h4 class="w-1/12"><span class="serial-no">${++serial}</span>.</h4>
                <h4 class="w-5/12">${type}</h4>
                <h4 class="w-6/12 text-right" >
                <span class="units-value">${area}</span> <span class="units ">cm</span><sup>2</sup>
                </h4>
                
              </div>
                           
              
              <button class="bg-sky-600 hover:bg-sky-500 text-white w-2/6 px-1 py-1 rounded-md font-semibold text-sm convert-btn mx-2">Convert to <span class="units-in-btn-span">m</span><sup>2</sup></button>
              <button class="text-red-600 hover:text-red-400"><i class="fa-regular fa-circle-xmark btn-close"></i></button>
  `;
  resultContainer.append(newResult);

  if (resultContainer.children.length > 8) {
    console.log(resultContainer.length);
    resultContainer.parentNode.style.overflowY= "scroll";
  }
}


//// converToDifferentUnit convert the units of result
function converToDifferentUnit(parent) {
  const unitString = parent.getElementsByClassName("units-value")[0].innerText;
  
  const unitValue=parseFloat(unitString);
  let convertedUnit;

  const unit = parent.getElementsByClassName("units")[0].innerText;
  if (unit === "cm") {
    
    parent.getElementsByClassName("units")[0].innerText='m';
    parent.getElementsByClassName("units-in-btn-span")[0].innerText='cm';
    convertedUnit=unitValue*0.0001;
    parent.getElementsByClassName("units-value")[0].innerText=Number.parseFloat(convertedUnit).toExponential(2);
  }
  else{
    parent.getElementsByClassName("units")[0].innerText='cm';
    parent.getElementsByClassName("units-in-btn-span")[0].innerText='m';
    convertedUnit=unitValue*10000;
    parent.getElementsByClassName("units-value")[0].innerText=precission(convertedUnit);
  }
}


// setValueToTextField set Text Field Value
function setValueToTextField(firstFieldNode,firstFieldValue,secondFieldNode,secondFieldValue){
  firstFieldNode.innerHTML=firstFieldValue;
  secondFieldNode.innerHTML=secondFieldValue;
}


//