window.addEventListener("load", function () {
  let images = document.querySelectorAll(".slider-js .imganes-js");
  let interval = 0;
 setInterval(()=>{
    hiddenImg()
    if(interval>= images.length-1){
        interval=0
    }else{
        interval++
    }
 },2000)
  function hiddenImg() {
    images.forEach((img, index) => {
      if (index == interval) {
        img.style.display = "block";
      }else{
        img.style.display = "none";
      }
    });
  }
});
