


let book=document.getElementById('book')
let userName=document.getElementById('userName')
let d1=document.getElementById("d1")
let d2=document.getElementById("d2")
let price1

let reservations=[]

window.onload = ()=>{
  if(localStorage.getItem('reservations')==null){
    reservations=[]
  }
  else{
    reservations=JSON.parse(localStorage.getItem('reservations'))
  }
}
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

// date difference 
function calculateDays(){
    var d1=document.getElementById("d1").value
    var d2=document.getElementById("d2").value
    var dateOne = new Date(d1)
    var dateTwo = new Date(d2)
    var time = Math.abs(dateTwo - dateOne)
    var days = Math.ceil(time / (1000*60*60*24));  
    var price = document.getElementById("output");
    var money = days *5;
    price1=money;
    console.log(price1)
    price.innerHTML = `${money} شيكل`;
    if(d1 == '' || d2 == ''){
        price.innerHTML = ` يرجى ادخال تاريخ البدايه و النهايه للاشتراك`;
    }
    
    
}


book.addEventListener('click',function(e){
    e.preventDefault()
    if(userName.value=='' &&  d1.value =='' && d2.value=='' ){
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
        calculateDays()
        let reservation={ 
            userName:userName.value,
            startDate:d1.value,
            endDate:d2.value,
            price:price1,
            accepted:false,
        }
  reservations.push(reservation);
  localStorage.setItem('reservations',JSON.stringify(reservations));
  clear();
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your reservation has been saved',
    showConfirmButton: false,
    timer: 1500
  })
    }
    
})
function clear(){
    userName.value="";
    d1.value='';
    d2.value='';
   
}

