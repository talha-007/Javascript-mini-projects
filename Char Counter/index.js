const textEl = document.getElementById("text");
const totalEl = document.getElementById("total");
const remainEl = document.getElementById("remain");

textEl.addEventListener("keyup", ()=>{
      totalEl.innerText=textEl.value.length 
      updateCounter()
});

updateCounter()

function updateCounter(){
    remainEl.innerText=textEl.getAttribute("maxlength") - textEl.value.length
}