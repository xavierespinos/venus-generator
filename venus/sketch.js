let img

function  preload() {
  img = loadImage('assets/venus.jpg');
}

function setup() {
  createCanvas(800, 800);
  img.resize(400, 400);
  frameRate(24);
  
}

function draw() {
  background(255);
  //image(img, 0, 0);
  var sizeP = 100;
  noStroke();
  

  var tiles = mouseX/20;
  var tileSize = width/(200);

  //translate(tileSize/2, tileSize/2);

  for (var i = 0; i < 100; ++i) {
    for (var j = 0; j < 100; ++j) {
      var color = img.get(i*tileSize, j*tileSize);
      var size = map(brightness(color), 0, 255, tileSize, 0);
      fill(map(random(), 0, 1, 0, 125), map(random(), 0, 1, 0, 200), map(random(), 0, 1, 0, 125)); //verd
      ellipse(i*tileSize, j*tileSize, size, size);
      fill(map(random(), 0, 1, 0, 255), map(random(), 0, 1, 0, 150), 0); //groc
      ellipse(i*tileSize+400, j*tileSize, size, size);
      fill(map(random(), 0, 1, 0, 255), map(random(), 0, 1, 0, 125), map(random(), 0, 1, 0, 125));  //roig
      ellipse(i*tileSize, j*tileSize+400, size, size);  
      fill(map(random(), 0, 1, 0, 125), map(random(), 0, 1, 0, 125), map(random(), 0, 1, 0, 255));  //blau
      ellipse(i*tileSize+400, j*tileSize+400, size, size);  
       
    }
  }


}
