let dashboardBtns = document
  .getElementById("dashboardBtns")
  .getElementsByTagName("a");
let dashboardBtn = document.getElementById("dashboardBtn");
let eventsBtn = document.getElementById("eventsBtn");
let mainContent = document.getElementById("mainContent");
let usersBtn = document.getElementById("usersBtn");
let reservationsBtn = document.getElementById("reservationsBtn");
let collaborationsBtn=document.getElementById('collaborationsBtn')
let messageBtn=document.getElementById('messageBtn')
let pastEvents = [];

let eventSearch
let userSearch
let userCard
let collaborationSearch
let collaborationCard
let eCards
let id=0;
 let img;
let events=[]
let reservations=[]
let collaborations=[]
let messages=[]
window.onload = () => {
  if (localStorage.getItem("events") == null) {
    events = [];
  } else {
    events = JSON.parse(localStorage.getItem("events"));
  }
  if (localStorage.getItem("reservations") == null) {
    reservations = [];
  } else {
    reservations = JSON.parse(localStorage.getItem("reservations"));
  }
  if (localStorage.getItem("pastEvents") == null) {
    pastEvents = [];
  } else {
    pastEvents = JSON.parse(localStorage.getItem("pastEvents"));
  }
  if (localStorage.getItem("messages") == null) {
    messages = [];
  } else {
    messages = JSON.parse(localStorage.getItem("messages"));
  }
};

dashboardBtn.addEventListener("click", function () {
  clear();
  dashboardBtn.classList.add("active");
  data = `
    <!--Section: Minimal statistics cards-->
    <section>
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between px-md-1">
                <div class="align-self-center">
                  <i class="fas fa-pencil-alt text-info fa-3x"></i>
                </div>
                <div class="text-end">
                  <h3>278</h3>
                  <p class="mb-0">New Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between px-md-1">
                <div class="align-self-center">
                  <i class="far fa-comment-alt text-warning fa-3x"></i>
                </div>
                <div class="text-end">
                  <h3>156</h3>
                  <p class="mb-0">New Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between px-md-1">
                <div class="align-self-center">
                  <i class="fas fa-chart-line text-success fa-3x"></i>
                </div>
                <div class="text-end">
                  <h3>64.89 %</h3>
                  <p class="mb-0">Bounce Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between px-md-1">
                <div class="align-self-center">
                  <i class="fas fa-map-marker-alt text-danger fa-3x"></i>
                </div>
                <div class="text-end">
                  <h3>423</h3>
                  <p class="mb-0">Total Visits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between px-md-1">
                <div>
                  <h3 class="text-info">278</h3>
                  <p class="mb-0">New Posts</p>
                </div>
                <div class="align-self-center">
                  <i class="fas fa-book-open text-info fa-3x"></i>
                </div>
              </div>
              <div class="px-md-1">
                <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                  <div
                       class="progress-bar bg-info"
                       role="progressbar"
                       style="width: 80%"
                       aria-valuenow="80"
                       aria-valuemin="0"
                       aria-valuemax="100"
                       ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between px-md-1">
                <div>
                  <h3 class="text-warning">156</h3>
                  <p class="mb-0">New Comments</p>
                </div>
                <div class="align-self-center">
                  <i class="far fa-comments text-warning fa-3x"></i>
                </div>
              </div>
              <div class="px-md-1">
                <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                  <div
                       class="progress-bar bg-warning"
                       role="progressbar"
                       style="width: 35%"
                       aria-valuenow="35"
                       aria-valuemin="0"
                       aria-valuemax="100"
                       ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between px-md-1">
                <div>
                  <h3 class="text-success">156</h3>
                  <p class="mb-0">New Clients</p>
                </div>
                <div class="align-self-center">
                  <i class="far fa-user text-success fa-3x"></i>
                </div>
              </div>
              <div class="px-md-1">
                <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                  <div
                       class="progress-bar bg-success"
                       role="progressbar"
                       style="width: 60%"
                       aria-valuenow="60"
                       aria-valuemin="0"
                       aria-valuemax="100"
                       ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between px-md-1">
                <div>
                  <h3 class="text-danger">423</h3>
                  <p class="mb-0">Total Visits</p>
                </div>
                <div class="align-self-center">
                  <i class="fas fa-map-signs text-danger fa-3x"></i>
                </div>
              </div>
              <div class="px-md-1">
                <div class="progress mt-3 mb-1 rounded" style="height: 7px">
                  <div
                       class="progress-bar bg-danger"
                       role="progressbar"
                       style="width: 40%"
                       aria-valuenow="40"
                       aria-valuemin="0"
                       aria-valuemax="100"
                       ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Section: Minimal statistics cards-->

    <!--Section: Statistics with subtitles-->
    <section>
      <div class="row">
        <div class="col-xl-6 col-md-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between p-md-1">
                <div class="d-flex flex-row">
                  <div class="align-self-center">
                    <i class="fas fa-pencil-alt text-info fa-3x me-4"></i>
                  </div>
                  <div>
                    <h4>Total Events</h4>
                    <p class="mb-0">Monthly blog posts</p>
                  </div>
                </div>
                <div class="align-self-center">
                  <h2 class="h1 mb-0">20</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between p-md-1">
                <div class="d-flex flex-row">
                  <div class="align-self-center">
                    <i
                       class="far fa-comment-alt text-warning fa-3x me-4"
                       ></i>
                  </div>
                  <div>
                    <h4>Total Comments</h4>
                    <p class="mb-0">Monthly blog posts</p>
                  </div>
                </div>
                <div class="align-self-center">
                  <h2 class="h1 mb-0">400</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 col-md-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between p-md-1">
                <div class="d-flex flex-row">
                  <div class="align-self-center">
                    <h2 class="h1 mb-0 me-4">$2,565</h2>
                  </div>
                  <div>
                    <h4>Total Sales</h4>
                    <p class="mb-0">Monthly Sales Amount</p>
                  </div>
                </div>
                <div class="align-self-center">
                  <i class="far fa-heart text-danger fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-12 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between p-md-1">
                <div class="d-flex flex-row">
                  <div class="align-self-center">
                    <h2 class="h1 mb-0 me-4">$500</h2>
                  </div>
                  <div>
                    <h4>Total Cost</h4>
                    <p class="mb-0">Monthly Cost</p>
                  </div>
                </div>
                <div class="align-self-center">
                  <i class="fas fa-wallet text-success fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Section: Statistics with subtitles-->
    
    `;
  mainContent.innerHTML = data;
});

