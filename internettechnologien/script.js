const open = document.getElementById("button-open");
const pop_up = document.getElementById("pop-up");
const close = document.getElementById("button-close");

open.addEventListener("click", ()=>{
    pop_up.classList.add("show");
});

close.addEventListener("click", ()=>{
    pop_up.classList.remove("show");
});

function changePage(pageNumber) {
    const allPages=document.querySelectorAll(".page");
    allPages.forEach(page => page.classList.remove("active"));

    const newPage=document.getElementById("page" + pageNumber);
    if(newPage) newPage.classList.add("active");
}
