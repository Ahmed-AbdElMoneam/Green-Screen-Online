var fgimg = null;
var bgimg = null;
var output = null;
/************************/
function loadForegroundImage(){
  var canvas = document.getElementById("cv1");
  var fgfile = document.getElementById("fgfile");
  fgimg = new SimpleImage(fgfile);
  fgimg.drawTo(canvas);
  alert("ForegroundImage is loaded!");
}
/***************************/
function checkSize(){
  if (bgimg.getWidth() != fgimg.getWidth() || bgimg.getHeight() != fgimg.getHeight()){
    alert("But, the two uploaded images are not in the same size!");
  }
}
/***************************/
function loadBackgroundImage(){
  var canvas2 = document.getElementById("cv2");
  var fgfile = document.getElementById("bgfile");
  bgimg = new SimpleImage(bgfile);
  bgimg.drawTo(canvas2);
  alert("BackgroundImage is loaded!");
  checkSize();
}
/*****************************/
function doGreenScreen(){
  if(fgimg == null || !fgimg.complete()){
    alert("The foreground image hasn't been loaded yet!");
  }
  if(bgimg == null || !bgimg.complete()){
    alert("The background image hasn't been loaded yet!");
  }
  else{
    output = new SimpleImage(fgimg.getWidth(), fgimg.getHeight());
      for (var pixel of fgimg.values()){
    if(pixel.getGreen() > pixel.getRed() + pixel.getBlue()){
        output.setPixel(pixel.getX(), pixel.getY(), bgimg.getPixel(pixel.getX(), pixel.getY()));
    }
    else{
        output.setPixel(pixel.getX(), pixel.getY(), fgimg.getPixel(pixel.getX(), pixel.getY()));
    }
}
  var canvas = document.getElementById("cv1");
  output.drawTo(canvas);
  var canvas2 = document.getElementById("cv2");
  var ctx = canvas2.getContext("2d");
  ctx.clearRect(0, 0, canvas2.width, canvas2.height);
  }
}
/****************************/
function clearCanvas(){
  var canvas = document.getElementById("cv1");
  var canvas2 = document.getElementById("cv2");
  var ctx1 = canvas.getContext("2d");
  ctx1.clearRect(0, 0, canvas.width, canvas.height);
  var ctx2 = canvas2.getContext("2d");
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
}