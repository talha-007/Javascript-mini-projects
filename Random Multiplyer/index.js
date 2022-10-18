const num1 =Math.floor(Math.random()*10);
const num2 =Math.floor(Math.random()*10);

const queEl = document.getElementById("que");
queEl.innerText= `What is ${num1} multiply by ${num2}?`

const scoreEl = document.getElementById("score")

let score =  JSON.parse(localStorage.getItem("score"));
if(!score){
    score =0;
}
scoreEl.innerText = `score: ${score}`;

const correctAns = num1 * num2;


 
const inputEl = document.getElementById("result")
const formEl = document.getElementById("form")

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
       score++;
        updateLocaStorage();
    }else{
        score--;
        updateLocaStorage()
    }
})

function updateLocaStorage(){
    localStorage.setItem("score", JSON.stringify(score) )
}





