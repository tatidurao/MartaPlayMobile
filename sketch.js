//variavel personagens
var pc, pc_CostaM, pc_DireitaM, pc_EsquerdaM, pc_FrenteM, pc_CostaP, pc_DireitaP, pc_EsquerdaP, pc_FrenteP;

//variavel botoes
var buttonCheckPointImage, buttonSomImage1;
var buttonComecar, tente_novamente;
var buttonSom1, buttonBemtiviImage;
var buttonSom2, buttonSiriemaImage;
var buttonSom3, buttonAnuBrancoImage;
var buttonSom4, buttonJacupembaImage;
var buttonSom5, buttonBeijaFlorImage;
var buttonSom6, buttonPicapauImage;
var backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4,backgroundImage5;
var bemtiviSound, anuBrancoSound, siriemaSound, jacupembaSound, beijaFlorSound, picapauSound
var sad_sound, background_sound;
var bControlL, bControlR, bControlT, bControlD, bSound1,bSound2, bSound3, bSound4,bSound5, btComecar
//sinalizadores de movimento
var moved = true;

//estados de Jogos = cena 1 = "Instruções" cena2 = "jogo cena3 = "cachoeira" cena 4 = "credito" 
var cena = 1;
var code = "Resposta incorreta";
var habilitar1 = false;
var habilitar2 = false;
var habilitar3 = false;
var habilitar4 = false;
var habilitar5 = false;
var habilitar6 = false;
var colidir1 = true;
var colidir2= true;
var colidir3= true;
var colidir4= true;
var colidir5= true;
var colidir6= true;
var score=0;
const accessCode1 = {1:"BEMTEVI", 2:"BEM TE VI", 3:"BEM-TE-VI",4:"BEMTIVI"}
const accessCode2 = {1:"SIRIEMA",2:"SERIEMA"}
const accessCode3 = {1:"ANU BRANCO", 2:"ANUBRANCO"}
const accessCode4 = "JACUPEMBA"
const accessCode5 = {1:"PICAPAU", 2:"PICA-PAU",3:"PICA PAU"}



function preload() {
  //imagens do Jogo
  backgroundImage1 = loadImage("./cenas/cena1.jpg");
  backgroundImage2 = loadImage("./cenas/cena2.jpg");
  backgroundImage3 = loadImage("./cenas/cena3.jpg");
  backgroundImage4 = loadImage("./cenas/cena4.jpg");

  //jogador principal
  pc_CostaM=loadAnimation("./animation/m_costa_1.png","./animation/m_costa_2.png", "./animation/m_costa_3.png","./animation/m_costa_4.png")
  pc_DireitaM=loadAnimation("./animation/m_direita_1.png","./animation/m_direita_2.png","./animation/m_direita_3.png","./animation/m_direita_4.png")
  pc_EsquerdaM=loadAnimation("./animation/m_esquerda_1.png","./animation/m_esquerda_2.png","./animation/m_esquerda_3.png")
  pc_FrenteM=loadAnimation("./animation/m_frente_1.png","./animation/m_frente_2.png","./animation/m_frente_3.png","./animation/m_frente_4.png")

  pc_FrenteP=loadAnimation("./animation/m_frente_1.png")
  pc_CostaP = loadAnimation ("./animation/m_costa_1.png")
  pc_EsquerdaP = loadAnimation ("./animation/m_esquerda_1.png")
  pc_DireitaP = loadAnimation ("./animation/m_frente_1.png")

  bemtiviSound =loadSound('./sons/bem-te-vi.mp4')
  anuBrancoSound=loadSound('./sons/anubranco.mp3')
  siriemaSound=loadSound('./sons/siriema.wav') 
  jacupembaSound=loadSound('./sons/jacupemba_som.mp3')
  beijaFlorSound =loadSound('./sons/beijaflor.mp3') 
  picapauSound=loadSound('./sons/picapau.mp3')
  sad_sound = loadSound("./sons/sad.wav");
  background_sound=loadSound("./sons/background_music.mp3")
 

  //botões
  buttonSomImage1=loadAnimation("./sinalizadores/button_sound.png")
  buttonCheckPointImage=loadAnimation("./sinalizadores/checkPoint.png")
  buttonBemtiviImage=loadAnimation("./passaros/Bemtivi.png")
  buttonAnuBrancoImage =loadAnimation("./passaros/anubranco.png")
  buttonBeijaFlorImage =loadAnimation("./passaros/beija_flor.png")
  buttonJacupembaImage=loadAnimation("./passaros/jacupemba.png")
  buttonSiriemaImage=loadAnimation("./passaros/siriema.png")
  buttonPicapauImage=loadAnimation("./passaros/pica_pau.png")
 
  
}