// click on book cards on navbar

reservationsBtn.addEventListener("click", function () {
  clear();
  reservationsBtn.classList.add("active");
  // in for loop but when osama solve his page
  

  data = `
  <div class="table">
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Price</th>
              <th scope="col">Accept</th>
              <th scope="col">Reject</th>
            </tr>
          </thead>
  
          <tbody>`;
  for (i = 0; i < reservations.length; i++) {
    data += ` <tr>
                 <td>${i + 1}</td>
                 <td>${reservations[i].userName}</td>
                 <td>${reservations[i].startDate}</td>
                 <td>${reservations[i].endDate}</td>
                 <td>${reservations[i].price}</td>
                 <td><button type="button" id="resAccept"  onclick="reservationAccept(${i})" class="btn btn-primary">Accept</button></td>
                 <td><button type="button" onclick="resrvationReject(${i})" class="btn btn-danger">Reject</button></td>
                 
               </tr>`;
  }

  data += `</tbody>

        </table>
      </div>
  `;
  mainContent.innerHTML = data;
});
//reservationAccept Function
function reservationAccept(index) {
  reservations[index].accepted = true;
  document.getElementById("resAccept").disabled = true;
  localStorage.setItem("reservations", JSON.stringify(reservations));
}
//reservationReject Function
function resrvationReject(index) {
  reservations.splice(index, 1);
  localStorage.setItem("reservations", JSON.stringify(reservations));
  reservationsBtn.click();
}




