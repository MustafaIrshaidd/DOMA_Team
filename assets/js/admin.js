let dashboardBtns=document.getElementById("dashboardBtns").getElementsByTagName('a')
let dashboardBtn=document.getElementById("dashboardBtn")
let eventsBtn=document.getElementById("eventsBtn")
let mainContent=document.getElementById("mainContent")
let eventSearch
let eCards

let events=[]

window.onload = ()=>{
  if(localStorage.getItem('events')==null){
    events=[]
  }
  else{
    events=JSON.parse(localStorage.getItem('events'))
  }
}

dashboardBtn.addEventListener('click',function(){
    clear()
    dashboardBtn.classList.add('active')
    data=`
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
    
    `
    mainContent.innerHTML=data;
})

eventsBtn.addEventListener('click',function(){
    clear()
    eventsBtn.classList.add('active')
    var data=`
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
    `

    

    mainContent.innerHTML=data

    eCards=document.getElementById("eCards")
    eventSearch=document.getElementById("eventSearch")

    displayEvents()
    
})

function clear(){
    for(var i=0;i<dashboardBtns.length;i++){
        dashboardBtns.item(i).classList.remove('active')
    }
}

async function addEvent(){
  const { value: formValues } = await Swal.fire({
    title: 'تفاصيل الفعالية',
    html:
      `<input id="swal-input1" class="swal2-input w-75" placeholder="عنوان الفعالية">
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
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value,
        document.getElementById('swal-input3').value,
        document.getElementById('swal-input4').value,
        document.getElementById('swal-input5').value,
        document.getElementById('swal-input6').value,
        document.getElementById('swal-input7').value,
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }



  let event={
    title:formValues[0],
    description:formValues[1],
    date:formValues[2],
    time:formValues[3],
    type:formValues[4],
    price:formValues[5],
    hashtag:formValues[6]
  }

  
  events.push(event)
  
  
  localStorage.setItem('events',JSON.stringify(events));

  displayEvents()

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1000
  })

}

let check=document.getElementsByName("flexRadioDefault")

check.addEventListener('click',function(){
  displayEvents()
})


function displayEvents(){

  let radioFilter=document.getElementsByName("flexRadioDefault")
  var index
  for(var i=0;i<radioFilter.length;i++){
    if(radioFilter[i].checked){
      index=i
      break
    }
  }

  console.log(radioFilter[index])

  

  var data=""

  for(var i=0;i<events.length;i++){
    data+=`
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
    `
  }

 
  eCards.innerHTML=data

  
  
}


function cardsEditDelete(id){
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
        title: 'تفاصيل الفعالية',
        html:
          `<input value="${events[id].title}" id="swal-input1" class="swal2-input w-75" placeholder="عنوان الفعالية">
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
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
            document.getElementById('swal-input4').value,
            document.getElementById('swal-input5').value,
            document.getElementById('swal-input6').value,
            document.getElementById('swal-input7').value,
          ]
        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }

      let event= await{
        title:formValues[0],
        description:formValues[1],
        date:formValues[2],
        time:formValues[3],
        type:formValues[4],
        price:formValues[5],
        hashtag:formValues[6]
      }
    
      events[id]=event
      
      localStorage.setItem('events',JSON.stringify(events));
    
      displayEvents()
    
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1000
      })

    } else if (result.isDenied) {
        events.splice(id,1)
        localStorage.setItem("events",JSON.stringify(events));
        displayEvents()

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1000
        })
    }
  })


}




function eventsSearch(){
  let data='';
  let searchKey=eventSearch.value

  for(var i=0;i<events.length;i++){

    
    if(events[i].title.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())){
      data+=`
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
      `
    }
  }

  eCards.innerHTML=data
}