function setup() {
 canvas = createCanvas(500,600);
 canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
 buttonComecar=createSprite(415,550,50,50)
 buttonComecar.visible = false

 buttonSom1=createSprite(142,350)
 buttonSom1.addAnimation("checkPoint", buttonCheckPointImage)
 buttonSom1.addAnimation("soundImage", buttonSomImage1)
 buttonSom1.addAnimation("bemtivi", buttonBemtiviImage)
 buttonSom1.changeAnimation("checkPoint")
 buttonSom1.visible=false
 buttonSom1.scale = 0.08
 //buttonSom1.debug = true
 buttonSom1.setCollider("rectangle",-660,0,1200, 100);

 buttonSom2=createSprite(75,480)
 buttonSom2.addAnimation("checkPoint", buttonCheckPointImage)
 buttonSom2.addAnimation("soundImage", buttonSomImage1)
 buttonSom2.addAnimation("siriema", buttonSiriemaImage)
 buttonSom2.changeAnimation("checkPoint")
 buttonSom2.visible=false
 buttonSom2.scale = 0.08
 //buttonSom2.debug = true

 buttonSom3=createSprite(330,540)
 buttonSom3.addAnimation("checkPoint", buttonCheckPointImage)
 buttonSom3.addAnimation("soundImage", buttonSomImage1)
 buttonSom3.addAnimation("anubranco", buttonAnuBrancoImage)
 buttonSom3.changeAnimation("checkPoint")
 buttonSom3.visible=false
 buttonSom3.scale = 0.08
 //buttonSom3.debug = true
 buttonSom3.setCollider("rectangle",0,0,1000, 800);

 buttonSom4=createSprite(440,380)
 buttonSom4.addAnimation("checkPoint", buttonCheckPointImage)
 buttonSom4.addAnimation("soundImage", buttonSomImage1)
 buttonSom4.addAnimation("jacupemba", buttonJacupembaImage)
 buttonSom4.changeAnimation("checkPoint")
 buttonSom4.visible=false
 buttonSom4.scale = 0.08
 //buttonSom4.debug = true
 buttonSom4.setCollider("rectangle",-200,0,1000, 800);

 buttonSom5=createSprite(380,320)
 buttonSom5.addAnimation("checkPoint", buttonCheckPointImage)
 buttonSom5.addAnimation("soundImage", buttonSomImage1)
 buttonSom5.addAnimation("picapau", buttonPicapauImage)
 buttonSom5.changeAnimation("checkPoint")
 buttonSom5.visible=false
 buttonSom5.scale = 0.08

 //moviemnto
 pc = createSprite(99,295,20,30);
 pc.addAnimation("costa",pc_CostaM)
 pc.addAnimation("direita",pc_DireitaM)
 pc.addAnimation("esquerda",pc_EsquerdaM)
 pc.addAnimation("frente",pc_FrenteM)
 pc.addAnimation("pc_CostaP",pc_CostaP)
 pc.addAnimation("pc_EsquerdaP",pc_EsquerdaP)
 pc.addAnimation("pc_DireitaP",pc_DireitaP)
 pc.addAnimation("pc_FrenteP",pc_FrenteP)
 pc.changeAnimation("pc_FrenteP")
 pc.scale=1

 edges= createEdgeSprites();
 tente_novamente = createImg('./cenas/tente_novemente.png')
 tente_novamente.position(canvas.x + width / 2 +28,canvas.y + height / 2 - 100);
 tente_novamente.size(180,20);  

 text1 = createElement("h1");
 text1.html("MEETVIB");
 console.log(canvas.x + width/2 )
 console.log(canvas.y + height / 2 )
 text1.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 190)
 text1.class("greeting");

 textDica1 = createElement("div");
 textDica1.html(`Dica: Sua barriga é amarela e seu canto é alto e onomatopaico.`);
 textDica1.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 170)
 textDica1.class("greeting2");

 access1 = createInput("")
 access1.position(canvas.x + width / 2 - 180,canvas.y + height / 2 - 100);
 access1.style('background', 'white');  
 access1.class("input")

 button1 = createImg('./sinalizadores/check.png')
 button1.position(canvas.x + width / 2 - 110,canvas.y + height / 2 - 60);
 button1.size(40,40);

 text2 = createElement("div");
 text2.html("EMASIRI");
 text2.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 190)
 text2.class("greeting");

 textDica2 = createElement("h2");
 textDica2.html(`Dica: Animal símbolo de Minas Gerais, </br>com pernas longas e pode ter até 1,35 m de altura.`);
 textDica2.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 170)
 textDica2.class("greeting2");

 access2  = createInput("")
 access2.position(canvas.x + width / 2 - 180,canvas.y + height / 2 - 100);
 access2.style('background', 'white');  

 button2 = createImg('./sinalizadores/check.png')
 button2.position(canvas.x + width / 2 - 110,canvas.y + height / 2 - 60);
 button2.size(50,50);

 text3 = createElement("h2");
 text3.html("ABRUNACON");
 text3.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 190)
 text3.class("greeting");

 textDica3 = createElement("div");
 textDica3.html("Dica: Possui uma crista alaranjada e sempre eriçada");
 textDica3.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 170)
 textDica3.class("greeting2");

 access3  = createInput("")
 access3.position(canvas.x + width / 2 - 180,canvas.y + height / 2 - 100);
 access3.style('background', 'white');  

 button3 = createImg('./sinalizadores/check.png')
 button3.position(canvas.x + width / 2 - 110,canvas.y + height / 2 - 60);
 button3.size(50,50);

 text4 = createElement("h2");
 text4.html("CAPUJEMBA");
 text4.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 190)
 text4.class("greeting");

 textDica4 = createElement("div");
 textDica4.html("Dica: O café produzido das sementes de suas fezes é o mais caro do mundo.");
 textDica4.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 170)
 textDica4.class("greeting2");

 access4  = createInput("")
 access4.position(canvas.x + width / 2 - 180,canvas.y + height / 2 - 100);
 access4.style('background', 'white');  

 button4 = createImg('./sinalizadores/check.png')
 button4.position(canvas.x + width / 2 - 110,canvas.y + height / 2 - 60);
 button4.size(50,50);

 text5 = createElement("h2");
 text5.html("PAUIPAC");
 text5.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 190)
 text5.class("greeting");

 textDica5 = createElement("div");
 textDica5.html("Dica: Ator famoso, representado em um desenho muito assistido nos anos 90.");
 textDica5.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 170)
 textDica5.class("greeting2");

 access5  = createInput("")
 access5.position(canvas.x + width / 2 - 180,canvas.y + height / 2 - 100);
 access5.style('background', 'white');  

 button5 = createImg('./sinalizadores/check.png')
 button5.position(canvas.x + width / 2 - 110,canvas.y + height / 2 - 60);
 button5.size(50,50);
 
 bControlL = createImg('./sinalizadores/esquerda.png')
 bControlL.position(canvas.x + width / 2 - 100,canvas.y + height / 2 + 240);
 bControlL.size(40,40);

 bControlD = createImg('./sinalizadores/down.png')
 bControlD.position(canvas.x + width / 2-50 ,canvas.y + height / 2 + 240);
 bControlD.size(40,40);

 bControlR = createImg('./sinalizadores/direita.png')
 bControlR.position(canvas.x + width / 2 ,canvas.y + height / 2 + 240);
 bControlR.size(40,40);

 bControlT = createImg('./sinalizadores/top.png')
 bControlT.position(canvas.x + width / 2-50 ,canvas.y + height / 2 + 190);
 bControlT.size(40,40);

 bSound1= createImg('./sinalizadores/button_sound.png')
 bSound1.position(canvas.x + width / 2-150 ,canvas.y + height / 2 + 50);
 bSound1.size(100,60);

 bSound2= createImg('./sinalizadores/button_sound.png')
 bSound2.position(canvas.x + width / 2-200 ,canvas.y + height / 2 + 180);
 bSound2.size(100,60);

 bSound3= createImg('./sinalizadores/button_sound.png')
 bSound3.position(canvas.x + width / 2+80 ,canvas.y + height / 2 + 220);
 bSound3.size(100,60);

 bSound4= createImg('./sinalizadores/button_sound.png')
 bSound4.position(canvas.x + width / 2+160,canvas.y + height / 2 + 80);
 bSound4.size(100,60);

 bSound5= createImg('./sinalizadores/button_sound.png')
 bSound5.position(canvas.x + width / 2+95 ,canvas.y + height / 2 + 20);
 bSound5.size(100,60); 
 //415,550,50,50
 btComecar = createImg("./sinalizadores/check.png")
 btComecar.position(canvas.x + width / 2+135 ,canvas.y + height / 2 + 220)
 btComecar.size(60,60);
 btComecar.class("btcomecar");
 esconderelementos()

}

