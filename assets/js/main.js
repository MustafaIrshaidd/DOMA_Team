let mainBtn=document.getElementById('mainBtn');
let aboutBtn=document.getElementById('aboutBtn');
let featureBtn=document.getElementById('featureBtn');

window.addEventListener('scroll',function(){
    console.log(window.scrollY)
    if(window.scrollY<750){
        mainBtn.classList.add('active');
        aboutBtn.classList.remove('active');
        featureBtn.classList.remove('active');
    }
    else if(window.scrollY>750 && window.scrollY<2750 ){
        mainBtn.classList.remove('active');
        aboutBtn.classList.add('active');
        featureBtn.classList.remove('active');
    }
    else if(window.scrollY>2750 && window.scrollY<3700){
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






//Gallery
ScrollReveal({
    reset: false,
    distance:'60px',
    duration:1500,
    delay:200
});
ScrollReveal().reveal('.gallery .gallery-title,.interested .interested-title', { delay: 200, origin:'left' });
ScrollReveal().reveal('.gallery img', { delay: 300, origin:'bottom'});
ScrollReveal().reveal('.interested .cardL', { delay: 400, origin:'left'});
ScrollReveal().reveal('.interested .cardC', { delay: 400, origin:'bottom'});
ScrollReveal().reveal('.interested .cardR', { delay: 400, origin:'right'});
