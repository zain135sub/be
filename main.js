rx_eye=0;
ry_eye=0;
function preload(){
mush_beard=loadImage("https://i.postimg.cc/6phCb2dK/moustache.jpg");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotPose);
}
function draw(){
image(video,0,0,300,300);
//circle(rx_eye,ry_eye,20);
fill('yellow');
stroke('green');
image(mush_beard,rx_eye,ry_eye,100,20);

}
function take_snapshot(){
 save("mustache.png");
}
function modelloaded(){
    console.log("POSE NET IS INITIALIZED");
}
function gotPose(result){
if(result.length>0){
    console.log(result)
    rx_eye=result[0].pose.rightEye.x-25;
    ry_eye=result[0].pose.rightEye.y+40;

}
}