function draw() 
{  
  if(cena === 1){
    background(backgroundImage1);
    pc.visible = false
    
    if(mousePressedOver(buttonComecar)){
      pc.visible = true
      buttonSom1.visible = true
      bControlD.show()
      bControlT.show()
      bControlL.show()
      bControlR.show()
      cena = 2
      
    }
    btComecar.mouseClicked(comecar)
  }
  if(cena === 2){
    background(backgroundImage2);
    textSize(15);
    fill("white");
    text("PONTUAÇÃO: " + score, 350, 50);

    pc.collide(edges);
    //escuta1 bem ti vi
    //colide só se var colidir 1 for true
    if(pc.collide(buttonSom1) && colidir1){
      buttonSom1.changeAnimation("bemtivi")
      buttonSom1.setCollider("rectangle",0,0,200, 100);
      habilitar1 = true //habilitar pressionamento do botão
      buttonSom1.scale = 0.4
      buttonSom1.visible=false
      bSound1.show()
      moved=false
      pc.changeAnimation("pc_FrenteP") //mudar animação
      pc.velocityX = 0
      pc.velocityY = 0
      pc.x=pc.x-30
    }
    //pressionar apenas se o var habilitar 1 for true
    /*if(mousePressedOver(buttonSom1) && habilitar1){
      
      mostrarelementosIndividual(text1, textDica1,access1, button1)
      toqueSom(bemtiviSound)
      
     
    }*/
    bControlL.mouseClicked(left) 
    bControlR.mouseClicked(right) 
    bControlT.mouseClicked(topp) 
    bControlD.mouseClicked(down) 
    bSound1.mouseClicked(toqueBT1)
    bSound2.mouseClicked(toqueBT2)
    bSound3.mouseClicked(toqueBT3)
    bSound4.mouseClicked(toqueBT4)
    bSound5.mouseClicked(toqueBT5)
      
  

    if(habilitar1){
      //acaobuttonGenerica(palavraChave,caixaChave, buttonSom,stringAnimation, pcx, pcy, t,d,a,b, habilitar, colidir, nextButton)
      //button1.mouseClicked(()=>{acaobuttonGenerica(accessCode1, access1, buttonSom1,"bemtivi",190,425, text1, textDica1, access1,button1, habilitar1,colidir1, buttonSom2)})
      button1.mouseClicked(acaobutton1)
    }
  //escuta 2 Siriema
    if(pc.collide(buttonSom2) && colidir2){
      buttonSom2.changeAnimation("soundImage")
      buttonSom2.setCollider("rectangle",0,0,200, 200);
      habilitar2 = true //habilitar pressionamento do botão
      buttonSom2.scale = 0.4
      buttonSom2.visible=false
      bSound2.show()
      moved=false
      pc.changeAnimation("pc_FrenteP") //mudar animação
      pc.velocityX = 0
      pc.velocityY = 0
      pc.x=30
      pc.y=430
    }
    //pressionar apenas se o var habilitar 1 for true
   /* if(mousePressedOver(buttonSom2) && habilitar2){
      
      mostrarelementosIndividual(text2, textDica2,access2, button2)
      toqueSom(siriemaSound)
      
      
    }*/
    if(habilitar2){
      //button2.mouseClicked(()=>{acaobuttonGenerica(accessCode2, access2, buttonSom2,"siriema",200,530, text2, textDica2, access2,button2, habilitar2,colidir2, buttonSom3)})
      button2.mouseClicked(acaobutton2)
    }
  //escuta 3
  if(pc.collide(buttonSom3) && colidir3){
    buttonSom3.changeAnimation("soundImage")
    buttonSom3.setCollider("rectangle",0,0,200, 200);
    habilitar3 = true //habilitar pressionamento do botão
    buttonSom3.scale = 0.4
    buttonSom3.visible=false
    bSound3.show()
    moved=false
    pc.changeAnimation("pc_FrenteP") //mudar animação
    pc.velocityX = 0
    pc.velocityY = 0
    pc.x=pc.x-30
    pc.y=pc.y-30
  }
  //pressionar apenas se o var habilitar 1 for true
 /*if(mousePressedOver(buttonSom3) && habilitar3){
    
    mostrarelementosIndividual(text3, textDica3,access3, button3)
    toqueSom(anuBrancoSound)
    
  }*/
  if(habilitar3){
    button3.mouseClicked(acaobutton3)
  }

//escuta 4 jacupemba

  if(pc.collide(buttonSom4) && colidir4){
    buttonSom4.changeAnimation("soundImage")
    buttonSom4.setCollider("rectangle",0,0,200, 200);
    habilitar4 = true //habilitar pressionamento do botão
    buttonSom4.scale = 0.4
    buttonSom4.visible=false
    bSound4.show()
    moved=false
    pc.changeAnimation("pc_FrenteP") //mudar animação
    pc.velocityX = 0
    pc.velocityY = 0
    pc.x=pc.x-30
  }
  //pressionar apenas se o var habilitar 1 for true
  /*if(mousePressedOver(buttonSom4) && habilitar4){
    
    mostrarelementosIndividual(text4, textDica4,access4, button4)
    toqueSom(jacupembaSound)
    
  }*/
  if(habilitar4){
    button4.mouseClicked(acaobutton4)
  }
//escuta 5 picapau

if(pc.collide(buttonSom5) && colidir5){
  buttonSom5.changeAnimation("soundImage")
  habilitar5 = true //habilitar pressionamento do botão
  buttonSom5.scale = 0.4
  buttonSom5.visible=false
  bSound5.show()
  moved=false
  pc.changeAnimation("pc_FrenteP") //mudar animação
  pc.velocityX = 0
  pc.velocityY = 0
  pc.x=pc.x-30
}
//pressionar apenas se o var habilitar 1 for true
/*if(mousePressedOver(buttonSom5) && habilitar5){
  
  mostrarelementosIndividual(text5, textDica5,access5, button5)
  toqueSom(picapauSound)
    
}*/
if(habilitar5){
  button5.mouseClicked(acaobutton5)
}  
    
    if(score === 5) {
      
      setTimeout(() => {
        cena = 3
       
      }, 3000);
      
      
    }
   
    
  }
  if(cena === 3){
    background(backgroundImage3);
    toqueSom(background_sound)
    pc.collide(edges);  
    pc.x=50
    pc.y = 520
    buttonSom1.visible =false
    buttonSom2.visible =false
    buttonSom3.visible =false
    buttonSom4.visible =false
    buttonSom5.visible =false
    bControlD.hide()
    bControlL.hide()
    bControlR.hide()
    bControlT.hide()

    
    setTimeout(() => {
      cena =4
      
    }, 7000);
      
  }
  
  if(cena === 4){
    background(backgroundImage4);
    pc.visible = false 
    buttonSom1.visible =false
    buttonSom2.visible =false
    buttonSom3.visible =false
    buttonSom4.visible =false
    buttonSom5.visible =false
    bControlD.hide()
    bControlL.hide()
    bControlR.hide()
    bControlT.hide()
    //background_sound.stop()
    
  }
  //controles do jogador
  if(moved===true){
   if(keyWentDown(UP_ARROW)){
    pc.velocityY=-2
    pc.changeAnimation("costa")
   
    //pc.scale=0.222
   }
   else if (keyWentUp(UP_ARROW)){
    pc.velocityY=0
    pc.changeAnimation("pc_CostaP")
   
   }
   if(keyWentDown(DOWN_ARROW)){
    pc.velocityY=2
    //pc.scale=0.4
    pc.changeAnimation("frente")
    
   }
   else if (keyWentUp(DOWN_ARROW)){
    pc.velocityY=0
    pc.changeAnimation("pc_FrenteP")
    
   }
   if(keyWentDown(LEFT_ARROW)){
    pc.velocityX=-2
    //pc.scale=0.4
    pc.changeAnimation("esquerda")
    
   }
   else if (keyWentUp(LEFT_ARROW)){
    pc.velocityX=0
    pc.changeAnimation("pc_EsquerdaP")
   
   }
   
   if(keyWentDown(RIGHT_ARROW)){
    pc.velocityX=2
    //pc.scale=0.4
    pc.changeAnimation("direita")
    
   }
   else if (keyWentUp(RIGHT_ARROW)){
    pc.velocityX=0
    pc.changeAnimation("pc_DireitaP")
   
   }
  }

  
  //comportamentos fora do estado de jogo
 // textSize(10);
  //text (mouseX + "," + mouseY, mouseX, mouseY)
  drawSprites();
}
/*function acaobuttonGenerica(palavraChave,caixaChave, buttonSom,stringAnimation, pcx, pcy, t,d,a,b, habilitar, colidir, nextButton){
  if(authenticate(palavraChave[1],caixaChave.value())||authenticate(palavraChave[2],caixaChave.value())||authenticate(palavraChave[3],caixaChave.value())){
    buttonSom.changeAnimation(stringAnimation)
    pc.x = pcx
    pc.y = pcy
    esconderelementosIndividual(t,d,a,b)
    score++;
    habilitar=false; //desabilitar clique
    colidir = false //desabiliar colisão
    buttonSom.scale = 0.2
    moved = true
    nextButton.visible = true
  }else{
    sad_sound.play();
  }
}*/
function acaobutton1()
{
  if(authenticate(accessCode1[1],access1.value())||authenticate(accessCode1[2],access1.value())||authenticate(accessCode1[3],access1.value())||authenticate(accessCode1[4],access1.value())){
    buttonSom1.changeAnimation("bemtivi")
    buttonSom1.setCollider("rectangle",0,0,200, 400);
    buttonSom1.visible=true
    bSound1.hide()
    pc.x = 30
    pc.y = 360
    esconderelementosIndividual(text1,textDica1,access1,button1)
    score++;
    habilitar1=false; //desabilitar clique
    colidir1 = false //desabiliar colisão
    buttonSom1.scale = 0.2
    moved = true
    buttonSom2.visible = true
    buttonSom2.setCollider("rectangle",0,-300,700, 800);
    tente_novamente.hide()
  }
  else{
    toqueSom(sad_sound)
    //sad_sound.play();
    tente_novamente.show()
  }
    
}

