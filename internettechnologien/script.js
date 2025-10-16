const open = document.getElementById("button-open");
const pop_up = document.getElementById("pop-up");
const close = document.getElementById("button-close");

open.addEventListener("click", ()=>{
    pop_up.classList.add("show");
});

close.addEventListener("click", ()=>{
    pop_up.classList.remove("show");
});
