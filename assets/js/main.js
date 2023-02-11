//Loading Screen

let body=document.body;
body.style.overflow='hidden';
let loader=document.querySelector('.loader');
loader.style.opacity='1';
loader.style.visibility='visible';


window.addEventListener('load',function(){
    this.setTimeout(function(){
        body.style.overflow='visible';
        loader.style.opacity='0';
        loader.style.visibility='hidden';
        loader.style.transition='0.5s';
        loader.style.zindex='-414';
        
    }, 1500)
})

//NavBar

let mainBtn=document.getElementById('mainBtn');
let aboutBtn=document.getElementById('aboutBtn');
let featureBtn=document.getElementById('featureBtn');

window.addEventListener('scroll',function(){
    if(window.scrollY<750){
        mainBtn.classList.add('active');
        aboutBtn.classList.remove('active');
        featureBtn.classList.remove('active');
    }
    else if(window.scrollY>750 && window.scrollY<1488 ){
        mainBtn.classList.remove('active');
        aboutBtn.classList.add('active');
        featureBtn.classList.remove('active');
    }
    else if(window.scrollY>1488 && window.scrollY<2188){
        mainBtn.classList.remove('active');
        aboutBtn.classList.remove('active');
        featureBtn.classList.add('active');
    }
    else{
        mainBtn.classList.add('active');
        aboutBtn.classList.remove('active');
        featureBtn.classList.remove('active');
    }
})

// routing to login page
let login = document.getElementById('login');

login.addEventListener('click',function(){
    window.location.href="login.html";
});

// routing to cards page

let cardsButton = document.getElementById("cardsButton");
let cardsButton2 = document.getElementById("cardsButton2");

if(cardsButton){
cardsButton.addEventListener("click", function (e) {
    e.preventDefault();
  window.location.href = "cards.html";
});
}

if(cardsButton2){
cardsButton2.addEventListener("click", function (e) {
    e.preventDefault();
  window.location.href = "cards.html";
});
}


//Gallery
ScrollReveal({
    reset: false,
    distance:'60px',
    duration:1500,
    delay:200
});
ScrollReveal().reveal('.gallery .gallery-title,.interested .interested-title', { delay: 200, origin:'left' });
ScrollReveal().reveal('.interested .cardL', { delay: 400, origin:'left'});
ScrollReveal().reveal('.interested .cardC', { delay: 400, origin:'bottom'});
ScrollReveal().reveal('.interested .cardR', { delay: 400, origin:'right'});

//features
ScrollReveal().reveal('.features .feature1', { delay: 100, origin:'right'});
ScrollReveal().reveal('.features .feature2', { delay: 100, origin:'top'});
ScrollReveal().reveal('.features .feature5', { delay: 100, origin:'bottom'});
ScrollReveal().reveal('.features .feature3', { delay: 200, origin:'left'});
ScrollReveal().reveal('.features .feature6', { delay: 300, origin:'left'});
ScrollReveal().reveal('.features .feature4', { delay: 400, origin:'right'});

//contact
ScrollReveal().reveal('.contact h3', { delay: 200, origin:'left'});
ScrollReveal().reveal('.contact p', { delay: 200, origin:'left'});
