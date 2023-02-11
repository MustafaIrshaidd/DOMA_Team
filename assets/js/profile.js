//Loading Screen

let body=document.body;
body.style.overflow='hidden';
let loader=document.querySelector('.loader');
loader.style.opacity='1';
loader.style.visibility='visible';


window.addEventListener('load',function(){
    this.setTimeout(function(){
        loader.style.opacity='0';
        loader.style.visibility='hidden';
        loader.style.transition='0.5s';
    }, 500)
})


var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  var loadFile2 = function (event) {
    var image2 = document.getElementById("output2");
    image2.src = URL.createObjectURL(event.target.files[0]);
  };