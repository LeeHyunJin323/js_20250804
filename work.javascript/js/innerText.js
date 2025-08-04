var list = document.querySelectorAll(".list li");

for (var el of list ){
    el.addEventListener("click",e =>{
        console.log(e.currentTarget.innerText);

    });
}





