// click on messages on navbar

messageBtn.addEventListener("click", function () {
  clear();
  messageBtn.classList.add("active");
  data = `
  <div class="tableMsg">
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">email</th>
              <th scope="col">message</th>
              <th scope="col">Accept</th>
              <th scope="col">Reject</th>
            </tr>
          </thead>
  
          <tbody>`;
  for (i = 0; i < messages.length; i++) {
    data += ` <tr>
                 <td>${i + 1}</td>
                 <td>${messages[i].userName}</td>
                 <td>${messages[i].email}</td>
                 <td>${messages[i].msg}</td>
                 <td><button type="button" id="msgAccept"  onclick="messageAccept(${i})" class="btn btn-primary">Accept</button></td>
                 <td><button type="button" onclick="messageReject(${i})" class="btn btn-danger">Reject</button></td>
               </tr>`;
  }

  data += `</tbody>

        </table>
      </div>
  `;
  mainContent.innerHTML = data;
});

//messageAccept Function
function messageAccept(index) {
  messages[index].accepted = true;
  document.getElementById("msgAccept").disabled = true;
  localStorage.setItem("messages", JSON.stringify(messages));
}
//messageReject Function
function messageReject(index) {
  messages.splice(index, 1);
  localStorage.setItem("messages", JSON.stringify(messages));
  messageBtn.click();
}











eventsBtn.addEventListener("click", function () {
  clear();
  eventsBtn.classList.add("active");
  var data = `
  <section>
  <div class="row">
    <div class="col-xl-6 col-md-12 mb-4">
      <div class="input-group rounded mb-4">
        <input id="eventSearch" onkeyup="eventsSearch()" type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
    <div class="col-xl-6 col-md-12 mb-4 text-center">
      <button type="button" class="btn btn-primary w-50" onclick="addEvent()">add event</button>
    </div>
    <div class="col-xl-6 col-md-12 mb-4">
      <div class="d-flex align-items-center justify-content-center">
        <div class="col-xl-2 col-md-2 mb-4">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label class="form-check-label" for="flexRadioDefault2"> All </label>
          </div>
        </div>
        <div class="col-xl-2 col-md-2 mb-4">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2"> Children </label>
          </div>
        </div>
        <div class="col-xl-2 col-md-2 mb-4">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2"> Male </label>
          </div>
        </div>
        <div class="col-xl-2 col-md-2 mb-4">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2"> Female </label>
          </div>
        </div>
        <div class="col-xl-2 col-md-2 mb-4">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2"> Youth </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row" id="eCards">

    </div>
    </section>
    `;

  mainContent.innerHTML = data;

  eCards = document.getElementById("eCards");
  eventSearch = document.getElementById("eventSearch");

  displayEvents();
});

/*################# Start Users section ################# */

usersBtn.addEventListener("click", function () {
  if (localStorage.getItem("users") == null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }
  clear();
  usersBtn.classList.add("active");
  var data = `
  
  <section>
  <div class="row">
    <div class="col-xl-6 col-md-12 mb-4">
      <div class="input-group rounded mb-4">
        <input id="userSearch" onkeyup="usersSearch()" type="search" value="" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
    <div class="col-xl-6 col-md-12 mb-4 text-center">
      <button type="button" class="btn btn-primary w-50" onclick="addUser()">add user</button>
    </div>
    <div class="row" id="userCard">
      
    </div>
  </div>        
</section>

    `;

  mainContent.innerHTML = data;
  userCard = document.getElementById("userCard");
  userSearch = document.getElementById("userSearch");
  displayUsers();
});

