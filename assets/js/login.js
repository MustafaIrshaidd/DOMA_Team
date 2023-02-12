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

//login
let users=[];
let userLogin=[];
let loginBtn=document.getElementById('loginBtn');


window.onload = ()=>{

    if(localStorage.getItem('users')==null){
        users=[]
        }
        else{
        users=JSON.parse(localStorage.getItem('users'));
        }
    
        console.log(users);
}
let login=()=>{
    let userName=document.getElementById('userName').value;
    let password=document.getElementById('password').value;
    if(userName=='admin' && password=='admin'){
        window.location.href='admin.html';
    }
    else if(userName==''){
        alert('Please enter username');
    }
    else if(password==''){
        alert('Please enter password');
    }
    else if(users.length==0){
            alert('Please sign up');
    }
    else if(users.length>0){
        for(let i=0;i<users.length;i++){
                if(users[i].userName==userName&&users[i].password==password){
                    let user={
                        userName:userName,
                        password:password
                    }
                    userLogin.push(user);
                    window.location.href='index.html';
                }else if(users[i].userName==userName && users[i].password!=password){
                    alert('Password is incorrect');
                }else if(users[i].userName!=userName && users[i].password==password){
                    alert('Username is incorrect');
                }
            }
        }
}