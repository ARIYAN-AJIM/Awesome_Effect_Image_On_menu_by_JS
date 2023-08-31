const elem = document.querySelectorAll('.elem');


elem.forEach(function(val){
    var child = val.childNodes[3]
    val.addEventListener('mouseenter',function(){
        child.style.opacity = 1;
    })
    val.addEventListener('mouseleave',function(){
        child.style.opacity = 0;
    })
    val.addEventListener('mousemove',function(dets){
        child.style.left = dets.x + 'px';
        child.style.top = dets.y + 'px';
    })
})



