nose_x = "";
nose_y = "";

function preload() {

}

function setup() {
    canvas = createCanvas(450, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 300);
    video.hide();

    pose_net = ml5.poseNet(video, modelloaded);
    pose_net.on('pose', getPoses);
}

function draw() {
    image(video, 0, 0, 450, 300);
}

function modelloaded() {
    console.log("Model is loaded")
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        console.log("Nosex =  ", nose_x);
        nose_y = results[0].pose.nose.y;
        console.log("Nosey =  ", nose_y);
    }
}