async function addUser() {
  const { value: formValues } = await Swal.fire({
    title: "تفاصيل الفعالية",
    html: `<input id="swal-input1" class="swal2-input w-75" placeholder="الاسم الأول">
       <input id="swal-input2" class="swal2-input w-75" placeholder="الاسم الأخير">
       <input id="swal-input3" class="swal2-input w-75" placeholder="اسم المستخدم">
       <input id="swal-input4" class="swal2-input w-75" placeholder="رقم الهاتف">
       <input id="swal-input5" class="swal2-input w-75" placeholder="العمر">
       <input id="swal-input6" class="swal2-input w-75" placeholder="كلمة المرور">
       `,

    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
        document.getElementById("swal-input3").value,
        document.getElementById("swal-input4").value,
        document.getElementById("swal-input5").value,
        document.getElementById("swal-input6").value,
      ];
    },
  });

  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }

  let user = {
    firstName: formValues[0],
    lastName: formValues[1],
    userName: formValues[2],
    phone: formValues[3],
    age: formValues[4],
    password: formValues[5],
    src: "assets/images/profile/avatar2.png",
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1000,
  });
}
var loadFile = function (event, i) {
  var image = document.getElementById(`output${i}`);
  //image.src = URL.createObjectURL(event.target.files[0]);
  const fr = new FileReader();
  fr.readAsDataURL(event.target.files[0]);
  fr.addEventListener("load", () => {
    const url = fr.result;
    image.src = url;
    users[i].src = url;
    let user = {
      firstName: users[i].firstName,
      lastName: users[i].lastName,
      userName: users[i].userName,
      phone: users[i].phone,
      age: users[i].age,
      password: users[i].password,
      src: users[i].src,
    };
    users[i] = user;

    localStorage.setItem("users", JSON.stringify(users));
  });
};

function displayUsers() {
  var data = "";
  for (var i = 0; i < users.length; i++) {
    data += `
    <div class="col-xl-4 col-md-6 mb-4 ">
        <div class="card card-users border">
          <div  class="h-100 d-flex justify-content-center" >
            <div class="card-body text-body ">
              <div class="user container h-100">
                  <div class="updateDelete" onclick=" usersCardsEditDelete(${i})">
                    <i class="icon fa-solid fa-pen-to-square bg-primary text-white rounded-circle text-center"></i>
                  </div>
                  <div >
                    <div class="avatar h-100 d-flex flex-column align-items-center justify-content-center">
                        <div class="img-container position-relative">
                            <img src=${users[i].src} id="output${i}" class="rounded-circle img-fluid" />
                        <label class="-label d-flex justify-content-center align-items-center rounded-circle position-absolute" for="file${i}">
                          <span>تغيير الصورة</span>
                        </label>
                        <input id="file${i}" type="file" onchange="loadFile(event,${i})"/>
                        </div>
                      </div>
                  </div>
                  <div class="row user-info content align-items-center justify-content-center pt-4 ">
                    <h5 class="text-center">
                    <span class="text-center">${users[i].firstName}</span>                          
                    <span class="text-center">${users[i].lastName}</span>                          
                    </h5>
                  </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    `;
  }

  userCard.innerHTML = data;
}

function usersCardsEditDelete(id) {
  Swal.fire({
    title: "Delete Or Update",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Update",
    denyButtonText: `Delete`,
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      const { value: formValues } = await Swal.fire({
        title: "تفاصيل الفعالية",
        html: `<input value="${users[id].firstName}" id="swal-input1" class="swal2-input w-75" placeholder="الاسم الأول">
           <input value="${users[id].lastName}" id="swal-input2" class="swal2-input w-75" placeholder="الاسم الأخير">
           <input value="${users[id].userName}" id="swal-input3" class="swal2-input w-75" placeholder="اسم المستخدم">
           <input value="${users[id].phone}" id="swal-input4" class="swal2-input w-75" placeholder="رقم الجوال">
           <input value="${users[id].age}" id="swal-input5" class="swal2-input w-75" placeholder="العمر">
           <input value="${users[id].password}" id="swal-input6" class="swal2-input w-75" placeholder="كلمة السر">
           `,

        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
            document.getElementById("swal-input5").value,
            document.getElementById("swal-input6").value,
          ];
        },
      });

      if (formValues) {
        Swal.fire(JSON.stringify(formValues));
      }
      var image = document.getElementById(`output${id}`);
      let user = await {
        firstName: formValues[0],
        lastName: formValues[1],
        userName: formValues[2],
        phone: formValues[3],
        age: formValues[4],
        password: formValues[5],
        src: image.src,
      };
      users[id] = user;
      localStorage.setItem("users", JSON.stringify(users));
      displayUsers();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (result.isDenied) {
      users.splice(id, 1);
      localStorage.setItem("users", JSON.stringify(users));
      displayUsers();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "User has been deleted",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  });
}

