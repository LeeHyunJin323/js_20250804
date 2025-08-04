var box = document.querySelector("#box");

// ES5 
// box.addEventListener("mouseenter",function () {
//     this.style.backgroundColor ="hotpink";
    
// });
// box.addEventListener("mouseleave",function () {
//     this.style.backgroundColor ="aqua";
    
// });


// ES6 인수 괄호 생략 버전 이벤트 연결


// box.addEventListener("mouseenter", ()=> {
//     box.style.backgroundColor ="hotpink";
    
// });
// box.addEventListener("mouseleave", ()=> {
//     box.style.backgroundColor ="aqua";
    
// });


// ES7 
box.addEventListener("mouseenter", e=> {
    // box.style.backgroundColor ="hotpink";
    e.currentTarget.style.backgroundColor ="hotpink";
    
});
box.addEventListener("mouseleave", e=> {
    // box.style.backgroundColor ="aqua";
    e.currentTarget.style.backgroundColor ="aqua";
    
});

