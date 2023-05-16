var carro1,carro2,carro3,carro4,carro5,carro6
var imagemRua  
var ator
var edge
var score=0
var Lifes=8
var gameState=1
var serve=0
var jogar=1
var gameOver=3
var botaoRestart

function preload(){
  imagemRua = loadImage("imagens/estrada.png") 
  imagemCarro1 = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemAtor1 = loadImage("imagens/ator-1.png")
}

function setup() {
  createCanvas(600,400)
  montarJogo()
  
 gameState = serve
  
  botaoRestart = createSprite(300,270,50,50)
}

function draw() {
  background(imagemRua);

if(gameState == serve){
  fill("white")
  textSize(30)
   text("pressione ESPAÇO para iniciar", 100, 200)
  if(keyDown("SPACE")){
gameState = jogar
      carro1.velocityX = -8
    carro2.velocityX = -6
    carro3.velocityX = -5
    carro4.velocityX = -7
    carro5.velocityX = -8
    carro6.velocityX = -5
     }
  botaoRestart.visible = false
   }
    
    if(gameState == jogar){
   
        ator.collide(edge)
      if(Lifes < 1){
         gameState = gameOver
         }
      
         if(keyDown("a") ){
    ator.x = ator.x-5
  }
  
   if(keyDown("d") ){
    ator.x = ator.x+5
  }
  
   if(keyDown("w") ){
    ator.y = ator.y-10
  }
  
   if(keyDown("s") ){
    ator.y = ator.y+10
  }
  if(carro1.x < 0){
    carro1.x = 550
     }

       if(carro2.x < 0){
    carro2.x = 550
     }
     
    if(carro3.x < 0){
    carro3.x = 550
     }
    if(carro4.x < 0){
    carro4.x = 550
     }
    if(carro5.x < 0){
    carro5.x = 550
     }
    if(carro6.x < 0){
    carro6.x = 550
      
     }
  if(ator.isTouching(carro1)){
    ator.y = 380
     Lifes = Lifes -1
     }
  
  if(ator.isTouching(carro2)){
    ator.y = 380
     Lifes = Lifes -1
     }
  if(ator.isTouching(carro3)){
    ator.y = 380
     Lifes = Lifes -1
     }
  if(ator.isTouching(carro4)){
    ator.y = 380
     Lifes = Lifes -1
     }
  if(ator.isTouching(carro5)){
    ator.y = 380
     Lifes = Lifes -1
     }
  if(ator.isTouching(carro6)){
    ator.y = 380
   Lifes = Lifes -1
     }
  
  textSize(20)
  text("Score:  " + score , 100, 20)
  text("Lifes:  " + Lifes, 200, 20)
  
   botaoRestart.visible = false
      
      if(ator.y < 5){
         ator.x =  220
      ator.y = 380
        score+=1
         }
      
      
     }
  if(gameState == gameOver){
    
  fill("black")
    textSize(50)
    text("GAME OVER", 150, 200)
    carro1.destroy()
        carro2.destroy()
        carro3.destroy()
        carro4.destroy()
        carro5.destroy()
        carro6.destroy()
     ator.destroy()
    
     botaoRestart.visible = true
 
    if(mousePressedOver(botaoRestart) ){
       gameState = serve
      Lifes = 3
      montarJogo()
      score = 0
       }
    
     }
  
  
  drawSprites()
   
}
 function montarJogo(){

 carro1 = createSprite(550,60,20,20)
  carro1.addAnimation("carro1" ,imagemCarro1)
        carro1.scale = 0.5              
carro2 = createSprite(550,120,20,20)
  carro2.addAnimation("carro2", imagemCarro2)
  carro2.scale = 0.5
  carro3 = createSprite(550,170,20,20)
  carro3.addAnimation("carro3", imagemCarro3)
  carro3.scale = 0.5
  
  carro4 = createSprite(550,230,20,20)
  carro4.addAnimation("carro4", imagemCarro1)
  carro4.scale = 0.5
  carro5 = createSprite(550,285,20,20)
  carro5.addAnimation("carro5", imagemCarro2)
  carro5.scale = 0.5
  carro6 = createSprite(550,340,20,20)
  carro6.addAnimation("carro6", imagemCarro3)
  carro6.scale = 0.5
  
  ator = createSprite(220,380,20,20)
  ator.addAnimation("ator1", imagemAtor1)
  ator.scale = 0.2
  edge = createEdgeSprites()
 }
