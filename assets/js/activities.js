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
});


let Navbar= document.getElementById('navbar');

//replace background color of navbar
window.addEventListener('scroll',function(e){
    
    e.preventDefault();
    //console.log(document.body.scrollTop); //the height stay 0 so, instead og body we using documentElement
    let pos=document.documentElement.scrollTop; //return the height when i scroll the page of top
    if(pos>=100){
        Navbar.setAttribute('style','background:white!important');
     }else{
         Navbar.setAttribute('style','background:transparent!important');
     }
});

// section after line
let date1=document.getElementById('date1');
let date2=document.getElementById('date2');
let item=document.querySelectorAll('#item');
let item2=document.querySelectorAll('#item2');


 date1.addEventListener('click',function(e){
     e.preventDefault();
     item2.forEach(ele => {
        console.log(ele)
        // ele.setAttribute('style','display:none!important');
        ele.classList.add('hidden');
        for(score of item){
            score.classList.remove('hidden');
            score.classList.add('visib');
         }

     });
 });

date2.addEventListener('click',function(e){
    e.preventDefault();
    item.forEach(ele1 => {
        ele1.classList.add('hidden');
        // ele1.classList.add('visible');
        for(score of item2){
            score.classList.remove('hidden');
            score.classList.add('visib');
         }
    });
    
});

// routing to login page
let login = document.getElementById('login');

login.addEventListener('click',function(){
    window.location.href="login.html";
});

// Routing to Cards page
let cardButton3=document.getElementById('cardButton3');

cardButton3.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href="cards.html";
});



