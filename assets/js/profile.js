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

//profile
// let imgContainer=document.getElementsByClassName('img-container');
// console.log(imgContainer);
// let users=[];
// window.onload = ()=>{
//   if(localStorage.getItem('users')==null){
//     users=[];
//   }
//   else{
//     users=JSON.parse(localStorage.getItem('users'));
//   }
  // var data=`
  //     <img src="assets/images/profile/avatar2.png" id="output2" class="rounded-circle img-fluid" />
  //     <label class="-label d-flex justify-content-center align-items-center rounded-circle position-absolute" for="file2">
  //       <span>تغيير الصورة</span>
  //     </label>
  //     <input id="file2" type="file" onchange="loadFile(event)"/>
  // `
  // imgContainer.innerHTML=data;
//}

// let firstName=document.getElementById('firstName');
// let lastName=document.getElementById('lastName');
// let phone=document.getElementById('phone');
// let password=document.getElementById('password');
// let age=document.getElementById('age');

// var loadFile = function (event) {
//     var image = document.getElementById("output");
//     const fr = new FileReader();
//     fr.readAsDataURL(event.target.files[0]);
//     fr.addEventListener('load', ()=>{
//       const url=fr.result;
//       image.src =url;
//       users[i].src=url;
//       let user={
//         id:i,
//         firstName:firstName,
//         lastName:lastName,
//         userName:users[i].userName,
//         emailAddress:users[i].emailAddress,
//         phone:phone,
//         password:password,
//         age:age,
//         gender:users[i].gender,
//         src:users[i].src,
//       }
//     users[i]=user;
    
//     localStorage.setItem('users',JSON.stringify(users));
//     })
//   };
let imgs=[];
imgs=document.getElementsByClassName('output');
console.log(imgs);
  var loadFile = function (event) {
    //var image = document.getElementById("output");
    const fr = new FileReader();
    fr.readAsDataURL(event.target.files[0]);
    fr.addEventListener('load', ()=>{
      const url=fr.result;
      //image.src =url;
      for(let i=0;i<imgs.length;i++){
        imgs[i].src=url;
      }
    })
  };
  var loadFile2 = function (event) {
    var image2 = document.getElementById("output2");
    const fr = new FileReader();
    fr.readAsDataURL(event.target.files[0]);
    fr.addEventListener('load', ()=>{
      const url=fr.result;
      image2.src =url;
    })
  };
  
  