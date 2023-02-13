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
    price.innerHTML = `${money} شيكل`;
    if(d1 == '' || d2 == ''){
        price.innerHTML = ` يرجى ادخال تاريخ البدايه و النهايه للاشتراك`;
    }
}



