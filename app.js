let user_date = document.getElementById('date');
user_date.max = new Date().toISOString().split("T")[0];
let button = document.querySelector(".main-calculator button");

let days = document.getElementById("day")
let months = document.getElementById("month")
let years = document.getElementById("year")

let result = document.getElementById("result");

button.addEventListener("click", ()=> {

    let birthDate = new Date(user_date.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let d3,m3,y3 = 0;

    y3 = y2 - y1;

    if(m2>m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2>d1) {
        d3 = d2-d1;
    }else{
        m3--;
        d3 = getDaysinmonth(y3,m3) + d2 - d1;
    }

    result.innerHTML = `You are <span>${y3}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> Days old`;
    
})

function getDaysinmonth(year, month) {
    return new Date(year, month, 0).getDate();
}