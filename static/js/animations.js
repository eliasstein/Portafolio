const tags = document.querySelectorAll(".animate__animated");
const offsetTop=200;
const offsetBottom=200;
let visibility=false;


window.addEventListener('scroll', function() {
    tags.forEach((tag)=>{
        
        var position = tag.getBoundingClientRect();
        var anims = JSON.parse(tag.getAttribute("anim-name"))
        const delay = tag.getAttribute("anim-delay")==undefined ? "1.00s" : tag.getAttribute("anim-delay");
        const loop = tag.getAttribute("anim-loop")==undefined ? "1":tag.getAttribute("anim-loop")
        tag.style.setProperty("--animate-duration",delay);
        
        loop=="infinite"? tag.classList.add("animate__infinite"):tag.style.setProperty("--animate-repeat",loop)
        // checking whether fully visible
        // if(position.top >= 0 && position.bottom <= window.innerHeight) {
        //     visibility=1;
        // }
    
        // checking for partial visibility
        if(position.top < window.innerHeight-offsetTop && position.bottom-offsetBottom >= 0) {
            console.log();
            visibility=true;
        }
        //not visible
        else{
            visibility=false;
        }
        // console.log(delay)
        switch(visibility){
            case false:{
                tag.classList.add("animate__"+anims[0]);
                tag.classList.remove("animate__"+anims[1]);
                break;
            }
            case true:{
                tag.classList.remove("animate__"+anims[0]);
                tag.classList.add("animate__"+anims[1]);
                break;
            }
            // case 1:{
            //     tag.classList.remove("animate__"+anims[0]);
            //     tag.classList.remove("animate__"+anims[1]);
            //     tag.classList.add("animate__"+anims[2]); 
            //     break;
            // }
        }
    })

});


