let yVaca = 369;
let xVaca = 100

function mostrarVaca(){
  image(imagemVaca, xVaca, yVaca, 30, 27);
}

function movimentarVaca(){
  if(keyIsDown(UP_ARROW)){
    yVaca -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yVaca += 3;
  }
}