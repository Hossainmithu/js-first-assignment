function calculateRhombusArea(){
  const diagonal1Input = document.getElementById('rhombus-1');
  const diagonal1Text = diagonal1Input.value;
  const diagonal1 = parseFloat(diagonal1Text);
  console.log(diagonal1);

  const diagonal2Input = document.getElementById('rhombus-2');
  const diagonal2Text = diagonal2Input.value;
  const diagonal2 = parseFloat(diagonal2Text);
  console.log(diagonal2);

  const area = .5 * diagonal1 * diagonal2;
  console.log('Area of the Rhombus is :', area);

  const rhombusAreaSpan = document.getElementById('rhombus-area');
  rhombusAreaSpan.innerText = area;


}