function usersSearch() {
  let data = "";
  let searchKey = userSearch.value;

  for (var i = 0; i < users.length; i++) {
    let fullName = users[i].firstName + " " + users[i].lastName;

    if (fullName.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())) {
      data += `
      <div class="col-xl-4 col-md-6 mb-4 ">
          <div class="card card-users border">
            <div  class="h-100 d-flex justify-content-center" >
              <div class="card-body text-body ">
                <div class="user container h-100">
                    <div class="updateDelete" onclick=" usersCardsEditDelete(${i})">
                      <i class="icon fa-solid fa-pen-to-square bg-primary text-white rounded-circle text-center"></i>
                    </div>
                    <div >
                      <div class="avatar h-100 d-flex flex-column align-items-center justify-content-center">
                          <div class="img-container position-relative">
                              <img src=${users[i].src} id="output${i}" class="rounded-circle img-fluid" />
                          <label class="-label d-flex justify-content-center align-items-center rounded-circle position-absolute" for="file${i}">
                            <span>تغيير الصورة</span>
                          </label>
                          <input id="file${i}" type="file" onchange="loadFile(event,${i})"/>
                          </div>
                        </div>
                    </div>
                    <div class="row user-info content align-items-center justify-content-center pt-4 ">
                    <h5 class="text-center">
                    <span class="text-center">${users[i].firstName}</span>                          
                    <span class="text-center">${users[i].lastName}</span>                          
                    </h5>                         
                    </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      `;
    }
  }

  userCard.innerHTML = data;
}

/*################# End Users section ################# */

/*################# Start Collaborations section ################# */

collaborationsBtn.addEventListener('click',function(){
  if(localStorage.getItem('collaborations')==null){
    collaborations=[]
  }
  else{
    collaborations=JSON.parse(localStorage.getItem('collaborations'))
  }
  clear();
  collaborationsBtn.classList.add('active');
  var data=`
  
  <section>
  <div class="row">
    <div class="col-xl-6 col-md-12 mb-4">
      <div class="input-group rounded mb-4">
        <input id="collaborationSearch" onkeyup="collaborationsSearch()" type="search" value="" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
    <div class="col-xl-6 col-md-12 mb-4 text-center">
      <button type="button" class="btn btn-primary w-50" onclick="addCollaboration()">add collaboration</button>
    </div>
    <div class="row" id="collaborationCard">
      
    </div>
  </div>        
</section>

    `

  

  mainContent.innerHTML=data;
  collaborationCard=document.getElementById("collaborationCard");
  collaborationSearch=document.getElementById("collaborationSearch");
  displayCollaborations();
  console.log(collaborations);
  
})


let collURL='';

async function addCollaboration(){
  if(localStorage.getItem('collaborations')==null){
    collaborations=[];
    id=0;
  }else{
    while(id<collaborations.length){
    id++;
  }
}
  const { value: formValues } = await Swal.fire({
    title: 'تفاصيل التعاون',
    html:
      `<input id="swal-input1" class="swal2-input w-75 mb-3" placeholder="اسم التعاون">
       
       <input id="file${id}" type="file" onchange="loadcollab(event,${id})"/>
       `,

    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById(`file${id}`).value,
      ]
    }
  })
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }
if(formValues[1]==""){
  collURL='assets/images/gallery_interested/collaborationlogo.png';
}
  let collaboration={
    name:formValues[0],
    src:collURL,
  }
  collaborations.push(collaboration);
  localStorage.setItem('collaborations',JSON.stringify(collaborations));
  displayCollaborations();

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1000
  })
  
}
var loadcollab = function (event,i) {
  var image = document.getElementById(`collabPic${i}`);
  const fr = new FileReader();
  fr.readAsDataURL(event.target.files[0]);
  fr.addEventListener('load', ()=>{
    const URL=fr.result;
    collURL=URL;
    image.src =URL;
    collaborations[i].src=URL;
    let coll={
      name:collaborations[i].name,
      src:collaborations[i].src,
    }
  collaborations[i]=coll;
  
  localStorage.setItem('collaborations',JSON.stringify(collaborations));
  })
  
};


