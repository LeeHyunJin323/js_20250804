var wrap = document.querySelector("#wrap");
var box = wrap.querySelector("article");

// wrap.addEventListener("click", ()=>{
//     box.style.backgroundColor="hotpink";
// });


// wrap.addEventListener("click", ()=>{
//     wrap.classList.add("on");
// });

wrap.addEventListener("click", () => {
    wrap.classList.add("on");

    // isOn = true , false 중 하나 받음 
    // wrap에 on이 있는지 확인 가능
    var isOn = wrap.classList.contains("on");
    console.log(isOn);
});


// wrap.addEventListener("click", () => {

   
//     var isOn = wrap.classList.contains("on");
//     console.log(isOn);
//     if (isOn) {
//         wrap.classList.remove("on");
        
        
//     } else {
//         wrap.classList.add("on");
        
//     }



// });
wrap.addEventListener("click", () => {

   wrap.classList.toggle("on");

});















