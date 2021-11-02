leftWrist_x=0;
leftWrist_y=0;
rightWrist_x=0;
rightWrist_y=0;
function preload(){
pokeleft=loadImage("https://i.postimg.cc/jdHfYDnD/154-1546489-transparent-pokeball-png-pokemon-master-ball-png-removebg-preview.png")
pokeright=loadImage("https://i.postimg.cc/6pDxVpzh/Mewtwo-Ball.png")
}
 

function setup(){
canvas=createCanvas(500,500)
canvas.center();
vido=createCapture(VIDEO);
vido.size(500,500);
vido.hide();
posenet=ml5.poseNet(vido,modelLoded);
posenet.on("pose",gotPoses);
}


function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftWrist_x=results[0].pose.leftWrist.x
    leftWrist_y=results[0].pose.leftWrist.y-50
    rightWrist_x=results[0].pose.rightWrist.x
    rightWrist_y=results[0].pose.rightWrist.y-50
    console.log("Left Wrist X Coordinates:"+leftWrist_x);
    console.log("Right Wrist X Coordinates:"+rightWrist_x);
    console.log("Left Wrist Y Coordinates:"+leftWrist_y);
    console.log("Right Wrist Y Coordinates:"+rightWrist_y);
}

}


function modelLoded(){
    console.log("poseNet is initianlized... hey. Hey. Hey! HEY! HEY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LISTEN!!!!");
}


function draw(){
image(vido,0,0,500,500);
image(pokeleft,leftWrist_x,leftWrist_y,50,50);
image(pokeright,rightWrist_x,rightWrist_y,50,50);
}


function beep(){
save("IMG.png");
}

