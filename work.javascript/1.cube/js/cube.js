// 아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector("#circle");
// 태그명이 article인 요소를 찾아서 저장
const article = document.querySelectorAll("article");


for(let el of article){
    el.addEventListener("mouseenter", e=>{
        circle.style.animationPlayState = "paused";
    });
    el.addEventListener("mouseleave",e=>{
        circle.style.animationPlayState="running";
    });
}



