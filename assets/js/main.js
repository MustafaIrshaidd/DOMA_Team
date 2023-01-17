let links = document.querySelectorAll('nav .nav-item');

links.forEach(function(link){
    link.addEventListener('click',function(e){
        links.forEach(function(link){
            link.classList.remove('active');
        })
        link.classList.add('active');
    })
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
