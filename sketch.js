let gantiWarna = false;
function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(220);
  orbitControl();

  if(gantiWarna === true){
    let colors = color("aqua")
    ambientLight(colors);
  }

  cone(200);
}

function doubleClicked(){
gantiWarna = true;
}
