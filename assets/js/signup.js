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

let users=[];
let firstName= document.getElementById('firstName').value;
let lastName= document.getElementById('lastName').value;
let userName= document.getElementById('userName').value;
let emailAddress= document.getElementById('emailAddress').value;
let phone= document.getElementById('phone').value;
let password= document.getElementById('password').value;
let age= document.getElementById('age').value;
let gender=document.querySelector('input[name="inlineRadioOptions"]:checked').value;
let button=document.querySelector('.button');

    if(localStorage.getItem('users')==null){
    users=[]
    }
    else{
    users=JSON.parse(localStorage.getItem('users'));
    }
let id=0;
let addUser=()=>{
    firstName= document.getElementById('firstName').value;
    lastName= document.getElementById('lastName').value;
    userName= document.getElementById('userName').value;
    emailAddress= document.getElementById('emailAddress').value;
    phone= document.getElementById('phone').value;
    password= document.getElementById('password').value;
    age= document.getElementById('age').value;
    gender=document.querySelector('input[name="inlineRadioOptions"]:checked').value;

  let user={
    id:id,
    firstName:firstName,
    lastName:lastName,
    userName:userName,
    emailAddress:emailAddress,
    phone:phone,
    password:password,
    age:age,
    gender:gender,
    src:"assets/images/profile/avatar2.png",
  }
id++;
if(userName==''){
  alert('Please enter username');
}
else if(password==''){
  alert('Please enter password');
}
else if(users.length==0){
  users.push(user);
  localStorage.setItem('users',JSON.stringify(users));
  window.location.href='login.html';
}
else if(users.length>0){
  for(let i=0;i<users.length;i++){
          if(users[i].userName==userName){
            alert('username already exists');
          }else if(users[i].phone==phone){
            alert('phone number already exists');
          }else if(users[i].emailAddress==emailAddress){
            alert('email address already exists');
          }
          else{
            users.push(user);
            localStorage.setItem('users',JSON.stringify(users));
            window.location.href='login.html';
          }
      }
  }
}



