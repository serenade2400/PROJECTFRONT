const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videconanimation(){
    var videocon = document.querySelector("#videocontainer");
var playbtn = document.querySelector("#play");

videocon.addEventListener("mouseenter", function() {
    gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
        
    });
});

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale: 0,
        opacity:0
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-90,
        top:dets.y-100
    })
})

}
videconanimation()
function loadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.24
    
    }) 
    gsap.from("#page1 video",{
        scale:0.8,
        opacity:0,
        delay:1.4,
        duration:0.3,
       
    
    }) 
}
loadinganimation()