function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()
}


function draw() {
    image(video, 0, 0, 600, 500);
}