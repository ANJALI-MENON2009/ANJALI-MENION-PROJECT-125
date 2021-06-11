noseX = 0 ;
noseY = 0 ;

rightWristX = 0 ;
leftWristX = 0 ;

difference = 0;

function preload() {}

function setup() {
    video = createCapture(VIDEO) ;
    video.size(480,430) ;
    video.position(130,130);

    canvas = createCanvas(480,365) ;
    canvas.position(925, 167) ;

    posenet = ml5.poseNet(video, modelLoaded) ;
    posenet.on('pose' , gotPoses)
}

function modelLoaded() {
    console.log("Model is ready to be used!") ;
}

function gotPoses(results) {

    console.log(results) ;
    noseX = results[0].pose.nose.x ;
    console.log("Nose's X: " + noseX) ;

    noseY = results[0].pose.nose.y ;
    console.log("Nose's Y: " + noseY) ;

    rightWristX = results[0].pose.rightWrist.x ;
    console.log("Right wrist's X: " + rightWristX) ;

    leftWristX = results[0].pose.leftWrist.x ;
    console.log("Left wrist's X: " + leftWristX) ;

    difference = floor(leftWristX - rightWristX) ;
    console.log("Difference is: " + difference) ;
}

function draw() {
    background('#ffdcba') ;
    fill('#ff5757');
    stroke('#e6e622');
    strokeWeight(4) ;
    text('Anjali', noseX, noseY) ;
    textSize(difference) ;
}
