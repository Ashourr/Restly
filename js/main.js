let nums = document.querySelectorAll(".num");
let section = document.querySelector("#reviews");
let started = false;
let btn = document.querySelector(".top");

window.onscroll = function (){
  if(window.scrollY >= section.offsetTop || window.scrollY >= section.offsetTop-400 ){
    if(!started){
      nums.forEach((num)=> startNums(num));
    }
    started = true;
  }
};

function startNums(el) {
  let goal = el.dataset.goal;
  let count = setInterval( () => {
    el.textContent++;
    if(el.textContent == goal){
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.addEventListener("scroll", ()=>{
  if (window.scrollY >= 600) {
    btn.style.display = "block";
    
  } else {
    btn.style.display = "none";
  }
})

btn.addEventListener("click",()=>{
  window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth",
  })
})