function displayCollaborations(){
  
  var data="";
  for(var i=0;i<collaborations.length;i++){
    data+=`
    <div class="col-xl-4 col-md-6 mb-4 ">
        <div class="card card-users border">
          <div  class="h-100 d-flex justify-content-center" >
            <div class="card-body text-body ">
              <div class="user container h-100">
                  <div class="updateDelete" onclick=" collabCardsEditDelete(${i})">
                    <i class="icon fa-solid fa-pen-to-square bg-primary text-white rounded-circle text-center"></i>
                  </div>
                  <div >
                    <div class="avatar h-100 d-flex flex-column align-items-center justify-content-center">
                        <div class="img-container position-relative">
                            <img src=${collaborations[i].src} id="collabPic${i}" class="rounded-2 img-fluid" />
                        <label class="-label d-flex justify-content-center align-items-center rounded-2 position-absolute" for="file${i}">
                          <span>تغيير الصورة</span>
                        </label>
                        <input id="file${i}" type="file" onchange="loadcollab(event,${i})"/>
                        </div>
                      </div>
                  </div>
                  <div class="row user-info content align-items-center justify-content-center pt-4 ">
                    <h5 class="text-center">
                    <span class="text-center">${collaborations[i].name}</span>                          
                    </h5>
                  </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    `
  }

 
  collaborationCard.innerHTML=data;
  
}


function collabCardsEditDelete(id){
  Swal.fire({
    title: 'Delete Or Update',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Update',
    denyButtonText: `Delete`,
  }).then (async(result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      const { value: formValues } = await Swal.fire({
        title: 'تفاصيل التعاون',
        html:
          `<input value="${collaborations[id].name}" id="swal-input1" class="swal2-input w-75" placeholder="اسم التعاون">
          `,
    
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
          ]
        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
      var image = document.getElementById(`collabPic${id}`);
      let coll= await{
        name:formValues[0],
        src: image.src,
      }
      collaborations[id]=coll;      
      localStorage.setItem('collaborations',JSON.stringify(collaborations));    
      displayCollaborations();    
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1000
      })

    } else if (result.isDenied) {
        collaborations.splice(id,1);
        localStorage.setItem("collaborations",JSON.stringify(collaborations));
        displayCollaborations()

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User has been deleted',
          showConfirmButton: false,
          timer: 1000
        })
    }
  })


}


function collaborationsSearch(){
  let data='';
  let searchKey=collaborationSearch.value;

  for(var i=0;i<collaborations.length;i++){
    
    let name=collaborations[i].name;
    
    if(name.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())){
      data+=`
    <div class="col-xl-4 col-md-6 mb-4 ">
        <div class="card card-users border">
          <div  class="h-100 d-flex justify-content-center" >
            <div class="card-body text-body ">
              <div class="user container h-100">
                  <div class="updateDelete" onclick=" collabCardsEditDelete(${i})">
                    <i class="icon fa-solid fa-pen-to-square bg-primary text-white rounded-circle text-center"></i>
                  </div>
                  <div >
                    <div class="avatar h-100 d-flex flex-column align-items-center justify-content-center">
                        <div class="img-container position-relative">
                            <img src=${collaborations[i].src} id="collabPic${i}" class="rounded-2 img-fluid" />
                        <label class="-label d-flex justify-content-center align-items-center rounded-2 position-absolute" for="file${i}">
                          <span>تغيير الصورة</span>
                        </label>
                        <input id="file${i}" type="file" onchange="loadcollab(event,${i})"/>
                        </div>
                      </div>
                  </div>
                  <div class="row user-info content align-items-center justify-content-center pt-4 ">
                    <h5 class="text-center">
                    <span class="text-center">${collaborations[i].name}</span>                          
                    </h5>
                  </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    `
    }
  }
   
  collaborationCard.innerHTML=data;
}
/*################# End Collaborations section ################# */


