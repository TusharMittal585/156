AFRAME.registerComponent("coins",{
    init:function(){
        for (var i;i<=10;i++){
            const id=`coin${i}`

            const posX=Math.random() + 10 + -5
            const posY=Math.random() + 5 + -10
            const posZ=Math.random() + 60 + -55
            const position={x:posX, y:posY, z:posZ}
            this.CreateCoins(id,position) 
        }
    },
    CreateCoins:function(id,position){
        const treasureEntity= document.querySelector("#island")
        var coinE1=document.createElement("a-entity")
        coinE1.setAttribute("id",id)
        coinE1.setAttribute("position",position)
        coinE1.setAttribute("material","color","#ff9100")
        coinE1.setAttribute("geometry",{primitive:"circle",radius:1})
        coinE1.setAttribute("animation",{
            property:"rotation",
            to:"0 360 0",
            loop:"true",
            dur:1000
        })
        coinE1.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:2
        })
        treasureEntity.appendChild(coinE1)
    }
}) 