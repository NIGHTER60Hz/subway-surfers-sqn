var trilha,menino, limiteEsquerdo,limiteDireito;
var trilhaImg,meninoImg;
var i;

function preload(){
  trilhaImg = loadImage("path.png");
  meninoImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
  
//Movendo o fundo 
trilha=createSprite(200,200);
trilha.addImage(trilhaImg);

//criando o menino correndo
menino = createSprite(180,340,30,30);
menino.addAnimation("animaçãodomenino",meninoImg)

//criar o limite esquerdo
limiteEsquerdo=createSprite(0,0,100,800);
limiteEsquerdo.visible = false;

//criar o limite direito 
limiteDireito=createSprite(410,0,100,800);
limiteDireito.visible = false;
}

function draw() {
  background(0);
  trilha.velocityY = 4;
  
  //menino se movendo no eixo X com o mouse
  menino.x = mouseX
  
  bordas = createEdgeSprites();
  menino.collide(limiteEsquerdo);
  menino.collide(limiteDireito);
  //código para resetar o fundo
  if(trilha.y > 400 ){
    trilha.y = height/2;
  }
  
  drawSprites();
}