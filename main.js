noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('PoseNet is Initialized');
}

function gotPoses(results){
if (results.lenght>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX = "+noseX + "noseY = "+noseY);

leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);

console.log("leftWristX = "+leftWristX + "rightWristX = "+rightWristX+ "difference="+difference);
}
}

function preload(){
}

function draw(){
background('lightblue');

document.getElementById("radius_Circle").innerHTML="Radius of the circle will be = "+difference+"px";
fill('black');
stroke('black');
circle(noseX,noseY,difference);
}