AFRAME.registerComponent("island-rotation",{
    schema:{
        speedofRotation:{
            type:'number',
            default:0
        }},
        init:function(){
            window.addEventListener("keydown",(e)=>{
                if(e.key==="ArrowRight"){
                    if(this.data.speedofRotation<0.1){
                        this.data.speedofRotation+=0.01
                    }
                }
                if(e.key==="ArrowLeft"){
                    if(this.data.speedofRotation>-0.1){
                        this.data.speedofRotation-=0.01
                    }
                }
            })
        },
        tick:function(){
            var islandRotation=this.el.getAttribute("rotation")
            islandRotation.y+=this.data.speedofRotation
            this.el.setAttribute("rotation",{
            x:islandRotation.x,
            y:islandRotation.y,
            z:islandRotation.z
            }) 
        } 
})


AFRAME.registerComponent("diver-rotation",{
    schema:{
        speedofRotation:{
            type:'number',
            default:0
        },
    speedofAscend:{
        type:'number',
        default:0
    }
    },
        init:function(){
            window.addEventListener("keydown",(e)=>{
                this.data.speedofRotation=this.el.getAttribute("rotation")
                this.data.speedofAscend=this.el.getAttribute("position")
                var diverRotation=this.data.speedofRotation 
                var diverPosition=this.data.speedofAscend
                if(e.key==="ArrowRight"){
                    if(diverRotation.x<10){
                        diverRotation.x+=0.5 
                        this.el.setAttribute("rotation",diverRotation) 
                    }
                }
                if(e.key==="ArrowLeft"){
                    if(diverRotation.x>-10){
                        diverRotation.x-=0.5
                        this.el.setAttribute("rotation",diverRotation)
                    }
                }
                if(e.key==="ArrowUp"){
                    if(diverRotation.z<6){
                        diverRotation.z+=0.5
                        this.el.setAttribute("rotation",diverRotation)
                    }
                    if(diverPosition.y<-4){
                        diverPosition.y+=0.01
                        this.el.setAttribute("position",diverPosition)
                    }
                }
                if(e.key==="ArrowDown"){
                    if(diverRotation.z>-10){
                        diverRotation.z-=0.5
                        this.el.setAttribute("rotation",diverRotation)
                    }
                    if(diverPosition.y>-4){
                        diverPosition.y-=0.01
                        this.el.setAttribute("position",diverPosition)
                    } 
                }
            })
        }
})