function clear() {
  for (var i = 0; i < dashboardBtns.length; i++) {
    dashboardBtns.item(i).classList.remove("active");
  }
}

async function addEvent() {
  const { value: formValues } = await Swal.fire({
    title: "تفاصيل الفعالية",
    html: `<input id="swal-input1" class="swal2-input w-75" placeholder="عنوان الفعالية">
       <input id="swal-input2" class="swal2-input w-75" placeholder="شرح عن الفعالية">
       <input id="swal-input3" class="swal2-input w-75" placeholder="تاريخ الفعالية">
       <input id="swal-input4" class="swal2-input w-75" placeholder="موعد الفعالية">
       <select id="swal-input5" class="swal2-input w-75" placeholder="موعد الفعالية">
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Youth">Youth</option>
          <option value="Children">Children</option>
       </select>
       <input id="swal-input6" class="swal2-input w-75" placeholder="سعر الحجز">
       <input id="swal-input7" class="swal2-input w-75" placeholder="#هاشتاج الفعالية">
       `,

    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
        document.getElementById("swal-input3").value,
        document.getElementById("swal-input4").value,
        document.getElementById("swal-input5").value,
        document.getElementById("swal-input6").value,
        document.getElementById("swal-input7").value,
      ];
    },
  });

  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }

  let event = {
    title: formValues[0],
    description: formValues[1],
    date: formValues[2],
    time: formValues[3],
    type: formValues[4],
    price: formValues[5],
    hashtag: formValues[6],
  };

  events.push(event);

  localStorage.setItem("events", JSON.stringify(events));

  displayEvents();

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1000,
  });
}

function displayEvents() {
  let radioFilter = document.getElementsByName("flexRadioDefault");
  var index;
  for (var i = 0; i < radioFilter.length; i++) {
    if (radioFilter[i].checked) {
      index = i;
      break;
    }
  }



  var data = "";

  for (var i = 0; i < events.length; i++) {
    data += `
    <div class="col-xl-4 col-md-12 mb-4 ">
    <div class="card card-events border">
      <a href="#" class="h-100 d-flex justify-content-center" onclick="cardsEditDelete(${i})">
        <div class="card-body text-body">
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <img src="/assets/images/nav_header/blue1.png" class="img-fluid rounded-circle" alt="image not found">
              <button type="button" class="btn hashtag col-4 p-0">#${events[i].hashtag}</button>
            </div>
            <div class="content">
              <h2 class="pt-4">${events[i].title}</h2>
              <p>${events[i].description}</p>
            </div>
            <div class="row pt-3">
              <div class="col-1">
                <i class="fa-regular fa-calendar-days"></i>
              </div>
              <div class="col-10">
                <span>${events[i].date}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <i class="fa-regular fa-clock"></i>
              </div>
              <div class="col-10">
                <span>${events[i].time}</span>
              </div>
            </div>
          </div>
        </div>
      </a>  
    </div>
  </div>
    `;
  }

  eCards.innerHTML = data;
}

