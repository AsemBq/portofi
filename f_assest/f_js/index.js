let i = 0;
const images = [];
const time = 3000;

images[0] = "./f_assest/f_slider/franchise-about-pic3.jpg";
images[1] = "./f_assest/f_slider/franchise-about-pic2.jpg";
images[2] = "./f_assest/f_slider/franchise-about-pic4.jpg";

function ChangeImg() {
  document.getElementById("slide").src = images[i];
  if (i == 0) {
    document.getElementById("SliderPrice").textContent = "$12,32";
    document.getElementById("SliderSpan").textContent = "Green leaf lettuce";
  } else {
    if (i == 1) {
      document.getElementById("SliderPrice").textContent = "$3,52";
      document.getElementById("SliderSpan").textContent = "Peaches from Peru";
      
    } else {if(i==2){
      document.getElementById("SliderPrice").textContent = "$12,32";
      document.getElementById("SliderSpan").textContent = "Pork chops";
    }}
  }
  if (i < images.length - 1) {
    
    i++;
  } else {
    i = 0;
  }
  setTimeout("ChangeImg()", time);
}

window.onload = ChangeImg;
