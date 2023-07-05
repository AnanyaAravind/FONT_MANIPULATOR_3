rightWristx=0;
rightWristx=0;
difference=0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550,550);

    canvas= createCanvas(550,550);
    canvas.position(550,150);
    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PosNet is Initialised!");
}
function draw(){
  background("white");
  textSize(difference);
  fill('purple');
  text('Ananya Aravind', 50, 150);
}
function gotPoses(results){
    if(results.length>0){
console.log(results);
rightWristx= results[0].pose.rightWrist.x;
leftWristx= results[0].pose.leftWrist.x;
difference= floor(  leftWristx - rightWristx);
console.log('Left Wrist X = ' + leftWristx + ' Right Wrist X = ' + rightWristx + ' Difference = ' + difference);
    }
}