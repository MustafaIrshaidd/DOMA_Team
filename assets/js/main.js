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
ScrollReveal().reveal('.interested .cardC', { delay: 500, origin:'bottom'});
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

//book cards header content
ScrollReveal().reveal('.book .content h4', { delay: 100, origin:'left'});
ScrollReveal().reveal('.book .content p', { delay: 200, origin:'left'});

//cards
ScrollReveal().reveal('.cards .title', { delay: 100, origin:'left'});
ScrollReveal().reveal('.cards .card-title', { delay: 300, origin:'left'});
ScrollReveal().reveal('.cards #single-card2', { delay: 600, origin:'left'});
ScrollReveal().reveal('.cards #single-card1', { delay: 600, origin:'right'});

//contact
ScrollReveal().reveal('.contact h2', { delay: 400, origin:'left'});
ScrollReveal().reveal('.contact .content-contact', { delay: 600, origin:'right'});

//collaborations
ScrollReveal().reveal('.collaboration h2', { delay: 200, origin:'left'});
ScrollReveal().reveal('#collabs', { delay: 400, origin:'bottom',easing: 'ease-in',duration: 500 });


// main page video 

// //collaborations
 let collaborations;
 let collabs=document.getElementById('collabs');
 console.log(collabs)

let data='';

window.onload = ()=>{
    if(localStorage.getItem('collaborations')==null){
        collaborations=[];
        console.log(collaborations)
        
    }
    else{
        collaborations=JSON.parse(localStorage.getItem('collaborations'))
        console.log(collaborations);
    }
    for(let i=0;i<collaborations.length;i++){
        data+=`
              <div class="col-md-4 col-lg-3 mb-4 d-flex justify-content-center coll">
                   <div class="img-cont">
                       <img src=${collaborations[i].src} class="img-fluid rounded-3"/>
                   </div>
               </div> 
               `
    }
    collabs.innerHTML=data;
}
 


//pastEvents 

let pastEvent=document.getElementById('pastEvents')
let indicator=document.getElementById('indicator')
let pastEvents=[]
let messages=[]
if(localStorage.getItem('pastEvents')==null){
    pastEvents=[]
}
else{
    pastEvents=JSON.parse(localStorage.getItem('pastEvents'));

    displayPastEvents()
}
if(localStorage.getItem('messages')==null){
  messages=[]
}
else{
  messages=JSON.parse(localStorage.getItem('messages'))
}

function displayPastEvents(){
    let dataEvents=``
    let dataIndicator=``

    for(var i=0;i<pastEvents.length;i++){
        dataEvents+=`
        <div class="carousel-item active">
        <a href="#">
          <img
            src="${pastEvents[i].src}"
            class="d-block img-fluid"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>${pastEvents[i].title}</h5>
            <p>${pastEvents[i].description}</p>
          </div>
        </a>
      </div>
        `
        dataIndicator+=`
        <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="${i}"
              class="active"
              aria-current="true"
              aria-label="Slide ${i+1}"
            >
              <img
                src="${pastEvents[i].src}"
                class="d-clock w-100 rounded"
                alt=""
              />
            </button>
        `
    }

    pastEvent.innerHTML=dataEvents
    indicator.innerHTML=dataIndicator

}



let submit=document.getElementById('submit');
let form4Example1=document.getElementById('form4Example1'); //name
let form4Example2=document.getElementById('form4Example2');  //email
let form4Example3=document.getElementById('form4Example3');  //message





submit.addEventListener('click',function(e){
    e.preventDefault()
    if(form4Example1.value=='' &&  form4Example2.value =='' && form4Example3.value=='' ){
        Swal.fire({
            title: 'Please Enter Values',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else{

        let message={ 
            userName:form4Example1.value,
            email:form4Example2.value,
            msg:form4Example3.value,
            accepted:false,
            
        }
  messages.push(message);
  localStorage.setItem('messages',JSON.stringify(messages));
  clear();
    }
    
})

function clear(){
    form4Example1.value="";
    form4Example2.value='';
    form4Example3.value='';
}