function acaobutton2()
{
  if(authenticate(accessCode2[1],access2.value())||authenticate(accessCode2[2],access2.value())){
    buttonSom2.changeAnimation("siriema")
    buttonSom2.setCollider("rectangle",0,0,200, 400);
    buttonSom2.visible=true
    bSound2.hide()
    pc.x = 260
    pc.y = 500
    esconderelementosIndividual(text2,textDica2,access2,button2)
    score++;
    habilitar2=false; //desabilitar clique
    colidir2 = false //desabiliar colisão
    buttonSom2.scale = 0.2
    moved = true
    buttonSom3.visible = true
    tente_novamente.hide()
  }else{
    toqueSom(sad_sound)
    //sad_sound.play();
    tente_novamente.show()
  }
    
}

function acaobutton3()
{
  if(authenticate(accessCode3[1],access3.value())||authenticate(accessCode3[2],access3.value())){
    buttonSom3.changeAnimation("anubranco")
    buttonSom3.setCollider("rectangle",0,0,400, 400);
    buttonSom3.visible=true
    bSound3.hide()
    pc.x = 360
    pc.y = 450
    esconderelementosIndividual(text3,textDica3,access3,button3)
    score++;
    habilitar3=false; //desabilitar clique
    colidir3 = false //desabiliar colisão
    buttonSom3.scale = 0.2
    moved = true
    buttonSom4.visible = true
    tente_novamente.hide()
  }else{
    toqueSom(sad_sound)
    //sad_sound.play();
    tente_novamente.show()
  }
    
}

