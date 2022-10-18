const hourEl = document.getElementById("hrs");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const amEl = document.getElementById("am-pm");



function upDateClock(){
    let h= new Date().getHours()
    let m =  new Date().getMinutes()
    let s  =  new Date().getSeconds()
    let am  =  "AM"
    if(h>12){
        h= h-12
        am = "PM"
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<12 ? "0" + s : s;
    hourEl.innerText=h;
    minEl.innerText=m;
    secEl.innerText=s;
    amEl.innerText = am;
    setTimeout(()=>{
        upDateClock()
    },1000)
}

upDateClock()