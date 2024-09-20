let face1; //843 * 474 is native resolution
let speaker1;
let bg1;
let bg2;
let bg3;
let bottomGui1;
let cables1;

let buttonL;
let buttonLDown;
let buttonPause;
let buttonPauseDown;
let buttonPlay;
let buttonPlayDown;
let buttonR;
let buttonRDown;

let eggManRocket;
let crtSet;
let volumeHead;
let search;
let kart;

let V1;
let V2;
let V3;
let V4;
let V5;
let V6;
let V7;
let V8;
let V9;
let V10;
let V11;
let V12;
let V13;

let num = 0.25;

function preload(){
  bg1 = loadImage("images/bg1.png");
  bg2 = loadImage("images/bg2.png");
  bg3 = loadImage("images/bg3.png");
  face1 = loadImage("images/face1.png");
  speaker1 = loadImage("images/speaker1.png");
  bottomGui1 = loadImage("images/bottomGui1.png");
   cables1 = loadImage("images/cables1.png");
  
    buttonL = loadImage("images/buttonL.png");
      buttonLDown = loadImage("images/buttonLDown.png");
    buttonPause = loadImage("images/buttonPause.png");
    buttonPauseDown = loadImage("images/buttonPauseDown.png");
    buttonPlay = loadImage("images/buttonPlay.png");
    buttonPlayDown = loadImage("images/buttonPlayDown.png");
    buttonR = loadImage("images/buttonR.png");
    buttonRDown = loadImage("images/buttonRDown.png");

    eggManRocket = loadImage("images/eggManRocket.png");
    crtSet = loadImage("images/crtSet.png");
    volumeHead = loadImage("images/volumeHead.png");
  search = loadImage("images/search.png");
  kart = loadImage("images/kartFinalB.png");

  V1 = loadImage("volume/V1.png");
  V2 = loadImage("volume/V2.png");
  V3 = loadImage("volume/V3.png");
  V4 = loadImage("volume/V4.png");
  V5 = loadImage("volume/V5.png");
  V6 = loadImage("volume/V6.png");
  V7 = loadImage("volume/V7.png");
  V8 = loadImage("volume/V8.png");
  V9 = loadImage("volume/V9.png");
  V10 = loadImage("volume/V10.png");
  V11 = loadImage("volume/V11.png");
  V12 = loadImage("volume/V12.png");
  V13 = loadImage("volume/V13.png");
  
  
}

function setup() {
  createCanvas(1920*num, 1080*num);
  
}//end setup

function draw(){
  image(bg2, 0, 0, 1920*num, 1080*num);
  image(cables1, 137*num, 10*num, 1686*num, 900*num);
  image(face1, 137*num, 10*num, 1686*num, 900*num);
  // image(face1, 137*numX, 100*numX, 1686*numX, 948*numX);//size(1686 948) this whole line is if the image was directly centred
  image(speaker1, 137*num, -10*num, 1686*num, 948*num);
  image(bottomGui1, 0*num, 0*num, 1920*num, 1080*num);
  image(buttonL, 640*num, 72*num, 140*num, 70*num);
  image(buttonPause, 776*num, 60*num, 140*num, 70*num);
  image(buttonPlay, 1052*num, 60*num, 140*num, 70*num);
  image(buttonR, 1188*num, 72*num, 140*num, 70*num);

  // image(eggManRocket, 1625*num, 300*num, 350*num, 350*num);
  image(eggManRocket, 1625*num, 600*r*num, 350*num, 350*num);
  image(search, 40*num, 30*num, 250*num, 250*num);
  fill("black");
  rect(75*num, 348*num, 130*num, 70*num);
  rect(48*num, 472*num, 190*num, 150*num);
  image(crtSet, -38*num, 270*num, 345*num, 460*num);
  image(kart, 1620*num, 20*num, 300*num, 300*num);
  image(volumeHead, 260*num, 790*num, 160*num, 160*num);
  image(V1, 370*num, 680*num, 120*num, 240*num);
  
}//end draw

function mousePressed(){
  console.log(mouseX/num, mouseY/num);
}


