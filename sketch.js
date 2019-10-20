var colorList = ['#176FA6', '#F29A2E', '#F24957', '#033E8C', '#01402E']
// var colorList2 = ['brown', 'orange', 'light blue', 'darkgreen', 'yellow']

var mySong;
var analyzer;

function preload(){
  mySong = loadSound("./sounds/Borrtex_-_12_-_Merry_Christmas.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // The analyzer allows to perform analysis on a sound file
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  var volume = 0;
  if (mouseX > width/2) {
    background('#F2E2CE');
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
    // get the volume and remap it to a bigger value
    volume = analyzer.getLevel();
    volume = map(volume,0,1,0,height);

    // SHAPE
var x = random() * windowWidth;
var y = random() * windowHeight;

var minDiameter = 4;
var maxDiameter = 30;

var index = Math.round(random()* (colorList.length - 1));
var index2 = Math.round(random()* (colorList.length - 1));

fill(color(colorList[index]));
// stroke(color(colorList2[index2]));
// strokeWeight(0);

console.log(index, index2);

  } else {
    background('#176FA6');
    mySong.stop();
  }

ellipse(x,y,volume+10);
}