function cardsEditDelete(id) {
  Swal.fire({
    title: "Delete Or Update",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Update",
    denyButtonText: `Delete`,
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      const { value: formValues } = await Swal.fire({
        title: "تفاصيل الفعالية",
        html: `<input value="${events[id].title}" id="swal-input1" class="swal2-input w-75" placeholder="عنوان الفعالية">
           <input value="${events[id].description}" id="swal-input2" class="swal2-input w-75" placeholder="شرح عن الفعالية">
           <input value="${events[id].date}" id="swal-input3" class="swal2-input w-75" placeholder="تاريخ الفعالية">
           <input value="${events[id].time}" id="swal-input4" class="swal2-input w-75" placeholder="موعد الفعالية">
           <select id="swal-input5" class="swal2-input w-75">
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Youth">Youth</option>
              <option value="Children">Children</option>
           </select>
           <input value="${events[id].price}" id="swal-input6" class="swal2-input w-75" placeholder="سعر الحجز">
           <input value="${events[id].hashtag}" id="swal-input7" class="swal2-input w-75" placeholder="#هاشتاج الفعالية">
           `,

        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
            document.getElementById("swal-input5").value,
            document.getElementById("swal-input6").value,
            document.getElementById("swal-input7").value,
          ];
        },
      });

      if (formValues) {
        Swal.fire(JSON.stringify(formValues));
      }

      let event = await {
        title: formValues[0],
        description: formValues[1],
        date: formValues[2],
        time: formValues[3],
        type: formValues[4],
        price: formValues[5],
        hashtag: formValues[6],
      }

      events[id] = event

      localStorage.setItem("events", JSON.stringify(events))

      displayEvents();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (result.isDenied) {
      Swal.fire({
        title: "هل تريد حذف ام ارسال تفاصيل الفعالية الى ستيج الذكرى?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "ستيج الذكرى",
        denyButtonText: `تاكيد الحذف`,
      }).then(async(result) => {
        /* Read more about isConfirmed, isDenied below */
        
        if (result.isConfirmed) {

          let pastEvent={
            title:events[id].title,
            description:events[id].description,
            src:"",
          }
          
          const { value: file } = await Swal.fire({
            title: 'Select image',
            input: 'file',
            inputAttributes: {
              'accept': 'image/*',
              'aria-label': 'Upload past event picture'
            }
          })
   
          if (file) {
            const reader = new FileReader()  
            reader.onload = (e) => {
              Swal.fire({
                title: 'Your uploaded picture',
                imageUrl: e.target.result,
                imageAlt: 'The uploaded picture'
              })
              pastEvent.src=e.target.result
              pastEvents.push(pastEvent)
              localStorage.setItem('pastEvents',JSON.stringify(pastEvents))
            }
            reader.readAsDataURL(file)
          }
          Swal.fire("تم الارسال الى ستيج الذكرى", "", "success");
          
        } else if (result.isDenied) {
          events.splice(id, 1);
          localStorage.setItem("events", JSON.stringify(events));
          displayEvents();

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1000,
          });
          Swal.fire("تم الحذف بنجاح", "", "success");
        }
      });
    }
  });
}

function eventsSearch() {
  let data = "";
  let searchKey = eventSearch.value;

  for (var i = 0; i < events.length; i++) {
    if (
      events[i].title
        .toLocaleLowerCase()
        .includes(searchKey.toLocaleLowerCase())
    ) {
      data += `
      <div class="col-xl-4 col-md-12 mb-4 ">
      <div class="card card-events border">
        <a href="#" class="h-100 d-flex justify-content-center" onclick="cardsEditDelete(${i})">
          <div class="card-body text-body">
            <div class="container">
              <div class="row justify-content-between align-items-center">
                <img src="/assets/images/nav_header/blue1.png" class="img-fluid rounded-circle" alt="image not found">
                <button type="button" class="btn hashtag col-4 p-0">#${events[i].hashtag}</button>
              </div>
              <div class="content">
                <h2 class="pt-4">${events[i].title}</h2>
                <p>${events[i].description}</p>
              </div>
              <div class="row pt-3">
                <div class="col-1">
                  <i class="fa-regular fa-calendar-days"></i>
                </div>
                <div class="col-10">
                  <span>${events[i].date}</span>
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <i class="fa-regular fa-clock"></i>
                </div>
                <div class="col-10">
                  <span>${events[i].time}</span>
                </div>
              </div>
            </div>
          </div>
        </a>  
      </div>
    </div>
      `;
    }
  }

  eCards.innerHTML = data;
}