function acaobutton4()
{
  if(authenticate(accessCode4,access4.value())){
    buttonSom4.changeAnimation("jacupemba")
    buttonSom4.setCollider("rectangle",150,0,400, 400);
    buttonSom4.visible=true
    bSound4.hide()
    pc.x = 300
    pc.y = 360
    esconderelementosIndividual(text4,textDica4,access4,button4)
    score++;
    habilitar4=false; //desabilitar clique
    colidir4 = false //desabiliar colisão
    buttonSom4.scale = 0.2
    moved = true
    buttonSom5.visible = true
    tente_novamente.hide()
  }else{
    toqueSom(sad_sound)
    //sad_sound.play();
    tente_novamente.show()
  }
    
}

function acaobutton5()
{
  if(authenticate(accessCode5[1],access5.value())||authenticate(accessCode5[2],access5.value())||authenticate(accessCode5[3],access5.value())){
    buttonSom5.changeAnimation("picapau")
    buttonSom5.visible=true
    bSound5.hide()
    buttonSom5.x = 390
    buttonSom5.y = 210
    pc.x = 270
    pc.y = 330
    esconderelementosIndividual(text5,textDica5,access5,button5)
    score++;
    habilitar5=false; //desabilitar clique
    colidir5 = false //desabiliar colisão
    buttonSom5.scale = 0.25
    moved = true
    //buttonSom5.visible = true
    tente_novamente.hide()
  }else{
    toqueSom(sad_sound)
    //sad_sound.play();
    tente_novamente.show()
  }
    
}


