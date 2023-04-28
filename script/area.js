//blog-btn event
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "question-blog.html";
});

// ////checkbox event
// const checkboxs=document.getElementsByClassName('checkbox');
// for(const checkbox of checkboxs){

//   checkbox.addEventListener('click',function(e){
//     const parent=e.target.parentNode;
//     if(e.target.checked==true){

//       parent.getElementsByClassName('input-1')[0].removeAttribute('disabled');
//       parent.getElementsByClassName('input-2')[0].removeAttribute('disabled');
//     }
//     else{
//       parent.getElementsByClassName('input-1')[0].setAttribute('disabled',true);
//       parent.getElementsByClassName('input-2')[0].setAttribute('disabled',true);

//     }
//   });
// }

///calculate button event
const buttonCaculators = document.getElementsByClassName("btn-cal");
console.log(buttonCaculators);
const buttonCaculatorsNodes = document.querySelectorAll(".btn-cal");
console.log(buttonCaculatorsNodes);

for (const buttonCalculator of buttonCaculators) {
  buttonCalculator.addEventListener("click", function (e) {
    const parent = e.target.parentNode;
    const type = parent.getElementsByClassName("type")[0].innerText;
    const inputField1 = parent.getElementsByClassName("input-1")[0];
    console.log(inputField1);
    const inputField2 = parent.getElementsByClassName("input-2")[0];
    const input1 = getInputValue(inputField1);
    const input2 = getInputValue(inputField2);
    const value1 = parent.getElementsByClassName("value-1")[0];
    const value2 = parent.getElementsByClassName("value-2")[0];

    if (!isNaN(input1) && !isNaN(input2)) {
      let constant;
      setValueToTextField(value1, input1, value2, input2);
      if (type === "Triangle" || type === "Rhombus" || type === "Pentagon") {
        constant = 0.5;
      } else if (type === "Ellipse") {
        constant = 3.14;
      } else {
        constant = 1;
      }
      // parent.getElementsByClassName('checkbox')[0].checked=false;
      inputField1.value = "";
      // inputField1.setAttribute('disabled',true);
      inputField2.value = "";
      // inputField2.setAttribute('disabled',true);
      const area = multiplication(constant, input1, input2);
      setAreaResult(area, type);
    }
  });
}

//Unit convert event
document
  .getElementById("result-container")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("convert-btn")) {
      const parent = e.target.parentNode;
      converToDifferentUnit(parent);
    }
  });

document
  .getElementById("result-container")
  .addEventListener("click", function (e) {
    const parent = document.getElementById("result-container");
    if (e.target.classList.contains("btn-close")) {
      e.target.parentNode.parentNode.remove();
      setSerial(parent);
    }
  });

function setSerial(parent) {
  let serial = 1;
  const serialNos = parent.getElementsByClassName("serial-no");

  for (const serialNo of serialNos) {
    serialNo.innerText = serial++;
  }
}
