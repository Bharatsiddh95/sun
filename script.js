const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




//  page3 ka code =>

var elemC =   document.querySelector("#elem-contener")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",()=>{
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",()=>{
    fixed.style.display = "none"
})

let elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`

    })
})


