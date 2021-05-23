var doctorImage, doctor;
var hospitalImage, hospital;
var patient1, patient2, patient3, patient4, patient5, patient6,patient7, patient8, patient9, patient10;
var ambulanceImage, ambulance;
var cityAnimation;
var playButton, playButtonGif;

function preload(){
    doctorImage = loadImage("doctor.jpg");
    hospitalImage = loadImage("hospital.jpg");
    ambulanceImage = loadImage("ambulance.png");
    patient1 = loadImage("patient1.jpg");
    patient2= loadImage("patient2.png");
    patient3 = loadImage("patient3.png");
    patient4 = loadImage("patient4.jpg");
    patient5 = loadImage("patient5.jpg");
    patient6 = loadImage("patient6.jpg");
    patient7 = loadImage("patient7.jpg");
    patient8 = loadImage("patient8.jpg");
    patient9 = loadImage("patient9.jpg");
    patient10 = loadImage("patient10.png");
    cityAnimation = createImg("city.gif"); 
    playButtonGif = createImg("play.gif");

}

function setup(){
    createCanvas(800,600);

    playButton = createSprite(400,300,80,80);
  
}

function draw(){
    background("lightblue");


    playButtonGif.position(350,250);
    cityAnimation.position(0,0);

    if(mousePressedOver(playButton)){
        playButtonGif.hide();
    }

    drawSprites();
}