// function calculateParallelogramArea(){
//   const baseInput = document.getElementById('parallelogram-base');
//   const baseText = baseInput.value;
//   const base = parseFloat(baseText);
//   console.log(base);

//   const heightInput = document.getElementById('parallelogram-height');
//   const heightText = heightInput.value;
//   const height = parseFloat(heightText);
//   console.log(height);

//   const area = base * height;
//   console.log('area of the Parallelogram is :', area);

//   const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//   parallelogramAreaSpan.innerText = area;
// }

function calculateParallelogramArea(){
  const base = getInputValueById('parallelogram-base');
  // console.log(base);
}

function getInputValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  console.log(inputField);
}