function authenticate(actualCode,enteredCode){
  
  if(actualCode === enteredCode.toUpperCase()) 
      return true
  else
      return false
      
}


function esconderelementos(){
  text1.hide()
  text2.hide()
  text3.hide()
  text4.hide()
  text5.hide()
  tente_novamente.hide()
  bControlD.hide()
  bControlT.hide()
  bControlL.hide()
  bControlR.hide()
  bSound1.hide()
  bSound2.hide()
  bSound3.hide()
  bSound4.hide()
  bSound5.hide()

  textDica1.hide()
  textDica2.hide()
  textDica3.hide()
  textDica4.hide()
  textDica5.hide()

  access1.hide()
  access2.hide()
  access3.hide()
  access4.hide()
  access5.hide()

  button1.hide()
  button2.hide()
  button3.hide()
  button4.hide()
  button5.hide()
}

function esconderelementosIndividual(t,d,a,b){
  t.hide()
  d.hide()
  a.hide()
  b.hide()
}

function mostrarelementosIndividual(t,d,a,b){
  t.show()
  d.show()
  a.show()
  b.show()
   
}

function toqueSom(button){
  if(!button.isPlaying()){
    button.play()
  }
}

function windowResized() {
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2); // Reajustar canvas ao redimensionar
  text1.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 190)
  text2.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 190)
  text3.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 190)
  text4.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 190)
  text5.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 190)

  textDica1.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 170)
  textDica2.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 170)
  textDica3.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 170)
  textDica4.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 170)
  textDica5.position(canvas.x + width / 2 - 180, canvas.y + height / 2 - 170)

  access1.position(canvas.x + width / 2 - 180,canvas.y + height / 2 - 100);
  access2.position(canvas.x + width / 2 - 180,canvas.y + height / 2 - 100);
  access3.position(canvas.x + width / 2 - 180,canvas.y + height / 2 - 100);
  access4.position(canvas.x + width / 2 - 180,canvas.y + height / 2 - 100);
  access5.position(canvas.x + width / 2 - 180,canvas.y + height / 2 - 100);

  button1.position(canvas.x + width / 2 - 110,canvas.y + height / 2 - 60);
  button2.position(canvas.x + width / 2 - 110,canvas.y + height / 2 - 60);
  button3.position(canvas.x + width / 2 - 110,canvas.y + height / 2 - 60);
  button4.position(canvas.x + width / 2 - 110,canvas.y + height / 2 - 60);
  button5.position(canvas.x + width / 2 - 110,canvas.y + height / 2 - 60);

 bControlL.position(canvas.x + width / 2 - 100,canvas.y + height / 2 + 240);
 bControlD.position(canvas.x + width / 2-50 ,canvas.y + height / 2 + 240);
 bControlR.position(canvas.x + width / 2 ,canvas.y + height / 2 + 240);
 bControlT.position(canvas.x + width / 2-50 ,canvas.y + height / 2 + 190);

 bSound1.position(canvas.x + width / 2-150 ,canvas.y + height / 2 + 50);
 bSound2.position(canvas.x + width / 2-200 ,canvas.y + height / 2 + 180);
 bSound3.position(canvas.x + width / 2+80 ,canvas.y + height / 2 + 220);
 bSound4.position(canvas.x + width / 2+160,canvas.y + height / 2 + 80);
 bSound5.position(canvas.x + width / 2+95 ,canvas.y + height / 2 + 20);
 
 tente_novamente.position(canvas.x + width / 2 +28,canvas.y + height / 2 - 100);
 btComecar.position(canvas.x + width / 2+135 ,canvas.y + height / 2 + 220)
 
  
}

