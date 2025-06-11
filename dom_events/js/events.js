// Option 2 to handle event
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option3: Get element by ID and then set onclick
const btnMakeBlue = document.getElementById("btn-make-blue");
//   console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// Option 3 slight different version
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}
