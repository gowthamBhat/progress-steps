const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  console.log(currentActive);
  update();
});
prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  console.log(currentActive);
  update();
});

function update() {
  circles.forEach((circle, index) => {
    //the index count that are less than currentActive count add active class
    if (index < currentActive) circle.classList.add('active');
    else circle.classList.remove('active');
    // if they are not less than currentActive count then remove the active class
  });
  const actives = document.querySelectorAll('.active'); //list of all active classes to fill the line
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
}