function left(){
  if(moved===true){
    pc.x -=15
   
    pc.changeAnimation("esquerda")
  }
}
function right(){
  if(moved===true){
   pc.x +=15
      
    pc.changeAnimation("direita")
  }
}
function topp(){
  if(moved===true){
    pc.y -=15
    pc.changeAnimation("costa")
  }
}
function down(){
  if(moved===true){
    pc.y +=15
    pc.changeAnimation("frente")
  }
}

function toqueBT1(){
  mostrarelementosIndividual(text1, textDica1,access1, button1)
 
  toqueSom(bemtiviSound)
}

function toqueBT2(){
  mostrarelementosIndividual(text2, textDica2,access2, button2)
 
  toqueSom(siriemaSound)
}

function toqueBT3(){
  mostrarelementosIndividual(text3, textDica3,access3, button3)
 
  toqueSom(anuBrancoSound)
}

function toqueBT4(){
  mostrarelementosIndividual(text4, textDica4,access4, button4)
 
  toqueSom(jacupembaSound)
}

function toqueBT5(){
  mostrarelementosIndividual(text5, textDica5,access5, button5)
 
  toqueSom(picapauSound)
}

function comecar(){
      pc.visible = true
      buttonSom1.visible = true
      bControlD.show()
      bControlT.show()
      bControlL.show()
      bControlR.show()
      btComecar.hide()
      cena = 2
}